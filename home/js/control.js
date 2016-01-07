var b_who = document.getElementById("who");
var b_design = document.getElementById("design");
var b_code = document.getElementById("code");
var t_title = document.getElementById("name");
var t_face = document.getElementById("face");

function init() {
	b_who.classList.add("trans");
	b_design.classList.add("trans");
	b_code.classList.add("trans");
	t_title.classList.add("trans");
	t_face.classList.add("trans");

	b_who.onclick = who;
	b_design.onclick = design;
	b_code.onclick = code;
}

function who() {
	if(b_who.classList.contains("off")) return;
	toggleClass([b_who], "on");
	toggleClass([b_design, b_code, t_title], "off");
	toggleClass([t_face], "img-off");
}

function design() {
	if(b_design.classList.contains("off")) return;
	toggleClass([b_design], "on");
	toggleClass([b_who, b_code, t_title], "off");
	toggleClass([t_face], "img-off");
}

function code() {
	if(b_code.classList.contains("off")) return;
	toggleClass([b_code], "on");
	toggleClass([b_who, b_design, t_title], "off");
	toggleClass([t_face], "img-off");
}

function toggleClass(els, name) {
	for(var i = 0; i < els.length; i++){
		els[i].classList.toggle(name);
	}
}

init();
