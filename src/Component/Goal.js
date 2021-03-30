import React from 'react';
import { Link } from 'react-router-dom';


function Goal(props) {
/* 
    function handleClick() {
        props.showTitle(props.titleObj)
     } */
    
    
    return (
    <section>
        <Link to="/TargetList">Target</Link>
        <div className='more-info'>
            <h3>{props.titleObj.title}</h3>
          {/*  <button onClick={handleClick}>mer info</button> */}
        </div>
    </section>
    ) 
}

export default Goal
