import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import useForm from 'react-hook-form'

import { Icon, Button, message } from 'antd';

// styles
import './style.css';

// models
import { fetchEmployer, editEmployer } from '../../../models/employees';

// components
import PageTitle from '../../../components/PageTitle';
import Loader from '../../../components/Loader';
import CustomInput from '../../../components/CustomInput';

export const EditEmployer = () => {
    const { register, handleSubmit, errors } = useForm();
    const [employer, setEmployer] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        if (!employer) {
            getEmployer();
        }
    });
    
    const onSubmit = async (employer) => {
        try {
            await editEmployer(employer, id);
            message.success('The employer data has been changed!');
        } catch(error) {
            message.error(errors);
        }
    }

    const getEmployer = async () => {
        try {
            const response = await fetchEmployer(id);
            const { employee_name: name, employee_salary: salary, employee_age: age } = response;
            setEmployer({ name, salary, age });
        } catch(error) {
            message.error(error);
        }
    };

    if(!employer) {
        return <Loader/>
    }

    return (
        <section className="container">
           <PageTitle title={`Edit Employ: ${id}`}/>
           <Link to="/crud-interface">
                <Button>
                    Back To List <Icon type="rollback" />
                </Button>
            </Link>
            <form className="EditEmployer__form" onSubmit={handleSubmit(onSubmit)}>
                <CustomInput>
                    <input
                        defaultValue={employer.name}
                        name="name"
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Name" 
                        ref={register({
                            required: 'This field cannot be blank!'
                        })}/>
                    <p>{errors.name && errors.name.message}</p>
                </CustomInput>
                <CustomInput>
                    <input
                        defaultValue={employer.salary}
                        name="salary"
                        prefix={<Icon type="info" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="number"
                        placeholder="Salary" 
                        ref={register({
                            required: 'This field cannot be blank!'
                        })}/>
                    <p>{errors.salary && errors.salary.message}</p>
                </CustomInput>
                <CustomInput>
                    <input
                        defaultValue={employer.age}
                        name="age"
                        prefix={<Icon type="money-collect" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="number"
                        placeholder="Age" 
                        ref={register({
                            required: 'This field cannot be blank!'
                        })}/>
                    <p>{errors.age && errors.age.message}</p>
                </CustomInput>
                <div className="EditEmployer__button">
                    <Button type="primary" htmlType="submit">
                        Update Employ
                    </Button>
                </div>
            </form>
        </section>
    );   
}

export default EditEmployer;