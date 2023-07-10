import React from 'react'
import styles from '../css/Home.css'
function Home() {
  return (
    
    <div className='calculator-grid'>
      <h1> calculator</h1>
        <div className='output'>
            <div className='previous-operand'></div>
            <div className= 'current-operand'></div>
        </div>
            <button className='span-two'>AC</button>
            <button >DEL</button>
            <button >/</button>
            <button >1</button>
            <button >2</button>
            <button >3</button>
            <button >*</button>
            <button >4</button>
            <button >5</button>
            <button >6</button>
            <button >+</button>
            <button >7</button>
            <button >8</button>
            <button >9</button>
            <button >.</button>
            <button >0</button>
            <button className='span-two' >=</button>
            
    </div>
  )
}

export default Home