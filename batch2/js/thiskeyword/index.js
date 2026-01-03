// "use strict"
// console.log(this)

// function greet(){
//     console.log(this)
// }
// greet()

// const arrow = ()=>{
//     console.log(this)
// }
// arrow()

// const obj = {
//     name:"adam",
//     greet:function(){
//         console.log(this.name)
//     }
// }

// obj.greet()


// "use strict"
// x=10
// console.log(x)

// function add(a,a,b){
//     const output=a+a+b
//     console.log(output)
// }
// add()


// function greet(greet,message){
//     console.log(`${greet} ${this.name} ${message}`)
// }
// let person = {
//     name:"adam"
// }
// greet.call(person,"hello","how are U?")

// function greet(greet,message){
//     console.log(`${greet} ${this.name} ${message}`)
// }
// let person = {
//     name:"adam"
// }
// greet.apply(person,["hello","how are U?"])


function greet(greet,message){
    console.log(`${greet} ${this.name} ${message}`)
}
let person = {
    name:"adam"
}
const bindFun=greet.bind(person)
bindFun("hello","how are U?")