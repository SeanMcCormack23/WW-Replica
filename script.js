const carouselImages = document.querySelector('.imageCarousel');
const btns = document.querySelectorAll('.btn');
const noOfImages = document.querySelectorAll('.imageCarousel img').length;
let imageIndex = 1;
let translateX = 0;

btns.forEach(button => {
  button.addEventListener('click', event => {
    if (event.target.id === 'previous'){
      if (imageIndex !== 1){
        imageIndex--;
        translateX += 2000;
      }
    }else {
      if (imageIndex !== noOfImages){
        imageIndex++;
        translateX -= 2000;
      }
    }
    carouselImages.style.transform = `translateX(${translateX}px)`;
  });
});

// const carouselText = document.querySelector('.carouselText center');
// btns.forEach(button => {
//   button.addEventListener('click', event => {
//     if (imageIndex === noOfImages){
//       console.log('last image');
//       carouselText.visibility.transform = "visible";
//     }
//   })
// })