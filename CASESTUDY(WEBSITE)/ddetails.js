function validateEmail(emailField) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(emailField.value) == false) {
        alert('Invalid Email Address');
        return false;
    }
    alert("valid");
    return true;

}
function Check() {
    var na = document.getElementById("name").value;
    var cn = document.getElementById("contact").value;
    var hos = document.getElementById("hospital").value;
    var cer = document.getElementById("certificate").value;
    var af = document.getElementById("avfr").value;
    var at = document.getElementById("avto").value;
    if (na == "" || na == null) {
        alert("Please enter name");
    }
    else if (cn == "" || cn == null || cn.length!=10 || isNaN(cn)) {
        alert("Please enter valid phone number");
    }
    else if (hos == "" || hos == null) {
        alert("Please enter your hospital");
    }
    else if (cer == "" || cer == null ) {
        alert("Please submit your copy of certificate");
    }
    else if (af==""||af==null)
    {
        alert("please enter available time");
    }
    else if (at == "" || at == null) {
        alert("please enter available time");
    }
    else {
        alert("Details added successfully.....");
    }
}

