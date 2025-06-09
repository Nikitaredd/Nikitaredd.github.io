 const users = []
 const showLogin = () => {
    let str=`
    <div class='App-Container'>
    <h1>Login Form</h1>
    <p><div id= "dvMsg"></div></p>
    <p><input type="text" id="txtEmail"></p>
    <p><input type="password" id="txtPass"></p>
    <p><button onclick='validate()'>Log In</button></p>
    <p><button onclick='showRegister()'>Create Account</button></p>
    </div>
    `;
    root.innerHTML = str
};

const showRegister = () => {
      let str=`
    <h1>Register Form</h1>
    <p><input type="text" id="txtName"></p>
     <p><input type="text" id="txtEmail"></p>
    <p><input type="password" id="txtPass"></p>
    <button onclick ="adduser()">Register</button>
    <button onlick='showLogin()'>Already have a account</button>
    `;
    root.innerHTML = str
};
const showhome =() => {
    let str=`
    <h1>welcome</h1>
    `
    root.innerHTML = str
};
    const adduser = () =>{ 
        // to store input as objects
    const obj = {
     name:document.getElementById("txtName").value,
     email:document.getElementById("txtEmail").value,
     pass:document.getElementById("txtPass").value,
    } ;
    users.push(obj);
    console.log(users);
    showLogin();
} ;
const validate = () => {
    let email =document.getElementById("txtName").value;
    let pass =document.getElementById("txtpass").valus;
    user = users.find(
    (e) => e.email === email && e.pass === pass
    // we are checking if the entered email is same as the email stored in the array 
    )
    if (user) {
        showhome();
    }
    else {
    dvMsg.innerHTML = "Access Denied";
    }
    };

