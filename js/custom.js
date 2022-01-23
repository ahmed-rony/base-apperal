$(document).ready(function(){

    // aos js   ============;

    AOS.init();
});

// email validation   =============;

var email = document.getElementById('email');
var emailErr = document.getElementById('emailErr');

function subm(){

    // email error;
    if(email.value == ""){
        email.style.borderColor = 'hsl(0, 93%, 68%)';
        email.focus();
        emailErr.innerHTML = 'Please provide a valid email <i class="fas fa-exclamation-circle icon-1"></i>';
        return false;
    }

    
}

function removeErr(){

    // email remove error;
    if(email.value != "")
    email.style.borderColor = '#eeeef3';
    emailErr.innerHTML = '';
}

email.addEventListener('blur',removeErr);

