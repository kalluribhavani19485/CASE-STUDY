function Check() {
    var fn = document.getElementById("fname").value;
    var nco = document.getElementById("cname").value;
    var cn = document.getElementById("ccnum").value;
    var em = document.getElementById("expmonth").value;
    var ey = document.getElementById("expyear").value;
    var cv = document.getElementById("cvv").value;

    if (fn == "" || fn == null) {
        alert("please enter your full name");
    }
    else if (nco == "" || nco == null) {
        alert("please enter your  name on card");
    }
    else if (cn == "" || isNaN(cn) || cn.length!=16) {
        alert("please enter proper card number");
    }
    else if (em == "" || isNaN(em)) {
        alert("please enter proper expiry month");
    }
    else if (ey == "" || isNaN(ey)) {
        alert("please enter proper expiry year");
    }
    else if (cv == "" || isNaN(cv) || cv.length != 3) {
        alert("please enter proper expiry year");
    }
    else {
        alert("Payment done successfully.....");
    }
}