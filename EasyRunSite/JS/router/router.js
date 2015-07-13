// Use Sammy.js to carete SPA
//(function()
//{
//	createNamespace("TF").RouteManager = RouteManager;

//	function RouteManager()
//	{
//		this._skipRoute = false;
//		this.skipNextRoute = function(value)
//		{
//			if (value == false)
//			{
//				this._skipRoute = false;
//			}
//			else
//			{
//				this._skipRoute = true;
//			}
//		}

//		//this.ifSkipRoute = function()
//		//{
//		//	return this._skipRoute;
//		//}

//		var routeManager = this;

//		$.sammy(function()
//		{
//			var lastRun = null;
//			var self = this;

//			//sammyjs catches all excpetions. Although there is a rethrow option, stack trace will be lost.
//			function gen(callback)
//			{
//				return function()
//				{
//					setTimeout(callback.bind(this), 0);
//				}
//			}

//			this.before(/.*/, function()
//			{
//				if (!tf.datasourceManager.databaseId)
//				{
//					RouteManager.toEmptyRoute();
//					return false;
//				}
//				//console.log("before " + routeManager._skipRoute);
//				if (routeManager._skipRoute)
//				{
//					routeManager.skipNextRoute(false);
//					return false;
//				}
//				return true;
//			});

//			this.get('#/map/:mapObject', gen(function()
//			{
//				console.log("#/map/:mapObject");
//				tf.documentManagerViewModel.onRouteChange(new TF.Document.DocumentData(TF.Document.DocumentData.Map, JSON.parse(this.params['mapObject']), history.state));
//			}));


//			this.get('#/grid/:type(/:gridState)?', gen(function()
//			{
//				//console.log("#/grid/:type");
//				var slickGridStateRawString = this.params['gridState'];
//				var gridState;
//				if (slickGridStateRawString != "")
//				{
//					gridState = JSON.parse(slickGridStateRawString.substring(1, slickGridStateRawString.length));
//				}
//				else
//				{
//					gridState = new TF.Grid.GridState();
//				}
//				tf.documentManagerViewModel.onRouteChange(new TF.Document.DocumentData(TF.Document.DocumentData.Grid, { gridType: this.params['type'], gridState: gridState }, history.state));
//			}));

//			this.get('#/de/:type/(:id)?', gen(function()
//			{
//				//console.log("#/de/:type");
//				var id = parseInt(this.params['id']);
//				tf.documentManagerViewModel.add(new TF.Document.DocumentData(TF.Document.DocumentData.DataEntry, { type: this.params['type'], ids: id ? [id] : [] }));
//				//tf.documentManagerViewModel.add(new TF.Document.DocumentData(TF.Document.DocumentData.DataEntry, { type: this.params['type'], ids: id ? [78, 76, 900] : [] }));

//				//location.replace("#/home");
//			}));

//			this.get('#/view/:type/(:id)?', gen(function()
//			{
//				var id = parseInt(this.params['id']);
//				tf.documentManagerViewModel.add(new TF.Document.DocumentData(TF.Document.DocumentData.DataView, { type: this.params['type'], ids: id ? [id] : [] }));
//			}));

//			//this.get("#/home", gen(function()
//			//{
//			//	tf.documentManagerViewModel.showOpen();
//			//}));

//			this.get("#/", gen(function()
//			{
//				//console.log("empty route");
//			}));

//			this.get("#/newwindow", gen(function()
//			{
//				//console.log("index");
//				tf.documentManagerViewModel.tryLoadNewWindowDocument();
//			}));

//			this.get(/.*/, gen(function()
//			{
//				TF.RouteManager.toEmptyRoute();
//			}));

//			//this.get("#/login", gen(function()
//			//{
//			//	tf.authManager.showLoginModal();
//			//}));

//		}).run("#/");
//	}


//	RouteManager.toEmptyRoute = function()
//	{
//		location.replace("#/");
//	}
//})();