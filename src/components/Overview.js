import React from "react";

export class Overview extends React.Component {
 
    render(){
        console.log(this.props)
        return(
             
            <ul>
                {this.props.tasksArr.map((task,i)=> <li key={i}>{task}</li>)}
            </ul>
            
        ) 

    }

}

