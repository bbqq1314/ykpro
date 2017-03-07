define(function(require,exports,module){
	var P = {
		_init:function(){
			P.piu();
			P._piupiu();
			P._onebian();
			P.onekeyboard();
			P.onexiala();
			P.fivezong();
			P.fivetianjia1();
			P.fivetianjia2();
			// P.fivetianjia3();
		},
		placeholder:function(str,defText){ 
			var twoU = document.getElementById('twoUl');
			var oInput = document.getElementById(str);
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
		piupiu:function(str1,str2,str3){
			$('#'+str1).on('click',function(){
				$('#'+str2).html($('#'+str3).val());
			})
		},
		_piupiu:function(){
			P.piupiu('onebao','oneage','ula01');
			P.piupiu('onebao','onexianju','ula02');
			P.piupiu('onebao','onexianju','ula4');
			P.piupiu('onebao','onehukou','ula5');
			P.piupiu('onebao','onegongzuo','ula3');
			P.piupiu('onebao','twod3','twod1');
			P.piupiu('onebao','twod4','twod2');
			P.piupiu('fourbao1','fourxs1','fourq1');
			P.piupiu('fourbao1','fourxs2','fourq2');
			P.piupiu('fourbao1','fourxs3','fourq3');
			P.piupiu('fourbao1','fourqw1','fourph1');
			P.piupiu('fourbao1','fourqw2','fourph2');
			P.piupiu('fourbao1','fourqw3','fourph3');
		},
		onebian:function(str1,str2,str3){
			$("#"+str1).on('click',function(){
				$('#'+str2).show('slow');
				$('#'+str3).hide('slow');
			})
		},
		_onebian:function(){
			P.onebian('onebian','onek1','onek2')
			P.onebian('twobian','twok2','twok1')
			P.onebian('threebian','threek2','threek1')
			P.onebian('fourbian','fourk2','fourk1')
			P.onebian('fourws','fourk2','fourk3')
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
		css:function(obj,attr,value){
		    if(arguments.length===2){
		      if(obj.currentStyle){
		        return obj.currenStyle[attr];
		      }else{
		        return getComputedStyle(obj,false)[attr];
		      }
		    }else if(arguments.length===3){
		      obj.style[attr]=value;
		    }
		},
		onekeyboard:function(str1,str2,str3){
		var oneName = document.getElementById('onename');
		var oneBaoCun = document.getElementById('ula01');
		var oneBao = document.getElementById('onek1');
		document.onkeydown = function(e){
	        var event = e || window.event;
		        if(event.keyCode==13){
		        	if(P.css(oneBao,"display")=='block'){
		        	  oneName.innerHTML = oneBaoCun.value;
		        	}
		        }
			}
		},
		onexiala:function(){
			$('.onepub-p').on('click','.onepub-d',function(){
				$(this).parents('.onepub-p').find('.onepub-ol').show();
				event.stopPropagation(); 
			}).on('click','.onepub-ol li',function(){
				$(this).parents('.onepub-p').find('input').val($(this).html());
				$(this).parents('.onepub-ol').hide();
			})
			$(document).on('click',function(){
				  	$('.onepub-ol').hide();
			})
		},
		fivezong:function(){
			var val = $('.five-yk1').val();
			$('#five-zong').on('click','#onebao5',function(){
				$('.fivek2').hide();
				$('.fivekelong').show();
				// var val = $('.five-yk1').val();
				if($('.five-yk1').attr('yang1')=='xi1'){
					// $('.five-yk1').attr("yang1",val);
					// console.log($('.five-yk1').val())
					// $('.five-bian').parent().find('cite').html($('.five-yk11').attr('yang1'));
					// $('.five-bian').parent().find('span').html($('.five-yk12').attr('yang1'))
					// alert(110)
					// console.log($('.five-yk11').attr('yang1'))	
					$('.five-yk11').attr("yang1",$('.five-yk11').val());
					$('.five-yk12').attr("yang1",$('.five-yk12').val());
					$('.five-yk13').attr("yang1",$('.five-yk13').val());
					$('.five-yk14').attr("yang1",$('.five-yk14').val());
					$('.five-yk15').attr("yang1",$('.five-yk15').val());
					$('.five-yk16').attr("yang1",$('.five-yk16').val());
					$('.five-yk17').attr("yang1",$('.five-yk17').val());
					$('.five-yk18').attr("yang1",$('.five-yk18').val());
					$('.five-yk19').attr("yang1",$('.five-yk19').val());
					$('.five-yk20').attr("yang1",$('.five-yk20').val());
					$('.five-yk21').attr("yang1",$('.five-yk21').val());
					$('.five-yk22').attr("yang1",$('.five-yk22').val());
					$('.five-yk23').attr("yang1",$('.five-yk23').val());
					$('.five-yk24').attr("yang1",$('.five-yk24').val());
					$('.five-yk25').attr("yang1",$('.five-yk25').val());
					$('.five-yk26').attr("yang1",$('.five-yk26').val());
					$('.five-bian').parent().find('cite').html($('.five-yk11').attr('yang1'));
					$('.five-bian').parent().find('span').html($('.five-yk12').attr('yang1'))
				}
				if($('.five-yk1').attr('yang2')=='xi2'){
					$('.five-yk11').attr("yang2",$('.five-yk11').val());
					$('.five-yk12').attr("yang2",$('.five-yk12').val());
					$('.five-yk13').attr("yang2",$('.five-yk13').val());
					$('.five-yk14').attr("yang2",$('.five-yk14').val());
					$('.five-yk15').attr("yang2",$('.five-yk15').val());
					$('.five-yk16').attr("yang2",$('.five-yk16').val());
					$('.five-yk17').attr("yang2",$('.five-yk17').val());
					$('.five-yk18').attr("yang2",$('.five-yk18').val());
					$('.five-yk19').attr("yang2",$('.five-yk19').val());
					$('.five-yk20').attr("yang2",$('.five-yk20').val());
					$('.five-yk21').attr("yang2",$('.five-yk21').val());
					$('.five-yk22').attr("yang2",$('.five-yk22').val());
					$('.five-yk23').attr("yang2",$('.five-yk23').val());
					$('.five-yk24').attr("yang2",$('.five-yk24').val());
					$('.five-yk25').attr("yang2",$('.five-yk25').val());
					$('.five-yk26').attr("yang2",$('.five-yk26').val());
					// $('.five-yk1').attr("yang2",val);
					$('.five-bian1').parent().find('cite').html($('.five-yk11').attr('yang2'))
					$('.five-bian1').parent().find('span').html($('.five-yk12').attr('yang2'))
				}
				if($('.five-yk1').attr('yang3')=='xi3'){
					$('.five-yk11').attr("yang3",$('.five-yk11').val());
					$('.five-yk12').attr("yang3",$('.five-yk12').val());
					$('.five-yk13').attr("yang3",$('.five-yk13').val());
					$('.five-yk14').attr("yang3",$('.five-yk14').val());
					$('.five-yk15').attr("yang3",$('.five-yk15').val());
					$('.five-yk16').attr("yang3",$('.five-yk16').val());
					$('.five-yk17').attr("yang3",$('.five-yk17').val());
					$('.five-yk18').attr("yang3",$('.five-yk18').val());
					$('.five-yk19').attr("yang3",$('.five-yk19').val());
					$('.five-yk20').attr("yang3",$('.five-yk20').val());
					$('.five-yk21').attr("yang3",$('.five-yk21').val());
					$('.five-yk22').attr("yang3",$('.five-yk22').val());
					$('.five-yk23').attr("yang3",$('.five-yk23').val());
					$('.five-yk24').attr("yang3",$('.five-yk24').val());
					$('.five-yk25').attr("yang3",$('.five-yk25').val());
					$('.five-yk26').attr("yang3",$('.five-yk26').val());
					$('.five-bian2').parent().find('cite').html($('.five-yk11').attr('yang3'))
					$('.five-bian2').parent().find('span').html($('.five-yk12').attr('yang3'))
				}
			})
		},	
		fivetianjia1:function(){
			$('.fivek2').hide();
			$('.fivekelong').show();
			var index = 1;
			$('#five-zong').on('click',"#fivebian",function(){
				$('.fivek2').show();
				$('.fivekelong').hide();
				var oClass="five-bian" +index;
				index++;
				$('.fivekelong').append('<div class="clearfix"><cite>前程无忧</cite><em>-</em><span>销售经理</span><b>删除</b><strong class='+oClass+'>编辑</strong></div>')
			})
		},
		fivetianjia2:function(){
			$('#five-zong').on('click','.five-bian',function(){
				$('.five-yk11').val($('.five-yk11').attr('yang1'))
				$('.five-yk12').val($('.five-yk12').attr('yang1'))
				$('.five-yk13').val($('.five-yk13').attr('yang1'))
				$('.five-yk14').val($('.five-yk14').attr('yang1'))
				$('.five-yk15').val($('.five-yk15').attr('yang1'))
				$('.five-yk16').val($('.five-yk16').attr('yang1'))
				$('.five-yk17').val($('.five-yk17').attr('yang1'))
				$('.five-yk18').val($('.five-yk18').attr('yang1'))
				$('.five-yk19').val($('.five-yk19').attr('yang1'))
				$('.five-yk20').val($('.five-yk20').attr('yang1'))
				$('.five-yk21').val($('.five-yk21').attr('yang1'))
				$('.five-yk22').val($('.five-yk22').attr('yang1'))
				$('.five-yk23').val($('.five-yk23').attr('yang1'))
				$('.five-yk24').val($('.five-yk24').attr('yang1'))
				$('.five-yk25').val($('.five-yk25').attr('yang1'))
				$('.five-yk26').val($('.five-yk26').attr('yang1'))
				// $('.five-bian').parent().find('cite').html($('.five-yk1').attr('yang1'))
				// $('.five-bian').parent().find('span').html($('.five-yk1').attr('yang1'))
				// alert(515);
				$('.fivekelong').hide()
				$('.fivek2').show();
			}).on('click','.five-bian1',function(){
				// $('.five-yk1').val($('.five-yk1').attr('yang2'))
				$('.five-yk11').val($('.five-yk11').attr('yang2'))
				$('.five-yk12').val($('.five-yk12').attr('yang2'))
				$('.five-yk13').val($('.five-yk13').attr('yang2'))
				$('.five-yk14').val($('.five-yk14').attr('yang2'))
				$('.five-yk15').val($('.five-yk15').attr('yang2'))
				$('.five-yk16').val($('.five-yk16').attr('yang2'))
				$('.five-yk17').val($('.five-yk17').attr('yang2'))
				$('.five-yk18').val($('.five-yk18').attr('yang2'))
				$('.five-yk19').val($('.five-yk19').attr('yang2'))
				$('.five-yk20').val($('.five-yk20').attr('yang2'))
				$('.five-yk21').val($('.five-yk21').attr('yang2'))
				$('.five-yk22').val($('.five-yk22').attr('yang2'))
				$('.five-yk23').val($('.five-yk23').attr('yang2'))
				$('.five-yk24').val($('.five-yk24').attr('yang2'))
				$('.five-yk25').val($('.five-yk25').attr('yang2'))
				$('.five-yk26').val($('.five-yk26').attr('yang2'))
				// $('.five-bian').parent().find('cite').html($('.five-yk1').attr('yang1'))
				// $('.five-bian').parent().find('span').html($('.five-yk1').attr('yang1'))
				$('.fivekelong').hide()
				$('.fivek2').show();
			}).on('click','.five-bian2',function(){
				$('.five-yk11').val($('.five-yk11').attr('yang3'))
				$('.five-yk12').val($('.five-yk12').attr('yang3'))
				$('.five-yk13').val($('.five-yk13').attr('yang3'))
				$('.five-yk14').val($('.five-yk14').attr('yang3'))
				$('.five-yk15').val($('.five-yk15').attr('yang3'))
				$('.five-yk16').val($('.five-yk16').attr('yang3'))
				$('.five-yk17').val($('.five-yk17').attr('yang3'))
				$('.five-yk18').val($('.five-yk18').attr('yang3'))
				$('.five-yk19').val($('.five-yk19').attr('yang3'))
				$('.five-yk20').val($('.five-yk20').attr('yang3'))
				$('.five-yk21').val($('.five-yk21').attr('yang3'))
				$('.five-yk22').val($('.five-yk22').attr('yang3'))
				$('.five-yk23').val($('.five-yk23').attr('yang3'))
				$('.five-yk24').val($('.five-yk24').attr('yang3'))
				$('.five-yk25').val($('.five-yk25').attr('yang3'))
				$('.five-yk26').val($('.five-yk26').attr('yang3'))
				// $('.five-yk1').val($('.five-yk1').attr('yang3'))
				// $('.five-bian').parent().find('cite').html($('.five-yk1').attr('yang1'))
				// $('.five-bian').parent().find('span').html($('.five-yk1').attr('yang1'))
				$('.fivekelong').hide()
				$('.fivek2').show();
			})
		}
		// fivetianjia3:function(){
		// 	$('#five-zong').on('click','#onebao5',function(){
		// 	$('.fivekelong').show();
		// 	$('.fivek2').hide();
		// 	})
		// }	
	}
	module.exports = {
		init:P._init
	}
});


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
		// P.onekeyboard('onename','ula01','onebao'); 
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

		// document.onkeydown = function(e){
  //       var event = e || window.event;
  //       // console.log(event);
  //       document.title = event.keyCode;
  //       if(event.keyCode==13){
  //           alert();
  //       }
  //   }

  		// _onekeyboard:function(){
		// 	P.onekeyboard('onename','ula01','onek1');
		// 	P.onekeyboard('oneage','ula02','onek1');
		// 	P.onekeyboard('onexianju','ula4','onek1');
		// 	P.onekeyboard('onehukou','ula5','onek1');
		// 	P.onekeyboard('onegongzuo','ula3','onek1');
		// 	P.onekeyboard('twod3','twod1','twok2');
		// 	P.onekeyboard('twod4','twod2','twok2');
		// 	P.onekeyboard('fourxs1','fourq1','fourk2');
		// 	P.onekeyboard('fourxs2','fourq2','fourk2');
		// 	P.onekeyboard('fourxs3','fourq3','fourk2');
		// 	P.onekeyboard('fourqw1','fourph1','fourk2');
		// 	P.onekeyboard('fourqw2','fourph2','fourk2');
		// 	P.onekeyboard('fourqw3','fourph3','fourk2');
		// }


		// fivetianjia:function(){
		// 	// alert();
		// 	var xiG = document.getElementById('five-bian')
		// 	xiG.onclick = function(){
		// 		var oDiv = document.createElement('div')
		// 		alert();
		// 		var fiveLo = document.getElementById('fivekelong')
		// 		var index = 1;
		// 		var oClass="fivexin"+index;
		// 		oDiv.innerHTML = "<cite>前程无忧</cite><em>-</em><span>销售经理</span><b>删除</b><strong class=oClass>编辑</strong>"
		// 		oList.appendChild(fiveLo);
		// 	};
			// $('#five-zong').on('click',"#five-bian",function(){
		// }