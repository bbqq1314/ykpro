define(function(require,exports,module){
		var P = {
			zhengze1:function(){
					P.fang1();
			},
			fang1:function(){
				var reg1 = /[^a-z]/gi;
   	 			$('#ula01').blur(function(){
		        var val = $(this).val()
		        if(!reg1.test(val)){
		            alert('只能输入汉字')
		            $(this).addClass('error');
		        }else {
		            $(this).removeClass('error');
			        }
			    })
			},
			shengri:function(){
				var reg1 = /^[0-9]+$/;
				$('#ula02').blur(function(){
			        var val = $(this).val()
			        if(reg1.test(val)){
			            $(this).removeClass('error');
			        }else {
			            alert('只能输入数字')
			            $(this).removeClass('error');
			        }
			    })
			}
		}
	module.exports = {
		zhengze:P.zhengze1
	}
});

  