define(function(require,exports,module){
		var data = {
			 		"model":{
			 			'message1':'',
			        	'message2':'',
			        	'message3':'',
			        	'message4':'',
			        	'message5':'',
			        	'message6':'',
			        	'message7':'',
			        	'message8':'',
			        	'selected11':'选择省份',
			        	'selected2':'选择省',
			        	'selected3':'选择省',
			        	'selected4':'选择省',
			        	'selected5':'选择省',
				        'isB':false,
				 		'isC':false,
				 		'isD':false,
				 		'isE':false,
				 		'isCur1':true,
				 		'isCur2':false,
				 		"threea":[],
				 		"fourselect1":'',
				 		"fourselect2":'',
				 		"fourselect3":'',
				 		"fourdixin1":'',
				 		"fourchnpin1":'',
				 		"threeli1":'',
				 		"threeli2":'',
			 		},
			 		"qiwang":{
			 			"fourbao1":false,
			 			"fourbian1":true,
			 			"chuchai":false
			 		},
			 		"limi":{
			 			"threebao1":false,
			 			"threebian1":true
			 		},
			 		"people":[],
			 		"newPerson":{
			 		},
			 		"fiveadd":{
			 			"fivetian1":false,
			 			"fivebao1":false,
			 			"fivetbao":false
			 		},
			 		'filter':{
			 			'kechuchai':false,
			 		}
			    }
		var P={
		 	_init:function(){
		 		P.piu();
		 	},
		 	piu:function(){
		 		var typeName ={
 					'0':'电话销售',
					'1':'电王销售',
					'2':'电一销售',
					'3':'电路销售',
					'4':'电级销售',
					'5':'电老销售',
		 		}
	 			Vue.filter('typeName',function(index){
	 				console.log(index)
		    		var str = ""
		    		$.each(index,function(key,val){
		    			str+='<b>'+typeName[val]+'</b>';
		    		})
		    		return str;
		    	});
		    	var typeName1 = {
		    		'0':'可出差',
		    		'1':'不可出差'
		    	}
		    	Vue.filter('typeName1',function(index){
		    		// console.log(index)
					if(index==true){
						return typeName1['0']
					}else{
						return typeName1['1']
					}
		    	})
			    var vm = new Vue({
			        el:'#twoul',
			        data:data,
			        methods:{
		                subForm2:function(){
							this.model.isB = true;
			 				this.model.isC = false
		                },
		               	subForm3:function(){
							this.model.isB = false;
			 				this.model.isC = true
		                },
		               	subForm4:function(){
							this.model.isD = true;
			 				this.model.isE = false
		                },
		               	subForm5:function(){
							this.model.isD = false;
			 				this.model.isE = true
		                },
		                subSex1:function(){
							this.model.isCur1 = true;
			 				this.model.isCur2 = false;
			 				this.model.message8 = "男"
		                },
						subSex2:function(){
							this.model.isCur1 = false;
			 				this.model.isCur2 = true;
			 				this.model.message8 = "女"
	                	},
	                	fourbao:function(){
	                		this.qiwang.fourbao1 = true;
	                		this.qiwang.fourbian1 = false;
	                	},
	                	fourbian:function(){
	                		this.qiwang.fourbao1 = false;
	                		this.qiwang.fourbian1 = true;
	                	},
	                	threebao:function(){
	                		this.limi.threebao1 = true;
	                		this.limi.threebian1 = false;
	                	},
	                	threebian:function(){
	                		this.limi.threebao1 = false;
	                		this.limi.threebian1 = true;
	                	},
	                	fivetian:function(){
	                		this.fiveadd.fivetian1 = true;
	                		this.fiveadd.fivebao1 = false; 
	                		this.fiveadd.fivetbao = true;
	                		this.newPerson = {}
	                	},
	                	fivebao:function(newPerson,person){
	                		this.fiveadd.fivetian1 = false;
	                		this.fiveadd.fivebao1 = true;
	                		if(this.fiveadd.fivetbao == true){
	                			this.people.push(newPerson);	
	                		}else{
	                			person=this.newPerson;
	                			alert(999)
	                		}
	                		this.fiveadd.fivetbao = false;
	                		alert(222)
	                	},
	                	bianPerson:function(index,person){
	                		this.fiveadd.fivetian1 = true;
	                		this.fiveadd.fivebao1 = false; 
	                		this.newPerson = person; 
	                	},
	                	deletePerson:function(index){
	                		this.people.splice(index,1); 
	                	}
	                	// chuchai:function(){
	                	// 	if(this.qiwang.chuchai==false){
	                	// 		this.qiwang.chuchai=true;
	                	// 	}else{
	                	// 		this.qiwang.chuchai=true;
	                	// 	}
	                	// }
		            }
			    })
		 	}
		}
	module.exports = {
		init:P._init
	}
});