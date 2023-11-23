// // Задача 1
//   function checkAge() {
//     let age = prompt("Please enter your age");
//     if (age >= 18) {
//         alert("welcome")
//     }else {
//         alert("go away")
//     }
//   }
//   checkAge();

// // Задача 2
// function max_name(name1, name2, name3) {
//     let max_name = name1;
//     let max_length = 0;

//     if (name2.length > max_length) {
//       max_name = name2;
//       max_length = name2.length;
//     } else if (name3.length > max_length) {
//       max_name = name3;
//       max_length = name3.length;
//     }

//     if (name1.length > max_length) {
//       console.log("Longest name: " + name1);
//     } else if (name2.length > max_length) {
//       console.log("Longest name: " + name2);
//     } else if (name3.length > max_length) {
//       console.log("Longest name: " + name3);
//     }
//   }

//   max_name('Alex', 'George', 'Michael');



//   let stop = prompt('stop number')





// Генератор ID
function generateRandoomString(length) {
    let randomString = '';
    let alphabet = '0123456789abcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * alphabet.length)
        randomString += alphabet[randomIndex];
    }
    console.log(randomString);

}

generateRandoomString(10);



// функция сортировки с методом bubblesort - Суть этого метода очень простая - мы сравниваем 2 соседних элемента, если второй элемент меньше, мы меняем их местами и переходим к следующей паре элементов.
let arr =[4, 2, 6, 3, 1, 50, 9];

function sort(arr) {
    
    for (let elem of arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            for (let j = 0; j < i; j++) {
                while (arr[j] >= arr[j + 1]) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }
}
sort(arr);
console.log(arr);





// function bubbleSort(arr) {
//     for (let j = arr.length - 1; j > 0; j--) {
//       for (let i = 0; i < j; i++) {
//         if (arr[i] > arr[i + 1]) {
//           let temp = arr[i];
//           arr[i] = arr[i + 1];
//           arr[i + 1] = temp;
//         }
//       }
//     }
//   }
// bubbleSort(arr);
// console.log(arr);











