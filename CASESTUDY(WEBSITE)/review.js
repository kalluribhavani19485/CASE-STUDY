function Check() {
    var rev = document.getElementById("review");
   
    var rel = rev.value;
    var reln = rel.length;
    
    if (reln == 0) {
        alert("please enter your review");
    }
    else {
        alert("Review submitted successfully");
    }
}