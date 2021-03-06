/* =======================================================================
 * jQuery.Spinner.js 微调器
 * ========================================================================*/
!function($) {
	$.fn.Spinner = function(opts) {
		var defaults = {
			value: 1,
			min: 1,
			len: 3,
			max: 99
		}
		var options = $.extend(defaults, opts);
		var keyCodes = {
			up: 38,
			down: 40
		}
		return this.each(function() {
			var a = $('<a></a>');
			f(a, 0, "decrease", "-"); //加
			var c = $('<a></a>');
			f(c, 0, "increase", "+"); //减
			var b = $('<input/>');
			f(b, 1, "amount input-text");
			cv(0); //值
			$(this).append(a).append(b).append(c);
			a.click(function() {
				cv( - 1)
			});
			b.keyup(function() {
				cv(0)
			});
			c.click(function() {
				cv( + 1)
			});
			b.on('keyup paste change',
			function(e) {
				e.keyCode == keyCodes.up && cv( + 1);
				e.keyCode == keyCodes.down && cv( - 1);
			});
			function cv(n) {
				b.val(b.val().replace(/[^\d]/g, ''));
				bv = parseInt(b.val() || options.min) + n;
				bv >= options.min && bv <= options.max && b.val(bv);
				if (bv <= options.min) {
					b.val(options.min);
					f(a, 2, "disDe", "decrease");
				} else {
					f(a, 2, "decrease", "disDe");
				}
				if (bv >= options.max) {
					b.val(options.max);
					f(c, 2, "disIn", "Increase");
				} else {
					f(c, 2, "increase", "disIn");
				}
			}

		});

		function f(o, t, c, s) {
			t == 0 && o.addClass(c).attr("href", "javascript:void(0)").append("<i></i>").find("i").append(s);
			t == 1 && o.addClass(c).attr({
				"value": options.value,
				"autocomplete": "off",
				"maxlength": options.len
			});
			t == 2 && o.addClass(c).removeClass(s);
		}
	}
} (window.jQuery);