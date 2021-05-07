import React from 'react'

class Die extends React.Component {
    constructor(props){
        super()
    }

    selected = ()=> {
        this.props.selected(this.props.selected(this.props.key))
    }

    render(){
        return(
            <div id= {this.props.id} onClick = {this.selected(this.props.id)}>{this.props.num}</div>
        )
    }
    
}

export default Die