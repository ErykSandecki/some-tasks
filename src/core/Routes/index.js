import React from 'react';
import { Switch, Route } from "react-router-dom";

// components
import Palindrome from '../../views/Palindrome';
import Decoder from '../../views/Decoder';
import Calculator from '../../views/Calculator';
import CrudInterface from '../../views/CrudInterface';
import CreateEmployer from '../../views/CrudInterface/CreateEmployer';
import EditEmployer from '../../views/CrudInterface/EditEmployer';

export const Routes = () => (
    <Switch>
        <Route exact path="/" component={Palindrome}/>
        <Route path="/decoder" component={Decoder}/>
        <Route path="/calculator" component={Calculator}/>
        <Route exact path="/crud-interface" component={CrudInterface}/>
        <Route path="/crud-interface/add" component={CreateEmployer}/>
        <Route path="/crud-interface/edit/:id" component={EditEmployer}/>
    </Switch>
);

export default Routes;