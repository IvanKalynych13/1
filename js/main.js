// let thisAlert = alert('це alert');
// let thisPrompt = prompt("це- prompt");
// confirm("confirm");
// console.log(thisAlert);
// if(thisPrompt==10){
//     alert("А ти харош")
// }else{
//     alert("Підр")
// }

// let i = 0;
// while(i < 4){
//     alert("Ку");
//     i++
// };
// for(i=0;i<3;i++){
//     prompt("Ку")
// };

// let sum = 0;
// while(true){
//     var valume =+ prompt("Ведите число");
//     if(!valume){break};
//     sum=valume
//     alert('Сума '+ valume)
// };
// let p = 0;
// for(; p < 10; p++){
//     if(p % 2 ==0) {continue};
//     alert(p)
// }

let masyv = ['Чай','Хліб','Цукор','Вода'];
// alert(masuv[1]);
// alert(masuv.length);

// let names = " Катя,  Коля,  Ваня,  Міша";
// masuvs = names.split(", ");
// for(i=0;  i<masuvs.length; i++ ){
//     alert('Вам повідомлення' + masuvs[i]);
// };

// let str = masuv.join(',');
// alert(str);
// masyv.splice(0, 1);
// alert(masyv);
// masyv.splice(2, 0, 'Я','Иду');
// alert(masyv);
// let numbers = [1, 2, 3,4,5];
// numbers.reverse();
// alert(numbers);

// let newNumbers = masyv.concat('Привет','Ку')
// alert(newNumbers);

// let object = {
//     name : 'Vanya',
//     agge : 3,
//     friend: 4,
//     theDrink: 'wather'
// };
// let namw = 'agge';
// alert(object[namw]);

// object['years'] = 20;

// alert(object.years);

// let tut = {
//     car : {
//         inside : {
//             rule: 'maps'
//         },
//         outside : {
//             trunk : 'Jack' 
//         },
//     },
// };

// alert(tut.car.inside['rule']);

// let a  = document.querySelector('.car');
// a.innerHTML = 'this strind created in js';


// let chevo = {
//     name : 'Vasya',
//     agge : 20, 
//     friends : 5
// };

// for(let svoystvo in chevo){
//     alert('Значення ' + svoystvo + " значення " + chevo[svoystvo]);
// }

// let element = 0;

// for(let num in chevo){
//     element++;
// };
// alert('Всього елементів ' + element);

let a = document.getElementsByClassName('h3');
let b = document.getElementById('p');
console.log(a);
console.log(b);