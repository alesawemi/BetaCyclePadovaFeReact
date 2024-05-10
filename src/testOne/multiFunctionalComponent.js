import '../testOne/multiFunctionalComponent.css'

function Message() 
{
    <>
        <h3>Funcione Messaggio di multiFunctionalComponent</h3>
    </>
}

function CalcioPallone() 
{
    const calcio = (tipocalcio) => 
        {
            alert('Wow!, un bel ' + tipocalcio)
        }
    
    return (
        <>
            <button onClick={() => calcio("Tacco")}>Forza, calcia!</button>
        </>
    )
}

export {CalcioPallone}