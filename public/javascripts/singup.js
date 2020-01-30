function singup(){
    var user = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
    }
    fetch('/auth/singup',{ 
        method: 'POST',
        body: JSON.stringify(user),
        headers:{
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        cache: 'default' 
    }).then(function(response) {
        if(response.status == 201){
            window.location.href = '/auth/login'
        }
    })
}
