//thêm sự kiện nút chi tiết
//tìm tất cả các button
let buttons = document.querySelectorAll('.show');
buttons.forEach(button => {
    button.addEventListener('click', function(){
        //alert("click me");
        //Tìm phần tử cha .box
        let parent = button.closest('.box');
        console.log(parent);
        //Tìm .chitiet trong .bõ cha
        let chitiet = parent.querySelector('.chitiet');
        console.log(chitiet);
        //Hiển thị chi tiết
        chitiet.classList.remove('an');
    })
})