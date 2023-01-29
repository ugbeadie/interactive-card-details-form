import React from 'react';

const Input = ({name,placeholder}) => {
    return (
    <div>
        <h3>{name}</h3>
        <input 
        type='text' 
        placeholder={placeholder}/>
    </div>
    )
}

export default Input;