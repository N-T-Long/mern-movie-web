import React from 'react';
import PropTypes from 'prop-types';

CommentSection.propTypes = {
    Comments : PropTypes.array,
};

function CommentSection(props) {
    return (
        <div className="comment-section">
            <div className='comment-create'>
                <input type="text" />   
                <button className="submit-comment">Đăng</button>
            </div>
            <div className="comment-list">
                <div className="comment">
                    <div className="row">
                        <div className="col-12 col-md-2 preview-user">
                            <img src="" alt="" className="avatar-preview" />
                        </div>
                        <div className="col-12 col-md-10 comment-content">
                            <p className="user-name">long</p>
                            <p>content</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CommentSection;