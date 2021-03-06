import * as React from "react";
import { List, Datagrid, TextField, EmailField, Edit, Create, SimpleForm, TextInput, EditButton } from 'react-admin';

export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
            <TextField source="phone" />
        </Datagrid>
    </List>
);
const UserName = ({ record }) => {
    return <span>Post {record ? `"${record.name}"` : ''}</span>;
};
export const UserEdit = (props) => (
    <Edit title={<UserName />} {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="username"  />
            <TextInput source="email" />
            <TextInput source="phone" />
            <EditButton basePath="/users" />
        </SimpleForm>
    </Edit>
);

export const UserCreate = (props) => (
    <Create title="Create a Post" {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="username"  />
            <TextInput source="email" />
            <TextInput source="phone" />
        </SimpleForm>
    </Create>
);