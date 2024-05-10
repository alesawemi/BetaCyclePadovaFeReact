// function HttpLogin() {
//     const usr = 'Bob';
//     const psw = 'diBob';

//     if (usr && psw) {
//         const url = `https://localhost:7137/login?usr=${usr}&psw=${psw}`;

//         fetch(url, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json; charset=UTF-8",
//             },
//         })
//         .then(response => {
//             if (!response.ok) {
//                 console.log(response)
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then(data => {
//             console.log("Response data:", data);
//         })
//         .catch(error => {
//             console.error("Error:", error);
//         });
//     }
// }

function HttpLogin() {
    const credentials = {
    username: "Bob",
    password: "diBob",}
    
    fetch("https://localhost:7137/login", {
    method: "POST",
    body: JSON.stringify({
    Username: credentials.username,
    Password: credentials.password,
    }),
    headers: {"Content-type": "application/json; charset=utf-8",},
    })
    
    .then((response) => {
    if (!response.ok) {console.log("HTTP error status: ${response.status}")
    }
    else {console.log("login eseguito correttamente " + response)
    }
    })
    .catchc((err) => {console.log(err)
    })
    
    
    }

export { HttpLogin };
    // const credentials=({
    //     username: 'Bob',
    //     password: 'diBob'
    // })

    // console.log("in http crud")
    // console.log(credentials)

//     const requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ usr: 'Bob', psw: 'diBob' })
//     }

//     fetch(`https://localhost:7137/login`,
//     {
//   method: 'POST',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body:JSON.stringify({usr: 'Bob',
//     psw: 'diBob',})   
  
// }).then((respo => respo.json())).then((data) => {
//     console.log(data)
// }).catch((err)=> {
//     console.log(err)
// });

    // {
    //     method:'POST',
    //     body:JSON.stringify({
    //         usr: 'Bob', psw: 'diBob' 
    //     }),
    //     headers:{
    //         'Content-Type': 'application/json',
    //     }
    // }
    // )
    //     .then((respo => respo.json()))
    //     .then((data) => { console.log(data) })
    //     .catch((err)=> {    console.log("in err")
    //                         console.log(err) });
    
    //     fetch ("API Address", {
    //         method: "POST",
    //         body: JSON.stringify({
    //           email: this.state.idValue,
    //           password: this.state.pwValue
    //        }),
    //    })
    //      .then((response) => response.json())
    //      .then((result) => {
    //        if(result.message === "SUCCESS"){
    //          alert("You are logged in.");
             
    //         } else {
    //             alert("Please check your login information.");
    //         }
    //      });
