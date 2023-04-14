export function Greeting(){
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

export function UserCard(){
    return <h1>User Card</h1>
}