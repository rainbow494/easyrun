(function () {
    createNamespace("EZ").ContactPage = ContactPage;

    function ContactPage() {
        this.contentTemplate = ko.observable("contact_continer");
    };

    EZ.ContactPage.prototype = new EZ.BasePage();

    EZ.ContactPage.prototype.constructor = ContactPage;

})();