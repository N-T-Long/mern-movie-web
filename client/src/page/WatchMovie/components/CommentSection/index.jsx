import React from 'react';
import PropTypes from 'prop-types';
import "./style.scss"

CommentSection.propTypes = {
    Comments : PropTypes.array,
};

function CommentSection(props) {
    return (
        <div className="comment-section">
                    <div className="section-title">
                        <h3>Comment</h3>
                    </div>
            <div className="container">
                <form className='comment-create'>
                    <textarea className='text-input-comment' type="text" />   
                    <button type="submit"  className="submit-comment">Đăng</button>
                </form>
                
                <div className="comment-list">
                    <div className="comment">
                        <div className="row" >
                            <div className="col-12 col-md-1 preview-user">
                                <div className="preview-user-avatar">
                                    <img src="https://static.247phim.com/165095/conversions/62948cc830b42_lava2022-435_627.jpg" alt=""  />
                                </div>
                            </div>
                            <div className="col-12 col-md-11 comment-content">
                                <p className="preview-user-name">ngyen thanh long</p>
                                <p>contentaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="comment">
                        <div className="row" >
                            <div className="col-12 col-md-1 preview-user">
                                <div className="preview-user-avatar">
                                    <img src="https://static.247phim.com/165095/conversions/62948cc830b42_lava2022-435_627.jpg" alt=""  />
                                </div>
                            </div>
                            <div className="col-12 col-md-11 comment-content">
                                <p className="preview-user-name">ngyen thanh long</p>
                                <p>contentaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="comment">
                        <div className="row" >
                            <div className="col-12 col-md-1 preview-user">
                                <div className="preview-user-avatar">
                                    <img src="https://static.247phim.com/165095/conversions/62948cc830b42_lava2022-435_627.jpg" alt=""  />
                                </div>
                            </div>
                            <div className="col-12 col-md-11 comment-content">
                                <p className="preview-user-name">ngyen thanh long</p>
                                <p>contentaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                            </div>
                        </div>
                        
                    </div>

                    <div className="comment">
                        <div className="row" >
                            <div className="col-12 col-md-1 preview-user">
                                <div className="preview-user-avatar">
                                    <img src="https://static.247phim.com/165095/conversions/62948cc830b42_lava2022-435_627.jpg" alt=""  />
                                </div>
                            </div>
                            <div className="col-12 col-md-11 comment-content">
                                <p className="preview-user-name">ngyen thanh long</p>
                                <p>contentaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                            </div>
                        </div>
                        
                    </div>

                    <div className="comment">
                        <div className="row" >
                            <div className="col-12 col-md-1 preview-user">
                                <div className="preview-user-avatar">
                                    <img src="https://static.247phim.com/165095/conversions/62948cc830b42_lava2022-435_627.jpg" alt=""  />
                                </div>
                            </div>
                            <div className="col-12 col-md-11 comment-content">
                                <p className="preview-user-name">ngyen thanh long</p>
                                <p>contentaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                            </div>
                        </div>
                        
                    </div>

                    <div className="comment">
                        <div className="row" >
                            <div className="col-12 col-md-1 preview-user">
                                <div className="preview-user-avatar">
                                    <img src="https://static.247phim.com/165095/conversions/62948cc830b42_lava2022-435_627.jpg" alt=""  />
                                </div>
                            </div>
                            <div className="col-12 col-md-11 comment-content">
                                <p className="preview-user-name">ngyen thanh long</p>
                                <p>contentaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                            </div>
                        </div>
                        
                    </div>

                    <div className="pagination-comment">
                        <div aria-label="Page navigation ">
                            <ul className="pagination justify-content-center">
                                <li className="page-item disabled">
                                <a className="page-link">Previous</a>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item">
                                <a className="page-link" href="#">Next</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CommentSection;