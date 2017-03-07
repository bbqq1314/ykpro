define(function(require,exports,module){
	var P = {
		_init:function(){
			P.piu();
			P._piupiu();
			P._onebian();
			P.onekeyboard();
			P.onexiala();
			// P.fivezong();
			// P.fivetianjia1();
			// P.fivetianjia2();
			P.fivekun1();
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
		fivekun1:function(){
			var rawData = {
				"workexperience":[
				]
			}
			function pub1(){
				var strs = '';
				index = 0;
				$.each(workpr,function(key,val){
					strs += '<div class="fivehou1 clearfix" data-id='+index+'>\
					<cite>'+val.qian1+'</cite>\
					<em>-</em>\
					<span>'+val.qian2+'</span>\
					<b>删除</b>\
					<strong class="five-bian">编辑</strong>\
					</div>';
					index++;
				})
				$('#onebao5').attr('xinname','');
				$('#fivekelong').html(strs);  
			}
			var workpr = rawData.workexperience;
			var index = 0;
   	// 		function fivesy4(){
   	// 			var strs = '';
				// $.each(workpr,function(key,val){
				// 	var _id="shuzuid"+index
				// 	index++;
				// 		strs += '<div class="fivehou1 clearfix" id='+_id+'>\
				// 		<cite>'+val.qian1+'</cite>\
				// 		<em>-</em>\
				// 		<span>'+val.qian2+'</span>\
				// 		<b>删除</b>\
				// 		<strong class="five-bian">编辑</strong>\
				// 		</div>';
				// 	})
				// $('#fivekelong').html(strs);
   	// 		}
			$('.fivek2').hide();
			$('.fivekelong').show();
			$('#five-zong').on('click',"#fivebian",function(){
				$('.fivek2').show();
				$('.fivekelong').hide();
				$('#onebao5').attr('xinname','wo1')
			}).on('click','#onebao5',function(){
				$('.fivek2').hide();
				$('.fivekelong').show();
		        var wk1 = {
					qian1:$('.five-yk11').val(),
					qian2:$('.five-yk12').val(),
					qian3:$('.five-yk13').val(),
					qian4:$('.five-yk14').val(),
					qian5:$('.five-yk15').val(),
					qian6:$('.five-yk16').val(),
					qian7:$('.five-yk17').val(),
					qian8:$('.five-yk18').val(),
					qian9:$('.five-yk19').val(),
					qian10:$('.five-yk20').val(),
					qian11:$('.five-yk21').val(),
					qian12:$('.five-yk22').val(),
					qian13:$('.five-yk23').val(),
					qian14:$('.five-yk24').val(),
					qian15:$('.five-yk25').val(),
					qian16:$('.five-yk26').val(),
				}
				if($('#onebao5').attr('xinname')=='wo1'){
					workpr.push(wk1)
				}else{
					var xiaBiao = $('#fiveol').data('_id')
					workpr[xiaBiao] = wk1;
				}
				pub1();
			}).on('click','.five-bian',function(){
				var _this = $(this);
				var _index = _this.parents('.fivehou1').data('id')
				$('#fiveol').data('_id',_index)
				$('.fivek2').show();
				$('.fivekelong').hide();
				$('.five-yk11').val(workpr[_index].qian1)
				$('.five-yk12').val(workpr[_index].qian2)
				$('.five-yk13').val(workpr[_index].qian3)
				$('.five-yk14').val(workpr[_index].qian4)
				$('.five-yk15').val(workpr[_index].qian5)
				$('.five-yk16').val(workpr[_index].qian6)
				$('.five-yk17').val(workpr[_index].qian7)
				$('.five-yk18').val(workpr[_index].qian8)
				$('.five-yk19').val(workpr[_index].qian9)
				$('.five-yk20').val(workpr[_index].qian10)
				$('.five-yk21').val(workpr[_index].qian11)
				$('.five-yk22').val(workpr[_index].qian12)
				$('.five-yk23').val(workpr[_index].qian13)
				$('.five-yk24').val(workpr[_index].qian14)
				$('.five-yk25').val(workpr[_index].qian15)
				$('.five-yk26').val(workpr[_index].qian16)
			})
		}
	}
	module.exports = {
		init:P._init
	}
});





	// fivekun1:function(){
		// 	var rawData = {
		// 		"workexperience":[
		// 			// {
		// 			// 	qian1:"新航路第一个",
		// 			// 	qian2:"新航路",
		// 			// 	qian3:"新航路",
		// 			// 	qian4:"新航路",
		// 			// 	qian5:"新航路",
		// 			// 	qian6:"新航路",
		// 			// 	qian7:"新航路",
		// 			// 	qian8:"新航路",
		// 			// 	qian9:"新航路",
		// 			// 	qian10:"新航路",
		// 			// 	qian11:"新航路",
		// 			// 	qian12:"新航路",
		// 			// 	qian13:"新航路",
		// 			// 	qian14:"新航路",
		// 			// 	qian15:"新航路",
		// 			// 	qian16:"新航路",
		// 			// },
		// 			// {
		// 			// 	qian1:"新航路第二个",
		// 			// 	qian2:"新航路",
		// 			// 	qian3:"新航路",
		// 			// 	qian4:"新航路",
		// 			// 	qian5:"新航路",
		// 			// 	qian6:"新航路",
		// 			// 	qian7:"新航路",
		// 			// 	qian8:"新航路",
		// 			// 	qian9:"新航路",
		// 			// 	qian10:"新航路",
		// 			// 	qian11:"新航路",
		// 			// 	qian12:"新航路",
		// 			// 	qian13:"新航路",
		// 			// 	qian14:"新航路",
		// 			// 	qian15:"新航路",
		// 			// 	qian16:"新航路",	
		// 			// },
		// 			// {
		// 			// 	qian1:"新航路第三的",
		// 			// 	qian2:"新航路",
		// 			// 	qian3:"新航路",
		// 			// 	qian4:"新航路",
		// 			// 	qian5:"新航路",
		// 			// 	qian6:"新航路",
		// 			// 	qian7:"新航路",
		// 			// 	qian8:"新航路",
		// 			// 	qian9:"新航路",
		// 			// 	qian10:"新航路",
		// 			// 	qian11:"新航路",
		// 			// 	qian12:"新航路",
		// 			// 	qian13:"新航路",
		// 			// 	qian14:"新航路",
		// 			// 	qian15:"新航路",
		// 			// 	qian16:"新航路",
		// 			// }
		// 		]
		// 	}
		// 	var workpro = rawData.workexperience;
		// 	console.log(workpro);
		// 	$('.fivek2').hide();
		// 	$('.fivekelong').show();
		// 	var index = 0;
		// 	// index++;
		// 	var oClass="five-xinid" +index;
		// 	// console.log(oClass)
		// 	$('#five-zong').on('click',"#fivebian",function(){
		// 		$('.fivek2').show();
		// 		$('.fivekelong').hide();
		// 		$('#onebao5').attr('xinname','wo1')
		// 		// index++;
		// 		// var oClass="five-xinid" +index;
		// 		// // index++;
		// 		// var str1 = '<div class="fivehou1 clearfix" id='+oClass+'>\
		// 		// <cite>前程无忧</cite>\
		// 		// <em>-</em>\
		// 		// <span>销售经理</span>\
		// 		// <b>删除</b>\
		// 		// <strong class="five-bian">编辑</strong>\
		// 		// </div>';
		// 		// $('#fivekelong').append(str1);	
		// 	})
		// 	// for(var key in workpro){
  //  //          // console.log(workpro[0])
  //  //     		}
  //      		var wk = {
  //      					qian1:$('.five-yk11').val(),
		// 				qian2:$('.five-yk12').val(),
		// 				qian3:$('.five-yk13').val(),
		// 				qian4:$('.five-yk14').val(),
		// 				qian5:$('.five-yk15').val(),
		// 				qian6:$('.five-yk16').val(),
		// 				qian7:$('.five-yk17').val(),
		// 				qian8:$('.five-yk18').val(),
		// 				qian9:$('.five-yk19').val(),
		// 				qian10:$('.five-yk20').val(),
		// 				qian11:$('.five-yk21').val(),
		// 				qian12:$('.five-yk22').val(),
		// 				qian13:$('.five-yk23').val(),
		// 				qian14:$('.five-yk24').val(),
		// 				qian15:$('.five-yk25').val(),
		// 				qian16:$('.five-yk26').val(),
  //      		}
  //      		$('#five-zong').on('click','#onebao5',function(){
  //      		// $('#onebao5').attr('xinname','wo1')
  //      		// console.log($('#onebao5').attr('xinname'))
	 //       		if($('#onebao5').attr('xinname')=='wo1'){
		//        		index++;
		// 			var oClass="five-xinid" +index;
		// 			var str1 = '<div class="fivehou1 clearfix" id='+oClass+'>\
		// 			<cite>前程无忧</cite>\
		// 			<em>-</em>\
		// 			<span>销售经理</span>\
		// 			<b>删除</b>\
		// 			<strong class="five-bian">编辑</strong>\
		// 			</div>';
		// 			$('#fivekelong').append(str1);
		// 			$('#onebao5').attr('xinname','');
	 //       		}
		// 			for(var key in workpro){
		//         	}
		// 			workpro.push(wk);
		// 			$('.five-bian').parent().find('cite').html(workpro[index-1].qian1);
		// 			$('.five-bian').parent().find('span').html(workpro[index-1].qian2);
		// 			alert(workpro[index-1].qian1)
		//    			$('.fivek2').hide();
		// 			$('.fivekelong').show();
  //      		}).on('click','.five-bian',function(){
  //      		$(this).parents('.fivehou1').attr('inname','yangkun1')
  //      		// var index = 0;
		// 	// index++;
		// 	// var oId="five-xinid" +index;
		// 	// alert(oId)
  //      			// console.log($(this).parents('.fivehou1').attr('id'))
  //      			// alert($(this).parents('.fivehou1').attr('id'))
  //      			if($(this).parents('.fivehou1').attr('inname')=='yangkun1'){
  //      				console.log(workpro[index-1].qian1)
  //      				$('.five-yk11').val(workpro[index-1].qian1)
		// 			$('.five-yk12').val(workpro[index-1].qian2)
		// 			$('.five-yk13').val(workpro[index-1].qian3)
		// 			$('.five-yk14').val(workpro[index-1].qian4)
		// 			$('.five-yk15').val(workpro[index-1].qian5)
		// 			$('.five-yk16').val(workpro[index-1].qian6)
		// 			$('.five-yk17').val(workpro[index-1].qian7)
		// 			$('.five-yk18').val(workpro[index-1].qian8)
		// 			$('.five-yk19').val(workpro[index-1].qian9)
		// 			$('.five-yk20').val(workpro[index-1].qian10)
		// 			$('.five-yk21').val(workpro[index-1].qian11)
		// 			$('.five-yk22').val(workpro[index-1].qian12)
		// 			$('.five-yk23').val(workpro[index-1].qian13)
		// 			$('.five-yk24').val(workpro[index-1].qian14)
		// 			$('.five-yk25').val(workpro[index-1].qian15)
		// 			$('.five-yk26').val(workpro[index-1].qian16)
		// 			// $('.five-bian').parent().find('cite').html($('.five-yk11').attr('qian1'));
		// 			// $('.five-bian').parent().find('span').html($('.five-yk12').attr('qian2'));
  //      				$('.fivek2').show();
		// 			$('.fivekelong').hide();
		// 			$(this).parents('.fivehou1').attr('inname','');
  //      			}
  //   //    		}).on('click','.five-bian2',function(){
  //   //    			$('.fivek2').show();
		// 		// $('.fivekelong').hide();
  //   //    		}).on('click','.five-bian3',function(){
  //   //    			$('.fivek2').show();
		// 		// $('.fivekelong').hide();
  //      		})
		// }


