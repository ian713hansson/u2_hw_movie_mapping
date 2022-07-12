import React from "react"

export default function Genre(props){
    let colorVariable
    switch (props.genre){
        case 'Action':
            colorVariable = 'dodgerblue'
        break
        case 'Crime':
            colorVariable = 'yellow'
        break
        case 'Thriller' :
            colorVariable = 'cyan'
        break
        case 'Adventure' :
            colorVariable = 'magenta'
        break
        case 'Fantasy' :
            colorVariable = 'violet'
        break
        case 'Science Fiction' :
            colorVariable = 'mediumorchid'
        break
        case 'Horror' :
            colorVariable = 'chartreuse'
        break
        case 'Animation' :
            colorVariable = 'darkgoldenrod'
        break
        case 'Comedy' :
            colorVariable = 'honeydew'
        break
        case 'Drama' :
            colorVariable = 'paleturquoise'
        break
        case 'Family' :
            colorVariable = 'peachpuff'
        break
        case 'Music' :
            colorVariable = 'palevioletred'
        break
        case 'Mystery' :
            colorVariable = 'springgreen'
        break
        case 'Romance' : 
            colorVariable = 'plum'
        break
        case 'History' :
            colorVariable = 'lime'
        break
        case 'War' :
            colorVariable = 'lightcoral'
        break
        case 'TV Movie' :
            colorVariable = 'lightpink'
        break
        case 'Western' :
            colorVariable = 'tan'
        break
        case 'Documentary' :
            colorVariable = 'grey'
        break
        

    }
    return (
        <div>
            <p style={{backgroundColor: colorVariable, color: 'darkblue'}}>{props.genre}</p>
        </div>
    )
}