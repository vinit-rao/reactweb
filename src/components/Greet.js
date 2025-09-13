import React from 'react'

export const Greet = (props) => {
    console.log(props)
    return <h1>Howdy {props.name}</h1>
}

export default Greet