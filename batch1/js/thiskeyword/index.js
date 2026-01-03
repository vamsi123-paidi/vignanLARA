// "use strict"

// console.log(this)

// function add(){
//     console.log(this)
// }
// add()

// const obj ={
//     name : "adam",
//     greet:function(){
//         console.log(this.name)
//     }
// }
// obj.greet()

// const arrow = ()=>{
//     console.log(this)
// }
// arrow()
// "use strict"
// a=10
// console.log(a)

// function add(a,a,b){
//  const output = a+a+b
//  console.log(output)
// }
// add(1,2,3)

// function name(message,value){
//     console.log(`${this.name} ${message} ${value}`)
// } 
// let person = {
//     name:"bob"
// }
// name.call(person,hello world","value")

// function name(message,value){
//     console.log(`${this.name} ${message} ${value}`)
// } 
// let person = {
//     name:"bob"
// }
// name.apply(person,["hello world","value"])
function name(message,value){
    console.log(`${this.name} ${message} ${value}`)
} 
let person = {
    name:"bob"
}
const bindFun =name.bind(person)
bindFun("hello world","value")