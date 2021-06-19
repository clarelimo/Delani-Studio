$(document).ready(function(){
    var services =[{img:"design-img",info:"design-info"},{img:"dev-img",info:"dev-info"},{img:"product-img",info:"product-info"},]
    
    services.forEach(function(service){
        $("." +service.img).click(function(){
            $("."+service.info).show();
            $("."+service.img).hide();
        });
        $("."+service.info).click(function(){
            $("."+service.img).show();
            $("."+service.info).hide();
        });
    })
});

