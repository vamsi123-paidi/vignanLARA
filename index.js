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
// });


function processSingleOrder(orderId) {
  return new Promise(resolve => {
    const processTime = 500 + Math.random()*100+2000;
    setTimeout(() => {
      resolve({
        orderId,
        status: 'processed',
        processTime: Math.round(processTime)
      });
    }, processTime);
  });
}

const orderBatch = ['order101','order102','order103','order104'];
// Process all orders in parallel
Promise.allSettled(orderBatch.map(processSingleOrder))
  .then(results => {
    console.log('All orders processed:');
    console.table(results);
    const totalTime = results.reduce((sum, order) => sum + order.value.processTime, 0);
    console.log(`Total processing time: ${totalTime}ms`);
  })
  .catch(error => {
    console.error('Batch processing failed:', error);
  });
