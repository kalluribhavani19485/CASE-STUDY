function Check() {
    var na = document.getElementById("name").value;
    var file = document.getElementById("myfile").value;
    if (na == "" || na == null) {
        alert("Enter name to upload documents..");
    }
    else if (file == "" || file.length == 0 || file == null)
    {
        alert("please upload your document");
    }
    else {
        alert("documents uploaded successfully....");
    }
}