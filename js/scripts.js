var isTogglingContent = false;

function toggleContent( selectedContentId, anchorElement ) {

    if (!isTogglingContent) {

	    var visibleContentId = "#" + $(".pageContent:visible:first").attr("id");
		if( selectedContentId === visibleContentId ) {
		    return;
		}
		
		isTogglingContent = true;
		
		$(".navbar-vg16 a").css("text-decoration", "none");
		$(anchorElement).css("text-decoration", "underline");
	    
		if($(".pageContent:visible").size() > 0){
			$(".pageContent:visible").fadeOut( "fast", function(){
				$( selectedContentId ).fadeIn( "fast", function(){
					isTogglingContent = false;
				} );
			});
		} else {
			$( selectedContentId ).show();
			isTogglingContent = false;
		}
	}
}