import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { movieActions } from '../../../../redux-toolkit/slice/movie';
import Comment from "../Comment";
import "./style.scss";
CommentSection.propTypes = {
};

function CommentSection(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const comments = useSelector(state => state.movie.commentsMovieSlelected);
    const isLoggedIn  = useSelector(state => state.auth.isLoggedIn)
    const movieID = useSelector(state => state.movie._id)
    const { register,setValue, handleSubmit, formState: { errors } } = useForm({ mode: "onBlur" });


    const commentOption = {
        comment: { required: "Bạn chưa nhập nội dung bình luận" },}



    const handleComment = (data) =>{
        if (isLoggedIn && data)
        {   

            dispatch(movieActions.addNewComment({content: data.comment, movieID: movieID}));
            setValue("comment","")
        }
        if (!isLoggedIn) {
            alert("Bạn chưa đăng nhập. Vui lòng đăng nhập trước khi bình luận");
            navigate("/dang-nhap")
        }

    }

    return (
        <div className="comment-section">
                    <div className="section-title">
                        <h3>Comment</h3>
                    </div>
            <div className="container">
                <div className="comment-list">
                    {
                        comments ? comments.map( (comment, index) => (
                            <Comment key={index} content={comment.body} create_at={comment.create_at} URL_avatar={comment.user.URL_avatar} username={comment.user.username} />
                        )) : <></>
                    }
                </div>
                <Form className='comment-create'>
                        <Form.Control 
                            as="textarea" 
                            name="comment"
                            className="text-input-comment" 
                            {...register("comment",commentOption.comment)} 
                            />
                    <Button  className="btsubmit "
                        style={{width: "150px", marginTop: "20px"}}
                        variant="info"
                        type="submit"
                        onClick={handleSubmit(handleComment)}
                        >
                            Bình luận
                        </Button>
                </Form>

            </div>
        </div>
    );
}

export default CommentSection;