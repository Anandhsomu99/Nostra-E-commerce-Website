function opennavbar(){
    document.getElementById("sidenav").style.right="0";
}

function closenavbar(){
    document.getElementById("sidenav").style.right="-30%"
}

var products = document.querySelectorAll(".product");

var filters = document.querySelectorAll(".filter");

var search = document.getElementById("search");


filters.forEach(function(filter) {

    filter.addEventListener("change", function() {

        filterProducts();

    });

});


search.addEventListener("input", function() {

    filterProducts();

});


function filterProducts() {

    var searchValue = search.value.toLowerCase();


    // Get selected occasion filters

    var selectedOccasions = [];

    document.querySelectorAll(
        '.filter[data-type="occasion"]:checked'
    ).forEach(function(filter) {

        selectedOccasions.push(filter.value);

    });


    // Get selected color filters

    var selectedColors = [];

    document.querySelectorAll(
        '.filter[data-type="color"]:checked'
    ).forEach(function(filter) {

        selectedColors.push(filter.value);

    });


    // Check every product

    products.forEach(function(product) {

        var name = product.dataset.name.toLowerCase();

        var occasions = product.dataset.occasion.toLowerCase();

        var color = product.dataset.color.toLowerCase();


        // Search condition

        var searchMatch = name.includes(searchValue);


        // Occasion condition

        var occasionMatch =
            selectedOccasions.length === 0 ||
            selectedOccasions.some(function(occasion) {

                return occasions.includes(occasion);

            });


        // Color condition

        var colorMatch =
            selectedColors.length === 0 ||
            selectedColors.includes(color);


        // Final condition

        if (
            searchMatch &&
            occasionMatch &&
            colorMatch
        ) {

            product.classList.remove("hide");

        } else {

            product.classList.add("hide");

        }

    });

}