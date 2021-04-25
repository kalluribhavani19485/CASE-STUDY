
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
    var na = document.getElementById("pname").value;
    var con = document.getElementById("contact").value;
    var que = document.getElementById("query").value;
    if (na == "" || na == null)
    {
        alert("please enter name to continue");
    }
    
   else if (con == "" || con.length!=10) {
        alert("please enter valid contact number");
    }
    
    
   else if (que.length == 0) {
        alert("please enter query");
    }
    else {
        alert("send successfully")
    }

}