import React from 'react'
import './BlogPost.css'
import Post from './Post'
// import axios from 'axios'

class BlogPost extends React.Component {
    constructor(){
        super()
            this.state= {
                postContent: '',
                authorName: '',
                posts: [
                    {postContent: 'Is anyone else feeling angry?', authorName: 'Joe'},
                    {postContent: 'Gang green is very contagious.', authorName: 'Jane'},
                    {postContent: '2030 is the new 2012', authorName: 'John'}
                ]
            }
            this.handleChange = this.handleChange.bind(this)
            this.handleClick = this.handleClick.bind(this)
            
    }

    handleChange = (e) => {
        e.preventDefault()

        const {name,value} = e.target
        this.setState({
            [name] : value
        })
    }

    handleClick = (e) => {
        e.preventDefault()
        let postData = {
            postContent : this.state.postContent,
            authorName: this.state.authorName
        }
        this.setState({
            posts : [postData, ...this.state.posts],
            postContent: '',
            authorName: ''
        })
        }
        // if(this.state.postContent.length > 0 
        //     && this.state.authorName.length > 0){
        //         const completePost = [...this.state.completePost]
        //         completePost.push(this.state.postContent + ' By: ' + this.state.authorName)
               
        //         this.setState({completePost})

        //         this.setState({postContent: ''})
        //         this.setState({authorName: ''})

        //         console.log(completePost)
        // }}    
 // SET VALUES BACK TO EMPTY XXX
        

    render(){
        return(
            <div>
                <form id='form' onSubmit={this.handleClick}>
                    <textarea 
                        name='postContent' 
                        className='newPost' 
                        type='text' 
                        placeholder='Create a Post' 
                        onChange={this.handleChange} 
                        value={this.state.postContent} 
                    ></textarea>
                    <br />
                    <label>Author's Name: </label>
                    <input 
                        name='authorName' 
                        type='text' 
                        onChange={this.handleChange} 
                        value={this.state.authorName} 
                        required
                    />
                    <button 
                        type='submit' 
                        name='submit'
                        >Publish
                    </button>

                </form>
                
                {this.state.posts.map((post, index) => 
                    <div key={index}>
                        <Post postContent={post.postContent.value} authorName={post.authorName.value}/>
                    </div>
                )}

            </div>
        )
    }

}

export default BlogPost

//onClick={document.getElementById('form').value=''}