 

const Post = ({postData}) => {
    const {id, title}= postData;
    const postStyle = {
        border: '1px solid gray',
        padding: '15px',
        margin: '20px',
        borderRadius: '12px'
    }

    return (
        <div style={postStyle}>
            <h3>post id: {id} </h3>
            <p>{title} </p>
        </div>
    );
};

export default Post;