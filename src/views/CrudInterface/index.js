import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Button, Icon, message } from 'antd';

// styles
import './style.css';

// models
import { fetchEmployess } from '../../models/employees';

// components
import Header from '../../components/PageTitle';
import ListEmployees from '../../components/ListEmployees';
import Loader from '../../components/Loader';

export const EmployeesContext = React.createContext([]);

export const CrudInterface = () => {
    const [employees, setEmployees] = useState(null);
    const [limit, setLimit] = useState(10);
    const { Provider } = EmployeesContext;
    
    useEffect(() => {
        if (!employees) {
            fetchEmployees();
        }
    });
    
    const fetchEmployees = async () => {
        try {
            const data = await fetchEmployess();
            setEmployees(data);
        } catch(error) {
            message.error(error);
        }
    };

    return (
        <Provider value={fetchEmployees}>
            <section className="container">
                <Header title="Crud Interface"/>
                <Link to="/crud-interface/add">
                    <Button type="primary">
                        Create <Icon type="user-add" />
                    </Button>
                </Link>
                {!employees ? <Loader/> : <ListEmployees employees={employees} limit={limit}/>}
                
                <div className="CrudInterface__more">
                    <Button 
                        className={!employees ? 'hidden' : ''}
                        type="primary" 
                        onClick={() => setLimit(limit + 10)}>
                        Show More
                    </Button>
                </div>
            </section>
        </Provider>
    );
}

export default CrudInterface;