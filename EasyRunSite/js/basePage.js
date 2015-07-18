(function () {
    createNamespace("EZ").BasePage = BasePage;

    var defalutOption = {
        headerTemplate: 'header',
        contentTemplate: 'content/home',
        hotCommodityTemplate: 'control/hot_categroy',
        footerTemplate: 'footer'
    }

    function BasePage(option) {
        this.conent_template_path = 'content/';

        option.contentTemplate = this.getContentTemplateFullPath(option.contentTemplate);

        option = $.merge(defalutOption, option);

        this.headerTemplate = ko.observable(option.headerTemplate);
        this.contentTemplate = ko.observable(option.contentTemplate);
        this.hotCommodityTemplate = ko.observable(option.hotCommodityTemplate);
        this.footerTemplate = ko.observable(option.footerTemplate);
        this.headerData = "";
        this.id = "";
    };

    BasePage.prototype.resetContentTemplate = function (contentTemplateName) {
        this.contentTemplate(this.getContentTemplateFullPath(contentTemplateName))
    }

    BasePage.prototype.getContentTemplateFullPath = function(contentTemplateName)
    { 
        return this.conent_template_path + contentTemplateName;
    }
})();