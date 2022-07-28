import React from "react";
import Results from './results';
import axios from 'axios';



function InputBar() {
    var [state, setState] = React.useState("");
    var [results, setResults] = React.useState([]);

    function submit(e) {
        e.preventDefault();
        axios.get(`/iecho?text=${state}`).then((res, err) => {
            if (err) {
                console.log(err);
            } else {
                let result = results.concat(res.data);
                setResults(result);
            }
        }
        );
        setState("");
    }

    return (

        <div>
            <nav className="navbar">
                <div class="input-group">
                    <form onSubmit={submit}>
                        <div className="row">
                            <div className="col-md-8">
                                <input type="text" className="form-control" value={state} onChange={(e) => setState(e.target.value)} />
                            </div>
                        </div>
                    </form>
                </div>
                <button type="submit" onClick={submit} className="btn btn-primary">Submit</button>
            </nav>
            <Results props={results} />
        </div>
    );
}

export default InputBar;
