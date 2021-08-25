import * as React from "react";
import { List, Datagrid, TextField, EmailField, Edit, Create, SimpleForm, TextInput, EditButton } from 'react-admin';

export const AdminList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="username" />
            <EmailField source="email" />
            <TextField source="password" />
        </Datagrid>
    </List>
);
const AdminName = ({ record }) => {
    return <span>Post {record ? `"${record.name}"` : ''}</span>;
};
export const AdminEdit = (props) => (
    <Edit title={<AdminName />} {...props}>
        <SimpleForm>
            <TextInput source="username"  />
            <TextInput source="email" />
            <TextInput source="password"/>
            <EditButton basePath="/admins" />
        </SimpleForm>
    </Edit>
);

export const AdminCreate = (props) => (
    <Create title="Create a Post" {...props}>
        <SimpleForm>
            <TextInput source="username"  />
            <TextInput source="email" />
            <TextInput source="password" />
        </SimpleForm>
    </Create>
);