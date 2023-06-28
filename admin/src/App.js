import React, {useState} from 'react';
import {Admin, Resource, List, Datagrid, TextField} from 'react-admin';
import {socket} from "./socket";

const UserList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id"/>
            <TextField source="web_page_url"/>
        </Datagrid>
    </List>
);

const App = () => {
    const [users, setUsers] = useState([])
    const myDataProvider = {
        getList: (data) => {
            return new Promise((resolve, reject) => {

                if (data !== 'users') {
                    const parsedResponse = data;

                    let response = {
                        data: parsedResponse,
                        total: parsedResponse.length,
                    }
                    resolve(response);
                } else {
                    resolve({data: users, total: users.length})
                }
            })
        }
    };

    socket.on('user_data', (data) => {
        setUsers(data)
        myDataProvider.getList(data);
    });

    return <Admin dataProvider={myDataProvider}>
        <Resource name="users" list={UserList}/>
    </Admin>
}


export default App;

