import * as React from "react";
import { Admin, Resource,AUTH_LOGIN } from 'react-admin';
import { UserList } from "./users/Users";
import jsonServerProvider from 'ra-data-json-server';
import Login from "./login/Login";
import authProvider from "./authProvider";



const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
    <Admin loginPage={Login} authProvider={authProvider} dataProvider={dataProvider}>
        <Resource name="users" list={UserList} />
    </Admin>
);

export default App;