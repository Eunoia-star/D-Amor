const productGrid = document.getElementById("productGrid");

async function getProducts() {

  try {

    const response = await fetch("http://localhost:3000/produk");

    const products = await response.json();

    let cards = "";

    products.forEach((product) => {

      cards += `

      <div class="col-md-4 col-sm-6 col-12">

        <div class="product-card">

          <img
            src="https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?q=80&w=1000"
            class="product-img"
            alt="${product.nama_produk}"
          />

          <div class="product-info">

            <h5>${product.nama_produk}</h5>

            <p class="prod-price">
              Rp ${product.harga}
            </p>

            <div class="prod-tags">

              <span class="tag">
                Stock: ${product.stok}
              </span>

            </div>

            <div class="mt-3 text-center">

              <button class="btn btn-outline-light">
                Beli Sekarang
              </button>

            </div>

          </div>

        </div>

      </div>

      `;

    });

    productGrid.innerHTML = cards;

  } catch (error) {

    console.log(error);

  }

}

getProducts();