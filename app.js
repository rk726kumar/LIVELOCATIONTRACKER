const firebaseConfig = {
  apiKey: "AIzaSyB-3mQr75z7nLjQSXq4sRXPEWIx-IxW9nc",
  authDomain: "maptest-d4994.firebaseapp.com",
  databaseURL: "https://maptest-d4994-default-rtdb.firebaseio.com",
  projectId: "maptest-d4994",
  storageBucket: "maptest-d4994.appspot.com",
  messagingSenderId: "164315997843",
  appId: "1:164315997843:web:b06f198ab81653950a4f66",
  // measurementId: "G-17QH7PSR3Y"
};
firebase.initializeApp(firebaseConfig);

// Reference messages collection
var contactFormDB = firebase.database().ref("contactform");

// Listen for form submit
document.getElementById("contactForm").addEventListener("submit", submitForm);

// Submit form

function submitForm(e) {
  e.preventDefault();
  var fname = getElementByVal('fname');

  saveMessages(fname);
  alert("Location saved");
  // console.log("print");
  document.querySelector(".alert").getElementsByClassName.display = "block";

  setTimeout(()=>{
    document.querySelector(".alert").style.display = "none";

  }, 3000);
  document.getElementById("contactForm").reset();
}  
const saveMessages = (fname) =>{
  var newContactForm = contactFormDB.push();
  newContactForm.set({
    
    fname:fname,
  });
};

const getElementByVal = (id) =>{
  return document.getElementById(id).value;

}


  // Get values
//   var name = getInputVal('name');
 

//   // Save message
//   saveMessage(name);

//   // Show alert
//   document.querySelector('.alert').style.display = 'block';

//   // Hide alert after 3 seconds
//   setTimeout(function () {
//     document.querySelector('.alert').style.display = 'none';
//   }, 3000);

//   // Clear form
//   document.getElementById('contactForm').reset();
// }

// // Function to get get form values
// function getInputVal(id) {
//   return document.getElementById(id).value;
// }

// // Save message to firebase
// function saveMessage(name) {
//   var newMessageRef = messagesRef.push();
//   newMessageRef.set({
//     name: name,
//   });
// }