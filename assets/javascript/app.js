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

function addRow(){
  var newRow = $("<tr>").append(
    $("<td>").text(train_name),
    $("<td>").text(destination),
    $("<td>").text(frequency),
    $("<td>").text(next_arrival),
    $("<td>").text(minutes_away),
  );
  $("#t > tbody").append(newRow);
};

database.ref().on("child_added", function(document){

  train_name = document.val().TrainName;
  destination = document.val().Destination;
  frequency = document.val().Frequency;
  next_arrival = document.val().NextArrival;
  minutes_away = document.val().MinutesAway;
  addRow();
});


function timeDisplay(){
  var date = new Date();
  var hours = date.getHours() <10 ? "0" + date.getHours() : date.getHours();
  var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  time = hours + ":" + minutes;
  return time;
};
function validTime(time){
  return (parseInt(time[0]) != NaN && parseInt(time[1])  != NaN && parseInt(time[3])  != NaN && parseInt(time[4]) != NaN);
}

function calcArrival(){
  var trainTime = moment.(first_train_time,"hh:mm").subtract(1,"years");
  var minuteDifference = moment().diff(moment(trainTime), "minutes");
  var remainder = minuteDifference %frequency;

  minutes_away = frequency - remainder;
  var nextTrain = moment().add(minutes_away, "minutes");
  next_arrival = moment.(nextTrain).format("hh:mm");
  
}