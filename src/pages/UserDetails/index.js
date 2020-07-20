import React from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchUser } from '../../actions/usersAction';
import PropTypes from 'prop-types';
import './styles.css'
import MovieCard from '../../components/MovieCard';
import { Link } from 'react-router-dom';

const UserDetails = (props) => {
    const userId = props.match.params.userId;
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUser(userId))
    }, [])


    const { user, movies_appeared } = useSelector(state => state.user.user_data)
    console.log(movies_appeared)

    const render_actor = (user) => {
        console.log(user)
        if (typeof user !== "undefined") {
            return (
                <div>
                   
                    <Container>
                        <h2 className="text-center py-5">User infos</h2>
                        <Row>
                            <Col lg={6}>
                                <h5>Name: {user.name}</h5>
                                <h5>Biography :</h5>
                                <p>{user.bio}</p>
                                <h5>Also Known As : {user.aka}</h5>
                            </Col>
                            <Col>
                            <h5>Movies Featured</h5>

                            <Row>
                            {
                                movies_appeared && movies_appeared.length > 0 ? movies_appeared.map((movie, index) => (
                                    <Col lg={6}>
                                        <MovieCard {...movie} key={index} />
                                    </Col>
                                )) : <div> <h2>No other Movie</h2> </div>
                            }
                            </Row>
                            
                            </Col>
                            <Col>
                            <h5>Music Featured</h5>

                            <Row>
                            {
                                movies_appeared && movies_appeared.length > 0 ? movies_appeared.map((movie, index) => (
                                    <Col lg={6}>
                                        <MovieCard {...movie} key={index} />
                                    </Col>
                                )) : <div> <h2>No other Movie</h2> </div>
                            }
                            </Row>
                            
                            </Col>
                        </Row>
                        <Link to="/#" className="btn btn-primary">Return To Homepage</Link>
                    </Container>
                </div>
            )
        } else {
            return (
                <h2>User Not Found</h2>
            )
        }

    }
    return (
        <div>
            {render_actor(user)}
        </div>
    )
};
UserDetails.propTypes = {
    match: PropTypes.object.isRequired,

}

export default UserDetails;