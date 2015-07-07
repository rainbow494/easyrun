(function () {
    createNamespace("EZ").HomePage = HomePage;

    function HomePage() {
        this.contentTemplate = ko.observable("home_continer");
    };

    EZ.HomePage.prototype = new EZ.BasePage();

    EZ.HomePage.prototype.constructor = HomePage;

})();