import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from "./Sidebar"
AdminLayout.propTypes = {
    
};

function AdminLayout(props) {
    return ( 
        <>  
            <Sidebar/>
            <div className="content-admin" style={{marginLeft: "300px", backgroundColor: "#2c3034", minHeight: "929px", borderLeft: "solid 3px #34383c"}}>
                {props.children}
                
            </div>
            
        </>
    );
}

export default AdminLayout;