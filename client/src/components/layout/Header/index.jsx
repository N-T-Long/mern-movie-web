import React, { useEffect, useState } from 'react';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import logo from "../../../access/img/logo.svg";
import publicApi from "../../../api/publicApi";
import "./style.scss";


function Header(props) {
    const [genres, setGenres] = useState([]);
    const [categories, setCategories] = useState([]);
    const [countries, setCountries] = useState([]);
    
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
    },[]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await publicApi.getCategories();
                setCategories(response.categories);
            } catch (error) {
                console.log("Falsed to fetch categories list", error);
            }
        }
        fetchCategories();
    },[]);
    
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

    },[]);
    const years = [2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015];
    const 
    
    return (

        <Navbar collapseOnSelect expand="lg" fixed='top'  variant="dark" className='menu-top'>
            <Link to="/" style={{marginLeft : "15px"}}>
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
                        <NavDropdown  title="Phim lẻ" id="phimle-dropdown" className='nav-dropdown-item' >
                                {
                                    years.map(
                                        (item, index) => {
                                            return <Link to={`/phim-le/${item}`} key={index} className="dropdown-item">Phim lẻ {item}</Link>}
                                    
                                    )
                                }
                        </NavDropdown>
                        <NavDropdown  title="Phim bộ" id="phimbo-dropdown" className="nav-dropdown-item">
                            {
                                years.map(
                                    (item, index) => {
                                        return <Link to={`/phim-le/${item}`} key={index} className="dropdown-item">{item}</Link>}
                                
                                )
                            }
                        </NavDropdown>
                        <NavDropdown title="Quốc gia" id="quociga-dropdown"className="nav-dropdown-item">
                            {
                                countries.map(
                                    (item, index) => {
                                    return <Link to={`/quoc-gia/${item.name_URL}`} key={index} className="dropdown-item">{item.name}</Link>}
                                )
                            }
                        </NavDropdown>
                        <NavDropdown  title="Thể loại" id="theloai-dropdown"className="nav-dropdown-item">
                            { 
                                genres.map(
                                    (item, index) => {
                                    return <Link to={`/the-loai/${item.name_URL}`} key={index} className="dropdown-item">{item.name}</Link>}
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
                        <NavDropdown menuVariant="dark" title="Tài khoản" id="account-dropdown" className=" nav-item">                            
                                <Link to={"/dang-nhap" }className="dropdown-item">Đăng nhập</Link> 
                                <Link to={"/dang-ky" }className="dropdown-item">Đăng ký</Link>  
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;