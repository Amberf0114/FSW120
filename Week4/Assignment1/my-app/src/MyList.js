import React from 'react'

function MyList(props){
    return(
        <ol>
            {props.items.map(item => <li key={item}> {item}</li>)}
        </ol>
    )
}

export default MyList  