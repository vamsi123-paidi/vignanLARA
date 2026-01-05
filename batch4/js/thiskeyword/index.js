
// "use strict"
// console.log(this)

// function greet(){
//     console.log(this)
// }
// greet()

// let arrow =()=>{
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
// x= 10
// console.log(x)

// function add(a,a,b){
//     const out = a+a+b
//     console.log(out)
// }
// add(1,2,3)

function greet(mess,gree){
    console.log(`${mess} ${this.name} ${gree}`)
}
let obj = {
    name:"adam"
}
// greet.call(obj,"hello","how are U?")
// greet.apply(obj,["hello","how are U?"])
const bindFun = greet.bind(obj)
bindFun("hello","how are U?")