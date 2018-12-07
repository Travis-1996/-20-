
/**
* travis
*/
(function(){
    console.log('插件加载成功');
   var patt = /product/;
   if(patt.test(window.location.href)){
            var color="玄黑";
            var versoin="全网通 8GB+512GB";
            var _package="官方标配";
            var assurance_service=null;
            var recommend=null;
            // .product-stock-text
            var num =1;
            // 购买按钮 #pro-operation .product-button02
            // 购买数量 #pro-quantity
            color&&$(`a[title="${color}"]`)[0].click();
            // 选择版本
            versoin&&$(`a[title="${versoin}"]`)[0].click();
            // 选择套餐
            _package&&$(`a[title="${_package}"]`)[0].click();
            // 保障服务
            assurance_service&& $(`a[title="${assurance_service}"]`)[0].click();
            //推荐
            recommend&& $(`a[title="${recommend}]"`)[0].click();
            // 数量
            num&&$(`#pro-quantity`).val(num);
            // 购买按钮
            $(`#pro-operation .product-button02`).length!=0&&$(`#pro-operation .product-button02`)[0].click();
            //默认地址 #product-deposit-agreement-area
            // $(`#product-deposit-agreement-area`).attr("checked",true); 
            var timer=setInterval(function(){
                //立即下单
                if(!$(`#pro-operation .product-button02`).hasClass('disabled')){
                    $(`#pro-operation .product-button02`)[0].click();
                    clearInterval(timer)    
                    console.log('立即下单')     
                }
                console.log('等待');
            },100)

   }
   var patt2 = /nowConfirmcart/;
   if(patt2.test(window.location.href)){
    var timer1=setInterval(function(){
            if($('.order-submit-btn').length!=0){
                $('.order-submit-btn')[0].click();
                console.log('提交订单成功');
                clearInterval(timer1)
            }
        },100)
   }
   var patt3 = /hwm20bsj/;
   if(patt3.test(window.location.href)){
    var timer3=setInterval(function(){
        if($('.honor-box-btn-go').length!=0){
            $('.honor-box-btn-go')[0].click();
            console.log('返回活动页面');
            clearInterval(timer3)
        }
    },100)
   }
})()



