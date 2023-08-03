import React from 'react';
import colorNames from 'colornames';

export const Input = ({colorValue,setColorValue,setHexValue,isDarkText,setIsDarkText}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <label>Add Color Name:</label>
            <input
                type='text'
                required
                autoFocus
                placeholder='Add Color Value'
                value={colorValue}
                onChange={(e)=>{
                    setColorValue(e.target.value);
                    setHexValue(colorNames(e.target.value))
                }}
            >
            </input>
            <button
                type='button'
                onClick={(e)=>setIsDarkText(!isDarkText)}
            > Toggle Text Color
            </button>
    </form>
  )
}
export default Input
