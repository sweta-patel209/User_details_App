import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const Dashboard = () => {
    const [users, setUsers] = useState(null);
    const history = useHistory();

    useEffect(() => {
        getAllUsersData();
    }, [])

    const getAllUsersData = async () => {
        try {
            let response = await axios.get(
                ` https://jsonplaceholder.typicode.com/users`
            );
            setUsers(response.data);
        } catch (error) {
            console.log('error while fetching Users data', error);
        }
    }

    const PostsDetails = (id) => {
        history.push(`/PostsDetail/${id}`);
    }

    return (
        <div>
            <table className="table table-striped table-hover">
                <thead className='table-primary'>
                    <tr >
                        <th style={{ width: '100px' }} scope="col">User ID</th>
                        <th style={{ width: '100px' }} scope="col">Name</th>
                        <th style={{ width: '150px' }} scope="col">Username</th>
                        <th style={{ width: '250px' }} scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users?.map((data, index) =>
                        <tr key={index} onClick={() => PostsDetails(data.id)}>
                            <th scope="row">
                                {data.id}
                            </th>
                            <td scope="row">
                                {data.name}
                            </td>
                            <td>{data.username}</td>
                            <td>{data.email}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Dashboard
