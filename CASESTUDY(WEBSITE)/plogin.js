function Check() {
    var un = document.getElementById("Uname").value;
    var pwd = document.getElementById("Pass").value;
    if (un == "" || un == null) {
        alert("Please enter username");
    }
    else if (pwd == "" || pwd == null) {
        alert("Please enter password");
    }
    else {
         alert("login successfully");
     }
}