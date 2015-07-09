(function () {
    createNamespace("EZ").BasePage = BasePage;

    function BasePage(startPageName) {
        this.headerTemplate = ko.observable("header");
        this.contentTemplate = ko.observable(startPageName);  //Replace by default value.
        this.footerTemplate = ko.observable("footer");

        this.headerData = "";
        this.id = "";
    };
})();