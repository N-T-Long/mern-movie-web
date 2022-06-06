import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from "../../components/layout/Sidebar"
AdminLayout.propTypes = {
    
};

function AdminLayout(props) {
    return ( 
        <>
            <Sidebar/>
            {props.children}
        </>
    );
}

export default AdminLayout;