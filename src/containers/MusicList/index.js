import React, { useEffect } from 'react';
import { Container} from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAlbums } from '../../actions/albumsAction';
import AlbumCard from '../../components/AlbumCard';


const MusicList = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAlbums())
    }, []);


    const albums = useSelector(state => state.albums.albums);

    const showMusic = (albums_data) => {
        const years = []
        const cat_albums = albums_data.reduce((accu, album) => {
            let year = album.year;
            
            if (!accu[year]) {
                accu[year] = {albums: [album]}
            }else {
                accu[year].albums.push(album)
            }
            return accu;
        }, {})
        console.log(cat_albums)
        for (const [key, value] of Object.entries(cat_albums)) {
            years.push(<AlbumCard albums={value} year={key} />)

        }
        if (years.length > 0) {
            return (
                <Container>
                            <h2 className="mt-5">Music Releases</h2>
                            {years}
                </Container>

            )
            } else {
                return (
                    <h3 className="my-5">Music Not Available</h3>
                )
            }
    };

    return (
        showMusic(albums)
    )
}

export default MusicList;