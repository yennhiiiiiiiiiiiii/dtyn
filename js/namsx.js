function loadYear(){
    console.log(124)
    let namHienTai = new Date();
    let year = namHienTai.getFullYear();
    var select;
    for(let i = 1990 ; i<= year ; ++i){
        let item = "<option> "+ i +" </option>";
        select += item + "<br>";
        
    }
    document.getElementById("year--start").innerHTML = select;
    document.getElementById("year--end").innerHTML = year;
}