/**
 * Created by Administrator on 2017-06-12 .
 */
$(document).ready(function(){
    // date time picker
    if($(".iDate.full").length>0){
        $(".iDate.full").datetimepicker({
            locale: "zh-cn",
            format: "YYYY-MM-DD a hh:mm",
            dayViewHeaderFormat: "YYYY年 MMMM"
        });
    }
    if($(".iDate.date").length>0){
        $(".iDate.date").datetimepicker({
            locale:"zh-cn",
            format:"YYYY-MM-DD",
            dayViewHeaderFormat:"YYYY年MMMM"
        });
    }
})