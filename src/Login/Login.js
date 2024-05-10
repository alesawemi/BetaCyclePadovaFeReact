import { HttpLogin } from "../Shared/HttpCrud"

function RunLogin() 
{
    
    return (
        <>
        
            <input type="text" placeholder="Email"/>
            <input type="text" placeholder="Password"/>
            <br></br>
            <br></br>
                {/* <div>
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" id="exampleInputEmail"/>
                </div>
                <div>
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" id="exampleInputPassword" />
                </div> */}
                <button onClick={() => HttpLogin()} class="btn btn-primary">Login</button>
            
        </>
    )
}
export default RunLogin