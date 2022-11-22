import "./Fruits.css"
export function Apple(){

    return(
        <div className="fruits-container">
        <h1>Apple🍎</h1>
        </div>
    )        
}


export function Mango(){

    return(
        <div className="fruits-container">
        <h1>Mango🥭</h1>
        </div>
    )        
}

export default function MyFruits(){
    return(
        <div className="fruits-container">
        <h1>Mango🥭 & Apple🍎</h1>
        </div>
    )
}