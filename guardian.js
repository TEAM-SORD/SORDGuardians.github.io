
$(document).ready(function(){
    $("button").click(function(){
    	console.log( "in the click handler")
        $.getJSON("http://content.guardianapis.com/search?api-key=kxna6pxmdg7q35pjvhhkh2m9", function(data, status){
            console.log ("Data: " + data + "\nStatus: " + status);
        });
    });
});