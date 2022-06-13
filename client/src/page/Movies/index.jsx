import React , {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import MovieList from "../../components/Movie/MovieList"
import publicApi from "../../api/publicApi"
import {Form, Row, Col } from "react-bootstrap"
import {Select} from "react-select"
import {useForm, controller, set} from "react-hook-form"
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

PageMovieList.propTypes = {
    type_movie: PropTypes.string,

    
};



function PageMovieList(props) {
    const [param, setParam ] = useState({})
    const [movies, setMovies] = useState([]);
    const countries = useSelector(state => state.public.countries)
    const genres = useSelector(state => state.public.genres)
    const years = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022]
    const { register, handleSubmit, formState: { errors } , control} = useForm()

    useEffect(() => {
        const getMovies = async () => {
            console.log(param);
            const res = await publicApi.getMovies(param);
            setMovies(res.movies)
        }
        getMovies();
        console.log("rerender");
    },[param])
    
    return (
        
        <div className="container" style={{marginTop: "100px"}}>   
            <Form>
            <Row className="mb-3">

                <Form.Group  as={Col} md="4">
                <Form.Label style={{color: "#febb00"}}>Quốc gia</Form.Label>
                    <Form.Select
                        {...register('country')}
                        onChange={(e) => {
                            const newParam = {...param, "country": e.target.value };
                            setParam(newParam);
                        }
                        }
                    >   
                        <option value=""> Tất cả</option>
                        {
                            countries?.map((country, index) => 
                                <option key={index} value={country._id}>{country.name}</option>
                            )
                        }
                    </Form.Select>

                </Form.Group>

                <Form.Group as={Col} md="4">
                    <Form.Label style={{color: "#febb00"}}>Quốc gia</Form.Label>
                    <Form.Select
                        {...register('genres')}
                        onChange={(e) => {
                            const newParam = {...param, "genres": e.target.value };
                            setParam(newParam);
                            }
                        }   
                    >   
                        <option value=""> Tất cả</option>
                        {
                            genres?.map((genre, index) => 
                                <option key={index} value={genre._id}>{genre.name}</option>
                            )
                        }
                    </Form.Select>
                </Form.Group>

                <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                    <Form.Label style={{color: "#febb00"}}>Năm sản xuất</Form.Label>
                    <Form.Select
                        {...register('year')}
                        onChange={(e) => {
                            const newParam = {...param, "year": e.target.value };
                            setParam(newParam);
                            }
                        }   
                    >   
                        <option year=""> Tất cả</option>
                        {
                            years?.map((year, index) => 
                                <option key={index} value={year}>{year}</option>
                            )
                        }
                    </Form.Select>
                </Form.Group>
                </Row>
            </Form>
            <MovieList movieList={movies} movieListTitle="Phim lẻ"/>
        </div>
    );
}

export default PageMovieList;