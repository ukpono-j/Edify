 
const  imgDiv = document.querySelector(".profile-pic-div")
const img = document.querySelector("#photo")
const file = document.querySelector("file")
const upload = document.querySelector("#uploadBtn");

//if you hover on profile 

imgDiv.addEventListener("mouseenter", function(){
  uploadBtn.style.display ="block"
});

// if you hover on img div 
  imgDiv.addEventListener("mouseleave" , function () {
    uploadBtn.style.display ="none"
  })
 
  // ==== lets work for image showing functionality when we choose an image to upload 

  // ==========when we choose a photo to upload
  file.addEventListener("change" , function() {
    //  this refers to file
    const chooseFile =this.files[0];

    if (chooseFile) {   
      const reader = new FileReader();

      reader.addEventListener("load", function(){
        img.setAttribute("scr", reader.result)
      })

      reader.readAsDataURL(chooseFile)
    }
  })