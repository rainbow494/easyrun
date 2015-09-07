// createNamespace("er.headerViewModel");
(function () {
    window.createNamespace = function (namespace) {
        var namespaces = namespace.split(".");
        var name = namespaces[0];
        window[name] = window[name] || {};

        var parent = window[name];
        for (i = 1; i < namespaces.length; i++) {
            name = namespaces[i];
            parent[name] = parent[name] || {};

            parent = parent[name];
        }

        return parent;
    };
})();
