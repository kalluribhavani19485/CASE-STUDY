function Check() {
    var na = document.getElementById("name").value;
    var cn = document.getElementById("contact").value;
    var dt = document.getElementById("date").value;
    var ti = document.getElementById("time").value;
    
    if (na == "" || na == null) {
        alert("please enter your name to book appointment");
    }
    else if (cn == "" || cn == null || cn.length!=10 || isNaN(cn)) {
        alert("please enter valid contact number to book appointment");
    }
    else if (dt==""||dt==null) {
        alert("please enter valid date to book appointment");
    }
    else if (ti == "" || ti == null) {
        alert("please enter valid time to book appointment");
    }
    else {
        alert("Appointment booked successfully...");
    }
}