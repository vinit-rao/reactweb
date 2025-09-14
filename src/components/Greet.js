import React from 'react'

const Greet = (props) => {
    const {name} = props
    return (
        <div style={{ color: 'white' }}>
            <h1>
                Howdy {name}
            </h1>
        </div>
    )
}

export default Greet