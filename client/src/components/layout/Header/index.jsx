import React, { useEffect, useState } from 'react';
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import logo from "../../../access/img/logo.svg";
import publicApi from "../../../api/publicApi";
import { authActions } from '../../../redux-toolkit/slice/auth';
import "./style.scss";
import {useForm} from "react-hook-form";
import {useNavigate,createSearchParams} from "react-router-dom";

function Header(props) {
    const dispatch = useDispatch();
    const isLoggedIn =  useSelector(state => state.auth.isLoggedIn);
    const currentUser = useSelector(state => state.auth.currentUser);
    const genres = useSelector(state => state.public.genres)
    const countries = useSelector(state => state.public.countries)
    const { register, handleSubmit, formState: { errors } , control} = useForm();
    const navigate = useNavigate();


    // Default list odd movie
    const years = [2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015];

    // Default list series movie
    const phimBo = [
        {name: "Phim bộ Anh", name_URL: "anh"},
        {name: "Phim bộ Hàn Quốc", name_URL: "han-quoc"},
        {name: "Phim bộ Mỹ", name_URL: "my"},
        {name: "Phim bộ Trung Quốc", name_URL: "trung-quoc"},
        {name: "Phim bộ Nhật Bản", name_URL: "anh"},
        {name: "Phim bộ Thái Lan", name_URL: "han-quoc"},
        
    ]


    const handleUserLogout = () => {

        dispatch(authActions.logout())
    }
    
    const handleSubmitSearch = (data) => {

        let name = data.name;
        function change_alias(alias) {
            var str = alias;
            str = str.trim();
            str = str.toLowerCase();
            str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a");
            str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e");
            str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i");
            str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o");
            str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u");
            str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y");
            str = str.replace(/đ/g,"d");
            str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
            str = str.replace(/ + /g," ");
            str = str.replace(/ /g,"-");
            str = str.trim();
        
            return str;
        }
        navigate({pathname: "/tim-kiem", search: `?${createSearchParams({
            name: change_alias(name)
                })}`
         })

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
                                    return <Link to={`/phim-le/${item}`} type_movie="phimle" year={item} key={index} className="dropdown-item">Phim lẻ {item}</Link>
                                }

                            )
                        }
                    </NavDropdown>
                    <NavDropdown title="Phim bộ" id="phimbo-dropdown" className="nav-dropdown-item">
                        {
                            phimBo.map(
                                (item, index) => {
                                    return <Link to={`/phim-bo/${item.name_URL}`} type_movie="phimbo" key={index} className="dropdown-item">{item.name}</Link>
                                }

                            )
                        }
                    </NavDropdown>
                    <NavDropdown title="Quốc gia" id="quociga-dropdown" className="nav-dropdown-item">
                        {
                            (countries) ?
                                countries.map(
                                    (item, index) => {
                                        return <Link to={`/quoc-gia/${item.name_URL}`} key={index} className="dropdown-item">{item.name}</Link>
                                    }
                                )
                            :
                            <></>
                        }
                    </NavDropdown>
                    <NavDropdown title="Thể loại" id="theloai-dropdown" className="nav-dropdown-item">
                        {
                            genres ? 
                            genres.map(
                                (item, index) => {
                                    return <Link to={`/the-loai/${item.name_URL}`} key={index} className="dropdown-item">{item.name}</Link>
                                }
                            )
                            : 
                            <></>
                        }
                    </NavDropdown>
                </Nav>
                <Form onSubmit={handleSubmitSearch} className="d-flex form-search">
                    <FormControl
                        type="search"
                        {...register("name")}
                        placeholder="Nhập từ khóa"
                        className="search-input"
                    />
                    <Button onClick={handleSubmit(handleSubmitSearch)} type="submit" variant="outline-success" className="search-submit">
                        <i className="bi bi-search"></i>
                    </Button>
                </Form>
                <Nav className="me-auto">
                        
                        <div className="user-avatar-nav nav-item">
                            {
                                currentUser?.URL_avatar ? (<img src={currentUser.URL_avatar}/>) : (<i className="bi bi-person-circle"></i>)
                            }
                         </div>
                        <NavDropdown menuVariant="dark" title={currentUser?.username ? currentUser.username : "Tài khoản"} id="account-dropdown" className=" nav-item">
                           {
                               isLoggedIn ? (
                                    <>
                                        <Link to="/tai-khoan" className="dropdown-item">Tài khoản</Link>
                                        <Link to="/phim-yeu-thich" className="dropdown-item">Phim yêu thích</Link>
                                        <Link to="/" className="dropdown-item" onClick={handleUserLogout}>Đăng xuất</Link>
                                    </>
                                   ) 
                                   : 
                                   (
                                    <>
                                       <Link to="/dang-nhap" className="dropdown-item">Đăng nhập</Link>
                                       <Link to="/dang-ky" className="dropdown-item">Đăng ký</Link>
                                    </>
                                       
                                )
                           }

                        </NavDropdown>
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;