import { useEffect, useState } from "react"
import '../testOne/getJsPlaceholder.css'

//solo che ora tutto il file ha un nome stupido x essere AuthorsComponent
function HttpGetPlaceHolder() 
{
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json()) //wait for response
        .then((data) => { //save in data (variabile di cui viene mantenuto lo stato)
            setData(data); 
        })
        .catch((error) => {
            console.error('ERRORE: ' + error.message)
        })
    })

    return (
        <div>
        <h2>Json PlaceHolder</h2>
        {data.map((item) => {
            return <p key={item.id}>{item.title}</p> 
        })}
    </div>
    )
}

export default HttpGetPlaceHolder