function scrollFun(){
	$(window).scroll(function(){ 
		var height=$(document).scrollTop();
		// if($(".showTop").css("display")=='block'){
			if(height<500){
				$(".showTop").removeClass("fadeIn").addClass("animated fadeOut");
			}
			else if(height>=500){
				$(".showTop").show();
				$(".showTop").removeClass("fadeOut").addClass("animated fadeIn");
			}		
		// }
	})
}
export default scrollFun