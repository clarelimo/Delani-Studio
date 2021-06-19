$(document).ready(function(){
    var services =[{img:"design-img",info:"design-info"},{img:"dev-img",info:"dev-info"},{img:"product-img",info:"product-info"},]
    
    $(".design-img").click(function(){
        $(".design-info").show();
        $(".design-img").hide();
    });
    $(".design-info").click(function(){
        $(".design-img").show();
        $(".design-info").hide();
    })
});

