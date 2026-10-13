import React from 'react'

function Button() {
  return (
    <div>
        <button type="button" onClick={() => alert('Button clicked!')} 
        className="border-2 border-solid border-blue-900 bg-pink-500 rounded-lg px-2 py-1 text-white hover:bg-pink-700 transition duration-300">
            Click Me
        </button>
    </div>
  )
}

export default Button