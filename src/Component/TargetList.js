import React from 'react'
import { Link } from 'react-router-dom';

function TargetList(props) {

    console.log(props)
        
    /* function handleChange(){
        props.removeTitle('')
        
    } */


    return (
       <section>
           <Link to="/Goal">Goal</Link>

           <h4>{props.theTitleData.description}</h4>
             {props.theTitleData.targets.map(target => 
            <p key={target.code}><b>{target.code}</b> <br/>{target.title}</p>)}
            {/* <button onClick={handleChange}>Stäng</button> */}
        </section>
        

         
    )
}

export default TargetList
