import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from "./component/sidebar"
import "./style.scss"
Admin.propTypes = {
    
};

function Admin(props) {
    return (
        <div className='admin'>
            <h1 style={{padding: "300px"}}>Admin PAGE</h1>
        </div>
    );
}

export default Admin;