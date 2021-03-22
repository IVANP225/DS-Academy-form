   
function ValidMail() {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var myMail = document.getElementById('email__form__question').value;
    var valid = re.test(myMail);
    return valid;
}

function ValidPhone() {
    var re = /^(\s*)?(\+)?([-\s]?\d[-\s]?){4,14}(\s*)?$/;
    var myPhone = document.getElementById('phone__form__question').value;
    var valid = re.test(myPhone);
    return valid;
}

function ValidName() {
    var re = /^[а-яА-ЯёЁ\s]+$/;
    var myName = document.getElementById('name__form__question').value;
    var valid = re.test(myName);
    return valid;
}

