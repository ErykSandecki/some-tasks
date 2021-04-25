import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Popconfirm, message } from 'antd';
import { EmployeesContext } from '../../views/CrudInterface/';

// styles
import './style.css';

// models
import { deleteEmployer } from '../../models/employees';

export const ListEmployees = ({ employees, limit }) => {    
    const { Consumer } = EmployeesContext;

    const onDelete = async (id, fetchEmployees) => {
        try {
            await deleteEmployer(id);
            message.success('The employer has been deleted!');
            fetchEmployees();
        } catch(error) {
            message.error(error);
        }
    }  

    if (employees.length === 0) {
        return <h2 className="ListEmployees__empty">No data!</h2>
    }

    return (
        <Consumer>
            {fetchEmployees =>
                <table className="ListEmployees__table">
                    <thead className="ListEmployees__thead">
                        <tr className="thead__tr">
                            <th className="thead__th" scope="col">Name</th>
                            <th className="thead__th" scope="col">Age</th>
                            <th className="thead__th" scope="col">Salary</th>
                            <th className="thead__th" scope="col">Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.slice(0, limit).map((employ) => (
                            <tr key={employ.id} className="tbody__tr">
                                <th className="tbody__th" scope='row'>
                                    {employ.employee_name}
                                </th>
                                <td className="tbody__td">
                                    {employ.employee_age}
                                    </td>
                                <td className="tbody__td">
                                    {employ.employee_salary}
                                </td>
                                <td className="tbody__td">
                                    <Link to={`/crud-interface/edit/${employ.id}`}>
                                        <Button 
                                            className="td__button" 
                                            shape="circle" 
                                            icon="edit" 
                                            size="large">
                                        </Button>
                                    </Link>
                                    <Popconfirm 
                                        onConfirm={() => onDelete(employ.id, fetchEmployees)} 
                                        title="Are you sure?" 
                                        okText="Yes" 
                                        cancelText="No"
                                    >
                                        <Button className="td__button" type="danger" shape="circle" icon="delete" size="large"/>
                                    </Popconfirm>
                                </td>
                            </tr>
                            )
                        )}
                    </tbody>
                </table>
            }
        </Consumer>
    );   
}

export default ListEmployees;