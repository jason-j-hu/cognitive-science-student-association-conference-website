const other = document.getElementById('other')

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
    });
});