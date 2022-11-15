


// Using moment to set the date and time

const date = moment().format("MMM Do YYYY");         

// Places the date in the currentDay ID field
$('#currentDay').text(date);
  
// Function savePlan saves the user's input into the text input field 
$(".savePlan").on("click", function (e) {
  e.preventDefault();
  var planToSave = $(this).parent().siblings(".col-7").children(".userEntry").val();
  var timeBlock = $(this).parent().siblings(".col-7").children(".userEntry").attr("id");
  // sets variables, timeBlock (keyName), planToSave (keyValue)
  localStorage.setItem(planToSave, timeBlock);

})

// sets variable for present time
var now = moment().hours()
// for loop to color code the past, present, and future times
  for (var i = 9; i < 22; i++) {
    var saveLocalStorage = localStorage.getItem(i);
    $("#" + i).val(saveLocalStorage);
    if(i > now){
      $("#"+i).addClass("future")
    }else if( i === now){
      $("#"+i).addClass("present")
    }else{
      $("#"+i).addClass("past")
    }
  }

 
