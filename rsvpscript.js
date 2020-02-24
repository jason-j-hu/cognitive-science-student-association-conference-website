const other = document.getElementById('other')


var firebaseConfig = {
  apiKey: "AIzaSyAKHDL644CzbjbOHfoDtDETYhqTIe_rehs",
  authDomain: "cogsci-conference-2020.firebaseapp.com",
  databaseURL: "https://cogsci-conference-2020.firebaseio.com",
  projectId: "cogsci-conference-2020",
  storageBucket: "cogsci-conference-2020.appspot.com",
  messagingSenderId: "215535491328",
  appId: "1:215535491328:web:322dd6762fae8dceb07be5",
  measurementId: "G-MJF59DQMPR"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();



$(document).ready(function () {
    $('#submit').click(function() {


      if(!($(".time").is(':checked')))
      {
        alert("Please indicate your expected time present.");
        return false;
      }

      if( !$(".advertising-source").is(':checked') && (document.getElementById('other').value).length==0 )
      {
        alert("Please indicate where you heard about this event.");
        return false;
      }

      db.collection("users").doc().set({
        name: $("#user-name").val(),
        email: $("#user-email").val(),

        time_full_duration: document.getElementById("full-duration").checked,
        time_10_11AM: document.getElementById("10-11AM").checked,
        time_11_12PM: document.getElementById("11-12PM").checked,
        time_12_1PM: document.getElementById("12-1PM").checked,
        time_1_2PM: document.getElementById("1-2PM").checked,
        time_2_3PM: document.getElementById("2-3PM").checked,
        time_3_4PM: document.getElementById("3-4PM").checked,
        time_4_430PM: document.getElementById("4-4:30PM").checked,
        
        adsource_facebook: document.getElementById("facebook").checked,
        adsource_friend: document.getElementById("friend").checked,
        adsource_newsletter: document.getElementById("newsletter").checked,
        adsource_flyer: document.getElementById("flyer").checked,
        adsource_website: document.getElementById("website").checked,
        adsource_other: $("#other").val(),
      })
      .then(function() {
          console.log("Document successfully written!");
      })
      .catch(function(error) {
          console.error("Error writing document: ", error);
      });
    

      // db.collection("users").doc().set({
      //   name: "Los Angeles",
      //   state: "CA",
      //   country: "USA"
      // })
      // .then(function() {
      //     console.log("Document successfully written!");
      // })
      // .catch(function(error) {
      //     console.error("Error writing document: ", error);
      // });


      
   
      
      

      return false;
    });
});

