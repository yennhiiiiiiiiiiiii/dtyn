$(document).ready(function(){

  $("#dangnhap").click(function(){
    $("#form").modal("toggle");
  })
    function ktten(){
       let ten=$('#txtEmail').val();
       let p=/^\w+@[A-Za-z]+\.[a-z]+$/;
       if(p.test(ten)){
           $("#enteremail").html("*");
           return true
       }
       else
       {
           
          $('#enteremail').html('lỗi');
           $('#txtEmail').addClass("error");
           $('#txtEmail').addClass("errorborder");
           return false;

       }
      }
     
      function ktmk(){
          let pass=$('#txtmk').val();
          let p=/[A-Za-z0-9_\.]+/;
          if(p.test(pass)){
              $('#entermk').html('*');
              return true;
          }
          else{
              $('#entermk').html('lỗi');           
              $('#txtmk').addClass('error');           
              $('#txtmk').addClass("errorborder");
              return false;
          }
      }
       $("#txtEmail").blur(function(e){
           ktten();
       });
       $('#txtmk').blur(function(e){
          ktmk();
       });
       let i=1;
       $('#btndn').click(function(e){
        var email=$('#txtEmail').val();
        var mk=$("#txtmk").val();
       
        if(ktten()&& ktmk()){
            
            const newjson=JSON.parse(localStorage.getItem("users"));
          let isMatched=false;
          for(let i=0;i<newjson.length;i++){
            const jsonadd= newjson[i];
            if(jsonadd.email===email&&jsonadd.password===mk){
                isMatched=true;
                break;
            }
          }
          if(isMatched){
                alert("Đăng nhập thành công");
                $("#form").modal("hide");
         
                $('#dangnhap').html("Đăng xuất");
          }
          else
          {
            alert('Đăng nhập thất bại!tài khoản hoặc mật khẩu sai.');
            // $("#form").css(
            //     "display","block"
            //     );
            // $("#form").modal("");
          }


        }
          
         

       });
    //  function ktaccount(){
    //     let email=$('#txtemail').val();
    //     let mk=$('#txtmk').val();
            
    //   //   if(ktten() && ktmk() ){
    //      const  UJson=localStorage.getItem("users");
        
    //      let  userObj= JSON.parse("UJson");
    //      for(const user of userObj.users){
    //          if(user.email==email&& user.password==mk){
    //              alert('đăng nhập thành công');

    //              return true;
    //          }
    //      }
    //     return false;
           

    //  }
  
    
  });
  function sell(){
    // alert("Phaasn");
    if(document.getElementById("left_question").style.background="white"){
        document.getElementById("right_question").style.background="black";
        document.getElementById("left_question").style.color="black";
        document.getElementById("right_question").style.color="white";
    
            document.getElementById("anwers1").innerHTML="Tạo danh sách của bạn  <br> chỉ cần vài cú nhấp  <br> chuột :Thuật toán của <br>  chúng tôi xử lý hầu hết <br>  mọi thứ và thậm chí nó  <br>  còn cung cấp cho bạn <br> ước tính giá đầu tiên";
            document.getElementById("anwers2").innerHTML="Chúng tôi tìm người <br> mua xe đạp  của bạn tử <br> khắp châu âu.Trung <br> bình một chiếc xe đạp <br> trên bicycle được bán  <br> sau ít nhaasrt 7 ngày.";
            document.getElementById("anwers3").innerHTML="Ngay sau khi xe đạp <br> của bạn được bàn giap  <br> cho công ty vận chuyện <br> của chúng tôi hoặc cho <br> người mua của bạn , bạn <br> có thể rút tiền một <br> cách thuận tiện , an <br> toàn và dễ dàng";
    }
    
}
function buy(){
    if(document.getElementById("right_question").style.background="white"){
        document.getElementById("left_question").style.background="black";
        document.getElementById("right_question").style.color="black";
        document.getElementById("left_question").style.color="white";

   
    
 
            document.getElementById("anwers1").innerHTML="Chọn chiếc xe đạp phù<br>hợp với nhu cầu  <br> của bạn nhất";
            document.getElementById("anwers2").innerHTML=" Chọn phương thức  <br>thanh toán ưa thích của <br> bạn.Bạn có thê dễ dàng <br> theo dõi quá trình giao  <br> hàng trực tiếp  <br>delivery process online.</p>";
            document.getElementById("anwers3").innerHTML=" Khi bạn đã nhận được  <br> chiếc xe đạp của mình, <br> không có gì cản trở <br> chuyến phiếu lưu đạp <br> xe tiếp theo của bạn : <br> Lên đường và tận <br> hưởn chuyến đi!";
        }
}