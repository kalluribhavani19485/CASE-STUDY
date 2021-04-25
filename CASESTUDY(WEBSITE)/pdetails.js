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
    var age = document.getElementById("age").value;
    var we = document.getElementById("weight").value;

    if (na == "" || na == null) {
        alert("Please enter name");
    }
    else if (cn == "" || cn == null || cn.length!=10 || isNaN(cn)) {
            alert("Please enter valid phone number");
        }
        else if (age == "" || age == null || isNaN(cn)) {
            alert("Please enter valid age");
        }
        else if (we == "" || we == null || isNaN(we)) {
            alert("Please enter valid weight");
        }
    else {
        alert("Details added successfully.....");
    }



    }




