import React, { useEffect, useState } from 'react';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import logo from "../../../access/img/logo.svg";
import publicApi from "../../../api/publicApi";
import { signOut } from "../../../redux-toolkit/slice/auth"
import "./style.scss";


function Header(props) {
    const [genres, setGenres] = useState([]);
    const [countries, setCountries] = useState([]);
    const dispatch = useDispatch();
    const isAuthenticate = useSelector(state => state.auth.authenticate)
    const username = useSelector(state => state.auth.user.username)

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await publicApi.getCountries();
                setCountries(response.countries);
            } catch (error) {
                console.log("Falsed to fetch categories list", error);
            }
        }
        fetchCountries();
    }, []);


    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const response = await publicApi.getGenres();
                setGenres(response.genres);

            } catch (error) {
                console.log("Falsed to fetch categories list", error);
            }
        }
        fetchGenres();

    }, []);
    const years = [2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015];
    const phimBo = [
        {name: "Phim bộ Anh", name_URL: "anh"},
        {name: "Phim bộ Hàn Quốc", name_URL: "han-quoc"},
        {name: "Phim bộ Mỹ", name_URL: "my"},
        {name: "Phim bộ Trung Quốc", name_URL: "trung-quoc"},
        {name: "Anime", name_URL: "anime"},
        {name: "Gameshow", name_URL: "gameshow"},
        {name: "TV Shows", name_URL: "tv-shows"},
        {name: "Clip ngắn", name_URL: "clip-ngan"},
        
    ]

    const handleUserLogout = () => {
        const action = signOut();
        dispatch(action)
    }

    return (

        <Navbar collapseOnSelect expand="lg" fixed='top' variant="dark" className='menu-top'>
            <Link to="/" style={{ marginLeft: "15px" }}>
                <Navbar.Brand>
                    <img
                        src={logo}
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
            </Link>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="main-menu">
                    <NavDropdown title="Phim lẻ" id="phimle-dropdown" className='nav-dropdown-item' >
                        {
                            years.map(
                                (item, index) => {
                                    return <Link to={`/phim-le/${item}`} key={index} className="dropdown-item">Phim lẻ {item}</Link>
                                }

                            )
                        }
                    </NavDropdown>
                    <NavDropdown title="Phim bộ" id="phimbo-dropdown" className="nav-dropdown-item">
                        {
                            phimBo.map(
                                (item, index) => {
                                    return <Link to={`/phim-bo/${item.name_URL}`} key={index} className="dropdown-item">{item.name}</Link>
                                }

                            )
                        }
                    </NavDropdown>
                    <NavDropdown title="Quốc gia" id="quociga-dropdown" className="nav-dropdown-item">
                        {
                            countries.map(
                                (item, index) => {
                                    return <Link to={`/quoc-gia/${item.name_URL}`} key={index} className="dropdown-item">{item.name}</Link>
                                }
                            )
                        }
                    </NavDropdown>
                    <NavDropdown title="Thể loại" id="theloai-dropdown" className="nav-dropdown-item">
                        {
                            genres.map(
                                (item, index) => {
                                    return <Link to={`/the-loai/${item.name_URL}`} key={index} className="dropdown-item">{item.name}</Link>
                                }
                            )
                        }
                    </NavDropdown>
                </Nav>
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
                <Nav className="me-auto">
                    
                    {
                     isAuthenticate ?
                     (

                        <NavDropdown menuVariant="dark" title={username} id="account-dropdown" className=" nav-item">
                            <Link to="/tai-khoan" className="dropdown-item">Tài khoản</Link>
                            <Link to="/" className="dropdown-item" onClick={handleUserLogout}>Đăng xuất</Link>
                        </NavDropdown>
                     )
                    :
                        (<NavDropdown menuVariant="dark" title="Tài khoản" id="account-dropdown" className=" nav-item">
                            <Link to="/dang-nhap" className="dropdown-item">Đăng nhập</Link>
                            <Link to="/dang-ky" className="dropdown-item">Đăng ký</Link>
                        </NavDropdown>)
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;