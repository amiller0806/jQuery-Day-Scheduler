




const date = moment().format("MMM Do YYYY");         


$('#currentDay').text(date);
  
$(".savePlan").on("click", function (e) {
  e.preventDefault();
  var planToSave = $(this).parent().siblings(".col-7").children(".userEntry").val();
  var timeBlock = $(this).parent().siblings(".col-7").children(".userEntry").attr("id");
  localStorage.setItem(timeBlock, planToSave);

})
var now = moment().hours()

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

