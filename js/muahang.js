var billBody = document.getElementsByClassName('bill__body');
// biến số lượng trong giỏ hàng 
var soLuongItemTrongGioHang;
var tongTien=0;

// hàm load các sản phẩm trong giỏ hàng
var listProduct = JSON.parse(window.localStorage.getItem("product"));
function loadData(){
    billBody[0].innerHTML="";
    soLuongItemTrongGioHang=0;
    if(listProduct!=null){
        for(let i=0;i<listProduct.length;i++){
            soLuongItemTrongGioHang++;
            billBody[0].innerHTML+=`
            <div class="bill__item">
                        <img src="`+listProduct[i].img+`" alt="">
                        <div class="item__container">
                            <div class="item__infor">
                                <span>`+listProduct[i].tên+`</span><br>
                                <table>
                                    <tr>
                                        <td><span>&ensp;Năm sản xuất</span><br>&ensp;`+listProduct[i].năm+`</td>                    
                                    </tr>
                                    <tr>
                                        <td><span>&ensp;Kích thước</span> <br>&ensp;`+listProduct[i].kích_thước+`</td>
                                        <td><span>&ensp;Chất liệu</span> <br>&ensp;`+listProduct[i].chất_liệu+`</td>
                                    </tr>
                                </table>
                            </div>
                            <div class="item__action">
                                <span class="item__infor">`+listProduct[i].giá+`</span><br>
                                <button class="remove--item">remove</button>
                            </div>
                        </div>
                    </div>`
                 let str =  listProduct[i].giá.replaceAll(".","");
                 let strnext = str.replace(' VNĐ',"");
                 let gia = strnext-0;
                 tongTien+=gia;
        }
    }else{
        billBody[0].innerHTML=`<p class="bill__title" style="text-align: center; font-size: 30px">Không có sản phẩm nào trong giỏ hàng!!!</p>`;
    }
    document.getElementById('soLuong').innerHTML=soLuongItemTrongGioHang;  
    document.getElementById('tongTien').innerHTML=tongTien.toLocaleString('vi-VN',{useGrouping:true});
    document.getElementById('thanhTien').innerHTML=(tongTien+100000).toLocaleString('vi-VN',{useGrouping:true});

}
loadData();
const btnXoa = document.getElementsByClassName('remove--item');
  for(let i =0; i < btnXoa.length;i++){
    btnXoa[i].addEventListener('click',function(){
      key =btnXoa[i].parentNode.parentNode.childNodes[1].childNodes[1].innerText;
      // Lấy giá trị mảng đã lưu trữ
      let cart = JSON.parse(localStorage.getItem('product'));

      // Tìm index của phần tử cần xóa
      const index = cart.findIndex(item => item.tên == key);

     // Xóa phần tử có index tìm được
     // splice(bắt đầu xóa từ vị trí, số lượng xóa)
      cart.splice(index, 1);

      // Lưu giá trị mới vào localStorage
      localStorage.setItem('product', JSON.stringify(cart));

      // cập nhập lại các thông số
      for(let i=0;i<listProduct.length;i++){
        if(listProduct[i].tên==key){
            let str =  listProduct[i].giá.replaceAll(".","");
            let strnext = str.replace(' VNĐ',"");
            let gia = strnext-0;
            tongTien-=gia;
        }
      }
      btnXoa[i].parentNode.parentNode.parentNode.style.display='none'
      soLuongItemTrongGioHang--;
      document.getElementById('soLuong').innerHTML=soLuongItemTrongGioHang;   
      document.getElementById('tongTien').innerHTML=tongTien.toLocaleString('vi-VN',{useGrouping:true});
      document.getElementById('thanhTien').innerHTML=(tongTien+100000).toLocaleString('vi-VN',{useGrouping:true});
  })
  }



