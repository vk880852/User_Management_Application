import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setUsers(response.data);
            } catch (error) {
                setError('Failed to fetch users');
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) return <div className="text-center">Loading...</div>;
    if (error) return <div className="alert alert-danger">{error}</div>;

    return (
        <div className="container">
            <h1 className="my-4">User List</h1>
            <Link to="/create" className="btn btn-primary mb-3">Create New User</Link>
            <div className="list-group">
                {users.map(user => (
                    <div key={user.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                            <h5 className="mb-1">{user.name}</h5>
                            <p className="mb-1">Email: {user.email}</p>
                            <p className="mb-1">Phone: {user.phone}</p>
                        </div>
                        <div>
                            <Link to={`/user/${user.id}`} className="btn btn-info btn-sm me-2">Details</Link>
                            <Link to={`/edit/${user.id}`} className="btn btn-warning btn-sm me-2">Edit</Link>
                            <button className="btn btn-danger btn-sm" onClick={() => handleDelete(user.id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    async function handleDelete(userId) {
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`);
            setUsers(users.filter(user => user.id !== userId));
        } catch (error) {
            setError('Failed to delete user');
        }
    }
};

export default UsersList;
