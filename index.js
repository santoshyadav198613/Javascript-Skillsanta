"use strict";

// console.log(document);

// document.getElementById("name").innerHTML = 'Hello world with getElementById';
// document.getElementById("name").hidden = true;

// document.getElementById("name").setAttribute('hidden', true);

// document.getElementById("name").style.color = 'Red';


// var helloDiv =
// document.getElementsByClassName("hello");
// console.log(helloDiv);

/*
var divTag = document.getElementsByTagName("div");
console.log(divTag);
*/


var fname = 'Javascript';

var result = 1 + 1;

result = result;

var Result = "2" + 2;

let firstName = null;

console.log(result);
console.log(Result);

// var employeeList = [
//     1, 2, 3, 4, 5
// ];


var employee = { name: 'Test', age: 10, address: 'Pune' };


console.log(typeof (employee));

var isFinal = true;


function add() {
    event.preventDefault();
    // console.log(typeof (number1));
    // console.log(typeof (number2));

    var number1 = parseInt(document.getElementById("number1").value);
    console.log(number1);
    var number2 = parseInt(document.getElementById("number2").value);
    console.log(number2);
    var sum = 0;
    if (number1 == number2) {
        console.log('numbers are same');
        sum = number1 + number2;
    }
    if (typeof (number1) === 'number' && !isNaN(number1) && typeof (number2) === 'number') {
        sum = number1 + number2;
        document.getElementById("result").innerText = "The sum if values is:" + sum;
    }
    else {

        document.getElementById("result").innerText = 'please provide valid numbers';
        console.log('please provide valid numbers');
    }



}

// console.log(add(2, 2));

var age1 = 10;
var age2 = 12;

console.log(age1 <= age2);

////String////

var lastName = "test";

var message = '   it\'s a rainy day';

console.log(message.length);

// var functionName = new String('test');
//  console.log(typeof(functionName));

console.log(lastName.charAt(2));
console.log(lastName.charCodeAt(2));
var fullname = lastName.concat(' test2');
console.log(fullname);

console.log(fullname.indexOf('test'));

console.log(message.slice(3, 8));

console.log(message.substr(3, 8));

console.log(message.trim());

///NUMBER///

var age = 20000;

var roi = 20.075;

console.log(Number.MAX_VALUE);

console.log(Number.MIN_VALUE);

console.log(Number.NEGATIVE_INFINITY);

console.log(Number.isFinite(age));

console.log(Number.isInteger(age)); //returns true
console.log(Number.isInteger(lastName)); //returns false

console.log(isNaN(age)); //returns false
console.log(isNaN(lastName)); //returns true

console.log(age.toExponential(3));

console.log(roi.toFixed(2));

console.log(roi.toPrecision(2));

var testValue = roi.toString();
console.log(testValue.valueOf());


///ARRAY///

var employeeList = [
    { id: 1, name: 'Amit', city: 'Pune' },
    { id: 2, name: 'Test', city: 'Mumbai' }
]

employeeList.push({ id: 3, name: 'test1', city: 'Chennai' });

// employeeList.pop(); 

console.log(employeeList.length);

employeeList.forEach((data) =>
    console.log(data)
)

var newEmpList = employeeList.filter((data) => {
    return data.id > 1
});

var departmemntList = [
    'marketing', 'IT', 'HR'
];

departmemntList.join(',');

// console.log(employeeList.shift());

console.log(employeeList.unshift({ id: 4, name: 'test3', city: 'pune' }));

employeeList.splice(3, 0, { id: 5, name: 'test3', city: 'pune' });

departmemntList.sort();

console.log(departmemntList.toString());

var newList = employeeList.concat(newEmpList);

console.log(newList);

var numberList = [5, 10, 15];

function mulitply(number) {
    return number * 2;
}

console.log(numberList.map(mulitply));

///Date///

var date = new Date('31-July-2018');

console.log(date);

console.log(date.getDate());

console.log(date.getTime());

///Math///

console.log(Math.SQRT2)

console.log(Math.sqrt(25));

console.log(Math.floor(Math.random() * 100 + 1)); //random number

console.log(Math.round(2.5));

console.log(Math.sin(10));

//if,else,else if///

var num1 = 7;
var num2 = 6;

if (num1 === num2) {
    console.log('numbers are equal');
}
else if (num1 > num2) {
    console.log('number1 is greater');
}
else if (num1 < num2) {
    console.log('number 2 is greater');
}
else {
    console.log('please check the numbers');
}

////Switch Case////

var condition = 'mul';
var total = 0;
switch (condition) {
    case 'Add': {
        var total = num1 + num2;
        console.log(num1 + num2);
        break;
    }
    case 'Sub': {
        console.log(num1 - num2);
        break;
    }
    case 'div': {
        console.log(num1 / num2);
        break;
    }
    default: {
        console.log('please provide correct condition');
        break;
    }
};

//For Loop///

var i = 0;

// for (i; i <= 10; i++) {
//     console.log(i);
// }


//While//

var flag = true;
var j = 0;
do {
    console.log('loop started')
    j++;

    if (j === 10) {
        flag = false;
    }

}
while (flag === true)


console.log(total);

//Exception handling///

try {
    var newTotal = 20 + 20;
    //   if(newTotal === 40) {
    //       throw('Total value is 40');
    //   }
}
catch (err) {
    console.log(err)
}
finally {
    console.log('This is executed');
}


