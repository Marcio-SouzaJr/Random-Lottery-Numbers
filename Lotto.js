const btnLotto = document.getElementById("btn");
const numbers = document.getElementById("numbers");

btnLotto.addEventListener("click", function(){
 randonNumbers = [];
 numberOfNumbers = document.getElementById("choice").value;
 maxValueOfNumeber = document.getElementById("max").value;
 for (i = 0; i < numberOfNumbers; i++){
  randonNumbers.push(Math.floor((Math.random() * maxValueOfNumeber) + 1))
 }
 numbers.textContent = randonNumbers;
});
