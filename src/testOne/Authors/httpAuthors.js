import { useEffect, useState } from "react"
import '../Authors/httpAuthors.css'

//solo che ora tutto il file ha un nome stupido x essere AuthorsComponent
function GetAuthors() 
{
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("https://localhost:7137/api/Authors")
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
            <h2>Authors</h2>
            {data.map((item) => {
                return <p key={item.id}>{item.fullName}</p>
            })}
        </div>
    )
}

export default GetAuthors