/*
დაწერეთ ფუნქცია რომელიც შეამოწმებს გადაცემული ტექსტი არის თუ არა პალინდრომი . 
პალინდრომი არის სიტყვა რომელიც შებრუნებულ მდგომარეობაშიც იგივეა . მაგ. madam - მარცხნიდანაც და მარჯვნიდანაც ერთი და იგივეა(შებრუნებულიც და ჩვეულებრივადაც) .
!!!!დაწერეთ ამ ამოცანის მინიმუმ სამი სხვადასხვა ამოხსნის გზა 
function palindrom(txt) {

}

*/

function palindrom(txt) {
    return txt === txt.split('').reverse().join('')
}

function palindrome1(txt){
    let len = txt.length;
    for(let i = 0; i < len/2; i++){
        if (txt[i] !== txt[len-1-i]){
            return false
        }
    } return true
}

function palindrome2(txt){
    let reversed = '';
    for(let i = txt.length - 1; i >= 0; i--){
        reversed += txt[i];
    }
    return txt === reversed;
}

// console.log(palindrome2('annna'))
//==========================================================================
//Task 2

/*
დაწერეთ ფუნქცია რომელიც დაგვიბრუნებს პირველ არაგამეორებადი ქარაქტერი/სიმბოლოს. 
მაგალითად გვაქვს string 'bcskbrk' -> c - პირველი არაგამეორებადი ქარაქტერი არის 'c'
'cbcbdde' -> 'e'
'worsdorw' -> 's' 
'worsdorws'-> 'd'
*/

// function checkChar(txt){
//     for(let el of txt){
//         if(txt.indexOf(el) === txt.lastIndexOf(el)){
//             return el
//         }
//     }
//     return 'character not found'
// }

// 2 ხერხი

function checkChar1(txt){
    for(let el of txt){
        let foundElIndex = txt.indexOf(el);
        if(txt.indexOf(el, foundElIndex + 1) === -1){
            return el
        }
    }
}

// console.log(checkChar1('cbcbdde'))

//==========================================================================
/*
Task 3 : 
დაწერეთ ფუნქცია რომელიც გადაცემულ ტექსტის camelCase ში კონვერტაციას გააკეთებს
camelize("sad midis Matarebeli") -> "sadMidisMatarebeli"

*/
// function camelize(txt){
//     return txt.replaceAll(' ','')
// }

function firstToUpper(word){
    return word[0].toUpperCase() + word.substring(1).toLowerCase()
}

// function camelize(txt){
//     let arr = txt.split(' ');
//     let camelizedTxt = '';
//     arr.forEach((el,index) => {
//         camelizedTxt += index === 0 ? el : firstToUpper(el)
//     })
//     return camelizedTxt;
// }

// მეორე ხერხი

function camelize(txt){
    let arr = txt.split(' ');
    return arr.reduce((acc,cur) => {
        acc +=  firstToUpper(cur);
        return acc
    })
}

// console.log(camelize("sad midis Matarebeli"))
/*

//==========================================================================
//Task 4

/*
დაწერეთ ფუნქცია რომელსაც გადაეცემა მასივი და ეს ფუნქცია დაგვიბრუნებს
ამ მასივში ყველაზე ხშირად გამოერებად ელემენტს და გამეორების რაოდენობას
მაგალითად
arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
პროგრამამ უნდა დაგვიბრუნოს 'a - 5'
უმჯობესია გამოიყენოთ reduce მეთოდი
*/

let arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

function count(array){
    let arrchars = array.reduce((acc, cur) => {
        acc[cur] ? acc[cur]++ : acc[cur] = 1
        if(acc[cur] > acc.maxVal.value){
            acc.maxVal.value = acc[cur];
            acc.maxVal.el = cur
        }
        return acc
    },{maxVal : {value : 0, el: ''}})
    return arrchars.maxVal;
}

// console.log(count(arr1)) 

//==========================================================================
/*
Task 5 : 
ფუნქციამ უნდა დააბრუნოს მასივი ისე როგორც კომენტარშია ნაჩვენები . 
გამოიყენეთ map

// */

// function readyToPutInTheDOM(arr) {
// }
// console.log(
//   readyToPutInTheDOM([
//     {
//       name: "Angelina Jolie",
//       age: 80,
//     },
//     {
//       name: "Eric Jones",
//       age: 2,
//     },
//     {
//       name: "Paris Hilton",
//       age: 5,
//     },
//     {
//       name: "Kayne West",
//       age: 16,
//     },
//     {
//       name: "Bob Ziroll",
//       age: 100,
//     },
//   ])
// );

let persons = [
    {
      name: "Angelina Jolie",
      age: 80,
    },
    {
      name: "Eric Jones",
      age: 2,
    },
    {
      name: "Paris Hilton",
      age: 5,
    },
    {
      name: "Kayne West",
      age: 16,
    },
    {
      name: "Bob Ziroll",
      age: 100,
    },
  ]

// ["<h1>Angelina Jolie</h1><h2>80</h2>",
// "<h1>Eric Jones</h1><h2>2</h2>",
// "<h1>Paris Hilton</h1><h2>5</h2>",
// "<h1>Kayne West</h1><h2>16</h2>",
// "<h1>Bob Ziroll</h1><h2>100</h2>"]


function readyToPutInTheDOM(arr){
    let res = [];
    arr.forEach((el) => {
        res.push(`<h1>${el.name}</h1><h2>${el.age}</h2>`)
    })
    return res;
}

// console.log(readyToPutInTheDOM(persons))

//==========================================================================
//Task 6

/*

დაწერეთ ფუნქცია რომელიც დაითვლის ნულების მიმდევრობის რაოდენობას .  მიმდევრობა ვალიდურია თუ კი არის არანაკლებ 4 სიგრძისა 

[0, 0, 0, 0, 0, 1]  -->  1
# ერთი ჯგუფი 0ლების მიმდევრობის რომელიც 4ზე მეტია

[0, 0, 0, 0, 1, 0, 0, 0, 0]  -->  2
# ორი სხვადასხვა 4 სიგრძის მიმდევრობა

[0, 0, 0, 1, 0]  -->  0 
# ერთი მიმდევრობა არის 3 სიგრძის მეორე 1 სიგრძის ანუ არც ერთი არ არის ვალიდური და ფუნქციამ უნდა დაგვიბრუნოს 0 

[0, 0, 0, 1, 0, 0]  -->  0
# იგივე

[1, 2, 3, 4, 5]  -->  0
# საერთოდ არ გვაქვს მიმდევრობა

[]  -->  0
# ცარიელია

*/

function checkSequence(nums){
    let normSeq = 0;
    let resSeq = 0;
    nums.forEach((el) => {
        if(el === 0){
            normSeq += 1
        } else {
            if( normSeq > 3){
                resSeq += 1
            }
            normSeq = 0
        }
    })
    return normSeq > 3 ? resSeq + 1 : resSeq
}

// console.log(checkSequence([0, 0, 0, 0, 1, 0, 0, 0, 0])) // 2
// console.log(checkSequence([0, 1, 0, 0, 1, 0, 0, 0, 0])) // 1
// console.log(checkSequence([0, 0, 1, 0, 1, 0, 0, 0, 1])) // 0
// console.log(checkSequence([0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0 ,0])) // 2


//==========================================================================
//Task 7
/*
დაწერეთ ფუნქცია ციფრების ჯამი , sumOfDigits(n) რომელიც იღებს ერთ პარამეტრს 
და აბრუნებს გადაცემული მნიშვნელობის შემადგენელი ციფრების ჯამს . 
sumOfDigits(1312) = 1+3+1+2 = 7;

აღნიშნული დავალება შეასრულეთ ორნაირად , როგორც ჩვეულებრივი ასევე რეკურსიული
ფუნქციის გამოყენებით . 

hint : 15670 
1567 % 10 -> 7
156 % 10 -> 6
15 % 10 -> 5

n < 10 -> n 
*/
// რეკურსიით
function sumOfDigitsRec (n) {
    if(n < 10) {
        return n 
    } else {
        return n % 10 + sumOfDigitsRec(Math.floor(n / 10))
    }
}

// console.log(sumOfDigitsRec(1769))

//ჩვეულებრივი

function sumOfDigits(n){
    let str = '' + n; // სტრინგად გადაკეთება
    let sum = 0;
    for(let i = 0; i < str.length; i++){
        sum += parseInt(str[i])
    }
    return sum
}

// console.log(sumOfDigits(1987))

//==========================================================================
//Task 8
//დაწერეთ TO-DO List , input ველით  და ღილაკით ,რომელზე დაჭერის შემთვევაში სიაში დაემატება todo-list item