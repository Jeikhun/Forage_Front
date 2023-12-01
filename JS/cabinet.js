
let playBtn = document.querySelectorAll(".play")

// playBtn.forEach(element => {
//     element.addEventListener("click", (e)=>{

//         e.target.parentElement.lastElementChild.play();
//     })
// });
const videoBtn = document.querySelectorAll(".custom-video__control");
const video = document.querySelectorAll(".video_video");
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");
let i;
leftBtn.addEventListener("click", ()=>{
    video.forEach(element => {
        element.pause();
        element.previousElementSibling.innerHTML= "▶";
    });
})
rightBtn.addEventListener("click", ()=>{
    video.forEach(element => {
        element.pause();
        element.previousElementSibling.innerHTML= "▶";
    });
})
videoBtn.forEach(element => {
    element.addEventListener("click", ()=>{
        if (element.innerHTML === "▶") {
            element.innerHTML = "| |";
            element.parentElement.lastElementChild.play();
          } else {
            element.innerHTML = "▶";
            element.parentElement.lastElementChild.pause();
          }

    })
});



for (i = 0; i < video.length; i++) {
    video[i].addEventListener("click", function(){
        const controls = this.previousElementSibling
        if (controls.innerHTML === "▶") {
            controls.innerHTML = "| |";
            this.play();
          } else {
            controls.innerHTML = "▶";
            this.pause();
          }

    })
    video[i].addEventListener("mouseout", function () {
        const controls = this.previousElementSibling;
        if (!this.paused) {
          controls.style.display = "none";
        }
      });
      video[i].addEventListener("mouseover", function () {
        const controls = this.previousElementSibling;
        controls.style.display = "flex";
      });
      video[i].addEventListener(
        "ended",
        function () {
          const controls = this.previousElementSibling;
          controls.style.display = "flex";
          controls.innerHTML = "▶";
        },
        false
      );
}

const fileInput = document.getElementById('file-input');
const fileImg = document.querySelector("#file-img");

const fileInputLabel = document.getElementById(
  'file-input-label',
);
const fileInputP = document.querySelector("#file-input-p");
fileInput.addEventListener('change', () => {
  if (fileInput.value === '') {
    fileInputP.innerHTML = 'Select a file';
  } else {
    const realPathArray = fileInput.value.split('\\');

    fileInputP.innerHTML =
      realPathArray[realPathArray.length - 1];
      console.log(realPathArray[realPathArray.length - 1]);
  }
});

