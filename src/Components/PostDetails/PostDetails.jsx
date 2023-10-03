import { useLoaderData, useNavigate } from "react-router-dom";



const PostDetails = () => {
    const postDetails = useLoaderData()
    const { id, title, body } = postDetails;
    const navigate = useNavigate()
    const handleGoBack=()=>{
        navigate(-1)
    }
    return (
        <div>
            <h4>Post Details {id} </h4>
            <h3> {title} </h3>
            <p><small>{body}</small></p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;