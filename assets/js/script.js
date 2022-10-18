$(".savePlan").on("click", function (e) {
  e.preventDefault();
  var planToSave = $(this).parent().siblings(".col-7").children(".userentry").val();
  var timeBlock = $(this).parent().siblings(".col-7").children(".userentry").attr("id");
  console.log(planToSave, timeBlock);
  localStorage.setItem(timeBlock, planToSave);
})
for (var i = 9; i < 22; i++) {
  var saveLocalStorage = localStorage.getItem(i);
  $("#" + i).val(saveLocalStorage);
}



// https://teamtreehouse.com/community/how-do-i-use-a-loop-to-change-the-color-of-elements-within-a-variable 
// INSPO: