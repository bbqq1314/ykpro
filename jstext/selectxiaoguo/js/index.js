var divS = document.getElementById('div1');
var ULS = document.getElementById('ul1');
function addEvent(obj,type,fn){
     if(obj.addEventListener){
          obj.addEventListener(type,fn,true);
     }else {
         obj.attachEvent('on'+type,fn);
     }
}
addEvent(divS,'click',function(){
	ULS.style.display = "block";
})
addEvent(document,'click',function(){
	ULS.style.display = "none";
})
addEvent(ULS,'click',function(e){
    var oEvent = e || window.event;
    var oTarget = oEvent.target || oEvent.srcElement;
    if(oTarget.tagName.toLowerCase()=='li'){
    	// console.log(oTarget);
    	divS.innerHTML = oTarget.innerHTML;
    	oTarget.innerHTML= "";
    }
})

