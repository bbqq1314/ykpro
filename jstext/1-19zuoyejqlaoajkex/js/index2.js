define(function(require,exports,module){
	var rawData = {
		"workexperience":[
		]
	}
	var P = {
		_init:function(){
			P.piu();
			P._piupiu();
			P._onebian();
			P.onekeyboard();
			P.onexiala();
			P.fivekun1();
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
        ender:function(){
          	var data = {
          		"id":128,
          		"abc":'dsafdfa',
          		"mima":$("#input").val(),
          		"key"；$('#input2').val()
          	}
          	$.ajax({
          		url:'/html/data/data.json',
          		type:'post',
          		dataType:'json',
          		data:data,
          		success:function(cfg){
          			if(cfg && cfg.work_history.length>0){
          				arr = cfg.work_history;
          				P.view('#show-tpl',arr)
          			}else{
          				P.view('#add-tpl',null)
          			}
          		}
          	})
        },
		fivekun1:function(){
			var dingK = {
					// qian1:"",
					// qian2:"",
					// qian3:"",
					// qian4:"",
					// qian5:"",
					// qian6:"",
					// qian7:"",
					// qian8:"",
					// qian9:"",
					// qian10:"",
					// qian11:"",
					// qian12:"",
					// qian13:"",
					// qian14:"",
					// qian15:"",
					// qian16:"",
				}
			function xiaoming(str1,context){
				var source1 = $(str1).html();
	 			var template = Handlebars.compile(source1);
			    var html = template(context);
			    $('#fiveol').html(html);
			}
			var yinY = rawData.workexperience
		 	$('#five-zong').on('click',"#fivebian",function(){
		 		//点击添加
		 		$('#fiveol').attr('xinname','wo1')
				  xiaoming("#entry-template2",dingK)
		 	}).on('click',"#onebao5",function(){
		 		//点击保存
		 			var dingY = {
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
				if($('#fiveol').attr('xinname')=='wo1'){
						//添加的保存
					yinY.push(dingY)
					$('#fiveol').attr('xinname','');
				}else{
					//编辑的保存
					var xiaBiao = $('#fiveol').data('_id')
					yinY[xiaBiao] = dingY;
					$('#fiveol').removeData('_id');
				}
			    xiaoming("#entry-template1",rawData.workexperience)
		 	}).on('click','.five-bian',function(){
		 		//点击编辑
				var _index = $('#fiveol .fivehou1').index($(this).parents('.fivehou1'))
				$('#fiveol').data('_id',_index)
			     xiaoming("#entry-template2",rawData.workexperience[_index])
		 	}).on('click','.five-shan',function(){
		 		//点击删除
		 		yinY.splice($('#fiveol .fivehou1').index($(this).parents('.fivehou1')),1);
			   xiaoming("#entry-template1",rawData.workexperience)
		 	})
		}
    }
	module.exports = {
		init:P._init
	}
});
    //        .on('click','.job-bj',function(){
    //             var _index = $(this).parents('.list-02').data('index');
    //             oParent.data('id',_index);
    //             work = arr[_index]
    //             P.view('#bianji-tpl',work);
    //             oParent.addClass('bianji')
    //         }).on('click','.job-del',function(){
    //             var _index = $(this).parents('.list-02').data('index');
    //             arr.splice(_index,1)
    //             if(arr.length<=0){
    //                 oParent.find('.j-pt').addClass('j-pt-s');
    //                 P.view('#add-tpl',null)
    //             }else {
    //                 P.view('#show-tpl',arr)
    //             }
    //         })
    //     },
    //     view:function(id,context){
    //         var source1   = $(id).html();
    //         var template = Handlebars.compile(source1);
    //         var html    = template(context);
    //         $('#demo').html(html);
    //     }
    // }




	// 	fivekun1:function(){
	// 		var dingK = {
	// 				// qian1:"",
	// 				// qian2:"",
	// 				// qian3:"",
	// 				// qian4:"",
	// 				// qian5:"",
	// 				// qian6:"",
	// 				// qian7:"",
	// 				// qian8:"",
	// 				// qian9:"",
	// 				// qian10:"",
	// 				// qian11:"",
	// 				// qian12:"",
	// 				// qian13:"",
	// 				// qian14:"",
	// 				// qian15:"",
	// 				// qian16:"",
	// 			}
	// 		function xiaoming(str1,context){
	// 			var source1 = $(str1).html();
	//  			var template = Handlebars.compile(source1);
	// 		    var html = template(context);
	// 		    $('#fiveol').html(html);
	// 		}
	// 		var yinY = rawData.workexperience
	// 	 	$('#five-zong').on('click',"#fivebian",function(){
	// 	 		//点击添加
	// 	 		$('#fiveol').attr('xinname','wo1')
	// 			  xiaoming("#entry-template2",dingK)
	// 	 	}).on('click',"#onebao5",function(){
	// 	 		//点击保存
	// 	 			var dingY = {
	// 					qian1:$('.five-yk11').val(),
	// 					qian2:$('.five-yk12').val(),
	// 					qian3:$('.five-yk13').val(),
	// 					qian4:$('.five-yk14').val(),
	// 					qian5:$('.five-yk15').val(),
	// 					qian6:$('.five-yk16').val(),
	// 					qian7:$('.five-yk17').val(),
	// 					qian8:$('.five-yk18').val(),
	// 					qian9:$('.five-yk19').val(),
	// 					qian10:$('.five-yk20').val(),
	// 					qian11:$('.five-yk21').val(),
	// 					qian12:$('.five-yk22').val(),
	// 					qian13:$('.five-yk23').val(),
	// 					qian14:$('.five-yk24').val(),
	// 					qian15:$('.five-yk25').val(),
	// 					qian16:$('.five-yk26').val(),
	// 				}
	// 			if($('#fiveol').attr('xinname')=='wo1'){
	// 					//添加的保存
	// 				yinY.push(dingY)
	// 				$('#fiveol').attr('xinname','');
	// 			}else{
	// 				//编辑的保存
	// 				var xiaBiao = $('#fiveol').data('_id')
	// 				yinY[xiaBiao] = dingY;
	// 				$('#fiveol').removeData('_id');
	// 			}
	// 		    xiaoming("#entry-template1",rawData.workexperience)
	// 	 	}).on('click','.five-bian',function(){
	// 	 		//点击编辑
	// 			var _index = $('#fiveol .fivehou1').index($(this).parents('.fivehou1'))
	// 			$('#fiveol').data('_id',_index)
	// 		     xiaoming("#entry-template2",rawData.workexperience[_index])
	// 	 	}).on('click','.five-shan',function(){
	// 	 		//点击删除
	// 	 		yinY.splice($('#fiveol .fivehou1').index($(this).parents('.fivehou1')),1);
	// 		   xiaoming("#entry-template1",rawData.workexperience)
	// 	 	})
	// 	}
	// }


