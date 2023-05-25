 
 
  


 

//  var sm = "good";
//  {
//     var sm = "baad";
//     console.log(sm)
//  }

//  console.log(sm);


//  var s  
//  s= "hello";
//  console.log(s)


//  let a = null;
//  let b = 52342;
//  let c = BigInt("63535");
//  let d = "Stephin"
//  let f = true;
//  let g = Symbol("I am a nice symbol");
//  console.log(a,b,c,d,f,g)

//  console.log( typeof f);
//  console.log( typeof d);
//  console.log( typeof g);



//  var item = {
//      Stephin:"Devepoler",
//      Vishal:"Kamghar"
//  }

//  console.log(item["Stephin"])
// let a = 4;
// let b= "stepu";

// console.log(a+b)

// console.log(typeof a)
// console.log(typeof b)
// console.log(typeof a+b)



// const name = "stephin";

// const s = {
//     name :"stepu",
//     class:"Mca"
// }
            
// s['friend'] = "Shubham";
// s['name'] = "Shubham";

 

// console.log(s)


// let o = !true
// console.log(o)



// let p = 10 ;


// console.log(p++)
// console.log(++p)


// let comp1 = 5;
// let comp2 = 7;


// // console.log(comp1!==comp2);
// // console.log(comp1==comp2);


// console.log(comp1 >= comp2)

// switch (new Date().getDay()) {
//     case 0:
//         day = "Sunday";
//         console.log("Today is Sunday")
//         break; 
//     case 1:        
//         day = "Monday";
//         console.log("Today is Monday")
//         break;
//     case 2:
//         day = "Tuesday";
//         console.log("Today is Tuesday")
//         break;

//     case 3:
//         day = "Wednesday";
//         console.log("Today is Wednesday")
//         break;
//     case 4:
//         day = "Thursday";
//         console.log("Today is Thursday")
//         break;
//     case 5:
//         day = "Friday";
//         console.log("Today is Friday")
//         break;
//     case 6:
//         day = "Saturday";
//         console.log("Today is Saturday")
//         break;

// }


// let obj = {
//    stephin : 90,
//    adil:34,
//    vishal:36
// } 

// for(let a in obj)
// {
//    console.log("Marks of "+ ""+ a + " are " + " "+ obj[a])
// }
 
// for(let b of "Stephin"){
//    console.log(b)
// }



// function onePlusAverage(a,b){
//    console.log("Done");
//    return Math .round(a+b);
// }

//  console.log(onePlusAverage(3,4));


// const sum =(p,q) => {
//    return p+q
// }

// console.log(sum(6,4));


// const hello =() =>{
//    console.log("Vishal ki hui hai setting");
//    return "hi";
// } 

//   let v = hello();
//   console.log(v);


// let name1 = 'Stephin';
// let name2 = 'Rahul';

// let sentence = `${name1} is a good friend of ${name2}`
// console.log(sentence);
   

// let name = "Stephin";
// // console.log(name.slice(1,5));

// for(let a of name){
//   console.log(a)
// }


// const sentence = "The quick fox jump over the lazy dog"
// const word = "quick";
// console.log(`The Word "${word}" ${sentence.startsWith(word) ? 'is' :'is not'} in the sentence`)




// let text = "Hello world, welcome to the universe.";
// console.log(text.startsWith("Hello"));


// let str = "The amount is RS 1000";
// let amount = str.slice("The amount is RS ".length);
// console.log(amount);
// console.log(str.replace("amount","money"));


// const marks = [342,44,444,55,65,7,3,12]

// for (let i = 0; i < marks.length; i++) {
//   const element = marks[i];
//   console.log(element)
  
// }

// console.log("******************************")
// marks.forEach((element) => {
//   console.log(element * element)
// }) 



  // let a = Array.from("Stephin");
  // console.log(a);

//   let newNum = marks.slice(2);
// console.log(marks)
// console.log(newNum)
// marks.pop();
// marks.push(2);

// compare =(a,b) => {
//   return  b-a 
// }

// marks.sort(compare);
// console.log(marks);



// let c = marks.join("_");
// console.log(c)

// for (let i = 0; i < marks.length; i++) {
//   const element = marks[i];
//   console.log(element);
// }

// let b = marks.toString();
// console.log(b);

 
// console.log(typeof marks);           
// console.log(marks);           
// console.log(`The length of the marks is ${marks.length}`);           
// console.log(marks[0]);           
// console.log(marks[2]);           
// console.log(marks[3]);           



// let arr = [23,32,54,73]

//  let arr1 = arr.filter((value) =>{
 
//    return value > 50
//   })
//   console.log(arr1);
  
  
//  let a = arr.map((value,index,array) =>{
//    console.log(value,index,array)
   
//    return value + 1 ;
//   })
// console.log(a);
 



// let arr = [23,32,54,73]
// let a = arr.forEach((element) => {
//   return element;
// })

// console.log(a);


// let a = document.getElementsByTagName('div')[0]
// a.innerHTML = a.innerHTML + '<h1>Hello Pooja!</h1>';


// let div = document.createElement('div');
// div.innerHTML = '<h1>Hello Stephin</h1>';
// a.appendChild(div);


//  let a = setTimeout(() => {
//   alert("I am waiting");
// }, 5000);
// console.log(a);

// let a = prompt("What would you like to choose");

// btn.addEventListener('click',function(e){
// alert("Hello Stephin");
// })

// btn.addEventListener('click',function(e){
//   alert("Hello Pooja");
//   })


// const fetchContent = async(url) = {
//   con = await fetch(url);
//   let a = await  con.json()
//   return a;
// }
// setInterval(() => {
//   let url = "https://jsonplaceholder.typicode.com/todos/1"
//   console.log( await, fetchContent(url))
// }, 4000);




// console.log("I am going to be the best");
// function loadScript(src , callback){
//   var script = document.createElement("script");
//   script.src = src;
//   script.onload =  () => {
//     console.log("I am loaded") 
//   }

//   script.onerror = function (){
//     console.log("Error loading script with scr :" + src)

//     callback(new Error ("Src got some Error"));
//   }


//   document.body.appendChild(script);
// }

// function Hello(error,src){
//   if (error) {
//     console.log(error)
//     return
//   }
//   alert("hello" + src );
// }

// loadScript("https://cdn.jsdeli.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js", Hello )


// let p = new Promise((resolve,reject)=>{
//   console.log("Promise is pending");
// setTimeout(() => { 
//   console.log("I am A promise")
// }, 5000);

// //resolve(true)
// reject( Error("I am a Error"))
// })

// console.log(p); 


// try {
//    console.log(stephin) 
//     throw new ReferenceError("Stephin is not defined")
//  } 
//  catch (error) {
//   console.log(error.name)
//   console.log(error.message)
//   console.log(error.stack)
//  }




// const loadScript = async(src)=>{

//   return new Promise((resolve,reject)=>{
//     let script = document.createElement("script")
//     script.src = src
//     script.onload =()=>{
//         resolve(src +" Success")
//     }

//     document.head.append(script)
//   })
// }

// let a =  loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js");
// a.then((value)=>{
//   console.log(value)
// })

// const main = async ()=>{
//   console.log(new Date())
//   let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js")
//   console.log(a);
//   console.log(new Date())

// }

// main();

//Try Catch
// let p = ()=>{

//   return new Promise((resolve,reject) =>{
//     setTimeout(() => {
//       reject(new Error("Please this is not accepaable"))
//     }, 3000);
//   })
// }

// let a = async () => {
//   try {
//     let c = await p();
//     console.log(c)
    
//   } catch (error) {
//     console.error("This will be working");
//   }
// }

// a();


// let p1 = async ()=>{
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       resolve(10)
//     }, 1000);
//   })
// }

// let p2 = async ()=>{
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       resolve(20)
//     }, 2000);
//   })
// }

// let p3 = async ()=>{
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       resolve(30)
//     }, 3000);
//   })
// }


// const run = async () =>{


//   // console.time("run");
//   // let a1 = await p1();
//   // let a2 = await p2();
//   // let a3 = await p3();
//   // console.log(a1,a2,a3);
  
//    console.time("run");
//    let a1 =  p1();
//    let a2 =  p2();
//    let a3 =  p3();

//    let a1a2a3 = await Promise.all([a1,a2,a3])
//    console.log(a1a2a3)
//    console.timeEnd("run");

// }
// run();








// let p1 = async ()=>{
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       resolve("System Started working on your phone")
//     }, 1000);
//   })
// }

// let p2 = async ()=>{
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       resolve("Initializing Hack Program")
//     }, 3000);
//   })
// }

// let p3 = async ()=>{
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       resolve("Hacking Stephin's Phone")
//     }, 6000);
//   })
// }

// let p4 = async ()=>{
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       resolve("UserName found Lucifer_Stephin_James")
//     }, 8000);
//   })
// }

// let p5 = async ()=>{
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       resolve("Connecting to facebook")
//     }, 10000);
//   })
// }

// const run = async () =>{
//   let a1 = await  p1();
//   let a2 = await p2();
//   let a3 = await p3();
//   let a4 = await p4();
//   let a5 = await  p5();

 
// console.log([a1,a2,a3,a4,a5])
 
// }

// run();



//Fetch Api
// let p = fetch("https://localhost:7274/api/CountryDtoes");
// p.then((value)=>{
//   console.log(value.status);
//   console.log(value.ok);

//   return value.json()
// }).then((value2)=>{
//   return console.log(value2);
// })


//Post Method

// let createTodo = async async =>{
// let options = {
//   method : "POST",
//   headers:{
//     "Content-type":"application/json"
//   }, 
//   body: JSON.stringify({
//     title: 'Stephin',
//     body: 'bhai',      
//     userId: 1,
//   })
// }
  
//  let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
//     let responce = await p.json();
//     return responce;
// }
 
// const mainFunc = async () => {
//   let todo = await createTodo();
//   console.log(todo);
// }

// mainFunc();


class RailWayForm{

constructor(){
  console.log("Constructer called")
}
  subimit(){
    alert( this.name +  "Form is submitted ");
  }

  cancel(){
    alert( this.name + "This form is cancelled ")
  }

  fill(name1){
    this.name = name1;
  }

}

var stephin  = new RailWayForm();
var vishal  = new RailWayForm();

stephin.fill('Stepu')
stephin.subimit();
stephin.cancel();
vishal.cancel();