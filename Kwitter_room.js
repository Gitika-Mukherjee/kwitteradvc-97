
//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
  apiKey: "AIzaSyDVTfqFxsmQak7pBOVv2oBIE7Fm_9fxsYM",
  authDomain: "kwitter-website-11476.firebaseapp.com",
  databaseURL: "https://kwitter-website-11476-default-rtdb.firebaseio.com",
  projectId: "kwitter-website-11476",
  storageBucket: "kwitter-website-11476.appspot.com",
  messagingSenderId: "910190504530",
  appId: "1:910190504530:web:ee4742e7bd52d72f2b8d8b",
  measurementId: "G-LFSES3XSM3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
room_name = localStorage.getItem("room_name");

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
function send()
{
  msg = document.getElementById("msg").value;
  firebase.database(). ref(room_name). push({
    name:user_name,
    message:msg,
    like:0
  });

  document.getElementById("msg").value ="";

}
