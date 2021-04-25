import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import useForm from 'react-hook-form'

import { Icon, Button, message } from 'antd';

// styles
import './style.css';

// models
import { createEmployer } from '../../../models/employees';

// components
import PageTitle from '../../../components/PageTitle';
import CustomInput from '../../../components/CustomInput';

export const CreateEmployer = () => {    
    const { register, handleSubmit, errors } = useForm();
    const [redirect, setRedirect] = useState(false);

    async function onSubmit(employer) {
        try {
            await createEmployer(employer);
            setRedirect(true);
            message.success('The employer data has been added!');
        } catch(error) {
            message.error(error);
        }
    }

    if (redirect === true) {
        return <Redirect push to="/crud-interface" />
    }
   
    return (
        <section className="container">
           <PageTitle title="Create Employ"/>
           <Link to="/crud-interface">
                <Button>
                    Back To List <Icon type="rollback" />
                </Button>
            </Link>
            <form className="CreateEmployer__form" onSubmit={(handleSubmit(onSubmit))}>
                <CustomInput>
                    <input
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
                        name="age"
                        prefix={<Icon type="money-collect" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="number"
                        placeholder="Age" 
                        ref={register({
                            required: 'This field cannot be blank!'
                        })}/>
                    <p>{errors.age && errors.age.message}</p>
                </CustomInput>
                <div className="CreateEmployer__button">
                    <Button type="primary" htmlType="submit">
                        Create Employ
                    </Button>
                </div>
            </form>
        </section>
    );   
}

export default CreateEmployer;