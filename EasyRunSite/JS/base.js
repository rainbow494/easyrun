
(function () {
    createNamespace("ez").Base = Base;
    function Base() {
        this.buyer = { name: 'Franklin', credits: 250 };
        this.seller = { name: 'Mario', credits: 5800 };

        this.headerTemplate = ko.observable("html/ezheader");
        this.headerData = "";
    }

    ko.applyBindings(new Base());
})();