import React from 'react'
import Data from './data.json'
import './SuperHero.css'

class SuperHero extends React.Component{
    
    render(){
        return(
            <div className='super-hero'>
                {Data.map((detail, index)=> {

                    return(
                        <div className='wrapper'>
                            <h1 id='name' onClick={()=> alert(detail.catchPhrase)} >{detail.name}</h1>
                            <img id ='image'src={detail.imageName} onClick={()=> alert(detail.catchPhrase)} />
                        </div>
                    )
                })}
            </div>
        )
    }
    
}

export default SuperHero