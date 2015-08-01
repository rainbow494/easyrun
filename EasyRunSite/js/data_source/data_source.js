(function () {
    /* commonData*/
    ez = window.createNamespace("ez");
    ez.data = window.createNamespace("ez.data");
    ez.data.defaultOption = {
        "urlBase": "#/home",
        "imageUrlBase": "./resource/image/category"
    }

    /* products */
    var productData = [{
        "productId": "001001",
        "categoryId": 1,
        "categoryName": "decals",
        "imageUrl": "decals/sku_1",
        "name": "Growth chart-The Little Red Riding-hood",
        "length": 300,
        "width": 200,
        "unit": "cm",
        "effectName": "3D",
        "meteraiaName": "paper",
        "applicationList": ["Bedroom", "Toliet"],
        "popular": true
    }, {
        "productId": "002002",
        "categoryId": 2,
        "categoryName": "glass films",
        "imageUrl": "glass_films/sku_2",
        "name": "name displayed when hover",
        "length": 300,
        "width": 200,
        "unit": "cm",
        "effectName": "3D",
        "meteraiaName": "paper",
        "applicationList": ["Bedroom", "Toliet"],
        "popular": true
    }, {
        "productId": "003003",
        "categoryId": 3,
        "categoryName": "wall hangings",
        "imageUrl": "wall_hangings/sku_3",
        "name": "3D Wall Sticker - Black Dinosaur",
        "length": 300,
        "width": 200,
        "unit": "cm",
        "effectName": "3D",
        "meteraiaName": "paper",
        "applicationList": ["Bedroom", "Toliet"],
        "popular": true
    }, {
        "productId": "004007",
        "categoryId": 4,
        "categoryName": "wall murals",
        "imageUrl": "wall_murals/sku_7",
        "name": "8pcs Big Combo Lunar Eclipse Glowing Moon",
        "length": 300,
        "width": 200,
        "unit": "cm",
        "effectName": "3D",
        "meteraiaName": "paper",
        "applicationList": ["Bedroom", "Toliet"],
        "popular": false
    }, {
        "productId": "004006",
        "categoryId": 4,
        "categoryName": "wall murals",
        "imageUrl": "wall_murals/sku_6",
        "name": "Combo Glowing Moons with 10 Stars as Bonus",
        "length": 300,
        "width": 200,
        "unit": "cm",
        "effectName": "3D",
        "meteraiaName": "paper",
        "applicationList": ["Bedroom", "Toliet"],
        "popular": false
    }, {
        "productId": "004008",
        "categoryId": 4,
        "categoryName": "wall murals",
        "imageUrl": "wall_murals/sku_8",
        "name": "name displayed when hover",
        "length": 300,
        "width": 200,
        "unit": "cm",
        "effectName": "3D",
        "meteraiaName": "paper",
        "applicationList": ["Bedroom", "Toliet"],
        "popular": false
    }
	]
    ez.data.products = productData;

    /* popularCategories */
    var popularCategoriesData = [productData[0], productData[1], productData[2]]
    ez.data.popularCategories = popularCategoriesData;

    ez.data.popularCategories.defaultOption = {
        "urlBase": "#/category"
    }
    ez.data.popularCategories.option = {};
    $.extend(true, ez.data.popularCategories.option, ez.data.defaultOption, ez.data.popularCategories.defaultOption);

    ez.data.popularCategories.getUrl = function (data) {
        //return ez.data.popularCategories.option.urlBase + "/" + data.categoryId;
        return ez.data.popularCategories.option.urlBase;
    }
    ez.data.popularCategories.getImageUrl = function (data) {
        return ez.data.popularCategories.option.imageUrlBase + "/" + data.imageUrl + "/" + "1.jpg";
    }
})()
/* Test Data End */
