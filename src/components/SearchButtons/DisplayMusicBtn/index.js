import React from 'react';
import { Button } from "react-bootstrap";


const displayMusic = (props) => {
    return <Button className="btn btn-primary" onClick={props.displayMusic}>Music Archive</Button>;
}


export default  displayMusic;