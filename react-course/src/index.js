import React, {useState, useEffect} from "react";
import  ReactDOM from "react-dom/client";
import {Greeting,UserCard} from "./Greeting";
import Product, {Navbar} from "./Product";
import {Button} from './Button'
import { TaskCard } from "./Task";
import {Saludar} from "./Saludar"
import { Post } from "./Posts";
import { func } from "prop-types";

const root = ReactDOM.createRoot(document.getElementById('root'))

const users = [
    {
        id: 1,
        name: 'Ryan ray',
        image: 'https://robohash.org/user6'
    },
    {
        id: 2,
        name: 'Joe',
        image: 'https://robohash.org/user7'
    }
]


// FUERA DEL HTML ESTO ES JS

const handleChange = (e) => {
    console.log(e.target.value)
}


function Counter(){

    const [ counter, setCounter] = useState(0);

    return(
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={() => {
                setCounter(counter +1 )
            }}>
                Sumar
            </button>

            <button onClick={() => {
                setCounter(counter - 1 )
            }}>
                Restar
            </button>

            <button onClick={() => {
                setCounter(1000)
            }}>
                Reiniciar
            </button>

        </div>
    )
}

function InputMensaje(){
    const [ mensaje , setMensaje] = useState('');
    const [ counter, setCounter] = useState(0);

    useEffect(function(){
        console.log('render')
    }, [counter])

    return (
        <div>
            <input onChange={e => setMensaje(e.target.value)}/>
            <button onClick={() => {
                alert("El mensaje es: " + mensaje)
            }}>
                Save
            </button>

            <hr></hr>

            <h1>Counter: {counter}</h1>
            <button onClick={() => {
                setCounter(counter +1 )
            }}>
                Incrementar
            </button>


        </div>
    )
}

root.render(
    <>
    {users.map((user, i) => {
        return( 
            <div key = {i}>
                <h1>{user.name}</h1>
                <img src={user.image}/>
            </div>
            );
        })}

    <Post/>
        {/*<TaskCard ready = {true}/>
        <Saludar/>
        <Button text="Saludar"/>

        <input id ="hola" onChange={handleChange}/>

        <input id ="chau" onChange={handleChange}/>

        <input id ="para_doble_click" onDoubleClick = { () => console.log("doble click")}/>

        <form onSubmit={(e) => {
            e.preventDefault()
            console.log('enviado')
            alert('enviado')
        }}>
            <h1>Registro de usuario</h1>

            <button>Send</button>
        </form>
        */}

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
        <Counter/>
        <InputMensaje/>
    </>
);