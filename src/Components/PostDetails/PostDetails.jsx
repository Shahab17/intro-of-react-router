import { useLoaderData } from "react-router-dom";



const PostDetails = () => {
    const postDetails = useLoaderData()
    const { id, title, body } = postDetails;
    return (
        <div>
            <h4>Post Details {id} </h4>
            <h3> {title} </h3>
            <p><small>{body}</small></p>
        </div>
    );
};

export default PostDetails;