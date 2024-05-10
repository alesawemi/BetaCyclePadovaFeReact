import {BrowserRouter, Routes, Route } from "react-router-dom";
import TestReactOne from "../testOne/testOne";
import HttpGetPlaceHolder from "../testOne/getJsPlaceholder";
import Menu from "./navbar";
import RunLogin from "../Login/Login";
import GetAuthors from "../testOne/Authors/httpAuthors";


function MainRouter() 
{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Menu/>}/>
                <Route path="Login" element={<RunLogin/>}/>
                {/* <Route path="testOne" element={<TestReactOne/>}/> */}
                <Route path="GetJson" element={<HttpGetPlaceHolder/>}/>
                <Route path="GetAuthors"  element={<GetAuthors/>}></Route>
                {/* <Route path="Authors" element={<GetAuthors/>}/> */}
            </Routes>
        </BrowserRouter>
    )
}

export default MainRouter;