import React from 'react';
import PropTypes from 'prop-types';
import "./style.scss"
Pagination.propTypes = {
    
};

function Pagination(props) {
    return (
        <div className="pagination-custom">
            <div aria-label="Page navigation ">
                <ul class="pagination justify-content-center">
                    <li class="page-item disabled">
                    <a class="page-link">Trước</a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                    <a class="page-link" href="#">Next</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Pagination;