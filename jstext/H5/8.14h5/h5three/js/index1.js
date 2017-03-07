define(function(require, exports, module) {
	var P = {
		_init:function(){
			P.piupiu();
		},
		addEvent:function(obj,type,fn){
		     if(obj.addEventListener){
		          obj.addEventListener(type,fn,true);
		     }else {
		         obj.attachEvent('on'+type,fn);
		     }
		},
		piu:function(str1,str2){
			var dianA = document.getElementById(str1);
			var xiaZ = document.getElementById(str2);
			P.addEvent(dianA,'click',function(e){
				var oEvent = e || window.event;
				xiaZ.style.display = "block"
			})
			P.addEvent(document,'click',function(e){
				var oEvent = e || window.event;
				xiaZ.style.display = "none"
			})
			P.addEvent(xiaZ,'click',function(e){
				var oEvent = e || window.event;
				var oTarget = oEvent.target || oEvent.srcElement;
				if(oTarget.tagName.toLowerCase()=='li'){
				dianA.innerHTML = oTarget.innerHTML
				xiaZ.style.display = "none"
				}
			})
		},
		piupiu:function(){
			P.piu("diana1","xiaz1")
			P.piu("diana2","xiaz2")
			P.piu("diana3","xiaz3")
		}
	}
	module.exports = {
		init:P._init
	}
});
		// piupiu:function(str1,str2,str3){
		// 	var divS = document.getElementById(str1);
		// 	var ulA = document.getElementById(str2);
		// 	var ulS = document.getElementById(str3);	
		// 	P.addEvent(divS,'click',function(e){
		// 		var oEvent = e || window.event;
		// 		ulS.style.display = "block";
		// 	})
		// 	P.addEvent(document,'click',function(e){
		//     	var oEvent = e || window.event;
		// 		ulS.style.display = "none";
		// 	})
		// 	P.addEvent(ulS,'click',function(e){
		// 	    var oEvent = e || window.event;
		// 	    var oTarget = oEvent.target || oEvent.srcElement;
		// 	    if(oTarget.tagName.toLowerCase()=='li'){
		// 	    	// console.log(oTarget);
		// 	    	ulA.value = oTarget.innerHTML;
		// 	    	// oTarget.innerHTML= "";
		// 	    }
		// 	})
		// },
		// alertBox:function(){
		// 	P.piupiu('onee1','ula1','oneo1');
		// 	P.piupiu('onee2','ula2','oneo2');
		// 	P.piupiu('onee3','ula3','oneo3');
		// 	P.piupiu('onee4','ula4','oneo4');
		// 	P.piupiu('onee5','ula5','oneo5');
		// 	P.piupiu('fourxl1','fourph1','fourol1');
		// 	P.piupiu('fourxl2','fourph2','fourol2');
		// 	P.piupiu('fourxl3','fourph3','fourol3');
		// },
		// alertBox1:function(str1,str2,str3){
		// 	var oneName = document.getElementById(str1);
		// 	var oneBaoCun = document.getElementById(str2);
		// 	var oneBao = document.getElementById(str3);
		// 	P.addEvent(oneBao,'click',function(e){
		// 		var oEvent = e || window.event;
		// 		oneName.innerHTML = oneBaoCun.value;
		// 	})
		// },
		// _alertBox1:function(){
		// 	P.alertBox1('onename','ula01','onebao'); 
		// 	P.alertBox1('oneage','ula02','onebao'); 
		// 	P.alertBox1('onexianju','ula4','onebao'); 
		// 	P.alertBox1('onehukou','ula5','onebao'); 
		// 	P.alertBox1('onegongzuo','ula3','onebao'); 
		// 	P.alertBox1('twod3','twod1','onebao1'); 
		// 	P.alertBox1('twod4','twod2','onebao1'); 
		// 	P.alertBox1('fourxs1','fourq1','fourbao1');
		// 	P.alertBox1('fourxs2','fourq2','fourbao1');
		// 	P.alertBox1('fourxs3','fourq3','fourbao1');
		// 	P.alertBox1('fourqw1','fourph1','fourbao1');
		// 	P.alertBox1('fourqw2','fourph2','fourbao1');
		// 	P.alertBox1('fourqw3','fourph3','fourbao1');
		// },
		// alertBox2:function(){
		// 	// alert();
		// 	var oneQuXiao = document.getElementById('onequxiao')
		// 	P.addEvent(oneQuXiao,'click',function(e){
		// 		var oEvent = e || window.event;
		// 		P.alertBox();
		// 	})
		// },
		// onesex:function(){
		// 	var oneNan = document.getElementById('onenan');
		// 	var oneNv = document.getElementById('onenv');
		// 	var oneSex = document.getElementById('onesex')
		// 	P.addEvent(oneNan,'click',function(e){
		// 		var oEvent = e || window.event;
		// 		oneNan.className = "cur";
		// 		oneNv.className = "";
		// 		oneSex.innerHTML = '男';
		// 	})
		// 	P.addEvent(oneNv,'click',function(e){
		// 		var oEvent = e || window.event;
		// 		oneNan.className = "";
		// 		oneNv.className = "cur";
		// 		oneSex.innerHTML = '女';
		// 	})
		// },
		// onetupian:function(){
		// 	var oneF = document.getElementById('onef');
		// 	var oneM = document.getElementById('onem');
		// 	P.addEvent(oneF,'click',function(e){
		// 	var oEvent = e || window.event;
		// 		if(oneF.className==""){
		// 			oneM.innerHTML = "在职";
		// 			oneF.className = "onei";
		// 		}else{
		// 			oneM.innerHTML = "离职";
		// 			oneF.className = "";
		// 		}
		// 	})
		// },
		// onek1:function(str1,str2,str3){
		// 	var oneK1 = document.getElementById(str1);
		// 	var oneK2 = document.getElementById(str2);
		// 	var oneB1 = document.getElementById(str3);
		// 	P.addEvent(oneB1,'click',function(e){
		// 		var oEvent = e || window.event;
		// 		oneK2.style.display = "none";
		// 		oneK1.style.display = "block";
		// 		// oneB1.style.display = "none";
		// 	})
		// },
		// onek:function(){
		// 	P.onek1("onek1","onek2","onebian");
		// 	P.onek1("twok2","twok1","twobian");
		// 	P.onek1("threek2","threek1","threebian");
		// 	P.onek1("fourk2","fourk1","fourbian");
		// 	P.onek1("fourk2","fourk3","fourws");
		// },
		// zongy:function(){
		// 	var oneK1 = document.getElementById("onek1");
		// 	var oneK2 = document.getElementById("onek2");
		// 	var zongY = document.getElementById('zongy');
		// 	P.addEvent(zongY,'click',function(e){
		// 		var oEvent = e || window.event;
		// 		oneK2.style.display = "block";
		// 		oneK1.style.display = "none";
		// 	})
		// },
		// youxiang:function(){
		// 	var twoY1 = document.getElementById("twod2");
		// 	var twoY2 = document.getElementById("twoding");
		// 	P.addEvent(twoY1,'click',function(e){
		// 		var oEvent = e || window.event;
		// 		twoY2.style.display = 'none';
		// 	})
		// },
		// fourjia:function(str1,str2,str3){
		// 	var fourDj = document.getElementById(str1);
		// 	var fourT = document.getElementById(str2);
		// 	var boom = document.createElement('b');
		// 	P.addEvent(fourDj,'click',function(e){
		// 		var oEvent = e || window.event;
		// 		boom.innerHTML = str3;
		// 		fourT.appendChild(boom);
		// 	})	
		// },
		// _fourjia:function(){
		// 	P.fourjia("fourdj1","fourjia1","电话销售")
		// 	P.fourjia("fourdj2","fourjia1","电话销售")
		// 	P.fourjia("fourdj3","fourjia1","电话是售")
		// 	P.fourjia("fourdj4","fourjia1","电话销售")
		// 	P.fourjia("fourdj5","fourjia1","电胡销售")
		// 	P.fourjia("fourdj5","fourjia1","电话销售")
		// },
		// fivetj:function(){
		// 	var fiveB = document.getElementById('fivebian');
		// 	var fiveL = document.getElementById('fiveli');
		// 	var idIndex = 1;
		// 	fiveB.onclick = function(){
		// 	idIndex++;
		// 	var ul2 = fiveL.cloneNode(true);
		// 	ul2.id = "fiveli" + idIndex;
		// 	fiveL.parentNode.appendChild(ul2);
		// 	}
		// },
		// attr:function(obj, attr, value){
	 //        if(arguments.length==2){
	 //            if(obj.attributes[attr]){
	 //                return obj.attributes[attr].nodeValue;
	 //            }else{
	 //                return null;
	 //            }
	 //        }
	 //        else if(arguments.length==3){
	 //            obj.setAttribute(attr,value);
	 //        }
	 //    },
		// next:function(obj){
		// 	if(!obj)return null;
		// 	return obj.nextElementSibling || obj.nextSibling;
		// },
		// prev:function(obj){
		// 	if(!obj)return null;
		// 	return obj.previousElementSibling || obj.previousSibling;
		// },
		// fivexl:function(){
		// 	var fiveO = document.getElementById('fiveol');
		// 	var fiveLi = fiveO.Children;
		// 	P.addEvent(fiveO,'click',function(e){
		// 	var oEvent = e || window.event;
		// 	var oTarget = oEvent.target || oEvent.srcElement;
		// 	if(P.attr(oTarget,'abc')=='nian'){
		// 		P.prev(oTarget).style.display = 'block';
		// 		}
		// 		if(oTarget.tagName.toLowerCase()=='li'){
	 //    			console.log(oTarget);
	 //     			P.prev(oTarget.parentNode).value = oTarget.innerHTML;
	 //     			oTarget.parentNode.style.display = 'none';
		// 		}
		// 	})
		// },
