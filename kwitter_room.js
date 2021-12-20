const firebaseConfig = {
      apiKey: "AIzaSyD_yQ7AnJFgy6JO-5LKSmjzCE4yoBlOxhg",
      authDomain: "kwitter-ac61d.firebaseapp.com",
      projectId: "kwitter-ac61d",
      storageBucket: "kwitter-ac61d.appspot.com",
      messagingSenderId: "593901854854",
      appId: "1:593901854854:web:bebcc345c7beb3275b3107"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
