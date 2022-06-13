import React from 'react';
import PropTypes from 'prop-types';
import "./style.scss"
import { Row, Col, Tab, Nav, NavItem, Form, Button } from 'react-bootstrap';
Profile.propTypes = {

};

function Profile(props) {

    return (
        <div className='container'>
            <div className='row user-profile'>
                <div className='col-md-9 col-12'>
                    <div className='row left'>
                        <Tab.Container id="left-tabs" defaultActiveKey="profile">
                            <Row>
                                <Col sm={3}>
                                    <Nav variant="pills" className="relative-column">
                                        <Nav.Link eventKey="profile" className="name-title">Tài khoản</Nav.Link>
                                        <Nav.Link eventKey="password" className="name-title">Đổi mật khẩu</Nav.Link>
                                    </Nav>
                                </Col>
                                <Col sm={9}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="profile">
                                            <div className='title-cate'>
                                                <span>Thông tin tài khoản</span>
                                            </div>
                                            <ul className='profileForm'>
                                                <Form id="profileForm">
                                                    <li>
                                                        <Form.Label>Username</Form.Label>
                                                        <Form.Label>bachga123</Form.Label>
                                                    </li>
                                                    <li>
                                                        <Form.Label>Họ tên</Form.Label>
                                                        <input type="text" name="name" placeholder='họ và tên'></input>
                                                    </li>
                                                    <li>
                                                        <Form.Label>Phone</Form.Label>
                                                        <input type="text" name="phone" placeholder='số điện thoại'></input>
                                                    </li>
                                                    <li>
                                                        <Form.Label>Email</Form.Label>
                                                        <input type="text" name="email" placeholder='email'></input>
                                                    </li>
                                                    <Button type="button" id="btnProfile" className="btn-orange" data-toggle="modal" data-target="#success-modal">Lưu lại</Button>
                                                </Form>
                                            </ul>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="password">
                                            <div className='title-cate'>
                                                <span>Đổi mặt khẩu</span>
                                            </div>
                                            <ul className='profileForm'>
                                                <Form id="profileForm">
                                                    <li>
                                                        <Form.Label>Mật khẩu hiện tại</Form.Label>
                                                        <input type="password" name="name" placeholder='**********'></input>
                                                    </li>
                                                    <li>
                                                        <Form.Label>Mật khẩu mới</Form.Label>
                                                        <input type="password" name="phone" placeholder='Mật khẩu mới'></input>
                                                    </li>
                                                    <li>
                                                        <Form.Label>Nhập lại mật khẩu mới</Form.Label>
                                                        <input type="password" name="email" placeholder='Nhập lại mật khẩu mới'></input>
                                                    </li>
                                                    <Button type="button" id="btnProfile" className="btn-orange" data-toggle="modal" data-target="#success-modal">Đổi mật khẩu</Button>

                                                </Form>
                                            </ul>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </div>
                </div>
            </div>
        </div >

    );
}

export default Profile;