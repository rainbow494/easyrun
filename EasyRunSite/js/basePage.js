(function () {
    createNamespace("EZ").BasePage = BasePage;

    function BasePage() {
        this.headerTemplate = ko.observable("header");
        //this.contentTemplate = ko.observable("home_continer");  //Replace by default value.
        this.footerTemplate = ko.observable("footer");

        this.headerData = "";
        this.id = "";
    };
})();