ez.helper = window.createNamespace("ez.helper");
ez.helper.getUrl = function (urlBase) {
    return function(data){
        return urlBase + "/" + data.productId;
    }
}

ez.helper.getCategoryUrl = function (urlBase) {
    return function(data){
        return urlBase + "/" + data.categoryName;
    }
}

ez.helper.getImageUrl = function (imageUrlBase) {
    return function(data){
        return imageUrlBase + "/" + data.categoryName + "/" + data.productId + "/" + "1.jpg";
    }
}

ez.helper.getThumbnailUrl = function (imageUrlBase) {
    return function(data){
        return imageUrlBase + "/" + data.categoryName + "/" + data.productId + "/" + "1_thumb.jpg";
    }
}
