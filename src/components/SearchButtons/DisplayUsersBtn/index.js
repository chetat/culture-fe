import React from 'react';
import { Button } from "react-bootstrap";


const displayUsers = (props) => {
    return <Button className="btn btn-primary" onClick={props.displayUsers}> Users Directory </Button>;
}
export default  displayUsers;