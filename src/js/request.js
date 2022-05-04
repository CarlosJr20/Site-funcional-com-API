 
// async function  showReviews(reviewsContainer, asin) {
//     const productsContainer = document.getElementById('products');
//     // productsContainer.innerHTML = 'Loading...';
//     const { reviews } = await getReviews(asin);
//     // const { products } = await prodProducts(document.getElementById('searchTerm').value);
//     reviewsContainer.innerHTML =  ` <div class="album py-5 bg-light">
//     <div class="container">

//       <div class="row">
//     <div class="col-md-4">
//     <div class="card mb-4 shadow-sm">

//     ${reviews.map(review => `${review.asin} <img class="card-img-top" href="${review.asin_images}" alt="Card image cap">
//       <div class="card-body">
       
//         <p class="card-text">${review.asin_name}</p>
//         <div class="d-flex justify-content-between align-items-center">
//           <div class="btn-group">
//             <p class="card-title">13</p>
            
//           </div>
//           <small class="text-muted">9 mins</small>
//         </div>
//       </div>
//     </div>
//   </div>
//   </div>
//     </div>
//   </div> `)
//     }.join('')
// `;
// }
// const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// async function main() {
//   let rsp = await m3o.image.convert({
//     name: "cat.jpeg",
//     outputURL: true,
//     url: "somewebsite.com/cat.png",
//   });
//   console.log(url);
// }

// main();



