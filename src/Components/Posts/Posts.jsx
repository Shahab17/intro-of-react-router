import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";
import './posts.css'
 

const Posts = () => {
    const posts = useLoaderData()
    return (
        <div>
            <h3>share your feelings!! {posts.length}</h3>
            <div className="posts">
                {
                    posts.map( postInfo => <Post key={postInfo.id} postData={postInfo} ></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;