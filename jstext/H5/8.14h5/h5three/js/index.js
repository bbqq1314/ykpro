// var twoU = document.getElementById('twoUl');
// var xingM = twoU.children[0].children[1].children;
// var xingB = twoU.children[0].children[2].children;
// console.log(xingM[0]);
// function placeholder(oInput,defText){ 
//     var value = defText || oInput.value
//     if(oInput.value==''){
//         oInput.value=value;
//         oInput.style.color="#999"
//     }
//     oInput.onfocus=function(){ 
//         if(this.value==value){ 
//             this.value='';
//         }
//         this.style.color="#333"
//     }; 
//     oInput.onblur=function(){ 
//         if(this.value==''){
//             this.value=value;
//             oInput.style.color="#999"
//         } 
//     }
// }
// placeholder(ULA01,'姓名');
// placeholder(ULA02,'生日');
// placeholder(ULA1,'现居地(省)');
// placeholder(ULA2,'户口地(省)');
// placeholder(ULA3,'工作经验');
// placeholder(ULA4,'现居地(市)');
// placeholder(ULA5,'户口地(市)');
// function piupiu(str1,str2,str3){
// var divS = document.getElementById(str1);
// var ULA = document.getElementById(str2);
// var ULS = document.getElementById(str3);
// function addEvent(obj,type,fn){
// 	     if(obj.addEventListener){
// 	          obj.addEventListener(type,fn,true);
// 	     }else {
// 	         obj.attachEvent('on'+type,fn);
// 	     }
// 	}
// 	addEvent(divS,'click',function(){
// 		ULS.style.display = "block";
// 	})
// 	addEvent(document,'click',function(){
// 		ULS.style.display = "none";
// 	})
// 	addEvent(ULS,'click',function(e){
// 	    var oEvent = e || window.event;
// 	    var oTarget = oEvent.target || oEvent.srcElement;
// 	    if(oTarget.tagName.toLowerCase()=='li'){
// 	    	// console.log(oTarget);
// 	    	ULA.value = oTarget.innerHTML;
// 	    	// oTarget.innerHTML= "";
// 	    }
// 	})
// }
// piupiu('oneE1','ULA1','oneO1');
// piupiu('oneE2','ULA2','oneO2');
// piupiu('oneE3','ULA3','oneO3');
// piupiu('oneE4','ULA4','oneO4');
// piupiu('oneE5','ULA5','oneO5');

