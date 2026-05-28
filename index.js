let count = 0;
// document.querySelector('.decrement').disabled = true;

const countDisplay = document.querySelector('.count');
  document.querySelector('.increment').addEventListener('click', () => {
  count++;
  countDisplay.innerHTML = count;
});
  document.querySelector('.decrement').addEventListener('click', () => {
    count--;
    countDisplay.innerHTML = count;
  
  if(countDisplay.innerText <= '0') {
    count = 0;
    countDisplay.innerText = 0;
    console.log("hhi");
  } 
  });
  document.querySelector('.reset').addEventListener('click', () => {
    count = 0;
    countDisplay.innerHTML = count;
  });
