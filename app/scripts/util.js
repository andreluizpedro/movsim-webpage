var util = (function ($) {
	'use strict';
	var util = {};

	util.isReallyNaN = function(x){
		return x !== x;
	};

	util.loadTemplate = function(filename, destinationTag, json, callback) {
		if ($.isFunction(json) && !callback) {
			callback = json;
			json = null;
		}
		$.ajax({
			url: 'templates/' + filename + '.html',
			cache: true,
			success: function (data) {

				//if (json) {
					//var template = Handlebars.compile(data);
					//$(destinationTag).html(template(json));
				//} else {
					$(destinationTag).html(data);
				//}

				if (callback && $.isFunction(callback)) {
					callback();
				}
			}
		});
	};

	return util;

})(jQuery);
