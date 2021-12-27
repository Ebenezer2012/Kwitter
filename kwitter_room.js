var firebaseConfig = {
      apiKey: "AIzaSyDavRaCGQUV9cbzKlVGR0ELPwjw5MvyLJw",
      authDomain: "class94-d4b65.firebaseapp.com",
      databaseURL: "https://class94-d4b65-default-rtdb.firebaseio.com",
      projectId: "class94-d4b65",
      storageBucket: "class94-d4b65.appspot.com",
      messagingSenderId: "120947459083",
      appId: "1:120947459083:web:bf970bae6b8e884a4c330e"
    };
    
    // Initialize Firebases
    firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
console.log(user_name);

document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";

function addRoom() {
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose:"adding Room Name"
});
localStorage.setItem("room_name", room_name);
window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log(Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location="kwitter_page.html";
}