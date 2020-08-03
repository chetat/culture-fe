
import React from 'react';
import { Card, Col, Row } from "react-bootstrap";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.css';


const AlbumCard = (props) => {

  const { albums } = props.albums
  if (typeof albums !== "undefined") {
    return (
      <div>
        <h3 className="my-5">{props.year}</h3>
        <Row>
          {albums && albums.map((album) =>
            <Col lg={3} className="my-2">
              <Card className="album-card">
                <Link to={"/albums/detail/" + album.id + "/" + album.title} style={{ "color": "inherit", "textDecoration": "none" }}>
                  <Card.Img variant="top" src={album.cover_url} />
                  <Card.Body>
                    <Card.Title className="album-title">{album.album_name}</Card.Title>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">{album.release_date}</small>
                  </Card.Footer>
                </Link>
              </Card>
            </Col>
          )}
        </Row>

      </div>
    );
  }

}

AlbumCard.propTypes = {
  props: PropTypes.shape({
    image_url: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })
}

export default AlbumCard;