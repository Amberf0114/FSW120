import React from 'react'
import data from './data'
import BlogpostProps from './BlogpostProps'

function Blogpost() {
    const Blogpost_Components = data.map(dataFunction => <BlogpostProps title={dataFunction.title} subTitle={dataFunction.subTitle} author={dataFunction.author} date={dataFunction.date} />)
    return (
        <div>
            {Blogpost_Components}
        </div>
    )
}
export default Blogpost