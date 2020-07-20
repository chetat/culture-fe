
import React from 'react';
import { Card, Col, Row } from "react-bootstrap";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.css';


const UserCard = (props) => {

  const { users_prop, initial } = props;
  const {users} = users_prop
  return (

    <div>
      <h3 className="my-5">{initial}</h3>
      <Row>

        {users && users.map((user) => {
          return <Col lg={3} className="my-2">
            <Card className="user-card">
              <Link to={"/users/detail/" + user.id + "/" + user.name} style={{ "color": "inherit", "textDecoration": "none" }}>
                <Card.Img variant="top" src={user.cover_url} />
                <Card.Body>
                  <Card.Title className="movie-title">Name: {user.name}</Card.Title>
                  <Card.Title className="movie-title">AKA: {user.other_name}</Card.Title>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        })}
      </Row>

    </div>
  );
}

UserCard.propTypes = {
  props: PropTypes.shape({
    image_url: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })
}

export default UserCard;