/**
 * Created by Administrator on 2017-06-06 .
 */
/*! jQuery Mobile 1.3.2 | Git HEAD hash: 528cf0e <> 2013-07-19T22:17:57Z | (c) 2010, 2013 jQuery Foundation, Inc. | jquery.org/license */
!function (a, b, c) {
    "function" == typeof define && define.amd ? define(["jquery"], function (d) {
        return c(d, a, b), d.mobile
    }) : c(a.jQuery, a, b)
}(this, document, function (a, b, c, d) {
    !function (a) {
        a.mobile = {}
    }(a), function (a, b, d) {
        var e = {};
        a.mobile = a.extend(a.mobile, {
            version: "1.3.2",
            ns: "",
            subPageUrlKey: "ui-page",
            activePageClass: "ui-page-active",
            activeBtnClass: "ui-btn-active",
            focusClass: "ui-focus",
            ajaxEnabled: !0,
            hashListeningEnabled: !0,
            linkBindingEnabled: !0,
            defaultPageTransition: "fade",
            maxTransitionWidth: !1,
            minScrollBack: 250,
            touchOverflowEnabled: !1,
            defaultDialogTransition: "pop",
            pageLoadErrorMessage: "Error Loading Page",
            pageLoadErrorMessageTheme: "e",
            phonegapNavigationEnabled: !1,
            autoInitializePage: !0,
            pushStateEnabled: !0,
            ignoreContentEnabled: !1,
            orientationChangeEnabled: !0,
            buttonMarkup: {hoverDelay: 200},
            window: a(b),
            document: a(c),
            keyCode: {
                ALT: 18,
                BACKSPACE: 8,
                CAPS_LOCK: 20,
                COMMA: 188,
                COMMAND: 91,
                COMMAND_LEFT: 91,
                COMMAND_RIGHT: 93,
                CONTROL: 17,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                INSERT: 45,
                LEFT: 37,
                MENU: 93,
                NUMPAD_ADD: 107,
                NUMPAD_DECIMAL: 110,
                NUMPAD_DIVIDE: 111,
                NUMPAD_ENTER: 108,
                NUMPAD_MULTIPLY: 106,
                NUMPAD_SUBTRACT: 109,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SHIFT: 16,
                SPACE: 32,
                TAB: 9,
                UP: 38,
                WINDOWS: 91
            },
            behaviors: {},
            silentScroll: function (c) {
                "number" !== a.type(c) && (c = a.mobile.defaultHomeScroll), a.event.special.scrollstart.enabled = !1, setTimeout(function () {
                    b.scrollTo(0, c), a.mobile.document.trigger("silentscroll", {x: 0, y: c})
                }, 20), setTimeout(function () {
                    a.event.special.scrollstart.enabled = !0
                }, 150)
            },
            nsNormalizeDict: e,
            nsNormalize: function (b) {
                return b ? e[b] || (e[b] = a.camelCase(a.mobile.ns + b)) : void 0
            },
            getInheritedTheme: function (a, b) {
                for (var c, d, e = a[0], f = "", g = /ui-(bar|body|overlay)-([a-z])\b/; e && (c = e.className || "", !(c && (d = g.exec(c)) && (f = d[2])));)e = e.parentNode;
                return f || b || "a"
            },
            closestPageData: function (a) {
                return a.closest(':jqmData(role="page"), :jqmData(role="dialog")').data("mobile-page")
            },
            enhanceable: function (a) {
                return this.haveParents(a, "enhance")
            },
            hijackable: function (a) {
                return this.haveParents(a, "ajax")
            },
            haveParents: function (b, c) {
                if (!a.mobile.ignoreContentEnabled)return b;
                for (var d, e, f, g = b.length, h = a(), i = 0; g > i; i++) {
                    for (e = b.eq(i), f = !1, d = b[i]; d;) {
                        var j = d.getAttribute ? d.getAttribute("data-" + a.mobile.ns + c) : "";
                        if ("false" === j) {
                            f = !0;
                            break
                        }
                        d = d.parentNode
                    }
                    f || (h = h.add(e))
                }
                return h
            },
            getScreenHeight: function () {
                return b.innerHeight || a.mobile.window.height()
            }
        }, a.mobile), a.fn.jqmData = function (b, c) {
            var e;
            return "undefined" != typeof b && (b && (b = a.mobile.nsNormalize(b)), e = arguments.length < 2 || c === d ? this.data(b) : this.data(b, c)), e
        }, a.jqmData = function (b, c, d) {
            var e;
            return "undefined" != typeof c && (e = a.data(b, c ? a.mobile.nsNormalize(c) : c, d)), e
        }, a.fn.jqmRemoveData = function (b) {
            return this.removeData(a.mobile.nsNormalize(b))
        }, a.jqmRemoveData = function (b, c) {
            return a.removeData(b, a.mobile.nsNormalize(c))
        }, a.fn.removeWithDependents = function () {
            a.removeWithDependents(this)
        }, a.removeWithDependents = function (b) {
            var c = a(b);
            (c.jqmData("dependents") || a()).remove(), c.remove()
        }, a.fn.addDependents = function (b) {
            a.addDependents(a(this), b)
        }, a.addDependents = function (b, c) {
            var d = a(b).jqmData("dependents") || a();
            a(b).jqmData("dependents", a.merge(d, c))
        }, a.fn.getEncodedText = function () {
            return a("<div/>").text(a(this).text()).html()
        }, a.fn.jqmEnhanceable = function () {
            return a.mobile.enhanceable(this)
        }, a.fn.jqmHijackable = function () {
            return a.mobile.hijackable(this)
        };
        var f = a.find, g = /:jqmData\(([^)]*)\)/g;
        a.find = function (b, c, d, e) {
            return b = b.replace(g, "[data-" + (a.mobile.ns || "") + "$1]"), f.call(this, b, c, d, e)
        }, a.extend(a.find, f), a.find.matches = function (b, c) {
            return a.find(b, null, null, c)
        }, a.find.matchesSelector = function (b, c) {
            return a.find(c, null, null, [b]).length > 0
        }
    }(a, this), function (a, b) {
        var c = 0, d = Array.prototype.slice, e = a.cleanData;
        a.cleanData = function (b) {
            for (var c, d = 0; null != (c = b[d]); d++)try {
                a(c).triggerHandler("remove")
            } catch (f) {
            }
            e(b)
        }, a.widget = function (b, c, d) {
            var e, f, g, h, i = b.split(".")[0];
            b = b.split(".")[1], e = i + "-" + b, d || (d = c, c = a.Widget), a.expr[":"][e.toLowerCase()] = function (b) {
                return !!a.data(b, e)
            }, a[i] = a[i] || {}, f = a[i][b], g = a[i][b] = function (a, b) {
                return this._createWidget ? (arguments.length && this._createWidget(a, b), void 0) : new g(a, b)
            }, a.extend(g, f, {
                version: d.version,
                _proto: a.extend({}, d),
                _childConstructors: []
            }), h = new c, h.options = a.widget.extend({}, h.options), a.each(d, function (b, e) {
                a.isFunction(e) && (d[b] = function () {
                    var a = function () {
                        return c.prototype[b].apply(this, arguments)
                    }, d = function (a) {
                        return c.prototype[b].apply(this, a)
                    };
                    return function () {
                        var b, c = this._super, f = this._superApply;
                        return this._super = a, this._superApply = d, b = e.apply(this, arguments), this._super = c, this._superApply = f, b
                    }
                }())
            }), g.prototype = a.widget.extend(h, {widgetEventPrefix: f ? h.widgetEventPrefix : b}, d, {
                constructor: g,
                namespace: i,
                widgetName: b,
                widgetFullName: e
            }), f ? (a.each(f._childConstructors, function (b, c) {
                var d = c.prototype;
                a.widget(d.namespace + "." + d.widgetName, g, c._proto)
            }), delete f._childConstructors) : c._childConstructors.push(g), a.widget.bridge(b, g)
        }, a.widget.extend = function (c) {
            for (var e, f, g = d.call(arguments, 1), h = 0, i = g.length; i > h; h++)for (e in g[h])f = g[h][e], g[h].hasOwnProperty(e) && f !== b && (c[e] = a.isPlainObject(f) ? a.isPlainObject(c[e]) ? a.widget.extend({}, c[e], f) : a.widget.extend({}, f) : f);
            return c
        }, a.widget.bridge = function (c, e) {
            var f = e.prototype.widgetFullName || c;
            a.fn[c] = function (g) {
                var h = "string" == typeof g, i = d.call(arguments, 1), j = this;
                return g = !h && i.length ? a.widget.extend.apply(null, [g].concat(i)) : g, h ? this.each(function () {
                    var d, e = a.data(this, f);
                    return e ? a.isFunction(e[g]) && "_" !== g.charAt(0) ? (d = e[g].apply(e, i), d !== e && d !== b ? (j = d && d.jquery ? j.pushStack(d.get()) : d, !1) : void 0) : a.error("no such method '" + g + "' for " + c + " widget instance") : a.error("cannot call methods on " + c + " prior to initialization; " + "attempted to call method '" + g + "'")
                }) : this.each(function () {
                    var b = a.data(this, f);
                    b ? b.option(g || {})._init() : a.data(this, f, new e(g, this))
                }), j
            }
        }, a.Widget = function () {
        }, a.Widget._childConstructors = [], a.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {disabled: !1, create: null},
            _createWidget: function (b, d) {
                d = a(d || this.defaultElement || this)[0], this.element = a(d), this.uuid = c++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = a.widget.extend({}, this.options, this._getCreateOptions(), b), this.bindings = a(), this.hoverable = a(), this.focusable = a(), d !== this && (a.data(d, this.widgetFullName, this), this._on(!0, this.element, {
                    remove: function (a) {
                        a.target === d && this.destroy()
                    }
                }), this.document = a(d.style ? d.ownerDocument : d.document || d), this.window = a(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
            },
            _getCreateOptions: a.noop,
            _getCreateEventData: a.noop,
            _create: a.noop,
            _init: a.noop,
            destroy: function () {
                this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
            },
            _destroy: a.noop,
            widget: function () {
                return this.element
            },
            option: function (c, d) {
                var e, f, g, h = c;
                if (0 === arguments.length)return a.widget.extend({}, this.options);
                if ("string" == typeof c)if (h = {}, e = c.split("."), c = e.shift(), e.length) {
                    for (f = h[c] = a.widget.extend({}, this.options[c]), g = 0; g < e.length - 1; g++)f[e[g]] = f[e[g]] || {}, f = f[e[g]];
                    if (c = e.pop(), d === b)return f[c] === b ? null : f[c];
                    f[c] = d
                } else {
                    if (d === b)return this.options[c] === b ? null : this.options[c];
                    h[c] = d
                }
                return this._setOptions(h), this
            },
            _setOptions: function (a) {
                var b;
                for (b in a)this._setOption(b, a[b]);
                return this
            },
            _setOption: function (a, b) {
                return this.options[a] = b, "disabled" === a && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!b).attr("aria-disabled", b), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
            },
            enable: function () {
                return this._setOption("disabled", !1)
            },
            disable: function () {
                return this._setOption("disabled", !0)
            },
            _on: function (b, c, d) {
                var e, f = this;
                "boolean" != typeof b && (d = c, c = b, b = !1), d ? (c = e = a(c), this.bindings = this.bindings.add(c)) : (d = c, c = this.element, e = this.widget()), a.each(d, function (d, g) {
                    function h() {
                        return b || f.options.disabled !== !0 && !a(this).hasClass("ui-state-disabled") ? ("string" == typeof g ? f[g] : g).apply(f, arguments) : void 0
                    }

                    "string" != typeof g && (h.guid = g.guid = g.guid || h.guid || a.guid++);
                    var i = d.match(/^(\w+)\s*(.*)$/), j = i[1] + f.eventNamespace, k = i[2];
                    k ? e.delegate(k, j, h) : c.bind(j, h)
                })
            },
            _off: function (a, b) {
                b = (b || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, a.unbind(b).undelegate(b)
            },
            _delay: function (a, b) {
                function c() {
                    return ("string" == typeof a ? d[a] : a).apply(d, arguments)
                }

                var d = this;
                return setTimeout(c, b || 0)
            },
            _hoverable: function (b) {
                this.hoverable = this.hoverable.add(b), this._on(b, {
                    mouseenter: function (b) {
                        a(b.currentTarget).addClass("ui-state-hover")
                    }, mouseleave: function (b) {
                        a(b.currentTarget).removeClass("ui-state-hover")
                    }
                })
            },
            _focusable: function (b) {
                this.focusable = this.focusable.add(b), this._on(b, {
                    focusin: function (b) {
                        a(b.currentTarget).addClass("ui-state-focus")
                    }, focusout: function (b) {
                        a(b.currentTarget).removeClass("ui-state-focus")
                    }
                })
            },
            _trigger: function (b, c, d) {
                var e, f, g = this.options[b];
                if (d = d || {}, c = a.Event(c), c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase(), c.target = this.element[0], f = c.originalEvent)for (e in f)e in c || (c[e] = f[e]);
                return this.element.trigger(c, d), !(a.isFunction(g) && g.apply(this.element[0], [c].concat(d)) === !1 || c.isDefaultPrevented())
            }
        }, a.each({show: "fadeIn", hide: "fadeOut"}, function (b, c) {
            a.Widget.prototype["_" + b] = function (d, e, f) {
                "string" == typeof e && (e = {effect: e});
                var g, h = e ? e === !0 || "number" == typeof e ? c : e.effect || c : b;
                e = e || {}, "number" == typeof e && (e = {duration: e}), g = !a.isEmptyObject(e), e.complete = f, e.delay && d.delay(e.delay), g && a.effects && a.effects.effect[h] ? d[b](e) : h !== b && d[h] ? d[h](e.duration, e.easing, f) : d.queue(function (c) {
                    a(this)[b](), f && f.call(d[0]), c()
                })
            }
        })
    }(a), function (a, b) {
        a.widget("mobile.widget", {
            _createWidget: function () {
                a.Widget.prototype._createWidget.apply(this, arguments), this._trigger("init")
            }, _getCreateOptions: function () {
                var c = this.element, d = {};
                return a.each(this.options, function (a) {
                    var e = c.jqmData(a.replace(/[A-Z]/g, function (a) {
                        return "-" + a.toLowerCase()
                    }));
                    e !== b && (d[a] = e)
                }), d
            }, enhanceWithin: function (b, c) {
                this.enhance(a(this.options.initSelector, a(b)), c)
            }, enhance: function (b, c) {
                var d, e, f = a(b);
                f = a.mobile.enhanceable(f), c && f.length && (d = a.mobile.closestPageData(f), e = d && d.keepNativeSelector() || "", f = f.not(e)), f[this.widgetName]()
            }, raise: function (a) {
                throw"Widget [" + this.widgetName + "]: " + a
            }
        })
    }(a), function (a) {
        a.extend(a.mobile, {
            loadingMessageTextVisible: d,
            loadingMessageTheme: d,
            loadingMessage: d,
            showPageLoadingMsg: function (b, c, d) {
                a.mobile.loading("show", b, c, d)
            },
            hidePageLoadingMsg: function () {
                a.mobile.loading("hide")
            },
            loading: function () {
                this.loaderWidget.loader.apply(this.loaderWidget, arguments)
            }
        });
        var b = "ui-loader", c = a("html"), e = a.mobile.window;
        a.widget("mobile.loader", {
            options: {theme: "a", textVisible: !1, html: "", text: "loading"},
            defaultHtml: "<div class='" + b + "'>" + "<span class='ui-icon ui-icon-loading'></span>" + "<h1></h1>" + "</div>",
            fakeFixLoader: function () {
                var b = a("." + a.mobile.activeBtnClass).first();
                this.element.css({top: a.support.scrollTop && e.scrollTop() + e.height() / 2 || b.length && b.offset().top || 100})
            },
            checkLoaderPosition: function () {
                var b = this.element.offset(), c = e.scrollTop(), d = a.mobile.getScreenHeight();
                (b.top < c || b.top - c > d) && (this.element.addClass("ui-loader-fakefix"), this.fakeFixLoader(), e.unbind("scroll", this.checkLoaderPosition).bind("scroll", a.proxy(this.fakeFixLoader, this)))
            },
            resetHtml: function () {
                this.element.html(a(this.defaultHtml).html())
            },
            show: function (f, g, h) {
                var i, j, k;
                this.resetHtml(), "object" === a.type(f) ? (k = a.extend({}, this.options, f), f = k.theme || a.mobile.loadingMessageTheme) : (k = this.options, f = f || a.mobile.loadingMessageTheme || k.theme), j = g || a.mobile.loadingMessage || k.text, c.addClass("ui-loading"), (a.mobile.loadingMessage !== !1 || k.html) && (i = a.mobile.loadingMessageTextVisible !== d ? a.mobile.loadingMessageTextVisible : k.textVisible, this.element.attr("class", b + " ui-corner-all ui-body-" + f + " ui-loader-" + (i || g || f.text ? "verbose" : "default") + (k.textonly || h ? " ui-loader-textonly" : "")), k.html ? this.element.html(k.html) : this.element.find("h1").text(j), this.element.appendTo(a.mobile.pageContainer), this.checkLoaderPosition(), e.bind("scroll", a.proxy(this.checkLoaderPosition, this)))
            },
            hide: function () {
                c.removeClass("ui-loading"), a.mobile.loadingMessage && this.element.removeClass("ui-loader-fakefix"), a.mobile.window.unbind("scroll", this.fakeFixLoader), a.mobile.window.unbind("scroll", this.checkLoaderPosition)
            }
        }), e.bind("pagecontainercreate", function () {
            a.mobile.loaderWidget = a.mobile.loaderWidget || a(a.mobile.loader.prototype.defaultHtml).loader()
        })
    }(a, this), function (a, b, d) {
        function e(a) {
            return a = a || location.href, "#" + a.replace(/^[^#]*#?(.*)$/, "$1")
        }

        var f, g = "hashchange", h = c, i = a.event.special, j = h.documentMode, k = "on" + g in b && (j === d || j > 7);
        a.fn[g] = function (a) {
            return a ? this.bind(g, a) : this.trigger(g)
        }, a.fn[g].delay = 50, i[g] = a.extend(i[g], {
            setup: function () {
                return k ? !1 : (a(f.start), void 0)
            }, teardown: function () {
                return k ? !1 : (a(f.stop), void 0)
            }
        }), f = function () {
            function c() {
                var d = e(), h = n(j);
                d !== j ? (m(j = d, h), a(b).trigger(g)) : h !== j && (location.href = location.href.replace(/#.*/, "") + h), f = setTimeout(c, a.fn[g].delay)
            }

            var f, i = {}, j = e(), l = function (a) {
                return a
            }, m = l, n = l;
            return i.start = function () {
                f || c()
            }, i.stop = function () {
                f && clearTimeout(f), f = d
            }, b.attachEvent && !b.addEventListener && !k && function () {
                var b, d;
                i.start = function () {
                    b || (d = a.fn[g].src, d = d && d + e(), b = a('<iframe tabindex="-1" title="empty"/>').hide().one("load", function () {
                        d || m(e()), c()
                    }).attr("src", d || "javascript:0").insertAfter("body")[0].contentWindow, h.onpropertychange = function () {
                        try {
                            "title" === event.propertyName && (b.document.title = h.title)
                        } catch (a) {
                        }
                    })
                }, i.stop = l, n = function () {
                    return e(b.location.href)
                }, m = function (c, d) {
                    var e = b.document, f = a.fn[g].domain;
                    c !== d && (e.title = h.title, e.open(), f && e.write('<script>document.domain="' + f + '"</script>'), e.close(), b.location.hash = c)
                }
            }(), i
        }()
    }(a, this), function (a) {
        b.matchMedia = b.matchMedia || function (a) {
                var b, c = a.documentElement, d = c.firstElementChild || c.firstChild, e = a.createElement("body"), f = a.createElement("div");
                return f.id = "mq-test-1", f.style.cssText = "position:absolute;top:-100em", e.style.background = "none", e.appendChild(f), function (a) {
                    return f.innerHTML = '&shy;<style media="' + a + '"> #mq-test-1 { width: 42px; }</style>', c.insertBefore(e, d), b = 42 === f.offsetWidth, c.removeChild(e), {
                        matches: b,
                        media: a
                    }
                }
            }(c), a.mobile.media = function (a) {
            return b.matchMedia(a).matches
        }
    }(a), function (a) {
        var b = {touch: "ontouchend"in c};
        a.mobile.support = a.mobile.support || {}, a.extend(a.support, b), a.extend(a.mobile.support, b)
    }(a), function (a) {
        a.extend(a.support, {orientation: "orientation"in b && "onorientationchange"in b})
    }(a), function (a, d) {
        function e(a) {
            var b = a.charAt(0).toUpperCase() + a.substr(1), c = (a + " " + n.join(b + " ") + b).split(" ");
            for (var e in c)if (m[c[e]] !== d)return !0
        }

        function f(a, b, d) {
            for (var e, f = c.createElement("div"), g = function (a) {
                return a.charAt(0).toUpperCase() + a.substr(1)
            }, h = function (a) {
                return "" === a ? "" : "-" + a.charAt(0).toLowerCase() + a.substr(1) + "-"
            }, i = function (c) {
                var d = h(c) + a + ": " + b + ";", i = g(c), j = i + ("" === i ? a : g(a));
                f.setAttribute("style", d), f.style[j] && (e = !0)
            }, j = d ? d : n, k = 0; k < j.length; k++)i(j[k]);
            return !!e
        }

        function g() {
            var e = "transform-3d", f = a.mobile.media("(-" + n.join("-" + e + "),(-") + "-" + e + "),(" + e + ")");
            if (f)return !!f;
            var g = c.createElement("div"), h = {MozTransform: "-moz-transform", transform: "transform"};
            l.append(g);
            for (var i in h)g.style[i] !== d && (g.style[i] = "translate3d( 100px, 1px, 1px )", f = b.getComputedStyle(g).getPropertyValue(h[i]));
            return !!f && "none" !== f
        }

        function h() {
            var b, c, d = location.protocol + "//" + location.host + location.pathname + "ui-dir/", e = a("head base"), f = null, g = "";
            return e.length ? g = e.attr("href") : e = f = a("<base>", {href: d}).appendTo("head"), b = a("<a href='testurl' />").prependTo(l), c = b[0].href, e[0].href = g || location.pathname, f && f.remove(), 0 === c.indexOf(d)
        }

        function i() {
            var a, d = c.createElement("x"), e = c.documentElement, f = b.getComputedStyle;
            return "pointerEvents"in d.style ? (d.style.pointerEvents = "auto", d.style.pointerEvents = "x", e.appendChild(d), a = f && "auto" === f(d, "").pointerEvents, e.removeChild(d), !!a) : !1
        }

        function j() {
            var a = c.createElement("div");
            return "undefined" != typeof a.getBoundingClientRect
        }

        function k() {
            var a = b, c = navigator.userAgent, d = navigator.platform, e = c.match(/AppleWebKit\/([0-9]+)/), f = !!e && e[1], g = c.match(/Fennec\/([0-9]+)/), h = !!g && g[1], i = c.match(/Opera Mobi\/([0-9]+)/), j = !!i && i[1];
            return (d.indexOf("iPhone") > -1 || d.indexOf("iPad") > -1 || d.indexOf("iPod") > -1) && f && 534 > f || a.operamini && "[object OperaMini]" === {}.toString.call(a.operamini) || i && 7458 > j || c.indexOf("Android") > -1 && f && 533 > f || h && 6 > h || "palmGetResource"in b && f && 534 > f || c.indexOf("MeeGo") > -1 && c.indexOf("NokiaBrowser/8.5.0") > -1 ? !1 : !0
        }

        var l = a("<body>").prependTo("html"), m = l[0].style, n = ["Webkit", "Moz", "O"], o = "palmGetResource"in b, p = b.opera, q = b.operamini && "[object OperaMini]" === {}.toString.call(b.operamini), r = b.blackberry && !e("-webkit-transform");
        a.extend(a.mobile, {browser: {}}), a.mobile.browser.oldIE = function () {
            var a = 3, b = c.createElement("div"), d = b.all || [];
            do b.innerHTML = "<!--[if gt IE " + ++a + "]><br><![endif]-->"; while (d[0]);
            return a > 4 ? a : !a
        }(), a.extend(a.support, {
            cssTransitions: "WebKitTransitionEvent"in b || f("transition", "height 100ms linear", ["Webkit", "Moz", ""]) && !a.mobile.browser.oldIE && !p,
            pushState: "pushState"in history && "replaceState"in history && !(b.navigator.userAgent.indexOf("Firefox") >= 0 && b.top !== b) && -1 === b.navigator.userAgent.search(/CriOS/),
            mediaquery: a.mobile.media("only all"),
            cssPseudoElement: !!e("content"),
            touchOverflow: !!e("overflowScrolling"),
            cssTransform3d: g(),
            boxShadow: !!e("boxShadow") && !r,
            fixedPosition: k(),
            scrollTop: ("pageXOffset"in b || "scrollTop"in c.documentElement || "scrollTop"in l[0]) && !o && !q,
            dynamicBaseTag: h(),
            cssPointerEvents: i(),
            boundingRect: j()
        }), l.remove();
        var s = function () {
            var a = b.navigator.userAgent;
            return a.indexOf("Nokia") > -1 && (a.indexOf("Symbian/3") > -1 || a.indexOf("Series60/5") > -1) && a.indexOf("AppleWebKit") > -1 && a.match(/(BrowserNG|NokiaBrowser)\/7\.[0-3]/)
        }();
        a.mobile.gradeA = function () {
            return (a.support.mediaquery || a.mobile.browser.oldIE && a.mobile.browser.oldIE >= 7) && (a.support.boundingRect || null !== a.fn.jquery.match(/1\.[0-7+]\.[0-9+]?/))
        }, a.mobile.ajaxBlacklist = b.blackberry && !b.WebKitPoint || q || s, s && a(function () {
            a("head link[rel='stylesheet']").attr("rel", "alternate stylesheet").attr("rel", "stylesheet")
        }), a.support.boxShadow || a("html").addClass("ui-mobile-nosupport-boxshadow")
    }(a), function (a, b) {
        var c, d = a.mobile.window;
        a.event.special.navigate = c = {
            bound: !1,
            pushStateEnabled: !0,
            originalEventName: b,
            isPushStateEnabled: function () {
                return a.support.pushState && a.mobile.pushStateEnabled === !0 && this.isHashChangeEnabled()
            },
            isHashChangeEnabled: function () {
                return a.mobile.hashListeningEnabled === !0
            },
            popstate: function (b) {
                var c = new a.Event("navigate"), e = new a.Event("beforenavigate"), f = b.originalEvent.state || {};
                location.href, d.trigger(e), e.isDefaultPrevented() || (b.historyState && a.extend(f, b.historyState), c.originalEvent = b, setTimeout(function () {
                    d.trigger(c, {state: f})
                }, 0))
            },
            hashchange: function (b) {
                var c = new a.Event("navigate"), e = new a.Event("beforenavigate");
                d.trigger(e), e.isDefaultPrevented() || (c.originalEvent = b, d.trigger(c, {state: b.hashchangeState || {}}))
            },
            setup: function () {
                c.bound || (c.bound = !0, c.isPushStateEnabled() ? (c.originalEventName = "popstate", d.bind("popstate.navigate", c.popstate)) : c.isHashChangeEnabled() && (c.originalEventName = "hashchange", d.bind("hashchange.navigate", c.hashchange)))
            }
        }
    }(a), function (a, c) {
        var d, e, f = "&ui-state=dialog";
        a.mobile.path = d = {
            uiStateKey: "&ui-state",
            urlParseRE: /^\s*(((([^:\/#\?]+:)?(?:(\/\/)((?:(([^:@\/#\?]+)(?:\:([^:@\/#\?]+))?)@)?(([^:\/#\?\]\[]+|\[[^\/\]@#?]+\])(?:\:([0-9]+))?))?)?)?((\/?(?:[^\/\?#]+\/+)*)([^\?#]*)))?(\?[^#]+)?)(#.*)?/,
            getLocation: function (a) {
                var b = a ? this.parseUrl(a) : location, c = this.parseUrl(a || location.href).hash;
                return c = "#" === c ? "" : c, b.protocol + "//" + b.host + b.pathname + b.search + c
            },
            parseLocation: function () {
                return this.parseUrl(this.getLocation())
            },
            parseUrl: function (b) {
                if ("object" === a.type(b))return b;
                var c = d.urlParseRE.exec(b || "") || [];
                return {
                    href: c[0] || "",
                    hrefNoHash: c[1] || "",
                    hrefNoSearch: c[2] || "",
                    domain: c[3] || "",
                    protocol: c[4] || "",
                    doubleSlash: c[5] || "",
                    authority: c[6] || "",
                    username: c[8] || "",
                    password: c[9] || "",
                    host: c[10] || "",
                    hostname: c[11] || "",
                    port: c[12] || "",
                    pathname: c[13] || "",
                    directory: c[14] || "",
                    filename: c[15] || "",
                    search: c[16] || "",
                    hash: c[17] || ""
                }
            },
            makePathAbsolute: function (a, b) {
                if (a && "/" === a.charAt(0))return a;
                a = a || "", b = b ? b.replace(/^\/|(\/[^\/]*|[^\/]+)$/g, "") : "";
                for (var c = b ? b.split("/") : [], d = a.split("/"), e = 0; e < d.length; e++) {
                    var f = d[e];
                    switch (f) {
                        case".":
                            break;
                        case"..":
                            c.length && c.pop();
                            break;
                        default:
                            c.push(f)
                    }
                }
                return "/" + c.join("/")
            },
            isSameDomain: function (a, b) {
                return d.parseUrl(a).domain === d.parseUrl(b).domain
            },
            isRelativeUrl: function (a) {
                return "" === d.parseUrl(a).protocol
            },
            isAbsoluteUrl: function (a) {
                return "" !== d.parseUrl(a).protocol
            },
            makeUrlAbsolute: function (a, b) {
                if (!d.isRelativeUrl(a))return a;
                b === c && (b = this.documentBase);
                var e = d.parseUrl(a), f = d.parseUrl(b), g = e.protocol || f.protocol, h = e.protocol ? e.doubleSlash : e.doubleSlash || f.doubleSlash, i = e.authority || f.authority, j = "" !== e.pathname, k = d.makePathAbsolute(e.pathname || f.filename, f.pathname), l = e.search || !j && f.search || "", m = e.hash;
                return g + h + i + k + l + m
            },
            addSearchParams: function (b, c) {
                var e = d.parseUrl(b), f = "object" == typeof c ? a.param(c) : c, g = e.search || "?";
                return e.hrefNoSearch + g + ("?" !== g.charAt(g.length - 1) ? "&" : "") + f + (e.hash || "")
            },
            convertUrlToDataUrl: function (a) {
                var c = d.parseUrl(a);
                return d.isEmbeddedPage(c) ? c.hash.split(f)[0].replace(/^#/, "").replace(/\?.*$/, "") : d.isSameDomain(c, this.documentBase) ? c.hrefNoHash.replace(this.documentBase.domain, "").split(f)[0] : b.decodeURIComponent(a)
            },
            get: function (a) {
                return a === c && (a = d.parseLocation().hash), d.stripHash(a).replace(/[^\/]*\.[^\/*]+$/, "")
            },
            set: function (a) {
                location.hash = a
            },
            isPath: function (a) {
                return /\//.test(a)
            },
            clean: function (a) {
                return a.replace(this.documentBase.domain, "")
            },
            stripHash: function (a) {
                return a.replace(/^#/, "")
            },
            stripQueryParams: function (a) {
                return a.replace(/\?.*$/, "")
            },
            cleanHash: function (a) {
                return d.stripHash(a.replace(/\?.*$/, "").replace(f, ""))
            },
            isHashValid: function (a) {
                return /^#[^#]+$/.test(a)
            },
            isExternal: function (a) {
                var b = d.parseUrl(a);
                return b.protocol && b.domain !== this.documentUrl.domain ? !0 : !1
            },
            hasProtocol: function (a) {
                return /^(:?\w+:)/.test(a)
            },
            isEmbeddedPage: function (a) {
                var b = d.parseUrl(a);
                return "" !== b.protocol ? !this.isPath(b.hash) && b.hash && (b.hrefNoHash === this.documentUrl.hrefNoHash || this.documentBaseDiffers && b.hrefNoHash === this.documentBase.hrefNoHash) : /^#/.test(b.href)
            },
            squash: function (a, b) {
                var c, e, f, g, h = this.isPath(a), i = this.parseUrl(a), j = i.hash, k = "";
                return b = b || (d.isPath(a) ? d.getLocation() : d.getDocumentUrl()), e = h ? d.stripHash(a) : a, e = d.isPath(i.hash) ? d.stripHash(i.hash) : e, g = e.indexOf(this.uiStateKey), g > -1 && (k = e.slice(g), e = e.slice(0, g)), c = d.makeUrlAbsolute(e, b), f = this.parseUrl(c).search, h ? ((d.isPath(j) || 0 === j.replace("#", "").indexOf(this.uiStateKey)) && (j = ""), k && -1 === j.indexOf(this.uiStateKey) && (j += k), -1 === j.indexOf("#") && "" !== j && (j = "#" + j), c = d.parseUrl(c), c = c.protocol + "//" + c.host + c.pathname + f + j) : c += c.indexOf("#") > -1 ? k : "#" + k, c
            },
            isPreservableHash: function (a) {
                return 0 === a.replace("#", "").indexOf(this.uiStateKey)
            }
        }, d.documentUrl = d.parseLocation(), e = a("head").find("base"), d.documentBase = e.length ? d.parseUrl(d.makeUrlAbsolute(e.attr("href"), d.documentUrl.href)) : d.documentUrl, d.documentBaseDiffers = d.documentUrl.hrefNoHash !== d.documentBase.hrefNoHash, d.getDocumentUrl = function (b) {
            return b ? a.extend({}, d.documentUrl) : d.documentUrl.href
        }, d.getDocumentBase = function (b) {
            return b ? a.extend({}, d.documentBase) : d.documentBase.href
        }
    }(a), function (a, b) {
        a.mobile.path, a.mobile.History = function (a, b) {
            this.stack = a || [], this.activeIndex = b || 0
        }, a.extend(a.mobile.History.prototype, {
            getActive: function () {
                return this.stack[this.activeIndex]
            }, getLast: function () {
                return this.stack[this.previousIndex]
            }, getNext: function () {
                return this.stack[this.activeIndex + 1]
            }, getPrev: function () {
                return this.stack[this.activeIndex - 1]
            }, add: function (a, b) {
                b = b || {}, this.getNext() && this.clearForward(), b.hash && -1 === b.hash.indexOf("#") && (b.hash = "#" + b.hash), b.url = a, this.stack.push(b), this.activeIndex = this.stack.length - 1
            }, clearForward: function () {
                this.stack = this.stack.slice(0, this.activeIndex + 1)
            }, find: function (a, b, c) {
                b = b || this.stack;
                var d, e, f, g = b.length;
                for (e = 0; g > e; e++)if (d = b[e], (decodeURIComponent(a) === decodeURIComponent(d.url) || decodeURIComponent(a) === decodeURIComponent(d.hash)) && (f = e, c))return f;
                return f
            }, closest: function (a) {
                var c, d = this.activeIndex;
                return c = this.find(a, this.stack.slice(0, d)), c === b && (c = this.find(a, this.stack.slice(d), !0), c = c === b ? c : c + d), c
            }, direct: function (c) {
                var d = this.closest(c.url), e = this.activeIndex;
                d !== b && (this.activeIndex = d, this.previousIndex = e), e > d ? (c.present || c.back || a.noop)(this.getActive(), "back") : d > e ? (c.present || c.forward || a.noop)(this.getActive(), "forward") : d === b && c.missing && c.missing(this.getActive())
            }
        })
    }(a), function (a) {
        var d = a.mobile.path, e = location.href;
        a.mobile.Navigator = function (b) {
            this.history = b, this.ignoreInitialHashChange = !0, a.mobile.window.bind({
                "popstate.history": a.proxy(this.popstate, this),
                "hashchange.history": a.proxy(this.hashchange, this)
            })
        }, a.extend(a.mobile.Navigator.prototype, {
            squash: function (e, f) {
                var g, h, i = d.isPath(e) ? d.stripHash(e) : e;
                return h = d.squash(e), g = a.extend({
                    hash: i,
                    url: h
                }, f), b.history.replaceState(g, g.title || c.title, h), g
            }, hash: function (a, b) {
                var c, e, f;
                if (c = d.parseUrl(a), e = d.parseLocation(), e.pathname + e.search === c.pathname + c.search)f = c.hash ? c.hash : c.pathname + c.search; else if (d.isPath(a)) {
                    var g = d.parseUrl(b);
                    f = g.pathname + g.search + (d.isPreservableHash(g.hash) ? g.hash.replace("#", "") : "")
                } else f = a;
                return f
            }, go: function (e, f, g) {
                var h, i, j, k, l = a.event.special.navigate.isPushStateEnabled();
                i = d.squash(e), j = this.hash(e, i), g && j !== d.stripHash(d.parseLocation().hash) && (this.preventNextHashChange = g), this.preventHashAssignPopState = !0, b.location.hash = j, this.preventHashAssignPopState = !1, h = a.extend({
                    url: i,
                    hash: j,
                    title: c.title
                }, f), l && (k = new a.Event("popstate"), k.originalEvent = {
                    type: "popstate",
                    state: null
                }, this.squash(e, h), g || (this.ignorePopState = !0, a.mobile.window.trigger(k))), this.history.add(h.url, h)
            }, popstate: function (b) {
                var c, f;
                if (a.event.special.navigate.isPushStateEnabled())return this.preventHashAssignPopState ? (this.preventHashAssignPopState = !1, b.stopImmediatePropagation(), void 0) : this.ignorePopState ? (this.ignorePopState = !1, void 0) : !b.originalEvent.state && 1 === this.history.stack.length && this.ignoreInitialHashChange && (this.ignoreInitialHashChange = !1, location.href === e) ? (b.preventDefault(), void 0) : (c = d.parseLocation().hash, !b.originalEvent.state && c ? (f = this.squash(c), this.history.add(f.url, f), b.historyState = f, void 0) : (this.history.direct({
                    url: (b.originalEvent.state || {}).url || c,
                    present: function (c, d) {
                        b.historyState = a.extend({}, c), b.historyState.direction = d
                    }
                }), void 0))
            }, hashchange: function (b) {
                var e, f;
                if (a.event.special.navigate.isHashChangeEnabled() && !a.event.special.navigate.isPushStateEnabled()) {
                    if (this.preventNextHashChange)return this.preventNextHashChange = !1, b.stopImmediatePropagation(), void 0;
                    e = this.history, f = d.parseLocation().hash, this.history.direct({
                        url: f, present: function (c, d) {
                            b.hashchangeState = a.extend({}, c), b.hashchangeState.direction = d
                        }, missing: function () {
                            e.add(f, {hash: f, title: c.title})
                        }
                    })
                }
            }
        })
    }(a), function (a) {
        a.mobile.navigate = function (b, c, d) {
            a.mobile.navigate.navigator.go(b, c, d)
        }, a.mobile.navigate.history = new a.mobile.History, a.mobile.navigate.navigator = new a.mobile.Navigator(a.mobile.navigate.history);
        var b = a.mobile.path.parseLocation();
        a.mobile.navigate.history.add(b.href, {hash: b.hash})
    }(a), function (a, b, c, d) {
        function e(a) {
            for (; a && "undefined" != typeof a.originalEvent;)a = a.originalEvent;
            return a
        }

        function f(b, c) {
            var f, g, h, i, j, k, l, m, n, o = b.type;
            if (b = a.Event(b), b.type = c, f = b.originalEvent, g = a.event.props, o.search(/^(mouse|click)/) > -1 && (g = D), f)for (l = g.length, i; l;)i = g[--l], b[i] = f[i];
            if (o.search(/mouse(down|up)|click/) > -1 && !b.which && (b.which = 1), -1 !== o.search(/^touch/) && (h = e(f), o = h.touches, j = h.changedTouches, k = o && o.length ? o[0] : j && j.length ? j[0] : d))for (m = 0, n = B.length; n > m; m++)i = B[m], b[i] = k[i];
            return b
        }

        function g(b) {
            for (var c, d, e = {}; b;) {
                c = a.data(b, y);
                for (d in c)c[d] && (e[d] = e.hasVirtualBinding = !0);
                b = b.parentNode
            }
            return e
        }

        function h(b, c) {
            for (var d; b;) {
                if (d = a.data(b, y), d && (!c || d[c]))return b;
                b = b.parentNode
            }
            return null
        }

        function i() {
            L = !1
        }

        function j() {
            L = !0
        }

        function k() {
            P = 0, J.length = 0, K = !1, j()
        }

        function l() {
            i()
        }

        function m() {
            n(), F = setTimeout(function () {
                F = 0, k()
            }, a.vmouse.resetTimerDuration)
        }

        function n() {
            F && (clearTimeout(F), F = 0)
        }

        function o(b, c, d) {
            var e;
            return (d && d[b] || !d && h(c.target, b)) && (e = f(c, b), a(c.target).trigger(e)), e
        }

        function p(b) {
            var c = a.data(b.target, z);
            if (!(K || P && P === c)) {
                var d = o("v" + b.type, b);
                d && (d.isDefaultPrevented() && b.preventDefault(), d.isPropagationStopped() && b.stopPropagation(), d.isImmediatePropagationStopped() && b.stopImmediatePropagation())
            }
        }

        function q(b) {
            var c, d, f = e(b).touches;
            if (f && 1 === f.length && (c = b.target, d = g(c), d.hasVirtualBinding)) {
                P = O++, a.data(c, z, P), n(), l(), I = !1;
                var h = e(b).touches[0];
                G = h.pageX, H = h.pageY, o("vmouseover", b, d), o("vmousedown", b, d)
            }
        }

        function r(a) {
            L || (I || o("vmousecancel", a, g(a.target)), I = !0, m())
        }

        function s(b) {
            if (!L) {
                var c = e(b).touches[0], d = I, f = a.vmouse.moveDistanceThreshold, h = g(b.target);
                I = I || Math.abs(c.pageX - G) > f || Math.abs(c.pageY - H) > f, I && !d && o("vmousecancel", b, h), o("vmousemove", b, h), m()
            }
        }

        function t(a) {
            if (!L) {
                j();
                var b, c = g(a.target);
                if (o("vmouseup", a, c), !I) {
                    var d = o("vclick", a, c);
                    d && d.isDefaultPrevented() && (b = e(a).changedTouches[0], J.push({
                        touchID: P,
                        x: b.clientX,
                        y: b.clientY
                    }), K = !0)
                }
                o("vmouseout", a, c), I = !1, m()
            }
        }

        function u(b) {
            var c, d = a.data(b, y);
            if (d)for (c in d)if (d[c])return !0;
            return !1
        }

        function v() {
        }

        function w(b) {
            var c = b.substr(1);
            return {
                setup: function () {
                    u(this) || a.data(this, y, {});
                    var d = a.data(this, y);
                    d[b] = !0, E[b] = (E[b] || 0) + 1, 1 === E[b] && N.bind(c, p), a(this).bind(c, v), M && (E.touchstart = (E.touchstart || 0) + 1, 1 === E.touchstart && N.bind("touchstart", q).bind("touchend", t).bind("touchmove", s).bind("scroll", r))
                }, teardown: function () {
                    --E[b], E[b] || N.unbind(c, p), M && (--E.touchstart, E.touchstart || N.unbind("touchstart", q).unbind("touchmove", s).unbind("touchend", t).unbind("scroll", r));
                    var d = a(this), e = a.data(this, y);
                    e && (e[b] = !1), d.unbind(c, v), u(this) || d.removeData(y)
                }
            }
        }

        var x, y = "virtualMouseBindings", z = "virtualTouchID", A = "vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "), B = "clientX clientY pageX pageY screenX screenY".split(" "), C = a.event.mouseHooks ? a.event.mouseHooks.props : [], D = a.event.props.concat(C), E = {}, F = 0, G = 0, H = 0, I = !1, J = [], K = !1, L = !1, M = "addEventListener"in c, N = a(c), O = 1, P = 0;
        a.vmouse = {moveDistanceThreshold: 10, clickDistanceThreshold: 10, resetTimerDuration: 1500};
        for (var Q = 0; Q < A.length; Q++)a.event.special[A[Q]] = w(A[Q]);
        M && c.addEventListener("click", function (b) {
            var c, d, e, f, g, h, i = J.length, j = b.target;
            if (i)for (c = b.clientX, d = b.clientY, x = a.vmouse.clickDistanceThreshold, e = j; e;) {
                for (f = 0; i > f; f++)if (g = J[f], h = 0, e === j && Math.abs(g.x - c) < x && Math.abs(g.y - d) < x || a.data(e, z) === g.touchID)return b.preventDefault(), b.stopPropagation(), void 0;
                e = e.parentNode
            }
        }, !0)
    }(a, b, c), function (a, b, d) {
        function e(b, c, d) {
            var e = d.type;
            d.type = c, a.event.dispatch.call(b, d), d.type = e
        }

        var f = a(c);
        a.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "), function (b, c) {
            a.fn[c] = function (a) {
                return a ? this.bind(c, a) : this.trigger(c)
            }, a.attrFn && (a.attrFn[c] = !0)
        });
        var g = a.mobile.support.touch, h = "touchmove scroll", i = g ? "touchstart" : "mousedown", j = g ? "touchend" : "mouseup", k = g ? "touchmove" : "mousemove";
        a.event.special.scrollstart = {
            enabled: !0, setup: function () {
                function b(a, b) {
                    c = b, e(f, c ? "scrollstart" : "scrollstop", a)
                }

                var c, d, f = this, g = a(f);
                g.bind(h, function (e) {
                    a.event.special.scrollstart.enabled && (c || b(e, !0), clearTimeout(d), d = setTimeout(function () {
                        b(e, !1)
                    }, 50))
                })
            }
        }, a.event.special.tap = {
            tapholdThreshold: 750, setup: function () {
                var b = this, c = a(b);
                c.bind("vmousedown", function (d) {
                    function g() {
                        clearTimeout(j)
                    }

                    function h() {
                        g(), c.unbind("vclick", i).unbind("vmouseup", g), f.unbind("vmousecancel", h)
                    }

                    function i(a) {
                        h(), k === a.target && e(b, "tap", a)
                    }

                    if (d.which && 1 !== d.which)return !1;
                    var j, k = d.target;
                    d.originalEvent, c.bind("vmouseup", g).bind("vclick", i), f.bind("vmousecancel", h), j = setTimeout(function () {
                        e(b, "taphold", a.Event("taphold", {target: k}))
                    }, a.event.special.tap.tapholdThreshold)
                })
            }
        }, a.event.special.swipe = {
            scrollSupressionThreshold: 30,
            durationThreshold: 1e3,
            horizontalDistanceThreshold: 30,
            verticalDistanceThreshold: 75,
            start: function (b) {
                var c = b.originalEvent.touches ? b.originalEvent.touches[0] : b;
                return {time: (new Date).getTime(), coords: [c.pageX, c.pageY], origin: a(b.target)}
            },
            stop: function (a) {
                var b = a.originalEvent.touches ? a.originalEvent.touches[0] : a;
                return {time: (new Date).getTime(), coords: [b.pageX, b.pageY]}
            },
            handleSwipe: function (b, c) {
                c.time - b.time < a.event.special.swipe.durationThreshold && Math.abs(b.coords[0] - c.coords[0]) > a.event.special.swipe.horizontalDistanceThreshold && Math.abs(b.coords[1] - c.coords[1]) < a.event.special.swipe.verticalDistanceThreshold && b.origin.trigger("swipe").trigger(b.coords[0] > c.coords[0] ? "swipeleft" : "swiperight")
            },
            setup: function () {
                var b = this, c = a(b);
                c.bind(i, function (b) {
                    function e(b) {
                        g && (f = a.event.special.swipe.stop(b), Math.abs(g.coords[0] - f.coords[0]) > a.event.special.swipe.scrollSupressionThreshold && b.preventDefault())
                    }

                    var f, g = a.event.special.swipe.start(b);
                    c.bind(k, e).one(j, function () {
                        c.unbind(k, e), g && f && a.event.special.swipe.handleSwipe(g, f), g = f = d
                    })
                })
            }
        }, a.each({
            scrollstop: "scrollstart",
            taphold: "tap",
            swipeleft: "swipe",
            swiperight: "swipe"
        }, function (b, c) {
            a.event.special[b] = {
                setup: function () {
                    a(this).bind(c, a.noop)
                }
            }
        })
    }(a, this), function (a) {
        a.event.special.throttledresize = {
            setup: function () {
                a(this).bind("resize", f)
            }, teardown: function () {
                a(this).unbind("resize", f)
            }
        };
        var b, c, d, e = 250, f = function () {
            c = (new Date).getTime(), d = c - g, d >= e ? (g = c, a(this).trigger("throttledresize")) : (b && clearTimeout(b), b = setTimeout(f, e - d))
        }, g = 0
    }(a), function (a, b) {
        function d() {
            var a = e();
            a !== f && (f = a, i.trigger(j))
        }

        var e, f, g, h, i = a(b), j = "orientationchange", k = {0: !0, 180: !0};
        if (a.support.orientation) {
            var l = b.innerWidth || i.width(), m = b.innerHeight || i.height(), n = 50;
            g = l > m && l - m > n, h = k[b.orientation], (g && h || !g && !h) && (k = {"-90": !0, 90: !0})
        }
        a.event.special.orientationchange = a.extend({}, a.event.special.orientationchange, {
            setup: function () {
                return a.support.orientation && !a.event.special.orientationchange.disabled ? !1 : (f = e(), i.bind("throttledresize", d), void 0)
            }, teardown: function () {
                return a.support.orientation && !a.event.special.orientationchange.disabled ? !1 : (i.unbind("throttledresize", d), void 0)
            }, add: function (a) {
                var b = a.handler;
                a.handler = function (a) {
                    return a.orientation = e(), b.apply(this, arguments)
                }
            }
        }), a.event.special.orientationchange.orientation = e = function () {
            var d = !0, e = c.documentElement;
            return d = a.support.orientation ? k[b.orientation] : e && e.clientWidth / e.clientHeight < 1.1, d ? "portrait" : "landscape"
        }, a.fn[j] = function (a) {
            return a ? this.bind(j, a) : this.trigger(j)
        }, a.attrFn && (a.attrFn[j] = !0)
    }(a, this), function (a) {
        a.widget("mobile.page", a.mobile.widget, {
            options: {
                theme: "c",
                domCache: !1,
                keepNativeDefault: ":jqmData(role='none'), :jqmData(role='nojs')"
            }, _create: function () {
                return this._trigger("beforecreate") === !1 ? !1 : (this.element.attr("tabindex", "0").addClass("ui-page ui-body-" + this.options.theme), this._on(this.element, {
                    pagebeforehide: "removeContainerBackground",
                    pagebeforeshow: "_handlePageBeforeShow"
                }), void 0)
            }, _handlePageBeforeShow: function () {
                this.setContainerBackground()
            }, removeContainerBackground: function () {
                a.mobile.pageContainer.removeClass("ui-overlay-" + a.mobile.getInheritedTheme(this.element.parent()))
            }, setContainerBackground: function (b) {
                this.options.theme && a.mobile.pageContainer.addClass("ui-overlay-" + (b || this.options.theme))
            }, keepNativeSelector: function () {
                var b = this.options, c = b.keepNative && a.trim(b.keepNative);
                return c && b.keepNative !== b.keepNativeDefault ? [b.keepNative, b.keepNativeDefault].join(", ") : b.keepNativeDefault
            }
        })
    }(a), function (a, b, c) {
        var d = function (d) {
            return d === c && (d = !0), function (c, e, f, g) {
                var h = new a.Deferred, i = e ? " reverse" : "", j = a.mobile.urlHistory.getActive(), k = j.lastScroll || a.mobile.defaultHomeScroll, l = a.mobile.getScreenHeight(), m = a.mobile.maxTransitionWidth !== !1 && a.mobile.window.width() > a.mobile.maxTransitionWidth, n = !a.support.cssTransitions || m || !c || "none" === c || Math.max(a.mobile.window.scrollTop(), k) > a.mobile.getMaxScrollForTransition(), o = " ui-page-pre-in", p = function () {
                    a.mobile.pageContainer.toggleClass("ui-mobile-viewport-transitioning viewport-" + c)
                }, q = function () {
                    a.event.special.scrollstart.enabled = !1, b.scrollTo(0, k), setTimeout(function () {
                        a.event.special.scrollstart.enabled = !0
                    }, 150)
                }, r = function () {
                    g.removeClass(a.mobile.activePageClass + " out in reverse " + c).height("")
                }, s = function () {
                    d ? g.animationComplete(t) : t(), g.height(l + a.mobile.window.scrollTop()).addClass(c + " out" + i)
                }, t = function () {
                    g && d && r(), u()
                }, u = function () {
                    f.css("z-index", -10), f.addClass(a.mobile.activePageClass + o), a.mobile.focusPage(f), f.height(l + k), q(), f.css("z-index", ""), n || f.animationComplete(v), f.removeClass(o).addClass(c + " in" + i), n && v()
                }, v = function () {
                    d || g && r(), f.removeClass("out in reverse " + c).height(""), p(), a.mobile.window.scrollTop() !== k && q(), h.resolve(c, e, f, g, !0)
                };
                return p(), g && !n ? s() : t(), h.promise()
            }
        }, e = d(), f = d(!1), g = function () {
            return 3 * a.mobile.getScreenHeight()
        };
        a.mobile.defaultTransitionHandler = e, a.mobile.transitionHandlers = {
            "default": a.mobile.defaultTransitionHandler,
            sequential: e,
            simultaneous: f
        }, a.mobile.transitionFallbacks = {}, a.mobile._maybeDegradeTransition = function (b) {
            return b && !a.support.cssTransform3d && a.mobile.transitionFallbacks[b] && (b = a.mobile.transitionFallbacks[b]), b
        }, a.mobile.getMaxScrollForTransition = a.mobile.getMaxScrollForTransition || g
    }(a, this), function (a, d) {
        function e(b) {
            !p || p.closest("." + a.mobile.activePageClass).length && !b || p.removeClass(a.mobile.activeBtnClass), p = null
        }

        function f() {
            t = !1, s.length > 0 && a.mobile.changePage.apply(null, s.pop())
        }

        function g(b, c, d, e) {
            c && c.data("mobile-page")._trigger("beforehide", null, {nextPage: b}), b.data("mobile-page")._trigger("beforeshow", null, {prevPage: c || a("")}), a.mobile.hidePageLoadingMsg(), d = a.mobile._maybeDegradeTransition(d);
            var f = a.mobile.transitionHandlers[d || "default"] || a.mobile.defaultTransitionHandler, g = f(d, e, b, c);
            return g.done(function () {
                c && c.data("mobile-page")._trigger("hide", null, {nextPage: b}), b.data("mobile-page")._trigger("show", null, {prevPage: c || a("")})
            }), g
        }

        function h(b, c) {
            c && b.attr("data-" + a.mobile.ns + "role", c), b.page()
        }

        function i() {
            var b = a.mobile.activePage && k(a.mobile.activePage);
            return b || x.hrefNoHash
        }

        function j(a) {
            for (; a && ("string" != typeof a.nodeName || "a" !== a.nodeName.toLowerCase());)a = a.parentNode;
            return a
        }

        function k(b) {
            var c = a(b).closest(".ui-page").jqmData("url"), d = x.hrefNoHash;
            return c && n.isPath(c) || (c = d), n.makeUrlAbsolute(c, d)
        }

        var l = a.mobile.window, m = (a("html"), a("head")), n = a.extend(a.mobile.path, {
            getFilePath: function (b) {
                var c = "&" + a.mobile.subPageUrlKey;
                return b && b.split(c)[0].split(u)[0]
            }, isFirstPageUrl: function (b) {
                var c = n.parseUrl(n.makeUrlAbsolute(b, this.documentBase)), e = c.hrefNoHash === this.documentUrl.hrefNoHash || this.documentBaseDiffers && c.hrefNoHash === this.documentBase.hrefNoHash, f = a.mobile.firstPage, g = f && f[0] ? f[0].id : d;
                return e && (!c.hash || "#" === c.hash || g && c.hash.replace(/^#/, "") === g)
            }, isPermittedCrossDomainRequest: function (b, c) {
                return a.mobile.allowCrossDomainPages && "file:" === b.protocol && -1 !== c.search(/^https?:/)
            }
        }), o = null, p = null, q = a.Deferred(), r = a.mobile.navigate.history, s = [], t = !1, u = "&ui-state=dialog", v = m.children("base"), w = n.documentUrl, x = n.documentBase, y = (n.documentBaseDiffers, a.mobile.getScreenHeight), z = a.support.dynamicBaseTag ? {
            element: v.length ? v : a("<base>", {href: x.hrefNoHash}).prependTo(m),
            set: function (a) {
                a = n.parseUrl(a).hrefNoHash, z.element.attr("href", n.makeUrlAbsolute(a, x))
            },
            reset: function () {
                z.element.attr("href", x.hrefNoSearch)
            }
        } : d;
        a.mobile.getDocumentUrl = n.getDocumentUrl, a.mobile.getDocumentBase = n.getDocumentBase, a.mobile.back = function () {
            var a = b.navigator;
            this.phonegapNavigationEnabled && a && a.app && a.app.backHistory ? a.app.backHistory() : b.history.back()
        }, a.mobile.focusPage = function (a) {
            var b = a.find("[autofocus]"), c = a.find(".ui-title:eq(0)");
            return b.length ? (b.focus(), void 0) : (c.length ? c.focus() : a.focus(), void 0)
        };
        var A, B, C = !0;
        A = function () {
            if (C) {
                var b = a.mobile.urlHistory.getActive();
                if (b) {
                    var c = l.scrollTop();
                    b.lastScroll = c < a.mobile.minScrollBack ? a.mobile.defaultHomeScroll : c
                }
            }
        }, B = function () {
            setTimeout(A, 100)
        }, l.bind(a.support.pushState ? "popstate" : "hashchange", function () {
            C = !1
        }), l.one(a.support.pushState ? "popstate" : "hashchange", function () {
            C = !0
        }), l.one("pagecontainercreate", function () {
            a.mobile.pageContainer.bind("pagechange", function () {
                C = !0, l.unbind("scrollstop", B), l.bind("scrollstop", B)
            })
        }), l.bind("scrollstop", B), a.mobile._maybeDegradeTransition = a.mobile._maybeDegradeTransition || function (a) {
                return a
            }, a.mobile.resetActivePageHeight = function (b) {
            var c = a("." + a.mobile.activePageClass), d = parseFloat(c.css("padding-top")), e = parseFloat(c.css("padding-bottom")), f = parseFloat(c.css("border-top-width")), g = parseFloat(c.css("border-bottom-width"));
            b = "number" == typeof b ? b : y(), c.css("min-height", b - d - e - f - g)
        }, a.fn.animationComplete = function (b) {
            return a.support.cssTransitions ? a(this).one("webkitAnimationEnd animationend", b) : (setTimeout(b, 0), a(this))
        }, a.mobile.path = n, a.mobile.base = z, a.mobile.urlHistory = r, a.mobile.dialogHashKey = u, a.mobile.allowCrossDomainPages = !1, a.mobile._bindPageRemove = function () {
            var b = a(this);
            !b.data("mobile-page").options.domCache && b.is(":jqmData(external-page='true')") && b.bind("pagehide.remove", function () {
                var b = a(this), c = new a.Event("pageremove");
                b.trigger(c), c.isDefaultPrevented() || b.removeWithDependents()
            })
        }, a.mobile.loadPage = function (b, c) {
            var e = a.Deferred(), f = a.extend({}, a.mobile.loadPage.defaults, c), g = null, j = null, k = n.makeUrlAbsolute(b, i());
            f.data && "get" === f.type && (k = n.addSearchParams(k, f.data), f.data = d), f.data && "post" === f.type && (f.reloadPage = !0);
            var l = n.getFilePath(k), m = n.convertUrlToDataUrl(k);
            if (f.pageContainer = f.pageContainer || a.mobile.pageContainer, g = f.pageContainer.children("[data-" + a.mobile.ns + "url='" + m + "']"), 0 === g.length && m && !n.isPath(m) && (g = f.pageContainer.children("#" + m).attr("data-" + a.mobile.ns + "url", m).jqmData("url", m)), 0 === g.length)if (a.mobile.firstPage && n.isFirstPageUrl(l))a.mobile.firstPage.parent().length && (g = a(a.mobile.firstPage)); else if (n.isEmbeddedPage(l))return e.reject(k, c), e.promise();
            if (g.length) {
                if (!f.reloadPage)return h(g, f.role), e.resolve(k, c, g), z && !c.prefetch && z.set(b), e.promise();
                j = g
            }
            var o = f.pageContainer, p = new a.Event("pagebeforeload"), q = {
                url: b,
                absUrl: k,
                dataUrl: m,
                deferred: e,
                options: f
            };
            if (o.trigger(p, q), p.isDefaultPrevented())return e.promise();
            if (f.showLoadMsg)var r = setTimeout(function () {
                a.mobile.showPageLoadingMsg()
            }, f.loadMsgDelay), s = function () {
                clearTimeout(r), a.mobile.hidePageLoadingMsg()
            };
            return !z || "undefined" != typeof c && "undefined" != typeof c.prefetch || z.reset(), a.mobile.allowCrossDomainPages || n.isSameDomain(w, k) ? a.ajax({
                url: l,
                type: f.type,
                data: f.data,
                contentType: f.contentType,
                dataType: "html",
                success: function (d, i, o) {
                    var p = a("<div></div>"), r = d.match(/<title[^>]*>([^<]*)/) && RegExp.$1, t = new RegExp("(<[^>]+\\bdata-" + a.mobile.ns + "role=[\"']?page[\"']?[^>]*>)"), u = new RegExp("\\bdata-" + a.mobile.ns + "url=[\"']?([^\"'>]*)[\"']?");
                    if (t.test(d) && RegExp.$1 && u.test(RegExp.$1) && RegExp.$1 && (b = l = n.getFilePath(a("<div>" + RegExp.$1 + "</div>").text())), !z || "undefined" != typeof c && "undefined" != typeof c.prefetch || z.set(l), p.get(0).innerHTML = d, g = p.find(":jqmData(role='page'), :jqmData(role='dialog')").first(), g.length || (g = a("<div data-" + a.mobile.ns + "role='page'>" + (d.split(/<\/?body[^>]*>/gim)[1] || "") + "</div>")), r && !g.jqmData("title") && (~r.indexOf("&") && (r = a("<div>" + r + "</div>").text()), g.jqmData("title", r)), !a.support.dynamicBaseTag) {
                        var v = n.get(l);
                        g.find("[src], link[href], a[rel='external'], :jqmData(ajax='false'), a[target]").each(function () {
                            var b = a(this).is("[href]") ? "href" : a(this).is("[src]") ? "src" : "action", c = a(this).attr(b);
                            c = c.replace(location.protocol + "//" + location.host + location.pathname, ""), /^(\w+:|#|\/)/.test(c) || a(this).attr(b, v + c)
                        })
                    }
                    g.attr("data-" + a.mobile.ns + "url", n.convertUrlToDataUrl(l)).attr("data-" + a.mobile.ns + "external-page", !0).appendTo(f.pageContainer), g.one("pagecreate", a.mobile._bindPageRemove), h(g, f.role), k.indexOf("&" + a.mobile.subPageUrlKey) > -1 && (g = f.pageContainer.children("[data-" + a.mobile.ns + "url='" + m + "']")), f.showLoadMsg && s(), q.xhr = o, q.textStatus = i, q.page = g, f.pageContainer.trigger("pageload", q), e.resolve(k, c, g, j)
                },
                error: function (b, d, g) {
                    z && z.set(n.get()), q.xhr = b, q.textStatus = d, q.errorThrown = g;
                    var h = new a.Event("pageloadfailed");
                    f.pageContainer.trigger(h, q), h.isDefaultPrevented() || (f.showLoadMsg && (s(), a.mobile.showPageLoadingMsg(a.mobile.pageLoadErrorMessageTheme, a.mobile.pageLoadErrorMessage, !0), setTimeout(a.mobile.hidePageLoadingMsg, 1500)), e.reject(k, c))
                }
            }) : e.reject(k, c), e.promise()
        }, a.mobile.loadPage.defaults = {
            type: "get",
            data: d,
            reloadPage: !1,
            role: d,
            showLoadMsg: !1,
            pageContainer: d,
            loadMsgDelay: 50
        }, a.mobile.changePage = function (b, j) {
            if (t)return s.unshift(arguments), void 0;
            var k, l = a.extend({}, a.mobile.changePage.defaults, j);
            l.pageContainer = l.pageContainer || a.mobile.pageContainer, l.fromPage = l.fromPage || a.mobile.activePage, k = "string" == typeof b;
            var m = l.pageContainer, o = new a.Event("pagebeforechange"), p = {toPage: b, options: l};
            if (p.absUrl = k ? n.makeUrlAbsolute(b, i()) : b.data("absUrl"), m.trigger(o, p), !o.isDefaultPrevented()) {
                if (b = p.toPage, k = "string" == typeof b, t = !0, k)return l.target = b, a.mobile.loadPage(b, l).done(function (b, c, d, e) {
                    t = !1, c.duplicateCachedPage = e, d.data("absUrl", p.absUrl), a.mobile.changePage(d, c)
                }).fail(function () {
                    e(!0), f(), l.pageContainer.trigger("pagechangefailed", p)
                }), void 0;
                b[0] !== a.mobile.firstPage[0] || l.dataUrl || (l.dataUrl = w.hrefNoHash);
                var q = l.fromPage, v = l.dataUrl && n.convertUrlToDataUrl(l.dataUrl) || b.jqmData("url"), x = v, y = (n.getFilePath(v), r.getActive()), z = 0 === r.activeIndex, A = 0, B = c.title, C = "dialog" === l.role || "dialog" === b.jqmData("role");
                if (q && q[0] === b[0] && !l.allowSamePageTransition)return t = !1, m.trigger("pagechange", p), l.fromHashChange && r.direct({url: v}), void 0;
                h(b, l.role), l.fromHashChange && (A = "back" === j.direction ? -1 : 1);
                try {
                    c.activeElement && "body" !== c.activeElement.nodeName.toLowerCase() ? a(c.activeElement).blur() : a("input:focus, textarea:focus, select:focus").blur()
                } catch (D) {
                }
                var E = !1;
                C && y && (y.url && y.url.indexOf(u) > -1 && a.mobile.activePage && !a.mobile.activePage.is(".ui-dialog") && r.activeIndex > 0 && (l.changeHash = !1, E = !0), v = y.url || "", v += !E && v.indexOf("#") > -1 ? u : "#" + u, 0 === r.activeIndex && v === r.initialDst && (v += u));
                var F = y ? b.jqmData("title") || b.children(":jqmData(role='header')").find(".ui-title").text() : B;
                if (F && B === c.title && (B = F), b.jqmData("title") || b.jqmData("title", B), l.transition = l.transition || (A && !z ? y.transition : d) || (C ? a.mobile.defaultDialogTransition : a.mobile.defaultPageTransition), !A && E && (r.getActive().pageUrl = x), v && !l.fromHashChange) {
                    var G;
                    !n.isPath(v) && v.indexOf("#") < 0 && (v = "#" + v), G = {
                        transition: l.transition,
                        title: B,
                        pageUrl: x,
                        role: l.role
                    }, l.changeHash !== !1 && a.mobile.hashListeningEnabled ? a.mobile.navigate(v, G, !0) : b[0] !== a.mobile.firstPage[0] && a.mobile.navigate.history.add(v, G)
                }
                c.title = B, a.mobile.activePage = b, l.reverse = l.reverse || 0 > A, g(b, q, l.transition, l.reverse).done(function (c, d, g, h, i) {
                    e(), l.duplicateCachedPage && l.duplicateCachedPage.remove(), i || a.mobile.focusPage(b), f(), m.trigger("pagechange", p)
                })
            }
        }, a.mobile.changePage.defaults = {
            transition: d,
            reverse: !1,
            changeHash: !0,
            fromHashChange: !1,
            role: d,
            duplicateCachedPage: d,
            pageContainer: d,
            showLoadMsg: !0,
            dataUrl: d,
            fromPage: d,
            allowSamePageTransition: !1
        }, a.mobile.navreadyDeferred = a.Deferred(), a.mobile._registerInternalEvents = function () {
            var c = function (b, c) {
                var d, e, f, g, h = !0;
                return !a.mobile.ajaxEnabled || b.is(":jqmData(ajax='false')") || !b.jqmHijackable().length || b.attr("target") ? !1 : (d = b.attr("action"), g = (b.attr("method") || "get").toLowerCase(), d || (d = k(b), "get" === g && (d = n.parseUrl(d).hrefNoSearch), d === x.hrefNoHash && (d = w.hrefNoSearch)), d = n.makeUrlAbsolute(d, k(b)), n.isExternal(d) && !n.isPermittedCrossDomainRequest(w, d) ? !1 : (c || (e = b.serializeArray(), o && o[0].form === b[0] && (f = o.attr("name"), f && (a.each(e, function (a, b) {
                    return b.name === f ? (f = "", !1) : void 0
                }), f && e.push({name: f, value: o.attr("value")}))), h = {
                    url: d,
                    options: {
                        type: g,
                        data: a.param(e),
                        transition: b.jqmData("transition"),
                        reverse: "reverse" === b.jqmData("direction"),
                        reloadPage: !0
                    }
                }), h))
            };
            a.mobile.document.delegate("form", "submit", function (b) {
                var d = c(a(this));
                d && (a.mobile.changePage(d.url, d.options), b.preventDefault())
            }), a.mobile.document.bind("vclick", function (b) {
                var d, f, g = b.target, h = !1;
                if (!(b.which > 1) && a.mobile.linkBindingEnabled) {
                    if (o = a(g), a.data(g, "mobile-button")) {
                        if (!c(a(g).closest("form"), !0))return;
                        g.parentNode && (g = g.parentNode)
                    } else {
                        if (g = j(g), !g || "#" === n.parseUrl(g.getAttribute("href") || "#").hash)return;
                        if (!a(g).jqmHijackable().length)return
                    }
                    ~g.className.indexOf("ui-link-inherit") ? g.parentNode && (f = a.data(g.parentNode, "buttonElements")) : f = a.data(g, "buttonElements"), f ? g = f.outer : h = !0, d = a(g), h && (d = d.closest(".ui-btn")), d.length > 0 && !d.hasClass("ui-disabled") && (e(!0), p = d, p.addClass(a.mobile.activeBtnClass))
                }
            }), a.mobile.document.bind("click", function (c) {
                if (a.mobile.linkBindingEnabled && !c.isDefaultPrevented()) {
                    var f, g = j(c.target), h = a(g);
                    if (g && !(c.which > 1) && h.jqmHijackable().length) {
                        if (f = function () {
                                b.setTimeout(function () {
                                    e(!0)
                                }, 200)
                            }, h.is(":jqmData(rel='back')"))return a.mobile.back(), !1;
                        var i = k(h), l = n.makeUrlAbsolute(h.attr("href") || "#", i);
                        if (!a.mobile.ajaxEnabled && !n.isEmbeddedPage(l))return f(), void 0;
                        if (-1 !== l.search("#")) {
                            if (l = l.replace(/[^#]*#/, ""), !l)return c.preventDefault(), void 0;
                            l = n.isPath(l) ? n.makeUrlAbsolute(l, i) : n.makeUrlAbsolute("#" + l, w.hrefNoHash)
                        }
                        var m = h.is("[rel='external']") || h.is(":jqmData(ajax='false')") || h.is("[target]"), o = m || n.isExternal(l) && !n.isPermittedCrossDomainRequest(w, l);
                        if (o)return f(), void 0;
                        var p = h.jqmData("transition"), q = "reverse" === h.jqmData("direction") || h.jqmData("back"), r = h.attr("data-" + a.mobile.ns + "rel") || d;
                        a.mobile.changePage(l, {transition: p, reverse: q, role: r, link: h}), c.preventDefault()
                    }
                }
            }), a.mobile.document.delegate(".ui-page", "pageshow.prefetch", function () {
                var b = [];
                a(this).find("a:jqmData(prefetch)").each(function () {
                    var c = a(this), d = c.attr("href");
                    d && -1 === a.inArray(d, b) && (b.push(d), a.mobile.loadPage(d, {
                        role: c.attr("data-" + a.mobile.ns + "rel"),
                        prefetch: !0
                    }))
                })
            }), a.mobile._handleHashChange = function (c, e) {
                var f = n.stripHash(c), g = 0 === a.mobile.urlHistory.stack.length ? "none" : d, h = {
                    changeHash: !1,
                    fromHashChange: !0,
                    reverse: "back" === e.direction
                };
                if (a.extend(h, e, {transition: (r.getLast() || {}).transition || g}), r.activeIndex > 0 && f.indexOf(u) > -1 && r.initialDst !== f) {
                    if (a.mobile.activePage && !a.mobile.activePage.is(".ui-dialog"))return "back" === e.direction ? a.mobile.back() : b.history.forward(), void 0;
                    f = e.pageUrl;
                    var i = a.mobile.urlHistory.getActive();
                    a.extend(h, {role: i.role, transition: i.transition, reverse: "back" === e.direction})
                }
                f ? (f = n.isPath(f) ? f : n.makeUrlAbsolute("#" + f, x), f === n.makeUrlAbsolute("#" + r.initialDst, x) && r.stack.length && r.stack[0].url !== r.initialDst.replace(u, "") && (f = a.mobile.firstPage), a.mobile.changePage(f, h)) : a.mobile.changePage(a.mobile.firstPage, h)
            }, l.bind("navigate", function (b, c) {
                var d;
                b.originalEvent && b.originalEvent.isDefaultPrevented() || (d = a.event.special.navigate.originalEventName.indexOf("hashchange") > -1 ? c.state.hash : c.state.url, d || (d = a.mobile.path.parseLocation().hash), d && "#" !== d && 0 !== d.indexOf("#" + a.mobile.path.uiStateKey) || (d = location.href), a.mobile._handleHashChange(d, c.state))
            }), a.mobile.document.bind("pageshow", a.mobile.resetActivePageHeight), a.mobile.window.bind("throttledresize", a.mobile.resetActivePageHeight)
        }, a(function () {
            q.resolve()
        }), a.when(q, a.mobile.navreadyDeferred).done(function () {
            a.mobile._registerInternalEvents()
        })
    }(a), function (a) {
        a.mobile.transitionFallbacks.flip = "fade"
    }(a, this), function (a) {
        a.mobile.transitionFallbacks.flow = "fade"
    }(a, this), function (a) {
        a.mobile.transitionFallbacks.pop = "fade"
    }(a, this), function (a) {
        a.mobile.transitionHandlers.slide = a.mobile.transitionHandlers.simultaneous, a.mobile.transitionFallbacks.slide = "fade"
    }(a, this), function (a) {
        a.mobile.transitionFallbacks.slidedown = "fade"
    }(a, this), function (a) {
        a.mobile.transitionFallbacks.slidefade = "fade"
    }(a, this), function (a) {
        a.mobile.transitionFallbacks.slideup = "fade"
    }(a, this), function (a) {
        a.mobile.transitionFallbacks.turn = "fade"
    }(a, this), function (a) {
        a.mobile.page.prototype.options.degradeInputs = {
            color: !1,
            date: !1,
            datetime: !1,
            "datetime-local": !1,
            email: !1,
            month: !1,
            number: !1,
            range: "number",
            search: "text",
            tel: !1,
            time: !1,
            url: !1,
            week: !1
        }, a.mobile.document.bind("pagecreate create", function (b) {
            var c, d = a.mobile.closestPageData(a(b.target));
            d && (c = d.options, a(b.target).find("input").not(d.keepNativeSelector()).each(function () {
                var b = a(this), d = this.getAttribute("type"), e = c.degradeInputs[d] || "text";
                if (c.degradeInputs[d]) {
                    var f = a("<div>").html(b.clone()).html(), g = f.indexOf(" type=") > -1, h = g ? /\s+type=["']?\w+['"]?/ : /\/?>/, i = ' type="' + e + '" data-' + a.mobile.ns + 'type="' + d + '"' + (g ? "" : ">");
                    b.replaceWith(f.replace(h, i))
                }
            }))
        })
    }(a), function (a) {
        a.widget("mobile.dialog", a.mobile.widget, {
            options: {
                closeBtn: "left",
                closeBtnText: "Close",
                overlayTheme: "a",
                corners: !0,
                initSelector: ":jqmData(role='dialog')"
            }, _handlePageBeforeShow: function () {
                this._isCloseable = !0, this.options.overlayTheme && this.element.page("removeContainerBackground").page("setContainerBackground", this.options.overlayTheme)
            }, _handlePageBeforeHide: function () {
                this._isCloseable = !1
            }, _create: function () {
                var b = this.element, c = this.options.corners ? " ui-corner-all" : "", d = a("<div/>", {
                    role: "dialog",
                    "class": "ui-dialog-contain ui-overlay-shadow" + c
                });
                b.addClass("ui-dialog ui-overlay-" + this.options.overlayTheme), b.wrapInner(d), b.bind("vclick submit", function (b) {
                    var c, d = a(b.target).closest("vclick" === b.type ? "a" : "form");
                    d.length && !d.jqmData("transition") && (c = a.mobile.urlHistory.getActive() || {}, d.attr("data-" + a.mobile.ns + "transition", c.transition || a.mobile.defaultDialogTransition).attr("data-" + a.mobile.ns + "direction", "reverse"))
                }), this._on(b, {
                    pagebeforeshow: "_handlePageBeforeShow",
                    pagebeforehide: "_handlePageBeforeHide"
                }), a.extend(this, {_createComplete: !1}), this._setCloseBtn(this.options.closeBtn)
            }, _setCloseBtn: function (b) {
                var c, d, e = this;
                this._headerCloseButton && (this._headerCloseButton.remove(), this._headerCloseButton = null), "none" !== b && (d = "left" === b ? "left" : "right", c = a("<a href='#' class='ui-btn-" + d + "' data-" + a.mobile.ns + "icon='delete' data-" + a.mobile.ns + "iconpos='notext'>" + this.options.closeBtnText + "</a>"), this.element.children().find(":jqmData(role='header')").first().prepend(c), this._createComplete && a.fn.buttonMarkup && c.buttonMarkup(), this._createComplete = !0, c.bind("click", function () {
                    e.close()
                }), this._headerCloseButton = c)
            }, _setOption: function (a, b) {
                "closeBtn" === a && this._setCloseBtn(b), this._super(a, b)
            }, close: function () {
                var b, c, d = a.mobile.navigate.history;
                this._isCloseable && (this._isCloseable = !1, a.mobile.hashListeningEnabled && d.activeIndex > 0 ? a.mobile.back() : (b = Math.max(0, d.activeIndex - 1), c = d.stack[b].pageUrl || d.stack[b].url, d.previousIndex = d.activeIndex, d.activeIndex = b, a.mobile.path.isPath(c) || (c = a.mobile.path.makeUrlAbsolute("#" + c)), a.mobile.changePage(c, {
                    direction: "back",
                    changeHash: !1,
                    fromHashChange: !0
                })))
            }
        }), a.mobile.document.delegate(a.mobile.dialog.prototype.options.initSelector, "pagecreate", function () {
            a.mobile.dialog.prototype.enhance(this)
        })
    }(a, this), function (a) {
        a.mobile.page.prototype.options.backBtnText = "Back", a.mobile.page.prototype.options.addBackBtn = !1, a.mobile.page.prototype.options.backBtnTheme = null, a.mobile.page.prototype.options.headerTheme = "a", a.mobile.page.prototype.options.footerTheme = "a", a.mobile.page.prototype.options.contentTheme = null, a.mobile.document.bind("pagecreate", function (b) {
            var c = a(b.target), d = c.data("mobile-page").options, e = c.jqmData("role"), f = d.theme;
            a(":jqmData(role='header'), :jqmData(role='footer'), :jqmData(role='content')", c).jqmEnhanceable().each(function () {
                var b, g, h, i, j = a(this), k = j.jqmData("role"), l = j.jqmData("theme"), m = l || d.contentTheme || "dialog" === e && f;
                if (j.addClass("ui-" + k), "header" === k || "footer" === k) {
                    var n = l || ("header" === k ? d.headerTheme : d.footerTheme) || f;
                    j.addClass("ui-bar-" + n).attr("role", "header" === k ? "banner" : "contentinfo"), "header" === k && (b = j.children("a, button"), g = b.hasClass("ui-btn-left"), h = b.hasClass("ui-btn-right"), g = g || b.eq(0).not(".ui-btn-right").addClass("ui-btn-left").length, h = h || b.eq(1).addClass("ui-btn-right").length), d.addBackBtn && "header" === k && a(".ui-page").length > 1 && c.jqmData("url") !== a.mobile.path.stripHash(location.hash) && !g && (i = a("<a href='javascript:void(0);' class='ui-btn-left' data-" + a.mobile.ns + "rel='back' data-" + a.mobile.ns + "icon='arrow-l'>" + d.backBtnText + "</a>").attr("data-" + a.mobile.ns + "theme", d.backBtnTheme || n).prependTo(j)), j.children("h1, h2, h3, h4, h5, h6").addClass("ui-title").attr({
                        role: "heading",
                        "aria-level": "1"
                    })
                } else"content" === k && (m && j.addClass("ui-body-" + m), j.attr("role", "main"))
            })
        })
    }(a), function (a, b) {
        function d(a) {
            for (var b; a && (b = "string" == typeof a.className && a.className + " ", !(b && b.indexOf("ui-btn ") > -1 && b.indexOf("ui-disabled ") < 0));)a = a.parentNode;
            return a
        }

        function e(d, e, f, g, h) {
            var i = a.data(d[0], "buttonElements");
            d.removeClass(e).addClass(f), i && (i.bcls = a(c.createElement("div")).addClass(i.bcls + " " + f).removeClass(e).attr("class"), g !== b && (i.hover = g), i.state = h)
        }

        var f = function (a, c) {
            var d = a.getAttribute(c);
            return "true" === d ? !0 : "false" === d ? !1 : null === d ? b : d
        };
        a.fn.buttonMarkup = function (d) {
            var e, h = this, i = "data-" + a.mobile.ns;
            d = d && "object" === a.type(d) ? d : {};
            for (var j = 0; j < h.length; j++) {
                var k, l, m, n, o, p, q = h.eq(j), r = q[0], s = a.extend({}, a.fn.buttonMarkup.defaults, {
                    icon: d.icon !== b ? d.icon : f(r, i + "icon"),
                    iconpos: d.iconpos !== b ? d.iconpos : f(r, i + "iconpos"),
                    theme: d.theme !== b ? d.theme : f(r, i + "theme") || a.mobile.getInheritedTheme(q, "c"),
                    inline: d.inline !== b ? d.inline : f(r, i + "inline"),
                    shadow: d.shadow !== b ? d.shadow : f(r, i + "shadow"),
                    corners: d.corners !== b ? d.corners : f(r, i + "corners"),
                    iconshadow: d.iconshadow !== b ? d.iconshadow : f(r, i + "iconshadow"),
                    mini: d.mini !== b ? d.mini : f(r, i + "mini")
                }, d), t = "ui-btn-inner", u = "ui-btn-text", v = !1, w = "up";
                for (e in s)s[e] === b || null === s[e] ? q.removeAttr(i + e) : r.setAttribute(i + e, s[e]);
                for (p = a.data("INPUT" === r.tagName || "BUTTON" === r.tagName ? r.parentNode : r, "buttonElements"), p ? (r = p.outer, q = a(r), m = p.inner, n = p.text, a(p.icon).remove(), p.icon = null, v = p.hover, w = p.state) : (m = c.createElement(s.wrapperEls), n = c.createElement(s.wrapperEls)), o = s.icon ? c.createElement("span") : null, g && !p && g(), s.theme || (s.theme = a.mobile.getInheritedTheme(q, "c")), k = "ui-btn ", k += v ? "ui-btn-hover-" + s.theme : "", k += w ? " ui-btn-" + w + "-" + s.theme : "", k += s.shadow ? " ui-shadow" : "", k += s.corners ? " ui-btn-corner-all" : "", s.mini !== b && (k += s.mini === !0 ? " ui-mini" : " ui-fullsize"), s.inline !== b && (k += s.inline === !0 ? " ui-btn-inline" : " ui-btn-block"), s.icon && (s.icon = "ui-icon-" + s.icon, s.iconpos = s.iconpos || "left", l = "ui-icon " + s.icon, s.iconshadow && (l += " ui-icon-shadow")), s.iconpos && (k += " ui-btn-icon-" + s.iconpos, "notext" !== s.iconpos || q.attr("title") || q.attr("title", q.getEncodedText())), p && q.removeClass(p.bcls || ""), q.removeClass("ui-link").addClass(k), m.className = t, n.className = u, p || m.appendChild(n), o && (o.className = l, p && p.icon || (o.innerHTML = "&#160;", m.appendChild(o))); r.firstChild && !p;)n.appendChild(r.firstChild);
                p || r.appendChild(m), p = {
                    hover: v,
                    state: w,
                    bcls: k,
                    outer: r,
                    inner: m,
                    text: n,
                    icon: o
                }, a.data(r, "buttonElements", p), a.data(m, "buttonElements", p), a.data(n, "buttonElements", p), o && a.data(o, "buttonElements", p)
            }
            return this
        }, a.fn.buttonMarkup.defaults = {corners: !0, shadow: !0, iconshadow: !0, wrapperEls: "span"};
        var g = function () {
            var c, f, h = a.mobile.buttonMarkup.hoverDelay;
            a.mobile.document.bind({
                "vmousedown vmousecancel vmouseup vmouseover vmouseout focus blur scrollstart": function (g) {
                    var i, j = a(d(g.target)), k = g.originalEvent && /^touch/.test(g.originalEvent.type), l = g.type;
                    j.length && (i = j.attr("data-" + a.mobile.ns + "theme"), "vmousedown" === l ? k ? c = setTimeout(function () {
                        e(j, "ui-btn-up-" + i, "ui-btn-down-" + i, b, "down")
                    }, h) : e(j, "ui-btn-up-" + i, "ui-btn-down-" + i, b, "down") : "vmousecancel" === l || "vmouseup" === l ? e(j, "ui-btn-down-" + i, "ui-btn-up-" + i, b, "up") : "vmouseover" === l || "focus" === l ? k ? f = setTimeout(function () {
                        e(j, "ui-btn-up-" + i, "ui-btn-hover-" + i, !0, "")
                    }, h) : e(j, "ui-btn-up-" + i, "ui-btn-hover-" + i, !0, "") : ("vmouseout" === l || "blur" === l || "scrollstart" === l) && (e(j, "ui-btn-hover-" + i + " ui-btn-down-" + i, "ui-btn-up-" + i, !1, "up"), c && clearTimeout(c), f && clearTimeout(f)))
                }, "focusin focus": function (b) {
                    a(d(b.target)).addClass(a.mobile.focusClass)
                }, "focusout blur": function (b) {
                    a(d(b.target)).removeClass(a.mobile.focusClass)
                }
            }), g = null
        };
        a.mobile.document.bind("pagecreate create", function (b) {
            a(":jqmData(role='button'), .ui-bar > a, .ui-header > a, .ui-footer > a, .ui-bar > :jqmData(role='controlgroup') > a", b.target).jqmEnhanceable().not("button, input, .ui-btn, :jqmData(role='none'), :jqmData(role='nojs')").buttonMarkup()
        })
    }(a), function (a, b) {
        a.widget("mobile.collapsible", a.mobile.widget, {
            options: {
                expandCueText: " click to expand contents",
                collapseCueText: " click to collapse contents",
                collapsed: !0,
                heading: "h1,h2,h3,h4,h5,h6,legend",
                collapsedIcon: "plus",
                expandedIcon: "minus",
                iconpos: "left",
                theme: null,
                contentTheme: null,
                inset: !0,
                corners: !0,
                mini: !1,
                initSelector: ":jqmData(role='collapsible')"
            }, _create: function () {
                var c = this.element, d = this.options, e = c.addClass("ui-collapsible"), f = c.children(d.heading).first(), g = e.wrapInner("<div class='ui-collapsible-content'></div>").children(".ui-collapsible-content"), h = c.closest(":jqmData(role='collapsible-set')").addClass("ui-collapsible-set"), i = "";
                f.is("legend") && (f = a("<div role='heading'>" + f.html() + "</div>").insertBefore(f), f.next().remove()), h.length ? (d.theme || (d.theme = h.jqmData("theme") || a.mobile.getInheritedTheme(h, "c")), d.contentTheme || (d.contentTheme = h.jqmData("content-theme")), d.collapsedIcon = c.jqmData("collapsed-icon") || h.jqmData("collapsed-icon") || d.collapsedIcon, d.expandedIcon = c.jqmData("expanded-icon") || h.jqmData("expanded-icon") || d.expandedIcon, d.iconpos = c.jqmData("iconpos") || h.jqmData("iconpos") || d.iconpos, d.inset = h.jqmData("inset") !== b ? h.jqmData("inset") : !0, d.corners = !1, d.mini || (d.mini = h.jqmData("mini"))) : d.theme || (d.theme = a.mobile.getInheritedTheme(c, "c")), d.inset && (i += " ui-collapsible-inset", d.corners && (i += " ui-corner-all")), d.contentTheme && (i += " ui-collapsible-themed-content", g.addClass("ui-body-" + d.contentTheme)), "" !== i && e.addClass(i), f.insertBefore(g).addClass("ui-collapsible-heading").append("<span class='ui-collapsible-heading-status'></span>").wrapInner("<a href='#' class='ui-collapsible-heading-toggle'></a>").find("a").first().buttonMarkup({
                    shadow: !1,
                    corners: !1,
                    iconpos: d.iconpos,
                    icon: d.collapsedIcon,
                    mini: d.mini,
                    theme: d.theme
                }), e.bind("expand collapse", function (b) {
                    if (!b.isDefaultPrevented()) {
                        var c = a(this), e = "collapse" === b.type;
                        b.preventDefault(), f.toggleClass("ui-collapsible-heading-collapsed", e).find(".ui-collapsible-heading-status").text(e ? d.expandCueText : d.collapseCueText).end().find(".ui-icon").toggleClass("ui-icon-" + d.expandedIcon, !e).toggleClass("ui-icon-" + d.collapsedIcon, e || d.expandedIcon === d.collapsedIcon).end().find("a").first().removeClass(a.mobile.activeBtnClass), c.toggleClass("ui-collapsible-collapsed", e), g.toggleClass("ui-collapsible-content-collapsed", e).attr("aria-hidden", e), g.trigger("updatelayout")
                    }
                }).trigger(d.collapsed ? "collapse" : "expand"), f.bind("tap", function () {
                    f.find("a").first().addClass(a.mobile.activeBtnClass)
                }).bind("click", function (a) {
                    var b = f.is(".ui-collapsible-heading-collapsed") ? "expand" : "collapse";
                    e.trigger(b), a.preventDefault(), a.stopPropagation()
                })
            }
        }), a.mobile.document.bind("pagecreate create", function (b) {
            a.mobile.collapsible.prototype.enhanceWithin(b.target)
        })
    }(a), function (a) {
        a.mobile.behaviors.addFirstLastClasses = {
            _getVisibles: function (a, b) {
                var c;
                return b ? c = a.not(".ui-screen-hidden") : (c = a.filter(":visible"), 0 === c.length && (c = a.not(".ui-screen-hidden"))), c
            }, _addFirstLastClasses: function (a, b, c) {
                a.removeClass("ui-first-child ui-last-child"), b.eq(0).addClass("ui-first-child").end().last().addClass("ui-last-child"), c || this.element.trigger("updatelayout")
            }
        }
    }(a), function (a, b) {
        a.widget("mobile.collapsibleset", a.mobile.widget, a.extend({
            options: {initSelector: ":jqmData(role='collapsible-set')"}, _create: function () {
                var c = this.element.addClass("ui-collapsible-set"), d = this.options;
                d.theme || (d.theme = a.mobile.getInheritedTheme(c, "c")), d.contentTheme || (d.contentTheme = c.jqmData("content-theme")), d.corners || (d.corners = c.jqmData("corners")), c.jqmData("inset") !== b && (d.inset = c.jqmData("inset")), d.inset = d.inset !== b ? d.inset : !0, d.corners = d.corners !== b ? d.corners : !0, d.corners && d.inset && c.addClass("ui-corner-all"), c.jqmData("collapsiblebound") || c.jqmData("collapsiblebound", !0).bind("expand", function (b) {
                    var c = a(b.target).closest(".ui-collapsible");
                    c.parent().is(":jqmData(role='collapsible-set')") && c.siblings(".ui-collapsible").trigger("collapse")
                })
            }, _init: function () {
                var a = this.element, b = a.children(":jqmData(role='collapsible')"), c = b.filter(":jqmData(collapsed='false')");
                this._refresh("true"), c.trigger("expand")
            }, _refresh: function (b) {
                var c = this.element.children(":jqmData(role='collapsible')");
                a.mobile.collapsible.prototype.enhance(c.not(".ui-collapsible")), this._addFirstLastClasses(c, this._getVisibles(c, b), b)
            }, refresh: function () {
                this._refresh(!1)
            }
        }, a.mobile.behaviors.addFirstLastClasses)), a.mobile.document.bind("pagecreate create", function (b) {
            a.mobile.collapsibleset.prototype.enhanceWithin(b.target)
        })
    }(a), function (a) {
        a.fn.fieldcontain = function () {
            return this.addClass("ui-field-contain ui-body ui-br").contents().filter(function () {
                return 3 === this.nodeType && !/\S/.test(this.nodeValue)
            }).remove()
        }, a(c).bind("pagecreate create", function (b) {
            a(":jqmData(role='fieldcontain')", b.target).jqmEnhanceable().fieldcontain()
        })
    }(a), function (a) {
        a.fn.grid = function (b) {
            return this.each(function () {
                var c, d = a(this), e = a.extend({grid: null}, b), f = d.children(), g = {
                    solo: 1,
                    a: 2,
                    b: 3,
                    c: 4,
                    d: 5
                }, h = e.grid;
                if (!h)if (f.length <= 5)for (var i in g)g[i] === f.length && (h = i); else h = "a", d.addClass("ui-grid-duo");
                c = g[h], d.addClass("ui-grid-" + h), f.filter(":nth-child(" + c + "n+1)").addClass("ui-block-a"), c > 1 && f.filter(":nth-child(" + c + "n+2)").addClass("ui-block-b"), c > 2 && f.filter(":nth-child(" + c + "n+3)").addClass("ui-block-c"), c > 3 && f.filter(":nth-child(" + c + "n+4)").addClass("ui-block-d"), c > 4 && f.filter(":nth-child(" + c + "n+5)").addClass("ui-block-e")
            })
        }
    }(a), function (a, b) {
        a.widget("mobile.navbar", a.mobile.widget, {
            options: {
                iconpos: "top",
                grid: null,
                initSelector: ":jqmData(role='navbar')"
            }, _create: function () {
                var d = this.element, e = d.find("a"), f = e.filter(":jqmData(icon)").length ? this.options.iconpos : b;
                d.addClass("ui-navbar ui-mini").attr("role", "navigation").find("ul").jqmEnhanceable().grid({grid: this.options.grid}), e.buttonMarkup({
                    corners: !1,
                    shadow: !1,
                    inline: !0,
                    iconpos: f
                }), d.delegate("a", "vclick", function (b) {
                    var d = a(b.target).is("a") ? a(this) : a(this).parent("a");
                    if (!d.is(".ui-disabled, .ui-btn-active")) {
                        e.removeClass(a.mobile.activeBtnClass), a(this).addClass(a.mobile.activeBtnClass);
                        var f = a(this);
                        a(c).one("pagehide", function () {
                            f.removeClass(a.mobile.activeBtnClass)
                        })
                    }
                }), d.closest(".ui-page").bind("pagebeforeshow", function () {
                    e.filter(".ui-state-persist").addClass(a.mobile.activeBtnClass)
                })
            }
        }), a.mobile.document.bind("pagecreate create", function (b) {
            a.mobile.navbar.prototype.enhanceWithin(b.target)
        })
    }(a), function (a) {
        var b = {};
        a.widget("mobile.listview", a.mobile.widget, a.extend({
            options: {
                theme: null,
                countTheme: "c",
                headerTheme: "b",
                dividerTheme: "b",
                icon: "arrow-r",
                splitIcon: "arrow-r",
                splitTheme: "b",
                corners: !0,
                shadow: !0,
                inset: !1,
                initSelector: ":jqmData(role='listview')"
            }, _create: function () {
                var a = this, b = "";
                b += a.options.inset ? " ui-listview-inset" : "", a.options.inset && (b += a.options.corners ? " ui-corner-all" : "", b += a.options.shadow ? " ui-shadow" : ""), a.element.addClass(function (a, c) {
                    return c + " ui-listview" + b
                }), a.refresh(!0)
            }, _findFirstElementByTagName: function (a, b, c, d) {
                var e = {};
                for (e[c] = e[d] = !0; a;) {
                    if (e[a.nodeName])return a;
                    a = a[b]
                }
                return null
            }, _getChildrenByTagName: function (b, c, d) {
                var e = [], f = {};
                for (f[c] = f[d] = !0, b = b.firstChild; b;)f[b.nodeName] && e.push(b), b = b.nextSibling;
                return a(e)
            }, _addThumbClasses: function (b) {
                var c, d, e = b.length;
                for (c = 0; e > c; c++)d = a(this._findFirstElementByTagName(b[c].firstChild, "nextSibling", "img", "IMG")), d.length && (d.addClass("ui-li-thumb"), a(this._findFirstElementByTagName(d[0].parentNode, "parentNode", "li", "LI")).addClass(d.is(".ui-li-icon") ? "ui-li-has-icon" : "ui-li-has-thumb"))
            }, refresh: function (b) {
                this.parentPage = this.element.closest(".ui-page"), this._createSubPages();
                var d, e, f, g, h, i, j, k, l, m, n, o, p = this.options, q = this.element, r = q.jqmData("dividertheme") || p.dividerTheme, s = q.jqmData("splittheme"), t = q.jqmData("spliticon"), u = q.jqmData("icon"), v = this._getChildrenByTagName(q[0], "li", "LI"), w = !!a.nodeName(q[0], "ol"), x = !a.support.cssPseudoElement, y = q.attr("start"), z = {};
                w && x && q.find(".ui-li-dec").remove(), w && (y || 0 === y ? x ? j = parseInt(y, 10) : (k = parseInt(y, 10) - 1, q.css("counter-reset", "listnumbering " + k)) : x && (j = 1)), p.theme || (p.theme = a.mobile.getInheritedTheme(this.element, "c"));
                for (var A = 0, B = v.length; B > A; A++) {
                    if (d = v.eq(A), e = "ui-li", b || !d.hasClass("ui-li")) {
                        f = d.jqmData("theme") || p.theme, g = this._getChildrenByTagName(d[0], "a", "A");
                        var C = "list-divider" === d.jqmData("role");
                        g.length && !C ? (n = d.jqmData("icon"), d.buttonMarkup({
                            wrapperEls: "div",
                            shadow: !1,
                            corners: !1,
                            iconpos: "right",
                            icon: g.length > 1 || n === !1 ? !1 : n || u || p.icon,
                            theme: f
                        }), n !== !1 && 1 === g.length && d.addClass("ui-li-has-arrow"), g.first().removeClass("ui-link").addClass("ui-link-inherit"), g.length > 1 && (e += " ui-li-has-alt", h = g.last(), i = s || h.jqmData("theme") || p.splitTheme, o = h.jqmData("icon"), h.appendTo(d).attr("title", a.trim(h.getEncodedText())).addClass("ui-li-link-alt").empty().buttonMarkup({
                            shadow: !1,
                            corners: !1,
                            theme: f,
                            icon: !1,
                            iconpos: "notext"
                        }).find(".ui-btn-inner").append(a(c.createElement("span")).buttonMarkup({
                            shadow: !0,
                            corners: !0,
                            theme: i,
                            iconpos: "notext",
                            icon: o || n || t || p.splitIcon
                        })))) : C ? (e += " ui-li-divider ui-bar-" + (d.jqmData("theme") || r), d.attr("role", "heading"), w && (y || 0 === y ? x ? j = parseInt(y, 10) : (l = parseInt(y, 10) - 1, d.css("counter-reset", "listnumbering " + l)) : x && (j = 1))) : e += " ui-li-static ui-btn-up-" + f
                    }
                    w && x && e.indexOf("ui-li-divider") < 0 && (m = e.indexOf("ui-li-static") > 0 ? d : d.find(".ui-link-inherit"), m.addClass("ui-li-jsnumbering").prepend("<span class='ui-li-dec'>" + j++ + ". </span>")), z[e] || (z[e] = []), z[e].push(d[0])
                }
                for (e in z)a(z[e]).addClass(e).children(".ui-btn-inner").addClass(e);
                q.find("h1, h2, h3, h4, h5, h6").addClass("ui-li-heading").end().find("p, dl").addClass("ui-li-desc").end().find(".ui-li-aside").each(function () {
                    var b = a(this);
                    b.prependTo(b.parent())
                }).end().find(".ui-li-count").each(function () {
                    a(this).closest("li").addClass("ui-li-has-count")
                }).addClass("ui-btn-up-" + (q.jqmData("counttheme") || this.options.countTheme) + " ui-btn-corner-all"), this._addThumbClasses(v), this._addThumbClasses(q.find(".ui-link-inherit")), this._addFirstLastClasses(v, this._getVisibles(v, b), b), this._trigger("afterrefresh")
            }, _idStringEscape: function (a) {
                return a.replace(/[^a-zA-Z0-9]/g, "-")
            }, _createSubPages: function () {
                var c, d = this.element, e = d.closest(".ui-page"), f = e.jqmData("url"), g = f || e[0][a.expando], h = d.attr("id"), i = this.options, j = "data-" + a.mobile.ns, k = this, l = e.find(":jqmData(role='footer')").jqmData("id");
                if ("undefined" == typeof b[g] && (b[g] = -1), h = h || ++b[g], a(d.find("li>ul, li>ol").toArray().reverse()).each(function (b) {
                        var e, g, k = a(this), m = k.attr("id") || h + "-" + b, n = k.parent(), o = a(k.prevAll().toArray().reverse()), p = o.length ? o : a("<span>" + a.trim(n.contents()[0].nodeValue) + "</span>"), q = p.first().getEncodedText(), r = (f || "") + "&" + a.mobile.subPageUrlKey + "=" + m, s = k.jqmData("theme") || i.theme, t = k.jqmData("counttheme") || d.jqmData("counttheme") || i.countTheme;
                        c = !0, e = k.detach().wrap("<div " + j + "role='page' " + j + "url='" + r + "' " + j + "theme='" + s + "' " + j + "count-theme='" + t + "'><div " + j + "role='content'></div></div>").parent().before("<div " + j + "role='header' " + j + "theme='" + i.headerTheme + "'><div class='ui-title'>" + q + "</div></div>").after(l ? a("<div " + j + "role='footer' " + j + "id='" + l + "'>") : "").parent().appendTo(a.mobile.pageContainer), e.page(), g = n.find("a:first"), g.length || (g = a("<a/>").html(p || q).prependTo(n.empty())), g.attr("href", "#" + r)
                    }).listview(), c && e.is(":jqmData(external-page='true')") && e.data("mobile-page").options.domCache === !1) {
                    var m = function (b, c) {
                        var d, g = c.nextPage, h = new a.Event("pageremove");
                        c.nextPage && (d = g.jqmData("url"), 0 !== d.indexOf(f + "&" + a.mobile.subPageUrlKey) && (k.childPages().remove(), e.trigger(h), h.isDefaultPrevented() || e.removeWithDependents()))
                    };
                    e.unbind("pagehide.remove").bind("pagehide.remove", m)
                }
            }, childPages: function () {
                var b = this.parentPage.jqmData("url");
                return a(":jqmData(url^='" + b + "&" + a.mobile.subPageUrlKey + "')")
            }
        }, a.mobile.behaviors.addFirstLastClasses)), a.mobile.document.bind("pagecreate create", function (b) {
            a.mobile.listview.prototype.enhanceWithin(b.target)
        })
    }(a), function (a) {
        var b = a("meta[name=viewport]"), c = b.attr("content"), d = c + ",maximum-scale=1, user-scalable=no", e = c + ",maximum-scale=10, user-scalable=yes", f = /(user-scalable[\s]*=[\s]*no)|(maximum-scale[\s]*=[\s]*1)[$,\s]/.test(c);
        a.mobile.zoom = a.extend({}, {
            enabled: !f, locked: !1, disable: function (c) {
                f || a.mobile.zoom.locked || (b.attr("content", d), a.mobile.zoom.enabled = !1, a.mobile.zoom.locked = c || !1)
            }, enable: function (c) {
                f || a.mobile.zoom.locked && c !== !0 || (b.attr("content", e), a.mobile.zoom.enabled = !0, a.mobile.zoom.locked = !1)
            }, restore: function () {
                f || (b.attr("content", c), a.mobile.zoom.enabled = !0)
            }
        })
    }(a), function (a) {
        a.widget("mobile.textinput", a.mobile.widget, {
            options: {
                theme: null,
                mini: !1,
                preventFocusZoom: /iPhone|iPad|iPod/.test(navigator.platform) && navigator.userAgent.indexOf("AppleWebKit") > -1,
                initSelector: "input[type='text'], input[type='search'], :jqmData(type='search'), input[type='number'], :jqmData(type='number'), input[type='password'], input[type='email'], input[type='url'], input[type='tel'], textarea, input[type='time'], input[type='date'], input[type='month'], input[type='week'], input[type='datetime'], input[type='datetime-local'], input[type='color'], input:not([type]), input[type='file']",
                clearBtn: !1,
                clearSearchButtonText: null,
                clearBtnText: "clear text",
                disabled: !1
            }, _create: function () {
                function b() {
                    setTimeout(function () {
                        d.toggleClass("ui-input-clear-hidden", !f.val())
                    }, 0)
                }

                var c, d, e = this, f = this.element, g = this.options, h = g.theme || a.mobile.getInheritedTheme(this.element, "c"), i = " ui-body-" + h, j = g.mini ? " ui-mini" : "", k = f.is("[type='search'], :jqmData(type='search')"), l = g.clearSearchButtonText || g.clearBtnText, m = f.is("textarea, :jqmData(type='range')"), n = !!g.clearBtn && !m, o = f.is("input") && !f.is(":jqmData(type='range')");
                if (a("label[for='" + f.attr("id") + "']").addClass("ui-input-text"), c = f.addClass("ui-input-text ui-body-" + h), "undefined" == typeof f[0].autocorrect || a.support.touchOverflow || (f[0].setAttribute("autocorrect", "off"), f[0].setAttribute("autocomplete", "off")), k ? c = f.wrap("<div class='ui-input-search ui-shadow-inset ui-btn-corner-all ui-btn-shadow ui-icon-searchfield" + i + j + "'></div>").parent() : o && (c = f.wrap("<div class='ui-input-text ui-shadow-inset ui-corner-all ui-btn-shadow" + i + j + "'></div>").parent()), n || k ? (d = a("<a href='#' class='ui-input-clear' title='" + l + "'>" + l + "</a>").bind("click", function (a) {
                        f.val("").focus().trigger("change"), d.addClass("ui-input-clear-hidden"), a.preventDefault()
                    }).appendTo(c).buttonMarkup({
                        icon: "delete",
                        iconpos: "notext",
                        corners: !0,
                        shadow: !0,
                        mini: g.mini
                    }), k || c.addClass("ui-input-has-clear"), b(), f.bind("paste cut keyup input focus change blur", b)) : o || k || f.addClass("ui-corner-all ui-shadow-inset" + i + j), f.focus(function () {
                        g.preventFocusZoom && a.mobile.zoom.disable(!0), c.addClass(a.mobile.focusClass)
                    }).blur(function () {
                        c.removeClass(a.mobile.focusClass), g.preventFocusZoom && a.mobile.zoom.enable(!0)
                    }), f.is("textarea")) {
                    var p, q = 15, r = 100;
                    this._keyup = function () {
                        var a = f[0].scrollHeight, b = f[0].clientHeight;
                        if (a > b) {
                            var c = parseFloat(f.css("padding-top")), d = parseFloat(f.css("padding-bottom")), e = c + d;
                            f.height(a - e + q)
                        }
                    }, f.on("keyup change input paste", function () {
                        clearTimeout(p), p = setTimeout(e._keyup, r)
                    }), this._on(!0, a.mobile.document, {pagechange: "_keyup"}), a.trim(f.val()) && this._on(!0, a.mobile.window, {load: "_keyup"})
                }
                f.attr("disabled") && this.disable()
            }, disable: function () {
                var a, b = this.element.is("[type='search'], :jqmData(type='search')"), c = this.element.is("input") && !this.element.is(":jqmData(type='range')"), d = this.element.attr("disabled", !0) && (c || b);
                return a = d ? this.element.parent() : this.element, a.addClass("ui-disabled"), this._setOption("disabled", !0)
            }, enable: function () {
                var a, b = this.element.is("[type='search'], :jqmData(type='search')"), c = this.element.is("input") && !this.element.is(":jqmData(type='range')"), d = this.element.attr("disabled", !1) && (c || b);
                return a = d ? this.element.parent() : this.element, a.removeClass("ui-disabled"), this._setOption("disabled", !1)
            }
        }), a.mobile.document.bind("pagecreate create", function (b) {
            a.mobile.textinput.prototype.enhanceWithin(b.target, !0)
        })
    }(a), function (a) {
        a.mobile.listview.prototype.options.filter = !1, a.mobile.listview.prototype.options.filterPlaceholder = "Filter items...", a.mobile.listview.prototype.options.filterTheme = "c", a.mobile.listview.prototype.options.filterReveal = !1;
        var b = function (a, b) {
            return -1 === a.toString().toLowerCase().indexOf(b)
        };
        a.mobile.listview.prototype.options.filterCallback = b, a.mobile.document.delegate("ul, ol", "listviewcreate", function () {
            var c = a(this), d = c.data("mobile-listview");
            if (d && d.options.filter) {
                d.options.filterReveal && c.children().addClass("ui-screen-hidden");
                var e = a("<form>", {
                    "class": "ui-listview-filter ui-bar-" + d.options.filterTheme,
                    role: "search"
                }).submit(function (a) {
                    a.preventDefault(), g.blur()
                }), f = function () {
                    var e, f = a(this), g = this.value.toLowerCase(), h = null, i = c.children(), j = f.jqmData("lastval") + "", k = !1, l = "", m = d.options.filterCallback !== b;
                    if (!j || j !== g) {
                        if (d._trigger("beforefilter", "beforefilter", {input: this}), f.jqmData("lastval", g), m || g.length < j.length || 0 !== g.indexOf(j) ? h = c.children() : (h = c.children(":not(.ui-screen-hidden)"), !h.length && d.options.filterReveal && (h = c.children(".ui-screen-hidden"))), g) {
                            for (var n = h.length - 1; n >= 0; n--)e = a(h[n]), l = e.jqmData("filtertext") || e.text(), e.is("li:jqmData(role=list-divider)") ? (e.toggleClass("ui-filter-hidequeue", !k), k = !1) : d.options.filterCallback(l, g, e) ? e.toggleClass("ui-filter-hidequeue", !0) : k = !0;
                            h.filter(":not(.ui-filter-hidequeue)").toggleClass("ui-screen-hidden", !1), h.filter(".ui-filter-hidequeue").toggleClass("ui-screen-hidden", !0).toggleClass("ui-filter-hidequeue", !1)
                        } else h.toggleClass("ui-screen-hidden", !!d.options.filterReveal);
                        d._addFirstLastClasses(i, d._getVisibles(i, !1), !1)
                    }
                }, g = a("<input>", {placeholder: d.options.filterPlaceholder}).attr("data-" + a.mobile.ns + "type", "search").jqmData("lastval", "").bind("keyup change input", f).appendTo(e).textinput();
                d.options.inset && e.addClass("ui-listview-filter-inset"), e.bind("submit", function () {
                    return !1
                }).insertBefore(c)
            }
        })
    }(a), function (a) {
        a.mobile.listview.prototype.options.autodividers = !1, a.mobile.listview.prototype.options.autodividersSelector = function (b) {
            var c = a.trim(b.text()) || null;
            return c ? c = c.slice(0, 1).toUpperCase() : null
        }, a.mobile.document.delegate("ul,ol", "listviewcreate", function () {
            var b = a(this), d = b.data("mobile-listview");
            if (d && d.options.autodividers) {
                var e = function () {
                    b.find("li:jqmData(role='list-divider')").remove();
                    for (var e, f, g = b.find("li"), h = null, i = 0; i < g.length; i++) {
                        if (e = g[i], f = d.options.autodividersSelector(a(e)), f && h !== f) {
                            var j = c.createElement("li");
                            j.appendChild(c.createTextNode(f)), j.setAttribute("data-" + a.mobile.ns + "role", "list-divider"), e.parentNode.insertBefore(j, e)
                        }
                        h = f
                    }
                }, f = function () {
                    b.unbind("listviewafterrefresh", f), e(), d.refresh(), b.bind("listviewafterrefresh", f)
                };
                f()
            }
        })
    }(a), function (a) {
        a(c).bind("pagecreate create", function (b) {
            a(":jqmData(role='nojs')", b.target).addClass("ui-nojs")
        })
    }(a), function (a) {
        a.mobile.behaviors.formReset = {
            _handleFormReset: function () {
                this._on(this.element.closest("form"), {
                    reset: function () {
                        this._delay("_reset")
                    }
                })
            }
        }
    }(a), function (a) {
        a.widget("mobile.checkboxradio", a.mobile.widget, a.extend({
            options: {
                theme: null,
                mini: !1,
                initSelector: "input[type='checkbox'],input[type='radio']"
            }, _create: function () {
                var b = this, d = this.element, e = this.options, f = function (a, b) {
                    return a.jqmData(b) || a.closest("form, fieldset").jqmData(b)
                }, g = a(d).closest("label"), h = g.length ? g : a(d).closest("form, fieldset, :jqmData(role='page'), :jqmData(role='dialog')").find("label").filter("[for='" + d[0].id + "']").first(), i = d[0].type, j = f(d, "mini") || e.mini, k = i + "-on", l = i + "-off", m = f(d, "iconpos"), n = "ui-" + k, o = "ui-" + l;
                if ("checkbox" === i || "radio" === i) {
                    a.extend(this, {
                        label: h,
                        inputtype: i,
                        checkedClass: n,
                        uncheckedClass: o,
                        checkedicon: k,
                        uncheckedicon: l
                    }), e.theme || (e.theme = a.mobile.getInheritedTheme(this.element, "c")), h.buttonMarkup({
                        theme: e.theme,
                        icon: l,
                        shadow: !1,
                        mini: j,
                        iconpos: m
                    });
                    var p = c.createElement("div");
                    p.className = "ui-" + i, d.add(h).wrapAll(p), h.bind({
                        vmouseover: function (b) {
                            a(this).parent().is(".ui-disabled") && b.stopPropagation()
                        }, vclick: function (a) {
                            return d.is(":disabled") ? (a.preventDefault(), void 0) : (b._cacheVals(), d.prop("checked", "radio" === i && !0 || !d.prop("checked")), d.triggerHandler("click"), b._getInputSet().not(d).prop("checked", !1), b._updateAll(), !1)
                        }
                    }), d.bind({
                        vmousedown: function () {
                            b._cacheVals()
                        }, vclick: function () {
                            var c = a(this);
                            c.is(":checked") ? (c.prop("checked", !0), b._getInputSet().not(c).prop("checked", !1)) : c.prop("checked", !1), b._updateAll()
                        }, focus: function () {
                            h.addClass(a.mobile.focusClass)
                        }, blur: function () {
                            h.removeClass(a.mobile.focusClass)
                        }
                    }), this._handleFormReset(), this.refresh()
                }
            }, _cacheVals: function () {
                this._getInputSet().each(function () {
                    a(this).jqmData("cacheVal", this.checked)
                })
            }, _getInputSet: function () {
                return "checkbox" === this.inputtype ? this.element : this.element.closest("form, :jqmData(role='page'), :jqmData(role='dialog')").find("input[name='" + this.element[0].name + "'][type='" + this.inputtype + "']")
            }, _updateAll: function () {
                var b = this;
                this._getInputSet().each(function () {
                    var c = a(this);
                    (this.checked || "checkbox" === b.inputtype) && c.trigger("change")
                }).checkboxradio("refresh")
            }, _reset: function () {
                this.refresh()
            }, refresh: function () {
                var b = this.element[0], c = " " + a.mobile.activeBtnClass, d = this.checkedClass + (this.element.parents(".ui-controlgroup-horizontal").length ? c : ""), e = this.label;
                b.checked ? e.removeClass(this.uncheckedClass + c).addClass(d).buttonMarkup({icon: this.checkedicon}) : e.removeClass(d).addClass(this.uncheckedClass).buttonMarkup({icon: this.uncheckedicon}), b.disabled ? this.disable() : this.enable()
            }, disable: function () {
                this.element.prop("disabled", !0).parent().addClass("ui-disabled")
            }, enable: function () {
                this.element.prop("disabled", !1).parent().removeClass("ui-disabled")
            }
        }, a.mobile.behaviors.formReset)), a.mobile.document.bind("pagecreate create", function (b) {
            a.mobile.checkboxradio.prototype.enhanceWithin(b.target, !0)
        })
    }(a), function (a) {
        a.widget("mobile.button", a.mobile.widget, {
            options: {
                theme: null,
                icon: null,
                iconpos: null,
                corners: !0,
                shadow: !0,
                iconshadow: !0,
                inline: null,
                mini: null,
                initSelector: "button, [type='button'], [type='submit'], [type='reset']"
            }, _create: function () {
                var b, c = this.element, d = function (a) {
                    var b, c = {};
                    for (b in a)null !== a[b] && "initSelector" !== b && (c[b] = a[b]);
                    return c
                }(this.options), e = "";
                return "A" === c[0].tagName ? (c.hasClass("ui-btn") || c.buttonMarkup(), void 0) : (this.options.theme || (this.options.theme = a.mobile.getInheritedTheme(this.element, "c")), ~c[0].className.indexOf("ui-btn-left") && (e = "ui-btn-left"), ~c[0].className.indexOf("ui-btn-right") && (e = "ui-btn-right"), ("submit" === c.attr("type") || "reset" === c.attr("type")) && (e ? e += " ui-submit" : e = "ui-submit"), a("label[for='" + c.attr("id") + "']").addClass("ui-submit"), this.button = a("<div></div>")[c.html() ? "html" : "text"](c.html() || c.val()).insertBefore(c).buttonMarkup(d).addClass(e).append(c.addClass("ui-btn-hidden")), b = this.button, c.bind({
                    focus: function () {
                        b.addClass(a.mobile.focusClass)
                    }, blur: function () {
                        b.removeClass(a.mobile.focusClass)
                    }
                }), this.refresh(), void 0)
            }, _setOption: function (b, c) {
                var d = {};
                d[b] = c, "initSelector" !== b && (this.button.buttonMarkup(d), this.element.attr("data-" + (a.mobile.ns || "") + b.replace(/([A-Z])/, "-$1").toLowerCase(), c)), this._super("_setOption", b, c)
            }, enable: function () {
                return this.element.attr("disabled", !1), this.button.removeClass("ui-disabled").attr("aria-disabled", !1), this._setOption("disabled", !1)
            }, disable: function () {
                return this.element.attr("disabled", !0), this.button.addClass("ui-disabled").attr("aria-disabled", !0), this._setOption("disabled", !0)
            }, refresh: function () {
                var b = this.element;
                b.prop("disabled") ? this.disable() : this.enable(), a(this.button.data("buttonElements").text)[b.html() ? "html" : "text"](b.html() || b.val())
            }
        }), a.mobile.document.bind("pagecreate create", function (b) {
            a.mobile.button.prototype.enhanceWithin(b.target, !0)
        })
    }(a), function (a, d) {
        a.widget("mobile.slider", a.mobile.widget, a.extend({
            widgetEventPrefix: "slide",
            options: {
                theme: null,
                trackTheme: null,
                disabled: !1,
                initSelector: "input[type='range'], :jqmData(type='range'), :jqmData(role='slider')",
                mini: !1,
                highlight: !1
            },
            _create: function () {
                var e, f, g = this, h = this.element, i = a.mobile.getInheritedTheme(h, "c"), j = this.options.theme || i, k = this.options.trackTheme || i, l = h[0].nodeName.toLowerCase(), m = (this.isToggleSwitch = "select" === l, h.parent().is(":jqmData(role='rangeslider')")), n = this.isToggleSwitch ? "ui-slider-switch" : "", o = h.attr("id"), p = a("[for='" + o + "']"), q = p.attr("id") || o + "-label", r = p.attr("id", q), s = this.isToggleSwitch ? 0 : parseFloat(h.attr("min")), t = this.isToggleSwitch ? h.find("option").length - 1 : parseFloat(h.attr("max")), u = b.parseFloat(h.attr("step") || 1), v = this.options.mini || h.jqmData("mini") ? " ui-mini" : "", w = c.createElement("a"), x = a(w), y = c.createElement("div"), z = a(y), A = this.options.highlight && !this.isToggleSwitch ? function () {
                    var b = c.createElement("div");
                    return b.className = "ui-slider-bg " + a.mobile.activeBtnClass + " ui-btn-corner-all", a(b).prependTo(z)
                }() : !1;
                if (w.setAttribute("href", "#"), y.setAttribute("role", "application"), y.className = [this.isToggleSwitch ? "ui-slider " : "ui-slider-track ", n, " ui-btn-down-", k, " ui-btn-corner-all", v].join(""), w.className = "ui-slider-handle", y.appendChild(w), x.buttonMarkup({
                        corners: !0,
                        theme: j,
                        shadow: !0
                    }).attr({
                        role: "slider",
                        "aria-valuemin": s,
                        "aria-valuemax": t,
                        "aria-valuenow": this._value(),
                        "aria-valuetext": this._value(),
                        title: this._value(),
                        "aria-labelledby": q
                    }), a.extend(this, {
                        slider: z,
                        handle: x,
                        type: l,
                        step: u,
                        max: t,
                        min: s,
                        valuebg: A,
                        isRangeslider: m,
                        dragging: !1,
                        beforeStart: null,
                        userModified: !1,
                        mouseMoved: !1
                    }), this.isToggleSwitch) {
                    f = c.createElement("div"), f.className = "ui-slider-inneroffset";
                    for (var B = 0, C = y.childNodes.length; C > B; B++)f.appendChild(y.childNodes[B]);
                    y.appendChild(f), x.addClass("ui-slider-handle-snapping"), e = h.find("option");
                    for (var D = 0, E = e.length; E > D; D++) {
                        var F = D ? "a" : "b", G = D ? " " + a.mobile.activeBtnClass : " ui-btn-down-" + k, H = (c.createElement("div"), c.createElement("span"));
                        H.className = ["ui-slider-label ui-slider-label-", F, G, " ui-btn-corner-all"].join(""), H.setAttribute("role", "img"), H.appendChild(c.createTextNode(e[D].innerHTML)), a(H).prependTo(z)
                    }
                    g._labels = a(".ui-slider-label", z)
                }
                r.addClass("ui-slider"), h.addClass(this.isToggleSwitch ? "ui-slider-switch" : "ui-slider-input"), this._on(h, {
                    change: "_controlChange",
                    keyup: "_controlKeyup",
                    blur: "_controlBlur",
                    vmouseup: "_controlVMouseUp"
                }), z.bind("vmousedown", a.proxy(this._sliderVMouseDown, this)).bind("vclick", !1), this._on(c, {vmousemove: "_preventDocumentDrag"}), this._on(z.add(c), {vmouseup: "_sliderVMouseUp"}), z.insertAfter(h), this.isToggleSwitch || m || (f = this.options.mini ? "<div class='ui-slider ui-mini'>" : "<div class='ui-slider'>", h.add(z).wrapAll(f)), this.isToggleSwitch && this.handle.bind({
                    focus: function () {
                        z.addClass(a.mobile.focusClass)
                    }, blur: function () {
                        z.removeClass(a.mobile.focusClass)
                    }
                }), this._on(this.handle, {
                    vmousedown: "_handleVMouseDown",
                    keydown: "_handleKeydown",
                    keyup: "_handleKeyup"
                }), this.handle.bind("vclick", !1), this._handleFormReset(), this.refresh(d, d, !0)
            },
            _controlChange: function (a) {
                return this._trigger("controlchange", a) === !1 ? !1 : (this.mouseMoved || this.refresh(this._value(), !0), void 0)
            },
            _controlKeyup: function () {
                this.refresh(this._value(), !0, !0)
            },
            _controlBlur: function () {
                this.refresh(this._value(), !0)
            },
            _controlVMouseUp: function () {
                this._checkedRefresh()
            },
            _handleVMouseDown: function () {
                this.handle.focus()
            },
            _handleKeydown: function (b) {
                var c = this._value();
                if (!this.options.disabled) {
                    switch (b.keyCode) {
                        case a.mobile.keyCode.HOME:
                        case a.mobile.keyCode.END:
                        case a.mobile.keyCode.PAGE_UP:
                        case a.mobile.keyCode.PAGE_DOWN:
                        case a.mobile.keyCode.UP:
                        case a.mobile.keyCode.RIGHT:
                        case a.mobile.keyCode.DOWN:
                        case a.mobile.keyCode.LEFT:
                            b.preventDefault(), this._keySliding || (this._keySliding = !0, this.handle.addClass("ui-state-active"))
                    }
                    switch (b.keyCode) {
                        case a.mobile.keyCode.HOME:
                            this.refresh(this.min);
                            break;
                        case a.mobile.keyCode.END:
                            this.refresh(this.max);
                            break;
                        case a.mobile.keyCode.PAGE_UP:
                        case a.mobile.keyCode.UP:
                        case a.mobile.keyCode.RIGHT:
                            this.refresh(c + this.step);
                            break;
                        case a.mobile.keyCode.PAGE_DOWN:
                        case a.mobile.keyCode.DOWN:
                        case a.mobile.keyCode.LEFT:
                            this.refresh(c - this.step)
                    }
                }
            },
            _handleKeyup: function () {
                this._keySliding && (this._keySliding = !1, this.handle.removeClass("ui-state-active"))
            },
            _sliderVMouseDown: function (a) {
                return this.options.disabled || 1 !== a.which && 0 !== a.which && a.which !== d ? !1 : this._trigger("beforestart", a) === !1 ? !1 : (this.dragging = !0, this.userModified = !1, this.mouseMoved = !1, this.isToggleSwitch && (this.beforeStart = this.element[0].selectedIndex), this.refresh(a), this._trigger("start"), !1)
            },
            _sliderVMouseUp: function () {
                return this.dragging ? (this.dragging = !1, this.isToggleSwitch && (this.handle.addClass("ui-slider-handle-snapping"), this.mouseMoved ? this.userModified ? this.refresh(0 === this.beforeStart ? 1 : 0) : this.refresh(this.beforeStart) : this.refresh(0 === this.beforeStart ? 1 : 0)), this.mouseMoved = !1, this._trigger("stop"), !1) : void 0
            },
            _preventDocumentDrag: function (a) {
                return this._trigger("drag", a) === !1 ? !1 : this.dragging && !this.options.disabled ? (this.mouseMoved = !0, this.isToggleSwitch && this.handle.removeClass("ui-slider-handle-snapping"), this.refresh(a), this.userModified = this.beforeStart !== this.element[0].selectedIndex, !1) : void 0
            },
            _checkedRefresh: function () {
                this.value !== this._value() && this.refresh(this._value())
            },
            _value: function () {
                return this.isToggleSwitch ? this.element[0].selectedIndex : parseFloat(this.element.val())
            },
            _reset: function () {
                this.refresh(d, !1, !0)
            },
            refresh: function (b, d, e) {
                var f, g, h, i, j = this, k = a.mobile.getInheritedTheme(this.element, "c"), l = this.options.theme || k, m = this.options.trackTheme || k;
                j.slider[0].className = [this.isToggleSwitch ? "ui-slider ui-slider-switch" : "ui-slider-track", " ui-btn-down-" + m, " ui-btn-corner-all", this.options.mini ? " ui-mini" : ""].join(""), (this.options.disabled || this.element.attr("disabled")) && this.disable(), this.value = this._value(), this.options.highlight && !this.isToggleSwitch && 0 === this.slider.find(".ui-slider-bg").length && (this.valuebg = function () {
                    var b = c.createElement("div");
                    return b.className = "ui-slider-bg " + a.mobile.activeBtnClass + " ui-btn-corner-all", a(b).prependTo(j.slider)
                }()), this.handle.buttonMarkup({corners: !0, theme: l, shadow: !0});
                var n, o, p = this.element, q = !this.isToggleSwitch, r = q ? [] : p.find("option"), s = q ? parseFloat(p.attr("min")) : 0, t = q ? parseFloat(p.attr("max")) : r.length - 1, u = q && parseFloat(p.attr("step")) > 0 ? parseFloat(p.attr("step")) : 1;
                if ("object" == typeof b) {
                    if (h = b, i = 8, f = this.slider.offset().left, g = this.slider.width(), n = g / ((t - s) / u), !this.dragging || h.pageX < f - i || h.pageX > f + g + i)return;
                    o = n > 1 ? 100 * ((h.pageX - f) / g) : Math.round(100 * ((h.pageX - f) / g))
                } else null == b && (b = q ? parseFloat(p.val() || 0) : p[0].selectedIndex), o = 100 * ((parseFloat(b) - s) / (t - s));
                if (!isNaN(o)) {
                    var v = o / 100 * (t - s) + s, w = (v - s) % u, x = v - w;
                    2 * Math.abs(w) >= u && (x += w > 0 ? u : -u);
                    var y = 100 / ((t - s) / u);
                    if (v = parseFloat(x.toFixed(5)), "undefined" == typeof n && (n = g / ((t - s) / u)), n > 1 && q && (o = (v - s) * y * (1 / u)), 0 > o && (o = 0), o > 100 && (o = 100), s > v && (v = s), v > t && (v = t), this.handle.css("left", o + "%"), this.handle[0].setAttribute("aria-valuenow", q ? v : r.eq(v).attr("value")), this.handle[0].setAttribute("aria-valuetext", q ? v : r.eq(v).getEncodedText()), this.handle[0].setAttribute("title", q ? v : r.eq(v).getEncodedText()), this.valuebg && this.valuebg.css("width", o + "%"), this._labels) {
                        var z = 100 * (this.handle.width() / this.slider.width()), A = o && z + (100 - z) * o / 100, B = 100 === o ? 0 : Math.min(z + 100 - A, 100);
                        this._labels.each(function () {
                            var b = a(this).is(".ui-slider-label-a");
                            a(this).width((b ? A : B) + "%")
                        })
                    }
                    if (!e) {
                        var C = !1;
                        if (q ? (C = p.val() !== v, p.val(v)) : (C = p[0].selectedIndex !== v, p[0].selectedIndex = v), this._trigger("beforechange", b) === !1)return !1;
                        !d && C && p.trigger("change")
                    }
                }
            },
            enable: function () {
                return this.element.attr("disabled", !1), this.slider.removeClass("ui-disabled").attr("aria-disabled", !1), this._setOption("disabled", !1)
            },
            disable: function () {
                return this.element.attr("disabled", !0), this.slider.addClass("ui-disabled").attr("aria-disabled", !0), this._setOption("disabled", !0)
            }
        }, a.mobile.behaviors.formReset)), a.mobile.document.bind("pagecreate create", function (b) {
            a.mobile.slider.prototype.enhanceWithin(b.target, !0)
        })
    }(a), function (a) {
        a.widget("mobile.rangeslider", a.mobile.widget, {
            options: {
                theme: null,
                trackTheme: null,
                disabled: !1,
                initSelector: ":jqmData(role='rangeslider')",
                mini: !1,
                highlight: !0
            }, _create: function () {
                var b, c = this.element, d = this.options.mini ? "ui-rangeslider ui-mini" : "ui-rangeslider", e = c.find("input").first(), f = c.find("input").last(), g = c.find("label").first(), h = a.data(e.get(0), "mobileSlider").slider, i = a.data(f.get(0), "mobileSlider").slider, j = a.data(e.get(0), "mobileSlider").handle, k = a('<div class="ui-rangeslider-sliders" />').appendTo(c);
                c.find("label").length > 1 && (b = c.find("label").last().hide()), e.addClass("ui-rangeslider-first"), f.addClass("ui-rangeslider-last"), c.addClass(d), h.appendTo(k), i.appendTo(k), g.prependTo(c), j.prependTo(i), a.extend(this, {
                    _inputFirst: e,
                    _inputLast: f,
                    _sliderFirst: h,
                    _sliderLast: i,
                    _targetVal: null,
                    _sliderTarget: !1,
                    _sliders: k,
                    _proxy: !1
                }), this.refresh(), this._on(this.element.find("input.ui-slider-input"), {
                    slidebeforestart: "_slidebeforestart",
                    slidestop: "_slidestop",
                    slidedrag: "_slidedrag",
                    slidebeforechange: "_change",
                    blur: "_change",
                    keyup: "_change"
                }), this._on({mousedown: "_change"}), this._on(this.element.closest("form"), {reset: "_handleReset"}), this._on(j, {vmousedown: "_dragFirstHandle"})
            }, _handleReset: function () {
                var a = this;
                setTimeout(function () {
                    a._updateHighlight()
                }, 0)
            }, _dragFirstHandle: function (b) {
                return a.data(this._inputFirst.get(0), "mobileSlider").dragging = !0, a.data(this._inputFirst.get(0), "mobileSlider").refresh(b), !1
            }, _slidedrag: function (b) {
                var c = a(b.target).is(this._inputFirst), d = c ? this._inputLast : this._inputFirst;
                return this._sliderTarget = !1, "first" === this._proxy && c || "last" === this._proxy && !c ? (a.data(d.get(0), "mobileSlider").dragging = !0, a.data(d.get(0), "mobileSlider").refresh(b), !1) : void 0
            }, _slidestop: function (b) {
                var c = a(b.target).is(this._inputFirst);
                this._proxy = !1, this.element.find("input").trigger("vmouseup"), this._sliderFirst.css("z-index", c ? 1 : "")
            }, _slidebeforestart: function (b) {
                this._sliderTarget = !1, a(b.originalEvent.target).hasClass("ui-slider-track") && (this._sliderTarget = !0, this._targetVal = a(b.target).val())
            }, _setOption: function (a) {
                this._superApply(a), this.refresh()
            }, refresh: function () {
                var a = this.element, b = this.options;
                a.find("input").slider({
                    theme: b.theme,
                    trackTheme: b.trackTheme,
                    disabled: b.disabled,
                    mini: b.mini,
                    highlight: b.highlight
                }).slider("refresh"), this._updateHighlight()
            }, _change: function (b) {
                if ("keyup" === b.type)return this._updateHighlight(), !1;
                var c = this, d = parseFloat(this._inputFirst.val(), 10), e = parseFloat(this._inputLast.val(), 10), f = a(b.target).hasClass("ui-rangeslider-first"), g = f ? this._inputFirst : this._inputLast, h = f ? this._inputLast : this._inputFirst;
                if (this._inputFirst.val() > this._inputLast.val() && "mousedown" === b.type && !a(b.target).hasClass("ui-slider-handle"))g.blur(); else if ("mousedown" === b.type)return;
                return d > e && !this._sliderTarget ? (g.val(f ? e : d).slider("refresh"), this._trigger("normalize")) : d > e && (g.val(this._targetVal).slider("refresh"), setTimeout(function () {
                    h.val(f ? d : e).slider("refresh"), a.data(h.get(0), "mobileSlider").handle.focus(), c._sliderFirst.css("z-index", f ? "" : 1), c._trigger("normalize")
                }, 0), this._proxy = f ? "first" : "last"), d === e ? (a.data(g.get(0), "mobileSlider").handle.css("z-index", 1), a.data(h.get(0), "mobileSlider").handle.css("z-index", 0)) : (a.data(h.get(0), "mobileSlider").handle.css("z-index", ""), a.data(g.get(0), "mobileSlider").handle.css("z-index", "")), this._updateHighlight(), d >= e ? !1 : void 0
            }, _updateHighlight: function () {
                var b = parseInt(a.data(this._inputFirst.get(0), "mobileSlider").handle.get(0).style.left, 10), c = parseInt(a.data(this._inputLast.get(0), "mobileSlider").handle.get(0).style.left, 10), d = c - b;
                this.element.find(".ui-slider-bg").css({"margin-left": b + "%", width: d + "%"})
            }, _destroy: function () {
                this.element.removeClass("ui-rangeslider ui-mini").find("label").show(), this._inputFirst.after(this._sliderFirst), this._inputLast.after(this._sliderLast), this._sliders.remove(), this.element.find("input").removeClass("ui-rangeslider-first ui-rangeslider-last").slider("destroy")
            }
        }), a.widget("mobile.rangeslider", a.mobile.rangeslider, a.mobile.behaviors.formReset), a(c).bind("pagecreate create", function (b) {
            a.mobile.rangeslider.prototype.enhanceWithin(b.target, !0)
        })
    }(a), function (a) {
        a.widget("mobile.selectmenu", a.mobile.widget, a.extend({
            options: {
                theme: null,
                disabled: !1,
                icon: "arrow-d",
                iconpos: "right",
                inline: !1,
                corners: !0,
                shadow: !0,
                iconshadow: !0,
                overlayTheme: "a",
                dividerTheme: "b",
                hidePlaceholderMenuItems: !0,
                closeText: "Close",
                nativeMenu: !0,
                preventFocusZoom: /iPhone|iPad|iPod/.test(navigator.platform) && navigator.userAgent.indexOf("AppleWebKit") > -1,
                initSelector: "select:not( :jqmData(role='slider') )",
                mini: !1
            }, _button: function () {
                return a("<div/>")
            }, _setDisabled: function (a) {
                return this.element.attr("disabled", a), this.button.attr("aria-disabled", a), this._setOption("disabled", a)
            }, _focusButton: function () {
                var a = this;
                setTimeout(function () {
                    a.button.focus()
                }, 40)
            }, _selectOptions: function () {
                return this.select.find("option")
            }, _preExtension: function () {
                var b = "";
                ~this.element[0].className.indexOf("ui-btn-left") && (b = " ui-btn-left"), ~this.element[0].className.indexOf("ui-btn-right") && (b = " ui-btn-right"), this.select = this.element.removeClass("ui-btn-left ui-btn-right").wrap("<div class='ui-select" + b + "'>"), this.selectID = this.select.attr("id"), this.label = a("label[for='" + this.selectID + "']").addClass("ui-select"), this.isMultiple = this.select[0].multiple, this.options.theme || (this.options.theme = a.mobile.getInheritedTheme(this.select, "c"))
            }, _destroy: function () {
                var a = this.element.parents(".ui-select");
                a.length > 0 && (a.is(".ui-btn-left, .ui-btn-right") && this.element.addClass(a.is(".ui-btn-left") ? "ui-btn-left" : "ui-btn-right"), this.element.insertAfter(a), a.remove())
            }, _create: function () {
                this._preExtension(), this._trigger("beforeCreate"), this.button = this._button();
                var c = this, d = this.options, e = d.inline || this.select.jqmData("inline"), f = d.mini || this.select.jqmData("mini"), g = d.icon ? d.iconpos || this.select.jqmData("iconpos") : !1, h = (-1 === this.select[0].selectedIndex ? 0 : this.select[0].selectedIndex, this.button.insertBefore(this.select).buttonMarkup({
                    theme: d.theme,
                    icon: d.icon,
                    iconpos: g,
                    inline: e,
                    corners: d.corners,
                    shadow: d.shadow,
                    iconshadow: d.iconshadow,
                    mini: f
                }));
                this.setButtonText(), d.nativeMenu && b.opera && b.opera.version && h.addClass("ui-select-nativeonly"), this.isMultiple && (this.buttonCount = a("<span>").addClass("ui-li-count ui-btn-up-c ui-btn-corner-all").hide().appendTo(h.addClass("ui-li-has-count"))), (d.disabled || this.element.attr("disabled")) && this.disable(), this.select.change(function () {
                    c.refresh(), d.nativeMenu && this.blur()
                }), this._handleFormReset(), this.build()
            }, build: function () {
                var b = this;
                this.select.appendTo(b.button).bind("vmousedown", function () {
                    b.button.addClass(a.mobile.activeBtnClass)
                }).bind("focus", function () {
                    b.button.addClass(a.mobile.focusClass)
                }).bind("blur", function () {
                    b.button.removeClass(a.mobile.focusClass)
                }).bind("focus vmouseover", function () {
                    b.button.trigger("vmouseover")
                }).bind("vmousemove", function () {
                    b.button.removeClass(a.mobile.activeBtnClass)
                }).bind("change blur vmouseout", function () {
                    b.button.trigger("vmouseout").removeClass(a.mobile.activeBtnClass)
                }).bind("change blur", function () {
                    b.button.removeClass("ui-btn-down-" + b.options.theme)
                }), b.button.bind("vmousedown", function () {
                    b.options.preventFocusZoom && a.mobile.zoom.disable(!0)
                }), b.label.bind("click focus", function () {
                    b.options.preventFocusZoom && a.mobile.zoom.disable(!0)
                }), b.select.bind("focus", function () {
                    b.options.preventFocusZoom && a.mobile.zoom.disable(!0)
                }), b.button.bind("mouseup", function () {
                    b.options.preventFocusZoom && setTimeout(function () {
                        a.mobile.zoom.enable(!0)
                    }, 0)
                }), b.select.bind("blur", function () {
                    b.options.preventFocusZoom && a.mobile.zoom.enable(!0)
                })
            }, selected: function () {
                return this._selectOptions().filter(":selected")
            }, selectedIndices: function () {
                var a = this;
                return this.selected().map(function () {
                    return a._selectOptions().index(this)
                }).get()
            }, setButtonText: function () {
                var b = this, d = this.selected(), e = this.placeholder, f = a(c.createElement("span"));
                this.button.find(".ui-btn-text").html(function () {
                    return e = d.length ? d.map(function () {
                        return a(this).text()
                    }).get().join(", ") : b.placeholder, f.text(e).addClass(b.select.attr("class")).addClass(d.attr("class"))
                })
            }, setButtonCount: function () {
                var a = this.selected();
                this.isMultiple && this.buttonCount[a.length > 1 ? "show" : "hide"]().text(a.length)
            }, _reset: function () {
                this.refresh()
            }, refresh: function () {
                this.setButtonText(), this.setButtonCount()
            }, open: a.noop, close: a.noop, disable: function () {
                this._setDisabled(!0), this.button.addClass("ui-disabled")
            }, enable: function () {
                this._setDisabled(!1), this.button.removeClass("ui-disabled")
            }
        }, a.mobile.behaviors.formReset)), a.mobile.document.bind("pagecreate create", function (b) {
            a.mobile.selectmenu.prototype.enhanceWithin(b.target, !0)
        })
    }(a), function (a, d) {
        function e(a, b, c, d) {
            var e = d;
            return e = b > a ? c + (a - b) / 2 : Math.min(Math.max(c, d - b / 2), c + a - b)
        }

        function f() {
            var c = a.mobile.window;
            return {x: c.scrollLeft(), y: c.scrollTop(), cx: b.innerWidth || c.width(), cy: b.innerHeight || c.height()}
        }

        a.widget("mobile.popup", a.mobile.widget, {
            options: {
                theme: null,
                overlayTheme: null,
                shadow: !0,
                corners: !0,
                transition: "none",
                positionTo: "origin",
                tolerance: null,
                initSelector: ":jqmData(role='popup')",
                closeLinkSelector: "a:jqmData(rel='back')",
                closeLinkEvents: "click.popup",
                navigateEvents: "navigate.popup",
                closeEvents: "navigate.popup pagebeforechange.popup",
                dismissible: !0,
                history: !a.mobile.browser.oldIE
            }, _eatEventAndClose: function (a) {
                return a.preventDefault(), a.stopImmediatePropagation(), this.options.dismissible && this.close(), !1
            }, _resizeScreen: function () {
                var a = this._ui.container.outerHeight(!0);
                this._ui.screen.removeAttr("style"), a > this._ui.screen.height() && this._ui.screen.height(a)
            }, _handleWindowKeyUp: function (b) {
                return this._isOpen && b.keyCode === a.mobile.keyCode.ESCAPE ? this._eatEventAndClose(b) : void 0
            }, _expectResizeEvent: function () {
                var b = f();
                if (this._resizeData) {
                    if (b.x === this._resizeData.winCoords.x && b.y === this._resizeData.winCoords.y && b.cx === this._resizeData.winCoords.cx && b.cy === this._resizeData.winCoords.cy)return !1;
                    clearTimeout(this._resizeData.timeoutId)
                }
                return this._resizeData = {
                    timeoutId: setTimeout(a.proxy(this, "_resizeTimeout"), 200),
                    winCoords: b
                }, !0
            }, _resizeTimeout: function () {
                this._isOpen ? this._expectResizeEvent() || (this._ui.container.hasClass("ui-popup-hidden") && (this._ui.container.removeClass("ui-popup-hidden"), this.reposition({positionTo: "window"}), this._ignoreResizeEvents()), this._resizeScreen(), this._resizeData = null, this._orientationchangeInProgress = !1) : (this._resizeData = null, this._orientationchangeInProgress = !1)
            }, _ignoreResizeEvents: function () {
                var a = this;
                this._ignoreResizeTo && clearTimeout(this._ignoreResizeTo), this._ignoreResizeTo = setTimeout(function () {
                    a._ignoreResizeTo = 0
                }, 1e3)
            }, _handleWindowResize: function () {
                this._isOpen && 0 === this._ignoreResizeTo && (!this._expectResizeEvent() && !this._orientationchangeInProgress || this._ui.container.hasClass("ui-popup-hidden") || this._ui.container.addClass("ui-popup-hidden").removeAttr("style"))
            }, _handleWindowOrientationchange: function () {
                !this._orientationchangeInProgress && this._isOpen && 0 === this._ignoreResizeTo && (this._expectResizeEvent(), this._orientationchangeInProgress = !0)
            }, _handleDocumentFocusIn: function (b) {
                var d, e = b.target, f = this._ui;
                if (this._isOpen) {
                    if (e !== f.container[0]) {
                        if (d = a(b.target), 0 === d.parents().filter(f.container[0]).length)return a(c.activeElement).one("focus", function () {
                            d.blur()
                        }), f.focusElement.focus(), b.preventDefault(), b.stopImmediatePropagation(), !1;
                        f.focusElement[0] === f.container[0] && (f.focusElement = d)
                    }
                    this._ignoreResizeEvents()
                }
            }, _create: function () {
                var b = {
                    screen: a("<div class='ui-screen-hidden ui-popup-screen'></div>"),
                    placeholder: a("<div style='display: none;'><!-- placeholder --></div>"),
                    container: a("<div class='ui-popup-container ui-popup-hidden'></div>")
                }, c = this.element.closest(".ui-page"), d = this.element.attr("id"), e = this.options;
                e.history = e.history && a.mobile.ajaxEnabled && a.mobile.hashListeningEnabled, 0 === c.length && (c = a("body")), e.container = e.container || a.mobile.pageContainer || c, c.append(b.screen), b.container.insertAfter(b.screen), b.placeholder.insertAfter(this.element), d && (b.screen.attr("id", d + "-screen"), b.container.attr("id", d + "-popup"), b.placeholder.html("<!-- placeholder for " + d + " -->")), b.container.append(this.element), b.focusElement = b.container, this.element.addClass("ui-popup"), a.extend(this, {
                    _scrollTop: 0,
                    _page: c,
                    _ui: b,
                    _fallbackTransition: "",
                    _currentTransition: !1,
                    _prereqs: null,
                    _isOpen: !1,
                    _tolerance: null,
                    _resizeData: null,
                    _ignoreResizeTo: 0,
                    _orientationchangeInProgress: !1
                }), this._applyTheme(this.element, e.theme, "body"), this._applyTheme(this._ui.screen, e.overlayTheme, "overlay"), this._applyTransition(e.transition), this.element.toggleClass("ui-overlay-shadow", e.shadow).toggleClass("ui-corner-all", e.corners), this._setTolerance(e.tolerance), b.screen.bind("vclick", a.proxy(this, "_eatEventAndClose")), this._on(a.mobile.window, {
                    orientationchange: a.proxy(this, "_handleWindowOrientationchange"),
                    resize: a.proxy(this, "_handleWindowResize"),
                    keyup: a.proxy(this, "_handleWindowKeyUp")
                }), this._on(a.mobile.document, {focusin: a.proxy(this, "_handleDocumentFocusIn")})
            }, _applyTheme: function (a, b, c) {
                for (var d, e = (a.attr("class") || "").split(" "), f = null, g = String(b); e.length > 0;) {
                    if (f = e.pop(), d = new RegExp("^ui-" + c + "-([a-z])$").exec(f), d && d.length > 1) {
                        f = d[1];
                        break
                    }
                    f = null
                }
                b !== f && (a.removeClass("ui-" + c + "-" + f), null !== b && "none" !== b && a.addClass("ui-" + c + "-" + g))
            }, _setTheme: function (a) {
                this._applyTheme(this.element, a, "body")
            }, _setOverlayTheme: function (a) {
                this._applyTheme(this._ui.screen, a, "overlay"), this._isOpen && this._ui.screen.addClass("in")
            }, _setShadow: function (a) {
                this.element.toggleClass("ui-overlay-shadow", a)
            }, _setCorners: function (a) {
                this.element.toggleClass("ui-corner-all", a)
            }, _applyTransition: function (b) {
                this._ui.container.removeClass(this._fallbackTransition), b && "none" !== b && (this._fallbackTransition = a.mobile._maybeDegradeTransition(b), "none" === this._fallbackTransition && (this._fallbackTransition = ""), this._ui.container.addClass(this._fallbackTransition))
            }, _setTransition: function (a) {
                this._currentTransition || this._applyTransition(a)
            }, _setTolerance: function (b) {
                var c = {t: 30, r: 15, b: 30, l: 15};
                if (b !== d) {
                    var e = String(b).split(",");
                    switch (a.each(e, function (a, b) {
                        e[a] = parseInt(b, 10)
                    }), e.length) {
                        case 1:
                            isNaN(e[0]) || (c.t = c.r = c.b = c.l = e[0]);
                            break;
                        case 2:
                            isNaN(e[0]) || (c.t = c.b = e[0]), isNaN(e[1]) || (c.l = c.r = e[1]);
                            break;
                        case 4:
                            isNaN(e[0]) || (c.t = e[0]), isNaN(e[1]) || (c.r = e[1]), isNaN(e[2]) || (c.b = e[2]), isNaN(e[3]) || (c.l = e[3])
                    }
                }
                this._tolerance = c
            }, _setOption: function (a, b) {
                var c = "_set" + a.charAt(0).toUpperCase() + a.slice(1);
                this[c] !== d && this[c](b), this._super(a, b)
            }, _placementCoords: function (a) {
                var b, d, g = f(), h = {
                    x: this._tolerance.l,
                    y: g.y + this._tolerance.t,
                    cx: g.cx - this._tolerance.l - this._tolerance.r,
                    cy: g.cy - this._tolerance.t - this._tolerance.b
                };
                this._ui.container.css("max-width", h.cx), b = {
                    cx: this._ui.container.outerWidth(!0),
                    cy: this._ui.container.outerHeight(!0)
                }, d = {x: e(h.cx, b.cx, h.x, a.x), y: e(h.cy, b.cy, h.y, a.y)}, d.y = Math.max(0, d.y);
                var i = c.documentElement, j = c.body, k = Math.max(i.clientHeight, j.scrollHeight, j.offsetHeight, i.scrollHeight, i.offsetHeight);
                return d.y -= Math.min(d.y, Math.max(0, d.y + b.cy - k)), {left: d.x, top: d.y}
            }, _createPrereqs: function (b, c, d) {
                var e, f = this;
                e = {screen: a.Deferred(), container: a.Deferred()}, e.screen.then(function () {
                    e === f._prereqs && b()
                }), e.container.then(function () {
                    e === f._prereqs && c()
                }), a.when(e.screen, e.container).done(function () {
                    e === f._prereqs && (f._prereqs = null, d())
                }), f._prereqs = e
            }, _animate: function (b) {
                return this._ui.screen.removeClass(b.classToRemove).addClass(b.screenClassToAdd), b.prereqs.screen.resolve(), b.transition && "none" !== b.transition && (b.applyTransition && this._applyTransition(b.transition), this._fallbackTransition) ? (this._ui.container.animationComplete(a.proxy(b.prereqs.container, "resolve")).addClass(b.containerClassToAdd).removeClass(b.classToRemove), void 0) : (this._ui.container.removeClass(b.classToRemove), b.prereqs.container.resolve(), void 0)
            }, _desiredCoords: function (b) {
                var c, d = null, e = f(), g = b.x, h = b.y, i = b.positionTo;
                if (i && "origin" !== i)if ("window" === i)g = e.cx / 2 + e.x, h = e.cy / 2 + e.y; else {
                    try {
                        d = a(i)
                    } catch (j) {
                        d = null
                    }
                    d && (d.filter(":visible"), 0 === d.length && (d = null))
                }
                return d && (c = d.offset(), g = c.left + d.outerWidth() / 2, h = c.top + d.outerHeight() / 2), ("number" !== a.type(g) || isNaN(g)) && (g = e.cx / 2 + e.x), ("number" !== a.type(h) || isNaN(h)) && (h = e.cy / 2 + e.y), {
                    x: g,
                    y: h
                }
            }, _reposition: function (a) {
                a = {
                    x: a.x,
                    y: a.y,
                    positionTo: a.positionTo
                }, this._trigger("beforeposition", d, a), this._ui.container.offset(this._placementCoords(this._desiredCoords(a)))
            }, reposition: function (a) {
                this._isOpen && this._reposition(a)
            }, _openPrereqsComplete: function () {
                this._ui.container.addClass("ui-popup-active"), this._isOpen = !0, this._resizeScreen(), this._ui.container.attr("tabindex", "0").focus(), this._ignoreResizeEvents(), this._trigger("afteropen")
            }, _open: function (b) {
                var c = a.extend({}, this.options, b), d = function () {
                    var a = navigator.userAgent, b = a.match(/AppleWebKit\/([0-9\.]+)/), c = !!b && b[1], d = a.match(/Android (\d+(?:\.\d+))/), e = !!d && d[1], f = a.indexOf("Chrome") > -1;
                    return null !== d && "4.0" === e && c && c > 534.13 && !f ? !0 : !1
                }();
                this._createPrereqs(a.noop, a.noop, a.proxy(this, "_openPrereqsComplete")), this._currentTransition = c.transition, this._applyTransition(c.transition), this.options.theme || this._setTheme(this._page.jqmData("theme") || a.mobile.getInheritedTheme(this._page, "c")), this._ui.screen.removeClass("ui-screen-hidden"), this._ui.container.removeClass("ui-popup-hidden"), this._reposition(c), this.options.overlayTheme && d && this.element.closest(".ui-page").addClass("ui-popup-open"), this._animate({
                    additionalCondition: !0,
                    transition: c.transition,
                    classToRemove: "",
                    screenClassToAdd: "in",
                    containerClassToAdd: "in",
                    applyTransition: !1,
                    prereqs: this._prereqs
                })
            }, _closePrereqScreen: function () {
                this._ui.screen.removeClass("out").addClass("ui-screen-hidden")
            }, _closePrereqContainer: function () {
                this._ui.container.removeClass("reverse out").addClass("ui-popup-hidden").removeAttr("style")
            }, _closePrereqsDone: function () {
                var b = this._ui.container;
                b.removeAttr("tabindex"), a.mobile.popup.active = d, a(":focus", b[0]).add(b[0]).blur(), this._trigger("afterclose")
            }, _close: function (b) {
                this._ui.container.removeClass("ui-popup-active"), this._page.removeClass("ui-popup-open"), this._isOpen = !1, this._createPrereqs(a.proxy(this, "_closePrereqScreen"), a.proxy(this, "_closePrereqContainer"), a.proxy(this, "_closePrereqsDone")), this._animate({
                    additionalCondition: this._ui.screen.hasClass("in"),
                    transition: b ? "none" : this._currentTransition,
                    classToRemove: "in",
                    screenClassToAdd: "out",
                    containerClassToAdd: "reverse out",
                    applyTransition: !0,
                    prereqs: this._prereqs
                })
            }, _unenhance: function () {
                this._setTheme("none"), this.element.detach().insertAfter(this._ui.placeholder).removeClass("ui-popup ui-overlay-shadow ui-corner-all"), this._ui.screen.remove(), this._ui.container.remove(), this._ui.placeholder.remove()
            }, _destroy: function () {
                a.mobile.popup.active === this ? (this.element.one("popupafterclose", a.proxy(this, "_unenhance")), this.close()) : this._unenhance()
            }, _closePopup: function (c, d) {
                var e, f, g = this.options, h = !1;
                b.scrollTo(0, this._scrollTop), c && "pagebeforechange" === c.type && d && (e = "string" == typeof d.toPage ? d.toPage : d.toPage.jqmData("url"), e = a.mobile.path.parseUrl(e), f = e.pathname + e.search + e.hash, this._myUrl !== a.mobile.path.makeUrlAbsolute(f) ? h = !0 : c.preventDefault()), g.container.unbind(g.closeEvents), this.element.undelegate(g.closeLinkSelector, g.closeLinkEvents), this._close(h)
            }, _bindContainerClose: function () {
                this.options.container.one(this.options.closeEvents, a.proxy(this, "_closePopup"))
            }, open: function (c) {
                var d, e, f, g, h, i, j = this, k = this.options;
                if (!a.mobile.popup.active) {
                    if (a.mobile.popup.active = this, this._scrollTop = a.mobile.window.scrollTop(), !k.history)return j._open(c), j._bindContainerClose(), j.element.delegate(k.closeLinkSelector, k.closeLinkEvents, function (a) {
                        j.close(), a.preventDefault()
                    }), void 0;
                    if (i = a.mobile.urlHistory, e = a.mobile.dialogHashKey, f = a.mobile.activePage, g = f.is(".ui-dialog"), this._myUrl = d = i.getActive().url, h = d.indexOf(e) > -1 && !g && i.activeIndex > 0)return j._open(c), j._bindContainerClose(), void 0;
                    -1 !== d.indexOf(e) || g ? d = a.mobile.path.parseLocation().hash + e : d += d.indexOf("#") > -1 ? e : "#" + e, 0 === i.activeIndex && d === i.initialDst && (d += e), a(b).one("beforenavigate", function (a) {
                        a.preventDefault(), j._open(c), j._bindContainerClose()
                    }), this.urlAltered = !0, a.mobile.navigate(d, {role: "dialog"})
                }
            }, close: function () {
                a.mobile.popup.active === this && (this._scrollTop = a.mobile.window.scrollTop(), this.options.history && this.urlAltered ? (a.mobile.back(), this.urlAltered = !1) : this._closePopup())
            }
        }), a.mobile.popup.handleLink = function (b) {
            var c, d = b.closest(":jqmData(role='page')"), e = 0 === d.length ? a("body") : d, f = a(a.mobile.path.parseUrl(b.attr("href")).hash, e[0]);
            f.data("mobile-popup") && (c = b.offset(), f.popup("open", {
                x: c.left + b.outerWidth() / 2,
                y: c.top + b.outerHeight() / 2,
                transition: b.jqmData("transition"),
                positionTo: b.jqmData("position-to")
            })), setTimeout(function () {
                var c = b.parent().parent();
                c.hasClass("ui-li") && (b = c.parent()), b.removeClass(a.mobile.activeBtnClass)
            }, 300)
        }, a.mobile.document.bind("pagebeforechange", function (b, c) {
            "popup" === c.options.role && (a.mobile.popup.handleLink(c.options.link), b.preventDefault())
        }), a.mobile.document.bind("pagecreate create", function (b) {
            a.mobile.popup.prototype.enhanceWithin(b.target, !0)
        })
    }(a), function (a, b) {
        var d = function (d) {
            var e, f, g, h = (d.select, d._destroy), i = d.selectID, j = i ? i : (a.mobile.ns || "") + "uuid-" + d.uuid, k = j + "-listbox", l = j + "-dialog", m = d.label, n = d.select.closest(".ui-page"), o = d._selectOptions(), p = d.isMultiple = d.select[0].multiple, q = i + "-button", r = i + "-menu", s = a("<div data-" + a.mobile.ns + "role='dialog' id='" + l + "' data-" + a.mobile.ns + "theme='" + d.options.theme + "' data-" + a.mobile.ns + "overlay-theme='" + d.options.overlayTheme + "'>" + "<div data-" + a.mobile.ns + "role='header'>" + "<div class='ui-title'>" + m.getEncodedText() + "</div>" + "</div>" + "<div data-" + a.mobile.ns + "role='content'></div>" + "</div>"), t = a("<div id='" + k + "' class='ui-selectmenu'>").insertAfter(d.select).popup({theme: d.options.overlayTheme}), u = a("<ul>", {
                "class": "ui-selectmenu-list",
                id: r,
                role: "listbox",
                "aria-labelledby": q
            }).attr("data-" + a.mobile.ns + "theme", d.options.theme).attr("data-" + a.mobile.ns + "divider-theme", d.options.dividerTheme).appendTo(t), v = a("<div>", {"class": "ui-header ui-bar-" + d.options.theme}).prependTo(t), w = a("<h1>", {"class": "ui-title"}).appendTo(v);
            d.isMultiple && (g = a("<a>", {
                text: d.options.closeText,
                href: "#",
                "class": "ui-btn-left"
            }).attr("data-" + a.mobile.ns + "iconpos", "notext").attr("data-" + a.mobile.ns + "icon", "delete").appendTo(v).buttonMarkup()), a.extend(d, {
                select: d.select,
                selectID: i,
                buttonId: q,
                menuId: r,
                popupID: k,
                dialogID: l,
                thisPage: n,
                menuPage: s,
                label: m,
                selectOptions: o,
                isMultiple: p,
                theme: d.options.theme,
                listbox: t,
                list: u,
                header: v,
                headerTitle: w,
                headerClose: g,
                menuPageContent: e,
                menuPageClose: f,
                placeholder: "",
                build: function () {
                    var c = this, e = function (a) {
                        return a.replace(/([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g, "\\$1")
                    };
                    c.refresh(), c._origTabIndex === b && (c._origTabIndex = null === c.select[0].getAttribute("tabindex") ? !1 : c.select.attr("tabindex")), c.select.attr("tabindex", "-1").focus(function () {
                        a(this).blur(), c.button.focus()
                    }), c.button.bind("vclick keydown", function (b) {
                        c.options.disabled || c.isOpen || ("vclick" === b.type || b.keyCode && (b.keyCode === a.mobile.keyCode.ENTER || b.keyCode === a.mobile.keyCode.SPACE)) && (c._decideFormat(), "overlay" === c.menuType ? c.button.attr("href", "#" + e(c.popupID)).attr("data-" + (a.mobile.ns || "") + "rel", "popup") : c.button.attr("href", "#" + e(c.dialogID)).attr("data-" + (a.mobile.ns || "") + "rel", "dialog"), c.isOpen = !0)
                    }), c.list.attr("role", "listbox").bind("focusin", function (b) {
                        a(b.target).attr("tabindex", "0").trigger("vmouseover")
                    }).bind("focusout", function (b) {
                        a(b.target).attr("tabindex", "-1").trigger("vmouseout")
                    }).delegate("li:not(.ui-disabled, .ui-li-divider)", "click", function (b) {
                        var e = c.select[0].selectedIndex, f = c.list.find("li:not(.ui-li-divider)").index(this), g = c._selectOptions().eq(f)[0];
                        g.selected = c.isMultiple ? !g.selected : !0, c.isMultiple && a(this).find(".ui-icon").toggleClass("ui-icon-checkbox-on", g.selected).toggleClass("ui-icon-checkbox-off", !g.selected), (c.isMultiple || e !== f) && c.select.trigger("change"), c.isMultiple ? c.list.find("li:not(.ui-li-divider)").eq(f).addClass("ui-btn-down-" + d.options.theme).find("a").first().focus() : c.close(), b.preventDefault()
                    }).keydown(function (b) {
                        var c, e, f = a(b.target), g = f.closest("li");
                        switch (b.keyCode) {
                            case 38:
                                return c = g.prev().not(".ui-selectmenu-placeholder"), c.is(".ui-li-divider") && (c = c.prev()), c.length && (f.blur().attr("tabindex", "-1"), c.addClass("ui-btn-down-" + d.options.theme).find("a").first().focus()), !1;
                            case 40:
                                return e = g.next(), e.is(".ui-li-divider") && (e = e.next()), e.length && (f.blur().attr("tabindex", "-1"), e.addClass("ui-btn-down-" + d.options.theme).find("a").first().focus()), !1;
                            case 13:
                            case 32:
                                return f.trigger("click"), !1
                        }
                    }), c.menuPage.bind("pagehide", function () {
                        a.mobile._bindPageRemove.call(c.thisPage)
                    }), c.listbox.bind("popupafterclose", function () {
                        c.close()
                    }), c.isMultiple && c.headerClose.click(function () {
                        return "overlay" === c.menuType ? (c.close(), !1) : void 0
                    }), c.thisPage.addDependents(this.menuPage)
                },
                _isRebuildRequired: function () {
                    var a = this.list.find("li"), b = this._selectOptions();
                    return b.text() !== a.text()
                },
                selected: function () {
                    return this._selectOptions().filter(":selected:not( :jqmData(placeholder='true') )")
                },
                refresh: function (b) {
                    var c, d = this;
                    this.element, this.isMultiple, (b || this._isRebuildRequired()) && d._buildList(), c = this.selectedIndices(), d.setButtonText(), d.setButtonCount(), d.list.find("li:not(.ui-li-divider)").removeClass(a.mobile.activeBtnClass).attr("aria-selected", !1).each(function (b) {
                        if (a.inArray(b, c) > -1) {
                            var e = a(this);
                            e.attr("aria-selected", !0), d.isMultiple ? e.find(".ui-icon").removeClass("ui-icon-checkbox-off").addClass("ui-icon-checkbox-on") : e.is(".ui-selectmenu-placeholder") ? e.next().addClass(a.mobile.activeBtnClass) : e.addClass(a.mobile.activeBtnClass)
                        }
                    })
                },
                close: function () {
                    if (!this.options.disabled && this.isOpen) {
                        var a = this;
                        "page" === a.menuType ? (a.menuPage.dialog("close"), a.list.appendTo(a.listbox)) : a.listbox.popup("close"), a._focusButton(), a.isOpen = !1
                    }
                },
                open: function () {
                    this.button.click()
                },
                _decideFormat: function () {
                    function b() {
                        var b = c.list.find("." + a.mobile.activeBtnClass + " a");
                        0 === b.length && (b = c.list.find("li.ui-btn:not( :jqmData(placeholder='true') ) a")), b.first().focus().closest("li").addClass("ui-btn-down-" + d.options.theme)
                    }

                    var c = this, e = a.mobile.window, f = c.list.parent(), g = f.outerHeight(), h = (f.outerWidth(), a("." + a.mobile.activePageClass), e.scrollTop()), i = c.button.offset().top, j = e.height();
                    e.width(), g > j - 80 || !a.support.scrollTop ? (c.menuPage.appendTo(a.mobile.pageContainer).page(), c.menuPageContent = s.find(".ui-content"), c.menuPageClose = s.find(".ui-header a"), c.thisPage.unbind("pagehide.remove"), 0 === h && i > j && c.thisPage.one("pagehide", function () {
                        a(this).jqmData("lastScroll", i)
                    }), c.menuPage.one("pageshow", function () {
                        b()
                    }).one("pagehide", function () {
                        c.close()
                    }), c.menuType = "page", c.menuPageContent.append(c.list), c.menuPage.find("div .ui-title").text(c.label.text())) : (c.menuType = "overlay", c.listbox.one("popupafteropen", b))
                },
                _buildList: function () {
                    var b = this, d = this.options, e = this.placeholder, f = !0, g = b.isMultiple ? "checkbox-off" : "false";
                    b.list.empty().filter(".ui-listview").listview("destroy");
                    for (var h, i = b.select.find("option"), j = i.length, k = this.select[0], l = "data-" + a.mobile.ns, m = l + "option-index", n = l + "icon", o = l + "role", p = l + "placeholder", q = c.createDocumentFragment(), r = !1, s = 0; j > s; s++, r = !1) {
                        var t = i[s], u = a(t), v = t.parentNode, w = u.text(), x = c.createElement("a"), y = [];
                        if (x.setAttribute("href", "#"), x.appendChild(c.createTextNode(w)), v !== k && "optgroup" === v.nodeName.toLowerCase()) {
                            var z = v.getAttribute("label");
                            if (z !== h) {
                                var A = c.createElement("li");
                                A.setAttribute(o, "list-divider"), A.setAttribute("role", "option"), A.setAttribute("tabindex", "-1"), A.appendChild(c.createTextNode(z)), q.appendChild(A), h = z
                            }
                        }
                        !f || t.getAttribute("value") && 0 !== w.length && !u.jqmData("placeholder") || (f = !1, r = !0, null === t.getAttribute(p) && (this._removePlaceholderAttr = !0), t.setAttribute(p, !0), d.hidePlaceholderMenuItems && y.push("ui-selectmenu-placeholder"), e !== w && (e = b.placeholder = w));
                        var B = c.createElement("li");
                        t.disabled && (y.push("ui-disabled"), B.setAttribute("aria-disabled", !0)), B.setAttribute(m, s), B.setAttribute(n, g), r && B.setAttribute(p, !0), B.className = y.join(" "), B.setAttribute("role", "option"), x.setAttribute("tabindex", "-1"), B.appendChild(x), q.appendChild(B)
                    }
                    b.list[0].appendChild(q), this.isMultiple || e.length ? this.headerTitle.text(this.placeholder) : this.header.hide(), b.list.listview()
                },
                _button: function () {
                    return a("<a>", {
                        href: "#",
                        role: "button",
                        id: this.buttonId,
                        "aria-haspopup": "true",
                        "aria-owns": this.menuId
                    })
                },
                _destroy: function () {
                    this.close(), this._origTabIndex !== b && (this._origTabIndex !== !1 ? this.select.attr("tabindex", this._origTabIndex) : this.select.removeAttr("tabindex")), this._removePlaceholderAttr && this._selectOptions().removeAttr("data-" + a.mobile.ns + "placeholder"), this.listbox.remove(), this.menuPage.remove(), h.apply(this, arguments)
                }
            })
        };
        a.mobile.document.bind("selectmenubeforecreate", function (b) {
            var c = a(b.target).data("mobile-selectmenu");
            c.options.nativeMenu || 0 !== c.element.parents(":jqmData(role='popup')").length || d(c)
        })
    }(a), function (a, b) {
        a.widget("mobile.controlgroup", a.mobile.widget, a.extend({
            options: {
                shadow: !1,
                corners: !0,
                excludeInvisible: !0,
                type: "vertical",
                mini: !1,
                initSelector: ":jqmData(role='controlgroup')"
            }, _create: function () {
                var c = this.element, d = {
                    inner: a("<div class='ui-controlgroup-controls'></div>"),
                    legend: a("<div role='heading' class='ui-controlgroup-label'></div>")
                }, e = c.children("legend"), f = this;
                c.wrapInner(d.inner), e.length && d.legend.append(e).insertBefore(c.children(0)), c.addClass("ui-corner-all ui-controlgroup"), a.extend(this, {_initialRefresh: !0}), a.each(this.options, function (a, c) {
                    f.options[a] = b, f._setOption(a, c, !0)
                })
            }, _init: function () {
                this.refresh()
            }, _setOption: function (c, d) {
                var e = "_set" + c.charAt(0).toUpperCase() + c.slice(1);
                this[e] !== b && this[e](d), this._super(c, d), this.element.attr("data-" + (a.mobile.ns || "") + c.replace(/([A-Z])/, "-$1").toLowerCase(), d)
            }, _setType: function (a) {
                this.element.removeClass("ui-controlgroup-horizontal ui-controlgroup-vertical").addClass("ui-controlgroup-" + a), this.refresh()
            }, _setCorners: function (a) {
                this.element.toggleClass("ui-corner-all", a)
            }, _setShadow: function (a) {
                this.element.toggleClass("ui-shadow", a)
            }, _setMini: function (a) {
                this.element.toggleClass("ui-mini", a)
            }, container: function () {
                return this.element.children(".ui-controlgroup-controls")
            }, refresh: function () {
                var b = this.element.find(".ui-btn").not(".ui-slider-handle"), c = this._initialRefresh;
                a.mobile.checkboxradio && this.element.find(":mobile-checkboxradio").checkboxradio("refresh"), this._addFirstLastClasses(b, this.options.excludeInvisible ? this._getVisibles(b, c) : b, c), this._initialRefresh = !1
            }
        }, a.mobile.behaviors.addFirstLastClasses)), a(function () {
            a.mobile.document.bind("pagecreate create", function (b) {
                a.mobile.controlgroup.prototype.enhanceWithin(b.target, !0)
            })
        })
    }(a), function (a) {
        a(c).bind("pagecreate create", function (b) {
            a(b.target).find("a").jqmEnhanceable().filter(":jqmData(rel='popup')[href][href!='']").each(function () {
                var b = this, d = a(this).attr("href"), e = d.substring(1);
                b.setAttribute("aria-haspopup", !0), b.setAttribute("aria-owns", e), b.setAttribute("aria-expanded", !1), a(c).on("popupafteropen", d, function () {
                    b.setAttribute("aria-expanded", !0)
                }).on("popupafterclose", d, function () {
                    b.setAttribute("aria-expanded", !1)
                })
            }).end().not(".ui-btn, .ui-link-inherit, :jqmData(role='none'), :jqmData(role='nojs')").addClass("ui-link")
        })
    }(a), function (a, b) {
        a.widget("mobile.fixedtoolbar", a.mobile.widget, {
            options: {
                visibleOnPageShow: !0,
                disablePageZoom: !0,
                transition: "slide",
                fullscreen: !1,
                tapToggle: !0,
                tapToggleBlacklist: "a, button, input, select, textarea, .ui-header-fixed, .ui-footer-fixed, .ui-popup, .ui-panel, .ui-panel-dismiss-open",
                hideDuringFocus: "input, textarea, select",
                updatePagePadding: !0,
                trackPersistentToolbars: !0,
                supportBlacklist: function () {
                    return !a.support.fixedPosition
                },
                initSelector: ":jqmData(position='fixed')"
            }, _create: function () {
                var b = this, c = b.options, d = b.element, e = d.is(":jqmData(role='header')") ? "header" : "footer", f = d.closest(".ui-page");
                return c.supportBlacklist() ? (b.destroy(), void 0) : (d.addClass("ui-" + e + "-fixed"), c.fullscreen ? (d.addClass("ui-" + e + "-fullscreen"), f.addClass("ui-page-" + e + "-fullscreen")) : f.addClass("ui-page-" + e + "-fixed"), a.extend(this, {_thisPage: null}), b._addTransitionClass(), b._bindPageEvents(), b._bindToggleHandlers(), void 0)
            }, _addTransitionClass: function () {
                var a = this.options.transition;
                a && "none" !== a && ("slide" === a && (a = this.element.is(".ui-header") ? "slidedown" : "slideup"), this.element.addClass(a))
            }, _bindPageEvents: function () {
                this._thisPage = this.element.closest(".ui-page"), this._on(this._thisPage, {
                    pagebeforeshow: "_handlePageBeforeShow",
                    webkitAnimationStart: "_handleAnimationStart",
                    animationstart: "_handleAnimationStart",
                    updatelayout: "_handleAnimationStart",
                    pageshow: "_handlePageShow",
                    pagebeforehide: "_handlePageBeforeHide"
                })
            }, _handlePageBeforeShow: function () {
                var b = this.options;
                b.disablePageZoom && a.mobile.zoom.disable(!0), b.visibleOnPageShow || this.hide(!0)
            }, _handleAnimationStart: function () {
                this.options.updatePagePadding && this.updatePagePadding(this._thisPage)
            }, _handlePageShow: function () {
                this.updatePagePadding(this._thisPage), this.options.updatePagePadding && this._on(a.mobile.window, {throttledresize: "updatePagePadding"})
            }, _handlePageBeforeHide: function (b, c) {
                var d = this.options;
                if (d.disablePageZoom && a.mobile.zoom.enable(!0), d.updatePagePadding && this._off(a.mobile.window, "throttledresize"), d.trackPersistentToolbars) {
                    var e = a(".ui-footer-fixed:jqmData(id)", this._thisPage), f = a(".ui-header-fixed:jqmData(id)", this._thisPage), g = e.length && c.nextPage && a(".ui-footer-fixed:jqmData(id='" + e.jqmData("id") + "')", c.nextPage) || a(), h = f.length && c.nextPage && a(".ui-header-fixed:jqmData(id='" + f.jqmData("id") + "')", c.nextPage) || a();
                    (g.length || h.length) && (g.add(h).appendTo(a.mobile.pageContainer), c.nextPage.one("pageshow", function () {
                        h.prependTo(this), g.appendTo(this)
                    }))
                }
            }, _visible: !0, updatePagePadding: function (c) {
                var d = this.element, e = d.is(".ui-header"), f = parseFloat(d.css(e ? "top" : "bottom"));
                this.options.fullscreen || (c = c && c.type === b && c || this._thisPage || d.closest(".ui-page"), a(c).css("padding-" + (e ? "top" : "bottom"), d.outerHeight() + f))
            }, _useTransition: function (b) {
                var c = a.mobile.window, d = this.element, e = c.scrollTop(), f = d.height(), g = d.closest(".ui-page").height(), h = a.mobile.getScreenHeight(), i = d.is(":jqmData(role='header')") ? "header" : "footer";
                return !b && (this.options.transition && "none" !== this.options.transition && ("header" === i && !this.options.fullscreen && e > f || "footer" === i && !this.options.fullscreen && g - f > e + h) || this.options.fullscreen)
            }, show: function (a) {
                var b = "ui-fixed-hidden", c = this.element;
                this._useTransition(a) ? c.removeClass("out " + b).addClass("in").animationComplete(function () {
                    c.removeClass("in")
                }) : c.removeClass(b), this._visible = !0
            }, hide: function (a) {
                var b = "ui-fixed-hidden", c = this.element, d = "out" + ("slide" === this.options.transition ? " reverse" : "");
                this._useTransition(a) ? c.addClass(d).removeClass("in").animationComplete(function () {
                    c.addClass(b).removeClass(d)
                }) : c.addClass(b).removeClass(d), this._visible = !1
            }, toggle: function () {
                this[this._visible ? "hide" : "show"]()
            }, _bindToggleHandlers: function () {
                var b, c, d = this, e = d.options, f = d.element, g = !0;
                f.closest(".ui-page").bind("vclick", function (b) {
                    e.tapToggle && !a(b.target).closest(e.tapToggleBlacklist).length && d.toggle()
                }).bind("focusin focusout", function (f) {
                    screen.width < 1025 && a(f.target).is(e.hideDuringFocus) && !a(f.target).closest(".ui-header-fixed, .ui-footer-fixed").length && ("focusout" !== f.type || g ? "focusin" === f.type && g && (clearTimeout(b), g = !1, c = setTimeout(function () {
                        d.hide()
                    }, 0)) : (g = !0, clearTimeout(c), b = setTimeout(function () {
                        d.show()
                    }, 0)))
                })
            }, _destroy: function () {
                var a = this.element, b = a.is(".ui-header");
                a.closest(".ui-page").css("padding-" + (b ? "top" : "bottom"), ""), a.removeClass("ui-header-fixed ui-footer-fixed ui-header-fullscreen ui-footer-fullscreen in out fade slidedown slideup ui-fixed-hidden"), a.closest(".ui-page").removeClass("ui-page-header-fixed ui-page-footer-fixed ui-page-header-fullscreen ui-page-footer-fullscreen")
            }
        }), a.mobile.document.bind("pagecreate create", function (b) {
            a(b.target).jqmData("fullscreen") && a(a.mobile.fixedtoolbar.prototype.options.initSelector, b.target).not(":jqmData(fullscreen)").jqmData("fullscreen", !0), a.mobile.fixedtoolbar.prototype.enhanceWithin(b.target)
        })
    }(a), function (a) {
        a.widget("mobile.fixedtoolbar", a.mobile.fixedtoolbar, {
            _create: function () {
                this._super(), this._workarounds()
            }, _workarounds: function () {
                var a = navigator.userAgent, b = navigator.platform, c = a.match(/AppleWebKit\/([0-9]+)/), d = !!c && c[1], e = null, f = this;
                if (b.indexOf("iPhone") > -1 || b.indexOf("iPad") > -1 || b.indexOf("iPod") > -1)e = "ios"; else {
                    if (!(a.indexOf("Android") > -1))return;
                    e = "android"
                }
                if ("ios" === e)f._bindScrollWorkaround(); else {
                    if (!("android" === e && d && 534 > d))return;
                    f._bindScrollWorkaround(), f._bindListThumbWorkaround()
                }
            }, _viewportOffset: function () {
                var b = this.element, c = b.is(".ui-header"), d = Math.abs(b.offset().top - a.mobile.window.scrollTop());
                return c || (d = Math.round(d - a.mobile.window.height() + b.outerHeight()) - 60), d
            }, _bindScrollWorkaround: function () {
                var b = this;
                this._on(a.mobile.window, {
                    scrollstop: function () {
                        var a = b._viewportOffset();
                        a > 2 && b._visible && b._triggerRedraw()
                    }
                })
            }, _bindListThumbWorkaround: function () {
                this.element.closest(".ui-page").addClass("ui-android-2x-fixed")
            }, _triggerRedraw: function () {
                var b = parseFloat(a(".ui-page-active").css("padding-bottom"));
                a(".ui-page-active").css("padding-bottom", b + 1 + "px"), setTimeout(function () {
                    a(".ui-page-active").css("padding-bottom", b + "px")
                }, 0)
            }, destroy: function () {
                this._super(), this.element.closest(".ui-page-active").removeClass("ui-android-2x-fix")
            }
        })
    }(a), function (a, d) {
        a.widget("mobile.panel", a.mobile.widget, {
            options: {
                classes: {
                    panel: "ui-panel",
                    panelOpen: "ui-panel-open",
                    panelClosed: "ui-panel-closed",
                    panelFixed: "ui-panel-fixed",
                    panelInner: "ui-panel-inner",
                    modal: "ui-panel-dismiss",
                    modalOpen: "ui-panel-dismiss-open",
                    pagePanel: "ui-page-panel",
                    pagePanelOpen: "ui-page-panel-open",
                    contentWrap: "ui-panel-content-wrap",
                    contentWrapOpen: "ui-panel-content-wrap-open",
                    contentWrapClosed: "ui-panel-content-wrap-closed",
                    contentFixedToolbar: "ui-panel-content-fixed-toolbar",
                    contentFixedToolbarOpen: "ui-panel-content-fixed-toolbar-open",
                    contentFixedToolbarClosed: "ui-panel-content-fixed-toolbar-closed",
                    animate: "ui-panel-animate"
                },
                animate: !0,
                theme: "c",
                position: "left",
                dismissible: !0,
                display: "reveal",
                initSelector: ":jqmData(role='panel')",
                swipeClose: !0,
                positionFixed: !1
            },
            _panelID: null,
            _closeLink: null,
            _page: null,
            _modal: null,
            _panelInner: null,
            _wrapper: null,
            _fixedToolbar: null,
            _create: function () {
                var b = this, c = b.element, d = c.closest(":jqmData(role='page')"), e = function () {
                    var b = a.data(d[0], "mobilePage").options.theme, c = "ui-body-" + b;
                    return c
                }, f = function () {
                    var a = c.find("." + b.options.classes.panelInner);
                    return 0 === a.length && (a = c.children().wrapAll('<div class="' + b.options.classes.panelInner + '" />').parent()), a
                }, g = function () {
                    var c = d.find("." + b.options.classes.contentWrap);
                    return 0 === c.length && (c = d.children(".ui-header:not(:jqmData(position='fixed')), .ui-content:not(:jqmData(role='popup')), .ui-footer:not(:jqmData(position='fixed'))").wrapAll('<div class="' + b.options.classes.contentWrap + " " + e() + '" />').parent(), a.support.cssTransform3d && b.options.animate && c.addClass(b.options.classes.animate)), c
                }, h = function () {
                    var c = d.find("." + b.options.classes.contentFixedToolbar);
                    return 0 === c.length && (c = d.find(".ui-header:jqmData(position='fixed'), .ui-footer:jqmData(position='fixed')").addClass(b.options.classes.contentFixedToolbar), a.support.cssTransform3d && b.options.animate && c.addClass(b.options.classes.animate)), c
                };
                a.extend(this, {
                    _panelID: c.attr("id"),
                    _closeLink: c.find(":jqmData(rel='close')"),
                    _page: c.closest(":jqmData(role='page')"),
                    _pageTheme: e(),
                    _panelInner: f(),
                    _wrapper: g(),
                    _fixedToolbar: h()
                }), b._addPanelClasses(), b._wrapper.addClass(this.options.classes.contentWrapClosed), b._fixedToolbar.addClass(this.options.classes.contentFixedToolbarClosed), b._page.addClass(b.options.classes.pagePanel), a.support.cssTransform3d && b.options.animate && this.element.addClass(b.options.classes.animate), b._bindUpdateLayout(), b._bindCloseEvents(), b._bindLinkListeners(), b._bindPageEvents(), b.options.dismissible && b._createModal(), b._bindSwipeEvents()
            },
            _createModal: function () {
                var b = this;
                b._modal = a("<div class='" + b.options.classes.modal + "' data-panelid='" + b._panelID + "'></div>").on("mousedown", function () {
                    b.close()
                }).appendTo(this._page)
            },
            _getPosDisplayClasses: function (a) {
                return a + "-position-" + this.options.position + " " + a + "-display-" + this.options.display
            },
            _getPanelClasses: function () {
                var a = this.options.classes.panel + " " + this._getPosDisplayClasses(this.options.classes.panel) + " " + this.options.classes.panelClosed;
                return this.options.theme && (a += " ui-body-" + this.options.theme), this.options.positionFixed && (a += " " + this.options.classes.panelFixed), a
            },
            _addPanelClasses: function () {
                this.element.addClass(this._getPanelClasses())
            },
            _bindCloseEvents: function () {
                var a = this;
                a._closeLink.on("click.panel", function (b) {
                    return b.preventDefault(), a.close(), !1
                }), a.element.on("click.panel", "a:jqmData(ajax='false')", function () {
                    a.close()
                })
            },
            _positionPanel: function () {
                var b = this, c = b._panelInner.outerHeight(), d = c > a.mobile.getScreenHeight();
                d || !b.options.positionFixed ? (d && (b._unfixPanel(), a.mobile.resetActivePageHeight(c)), b._scrollIntoView(c)) : b._fixPanel()
            },
            _scrollIntoView: function (c) {
                c < a(b).scrollTop() && b.scrollTo(0, 0)
            },
            _bindFixListener: function () {
                this._on(a(b), {throttledresize: "_positionPanel"})
            },
            _unbindFixListener: function () {
                this._off(a(b), "throttledresize")
            },
            _unfixPanel: function () {
                this.options.positionFixed && a.support.fixedPosition && this.element.removeClass(this.options.classes.panelFixed)
            },
            _fixPanel: function () {
                this.options.positionFixed && a.support.fixedPosition && this.element.addClass(this.options.classes.panelFixed)
            },
            _bindUpdateLayout: function () {
                var a = this;
                a.element.on("updatelayout", function () {
                    a._open && a._positionPanel()
                })
            },
            _bindLinkListeners: function () {
                var b = this;
                b._page.on("click.panel", "a", function (c) {
                    if (this.href.split("#")[1] === b._panelID && b._panelID !== d) {
                        c.preventDefault();
                        var e, f = a(this);
                        return f.hasClass("ui-link") || (e = f.parent().parent(), e.hasClass("ui-li") && (f = e.parent()), f.addClass(a.mobile.activeBtnClass), b.element.one("panelopen panelclose", function () {
                            f.removeClass(a.mobile.activeBtnClass)
                        })), b.toggle(), !1
                    }
                })
            },
            _bindSwipeEvents: function () {
                var a = this, b = a._modal ? a.element.add(a._modal) : a.element;
                a.options.swipeClose && ("left" === a.options.position ? b.on("swipeleft.panel", function () {
                    a.close()
                }) : b.on("swiperight.panel", function () {
                    a.close()
                }))
            },
            _bindPageEvents: function () {
                var a = this;
                a._page.on("panelbeforeopen", function (b) {
                    a._open && b.target !== a.element[0] && a.close()
                }).on("pagehide", function () {
                    a._open && a.close(!0)
                }).on("keyup.panel", function (b) {
                    27 === b.keyCode && a._open && a.close()
                })
            },
            _open: !1,
            _contentWrapOpenClasses: null,
            _fixedToolbarOpenClasses: null,
            _modalOpenClasses: null,
            open: function (b) {
                if (!this._open) {
                    var c = this, d = c.options, e = function () {
                        c._page.off("panelclose"), c._page.jqmData("panel", "open"), !b && a.support.cssTransform3d && d.animate ? c.element.add(c._wrapper).on(c._transitionEndEvents, f) : setTimeout(f, 0), c.options.theme && "overlay" !== c.options.display && c._page.removeClass(c._pageTheme).addClass("ui-body-" + c.options.theme), c.element.removeClass(d.classes.panelClosed).addClass(d.classes.panelOpen), c._positionPanel(), c.options.theme && "overlay" !== c.options.display && c._wrapper.css("min-height", c._page.css("min-height")), c._contentWrapOpenClasses = c._getPosDisplayClasses(d.classes.contentWrap), c._wrapper.removeClass(d.classes.contentWrapClosed).addClass(c._contentWrapOpenClasses + " " + d.classes.contentWrapOpen), c._fixedToolbarOpenClasses = c._getPosDisplayClasses(d.classes.contentFixedToolbar), c._fixedToolbar.removeClass(d.classes.contentFixedToolbarClosed).addClass(c._fixedToolbarOpenClasses + " " + d.classes.contentFixedToolbarOpen), c._modalOpenClasses = c._getPosDisplayClasses(d.classes.modal) + " " + d.classes.modalOpen, c._modal && c._modal.addClass(c._modalOpenClasses)
                    }, f = function () {
                        c.element.add(c._wrapper).off(c._transitionEndEvents, f), c._page.addClass(d.classes.pagePanelOpen), c._bindFixListener(), c._trigger("open")
                    };
                    this.element.closest(".ui-page-active").length < 0 && (b = !0), c._trigger("beforeopen"), "open" === c._page.jqmData("panel") ? c._page.on("panelclose", function () {
                        e()
                    }) : e(), c._open = !0
                }
            },
            close: function (b) {
                if (this._open) {
                    var c = this.options, d = this, e = function () {
                        !b && a.support.cssTransform3d && c.animate ? d.element.add(d._wrapper).on(d._transitionEndEvents, f) : setTimeout(f, 0), d._page.removeClass(c.classes.pagePanelOpen), d.element.removeClass(c.classes.panelOpen), d._wrapper.removeClass(c.classes.contentWrapOpen), d._fixedToolbar.removeClass(c.classes.contentFixedToolbarOpen), d._modal && d._modal.removeClass(d._modalOpenClasses)
                    }, f = function () {
                        d.options.theme && "overlay" !== d.options.display && (d._page.removeClass("ui-body-" + d.options.theme).addClass(d._pageTheme), d._wrapper.css("min-height", "")), d.element.add(d._wrapper).off(d._transitionEndEvents, f), d.element.addClass(c.classes.panelClosed), d._wrapper.removeClass(d._contentWrapOpenClasses).addClass(c.classes.contentWrapClosed), d._fixedToolbar.removeClass(d._fixedToolbarOpenClasses).addClass(c.classes.contentFixedToolbarClosed), d._fixPanel(), d._unbindFixListener(), a.mobile.resetActivePageHeight(), d._page.jqmRemoveData("panel"), d._trigger("close")
                    };
                    this.element.closest(".ui-page-active").length < 0 && (b = !0), d._trigger("beforeclose"), e(), d._open = !1
                }
            },
            toggle: function () {
                this[this._open ? "close" : "open"]()
            },
            _transitionEndEvents: "webkitTransitionEnd oTransitionEnd otransitionend transitionend msTransitionEnd",
            _destroy: function () {
                var b = this.options.classes, c = this.options.theme, d = this.element.siblings("." + b.panel).length;
                d ? this._open && (this._wrapper.removeClass(b.contentWrapOpen), this._fixedToolbar.removeClass(b.contentFixedToolbarOpen), this._page.jqmRemoveData("panel"), this._page.removeClass(b.pagePanelOpen), c && this._page.removeClass("ui-body-" + c).addClass(this._pageTheme)) : (this._wrapper.children().unwrap(), this._page.find("a").unbind("panelopen panelclose"), this._page.removeClass(b.pagePanel), this._open && (this._page.jqmRemoveData("panel"), this._page.removeClass(b.pagePanelOpen), c && this._page.removeClass("ui-body-" + c).addClass(this._pageTheme), a.mobile.resetActivePageHeight())), this._panelInner.children().unwrap(), this.element.removeClass([this._getPanelClasses(), b.panelAnimate].join(" ")).off("swipeleft.panel swiperight.panel").off("panelbeforeopen").off("panelhide").off("keyup.panel").off("updatelayout"), this._closeLink.off("click.panel"), this._modal && this._modal.remove(), this.element.off(this._transitionEndEvents).removeClass([b.panelUnfixed, b.panelClosed, b.panelOpen].join(" "))
            }
        }), a(c).bind("pagecreate create", function (b) {
            a.mobile.panel.prototype.enhanceWithin(b.target)
        })
    }(a), function (a, b) {
        a.widget("mobile.table", a.mobile.widget, {
            options: {
                classes: {table: "ui-table"},
                initSelector: ":jqmData(role='table')"
            }, _create: function () {
                var a = this;
                a.refresh(!0)
            }, refresh: function (c) {
                var d = this, e = this.element.find("thead tr");
                c && this.element.addClass(this.options.classes.table), d.headers = this.element.find("tr:eq(0)").children(), d.allHeaders = d.headers.add(e.children()), e.each(function () {
                    var f = 0;
                    a(this).children().each(function () {
                        var g = parseInt(a(this).attr("colspan"), 10), h = ":nth-child(" + (f + 1) + ")";
                        if (a(this).jqmData("colstart", f + 1), g)for (var i = 0; g - 1 > i; i++)f++, h += ", :nth-child(" + (f + 1) + ")";
                        c === b && a(this).jqmData("cells", ""), a(this).jqmData("cells", d.element.find("tr").not(e.eq(0)).not(this).children(h)), f++
                    })
                }), c === b && this.element.trigger("refresh")
            }
        }), a.mobile.document.bind("pagecreate create", function (b) {
            a.mobile.table.prototype.enhanceWithin(b.target)
        })
    }(a), function (a, b) {
        a.mobile.table.prototype.options.mode = "columntoggle", a.mobile.table.prototype.options.columnBtnTheme = null, a.mobile.table.prototype.options.columnPopupTheme = null, a.mobile.table.prototype.options.columnBtnText = "Columns...", a.mobile.table.prototype.options.classes = a.extend(a.mobile.table.prototype.options.classes, {
            popup: "ui-table-columntoggle-popup",
            columnBtn: "ui-table-columntoggle-btn",
            priorityPrefix: "ui-table-priority-",
            columnToggleTable: "ui-table-columntoggle"
        }), a.mobile.document.delegate(":jqmData(role='table')", "tablecreate refresh", function (c) {
            var d, e, f, g, h = a(this), i = h.data("mobile-table"), j = c.type, k = i.options, l = a.mobile.ns, m = (h.attr("id") || k.classes.popup) + "-popup";
            "columntoggle" === k.mode && ("refresh" !== j && (i.element.addClass(k.classes.columnToggleTable), d = a("<a href='#" + m + "' class='" + k.classes.columnBtn + "' data-" + l + "rel='popup' data-" + l + "mini='true'>" + k.columnBtnText + "</a>"), e = a("<div data-" + l + "role='popup' data-" + l + "role='fieldcontain' class='" + k.classes.popup + "' id='" + m + "'></div>"), f = a("<fieldset data-" + l + "role='controlgroup'></fieldset>")), i.headers.not("td").each(function (b) {
                var c = a(this).jqmData("priority"), d = a(this).add(a(this).jqmData("cells"));
                c && (d.addClass(k.classes.priorityPrefix + c), "refresh" !== j ? a("<label><input type='checkbox' checked />" + a(this).text() + "</label>").appendTo(f).children(0).jqmData("cells", d).checkboxradio({theme: k.columnPopupTheme}) : a("#" + m + " fieldset div:eq(" + b + ")").find("input").jqmData("cells", d))
            }), "refresh" !== j && f.appendTo(e), g = f === b ? a("#" + m + " fieldset") : f, "refresh" !== j && (g.on("change", "input", function () {
                this.checked ? a(this).jqmData("cells").removeClass("ui-table-cell-hidden").addClass("ui-table-cell-visible") : a(this).jqmData("cells").removeClass("ui-table-cell-visible").addClass("ui-table-cell-hidden")
            }), d.insertBefore(h).buttonMarkup({theme: k.columnBtnTheme}), e.insertBefore(h).popup()), i.update = function () {
                g.find("input").each(function () {
                    this.checked ? (this.checked = "table-cell" === a(this).jqmData("cells").eq(0).css("display"), "refresh" === j && a(this).jqmData("cells").addClass("ui-table-cell-visible")) : a(this).jqmData("cells").addClass("ui-table-cell-hidden"), a(this).checkboxradio("refresh")
                })
            }, a.mobile.window.on("throttledresize", i.update), i.update())
        })
    }(a), function (a) {
        a.mobile.table.prototype.options.mode = "reflow", a.mobile.table.prototype.options.classes = a.extend(a.mobile.table.prototype.options.classes, {
            reflowTable: "ui-table-reflow",
            cellLabels: "ui-table-cell-label"
        }), a.mobile.document.delegate(":jqmData(role='table')", "tablecreate refresh", function (b) {
            var c = a(this), d = b.type, e = c.data("mobile-table"), f = e.options;
            if ("reflow" === f.mode) {
                "refresh" !== d && e.element.addClass(f.classes.reflowTable);
                var g = a(e.allHeaders.get().reverse());
                g.each(function () {
                    var b = a(this).jqmData("cells"), c = a(this).jqmData("colstart"), d = b.not(this).filter("thead th").length && " ui-table-cell-label-top", e = a(this).text();
                    if ("" !== e)if (d) {
                        var g = parseInt(a(this).attr("colspan"), 10), h = "";
                        g && (h = "td:nth-child(" + g + "n + " + c + ")"), b.filter(h).prepend("<b class='" + f.classes.cellLabels + d + "'>" + e + "</b>")
                    } else b.prepend("<b class='" + f.classes.cellLabels + "'>" + e + "</b>")
                })
            }
        })
    }(a), function (a, b) {
        function c(a) {
            e = a.originalEvent, i = e.accelerationIncludingGravity, f = Math.abs(i.x), g = Math.abs(i.y), h = Math.abs(i.z), !b.orientation && (f > 7 || (h > 6 && 8 > g || 8 > h && g > 6) && f > 5) ? j.enabled && j.disable() : j.enabled || j.enable()
        }

        a.mobile.iosorientationfixEnabled = !0;
        var d = navigator.userAgent;
        if (!(/iPhone|iPad|iPod/.test(navigator.platform) && /OS [1-5]_[0-9_]* like Mac OS X/i.test(d) && d.indexOf("AppleWebKit") > -1))return a.mobile.iosorientationfixEnabled = !1, void 0;
        var e, f, g, h, i, j = a.mobile.zoom;
        a.mobile.document.on("mobileinit", function () {
            a.mobile.iosorientationfixEnabled && a.mobile.window.bind("orientationchange.iosorientationfix", j.enable).bind("devicemotion.iosorientationfix", c)
        })
    }(a, this), function (a, b) {
        function d() {
            e.removeClass("ui-mobile-rendering")
        }

        var e = a("html"), f = (a("head"), a.mobile.window);
        a(b.document).trigger("mobileinit"), a.mobile.gradeA() && (a.mobile.ajaxBlacklist && (a.mobile.ajaxEnabled = !1), e.addClass("ui-mobile ui-mobile-rendering"), setTimeout(d, 5e3), a.extend(a.mobile, {
            initializePage: function () {
                var b = a.mobile.path, e = a(":jqmData(role='page'), :jqmData(role='dialog')"), g = b.stripHash(b.stripQueryParams(b.parseLocation().hash)), h = c.getElementById(g);
                e.length || (e = a("body").wrapInner("<div data-" + a.mobile.ns + "role='page'></div>").children(0)), e.each(function () {
                    var b = a(this);
                    b.jqmData("url") || b.attr("data-" + a.mobile.ns + "url", b.attr("id") || location.pathname + location.search)
                }), a.mobile.firstPage = e.first(), a.mobile.pageContainer = a.mobile.firstPage.parent().addClass("ui-mobile-viewport"), a.mobile.navreadyDeferred.resolve(), f.trigger("pagecontainercreate"), a.mobile.showPageLoadingMsg(), d(), a.mobile.hashListeningEnabled && a.mobile.path.isHashValid(location.hash) && (a(h).is(':jqmData(role="page")') || a.mobile.path.isPath(g) || g === a.mobile.dialogHashKey) ? a.event.special.navigate.isPushStateEnabled() ? (a.mobile.navigate.history.stack = [], a.mobile.navigate(a.mobile.path.isPath(location.hash) ? location.hash : location.href)) : f.trigger("hashchange", [!0]) : (a.mobile.path.isHashValid(location.hash) && (a.mobile.urlHistory.initialDst = g.replace("#", "")), a.event.special.navigate.isPushStateEnabled() && a.mobile.navigate.navigator.squash(b.parseLocation().href), a.mobile.changePage(a.mobile.firstPage, {
                    transition: "none",
                    reverse: !0,
                    changeHash: !1,
                    fromHashChange: !0
                }))
            }
        }), a(function () {
            b.scrollTo(0, 1), a.mobile.defaultHomeScroll = a.support.scrollTop && 1 !== a.mobile.window.scrollTop() ? 1 : 0, a.mobile.autoInitializePage && a.mobile.initializePage(), f.load(a.mobile.silentScroll), a.support.cssPointerEvents || a.mobile.document.delegate(".ui-disabled", "vclick", function (a) {
                a.preventDefault(), a.stopImmediatePropagation()
            })
        }))
    }(a, this)
});
/*
 //@ sourceMappingURL=jquery.mobile-1.3.2.min.map
 */