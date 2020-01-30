function postEvent(){
    var event = {
        name: document.getElementById("name").value,
        category: document.getElementById("category").value,
        place: document.getElementById("place").value,
        address: document.getElementById("address").value,
        starts_at: document.getElementById("starts_at").value,
        ends_at: document.getElementById("ends_at").value,
        type: document.getElementById("type").value
    }
    fetch('/api/events',{ 
        method: 'POST',
        body: JSON.stringify(event),
        headers:{
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        cache: 'default' 
    }).then(function(response) {
        if(response.status == 201){
            window.location.href = '/pages/events'
        }
    })
} 

function saveEvent(){
    var event = {
        id: document.getElementById("id").value,
        name: document.getElementById("name").value,
        category: document.getElementById("category").value,
        place: document.getElementById("place").value,
        address: document.getElementById("address").value,
        starts_at: document.getElementById("starts_at").value,
        ends_at: document.getElementById("ends_at").value,
        type: document.getElementById("type").value
    }
    console.log(event)
    fetch('/api/events/'+event.id,{ 
        method: 'PUT',
        body: JSON.stringify(event),
        headers:{
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        cache: 'default' 
    }).then(function(response) {
        if(response.status == 201){
            window.location.href = '/pages/events'
        }
    })
} 

function deleteEvent(){
    var event = {
        id: document.getElementById("id").value,
    }
    fetch('/api/events/'+event.id,{ 
        method: 'DELETE',
        headers:{},
        mode: 'cors',
        cache: 'default' 
    }).then(function(response) {
        if(response.status == 200){
            window.location.href = '/pages/events'
        }
    })
}

function editEvent(){
    document.getElementById("name").disabled = false
    document.getElementById("category").disabled = false
    document.getElementById("place").disabled = false
    document.getElementById("address").disabled = false
    document.getElementById("starts_at").disabled = false
    document.getElementById("ends_at").disabled = false
    document.getElementById("type").disabled = false

    document.getElementById("editButton").style.display = "none"
    document.getElementById("saveButton").style.display = "inline-block"
}

function turnCreateEvent(state) {
    window.location.href = '/pages/events/post'
}

function logout() {
    setCookie("username", "", 365);
    setCookie("token", "", 365);
    window.location.href = '/auth/login'
}

function goToHome() {
    window.location.href = '/pages/events'
}

function detail(id) {
    window.location.href = '/pages/events/'+id
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }