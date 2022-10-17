$(".savePlan").on("click", function(e) {
    e.preventDefault();
    var planToSave = $(this).parent().siblings(".col-7").children(".userentry").val();
    var timeBlock = $(this).parent().siblings(".col-7").children(".userentry").attr("id");
  console.log(planToSave, timeBlock);

})