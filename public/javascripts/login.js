function login(){
    console.log("login ---- fetch")
    var user = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
    }
    fetch('/auth/login',{ 
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user),
        mode: 'cors',
        cache: 'default' 
    }).then(function(response) {
        return response.json()
    }).then((value) => {
        console.log(value)
        if(value.auth){
            setCookie("username", value.username, 365);
            setCookie("token", value.token, 365);
            window.location.href = '/pages/events';
        }
    })
}

function goToSingUp(){
    window.location.href = '/auth/singup';
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }