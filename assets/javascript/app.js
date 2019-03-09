var config = {
    apiKey: "AIzaSyCs3K5zwuOuS0odq89IpPLC7HnXTOcDqgI",
    authDomain: "recent-user-with-all-use-e8e76.firebaseapp.com",
    databaseURL: "https://recent-user-with-all-use-e8e76.firebaseio.com",
    projectId: "recent-user-with-all-use-e8e76",
    storageBucket: ""
  };

  firebase.initializeApp(config);

  var dataRef = firebase.database();
$("#submit").on("click",function(event){
    event.preventDefault();
    trainName = $("#trainName-input").val().trim();
    destination = $("#destination-input").val().trim();
    frequency = $("#frequency-input").val().trim();
    firstTrainTime = $("#firstTrainTime-input").val().trim();


})