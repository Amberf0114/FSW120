import React from 'react'


function BlogpostProps(props) {
    return (
        <div>
            <h3 className='title'>{props.title}</h3>
            <p className='subtitle'>{props.subTitle}</p>
            <p className='author'>Posted by {props.author} on {props.date}</p>
        </div>
    )
}

export default BlogpostProps