define(function(require, exports, module) {
	var P = {
		_init:function(){
			P.piu();
		},
		piu:function(){
			$("#one1").click(function(){
				if($('#oneul input').prop('checked')==false){
					$('#oneul input').prop("checked",true);
				}else{
					$("#oneul input").prop("checked",false);
				}
			});
		}
	}
	module.exports = {
		init:P._init
	}
});

