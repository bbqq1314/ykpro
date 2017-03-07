define(function(require, exports, module) {
	var P = {
		_init:function(){
			P.piu();
			P.alertBox();
			P._alertBox1();
			P.alertBox2();
			P.onesex();
			P.onetupian();
			P.onek();
			P.zongy();
			P.youxiang();
			P._fourjia();
			P.fivetj();
			P.fivexl();
			P.fivexl1();
			// P.fiveholder();
		},
		placeholder:function(str,defText){ 
			var twoU = $('twoUl');
			var oInput = $(str);
		    var value = defText || oInput.value
		    if(oInput.value==''){
		        oInput.value=value;
		        oInput.style.color="#999"
		    }
		    oInput.onfocus=function(){ 
		        if(this.value==value){ 
		            this.value='';
		        }
		        this.style.color="#333"
		    }; 
		    oInput.onblur=function(){ 
		        if(this.value==''){
		            this.value=value;
		            oInput.style.color="#999"
		        } 
		    }
		},
		piu:function(){
			P.placeholder('ula01','姓名');
			P.placeholder('ula02','生日');
			P.placeholder('ula1','现居地(省)');
			P.placeholder('ula2','户口地(省)');
			P.placeholder('ula3','工作经验');
			P.placeholder('ula4','现居地(市)');
			P.placeholder('ula5','户口地(市)');
			P.placeholder('twod1','电话');
			P.placeholder('twod2','邮箱');
			P.placeholder('threed1','身高');
			P.placeholder('threed2','体重');
			P.placeholder('fourq1','');
			P.placeholder('fourq2','');
			P.placeholder('fourq3','');
			P.placeholder('fourph1','邮箱');
			P.placeholder('fourph2','省');
			P.placeholder('fourph3','市');
		},
		addEvent:function(obj,type,fn){
		     if(obj.addEventListener){
		          obj.addEventListener(type,fn,true);
		     }else {
		         obj.attachEvent('on'+type,fn);
		     }
		},
		piupiu:function(str1,str2,str3){
			var divS = $(str1);
			var ulA = $(str2);
			var ulS = $(str3);	
			P.addEvent(divS,'click',function(e){
				var oEvent = e || window.event;
				ulS.style.display = "block";
			})
			P.addEvent(document,'click',function(e){
		    	var oEvent = e || window.event;
				ulS.style.display = "none";
			})
			P.addEvent(ulS,'click',function(e){
			    var oEvent = e || window.event;
			    var oTarget = oEvent.target || oEvent.srcElement;
			    if(oTarget.tagName.toLowerCase()=='li'){
			    	// console.log(oTarget);
			    	ulA.value = oTarget.innerHTML;
			    	// oTarget.innerHTML= "";
			    }
			})
		},
		alertBox:function(){
			P.piupiu('onee1','ula1','oneo1');
			P.piupiu('onee2','ula2','oneo2');
			P.piupiu('onee3','ula3','oneo3');
			P.piupiu('onee4','ula4','oneo4');
			P.piupiu('onee5','ula5','oneo5');
			P.piupiu('fourxl1','fourph1','fourol1');
			P.piupiu('fourxl2','fourph2','fourol2');
			P.piupiu('fourxl3','fourph3','fourol3');
		},
		alertBox1:function(str1,str2,str3){
			var oneName = document.getElementById(str1);
			var oneBaoCun = document.getElementById(str2);
			var oneBao = document.getElementById(str3);
			P.addEvent(oneBao,'click',function(e){
				var oEvent = e || window.event;
				oneName.innerHTML = oneBaoCun.value;
			})
		},
		_alertBox1:function(){
			P.alertBox1('onename','ula01','onebao'); 
			P.alertBox1('oneage','ula02','onebao'); 
			P.alertBox1('onexianju','ula4','onebao'); 
			P.alertBox1('onehukou','ula5','onebao'); 
			P.alertBox1('onegongzuo','ula3','onebao'); 
			P.alertBox1('twod3','twod1','onebao1'); 
			P.alertBox1('twod4','twod2','onebao1'); 
			P.alertBox1('fourxs1','fourq1','fourbao1');
			P.alertBox1('fourxs2','fourq2','fourbao1');
			P.alertBox1('fourxs3','fourq3','fourbao1');
			P.alertBox1('fourqw1','fourph1','fourbao1');
			P.alertBox1('fourqw2','fourph2','fourbao1');
			P.alertBox1('fourqw3','fourph3','fourbao1');
		},
		alertBox2:function(){
			// alert();
			var oneQuXiao = document.getElementById('onequxiao')
			P.addEvent(oneQuXiao,'click',function(e){
				var oEvent = e || window.event;
				P.alertBox();
			})
		},
		onesex:function(){
			var oneNan = document.getElementById('onenan');
			var oneNv = document.getElementById('onenv');
			var oneSex = document.getElementById('onesex')
			P.addEvent(oneNan,'click',function(e){
				var oEvent = e || window.event;
				oneNan.className = "cur";
				oneNv.className = "";
				oneSex.innerHTML = '男';
			})
			P.addEvent(oneNv,'click',function(e){
				var oEvent = e || window.event;
				oneNan.className = "";
				oneNv.className = "cur";
				oneSex.innerHTML = '女';
			})
		},
		onetupian:function(){
			var oneF = document.getElementById('onef');
			var oneM = document.getElementById('onem');
			P.addEvent(oneF,'click',function(e){
			var oEvent = e || window.event;
				if(oneF.className==""){
					oneM.innerHTML = "在职";
					oneF.className = "onei";
				}else{
					oneM.innerHTML = "离职";
					oneF.className = "";
				}
			})
		},
		onek1:function(str1,str2,str3){
			var oneK1 = document.getElementById(str1);
			var oneK2 = document.getElementById(str2);
			var oneB1 = document.getElementById(str3);
			P.addEvent(oneB1,'click',function(e){
				var oEvent = e || window.event;
				oneK2.style.display = "none";
				oneK1.style.display = "block";
				// oneB1.style.display = "none";
			})
		},
		onek:function(){
			P.onek1("onek1","onek2","onebian");
			P.onek1("twok2","twok1","twobian");
			P.onek1("threek2","threek1","threebian");
			P.onek1("fourk2","fourk1","fourbian");
			P.onek1("fourk2","fourk3","fourws");
		},
		zongy:function(){
			var oneK1 = document.getElementById("onek1");
			var oneK2 = document.getElementById("onek2");
			var zongY = document.getElementById('zongy');
			P.addEvent(zongY,'click',function(e){
				var oEvent = e || window.event;
				oneK2.style.display = "block";
				oneK1.style.display = "none";
			})
		},
		youxiang:function(){
			var twoY1 = document.getElementById("twod2");
			var twoY2 = document.getElementById("twoding");
			P.addEvent(twoY1,'click',function(e){
				var oEvent = e || window.event;
				twoY2.style.display = 'none';
			})
		},
		fourjia:function(str1,str2,str3){
			var fourDj = document.getElementById(str1);
			var fourT = document.getElementById(str2);
			var boom = document.createElement('b');
			P.addEvent(fourDj,'click',function(e){
				var oEvent = e || window.event;
				boom.innerHTML = str3;
				fourT.appendChild(boom);
			})	
		},
		_fourjia:function(){
			P.fourjia("fourdj1","fourjia1","电话销售")
			P.fourjia("fourdj2","fourjia1","电话销售")
			P.fourjia("fourdj3","fourjia1","电话是售")
			P.fourjia("fourdj4","fourjia1","电话销售")
			P.fourjia("fourdj5","fourjia1","电胡销售")
			P.fourjia("fourdj5","fourjia1","电话销售")
		},
		fivetj:function(){
			var fiveB = document.getElementById('fivebian');
			var fiveL = document.getElementById('fiveli');
			var idIndex = 1;
			fiveB.onclick = function(){
			idIndex++;
			var ul2 = fiveL.cloneNode(true);
			ul2.id = "fiveli" + idIndex;
			fiveL.parentNode.appendChild(ul2);
			}
		},
		attr:function(obj, attr, value){
	        if(arguments.length==2){
	            if(obj.attributes[attr]){
	                return obj.attributes[attr].nodeValue;
	            }else{
	                return null;
	            }
	        }
	        else if(arguments.length==3){
	            obj.setAttribute(attr,value);
	        }
	    },
		next:function(obj){
			if(!obj)return null;
			return obj.nextElementSibling || obj.nextSibling;
		},
		prev:function(obj){
			if(!obj)return null;
			return obj.previousElementSibling || obj.previousSibling;
		},
		fivexl:function(){
			var fiveO = document.getElementById('fiveol');
			var fiveLi = fiveO.Children;
			P.addEvent(fiveO,'click',function(e){
			var oEvent = e || window.event;
			var oTarget = oEvent.target || oEvent.srcElement;
			if(P.attr(oTarget,'abc')=='nian'){
				P.prev(oTarget).style.display = 'block';
				}
				if(oTarget.tagName.toLowerCase()=='li'){
	    			console.log(oTarget);
	     			P.prev(oTarget.parentNode).value = oTarget.innerHTML;
	     			oTarget.parentNode.style.display = 'none';
				}
			})
		},
		fivexl1:function(){
			P.addEvent(document,'click',function(e){
				var oEvent = e || window.event;
				var oTarget = oEvent.target || oEvent.srcElement;
				if(P.attr(oTarget,'abd')=='hao'){
					P.prev(oTarget.parentNode.parentNode).children[0].innerHTML = oTarget.parentNode.parentNode.children[1].children[0].value;
					P.prev(oTarget.parentNode.parentNode).children[2].innerHTML = oTarget.parentNode.parentNode.children[1].children[1].value;
				}
			})
		}
		// fiveholder:function(){
		// 	console.log(P.attr(document,'abe'))
		// 	if(P.attr(document,'abe')=='guo'){
		// 		this.onfocus=function(){
		// 			if(this.value==value){
		// 				this.value='';
		// 			}
		// 			this.style.color= "#333"
		// 		}
		// 		this.onblur=function(){
		// 			if(this.value==''){
		// 				this.value=value;
		// 				this.style.color='#999'
		// 			}
		// 		}
		// 	}
		// }
	}
	module.exports = {
		init:P._init
	}
});

	// placeholder:function(str,defText){ 
	// 		var twoU = document.getElementById('twoUl');
	// 		var oInput = document.getElementById(str);
	// 	    var value = defText || oInput.value
	// 	    if(oInput.value==''){
	// 	        oInput.value=value;
	// 	        oInput.style.color="#999"
	// 	    }
	// 	    oInput.onfocus=function(){ 
	// 	        if(this.value==value){ 
	// 	            this.value='';
	// 	        }
	// 	        this.style.color="#333"
	// 	    }; 
	// 	    oInput.onblur=function(){ 
	// 	        if(this.value==''){
	// 	            this.value=value;
	// 	            oInput.style.color="#999"
	// 	        } 
	// 	    }
	// 	},

