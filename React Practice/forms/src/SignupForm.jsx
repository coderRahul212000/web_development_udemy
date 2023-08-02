import { useState } from "react";

function SignupForm (){
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");

const updateFirstname = (evt) => {

setFirstName(evt.target.value)
}

const updateLastname = (evt) => {

setLastName(evt.target.value)
}

const handleSubmit = () => {
    console.log(firstName,lastName);
}


return (
<div>
<label htmlFor="firstname">First Name</label>
<input 
type="text" 
placeholder="username" 
value={firstName}
onChange={updateFirstname}
id="firstname"
/>

<label htmlFor="lastname">Last Name</label>
<input 
type="text" 
placeholder="username" 
value={lastName}
onChange={updateLastname}
id="lastname"
/>

<button onClick={handleSubmit}>Submit</button>
</div>
)
}

export default SignupForm;