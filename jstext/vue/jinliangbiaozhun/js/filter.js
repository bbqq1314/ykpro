define(function (require, exports, module) {
    require('vue');
    var P = {
        filter:function(){
            var typeName ={
                 '0':'电话销售',
                 '1':'电王销售',
                 '2':'电一销售',
                 '3':'电路销售',
                 '4':'电级销售',
                 '5':'电老销售',
            }
            Vue.filter('typeName',function(index){
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
             });
             var typeSelect1 = {
             };
             Vue.filter('typeSelect1',function(index,name){
                console.log(index)
                if(index==""){
                    return name
                }else
                return index;
             });
        }
    }
    module.exports = {
        filter: P.filter
    }
})
// <script type="text/javascript">
//     var data = {
//         selected: ""
//     };
//     var typeSelect = {
//         '0':'大专',
//         '1':'本科',
//         '2':'研究生'
//     };
//     Vue.filter('typeSelect',function(index){
//         return typeSelect[index];
//     });