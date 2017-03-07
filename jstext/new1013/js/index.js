
function zancun(str){
	var zanC1 = document.getElementById(str);
	var queD = document.getElementById('queDing1');
	var ganL = document.getElementById('ganLan');
	      zanC1.onclick = function(){
	     ganL.style.display = 'block';
    };
    queD.onclick = function(){
    	ganL.style.display = "none";
    };
}
zancun('zanCun1');
zancun('zanCun2');
function duiHua(str,str1){
	var duiH1 = document.getElementById(str);
	var duiH2 = document.getElementById(str1);
	var woZ = document.getElementById('wozhi');
    duiH1.onmouseover = function(){
     	duiH2.style.display = 'block';
    };
    duiH1.onmouseout = function(){
    	duiH2.style.display = "none";
    };
    woZ.onclick = function(){
    	duiH2.style.display = "none";
    };
}
duiHua('duiHua1',"duiHua2");
duiHua('duiHua3','duiHua4');