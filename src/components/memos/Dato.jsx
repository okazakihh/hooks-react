import {memo} from 'react'

const Dato = ({value}) => {
    console.log("Renderizado de nuevo");
    return (
        <p>
         {value}   
        </p>
    )
}

export default memo(Dato);
