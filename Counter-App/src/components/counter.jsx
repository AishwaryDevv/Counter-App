import React from 'react';
import './Counter.css';

const Counter =()  =>{
return ( 
    <div className="counter">
     <h1>Counter Component</h1>
        <div className="counter-flash">
            <div className="counter-card"> 
                <p id='para'>You have Clicked 0 times!!!</p>
                <button id='btn'>Click Me</button>
            </div>
       </div>
   </div> 
)
}


export default Counter;