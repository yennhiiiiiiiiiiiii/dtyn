$(document).ready(function () {
    const users=[{email:"duongvanphan@Gmail.com",password:"phan123"},{email:"nguyentrongdat@Gmail.com",password:"dat123"}];
    localStorage.setItem("users",JSON.stringify(users));

  
    var ten=$("#txtdk_ten");
    var re=/^[A-Z]{1}[a-zà-ỹ]+$/;
    function kttendk(){
        if(ten.val()==""){
            ten.attr("placeholder","không để trống! vui lòng nhập tên");
            ten.css('border-color','red');
            return false;
        }
        if(!re.test(ten.val())){
            ten.css('border-color','red');
       
        ten.val("");
              ten.attr("placeholder"," ten khong hop le,vui lòng nhập tên")
            return false;            
        }
        else
        ten.css('border-color','black');  
        return true;
    }

    ten.blur(kttendk);
    var ho=$("#txtdk_ho");
    var re=/^[A-Z]{1}[a-zà-ỹ]+$/;
    function ktho(){
        if(ho.val()==""){
            ho.attr("placeholder","không để trống! vui lòng nhập họ");
            ho.css('border-color','red');
            return false;
        }
        if(!re.test(ho.val())){
            ho.css('border-color','red');
       
        ho.val("");
              ho.attr("placeholder","khong hop le,vui lòng nhập họ")
            return false;            
        }
        else
        ten.css('border-color','black');  
        return true;
    }

    ho.blur(ktho);


    var email=$("#txtdk_email");
    var re_email=/^\w+@(gmail\.com|iuh\.edu\.vn)$/;
    function ktemail(){
        if(email.val()==""){
            email.attr("placeholder","không để trống! vui lòng nhập email");
            email.css('border-color','red');
            return false;
        }
        if(!re_email.test(email.val())){
            email.css('border-color','red');
            email.val("");
              email.attr("placeholder","khong hop le,vui lòng nhập email")
            return false;            
        }
        else
        email.css('border-color','black');  
        return true;
    }

    email.blur(ktemail);

    var sdt=$("#txt_sdt");
    var re_sdt=/^(09|03|05|07|08|06|02|04)\d{8}$/;
    function ktsdt(){
        if(sdt.val()==""){
            sdt.attr("placeholder","không để trống! vui lòng nhập số điện thoại");
            sdt.css('border-color','red');
            return false;
        }
        if(!re_sdt.test(sdt.val())){
         sdt.css('border-color','red');
            sdt.val("");
              sdt.attr("placeholder"," khong hop le,vui lòng nhập số điện thoại")
            return false;            
        }
        else
        sdt.css('border-color','black');  
        return true;
    }

    sdt.blur(ktsdt);

    // nhập password
    var mk=$("#txtdk_mk");
    var re_mk=/^[A-Za-zà-ỹ.0-9_]+$/;
    function ktmk(){
        if(mk.val()==""){
            
            mk.css('border-color','red');
            return false;
        }
        if(!re_mk.test(mk.val())){
         mk.css('border-color','red');
           
            return false;            
        }
        else
        mk.css('border-color','black');  
        return true;
    }

    mk.blur(ktmk);
    //
    var nlmk=$('#txtdk_nlmk');
    function ktnlmk(){
        if(nlmk.val()==""){
            nlmk.css('border-color','red');
            return false;
        }
        if(nlmk.val()!=mk.val()){
            nlmk.css('border-color','red');
            nlmk.val("");
            return false;
        }
        else
        nlmk.css('border-color','black');
        return true;
     

    }
    nlmk.blur(ktnlmk);
    var tich=$("input[type='checkbox']:checked");
   function chinhsach(){
   
    if(tich.val()){
        mk.attr('placeholder','bạn chưa tích vào')
     
        return false;
    }

    return true;

}

    $('#btn-dk').click(function(e){

        if(kttendk() && ktho() && ktemail() && ktsdt() &&ktmk()){
            alert('Bạn đã đăng ký thành công' );
            let emaildn=email.val();
            let passworddn=mk.val()

           const jsonuser= localStorage.getItem("users");
           let jsonObject=JSON.parse(jsonuser);
           if(!jsonuser)
                jsonObject=[];
        
           
            const newAccount= {email:emaildn,password:passworddn};

            jsonObject.push(newAccount);
   
        
           
        window.localStorage.setItem("users",JSON.stringify(jsonObject));
          
            $("#link").attr('href','../interface/trangchinh.html');

            alert('Đăng ký thành công!')
        
        }
        else{
           
            alert('Vui lòng nhập đầy đủ thông tin');
           
        }
    });
    
    
  

   
});
