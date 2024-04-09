$(document).ready(function(){
    var $slickSlider = $('.slick-slider');
    $slickSlider.slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
    
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false, 
        pauseOnHover: true, 
        pauseOnFocus: true, 
        pauseOnDotsHover: true, 
        cssEase: 'linear' 
    });

    $(window).on('resize', function() {
        clearTimeout(this.resizeTimeout);
        this.resizeTimeout = setTimeout(function() {
            $slickSlider.slick('setPosition');
        }, 250);
    });
});
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function validatePassword(password){
    var re=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    return re.test(password);
}

document.addEventListener('DOMContentLoaded', function() {
    var inputs = document.querySelectorAll('.main-form-input');
    var registerButton = document.getElementById('registerButton');
    var loginButton=document.getElementById('loginButton');
    inputs.forEach(function(input) {
        input.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                if (input.type === 'text' && input.value.length < 5) {
                    alert('Họ và tên phải có ít nhất 5 kí tự');
                } else if (input.type === 'email' && !validateEmail(input.value)) {
                    alert('Email không hợp lệ');
                }else if (input.type === 'password' && !validatePassword(input.value)) {
                    alert('Mật khẩu phải ít nhất 8 kí tự có kí tự số và đặc biệt');
                } else if (input.type === 'password' && input.id === 'confirmPassword' && input.value !== document.getElementById('password').value) {
                    alert('Mật khẩu xác nhận không khớp');
                } else if (input.value === '') {
                    alert('Trường không được để trống');
                } else {
                    var nextInput = inputs[Array.from(inputs).indexOf(input) + 1];
                    if (nextInput) {
                        nextInput.focus();
                    } else {
                        
                        if(input.id ==='password-login'){
                            loginButton.click();
                        }
                    }
                }
            }
        });
    });
    loginButton.addEventListener('click', function(event){
        event.preventDefault();
        var isValid1=true;
        inputs.forEach(function(input){
            if(!isValid1) return;
            else if(input.type ==='email' && !validateEmail(input.value)){
                isValid1=false;
                alert('Email không hợp lệ');
            }else if(input.id === 'password-login' && !validatePassword(input.value)){
                isValid1=false;
                alert('Mật khẩu phải ít nhất 8 kí tự có kí tự số và đặc biệt');
            }else if(input.value === ''){
                isValid1=false;
                alert('Không được để trống trường');
            }
        });
        if(isValid1){
            alert('Đăng nhập thành công');
            window.location.href="./trangchu.html";
        }
        
    });
});






