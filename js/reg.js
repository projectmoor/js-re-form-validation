window.onload = function() {
    // define regular expression
    var regtel = /^1[3|4|5|7|8]\d{9}$/; 
    var regkname = /^[\u4e00-\u9fa5]{2,8}$/; // Chinese characters
    var regmsg = /^\d{6}$/;
    var regpwd = /^[a-zA-Z0-9_-]{6,16}$/;
    var tel = document.querySelector('#tel');
    var kname = document.querySelector('#nickname');
    var msg = document.querySelector('#msg');
    var pwd = document.querySelector('#pwd');
    var confirmpwd = document.querySelector('#confirmpwd');
    // set up validation for tel, name, message, password
    regexp(tel, regtel); // phone number
    regexp(kname, regkname); // nickname
    regexp(msg, regmsg); // text message
    regexp(pwd, regpwd); // password

    // Function to add onblur event to input element to verify user input
    function regexp(ele, reg) {
        ele.onblur = function() {
            if (reg.test(this.value)) {
                this.nextElementSibling.className = 'success';
                this.nextElementSibling.innerHTML = '<i class="success_icon"></i>';
            } else {
                this.nextElementSibling.className = 'error';
                this.nextElementSibling.innerHTML = '<i class="error_icon"></i> incorrect format, try again';
            }
        }
    };

    // confirm password use different logic than the rest
    confirmpwd.onblur = function() {
        if (this.value == pwd.value) {
            this.nextElementSibling.className = 'success';
            this.nextElementSibling.innerHTML = '<i class="success_icon"></i>';
        } else {
            this.nextElementSibling.className = 'error';
            this.nextElementSibling.innerHTML = '<i class="error_icon"></i> password not the same';
        }
    }

}