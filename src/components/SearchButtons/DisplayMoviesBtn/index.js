import React from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";


const displayMovies = (props) => {
    return <Button className="btn btn-primary" onClick={props.displayMovies}>Movies Archive</Button>;
}


export default  displayMovies;