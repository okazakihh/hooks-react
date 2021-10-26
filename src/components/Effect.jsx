import { useEffect, useState } from "react"

const Effect = () => {
    const [state, setstate] = useState(0);
    const evento = (e) => {
        console.log("moviendo");
    }

    useEffect(() => {
        if (state === "123") {
            window.addEventListener("mousemove", evento)
        }
        return () => {
            window.removeEventListener("mousemove", evento)
            console.log("detenido");
        };
    }, [state]);

    const handleSubmit = (e) => {
        e.preventDefault();


    }
    return (
        <>
            <h1>useEffect</h1>
            <hr />
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Search</label>
                    <input type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        value={state}
                        onChange={(e) => setstate(e.target.value)} />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </>
    );

};
export default Effect
