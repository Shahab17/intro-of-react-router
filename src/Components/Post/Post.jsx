import { Link, useNavigate } from "react-router-dom";



const Post = ({ postData }) => {
    const { id, title } = postData;

    const navigate = useNavigate()

    const postStyle = {
        border: '1px solid gray',
        padding: '15px',
        margin: '20px',
        borderRadius: '12px'
    }

    const handleClickButton = () => {
        navigate(`/post/${id}`)
    }

    return (
        <div style={postStyle}>
            <h3>post id: {id} </h3>
            <p>{title} </p>
            <Link to={`/post/${id}`}>Post Details</Link>
            <Link to={`/post/${id}`}><button>SPD</button></Link>
            <button onClick={handleClickButton}>Click To See Details</button>
        </div>
    );
};

export default Post;