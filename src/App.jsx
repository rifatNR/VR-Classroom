import { useState } from "react";
import { Link, Route } from "wouter";
import MyBaseScene from "./components/TestComponents/MyBaseScene";
import TutBaseScene from "./components/TestComponents/TutBaseScene";
import WebXRTest from "./components/TestComponents/WebXRTest";
import CanvasDraw from "./components/TestComponents/CanvasDraw";
import Canvas2DOn3js from "./components/TestComponents/Canvas2DOn3js";
import Classroom from "./components/Classroom/Classroom";
import FirebaseTesting from "./components/TestComponents/FirebaseTesting";
import Whiteboard from "./components/Classroom/Whiteboard";
import Login from "./components/Dashboard/Login";
import SignUp from "./components/Dashboard/Register";

function App() {
    return (
        <div>
            {/* <MyBaseScene /> */}

            {/* <TutBaseScene /> */}

            {/* <WebXRTest /> */}

            {/* <CanvasDraw /> */}

            {/* <Canvas2DOn3js /> */}

            {/* <FirebaseTesting /> */}

            {/* <Whiteboard /> */}

            {/* <Classroom /> */}

            <div>
                <Route path="/about">About Us</Route>
                <Route path="/users/:name">
                    {(params) => <div>Hello, {params.name}!</div>}
                </Route>
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} />
            </div>
        </div>
    );
}

export default App;
