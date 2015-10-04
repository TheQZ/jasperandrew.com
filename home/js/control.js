var on = 0;

onload = init;

function init() {
	var b_who = document.getElementById("who");
	var b_design = document.getElementById("design");
	var b_code = document.getElementById("code");
	var t_title = document.getElementById("title");

	b_who.classList.add("t");
	b_design.classList.add("t");
	b_code.classList.add("t");
	t_title.classList.add("t");
	
	b_who.onclick = who;
	b_design.onclick = design;
	b_code.onclick = code;
	
}

function who() {
	var b_who = document.getElementById("who");
	if(b_who.classList.contains("off")){
		return;
	}
	
	var b_design = document.getElementById("design");
	var b_code = document.getElementById("code");
	var t_title = document.getElementById("title");
	
	if(!on){
		on++;
		toggleClass([b_who], "on");
		toggleClass([b_who, b_design, b_code], "glo");
		toggleClass([b_design, b_code, t_title], "off");
	}else{
		on--;
		toggleClass([b_who, t_title], "on");
		toggleClass([b_who, b_design, b_code], "glo");
		toggleClass([b_design, b_code, t_title], "off");
		window.setTimeout(function(){toggleClass([t_title], "on");}, 300);
	}
}

function design() {
	var b_design = document.getElementById("design");
	if(b_design.classList.contains("off")){
		return;
	}
	
	var b_who = document.getElementById("who");
	var b_code = document.getElementById("code");
	var t_title = document.getElementById("title");
	
	if(!on){
		on++;
		toggleClass([b_design], "on");
		toggleClass([b_who, b_design, b_code], "glo");
		toggleClass([b_who, b_code, t_title], "off");
	}else{
		on--;
		toggleClass([b_design, t_title], "on");
		toggleClass([b_who, b_design, b_code], "glo");
		toggleClass([b_who, b_code, t_title], "off");
		window.setTimeout(function(){toggleClass([t_title], "on");}, 300);
	}
}

function code() {
	var b_code = document.getElementById("code");
	if(b_code.classList.contains("off")){
		return;
	}

	var b_who = document.getElementById("who");
	var b_design = document.getElementById("design");
	var t_title = document.getElementById("title");
	
	
	if(!on){
		on++;
		toggleClass([b_code], "on");
		toggleClass([b_who, b_design, b_code], "glo");
		toggleClass([b_who, b_design, t_title], "off");
	}else{
		on--;
		toggleClass([b_code, t_title], "on");
		toggleClass([b_who, b_design, b_code], "glo");
		toggleClass([b_who, b_design, t_title], "off");
		window.setTimeout(function(){toggleClass([t_title], "on");}, 300);
	}
}

function toggleClass(els, name) {
	for(var i = 0; i < els.length; i++){
		els[i].classList.toggle(name);
	}
}