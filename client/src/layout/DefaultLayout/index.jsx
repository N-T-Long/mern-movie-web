import React from 'react';
import PropTypes from 'prop-types';
import Header from "../../components/layout/Header"
import Footer from "../../components/layout/Footer"


DefaultLayout.propTypes = {
    
};

function DefaultLayout(props) {
    return (
        <div>
            <Header/>
            <div className="content">
                {props.children}
            </div>
            <Footer/>
        </div>
    );
}

export default DefaultLayout;