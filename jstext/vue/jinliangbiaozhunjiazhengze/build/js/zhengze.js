/* zhengze.js Date:2017-03-08 21:09:58 */
define("js/zhengze.js",[],function(require,a,b){var c={zhengze1:function(){c.fang1()},fang1:function(){var a=/[^a-z]/gi;$("#ula01").blur(function(){var b=$(this).val();a.test(b)?$(this).removeClass("error"):(alert("\u53ea\u80fd\u8f93\u5165\u6c49\u5b57"),$(this).addClass("error"))})},shengri:function(){var a=/^[0-9]+$/;$("#ula02").blur(function(){var b=$(this).val();a.test(b)?$(this).removeClass("error"):(alert("\u53ea\u80fd\u8f93\u5165\u6570\u5b57"),$(this).removeClass("error"))})}};b.exports={zhengze:c.zhengze1}});