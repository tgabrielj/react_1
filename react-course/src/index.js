import React from "react";
import  ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById('root'))

function Greeting(){
    const user = {
        firstName: "Joe",
        lastname: "Mc Millan"
    };
    return(
        <div>
            <h1>{user.firstName}</h1>
            <h1>{user.lastname}</h1>
        </div>
    )
}
root.render(
    <div>
        <Greeting/>
    </div>
)