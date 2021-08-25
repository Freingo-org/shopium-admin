import * as React from "react";
import { Admin, Resource } from 'react-admin';
import { UserCreate, UserEdit, UserList } from "./users/Users";
import jsonServerProvider from 'ra-data-json-server';
import Login from "./login/Login";
import { AdminCreate, AdminEdit, AdminList } from "./users/Admins";
//import authProvider from "./authProvider";



const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const authProvider=()=>{return Promise.resolve();}
const App = () => (
    <Admin loginPage={Login} authProvider={authProvider} dataProvider={dataProvider}>
        <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} />
        <Resource name="admins" list={AdminList} edit={AdminEdit} create={AdminCreate} />
    </Admin>
);

export default App;