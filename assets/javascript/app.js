var config = {
    apiKey: "AIzaSyBFubghilD64G6z-0Cgf5hU4OqESxWHAAo",
    authDomain: "fir-hw-f6bcb.firebaseapp.com",
    databaseURL: "https://fir-hw-f6bcb.firebaseio.com",
    projectId: "fir-hw-f6bcb",
    storageBucket: "fir-hw-f6bcb.appspot.com",
    messagingSenderId: "796409725321"
};

firebase.initializeApp(config);
var database = firebase.database();

$("#submit").on("click", function (event) {
    
    event.preventDefault();
    var trainName = $("#trainNameInput").val().trim();
    var destination = $("#destinationInput").val().trim();
    var frequency = $("#frequencyInput").val().trim();
    var firstTrainTime = $("#firstTrainTimeInput").val().trim();

    if (trainName.length !== 0 && 
        destination.length !== 0 && 
        frequency.length !== 0 && 
        firstTrainTime.length !== 0 &&
        isNaN(trainFirstTime) == false && 
        isNaN(trainFrequency) == false){
            var newTrain = {
                name:trainName,
                destination:destination,
                startTime:firstTrainTime,
                frequency:frequency
            };

            database.ref().push(newTrain);
            $("#trainNameInput").val("");
            $("#destinationInput").val("");
            $("#frequencyInput").val("");
            $("#firstTrainTimeInput").val("");
    }
    else {
        $("#title").text("Please add a REAL train!");
    }
})

function addRow() {
    
};

database.ref().on("child_added", function (childSnapshot) {

    var trainName = childSnapshot.val().name;
    var destination = childSnapshot.val().destination;
    var frequency = childSnapshot.val().frequency;
    var firstTrainTime = childSnapshot.val().startTime;

    var nextArrival;
    var minutesAway;
    var pastFirstTrainTime = moment(firstTrainTime,"hh:mm").subtract(1,"days");
    var diff = moment().diff(moment(pastFirstTrainTime), "minutes");

    var remainingTime = diff %frequency;
    minutesAway = frequency- remainingTime;

    var nextTrain = moment().add(minutesAway, "minutes");
    nextArrival = moment(nextTrain).format("ddd, h:mm a")
    var newRow = $("<tr>").append(
        $("<td>").text(trainName),
        $("<td>").text(destination),
        $("<td>").text(frequency),
        $("<td>").text(next_arrival),
        $("<td>").text(minutes_away),
    );
    $("#trainTable > tbody").append(newRow);
});
