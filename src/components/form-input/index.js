import React from 'react'

const index = ({ type, id, className, autoComplete }) => {
    return (
        <input type={type} id={id} className={className} autoComplete={autoComplete}></input>
    )
}

export default index
