//số lượng sản phẩm đã mua
var soLuongItemTrongGioHang ;
const mes = document.getElementById('mes');
jsonProduct = localStorage.getItem('product')
  if(jsonProduct==null){
    soLuongItemTrongGioHang = 0;
    }else{
    jsonListProduct=JSON.parse(jsonProduct);
    soLuongItemTrongGioHang=jsonListProduct.length;
    }

// hàm hiện số lượng item trong của giỏ hàng
function mesCart(){
    if(soLuongItemTrongGioHang>0){
    mes.innerHTML=soLuongItemTrongGioHang;
    mes.style.display = 'block';
    }
}
mesCart();

// sự kiện hiện giỏ hàng
const cart = document.getElementById('cart--img');
const cartMain = document.getElementById('cart__main');
const cartBackground = document.getElementById('cart__background');
const cartBody = document.getElementsByClassName('cart__body');
cart.addEventListener('click',function(){
  cartMain.classList.remove('cart--none');
  cartBackground.classList.remove('cart--none');

  if(JSON.parse(window.localStorage.getItem("product")).length==0){
    cartBody[0].innerHTML="Giỏ hàng hiện đang rỗng <br> Hãy lấp đầy nó nào";
  }else{
    cartBody[0].innerHTML="";
    luuSanPhamVaoGioHang();
  }
  xoaItem();
})
// đẩy data từ localStorage vào giỏ hàng
luuSanPhamVaoGioHang();

// sự kiện tắt giỏ hàng
const close = document.getElementById('close');
close.addEventListener('click',function(){
  cartMain.classList.add('cart--none');
  cartBackground.classList.add('cart--none');
  soLuongItemTrongGioHang=0;
  mes.style.display = 'none';
})

// lưu sản phẩm được mua vào giỏ hàng
function luuSanPhamVaoGioHang(){
  var ListItem = JSON.parse(window.localStorage.getItem("product"));
  if(ListItem!=null){
  for(let i =0 ; i<ListItem.length;i++){
    cartBody[0].innerHTML+=`
<div class="cart__item">
  <img src="`+ListItem[i].img+`" alt="">
  <div class="cart__item--infor">
      <span>`+ListItem[i].tên+`</span>
      <span>`+ListItem[i].giá+`</span>
      <button class="remove--item btn">remove</button>
  </div>
</div>
  `
  }
  }
  
}
// sự kiện khi mua sản phẩm 

const btnMua = document.getElementById('btn--mua');
if(btnMua!=null){
btnMua.addEventListener('click',function(){
const product_name = document.getElementById('Brand').innerText + " "+ document.getElementById('Name').innerText;
const product_cost = document.getElementsByClassName('cost--real');
const product_img  = document.getElementById('img--primary');
const product_year = document.getElementById('year').innerText;
const product_size = document.getElementById('size').innerText;
const product_material = document.getElementById('material').innerText;
const product = {tên: product_name,giá:product_cost[0].innerText, img:product_img.getAttribute('src'),năm:product_year,kích_thước:product_size,chất_liệu:product_material}
const jsonProduct= localStorage.getItem("product");
var jsonListProduct;
    if(kiemTraSanPham()){
        soLuongItemTrongGioHang++;
        mesCart();
        if(jsonProduct==null){
          jsonListProduct=[];
          }else{
          jsonListProduct=JSON.parse(jsonProduct);
          }
          jsonListProduct.push(product);   
        window.localStorage.setItem("product",JSON.stringify(jsonListProduct));
        luuSanPhamVaoGioHang();
    }
}) 
}

// sự kiện xóa sản phẩm khỏi giỏ hàng
function xoaItem(){
  const btnXoa = document.getElementsByClassName('remove--item');
  for(let i =0; i < btnXoa.length;i++){
    btnXoa[i].addEventListener('click',function(){
      key =btnXoa[i].parentNode.childNodes[1].innerText;
 
      // Lấy giá trị mảng đã lưu trữ
      let cart = JSON.parse(localStorage.getItem('product'));

      // Tìm index của phần tử cần xóa
      const index = cart.findIndex(item => item.tên == key);

     // Xóa phần tử có index tìm được
     // splice(bắt đầu xóa từ vị trí, số lượng xóa)
      cart.splice(index, 1);

      // Lưu giá trị mới vào localStorage
      localStorage.setItem('product', JSON.stringify(cart));
      btnXoa[i].parentNode.parentNode.style.display='none'
  })
  }
}


// hàm kiểm trả sản phẩm có trong localStorage chưa
function kiemTraSanPham(){
  const product_name = document.getElementById('Brand').innerText + " "+ document.getElementById('Name').innerText;
  var ListItem = JSON.parse(window.localStorage.getItem("product"));
  if(ListItem!=null){
  for(let i =0 ; i<ListItem.length;i++){
        if(ListItem[i].tên==product_name){
            return false;
        }
      }
  }
  return true;
}

