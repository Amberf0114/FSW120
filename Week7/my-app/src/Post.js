
function Post(props){
    console.log(props)
    return(
        <div>
            <div>{props.post.postContent}</div>
            <div>By:{props.post.authorName}</div>
        </div>
    )
}

export default Post