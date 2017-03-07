var oList = document.getElementById('oSunyk');
var oLis = oList.getElementsByTagName('li');
for(var i=0,len=oLis.length;i<len;i++){
    oLis[i].onmouseover = function(){
        for(var i = 0,len=oLis.length;i<len;i++){
            oLis[i].className = '';
        }
        console.log(this)
        this.className = 'sp';
    }
    oLis[i].onmouseout = function(){
    	for(var j=0,len=oLis.length;j<len;j++){
    		oLis[j].className = ''
    	}
    }
}
var oBtn = document.getElementById('btn').getElementsByTagName('li');
var oBox =document.getElementById('box').getElementsByTagName('img');
var oParent = document.getElementById('parent');
var iNum = 0;
var timer = null;
for(var i=0,len=oBtn.length;i<len;i++){
    oBtn[i].index = i;
    oBtn[i].onclick = function(){
        clearInterval(timer);
        var _index = this.index;
        tab(_index);
    };
}
 function tab(_index){
    for(var j=0,lens=oBox.length;j<lens;j++){
        oBtn[j].className='';
        oBox[j].style.display = 'none';
    };
    oBtn[_index].className='cur';
    oBox[_index].style.display = 'block';
 }
function autoStart(){
    iNum++;
    if(iNum>=4){
        iNum = 0;
    }
    tab(iNum);
     }
timer = setInterval(function(){
    autoStart();
},2000);
oParent.onmouseover = function(){
    clearInterval(timer);
};
oParent.onmouseout = function(){
    timer = setInterval(function(){
        autoStart();
    },2000);
};