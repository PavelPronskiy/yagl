/*!
 * jQuery yandex metric integration on datasets
 *
 * Copyright by Pavel Pronskiy and jQuery Foundation
 * Version: 0.1
 *
 * Example integration:
 * <head>
 * </head>
 * <body>
 *   <ul id="menu">
 *    <li data-yagl="single" data-yagl-id="target-reachGoal-name">data</li>
 *   ... html tags ...
 *   </ul>
 *   ... html tags ...
 *   <div data-yagl="single" data-yagl-id="target-reachGoal-name"></div>
 *   ... html tags ...
 *
 *   <script src="/yagl.js"></script>
 * </body>
 */


(function($) {

	var goals = {
		reachGoals: function(o) {
			return yaCounter26354283.reachGoal(o);
		},
		constructor: function() {
			var self = this;

			$('[data-yagl="single"]').on('touchstart click', function(event) {
				goals.reachGoals(this.dataset.yaglId);
			});

		}

	}

	return goals.constructor();

})(jQuery);

