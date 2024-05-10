import '../testOne/testOne.css'
import SubComponent1 from './subComponentOne';

function TestReactOne() 
{
    const propertyOne = "generic property";
    return(
        // posso fare render ti tag nullo --> fa solo da container padre ma risparmiando risorse, perché non è vero e proprio div
        <>
        <p>{propertyOne}</p>
        <SubComponent1/>
        </>
    );
}

export default TestReactOne;