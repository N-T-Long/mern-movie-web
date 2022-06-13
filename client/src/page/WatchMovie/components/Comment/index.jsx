import React from 'react';
import PropTypes from 'prop-types';

Comment.propTypes = {
    URL_avatar: PropTypes.string,
    username: PropTypes.string,
    content: PropTypes.string
};

function Comment(props) {
    return (
        <div className="comment">
            <div className="row" >
                <div className="col-12 col-md-1 preview-user">
                    <div className="preview-user-avatar">
                        <img src={props.URL_avatar} alt=""  />
                    </div>
                </div>
                <div className="col-12 col-md-11 comment-content">
                    <p className="preview-user-name">{props.username}</p>
                    <p>{props.content}</p>
                </div>
            </div>
            
        </div>
    );
}

export default Comment;