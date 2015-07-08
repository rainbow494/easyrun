(function () {
    createNamespace("EZ").HomePage = HomePage;

    function HomePage() {
        this.contentTemplate = ko.observable("home_continer");
    };

    EZ.HomePage.prototype = new EZ.BasePage();

    EZ.HomePage.prototype.constructor = HomePage;

})();


// 继承参考
//(function()
//{
//	createNamespace("TF.Viewe").TripUpdate = TripUpdate;

//	function TripUpdate()
//	{
//		TF.Viewe.BaseViewe.call(this);
//	}

//	TripViewe.prototype = Object.create(TF.Viewe.BaseViewe.prototype);
//	TripViewe.prototype.constructor = TripViewe;

//})();