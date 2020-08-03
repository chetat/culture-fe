import  React from 'react';
import { Container } from "react-bootstrap";
import MusicList from '../../containers/MusicList';

import './styles.css'

const Music = () => {
    return (
        <div>
            <div>
                <Container className="my-5">
                        <MusicList />
                </Container>

            </div>
        </div>
    )
};

export default Music;