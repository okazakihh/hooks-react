
import  {useState} from 'react';
import PropTypes from 'prop-types';
import Resultado from './Resultado';
import { operaciones } from '../helpers/Operaciones';

const Number_input = ({name}) => {
     const [numeros, setNumeros] = useState({
        numero1:0,
        numero2:0,
    });
   

    const {
        handleChange,
        suma,
        resta,
        multi,
        divi,
        numero1,
        numero2,
      } = operaciones(numeros, setNumeros);
       
    
  
      return (
        <>
          <label className="mx-2 ">
            Número 1:{" "}
            <input
            className=" bolt"
              name="numero1"
              value={numero1}
              onChange={handleChange}
              type="number"
            />
          </label>
          <br />
          <label className="mx-2 ">
            Número 2:{" "}
            <input
            className=" bolt"
              name="numero2"
              value={numero2}
              onChange={handleChange}
              type="number"
            />
          </label>

         <br />
      <Resultado operacion="Suma" calculo={suma()}  />
      <Resultado operacion="Resta" calculo={resta()} />
      <Resultado operacion="Multiplicación" calculo={multi()} />
      <Resultado operacion="División" calculo={divi()} />
        </>
    )
}

Number_input.propTypes = {
    name:PropTypes.string,
}

export default Number_input
