(function () {
    createNamespace("EZ").BasePage = BasePage;

    var defalutOption = {
        headerTemplate: 'header',
        contentTemplate: 'home_continer',
        hotCommodityTemplate: 'hot_commodity',
        footerTemplate: 'footer'
    }

    function BasePage(option) {
        option = $.merge(defalutOption, option);

        this.headerTemplate = ko.observable(option.headerTemplate);
        this.contentTemplate = ko.observable(option.contentTemplate);
        this.hotCommodityTemplate = ko.observable(option.hotCommodityTemplate);
        this.footerTemplate = ko.observable(option.footerTemplate);
        this.headerData = "";
        this.id = "";
    };
})();