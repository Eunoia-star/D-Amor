"use strict";
(function() {
    window.addEventListener("load", init);
    
    function init() {
        const filterButtons = document.querySelectorAll(".filter-btn");
        const products = document.querySelectorAll(".product-card-item");
        
        filterButtons.forEach(btn => {
            btn.addEventListener("click", () => {
                const activeBtn = document.querySelector(".filter-btn.active");
                if (activeBtn) {
                    activeBtn.classList.remove("active");
                }
                
                btn.classList.add("active");
                
                const category = btn.dataset.filter;
                
                products.forEach(product => {
                    const productCats = product.dataset.category;
                    
                    if (category === "all" || productCats.includes(category)) {
                        product.style.display = "block";
                    } else {
                        product.style.display = "none";
                    }
                });
            });
        });
    }
})();