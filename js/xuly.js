// load data khi vào trang
loadData(1);

// biến giữ điều kiện đang được lọc để đổi trang
let co = "";

// biến phân biệt checkbox ở phần loại
let checkboxLoai ;

// biến phân biệt rad ở phần chất Chất_liệu
let radChatLieu;

// biến phân biệt rad ở phần kích thước
let radSize;


//load tất cả data 
function loadData(index){
    fetch('../data/data.json')
    .then((response) => response.json())
    .then((json) => {

        var soLuong = index*18;
        const listProduct = document.querySelector('.container__section') ;
        listProduct.innerHTML=""
        json.forEach(item => {
            indexOf = item._id;    
            if(indexOf>(soLuong-18)&&indexOf<=soLuong){
            listProduct.innerHTML += ` 
        <div class="section__item">
                    <a href="${item.Link}">
                        <img src="${item.Ảnh}" alt="">
                        <div class="section__item--info">
                            <div class="section__item--attribute">
                                ${item.Năm} &bull; ${item.Size}
                            </div>
                            <div class="section__item--brand">
                            ${item.Hãng}
                            </div>
                            <div class="section__item--name">
                            ${item.tên}
                            </div>
                            <div class="section__item--pricedrop">
                            ${item.Giá} VNĐ
                            </div>
                            <div class="section__item--price">
                            ${item.Giá_b} VNĐ
                            </div>
                        </div>
                    </a>
                </div>`
            }
        });
    });     
}

//Hàm load data theo hãng đã chọn
function loadDataTheoBrand(brand,index){
    fetch('../data/data.json')
    .then((response) => response.json())
    .then((json)=> {
        var soLuong = index*18;
        var chayBien = 0;
        const listProduct = document.querySelector('.container__section');
        listProduct.innerHTML="";
       json.forEach(item => { 
        if(item.Hãng==brand){
        chayBien++;
        if(soLuong>=(index*18-18)&&chayBien>(soLuong-18)){
            soLuong--;
            listProduct.innerHTML += ` 
        <div class="section__item">
                    <a href="${item.Link}">
                        <img src="${item.Ảnh}" alt="">
                        <div class="section__item--info">
                            <div class="section__item--attribute">
                                ${item.Năm} &bull; ${item.Size}
                            </div>
                            <div class="section__item--brand">
                            ${item.Hãng}
                            </div>
                            <div class="section__item--name">
                            ${item.tên}
                            </div>
                            <div class="section__item--pricedrop">
                            ${item.Giá} VNĐ
                            </div>
                            <div class="section__item--price">
                            ${item.Giá_b} VNĐ
                            </div>
                        </div>
                    </a>
                </div>`
            }
        }
        })
    })
}

// Hàm load data theo giá đã chọn
function loadDataTheoGia(Gia,index){
    fetch('../data/data.json')
    .then((response) => response.json())
    .then((json)=> {
        var soLuong = index*18;
        var chayBien = 0;
        const listProduct = document.querySelector('.container__section');
        listProduct.innerHTML="";
       json.forEach(item => { 
        str =  item.Giá.replaceAll(".","");
        if(str-0>=Gia){
        chayBien++;
        if(soLuong>(index*18-18)&&chayBien>(soLuong-18)){
            soLuong--;
            listProduct.innerHTML += ` 
        <div class="section__item">
                    <a href="${item.Link}">
                        <img src="${item.Ảnh}" alt="">
                        <div class="section__item--info">
                            <div class="section__item--attribute">
                                ${item.Năm} &bull; ${item.Size}
                            </div>
                            <div class="section__item--brand">
                            ${item.Hãng}
                            </div>
                            <div class="section__item--name">
                            ${item.tên}
                            </div>
                            <div class="section__item--pricedrop">
                            ${item.Giá} VNĐ
                            </div>
                            <div class="section__item--price">
                            ${item.Giá_b} VNĐ
                            </div>
                        </div>
                    </a>
                </div>`
            }
        }
        })
    })
}
// Hàm load data theo loại đã chọn
function loadDataTheoLoai(loai,index){
    fetch('../data/data.json')
    .then((response) => response.json())
    .then((json)=> {
        var soLuong = index*18;
        var chayBien = 0;
        const listProduct = document.querySelector('.container__section');
        listProduct.innerHTML="";
       json.forEach(item => { 
        if(item.Loại==loai){
        chayBien++;
        if(soLuong>(index*18-18)&&chayBien>(soLuong-18)){
            soLuong--;
            listProduct.innerHTML += ` 
        <div class="section__item">
                    <a href="${item.Link}">
                        <img src="${item.Ảnh}" alt="">
                        <div class="section__item--info">
                            <div class="section__item--attribute">
                                ${item.Năm} &bull; ${item.Size}
                            </div>
                            <div class="section__item--brand">
                            ${item.Hãng}
                            </div>
                            <div class="section__item--name">
                            ${item.tên}
                            </div>
                            <div class="section__item--pricedrop">
                            ${item.Giá} VNĐ
                            </div>
                            <div class="section__item--price">
                            ${item.Giá_b} VNĐ
                            </div>
                        </div>
                    </a>
                </div>`
            }
        }
        })
    })
}

//Hàm load data theo năm đã chọn
function loadDataTheoNam(nam,index){
    fetch('../data/data.json')
    .then((response) => response.json())
    .then((json)=> {
        var soLuong = index*18;
        var chayBien = 0;
        const listProduct = document.querySelector('.container__section');
        listProduct.innerHTML="";
       json.forEach(item => { 
        if(item.Năm>=nam){
        chayBien++;
        if(soLuong>(index*18-18)&&chayBien>(soLuong-18)){
            soLuong--;
            listProduct.innerHTML += ` 
        <div class="section__item">
                    <a href="${item.Link}">
                        <img src="${item.Ảnh}" alt="">
                        <div class="section__item--info">
                            <div class="section__item--attribute">
                                ${item.Năm} &bull; ${item.Size}
                            </div>
                            <div class="section__item--brand">
                            ${item.Hãng}
                            </div>
                            <div class="section__item--name">
                            ${item.tên}
                            </div>
                            <div class="section__item--pricedrop">
                            ${item.Giá} VNĐ
                            </div>
                            <div class="section__item--price">
                            ${item.Giá_b} VNĐ
                            </div>
                        </div>
                    </a>
                </div>`
            }
        }
        })
    })
}

//Hàm load data theo chất liệu đã chọn
function loadDataTheoChatLieu(Chatlieu,index){
    fetch('../data/data.json')
    .then((response) => response.json())
    .then((json)=> {
        var soLuong = index*18;
        var chayBien = 0;
        const listProduct = document.querySelector('.container__section');
        listProduct.innerHTML="";
       json.forEach(item => { 
        if(item.Chất_liệu==Chatlieu){
        chayBien++;
        if(soLuong>(index*18-18)&&chayBien>(soLuong-18)){
            soLuong--;
            listProduct.innerHTML += ` 
        <div class="section__item">
                    <a href="${item.Link}">
                        <img src="${item.Ảnh}" alt="">
                        <div class="section__item--info">
                            <div class="section__item--attribute">
                                ${item.Năm} &bull; ${item.Size}
                            </div>
                            <div class="section__item--brand">
                            ${item.Hãng}
                            </div>
                            <div class="section__item--name">
                            ${item.tên}
                            </div>
                            <div class="section__item--pricedrop">
                            ${item.Giá} VNĐ
                            </div>
                            <div class="section__item--price">
                            ${item.Giá_b} VNĐ
                            </div>
                        </div>
                    </a>
                </div>`
            }
        }
        })
    })
}


//Hàm load data theo kích thước đã chọn
function loadDataTheoSize(size,index){
    fetch('../data/data.json')
    .then((response) => response.json())
    .then((json)=> {
        var soLuong = index*18;
        var chayBien = 0;
        const listProduct = document.querySelector('.container__section');
        listProduct.innerHTML="";
       json.forEach(item => { 
        if(item.Size==size){
        chayBien++;
        if(soLuong>(index*18-18)&&chayBien>(soLuong-18)){
            soLuong--;
            listProduct.innerHTML += ` 
        <div class="section__item">
                    <a href="${item.Link}">
                        <img src="${item.Ảnh}" alt="">
                        <div class="section__item--info">
                            <div class="section__item--attribute">
                                ${item.Năm} &bull; ${item.Size}
                            </div>
                            <div class="section__item--brand">
                            ${item.Hãng}
                            </div>
                            <div class="section__item--name">
                            ${item.tên}
                            </div>
                            <div class="section__item--pricedrop">
                            ${item.Giá} VNĐ
                            </div>
                            <div class="section__item--price">
                            ${item.Giá_b} VNĐ
                            </div>
                        </div>
                    </a>
                </div>`
            }
        }
        })
    })
}

// điều hướng load data cho trang web theo brand đã chọn
var listNavPath = document.querySelectorAll(".nav--brand");
var showNavPath = document.getElementById('show_nav_path');
for(let i = 0; i<listNavPath.length;i++){
    listNavPath[i].onclick = function(){
        loadDataTheoBrand(listNavPath[i].getAttribute("name"),1);
        co = listNavPath[i].getAttribute("name");
        showNavPath.innerHTML ='Home&ensp;>&ensp;'+co;
    }
}

// điều hướng load data cho trang web theo giá đã chọn
var range = document.querySelector("#gia");
var output = document.querySelector(".aside__gia--input");
range.addEventListener("input", function() {
    showNavPath.innerHTML ='Home&ensp;>';
    output.innerHTML = this.value;
    loadDataTheoGia(this.value,1)
    co="Giá"
    });


// điều hướng load data theo loại xe đã chọn
const loaiM = document.getElementById('checkbox--M');
const loaiRG = document.getElementById('checkbox--RG');
loaiM.addEventListener('change',function(){
    showNavPath.innerHTML ='Home&ensp;>';
    if (this.checked&&!loaiRG.checked) {
       loadDataTheoLoai(this.getAttribute("name"),1)
       co="Loại"
       checkboxLoai=1;
    }else if(!this.checked&&loaiRG.checked){
        loadDataTheoLoai(loaiRG.getAttribute("name"),1)
        co="Loại"
        checkboxLoai=0;
    }else{
        loadData(1);
        co="";
    }
})
loaiRG.addEventListener('change',function(){
    showNavPath.innerHTML ='Home&ensp;>';
    if (this.checked&&!loaiM.checked) {
        loadDataTheoLoai(this.getAttribute("name"),1)
        co="Loại"
        checkboxLoai=0;
    }else if(!this.checked&&loaiM.checked){
        loadDataTheoLoai(loaiM.getAttribute("name"),1)
        co="Loại"
        checkboxLoai=1;
    }else{
        loadData(1);
        co=""
    }
})

//điều hướng load data theo năm sản xuất
const selectedYear = document.getElementById('year--start');
selectedYear.addEventListener('change',function(){
    showNavPath.innerHTML ='Home&ensp;>';
    loadDataTheoNam(selectedYear.value,1);
    co="Năm";
})

// điều hướng load data theo chất liệu
const radCarbon = document.getElementById('material--carbon');
const radNhom = document.getElementById('material--Al');
const resetMaterial = document.getElementById('material--reset');
radCarbon.addEventListener('change',function(){
    showNavPath.innerHTML ='Home&ensp;>';
    co="Chất liệu";
    radChatLieu=radCarbon.value;
    loadDataTheoChatLieu(radChatLieu,1);
})
radNhom.addEventListener('change',function(){
    showNavPath.innerHTML ='Home&ensp;>';
    co="Chất liệu";
    radChatLieu=radNhom.value;
    loadDataTheoChatLieu(radChatLieu,1);
})
resetMaterial.addEventListener('click',function(){
    showNavPath.innerHTML ='Home&ensp;>';
    loadData(1);
    radCarbon.checked=false;
    radNhom.checked=false;
    co="";
})

// điều hướng loadData theo kích cỡ
const radS = document.getElementById('size--S');
const radL = document.getElementById('size--L');
const radXL = document.getElementById('size--XL');
const resetSize = document.getElementById('size--reset');
radS.addEventListener('change',function(){
    showNavPath.innerHTML ='Home&ensp;>';
    co="Size";
    radSize=radS.value;
    console.log(radSize)
    loadDataTheoSize(radSize,1);
})
radL.addEventListener('change',function(){
    showNavPath.innerHTML ='Home&ensp;>';
    co="Size";
    radSize=radL.value;
    loadDataTheoSize(radSize,1);
})
radXL.addEventListener('change',function(){
    showNavPath.innerHTML ='Home&ensp;>';
    co="Size";
    radSize=radXL.value;
    loadDataTheoSize(radSize,1);
})
resetSize.addEventListener('click',function(){
    showNavPath.innerHTML ='Home&ensp;>';
    loadData(1);
    radS.checked=false;
    radL.checked=false;
    radXL.checked=false;
    co="";
})

// điều hướng loadData cho trang web theo số page đã chọn
const listNavbar = document.querySelectorAll(".index");
for(let i = 0; i < listNavbar.length; i++) {
    listNavbar[i].onclick = function() {
         if(co=="Giá"){
            loadDataTheoGia(range.value,i+1)
         }
         else if(co=="Loại"){
            if(checkboxLoai==0){
                loadDataTheoLoai("Renn & Gravel",i+1);
            }else{
                loadDataTheoLoai("Mountainbike",i+1);
            }
         }
         else if(co=="Năm"){
            loadDataTheoNam(selectedYear.value,i+1);
         }
         else if(co=="Size"){
            loadDataTheoSize(radSize,i+1);
         }
         else if(co=="Chất liệu"){
            loadDataTheoChatLieu(radChatLieu,i+1);
         }
         else if(co!=""){
            loadDataTheoBrand(co,i+1);
         }else{
            loadData(i+1);
        }
    }
}