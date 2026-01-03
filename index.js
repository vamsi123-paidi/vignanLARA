// function validateOrder(order) {
//   return new Promise((resolve, reject) => {
//     if (!order.customerId) {
//       reject(new Error('Customer ID is required'));
//     } else if (!order.items || order.items.length === 0) {
//       reject(new Error('Order must contain items'));
//     } else {
//       console.log('✅ Order validated');
//       resolve(order);
//     }
//   });
// }

// // 2. Check inventory availability
// function checkInventory(order) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log('📦 Inventory checked');
//       order.inventoryVerified = true;
//       resolve(order);
//     }, 800);
//   });
// }

// // 3. Process payment
// function processPayment(order) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const paymentSuccess = Math.random() > 0.2; // 80% success rate
//       if (paymentSuccess) {
//         console.log('💳 Payment processed');
//         order.paymentStatus = 'completed';
//         resolve(order);
//       } else {
//         reject(new Error('Payment declined'));
//       }
//     }, 1200);
//   });
// }

// // Execute the pipeline
// validateOrder({
//   customerId: 'cust789',
//   items: [{ id: 'prod456', qty: 1 }]
// })
// .then(checkInventory)
// .then(processPayment)
// .then(order => {
//   console.log('🎉 Order completed:', order);
// })
// .catch(err => {
//   console.error('❌ Order failed:', err.message);
// // });


// function processSingleOrder(orderId) {
//   return new Promise(resolve => {
//     const processTime = 500 + Math.random()*100+2000;
//     setTimeout(() => {
//       resolve({
//         orderId,
//         status: 'processed',
//         processTime: Math.round(processTime)
//       });
//     }, processTime);
//   });
// }

// const orderBatch = ['order101','order102','order103','order104'];
// // Process all orders in parallel
// Promise.allSettled(orderBatch.map(processSingleOrder))
//   .then(results => {
//     console.log('All orders processed:');
//     console.table(results);
//     const totalTime = results.reduce((sum, order) => sum + order.value.processTime, 0);
//     console.log(`Total processing time: ${totalTime}ms`);
//   })
//   .catch(error => {
//     console.error('Batch processing failed:', error);
//   });


// const obj = {"name":"adam","age":25}
// const output = JSON.stringify(obj)
// console.log(output)




// const obj = {
//     name:"adam",
//     age:1000,
//     greet : ()=>{
//         console.log("hello world!")
//     }
// }

// obj.greet()
// console.log(obj.age)






// const obj = {"name":"adam","age":1000}
// const res = JSON.stringify(obj)
// console.log(res)
// console.log(res.name)


// const obj = {
//     name:"adam",
//     age:1000,
//     greet : ()=>{
//         console.log("hello world!")
//     }
// }
// obj.greet()



// const obj = {"name":"adam","age":100000}

// const output = JSON.stringify(obj)

// console.log(output.name)

// const obj = {
//     "name" : "adam",
//     "age":1000000,
//     greet : ()=>{
//         console.log("hello world !")
//     }
// }


// obj.greet()


// const obj = {"name":"adam","age":10000000}
// const res = JSON.stringify(obj)

// console.log(res)
// console.log(res.name)

// let obj = {
//     name:"person",
//     greet:function(){
//         console.log(this.name)
//     }
// }
// obj.greet()

// const a = [1,2,3]
// const b =[4,5,6,7]
// const c = [...a,...b]
// console.log(c)

// function add(a,b,c){
//     out = a+b+c
//     console.log(out)
// }
// const arr = [1,2,3]
// add(...arr)

// const a = [1,2,3,4]


// const [adam,second,...rest] = a 
// console.log(adam)
// console.log(second)
// console.log(rest)


const person = {
    name:"adam",
    age:25
}

const {name,...other} = person
console.log(name)
console.log(other)

function add(...numbers){
    console.log(numbers)
    const out = numbers.reduce((acc,curr)=>acc+curr,0)
    console.log(out)
}

add(1,2,3)






















