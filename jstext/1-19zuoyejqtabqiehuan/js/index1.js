define(function(require, exports, module) {
	var P = {
		_init:function(){
			P.piu();
		},
		piu:function(){
			$("#oneul li").on("click",function(){
				$("#twodiv div").eq($(this).index()).css({ display: "block"}).siblings().css({display:"none"})
			})
		}
	}
	module.exports = {
		init:P._init
	}
});

