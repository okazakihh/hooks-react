import React, { useRef } from 'react'

const Ref = () => {

    const ref = useRef(null);

    const handleRef = () =>{
        ref.current.value = "Referencia hecha con react"
        
    }
    return (
        <>
          <h1 onClick={handleRef}>useRef</h1>  
          <hr />
          <textarea ref={ref} placeholder="Escribe un mensaje..."></textarea>
        </>
    );
}

export default Ref
