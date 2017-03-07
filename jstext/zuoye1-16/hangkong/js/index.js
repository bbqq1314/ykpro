function attr(obj, attr, value){
    if(arguments.length==2){
        if(obj.attributes[attr]){
            return obj.attributes[attr].nodeValue;
        }else{
            return null;
        };
    }
    else if(arguments.length==3){
        obj.setAttribute(attr,value);
    }
};
var ulO = document.getElementById('ulOne');
var zongU = document.getElementById('zongUl');
var shang1 = ulO.children[1].children[1].children;
var bianUl = zongU.children;
var bTrue = true;
shang1[0].onclick = function(){
    var arr = [];
    for(var i=0,len=bianUl.length;i<len;i++){
        // arr[i] = aLi2[i];
        arr.push(bianUl[i]);
    }
    arr.sort(function(ul1,ul2){
        if(bTrue){
            return parseInt(attr(ul1,'price'))-parseInt(attr(ul2,'price'));
        }else {
            return parseInt(attr(ul2,'price'))-parseInt(attr(ul1,'price'));
        };
    })
    for(var i=0;i<arr.length;i++){
        zongU.appendChild(arr[i]);
    }
    bTrue = !bTrue;
}
