/**
 * Created by Administrator on 2017-04-30 .
 */
//(function(){
//    //函数立即调用,可以将代码封装在一个函数里面，可以保证不暴露给全局，不污染全局
//})();
$(function(){
    //文档就绪函数
    //商品功能
    var Product = function(title,price,quantity){
        this.titie = title;
        this.price = price;
        this.quantity = quantity;
    };
    var cart = {
        totalQuantity: 0,
        totalAmount: 0,
        addCart: function(){

        }
    };
    var productComp = {
        int: function(){

        },
        loadData: function(){

        },
        loadMore: function(){
            //01:18
        }
    };
});