// ========================================== START CODING BELOW!!
var UserData = new Firebase("https://timetrackerut.firebaseio.com/");
var employeeName = '';
var Role = '';
var monthsWorked = '';
var monthyRate = '';
var totalBilled = '';

UserData.on("value", function(snapshot) {





    console.log(snapshot);

    $("#namedisplay").html(snapshot.val().name);
    $("#emaildisplay").html(snapshot.val().email);
    $("#agedisplay").html(snapshot.val().age);
    $("#commentdisplay").html(snapshot.val().comment);



}, function(errorObject) {

    // 
    console.log("The read failed: " + errorObject.code);
});


// Get inputs
name = $('#nameinput').val().trim();
age = $('#ageinput').val().trim();
phone = $('#phoneinput').val().trim();

// Change what is saved in firebase
dataRef.set({
    employeeName: 'Joe';
    Role: 'Cheer leader';
    monthsWorked: 1;
    monthyRate: = 12;
    totalBilled: = '13';
});
