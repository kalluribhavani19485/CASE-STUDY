function Check() {
    var un = document.getElementById("usernamesignup").value;
    //var rm = document.getElementById("emailsignup").value;
    var pwd = document.getElementById("passwordsignup").value;
    var cpwd = document.getElementById("passwordsignup_confirm").value;

    if (un == "" || un == null) {
        alert("please enter username");
    }
    else if (pwd == "" || pwd == null||pwd.length<8) {
        alert("Please enter password and min length is 8");
    }
    else if (cpwd == "" || cpwd == null || cpwd.length<8) {
        alert("Please enter confirmpassword amd min length is 8");
    }
    else if (pwd != cpwd) {
        alert("Password and Confirm Password should be same");
    }
    else if (pwd == cpwd) {
        alert("Registered successfully");
    }
}
function validateEmail(emailField) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(emailField.value) == false) {
        alert('Invalid Email Address');
        return false;
    }
    alert("valid");
    return true;

}