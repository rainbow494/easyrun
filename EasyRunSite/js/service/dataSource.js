(function () {
    /* commonData*/
    ez = window.createNamespace("ez");
    ez.data = window.createNamespace("ez.data");
    ez.data.defaultOption = {
        "urlBase": "#/home",
        "imageUrlBase": "./resource/image/category"
    }

    /* goods */
    var goodData = [{
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
        "hot": true
    }, {
        "productId": "002002",
        "categoryId": 2,
        "categoryName": "glass_films",
        "imageUrl": "glass_films/sku_2",
        "name": "name displayed when hover",
        "length": 300,
        "width": 200,
        "unit": "cm",
        "effectName": "3D",
        "meteraiaName": "paper",
        "applicationList": ["Bedroom", "Toliet"],
        "hot": true
    }, {
        "productId": "003003",
        "categoryId": 3,
        "categoryName": "wall_hangings",
        "imageUrl": "wall_hangings/sku_3",
        "name": "3D Wall Sticker - Black Dinosaur",
        "length": 300,
        "width": 200,
        "unit": "cm",
        "effectName": "3D",
        "meteraiaName": "paper",
        "applicationList": ["Bedroom", "Toliet"],
        "hot": true
    }, {
        "productId": "004007",
        "categoryId": 4,
        "categoryName": "wall_murals",
        "imageUrl": "wall_murals/sku_7",
        "name": "8pcs Big Combo Lunar Eclipse Glowing Moon",
        "length": 300,
        "width": 200,
        "unit": "cm",
        "effectName": "3D",
        "meteraiaName": "paper",
        "applicationList": ["Bedroom", "Toliet"],
        "hot": false
    }, {
        "productId": "004006",
        "categoryId": 4,
        "categoryName": "wall_murals",
        "imageUrl": "wall_murals/sku_6",
        "name": "Combo Glowing Moons with 10 Stars as Bonus",
        "length": 300,
        "width": 200,
        "unit": "cm",
        "effectName": "3D",
        "meteraiaName": "paper",
        "applicationList": ["Bedroom", "Toliet"],
        "hot": false
    }, {
        "productId": "004008",
        "categoryId": 4,
        "categoryName": "wall_murals",
        "imageUrl": "wall_murals/sku_8",
        "name": "name displayed when hover",
        "length": 300,
        "width": 200,
        "unit": "cm",
        "effectName": "3D",
        "meteraiaName": "paper",
        "applicationList": ["Bedroom", "Toliet"],
        "hot": false
    }
	]
    ez.data.goods = goodData;

    /* hotGoods */
    var hotGoodsData = [goodData[0], goodData[1], goodData[2]]
    ez.data.hotGoods = hotGoodsData;

    ez.data.hotGoods.defaultOption = {
        "urlBase": "#/product"
    }
    ez.data.hotGoods.option = {};
    $.extend(true, ez.data.hotGoods.option, ez.data.defaultOption, ez.data.hotGoods.defaultOption);

    ez.data.hotGoods.getUrl = function (data) {
        return ez.data.hotGoods.option.urlBase + "/" + data.productId;
    }
    ez.data.hotGoods.getImageUrl = function (data) {
        return ez.data.hotGoods.option.imageUrlBase + "/" + data.imageUrl + "/" + "1.jpg";
    }

    /* hotCategories */
    var hotCategoriesData = [goodData[3], goodData[4], goodData[5]]
    ez.data.hotCategories = hotCategoriesData;

    ez.data.hotCategories.defaultOption = {
        "urlBase": "#/category"
    }
    ez.data.hotCategories.option = {};
    $.extend(true, ez.data.hotCategories.option, ez.data.defaultOption, ez.data.hotCategories.defaultOption);

    ez.data.hotCategories.getUrl = function (data) {
        //return ez.data.hotCategories.option.urlBase + "/" + data.categoryId;
        return ez.data.hotCategories.option.urlBase;
    }
    ez.data.hotCategories.getImageUrl = function (data) {
        return ez.data.hotCategories.option.imageUrlBase + "/" + data.imageUrl + "/" + "1.jpg";
    }
})()
/* Test Data End */
