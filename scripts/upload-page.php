if(count($_FILES['uploads']['filesToUpload'])) {
    foreach ($_FILES['uploads']['filesToUpload'] as $file) {

        echo $file;
    }
    print_r($_FILES)
}