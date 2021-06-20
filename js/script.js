//services 
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

//portfolio hover
$(document).ready(function(){
    
    var projects =[{name:"work1",info:"work1Info"},{name:"work2",info:"work2Info"},{name:"work3",info:"work3Info"},{name:"work4",info:"work4Info"},{name:"work5",info:"work5Info"},{name:"work6",info:"work6Info"},{name:"work7",info:"work7Info"},{name:"work8",info:"work8Info"}];
    
    projects.forEach(function(project){
        $("#" +project.name).mouseover(function(){
            $("#"+project.info).show();
        }).mouseout(function(){
            $("#"+project.info).hide();
        });
    })
});

//form submission
function submiForm(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    
    if(!validateEmail(email)||email == "" || email == null){
        alert("Please enter a valid email")
    }else if(name == null || name == ""){
        alert("Please enter your name")
    }else if(message == null || message == ""){
        alert("Please enter your message")
    }else{
        alert(name + " we have received your message. Thank you fro reaching out to us.")
    }
}

function validateEmail($email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test($email );
  }