import React from 'react'

export default function Movie(props){
    return(
        <div>
            <h1>{props.title}</h1>
            <img src={props.poster} />
            <h2>Released : {props.release}</h2>
            <p>{props.plot}</p>
        </div>
    )
}