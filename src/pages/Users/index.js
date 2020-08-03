import React from 'react';
import { Container } from "react-bootstrap";
import UsersList from '../../containers/UsersList';

import './styles.css'

const Users = () => {
    return (
        <div>
            <Container className="my-5">
                <UsersList />
            </Container>
        </div>
    )
};

export default Users;