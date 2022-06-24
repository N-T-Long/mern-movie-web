import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from "./Sidebar"
AdminLayout.propTypes = {
    
};

function AdminLayout(props) {
    return ( 
        <>  <div className="row">
        </div>
            <Sidebar/>
            <div className="content-admin" style={{position: "absolute", top: "0", left: "15%", backgroundColor: "#2c3034", minHeight: "100vh",minWidth: "calc(85%)", borderLeft: "solid 3px #34383c"}}>
                {props.children}
                
            </div>
            
        </>
    );
}

export default AdminLayout;