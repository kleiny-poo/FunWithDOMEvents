let ch1=document.getElementById("challenge-one");

ch1.addEventListener("dblclick", disappear);
let body = document.getElementsByTagName("body")[0];

function disappear() {
	body.removeChild(ch1);
}


let playBtn= document.getElementById("play-button");

playBtn.addEventListener("mouseover", whenHovered);
playBtn.addEventListener("mouseout", whenDoneHover);

function whenHovered() {
	playBtn.style.backgroundColor = "pink";

}

function whenDoneHover() {
	playBtn.style.backgroundColor = "lightgreen";
}


let title= document.getElementById("page-title");
title.addEventListener("copy",copy);

function copy() {
	alert("STOP DO NOT COPY U ANIMAL");
}