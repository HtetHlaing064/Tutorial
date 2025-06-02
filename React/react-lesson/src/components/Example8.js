"use client"

function Greeting(props){
    const {name,age}=props.user;
    return(
        <h2>Hello,{name}! You are {age} years old.</h2>
    );
}

function Parent(){
    const user1={name:"Alice",age:25};
    const user2={name:"Bob",age:40};
    return(
        <div>
            <Greeting user={user1}/>
            <Greeting user={user2}/>

        </div>
    )
}
export default Parent;