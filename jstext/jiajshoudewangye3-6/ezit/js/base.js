function dangqian(str){
    var oList = document.getElementById(str);
    var oLis = oList.getElementsByTagName('li');
    oLis[0].className = 'sp';
    for(var i=0,len=oLis.length;i<len;i++){
        oLis[i].onmouseover = function(){
            for(var i = 0,len=oLis.length;i<len;i++){
                oLis[i].className = '';
            }
            console.log(this)
            this.className = 'sp';
        }
    }
}
dangqian('list')
dangqian('oSun1');
dangqian('oSun2');
dangqian('oSun3');
dangqian('oSun4');
dangqian('oSun5');
var oBtn1 = document.getElementById("btndl");
oBtn1.onclick = function(){
    alert('这是什么');
}
var oBtn2 = document.getElementById("btnmm");
oBtn2.onclick = function(){
    alert('确定注册码');
}

