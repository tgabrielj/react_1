export function Greeting({title, name = "User"}){
    console.log(title, name)

    const user = {
        firstName: "Joe",
        lastname: "Mc Millan"
    };
    return(
        <div>
            <h1>{user.firstName}</h1>
            <h1>{user.lastname}</h1>
            <h1>{title} dice {name}</h1>

        </div>
    )
}

export function UserCard({name, amount, married, address, greet}){
    console.log(greet)
    return <div>
        <h1>{name}</h1>
        <p>${amount}</p>
        <p>{married ? "married" : "single"}</p>
        <li>City: {address.city}</li>
        
    </div>
}