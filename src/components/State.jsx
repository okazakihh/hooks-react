import { useState, useEffect } from 'react'

const State = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, setState] = useState(0);

    useEffect(() => {
        console.log(state);
    }, [])


    const handleClick = () => {
        setState(state + 1)
    }
    return (
        <div className="container text-center">
            <h1>useEffect</h1>
            <hr />
            cuenta:{state}
            <button onClick={handleClick}>+1</button>
        </div>
    );
};

export default State
