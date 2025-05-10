 // Funksioni për të marrë të dhënat nga API
 async function fetchProducts() {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const products = await response.json();
      displayProducts(products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  // Funksioni për të shfaqur produktet në DOM
  function displayProducts(products) {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
      // Krijojmë elementët HTML për çdo produkt
      const productCard = document.createElement('div');
      productCard.classList.add('bg-white', 'p-4', 'rounded-lg', 'shadow', 'hover:shadow-lg', 'transition');

      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.title}" class="w-full h-40 object-contain mb-4">
        <h2 class="text-lg font-semibold mb-2">${product.title}</h2>
        <p class="text-gray-500 mb-4">$${product.price.toFixed(2)}</p>
        <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add to Cart</button>
      `;

      // Shtojmë kartën e produktit në listën e produkteve
      productList.appendChild(productCard);
    });
  }

  // Thirrim funksionin për të marrë dhe shfaqur produktet
  fetchProducts();