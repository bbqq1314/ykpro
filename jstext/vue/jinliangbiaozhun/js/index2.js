define(function(require,exports,module){
		var vuePub = require('filter');
		require('vue');
		var P = {
			_init:function(){
				vuePub.filter()
				P.render();
			
			},
			render:function(){
				$.ajax({
					url:'/html/data/data.json',
					dataType:"JSON",
					type:"get"
				}).done(function(cfg){
					P.view(cfg);
				})
			},
			_ifWork:function(obj,key,bt1,bt2,bt3){
				var tags = obj.decide[key];
				tags.isA = bt1;
				tags.isB = bt2;
				tags.isC = bt3;
			},
			view:function(cfg){
				var data = {
					"resume":cfg,
					"sex1":{
						'isCur1':true,
				 		'isCur2':false,
					},
					"decide":{
						"work1":{
							"isA":true,
							"isB":false,
							"isC":false,
						},
						"work2":{
							"isA":true,
							"isB":false,
							"isC":false,
						},
						"work3":{
							"isA":true,
							"isB":false,
							"isC":false,
						},
						"work4":{
							"isA":true,
							"isB":true,
							"isC":false,
						},
						"work5":{
							"isA":true,
							"isB":true,
							"isC":false,
						}
					},
					"expItem":{}
				}
				var vm = new Vue({
					el:'#twoul',
					data:data,
					methods:{
						editBase:function(event,sclass){
							var item = event.currentTarget;
							var parent = $(item).parents('');
						},
						subSex1:function(){
							this.sex1.isCur1 = true;
			 				this.sex1.isCur2 = false;
			 				this.resume.sex = "男"
		                },
						subSex2:function(){
							this.sex1.isCur1 = false;
			 				this.sex1.isCur2 = true;
			 				this.resume.sex = "女"
	                	},
	                	subForm2:function(){
			 				P._ifWork(this,'work1',false,true,null)
		                },
		               	subForm3:function(){
			 				P._ifWork(this,'work1',true,false,null)
		                },
		               	subForm4:function(){
			 				P._ifWork(this,'work2',true,false,null)
		                },
		               	subForm5:function(){
			 				P._ifWork(this,'work2',false,true,null)
		                },
		                threebao:function(){
	             			P._ifWork(this,'work3',false,true,null)
	                	},
	                	threebian:function(){
							P._ifWork(this,'work3',true,false,null)
	                	},
	                	fourbao:function(){
							P._ifWork(this,'work4',false,true,true)
	                	},
	                	fourbian:function(){
							P._ifWork(this,'work4',true,false,true)
	                	},
	                	fourk1:function(){
							P._ifWork(this,'work4',true,false,true)
	                	},
	                	fivetian:function(num){
		                	this.expNum = num;
	                        this.expItem = {};
							P._ifWork(this,'work5',true,false,true)
	                	},
	                	fivebao:function(item){
							P._ifWork(this,'work5',false,true,true)
							var work = this.resume.work_history;
	                        if(this.expNum<0){
	                        	 work.push(item);
	                        	}else {
	                        		this.resume.work_history[this.expNum] = item;
	                        	}
	                	},
	                	fivek1:function(){
	                		P._ifWork(this,'work5',true,false,true)
	                	},
	                	bianPerson:function(obj,item,index){
	                		this.expItem = item;
	                		this.expNum = index;
	                		var items = JSON.stringify(item)
	                		$('#twoul').data('work-item',items)
							P._ifWork(this,'work5',true,false,true)
	                	},
	                	deletePerson:function(index){
	                		this.resume.work_history.splice(index,1)
	                	},
	                	canclePerson:function(){
	                		alert(0)
	                		if(this.expNum==-99){
	                			P._ifwork(this,'work5',true,true,false);
	                			alert(11)
	                		}else if(this.expNum==-100) {
	                			alert(33)
	                			P._ifWork(this,'work5',false,true,true);
	                		}else {
	                			P._ifWork(this,'work5',false,true,true);
	                			var tpl = $.parseJSON($('#twoul').data('work-item'))
	                			this.resume.work_history.splice(this.expNum,1,tpl);
	                		}
	                	}
					}
				})
			}
		}
	module.exports = {
		init:P._init
	}
});

  