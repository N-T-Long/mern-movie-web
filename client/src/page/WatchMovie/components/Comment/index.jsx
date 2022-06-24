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
                        {(props.URL_avatar)? 
                        <img src={props.URL_avatar} alt=""  />
                        : 
                        <i className="bi bi-person-fill" style={{fontSize : "57px"}}></i>
                    }
                    </div>

                </div>
                <div className="col-12 col-md-11 comment-content">
                    <div className="row">
                        <p className="preview-user-name col-12 col-md-1">{props.username}</p>
                        <p className="col-12 col-md-10" style={{fontSize : "14px", color: "#8f8f8f"}}>{props.create_at.replace("T", " ").slice(0,19) }  </p>
                    </div>
                    <p>{props.content}</p>
                </div>
            </div>
            
        </div>
    );
}

export default Comment;