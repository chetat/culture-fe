import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../../actions/moviesAction';
import MovieCard from '../../components/MovieCard';
import { EditorBorderLeft } from 'material-ui/svg-icons';



const MovieList = () => {

    const [sortType, setSortType] = useState('year');
    const [order, setOrder] = useState('asc');

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchMovies())
    }, [])


    const movies_years = useSelector(state => state.movies.movies)
    
    //Helper function to sort array of objects by given attribute
    function compareValues(key, order = 'asc') {
        console.log(key)
        return function innerSort(a, b) {
          if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            // property doesn't exist on either object
            return 0;
          }
      
          const varA = (typeof a[key] === 'string')
            ? a[key].toUpperCase() : a[key];
          const varB = (typeof b[key] === 'string')
            ? b[key].toUpperCase() : b[key];
      
          let comparison = 0;
          if (varA > varB) {
            comparison = 1;
          } else if (varA < varB) {
            comparison = -1;
          }
          return (
            (order === 'desc') ? (comparison * -1) : comparison
          );
        };
      }
 /*     function sortObject(obj) {
        return Object.keys(obj).sort().reduce(function (result, key) {
            result[key] = obj[key];
            return result;
        }, {});
    }
*/
function sortObjectEntries(obj){
    const sortedArr = Object.entries(obj).sort((a,b)=>b[0]-a[0])
    console.log(Object.fromEntries(sortedArr))
    return sortedArr
}
    const showMovies = (movies_data, sortYear) => {
        const years = []
        const cat_movies = movies_data.reduce((accu, movie) => {
            let year = movie.year;

            if (!accu[year]) {
                accu[year] = { movies: [movie] }
            } else {
                accu[year].movies.push(movie)
            }
            return accu;
        }, {})
       /* const sortObjKeysAlphabetically = (obj) => Object.fromEntries(Object.entries(obj).sort((a,b)=>b[0]-a[0]));
        console.log(sortObjKeysAlphabetically(cat_movies))
        console.log(sortObject(cat_movies))  */

        let iterData = []
        if (sortType === "year" && order === "asc") {
            iterData = Object.entries(cat_movies) 
        } else {
            iterData = sortObjectEntries(cat_movies)
        }

        for (const [key, value] of iterData) {
            years.push(<MovieCard movies={value} year={key} ord="asc" />)
        }
        if (years.length > 0) {
            return (
                <div>
                    <Row className="my-5">
                        <Col lg={3}>
                            <div class="input-group mb-3">
                                <div className="input-group-prepend">
                                    <label class="input-group-text" for="inputGroupSelect01">Sort By</label>
                                </div>
                                <select onChange={
                                    (e) => setSortType(e.target.value)
                                } className="custom-select" id="inputGroupSelect01">
                                    <option value="year">Year</option>
                                    <option value="title">Title</option>
                                    <option value="duration">Duration</option>
                                </select>
                            </div>

                        </Col>

                        <Col lg={3}>
                        <div class="input-group mb-3">
                                <div className="input-group-prepend">
                                    <label className="input-group-text" for="inputGroupSelect02">Order</label>
                                </div>
                                <select onChange={
                                    (e) => setOrder(e.target.value)
                                }
                                 className="custom-select" id="inputGroupSelect02">
                                <option value="asc">Ascending</option>
                                <option value="desc">Descending</option>
                                </select>
                            </div>
                        </Col>
                    </Row>
                    <h2 className="mt-5">Movies Releases</h2>
                    {years}
                </div>
            )
        } else {
            return (
                <h3 className="my-5">Movies Not Available</h3>
            )
        }
    }


    
    const sortedByTitle = (movies, sortType, order) =>{
        const sorted = movies.sort(compareValues(sortType, order))
        console.log(movies)
        console.log("After Sort")
        console.log(sorted)
        return showMovies(sorted);
    }


   
    return sortedByTitle(movies_years, sortType, order)
}

export default MovieList;