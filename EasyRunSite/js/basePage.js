(function () {
    createNamespace("EZ.BasePage");

    function BasePage() {
        this.headerTemplate = ko.observable("html/ezheader");
        this.headerData = "";

        this.id = "";
    };

    EZ.BasePage = BasePage;
})();