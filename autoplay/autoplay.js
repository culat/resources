var audio = document.getElementById('audio');
var text = document.getElementById('text');
var resault = 0;
var geturl = "https://music.163.com/song/media/outer/url?id=";
var ext = ".mp3"
var music = [[],[]];
list();

function random(){
	var num = Math.round(Math.random() * (music[0].length-1));
	while(num == resault){
		num = Math.round(Math.random() * (music[0].length-1));
	}
	resault = num;
	return num;
}

function play(){
	if(music[0].length == music[1].length){
		var ran = random();
		audio.setAttribute('src',geturl + music[0][ran] + ext);
		text.innerHTML = ran + 1 + " - " + music[1][ran];
	}else{
		text.innerHTML = "ERROR";
	}
}

audio.addEventListener('ended',function(){  
	play();
},false);

play();
