import React from 'react'
// event handler for functions
function FunctionClick() {
    function clickHandler() {
        console.log('buttonclicked')
    }
        
    return (
        <div style={{ color: 'white' }}>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick