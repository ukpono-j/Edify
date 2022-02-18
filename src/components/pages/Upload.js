 

  const imgDiv = document.querySelector(".profile-pic-div")
  const img = document.querySelector("#photo")
  const file = document.querySelector("file")
  const uploadBtn = document.querySelector("#uploadBtn");

  //if you hover on profile 

  imgDiv.addEventListener("mouseenter", function () {
    uploadBtn.style.display = "block"
  });

  // if you hover on img div 
  imgDiv.addEventListener("mouseleave", function () {
    uploadBtn.style.display = "none"
  })

  // ==== lets work for image showing functionality when we choose an image to upload 

  // ==========when we choose a photo to upload
  file.addEventListener("change", function () {
    //  this refers to file
    const choosedFile = this.files[0];

    if (choosedFile) {
      const reader = new FileReader();

      reader.addEventListener("load", function
        () {
        img.setAttribute("src", reader.result)
      })

      reader.ReadAsDataURL(choosedFile)
    }
  })