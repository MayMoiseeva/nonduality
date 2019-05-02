$(document).ready(function(){
	var leftCycle=(window.innerWidth/2)-(window.innerHeight*0.32/2)+7;
	$(".cycle").css("left", leftCycle);

	var left=7;
	var top=[20, 0, 17, 55, 73, 55];
	realm=document.getElementsByClassName("realm");
	for(var i=0; i<realm.length;i++){
		realm[i].style.left=left+"%";
		realm[i].style.top=top[i]+"%";
		if(i<2){left+=30;}else if (i!=2) {left-=30;}	
	}

	$(".realm").on("mouseenter", function(){
		var index=$(".realm").index(this);
		$(".realminfo")[index].style.display="block";
	})
	$(".realm").on("mouseleave", function(){
		var index=$(".realm").index(this);
		$(".realminfo")[index].style.display="none";
	})

	$(".karma").on("mouseenter", function(){
		$(".karmaPopup")[0].style.display="block";
	})
	$(".karma").on("mouseleave", function(){
		$(".karmaPopup")[0].style.display="none";
	})

	$(".nondual").on("mouseenter", function(){
		$(".nondualPopup")[0].style.display="block";
	})
	$(".nondual").on("mouseleave", function(){
		$(".nondualPopup")[0].style.display="none";
	})
})