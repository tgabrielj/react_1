import React from "react";
import  ReactDOM from "react-dom/client";
import {Greeting,UserCard} from "./Greeting";
import Product, {Navbar} from "./Product";

const root = ReactDOM.createRoot(document.getElementById('root'))


root.render(
    <div>
        <Greeting/>
        <UserCard/>
        <Product/>
        <Navbar/>
    </div>
)