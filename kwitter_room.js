var firebaseConfig = {
    apiKey: "AIzaSyBSNcPgQGccVfakt2TK_CBvlnZhmis4Qg8",
    authDomain: "social-website-d3154.firebaseapp.com",
    databaseURL: "https://social-website-d3154-default-rtdb.firebaseio.com",
    projectId: "social-website-d3154",
    storageBucket: "social-website-d3154.appspot.com",
    messagingSenderId: "49990380882",
    appId: "1:49990380882:web:0cb39cf2ac7d6be1761e8b",
    measurementId: "G-V7JE4PKT23"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//     firebase.analytics();
//ADD YOUR FIREBASE LINKS HERE

var username=localStorage.getItem("username");
document.getElementById("welcome").innerHTML="Welcome "+ username+"!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();

function Btnlogout(){
window.location="index.html"
}

function Addroom(){
var roomname=document.getElementById("RoomName").value;
firebase.database().ref("/").child(roomname).update({
 purpose:"AddRoomName"    
});
localStorage.setItem("roomname",roomname);
window.location="kwitter_page.html";
}


