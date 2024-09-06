import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import UsersList from './UsersList';
import CreateUser from './CreateUser';
import EditUser from './EditUser';
import UserDetails from './UserDetails';

const App = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
                <Link className="navbar-brand" to="/">User Management</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/create">Create User</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<UsersList />} />
                <Route path="/create" element={<CreateUser />} />
                <Route path="/edit/:id" element={<EditUser />} />
                <Route path="/user/:id" element={<UserDetails />} />
            </Routes>
        </div>
    );
};

export default App;
