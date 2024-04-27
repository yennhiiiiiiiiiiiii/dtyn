
const stars = document.querySelectorAll('.rating-box .stars i');
stars.forEach((star, index1) => {
  star.addEventListener('click', () => {
    stars.forEach((star, index2) => {
      index1 >= index2 ? star.innerHTML=`<img src="../img/star--yellow.png" alt="">` : star.innerHTML=`<img src="../img/star--black.png" alt="">`;
    });
  });
});
const brandItem = document.getElementById('Brand').innerText
const nameItem = document.getElementById('Name').innerText
//Hàm load data theo hãng của item
loadDataTheoBrand(brandItem,nameItem);
function loadDataTheoBrand(brand,name){
    fetch('../data/data.json')
    .then((response) => response.json())
    .then((json)=> {
        const listProduct = document.querySelector('.scroll-space__itemAll');
        listProduct.innerHTML="";
       json.forEach(item => { 
        if(item.Hãng==brand){
        if(item.tên!=name){
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
const starSubmit = document.getElementById('star--main')
const textSubmit = document.getElementById('comment');
const buttonSubmit = document.getElementById('submit');
var reviewMain = document.getElementsByClassName('review--main');
buttonSubmit.addEventListener('click',function(event){
    event.preventDefault();
    reviewMain[0].style.display = 'block';
    reviewMain[0].innerHTML=`
    <div class="review-header">
                    <span class="reviewer-name">`+'Do Thi Yen Nhi'+`</span>
                    <span class="review-date">`+'05/05/2024'+`</span>
                  </div>
                  <div class="stars">
                    `+starSubmit.innerHTML+`
                  </div>
                  <div class="review-body">
                    <div class="review-rating">
                    </div>
                    <p class="review-text">`+textSubmit.value+`</p>
                  </div>`;
})
