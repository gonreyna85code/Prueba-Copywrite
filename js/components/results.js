import React from 'react'


export default function Results(props) {
    return (
        <div>
            <h1>Results</h1>
            <ul>
                {props.props.map((result, index) => {
                    return <li key={index}>{result.text} {result.reversed} {result.palindrome}</li>
                }
                )}
            </ul>
        </div>
    );
}