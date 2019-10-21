$( document ).ready(function() {
    $.ajax({
        url: "http://192.168.42.9",
        success: function(data) {
            console.log(data);
        }
      });
      
      $.getJSON("http://jsonip.appspot.com?callback=?",
      function(data){
         alert( "Data Returned: " + data.ip);
    });
});