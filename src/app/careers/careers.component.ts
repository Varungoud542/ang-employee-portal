import { Component } from '@angular/core';
@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent {

  name = "varun";
  person = "SUCHARITHA";
  toDate = new Date();
  evenOrOddNumbers: any;
  vowelAlphabets = ['a', 'e', 'i', 'o', 'u'];
  alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  numbers = [33, 10, 5, 77, 100, 111];
  number = 1234;
  num: any;
  reversNumber: any;
  arr: any[] = [
    { name: 'Srini', age: 28 },
    { name: 'varun', age: 20 },
    { name: 'srikanth', age: 27 },
    { name: "chikky", age: 26 }
  ];
  content = "hellow world"
  ngOnInit() {
    console.log(this.toDate)
    this.getNumber("10");
    this.getAlphabets("b");
    this.checkLeapYear(2002);
    this.positiveNumAndNegitiveNum(100);
    this.getAlphabet();
    this.checkHowManyCharecterInIntigier(10000);
    this.reverseNumber();
    this.getPowerOfNumber(3, 3);
    this.checkPalindromorNot(2006);
    this.checkePrimeOrNot(4);
    this.studentsArry();
    this.enteredNumber(2);
    this.addIntegers(2, 4);
    this.multyplyGivenNumber(2.1, 3.1);
    this.findAlphabets('a', 'z');
    this.findAgeGroup(0);
    this.swapNumb();
    this.tabel(3);
    this.getLagerestNumbers();

  }
  getNumber(num: any) {
    num = Number(num)
    if (num % 2 == 0) {
      console.log("its even number")
    }
    else {
      console.log("its and odd number")
    }
  }
  getAlphabets(x: any) {
    let index = this.vowelAlphabets.indexOf(x)

    console.log(index)
    // for (let alphabet of this.alphabets) {
    //   if (alphabet === x) {
    //     console.log("it is and vowel")
    //     return
    //   }
    // }
    // console.log("it is constant");
    // if(x == "a" || x=="e" || x=="i" || x=="o" || x=="u") {
    // }else {
    // }
    if (index >= 0) {
      console.log("its vowel")
    }
    else {
      console.log("its constent")
    }
  }
  checkLeapYear(x: any) {
    if ((x % 400 == 0 && x % 100 == 0) || ((x % 4 == 0 && x % 100 !== 0))) {
      console.log("its an leap year")
    }
    else {
      console.log("its not an leap year")
    }
  }
  positiveNumAndNegitiveNum(num: any) {
    num = Number(num)
    if (num >= 0) {
      console.log("its an positive number")
    }
    else {
      console.log("its an negitive number")
    }
  }
  getAlphabet() {
    for (let alphabet of this.alphabets) {
      console.log(alphabet)
    }
  }
  checkHowManyCharecterInIntigier(num: any) {
    num = num.toString()
    let leth = num.length
    console.log(leth)
  }


  reverseNumber() {
    // let numb =Number(String(this.number).split('').reverse().join(''))
    // console.log(numb)
    let reversString = ""
    let numb = this.number.toString().split('');
    let lenth = numb.length - 1
    for (let i = lenth; i >= 0; i--) {
      reversString = reversString + numb[i];
      //
      //
    }
    console.log(Number(reversString))
  }
  getPowerOfNumber(x: any, y: any) {
    for (let i = 0; i <= 10; i++) {
      console.log(i)
    }
    // let value = Math.pow(x,y)
    // console.log(value)
  }
  checkPalindromorNot(x: any) {
    //  let y =Number( x.toString().split('').reverse().join(''));
    // if(x==y){
    //  console.log('its an palindrom')
    // }
    // else{
    //   console.log("its not an palindrom")
    // }
    let palindrom = ""
    let y = x.toString()
    for (let i = y.length - 1; i >= 0; i--) {
      palindrom = palindrom + y[i];
    }
    if (x == palindrom) {
      console.log("its an panlondrom")
    }
    else {
      console.log("its not an palindrom")
    }
  }
  checkePrimeOrNot(x: any) {
    let number = x
    if (number == 1) {
      console.log("1 is nither prime number or composit number")
    }
    else if (number > 1) {
      for (let i = 2; i < number; i++) {
        if (number % i == 0) {
          console.log("its an prime number")
          return;
        }

        console.log("its an composit number")
      }
    }
  }
  studentsArry() {
    // for(let obj of this.arr){
    //    if(obj.age % 2 ==0){
    //     obj.Odd = true
    //    }
    //    else{
    //      obj.Odd = false;
    //    }
    // }
    // console.log(this.arr)
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i].age % 2 == 0) {
        this.arr[i].odd = "true"
      }
      else {
        this.arr[i].odd = "false"
      }
      console.log(this.arr[i].name, this.arr[i].age, this.arr[i].odd)
    }
    console.log(this.content)
  }
  enteredNumber(x: any) {
    console.log(x)
  }
  addIntegers(x: number, y: number) {
    let addedNumbers = x + y;
    console.log(addedNumbers)
  }
  multyplyGivenNumber(x: number, y: number) {
    let multyplyOf = x * y;
    console.log(multyplyOf)
  }
  findAlphabets(x: any, y: any) {
    let startValue = x.charCodeAt();
    let endValue = y.charCodeAt();
    for (let i = startValue; i <= endValue; i++) {
      let alphabetsCode = i
      let allAlphabet = String.fromCharCode(alphabetsCode)
      console.log(allAlphabet)
    }
  }
  findAgeGroup(x: any) {
    let ageGroup = x;
    if (x <= 0) {
      console.log('in vaild age')
      return;
    }
    if (x <= 18) {
      console.log('its an teen age ')
    }
    else {
      console.log('adults')
    }
  }
  swapNumb() {
    let a = 10;
    let b = 5;
    let c = a;
    a = b;
    b = c;
    console.log(a, b)
  }
  tabel(x: number) {
    for (let i = 1; i <= 10; i++) {
      let number = x * i;
      console.log(x, '*', i, '=', number)
    }
  }
  getLagerestNumbers() {
    // this.num = this.numbers.sort((a, b) => a - b);
    // console.log(this.num)
    // console.log(this.num[this.num.length - 1])

    let sorted = false;
    while (!sorted) {
      sorted = true;
      for (let i = 0; i < this.numbers.length; i++) {
        if (this.numbers[i] >= this.numbers[i + 1]) {
          sorted = false;
          let smallNumb = this.numbers[i + 1];
          this.numbers[i + 1] = this.numbers[i];
          this.numbers[i] = smallNumb
        }
      }
    }

    console.log(this.numbers)
  }

}