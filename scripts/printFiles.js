function printFiles() {

    var input = document.getElementById("filesToUpload");
    var ul = document.getElementById("fileList");

    console.log(input);
    console.log(ul);
    console.log("hi");

    while (ul.hasChildNodes()) {
        ul.removeChild(ul.firstChild);
    }
    for (var i = 0; i < input.files.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = input.files[i].name;
        ul.appendChild(li);
    }
    if(!ul.hasChildNodes()) {
        var li = document.createElement("li");
        li.innerHTML = 'No Files Selected';
        ul.appendChild(li);
    }
}

document.addEventListener('change', printFiles);