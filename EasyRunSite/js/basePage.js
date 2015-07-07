(function () {
    createNamespace("EZ").BasePage = BasePage;

    function BasePage() {
        this.headerTemplate = ko.observable("html/ezheader");
        this.headerData = "";

        this.id = "";
    };

})();