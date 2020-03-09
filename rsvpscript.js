const other = document.getElementById('other')


var firebaseConfig = {
  apiKey: "AIzaSyDc-BgdXaVG5tmOZZqdOPtBM7v5OJqFO9U",
  authDomain: "cog-sci-conference-2020.firebaseapp.com",
  databaseURL: "https://cog-sci-conference-2020.firebaseio.com",
  projectId: "cog-sci-conference-2020",
  storageBucket: "cog-sci-conference-2020.appspot.com",
  messagingSenderId: "775433633219",
  appId: "1:775433633219:web:e59cf1028f20db3e0e1176",
  measurementId: "G-WJ44J2ZQVY"
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
        document.location.href = "index.html"
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });

    return false;
  });
});



function ckChange(ckType){
  if (document.getElementById("10-11AM").checked || document.getElementById("11-12PM").checked || document.getElementById("12-1PM").checked || document.getElementById("1-2PM").checked || document.getElementById("2-3PM").checked || document.getElementById("3-4PM").checked || document.getElementById("4-4:30PM").checked)
  {
    document.getElementById("full-duration").disabled = true;
  }
  else
  {
    document.getElementById("full-duration").disabled = false;
  }

  if (document.getElementById("full-duration").checked)
  {
    document.getElementById("10-11AM").disabled = true;
    document.getElementById("11-12PM").disabled = true;
    document.getElementById("12-1PM").disabled = true;
    document.getElementById("1-2PM").disabled = true;
    document.getElementById("2-3PM").disabled = true;
    document.getElementById("3-4PM").disabled = true;
    document.getElementById("4-4:30PM").disabled = true;
  }
  else
  {
    document.getElementById("10-11AM").disabled = false;
    document.getElementById("11-12PM").disabled = false;
    document.getElementById("12-1PM").disabled = false;
    document.getElementById("1-2PM").disabled = false;
    document.getElementById("2-3PM").disabled = false;
    document.getElementById("3-4PM").disabled = false;
    document.getElementById("4-4:30PM").disabled = false;
  }
}