
$(document).ready(function(){
	
	$('#sections #uknews').click(function(e){
		
		$.getJSON("http://content.guardianapis.com/search?api-key=kxna6pxmdg7q35pjvhhkh2m9&ion=football", function(data, status){
		//$.getJSON("http://content.guardianapis.com/search?api-key=kxna6pxmdg7q35pjvhhkh2m9&ion=football", function(data, status){
            $.each( data.response.results, function( index, element ) {
          		console.log( element.webTitle )  	
          		

            })
        });
	

	}),
	$('#sections #football').click(function(e){
		var $root = $('tab pane #football')
		$.getJSON("http://content.guardianapis.com/search?api-key=kxna6pxmdg7q35pjvhhkh2m9&ion=football", function(data, status){
		//$.getJSON("http://content.guardianapis.com/search?api-key=kxna6pxmdg7q35pjvhhkh2m9&ion=football", function(data, status){
            $.each( data.response.results, function( index, element ) {
          		console.log( element.webTitle )  	
				var html = "<li><a href='"+ element.webUrl +  "'>" +element.webTitle + '</a></li>';
				console.log( html );
				$root.append( html );
            })
        });
	

	}),
	$('#sections #travel').click(function(e){
		
		$.getJSON("http://content.guardianapis.com/search?api-key=kxna6pxmdg7q35pjvhhkh2m9&ion=travel", function(data, status){
		//$.getJSON("http://content.guardianapis.com/search?api-key=kxna6pxmdg7q35pjvhhkh2m9&ion=football", function(data, status){
            $.each( data.response.results, function( index, element ) {
          		console.log( 'Travel: ' + element.webTitle )  	

            })
        });
	

	})
	/*
    $("#sections").click(function(){
    	//console.log( $(this) );

	  	//$(this).toggleClass('active');

        $.getJSON("http://content.guardianapis.com/search?api-key=kxna6pxmdg7q35pjvhhkh2m9", function(data, status){
            alert ("Data: " + data + "\nStatus: " + status);
            console.log ("Number of results:" +  data.results.length)

            // get the href of the tab eg. football
            // generate the url string for api call "http://content.guardianapis.com/search?api-key=kxna6pxmdg7q35pjvhhkh2m9" + football
            // element.append( '<li>' + result)
        });
    })
*/
});