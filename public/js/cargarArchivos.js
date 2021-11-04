const dragArea = document.querySelector(".drag-area");
const button = document.getElementById("boton");
const input = document.getElementById("input-file");
let files;

button.addEventListener("click", (e) =>{
    input.click();
})

input.addEventListener("change", (e) => {
    files = this.files;
    dragArea.classList.add("active");
    showFiles(files);
    dragArea.classList.remove("active");
})

dragArea.addEventListener("dragover" , (e) =>{
    e.preventDefault();
    dragArea.classList.add("active");
})

dragArea.addEventListener("drop" , (e) =>{
    e.preventDefault();
    files = e.dataTransfer.files;
    showFiles(files);
    dragArea.classList.remove("active");
})

dragArea.addEventListener("dragleave" , (e) =>{
    e.preventDefault();
    dragArea.classList.remove("active");
})


function showFiles(files){
    if(files.length === undefined){
        processFile(files);
    }else{
        for(const file of files){
            processFile(file);
        }
    }
}

function processFile(file){
    const docType = file.type;
    console.log(docType)
    const validExtensions = ['application/pdf'];

    if(validExtensions.includes(docType)){
        const fileReader = new FileReader();
        const id = `file-${Math.random().toString(32).substring(7)}`;
        /*
        fileReader.addEventListener('load', e =>{
            const fileUrl = fileReader.result;
            const img = `
                <div id="${id}" class="file-container">
                    <div class="status">
                        <span>${file.name}</span>
                        <span class="status-text">
                            Loading...
                        </span>
                    </div>
                </div>
            `;
            const html = document.querySelector('#preview').innerHTML;
            document.querySelector('#preview').innerHTML = img + html;
            alert("sii")
        });
    */
        fileReader.readAsDataURL(file);
        uploadFile(file,id);
        alert("sus archivos se ...")

    }else{
        alert('no se han subido');
    }
}

function uploadFile(){}