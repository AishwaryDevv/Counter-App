import React, {useState} from 'react';
import './Counter.css';

const Counter =()  =>{

    const [countby1,setCountby1] = useState(0);
    const [countby10,setCountby10] = useState(0);
return ( 
    <div className="counter-container">
     <h1>Counter Component</h1>   
     <div className="counter-wrapper">
    <div className="reset">
      <button className="resetBtn" onClick={() => {setCountby1(0); setCountby10(0);}}>🔄</button>
    </div>
     <div className="counter">
        <div className="counter-flash">
            <div className="counter-card"> 
                <p id='para'>You have Clicked {countby1} times!!!</p>
                <p id='para'>Increase By 1</p>
                <div className="button-row">
                <button className='btn' onClick={()=> setCountby1(countby1+1)}>+</button>
                    <button className='btn' 
                            onClick={()=> {
                                if(countby1>=1)
                                    {
                                        setCountby1(countby1-1)
                                    } else{
                                        setCountby1(0) 
                                    }}}
                    >-</button>
                </div>
            </div>
       </div> 
       <div className="counter-flash">
            <div className="counter-card"> 
                <p id='para'>You have Clicked {countby10} times!!!</p>
                <p id='para'>Increase By 10</p>
                <div className="button-row">
                    <button className='btn' onClick={()=> setCountby10(countby10+10)}>+</button>
                    <button className='btn' 
                            onClick={()=> {
                                if(countby10>=10)
                                    {
                                        setCountby10(countby10-10)
                                    } else{
                                        setCountby10(0) 
                                    }}}
                    >-</button> 
                </div>
            </div>
       </div>
   </div> 
   </div>
   </div>
)
}


export default Counter;