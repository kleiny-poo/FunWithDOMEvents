//let ch1=document.getElementById("challenge-one");

//ch1.addEventListener("dblclick", disappear);


//function disappear() {
//	ch1.fill: transparent;
//}


let playBtn= document.getElementById("play-button");

playBtn.addEventListener("mouseover", whenHovered);
playBtn.addEventListener("mouseout", whenDoneHovering);

function whenHovered() {
	playBtn.style.background-color = "pink";
}

function whenDoneHovering() {
	playBtn.style.background-color = "lightgreen";
}