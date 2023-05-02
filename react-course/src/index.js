import React from "react";
import  ReactDOM from "react-dom/client";
import {Greeting,UserCard} from "./Greeting";
import Product, {Navbar} from "./Product";
import {Button} from './Button'
import { TaskCard } from "./Task";
import {Saludar} from "./Saludar"

const root = ReactDOM.createRoot(document.getElementById('root'))

// FUERA DEL HTML ESTO ES JS

root.render(
    <>
        <TaskCard ready = {true}/>
        <Saludar/>
        <Button text="Saludar"/>

        <input onChange={function(){
            console.log('escribiendo en el input')
        }}/>


        {/*<Button text = 'Enviar' name = "gabriel"/>
        <Button text = 'Salir'/>

        <Button/>*/}

        {/* <Greeting title= "hola"/>
        <Greeting title= "bye"/>
        <Greeting title= {30}/>
        <Greeting title= {true}/>
        <Greeting title = {[1,2,3]}/>
        <UserCard 
        name = "Ryan Ray"
        amount= {200}
        married={true}
        points = {[99,33.3,22.2]}
        address = {{ street : "123 Main Street", city:"New York"}}
        greet = {function () { alert('Hello') }}
        />
        <Product/>
        <Navbar/> */}
    </>
)