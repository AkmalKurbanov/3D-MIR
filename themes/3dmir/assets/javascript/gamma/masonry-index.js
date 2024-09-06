!(function () {
    var t = document.createElement("script");
    (t.type = "text/javascript"),
        (t.async = !0),
        (t.src = "https://vk.com/js/api/openapi.js?169"),
        (t.onload = function () {
            VK.Retargeting.Init("VK-RTRG-956860-gZUJY"), VK.Retargeting.Hit();
        }),
        document.head.appendChild(t);
})();

window.url = (function () {
    function b(c) {
        return !isNaN(parseFloat(c)) && isFinite(c);
    }
    return function a(p, d) {
        var c = d || window.location.toString();
        if (c.substring(0, 2) === "//") {
            c = "http:" + c;
        } else {
            if (c.split("://").length === 1) {
                c = "http://" + c;
            }
        }
        d = c.split("/");
        var g = { auth: "" },
            o = d[2].split("@");
        if (o.length === 1) {
            o = o[0].split(":");
        } else {
            g.auth = o[0];
            o = o[1].split(":");
        }
        (g.protocol = d[0]),
            (g.hostname = o[0]),
            (g.port = o[1] || "80"),
            (g.pathname =
                "/" +
                d.slice(3, d.length).join("/").split("?")[0].split("#")[0]);
        var e = g.pathname;
        if (e.split(".").length === 1 && e[e.length - 1] !== "/") {
            e += "/";
        }
        var k = g.hostname,
            l = k.split("."),
            m = e.split("/");
        if (!p) {
            return c;
        } else {
            if (p === "hostname") {
                return k;
            } else {
                if (p === "domain") {
                    return l.slice(-2).join(".");
                } else {
                    if (p === "tld") {
                        return l.slice(-1).join(".");
                    } else {
                        if (p === "sub") {
                            return l.slice(0, l.length - 2).join(".");
                        } else {
                            if (p === "port") {
                                return g.port || "80";
                            } else {
                                if (p === "protocol") {
                                    return g.protocol.split(":")[0];
                                } else {
                                    if (p === "auth") {
                                        return g.auth;
                                    } else {
                                        if (p === "user") {
                                            return g.auth.split(":")[0];
                                        } else {
                                            if (p === "pass") {
                                                return (
                                                    g.auth.split(":")[1] || ""
                                                );
                                            } else {
                                                if (p === "path") {
                                                    return e;
                                                } else {
                                                    if (p[0] === ".") {
                                                        p = p.substring(1);
                                                        if (b(p)) {
                                                            p = parseInt(p);
                                                            return (
                                                                l[
                                                                    p < 0
                                                                        ? l.length +
                                                                          p
                                                                        : p - 1
                                                                ] || ""
                                                            );
                                                        }
                                                    } else {
                                                        if (b(p)) {
                                                            p = parseInt(p);
                                                            return (
                                                                m[
                                                                    p < 0
                                                                        ? m.length -
                                                                          1 +
                                                                          p
                                                                        : p
                                                                ] || ""
                                                            );
                                                        } else {
                                                            if (p === "file") {
                                                                return m.slice(
                                                                    -1
                                                                )[0];
                                                            } else {
                                                                if (
                                                                    p ===
                                                                    "filename"
                                                                ) {
                                                                    return m
                                                                        .slice(
                                                                            -1
                                                                        )[0]
                                                                        .split(
                                                                            "."
                                                                        )[0];
                                                                } else {
                                                                    if (
                                                                        p ===
                                                                        "fileext"
                                                                    ) {
                                                                        return (
                                                                            m
                                                                                .slice(
                                                                                    -1
                                                                                )[0]
                                                                                .split(
                                                                                    "."
                                                                                )[1] ||
                                                                            ""
                                                                        );
                                                                    } else {
                                                                        if (
                                                                            p[0] ===
                                                                                "?" ||
                                                                            p[0] ===
                                                                                "#"
                                                                        ) {
                                                                            var h =
                                                                                    c,
                                                                                f =
                                                                                    null;
                                                                            if (
                                                                                p[0] ===
                                                                                "?"
                                                                            ) {
                                                                                h =
                                                                                    (
                                                                                        h.split(
                                                                                            "?"
                                                                                        )[1] ||
                                                                                        ""
                                                                                    ).split(
                                                                                        "#"
                                                                                    )[0];
                                                                            } else {
                                                                                if (
                                                                                    p[0] ===
                                                                                    "#"
                                                                                ) {
                                                                                    h =
                                                                                        h.split(
                                                                                            "#"
                                                                                        )[1] ||
                                                                                        "";
                                                                                }
                                                                            }
                                                                            if (
                                                                                !p[1]
                                                                            ) {
                                                                                return h;
                                                                            }
                                                                            p =
                                                                                p.substring(
                                                                                    1
                                                                                );
                                                                            h =
                                                                                h.split(
                                                                                    "&"
                                                                                );
                                                                            for (
                                                                                var j = 0,
                                                                                    n =
                                                                                        h.length;
                                                                                j <
                                                                                n;
                                                                                j++
                                                                            ) {
                                                                                f =
                                                                                    h[
                                                                                        j
                                                                                    ].split(
                                                                                        "="
                                                                                    );
                                                                                if (
                                                                                    f[0] ===
                                                                                    p
                                                                                ) {
                                                                                    return f[1];
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return "";
    };
})();
(window.Modernizr = (function (a, b, c) {
    function z(a) {
        j.cssText = a;
    }
    function A(a, b) {
        return z(m.join(a + ";") + (b || ""));
    }
    function B(a, b) {
        return typeof a === b;
    }
    function C(a, b) {
        return !!~("" + a).indexOf(b);
    }
    function D(a, b) {
        for (var d in a) {
            var e = a[d];
            if (!C(e, "-") && j[e] !== c) return b == "pfx" ? e : !0;
        }
        return !1;
    }
    function E(a, b, d) {
        for (var e in a) {
            var f = b[a[e]];
            if (f !== c)
                return d === !1 ? a[e] : B(f, "function") ? f.bind(d || b) : f;
        }
        return !1;
    }
    function F(a, b, c) {
        var d = a.charAt(0).toUpperCase() + a.slice(1),
            e = (a + " " + o.join(d + " ") + d).split(" ");
        return B(b, "string") || B(b, "undefined")
            ? D(e, b)
            : ((e = (a + " " + p.join(d + " ") + d).split(" ")), E(e, b, c));
    }
    var d = "2.6.2",
        e = {},
        f = !0,
        g = b.documentElement,
        h = "modernizr",
        i = b.createElement(h),
        j = i.style,
        k,
        l = {}.toString,
        m = " -webkit- -moz- -o- -ms- ".split(" "),
        n = "Webkit Moz O ms",
        o = n.split(" "),
        p = n.toLowerCase().split(" "),
        q = {},
        r = {},
        s = {},
        t = [],
        u = t.slice,
        v,
        w = function (a, c, d, e) {
            var f,
                i,
                j,
                k,
                l = b.createElement("div"),
                m = b.body,
                n = m || b.createElement("body");
            if (parseInt(d, 10))
                while (d--)
                    (j = b.createElement("div")),
                        (j.id = e ? e[d] : h + (d + 1)),
                        l.appendChild(j);
            return (
                (f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(
                    ""
                )),
                (l.id = h),
                ((m ? l : n).innerHTML += f),
                n.appendChild(l),
                m ||
                    ((n.style.background = ""),
                    (n.style.overflow = "hidden"),
                    (k = g.style.overflow),
                    (g.style.overflow = "hidden"),
                    g.appendChild(n)),
                (i = c(l, a)),
                m
                    ? l.parentNode.removeChild(l)
                    : (n.parentNode.removeChild(n), (g.style.overflow = k)),
                !!i
            );
        },
        x = {}.hasOwnProperty,
        y;
    !B(x, "undefined") && !B(x.call, "undefined")
        ? (y = function (a, b) {
              return x.call(a, b);
          })
        : (y = function (a, b) {
              return b in a && B(a.constructor.prototype[b], "undefined");
          }),
        Function.prototype.bind ||
            (Function.prototype.bind = function (b) {
                var c = this;
                if (typeof c != "function") throw new TypeError();
                var d = u.call(arguments, 1),
                    e = function () {
                        if (this instanceof e) {
                            var a = function () {};
                            a.prototype = c.prototype;
                            var f = new a(),
                                g = c.apply(f, d.concat(u.call(arguments)));
                            return Object(g) === g ? g : f;
                        }
                        return c.apply(b, d.concat(u.call(arguments)));
                    };
                return e;
            }),
        (q.touch = function () {
            var c;
            return (
                "ontouchstart" in a ||
                (a.DocumentTouch && b instanceof DocumentTouch)
                    ? (c = !0)
                    : w(
                          [
                              "@media (",
                              m.join("touch-enabled),("),
                              h,
                              ")",
                              "{#modernizr{top:9px;position:absolute}}",
                          ].join(""),
                          function (a) {
                              c = a.offsetTop === 9;
                          }
                      ),
                c
            );
        }),
        (q.csstransitions = function () {
            return F("transition");
        });
    for (var G in q)
        y(q, G) &&
            ((v = G.toLowerCase()),
            (e[v] = q[G]()),
            t.push((e[v] ? "" : "no-") + v));
    return (
        (e.addTest = function (a, b) {
            if (typeof a == "object")
                for (var d in a) y(a, d) && e.addTest(d, a[d]);
            else {
                a = a.toLowerCase();
                if (e[a] !== c) return e;
                (b = typeof b == "function" ? b() : b),
                    typeof f != "undefined" &&
                        f &&
                        (g.className += " " + (b ? "" : "no-") + a),
                    (e[a] = b);
            }
            return e;
        }),
        z(""),
        (i = k = null),
        (function (a, b) {
            function k(a, b) {
                var c = a.createElement("p"),
                    d = a.getElementsByTagName("head")[0] || a.documentElement;
                return (
                    (c.innerHTML = "x<style>" + b + "</style>"),
                    d.insertBefore(c.lastChild, d.firstChild)
                );
            }
            function l() {
                var a = r.elements;
                return typeof a == "string" ? a.split(" ") : a;
            }
            function m(a) {
                var b = i[a[g]];
                return b || ((b = {}), h++, (a[g] = h), (i[h] = b)), b;
            }
            function n(a, c, f) {
                c || (c = b);
                if (j) return c.createElement(a);
                f || (f = m(c));
                var g;
                return (
                    f.cache[a]
                        ? (g = f.cache[a].cloneNode())
                        : e.test(a)
                        ? (g = (f.cache[a] = f.createElem(a)).cloneNode())
                        : (g = f.createElem(a)),
                    g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g
                );
            }
            function o(a, c) {
                a || (a = b);
                if (j) return a.createDocumentFragment();
                c = c || m(a);
                var d = c.frag.cloneNode(),
                    e = 0,
                    f = l(),
                    g = f.length;
                for (; e < g; e++) d.createElement(f[e]);
                return d;
            }
            function p(a, b) {
                b.cache ||
                    ((b.cache = {}),
                    (b.createElem = a.createElement),
                    (b.createFrag = a.createDocumentFragment),
                    (b.frag = b.createFrag())),
                    (a.createElement = function (c) {
                        return r.shivMethods ? n(c, a, b) : b.createElem(c);
                    }),
                    (a.createDocumentFragment = Function(
                        "h,f",
                        "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" +
                            l()
                                .join()
                                .replace(/\w+/g, function (a) {
                                    return (
                                        b.createElem(a),
                                        b.frag.createElement(a),
                                        'c("' + a + '")'
                                    );
                                }) +
                            ");return n}"
                    )(r, b.frag));
            }
            function q(a) {
                a || (a = b);
                var c = m(a);
                return (
                    r.shivCSS &&
                        !f &&
                        !c.hasCSS &&
                        (c.hasCSS = !!k(
                            a,
                            "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}"
                        )),
                    j || p(a, c),
                    a
                );
            }
            var c = a.html5 || {},
                d =
                    /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                e =
                    /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                f,
                g = "_html5shiv",
                h = 0,
                i = {},
                j;
            (function () {
                try {
                    var a = b.createElement("a");
                    (a.innerHTML = "<xyz></xyz>"),
                        (f = "hidden" in a),
                        (j =
                            a.childNodes.length == 1 ||
                            (function () {
                                b.createElement("a");
                                var a = b.createDocumentFragment();
                                return (
                                    typeof a.cloneNode == "undefined" ||
                                    typeof a.createDocumentFragment ==
                                        "undefined" ||
                                    typeof a.createElement == "undefined"
                                );
                            })());
                } catch (c) {
                    (f = !0), (j = !0);
                }
            })();
            var r = {
                elements:
                    c.elements ||
                    "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
                shivCSS: c.shivCSS !== !1,
                supportsUnknownElements: j,
                shivMethods: c.shivMethods !== !1,
                type: "default",
                shivDocument: q,
                createElement: n,
                createDocumentFragment: o,
            };
            (a.html5 = r), q(b);
        })(this, b),
        (e._version = d),
        (e._prefixes = m),
        (e._domPrefixes = p),
        (e._cssomPrefixes = o),
        (e.testProp = function (a) {
            return D([a]);
        }),
        (e.testAllProps = F),
        (e.testStyles = w),
        (e.prefixed = function (a, b, c) {
            return b ? F(a, b, c) : F(a, "pfx");
        }),
        (g.className =
            g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") +
            (f ? " js " + t.join(" ") : "")),
        e
    );
})(this, this.document)),
    (function (a, b, c) {
        function d(a) {
            return "[object Function]" == o.call(a);
        }
        function e(a) {
            return "string" == typeof a;
        }
        function f() {}
        function g(a) {
            return (
                !a || "loaded" == a || "complete" == a || "uninitialized" == a
            );
        }
        function h() {
            var a = p.shift();
            (q = 1),
                a
                    ? a.t
                        ? m(function () {
                              ("c" == a.t
                                  ? B.injectCss
                                  : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1);
                          }, 0)
                        : (a(), h())
                    : (q = 0);
        }
        function i(a, c, d, e, f, i, j) {
            function k(b) {
                if (
                    !o &&
                    g(l.readyState) &&
                    ((u.r = o = 1),
                    !q && h(),
                    (l.onload = l.onreadystatechange = null),
                    b)
                ) {
                    "img" != a &&
                        m(function () {
                            t.removeChild(l);
                        }, 50);
                    for (var d in y[c])
                        y[c].hasOwnProperty(d) && y[c][d].onload();
                }
            }
            var j = j || B.errorTimeout,
                l = b.createElement(a),
                o = 0,
                r = 0,
                u = { t: d, s: c, e: f, a: i, x: j };
            1 === y[c] && ((r = 1), (y[c] = [])),
                "object" == a ? (l.data = c) : ((l.src = c), (l.type = a)),
                (l.width = l.height = "0"),
                (l.onerror =
                    l.onload =
                    l.onreadystatechange =
                        function () {
                            k.call(this, r);
                        }),
                p.splice(e, 0, u),
                "img" != a &&
                    (r || 2 === y[c]
                        ? (t.insertBefore(l, s ? null : n), m(k, j))
                        : y[c].push(l));
        }
        function j(a, b, c, d, f) {
            return (
                (q = 0),
                (b = b || "j"),
                e(a)
                    ? i("c" == b ? v : u, a, b, this.i++, c, d, f)
                    : (p.splice(this.i++, 0, a), 1 == p.length && h()),
                this
            );
        }
        function k() {
            var a = B;
            return (a.loader = { load: j, i: 0 }), a;
        }
        var l = b.documentElement,
            m = a.setTimeout,
            n = b.getElementsByTagName("script")[0],
            o = {}.toString,
            p = [],
            q = 0,
            r = "MozAppearance" in l.style,
            s = r && !!b.createRange().compareNode,
            t = s ? l : n.parentNode,
            l = a.opera && "[object Opera]" == o.call(a.opera),
            l = !!b.attachEvent && !l,
            u = r ? "object" : l ? "script" : "img",
            v = l ? "script" : u,
            w =
                Array.isArray ||
                function (a) {
                    return "[object Array]" == o.call(a);
                },
            x = [],
            y = {},
            z = {
                timeout: function (a, b) {
                    return b.length && (a.timeout = b[0]), a;
                },
            },
            A,
            B;
        (B = function (a) {
            function b(a) {
                var a = a.split("!"),
                    b = x.length,
                    c = a.pop(),
                    d = a.length,
                    c = { url: c, origUrl: c, prefixes: a },
                    e,
                    f,
                    g;
                for (f = 0; f < d; f++)
                    (g = a[f].split("=")), (e = z[g.shift()]) && (c = e(c, g));
                for (f = 0; f < b; f++) c = x[f](c);
                return c;
            }
            function g(a, e, f, g, h) {
                var i = b(a),
                    j = i.autoCallback;
                i.url.split(".").pop().split("?").shift(),
                    i.bypass ||
                        (e &&
                            (e = d(e)
                                ? e
                                : e[a] ||
                                  e[g] ||
                                  e[a.split("/").pop().split("?")[0]]),
                        i.instead
                            ? i.instead(a, e, f, g, h)
                            : (y[i.url] ? (i.noexec = !0) : (y[i.url] = 1),
                              f.load(
                                  i.url,
                                  i.forceCSS ||
                                      (!i.forceJS &&
                                          "css" ==
                                              i.url
                                                  .split(".")
                                                  .pop()
                                                  .split("?")
                                                  .shift())
                                      ? "c"
                                      : c,
                                  i.noexec,
                                  i.attrs,
                                  i.timeout
                              ),
                              (d(e) || d(j)) &&
                                  f.load(function () {
                                      k(),
                                          e && e(i.origUrl, h, g),
                                          j && j(i.origUrl, h, g),
                                          (y[i.url] = 2);
                                  })));
            }
            function h(a, b) {
                function c(a, c) {
                    if (a) {
                        if (e(a))
                            c ||
                                (j = function () {
                                    var a = [].slice.call(arguments);
                                    k.apply(this, a), l();
                                }),
                                g(a, j, b, 0, h);
                        else if (Object(a) === a)
                            for (n in ((m = (function () {
                                var b = 0,
                                    c;
                                for (c in a) a.hasOwnProperty(c) && b++;
                                return b;
                            })()),
                            a))
                                a.hasOwnProperty(n) &&
                                    (!c &&
                                        !--m &&
                                        (d(j)
                                            ? (j = function () {
                                                  var a = [].slice.call(
                                                      arguments
                                                  );
                                                  k.apply(this, a), l();
                                              })
                                            : (j[n] = (function (a) {
                                                  return function () {
                                                      var b = [].slice.call(
                                                          arguments
                                                      );
                                                      a && a.apply(this, b),
                                                          l();
                                                  };
                                              })(k[n]))),
                                    g(a[n], j, b, n, h));
                    } else !c && l();
                }
                var h = !!a.test,
                    i = a.load || a.both,
                    j = a.callback || f,
                    k = j,
                    l = a.complete || f,
                    m,
                    n;
                c(h ? a.yep : a.nope, !!i), i && c(i);
            }
            var i,
                j,
                l = this.yepnope.loader;
            if (e(a)) g(a, 0, l, 0);
            else if (w(a))
                for (i = 0; i < a.length; i++)
                    (j = a[i]),
                        e(j)
                            ? g(j, 0, l, 0)
                            : w(j)
                            ? B(j)
                            : Object(j) === j && h(j, l);
            else Object(a) === a && h(a, l);
        }),
            (B.addPrefix = function (a, b) {
                z[a] = b;
            }),
            (B.addFilter = function (a) {
                x.push(a);
            }),
            (B.errorTimeout = 1e4),
            null == b.readyState &&
                b.addEventListener &&
                ((b.readyState = "loading"),
                b.addEventListener(
                    "DOMContentLoaded",
                    (A = function () {
                        b.removeEventListener("DOMContentLoaded", A, 0),
                            (b.readyState = "complete");
                    }),
                    0
                )),
            (a.yepnope = k()),
            (a.yepnope.executeStack = h),
            (a.yepnope.injectJs = function (a, c, d, e, i, j) {
                var k = b.createElement("script"),
                    l,
                    o,
                    e = e || B.errorTimeout;
                k.src = a;
                for (o in d) k.setAttribute(o, d[o]);
                (c = j ? h : c || f),
                    (k.onreadystatechange = k.onload =
                        function () {
                            !l &&
                                g(k.readyState) &&
                                ((l = 1),
                                c(),
                                (k.onload = k.onreadystatechange = null));
                        }),
                    m(function () {
                        l || ((l = 1), c(1));
                    }, e),
                    i ? k.onload() : n.parentNode.insertBefore(k, n);
            }),
            (a.yepnope.injectCss = function (a, c, d, e, g, i) {
                var e = b.createElement("link"),
                    j,
                    c = i ? h : c || f;
                (e.href = a), (e.rel = "stylesheet"), (e.type = "text/css");
                for (j in d) e.setAttribute(j, d[j]);
                g || (n.parentNode.insertBefore(e, n), m(c, 0));
            });
    })(this, document),
    (Modernizr.load = function () {
        yepnope.apply(window, [].slice.call(arguments, 0));
    });
/**
 * gamma.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2012, Codrops
 * http://www.codrops.com
 */

/**
 * Return a new JSON object of the old string.
 * Turns:
 * 		file.js?a=1&amp;b.c=3.0&b.d=four&a_false_value=false&a_null_value=null
 * Into:
 * 		{"a":1,"b":{"c":3,"d":"four"},"a_false_value":false,"a_null_value":null}
 * @version 1.1.0
 * @date July 16, 2010
 * @since 1.0.0, June 30, 2010
 * @package jquery-sparkle {@link http://www.balupton/projects/jquery-sparkle}
 * @author Benjamin "balupton" Lupton {@link http://www.balupton.com}
 * @copyright (c) 2009-2010 Benjamin Arthur Lupton {@link http://www.balupton.com}
 * @license GNU Affero General Public License version 3 {@link http://www.gnu.org/licenses/agpl-3.0.html}
 */
String.prototype.queryStringToJSON =
    String.prototype.queryStringToJSON ||
    function () {
        var params = String(this);
        params = params.substring(params.indexOf("?") + 1);
        params = params.replace(/\+/g, "%20");
        if (
            params.substring(0, 1) === "{" &&
            params.substring(params.length - 1) === "}"
        ) {
            return eval(decodeURIComponent(params));
        }
        params = params.split(/\&(amp\;)?/);
        var json = {};
        for (var i = 0, n = params.length; i < n; ++i) {
            var param = params[i] || null;
            if (param === null) {
                continue;
            }
            param = param.split("=");
            if (param === null) {
                continue;
            }
            var key = param[0] || null;
            if (key === null) {
                continue;
            }
            if (typeof param[1] === "undefined") {
                continue;
            }
            var value = param[1];
            key = decodeURIComponent(key);
            value = decodeURIComponent(value);
            try {
                value = eval(value);
            } catch (e) {}
            var keys = key.split(".");
            if (keys.length === 1) {
                json[key] = value;
            } else {
                var path = "",
                    cmd = "";
                $.each(keys, function (ii, key) {
                    path += '["' + key.replace(/"/g, '\\"') + '"]';
                    jsonCLOSUREGLOBAL = json;
                    cmd =
                        "if ( typeof jsonCLOSUREGLOBAL" +
                        path +
                        ' === "undefined" ) jsonCLOSUREGLOBAL' +
                        path +
                        " = {}";
                    eval(cmd);
                    json = jsonCLOSUREGLOBAL;
                    delete jsonCLOSUREGLOBAL;
                });
                jsonCLOSUREGLOBAL = json;
                valueCLOSUREGLOBAL = value;
                cmd = "jsonCLOSUREGLOBAL" + path + " = valueCLOSUREGLOBAL";
                eval(cmd);
                json = jsonCLOSUREGLOBAL;
                delete jsonCLOSUREGLOBAL;
                delete valueCLOSUREGLOBAL;
            }
        }
        return json;
    };
$.extend($.expr[":"], {
    inViewport: function (el) {
        var scrollTop =
                document.documentElement.scrollTop || document.body.scrollTop,
            elOffsetTop = $(el).offset().top,
            elH = $(el).height();
        winH =
            window.innerHeight && window.innerHeight < $(window).height()
                ? window.innerHeight
                : $(window).height();
        return elOffsetTop + elH > scrollTop && elOffsetTop < scrollTop + winH;
    },
});
function getHiddenProp() {
    var prefixes = ["webkit", "moz", "ms", "o"];
    if ("hidden" in document) return "hidden";
    for (var i = 0; i < prefixes.length; i++) {
        if (prefixes[i] + "Hidden" in document) return prefixes[i] + "Hidden";
    }
    return null;
}
function isHidden() {
    var prop = getHiddenProp();
    if (!prop) return !1;
    return document[prop];
}
var Gamma = (function () {
    var $window = $(window),
        $body = $("body"),
        $document = $(document),
        Modernizr = window.Modernizr,
        transEndEventNames = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd",
            msTransition: "MSTransitionEnd",
            transition: "transitionend",
        },
        transEndEventName =
            transEndEventNames[Modernizr.prefixed("transition")],
        defaults = {
            columns: 4,
            speed: 300,
            easing: "ease",
            overlayAnimated: !0,
            nextOnClickImage: !0,
            circular: !0,
            svImageTransitionSpeedFade: 300,
            svImageTransitionEasingFade: "ease-in-out",
            svImageTransitionSpeedResize: 300,
            svImageTransitionEasingResize: "ease-in-out",
            svMarginsVH: { vertical: 140, horizontal: 120 },
            keyboard: !0,
            swipe: !0,
            interval: 4000,
            historyapi: !0,
        },
        init = function (settings, callback) {
            Gamma.settings = $.extend(!0, {}, defaults, settings);
            _config();
            _layout();
            _initMasonry(function () {
                Gamma.container.removeClass("gamma-loading");
                Gamma.items.show();
                if (Gamma.settings.historyapi) {
                    _goto();
                }
                _initEvents("window");
                if (callback) {
                    callback.call();
                }
            });
        },
        _config = function () {
            Gamma.container = $("#gamma-container");
            Gamma.overlay = Gamma.container.find("div.gamma-overlay");
            Gamma.controls = Gamma.container.children("div.gamma-options");
            Gamma.gallery = Gamma.container.children("ul.gamma-gallery");
            Gamma.items = Gamma.gallery.children();
            Gamma.itemsCount = Gamma.items.length;
            Gamma.columns = Gamma.settings.columns;
            Gamma.isAnimating = !0;
            Gamma.svMargins = Gamma.settings.svMarginsVH;
            var History = window.History;
            if (!History.enabled && Gamma.settings.historyapi) {
                Gamma.settings.historyapi = !1;
            }
            Gamma.supportTransitions = Modernizr.csstransitions;
        },
        _createSingleView = function () {
            if (!Gamma.singleview) {
                $(
                    '<div class="gamma-single-view"><div class="gamma-options gamma-options-single"><div class="gamma-buttons"><button class="gamma-btn-close"></button></div></div></div>'
                ).appendTo(Gamma.container);
                Gamma.singleview = Gamma.container.children(
                    "div.gamma-single-view"
                );
                Gamma.svclose = Gamma.singleview.find("button.gamma-btn-close");
                _initEvents("singleview");
                _createSingleViewNavigation();
            } else if (!Gamma.nav) {
                _createSingleViewNavigation();
            }
        },
        _createSingleViewNavigation = function () {
            if (Gamma.itemsCount > 1) {
                Gamma.svplay = $(
                    '<button class="gamma-btn-ssplay"></button>'
                ).insertAfter(Gamma.svclose);
                Gamma.nav = $(
                    '<nav class="gamma-nav"><span class="gamma-prev"></span><span class="gamma-next"></span></nav>'
                ).appendTo(Gamma.singleview);
                Gamma.svnavnext = Gamma.nav.find("span.gamma-next");
                Gamma.svnavprev = Gamma.nav.find("span.gamma-prev");
                _initEvents("singleviewnavigation");
            }
        },
        _goto = function (anim, id) {
            if (Gamma.settings.historyapi) {
                id = id || History.getState().url.queryStringToJSON().id;
            }
            var isSingleview = id != undefined,
                anim = anim || !1;
            if (Gamma.settings.historyapi && Gamma.isSV && id === undefined) {
                _closesingleview();
            }
            if (isSingleview) {
                var $item = Gamma.items.eq(Math.abs(id));
                if ($item.length) {
                    if (Gamma.svImage) {
                        if (Gamma.supportTransitions) {
                            _setTransition(
                                Gamma.svImage,
                                "all",
                                Gamma.settings.svImageTransitionSpeedFade,
                                Gamma.settings.svImageTransitionEasingFade
                            );
                        }
                        _applyAnimation(
                            Gamma.svImage,
                            { opacity: 0 },
                            Gamma.settings.svImageTransitionSpeedFade,
                            Gamma.supportTransitions,
                            function () {
                                $(this).remove();
                                anim = !1;
                                _singleviewitem($item, anim);
                            }
                        );
                        if (Gamma.svDescription) {
                            _applyAnimation(
                                Gamma.svDescription,
                                { opacity: 0 },
                                400,
                                Gamma.supportTransitions
                            );
                        }
                    } else {
                        if (Gamma.svDescription) {
                            Gamma.svDescription.empty();
                        }
                        _singleviewitem($item, anim);
                    }
                }
            }
        },
        _saveState = function (id) {
            if (!Gamma.settings.historyapi && id != undefined) {
                Gamma.isSV ? _goto(!1, id) : _goto(!0, id);
            } else if (id === undefined) {
                History.pushState(
                    null,
                    null,
                    url("protocol") +
                        "://" +
                        url("hostname") +
                        (url("port") != 80 ? ":" + url("port") : "") +
                        url("path")
                );
            } else if (History.getState().url.queryStringToJSON().id !== id) {
                History.pushState(null, null, "?id=" + id);
            }
        },
        _layout = function ($items) {
            if (Gamma.itemsCount > 0) {
                _createSingleView();
            }
            _setMasonry();
            var $items = $items || Gamma.items.hide();
            $items.each(function () {
                var $item = $(this),
                    $picEl = $item.children(),
                    sources = _getImgSources($picEl),
                    source = _chooseImgSource(sources, $item.outerWidth(!0)),
                    description = $picEl.data("description");
                $item.data({
                    description: description,
                    source: sources,
                    maxwidth: $picEl.data("maxWidth"),
                    maxheight: $picEl.data("maxHeight"),
                });
                $("<div/>")
                    .addClass("gamma-description")
                    .html(description)
                    .insertAfter($picEl);
                $("<img/>")
                    .attr({
                        alt: $picEl.data("alt"),
                        title: $picEl.data("title"),
                        src: source.src,
                    })
                    .insertAfter($picEl);
                $picEl.remove();
            });
        },
        _getImgSources = function ($el) {
            var theSources = [];
            $el.children("div").each(function (i) {
                var $source = $(this);
                theSources.push({
                    width: $source.data("minWidth") || 0,
                    src: $source.data("src"),
                    pos: i,
                });
            });
            return theSources;
        },
        _setMasonry = function () {
            var containerW = Gamma.container.width();
            if (Gamma.settings.viewport) {
                for (
                    var i = 0, len = Gamma.settings.viewport.length;
                    i < len;
                    ++i
                ) {
                    var viewport = Gamma.settings.viewport[i];
                    if (containerW > viewport.width) {
                        Gamma.columns = viewport.columns;
                        break;
                    }
                }
            }
            Gamma.items.css(
                "width",
                (Math.floor(containerW / Gamma.columns) * 100) / containerW +
                    "%"
            );
        },
        _initMasonry = function (callback) {
            Gamma.gallery.imagesLoaded(function () {
                Gamma.gallery.masonry({
                    itemSelector: "a",
                    columnWidth: function (containerWidth) {
                        return containerWidth / Gamma.columns;
                    },
                });
                if (callback) {
                    callback.call();
                }
            });
        },
        _reloadMasonry = function (timeout) {
            clearTimeout(Gamma.masonrytimeout);
            timeout = timeout || 0;
            Gamma.masonrytimeout = setTimeout(function () {
                Gamma.gallery.masonry("reload");
            }, timeout);
        },
        _chooseImgSource = function (sources, w) {
            if (w <= 0) {
                w = 1;
            }
            for (var i = 0, len = sources.length; i < len; ++i) {
                var source = sources[i];
                if (w > source.width) {
                    return source;
                }
            }
        },
        _toggleControl = function ($control, status, animStyle) {
            animStyle
                ? $control.css(animStyle)
                : status === "on"
                ? $control.show()
                : $control.hide();
        },
        _onnavigate = function (dir) {
            if (!Gamma.slideshow) {
                _navigate(dir);
            }
        },
        _navigate = function (dir) {
            if (!Gamma.isSV || Gamma.isAnimating) {
                return !1;
            }
            var current = Gamma.current;
            if (dir === "next") {
                Gamma.current =
                    Gamma.current < Gamma.itemsCount - 1
                        ? ++Gamma.current
                        : Gamma.settings.circular
                        ? 0
                        : Gamma.current;
            } else if (dir === "prev") {
                Gamma.current =
                    Gamma.current > 0
                        ? --Gamma.current
                        : Gamma.settings.circular
                        ? Gamma.itemsCount - 1
                        : Gamma.current;
            }
            if (current === Gamma.current) {
                return !1;
            }
            Gamma.isAnimating = !0;
            _saveState(Gamma.current);
        },
        _resize = function () {
            _setMasonry();
            _resizeGrid();
            if (Gamma.isSV) {
                _svResizeImage();
            }
            _reloadMasonry(200);
        },
        _resizeGrid = function () {
            Gamma.items.each(function () {
                var $item = $(this),
                    source = _chooseImgSource(
                        $item.data("source"),
                        Gamma.items.outerWidth(!0)
                    );
                $item.find("img").attr("src", source.src);
            });
        };
    (_svResizeImage = function (callback) {
        var finalConfig = _getFinalImgConfig({
                sources: Gamma.svImage.data("source"),
                imgMaxW: Gamma.svImage.data("maxwidth"),
                imgMaxH: Gamma.svImage.data("maxheight"),
                wrapper: {
                    width: $window.width() - Gamma.svMargins.horizontal,
                    height: $window.height() - Gamma.svMargins.vertical,
                },
                image: {
                    width: Gamma.svImage.width(),
                    height: Gamma.svImage.height(),
                },
            }),
            source = finalConfig.source,
            finalSizePosition = finalConfig.finalSizePosition,
            currentSrc = Gamma.svImage.attr("src"),
            finalStyle = {
                width: finalSizePosition.width,
                height: finalSizePosition.height,
                left: finalSizePosition.left + Gamma.svMargins.horizontal / 2,
                top: finalSizePosition.top + Gamma.svMargins.vertical / 2,
            };
        _applyAnimation(
            Gamma.svImage,
            finalStyle,
            Gamma.settings.svImageTransitionSpeedResize,
            Gamma.supportTransitions,
            function () {
                if (Gamma.supportTransitions) {
                    $(this).off(transEndEventName);
                }
                if (currentSrc !== source.src) {
                    Gamma.isAnimating = !0;
                    var w = Gamma.svImage.width(),
                        h = Gamma.svImage.height(),
                        l = Gamma.svImage.position().left,
                        t = Gamma.svImage.position().top;
                    Gamma.svImage = $("<img/>")
                        .load(function () {
                            var $img = $(this);
                            if (Gamma.supportTransitions) {
                                _setTransition(
                                    $img,
                                    "all",
                                    Gamma.settings.svImageTransitionSpeedResize,
                                    Gamma.settings.svImageTransitionEasingResize
                                );
                            }
                            _applyAnimation(
                                $img.next(),
                                { opacity: 0 },
                                500,
                                Gamma.supportTransitions,
                                function () {
                                    var $img = $(this);
                                    if (Gamma.supportTransitions) {
                                        $(this).off(transEndEventName);
                                    }
                                    $img.remove();
                                    Gamma.isAnimating = !1;
                                }
                            );
                        })
                        .css({ width: w, height: h, left: l, top: t })
                        .data(Gamma.svImage.data())
                        .insertBefore(Gamma.svImage)
                        .attr("src", source.src);
                }
                if (callback) {
                    callback.call();
                }
            }
        );
    }),
        (_getFinalImgConfig = function (properties) {
            var sources = properties.sources,
                imgMaxW = properties.imgMaxW || 0,
                imgMaxH = properties.imgMaxH || 0,
                source = _chooseImgSource(sources, properties.wrapper.width),
                finalSizePosition = _getFinalSizePosition(
                    properties.image,
                    properties.wrapper
                );
            if (finalSizePosition.checksource) {
                source = _chooseImgSource(sources, finalSizePosition.width);
            }
            if (
                source.pos === 0 &&
                ((imgMaxW !== 0 && finalSizePosition.width > imgMaxW) ||
                    (imgMaxH !== 0 && finalSizePosition.height > imgMaxH))
            ) {
                if (imgMaxW !== 0 && finalSizePosition.width > imgMaxW) {
                    var ratio = finalSizePosition.width / imgMaxW;
                    finalSizePosition.width = imgMaxW;
                    finalSizePosition.height /= ratio;
                } else if (
                    imgMaxH !== 0 &&
                    finalSizePosition.height > imgMaxH
                ) {
                    var ratio = finalSizePosition.height / imgMaxH;
                    finalSizePosition.height = imgMaxH;
                    finalSizePosition.width /= ratio;
                }
                finalSizePosition.left =
                    properties.wrapper.width / 2 - finalSizePosition.width / 2;
                finalSizePosition.top =
                    properties.wrapper.height / 2 -
                    finalSizePosition.height / 2;
            }
            return { source: source, finalSizePosition: finalSizePosition };
        }),
        (_singleview = function () {
            var id = $(this).index();
            _saveState(id);
        }),
        (_singleviewitem = function ($item, anim) {
            Gamma.isSV = !0;
            var id = $item.index(),
                data = $item.data(),
                $img = $item.children("img");
            if (anim) {
                Gamma.fly = $("<img/>")
                    .attr("src", $img.attr("src"))
                    .addClass("gamma-img-fly")
                    .css({
                        width: $img.width(),
                        height: $img.height(),
                        left:
                            $item.offset().left +
                            ($item.outerWidth(!0) - $item.width()) / 2,
                        top:
                            $item.offset().top +
                            ($item.outerHeight(!0) - $item.height()) / 2,
                    })
                    .appendTo($body);
                if (Gamma.supportTransitions) {
                    _setTransition(Gamma.fly);
                }
            }
            var finalConfig = _getFinalImgConfig({
                    sources: $item.data("source"),
                    imgMaxW: $item.data("maxwidth"),
                    imgMaxH: $item.data("maxheight"),
                    wrapper: {
                        width: $window.width() - Gamma.svMargins.horizontal,
                        height: $window.height() - Gamma.svMargins.vertical,
                    },
                    image: { width: $img.width(), height: $img.height() },
                }),
                source = finalConfig.source,
                finalSizePosition = finalConfig.finalSizePosition;
            Gamma.current = id;
            Gamma.overlay.show();
            if (
                Gamma.settings.overlayAnimated &&
                anim &&
                Gamma.supportTransitions
            ) {
                _setTransition(Gamma.overlay, "opacity");
            }
            setTimeout(function () {
                _applyAnimation(
                    Gamma.overlay,
                    { opacity: 1 },
                    Gamma.settings.speed,
                    Gamma.supportTransitions || !anim,
                    function () {
                        if (!Gamma.isSV) {
                            return !1;
                        }
                        if (Gamma.supportTransitions) {
                            $(this).off(transEndEventName);
                        }
                        $body.css("overflow-y", "hidden");
                        var el = Gamma.overlay[0];
                        el.style.display = "none";
                        el.offsetHeight;
                        el.style.display = "block";
                    }
                );
                $item.css("visibility", "hidden");
                if (!anim) {
                    _loadSVItemFromGrid(data, finalSizePosition, source.src);
                } else {
                    var styleCSS = {
                            width: finalSizePosition.width,
                            height: finalSizePosition.height,
                            left:
                                finalSizePosition.left +
                                $window.scrollLeft() +
                                Gamma.svMargins.horizontal / 2,
                            top:
                                finalSizePosition.top +
                                $window.scrollTop() +
                                Gamma.svMargins.vertical / 2,
                        },
                        cond = Gamma.supportTransitions;
                    _applyAnimation(
                        Gamma.fly,
                        styleCSS,
                        Gamma.settings.speed,
                        cond,
                        function () {
                            if (cond) {
                                $(this).off(transEndEventName);
                            }
                            _loadSVItemFromGrid(
                                data,
                                finalSizePosition,
                                source.src
                            );
                        }
                    );
                }
            }, 25);
        }),
        (_loadSVItemFromGrid = function (data, position, src) {
            Gamma.singleview.show();
            if (!Gamma.svDescription) {
                Gamma.svDescription = $("<div/>")
                    .addClass("gamma-description")
                    .appendTo(Gamma.singleview)
                    .wrap('<div class="gamma-description-wrapper"></div>');
                if (Gamma.supportTransitions) {
                    _setTransition(
                        Gamma.svDescription,
                        "opacity",
                        Gamma.settings.svImageTransitionSpeedFade / 2,
                        Gamma.settings.svImageTransitionEasingFade
                    );
                }
            }
            Gamma.svDescription.html(data.description);
            var loadingtimeout = setTimeout(function () {
                Gamma.singleview.addClass("gamma-loading");
            }, Gamma.settings.svImageTransitionSpeedFade + 250);
            Gamma.svImage = $("<img/>")
                .load(function () {
                    var $img = $(this);
                    clearTimeout(loadingtimeout);
                    Gamma.singleview.removeClass("gamma-loading");
                    setTimeout(function () {
                        _applyAnimation(
                            Gamma.svDescription,
                            { opacity: 1 },
                            Gamma.settings.svImageTransitionSpeedFade / 2,
                            Gamma.supportTransitions
                        );
                    }, 25);
                    $img.css({
                        width: position.width,
                        height: position.height,
                        left: position.left + Gamma.svMargins.horizontal / 2,
                        top: position.top + Gamma.svMargins.vertical / 2,
                    }).appendTo(Gamma.singleview);
                    if (Gamma.supportTransitions) {
                        _setTransition(
                            $img,
                            "all",
                            Gamma.settings.svImageTransitionSpeedResize,
                            Gamma.settings.svImageTransitionEasingResize
                        );
                    }
                    if (Gamma.fly) {
                        if (Gamma.supportTransitions) {
                            _setTransition(Gamma.fly, "opacity", 1000);
                        }
                        setTimeout(function () {
                            _applyAnimation(
                                Gamma.fly,
                                { opacity: 0 },
                                1000,
                                Gamma.supportTransitions,
                                function () {
                                    var $this = $(this);
                                    if (Gamma.supportTransitions) {
                                        $this.off(transEndEventName);
                                    }
                                    $this.remove();
                                    Gamma.fly = null;
                                    Gamma.isAnimating = !1;
                                }
                            );
                        }, 25);
                    } else {
                        Gamma.isAnimating = !1;
                    }
                })
                .data(data)
                .attr("src", src);
        }),
        (_getFinalSizePosition = function (imageSize, wrapperSize) {
            var imgW = imageSize.width,
                imgH = imageSize.height,
                wrapperW = wrapperSize.width,
                wrapperH = wrapperSize.height,
                finalW,
                finalH,
                finalL,
                finalT,
                checksource = !1;
            if (imgW > imgH) {
                finalW = wrapperW;
                var ratio = imgW / wrapperW;
                finalH = imgH / ratio;
                if (finalH > wrapperH) {
                    checksource = !0;
                    ratio = finalH / wrapperH;
                    finalW /= ratio;
                    finalH = wrapperH;
                }
            } else {
                finalH = wrapperH;
                var ratio = imgH / wrapperH;
                finalW = imgW / ratio;
                checksource = !0;
                if (finalW > wrapperW) {
                    checksource = !1;
                    ratio = finalW / wrapperW;
                    finalW = wrapperW;
                    finalH /= ratio;
                }
            }
            return {
                width: finalW,
                height: finalH,
                left: wrapperW / 2 - finalW / 2,
                top: wrapperH / 2 - finalH / 2,
                checksource: checksource,
            };
        }),
        (_closesingleview = function () {
            if (Gamma.isAnimating || Gamma.fly) {
                return !1;
            }
            Gamma.isSV = !1;
            if (Gamma.slideshow) {
                _stopSlideshow();
            }
            var $item = Gamma.items.eq(Gamma.current),
                $img = $item.children("img");
            Gamma.items.not($item).css("visibility", "visible");
            var wst = $window.scrollTop();
            if (!$item.is(":inViewport")) {
                wst =
                    $item.offset().top +
                    ($item.outerHeight(!0) - $item.height()) / 2;
                var diff = $document.height() - $window.height();
                if (wst > diff) {
                    wst = diff;
                }
                $window.scrollTop(wst);
            }
            var l = Gamma.svImage.position().left + $window.scrollLeft(),
                t = Gamma.svImage.position().top + wst;
            Gamma.svImage
                .appendTo($body)
                .css({ position: "absolute", zIndex: 10000, left: l, top: t });
            if (Gamma.supportTransitions) {
                _setTransition(Gamma.svImage);
            }
            Gamma.singleview.hide();
            Gamma.svDescription.empty().css("opacity", 0);
            $body.css("overflow-y", "scroll");
            setTimeout(function () {
                var styleCSS = {
                    width: $img.width(),
                    height: $img.height(),
                    left:
                        $item.offset().left +
                        ($item.outerWidth(!0) - $item.width()) / 2,
                    top:
                        $item.offset().top +
                        ($item.outerHeight(!0) - $item.height()) / 2,
                };
                _applyAnimation(
                    Gamma.svImage,
                    styleCSS,
                    Gamma.settings.speed,
                    Gamma.supportTransitions,
                    function () {
                        $item.css("visibility", "visible");
                        $(this).remove();
                        Gamma.svImage = null;
                    }
                );
                if (Gamma.settings.overlayAnimated) {
                    if (Gamma.supportTransitions) {
                        _setTransition(Gamma.overlay, "opacity");
                    }
                    _applyAnimation(
                        Gamma.overlay,
                        { opacity: 0 },
                        Gamma.settings.speed,
                        Gamma.supportTransitions,
                        function () {
                            var $this = $(this);
                            if (Gamma.supportTransitions) {
                                $this.off(transEndEventName);
                            }
                            $this.hide();
                        }
                    );
                } else {
                    Gamma.overlay.hide();
                }
                _saveState();
            }, 25);
        }),
        (_visChange = function () {
            if (Gamma.slideshow) {
                isHidden()
                    ? (_stopSlideshow(!0), (Gamma.slideshow = !0))
                    : _prepareSlideshow();
            }
        }),
        (_prepareSlideshow = function () {
            if (Gamma.isAnimating && !Gamma.slideshow) {
                return !1;
            }
            Gamma.isAnimating = !0;
            clearTimeout(Gamma.slideshowtimeout);
            Gamma.slideshow = !0;
            Gamma.svMargins = { vertical: 0, horizontal: 0 };
            _toggleControl(Gamma.svclose, "off");
            _toggleControl(Gamma.svnavprev, "off", { left: -40 });
            _toggleControl(Gamma.svnavnext, "off", { right: -40 });
            _svResizeImage(function () {
                Gamma.isAnimating = !1;
                Gamma.svplay.addClass("gamma-btn-sspause");
                _startSlideshow();
            });
        }),
        (_preloadNext = function () {
            var next =
                    Gamma.current < Gamma.itemsCount - 1
                        ? Gamma.current + 1
                        : Gamma.settings.circular
                        ? 0
                        : Gamma.current,
                $item = Gamma.items.eq(next),
                $img = $item.children("img"),
                finalConfig = _getFinalImgConfig({
                    sources: $item.data("source"),
                    imgMaxW: $item.data("maxwidth"),
                    imgMaxH: $item.data("maxheight"),
                    wrapper: {
                        width: $window.width() - Gamma.svMargins.horizontal,
                        height: $window.height() - Gamma.svMargins.vertical,
                    },
                    image: { width: $img.width(), height: $img.height() },
                }),
                source = finalConfig.source;
            $("<img/>").attr("src", source.src);
        }),
        (_startSlideshow = function () {
            _preloadNext();
            Gamma.slideshowtimeout = setTimeout(function () {
                _navigate("next");
                _startSlideshow();
            }, Gamma.settings.interval);
        }),
        (_stopSlideshow = function (pause) {
            if (Gamma.isAnimating) {
                return !1;
            }
            Gamma.isAnimating = !0;
            clearTimeout(Gamma.slideshowtimeout);
            if (!pause) {
                Gamma.slideshow = !1;
                Gamma.svplay.removeClass("gamma-btn-sspause");
                Gamma.svMargins = Gamma.settings.svMarginsVH;
                _toggleControl(Gamma.svclose, "on");
                _toggleControl(Gamma.svnavprev, "on", { left: 20 });
                _toggleControl(Gamma.svnavnext, "on", { right: 20 });
                _svResizeImage(function () {
                    Gamma.isAnimating = !1;
                });
            }
        }),
        (_initEvents = function (type) {
            switch (type) {
                case "window":
                    if (Gamma.settings.historyapi) {
                        $window.on("statechange.gamma", function () {
                            _goto(!0);
                        });
                    }
                    $window.on("smartresize.gamma", _resize);
                    var visProp = getHiddenProp();
                    if (visProp) {
                        var evtname =
                            visProp.replace(/[H|h]idden/, "") +
                            "visibilitychange";
                        document.addEventListener(evtname, _visChange);
                    }
                    break;
                case "singleviewnavigation":
                    Gamma.svnavnext.on("click.gamma", function () {
                        _onnavigate("next");
                    });
                    Gamma.svnavprev.on("click.gamma", function () {
                        _onnavigate("prev");
                    });
                    if (Gamma.settings.nextOnClickImage) {
                        Gamma.singleview.on("click.gamma", "img", function () {
                            _onnavigate("next");
                        });
                    }
                    if (Gamma.settings.keyboard) {
                        $document.on("keydown.gamma", function (event) {
                            var keyCode = event.keyCode || event.which,
                                arrow = {
                                    left: 37,
                                    up: 38,
                                    right: 39,
                                    down: 40,
                                };
                            switch (keyCode) {
                                case arrow.left:
                                    _onnavigate("prev");
                                    break;
                                case arrow.right:
                                    _onnavigate("next");
                                    break;
                            }
                        });
                    }
                    if (Gamma.settings.swipe) {
                        Gamma.singleview.on({
                            "swipeleft.gamma": function () {
                                _onnavigate("next");
                            },
                            "swiperight.gamma": function () {
                                _onnavigate("prev");
                            },
                        });
                    }
                    Gamma.svplay.on("click.gamma", function () {
                        if (Gamma.slideshow) {
                            _stopSlideshow();
                        } else if (!Gamma.isAnimating) {
                            _prepareSlideshow();
                        }
                    });
                    break;
            }
        }),
        (_setTransition = function (el, property, speed, easing) {
            if (!property) {
                property = "all";
            }
            if (!speed) {
                speed = Gamma.settings.speed;
            }
            if (!easing) {
                easing = Gamma.settings.easing;
            }
            el.css("transition", property + " " + speed + "ms " + easing);
        }),
        (_applyAnimation = function (el, styleCSS, speed, cond, fncomplete) {
            $.fn.applyStyle = cond ? $.fn.css : $.fn.animate;
            if (fncomplete && cond) {
                el.on(transEndEventName, fncomplete);
            }
            fncomplete =
                fncomplete ||
                function () {
                    return !1;
                };
            el.stop().applyStyle(
                styleCSS,
                $.extend(!0, [], {
                    duration: speed + "ms",
                    complete: fncomplete,
                })
            );
        }),
        (add = function ($newitems) {
            Gamma.gallery.append($newitems);
            Gamma.items = Gamma.gallery.children();
            Gamma.itemsCount = Gamma.items.length;
            _layout($newitems);
            _reloadMasonry(200);
        });
    return {
        init: init,
        add: add,
        _resize: _resize,
        _reloadMasonry: _reloadMasonry,
    };
})();
jQuery(function () {
    var closed = !0;
    var GammaSettings = {
        viewport: [
            { width: 1200, columns: 5 },
            { width: 900, columns: 4 },
            { width: 600, columns: 3 },
            { width: 500, columns: 2 },
            { width: 400, columns: 1 },
            { width: 0, columns: 1 },
        ],
    };
    Gamma.init(GammaSettings, function () {
        closed = !1;
        let page = 1;
        function isVisible(e) {
            if (this.oldScroll < this.scrollY) {
                let coords = document
                    .getElementById("work-add-container")
                    .getBoundingClientRect();
                let windowHeight = document.documentElement.clientHeight;
                if (coords.bottom < windowHeight && coords.bottom > 0) {
                    clearTimeout($.data(this, "scrollTimer"));
                    $.data(
                        this,
                        "scrollTimer",
                        setTimeout(function () {
                            jQuery("#work-add-container").addClass("disabled");
                            console.log("ajax");
                            closed = !0;
                            page++;
                            jQuery.ajax({
                                method: "GET",
                                data: { page: page, cat: 13 },
                                url: "https://3d-rim.com/wp-content/themes/3d-rim-wpnew/include/ajax_photo.php",
                                success: function (data) {
                                    if (data) {
                                        Gamma.add($([data][0]));
                                    } else {
                                        jQuery("#loadMoreBtn").hide();
                                        window.removeEventListener(
                                            "scroll",
                                            event_listener
                                        );
                                        jQuery(
                                            "#work-add-container"
                                        ).removeClass("disabled");
                                    }
                                },
                            });
                            closed = !1;
                        }, 250)
                    );
                }
                jQuery("#work-add-container").removeClass("disabled");
            }
            this.oldScroll = this.scrollY;
        }
        let event_listener = function (e) {
            if (!closed) {
                isVisible(e);
            } else {
                console.log("closed");
            }
        };
        window.addEventListener("scroll", event_listener);
        jQuery("#loadMoreBtn").on("click", function () {
            jQuery("#loadMoreBtn").addClass("disabled");
            page++;
            jQuery.ajax({
                method: "GET",
                data: { page: page, cat: 13 },
                url: "https://3d-rim.com/wp-content/themes/3d-rim-wpnew/include/ajax_photo.php",
                success: function (data) {
                    Gamma.add($([data][0]));
                    jQuery("#loadMoreBtn").removeClass("disabled");
                    jQuery.ajax({
                        method: "GET",
                        data: { page: page, cat: 13 },
                        url: "https://3d-rim.com/wp-content/themes/3d-rim-wpnew/include/ajax_photo.php",
                        success: function (data) {
                            if (!data) {
                                jQuery("#loadMoreBtn").hide();
                            }
                        },
                    });
                },
            });
        });
    });
});
!(function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
        ? (module.exports = t())
        : "function" == typeof define && define.amd
        ? define(t)
        : ((e =
              "undefined" != typeof globalThis
                  ? globalThis
                  : e || self).Swiper = t());
})(this, function () {
    "use strict";
    function e(e, t) {
        for (var a = 0; a < t.length; a++) {
            var i = t[a];
            (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i);
        }
    }
    function t() {
        return (t =
            Object.assign ||
            function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var i in a)
                        Object.prototype.hasOwnProperty.call(a, i) &&
                            (e[i] = a[i]);
                }
                return e;
            }).apply(this, arguments);
    }
    function a(e) {
        return (
            null !== e &&
            "object" == typeof e &&
            "constructor" in e &&
            e.constructor === Object
        );
    }
    function i(e, t) {
        void 0 === e && (e = {}),
            void 0 === t && (t = {}),
            Object.keys(t).forEach(function (s) {
                void 0 === e[s]
                    ? (e[s] = t[s])
                    : a(t[s]) &&
                      a(e[s]) &&
                      Object.keys(t[s]).length > 0 &&
                      i(e[s], t[s]);
            });
    }
    var s = {
        body: {},
        addEventListener: function () {},
        removeEventListener: function () {},
        activeElement: { blur: function () {}, nodeName: "" },
        querySelector: function () {
            return null;
        },
        querySelectorAll: function () {
            return [];
        },
        getElementById: function () {
            return null;
        },
        createEvent: function () {
            return { initEvent: function () {} };
        },
        createElement: function () {
            return {
                children: [],
                childNodes: [],
                style: {},
                setAttribute: function () {},
                getElementsByTagName: function () {
                    return [];
                },
            };
        },
        createElementNS: function () {
            return {};
        },
        importNode: function () {
            return null;
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: "",
        },
    };
    function r() {
        var e = "undefined" != typeof document ? document : {};
        return i(e, s), e;
    }
    var n = {
        document: s,
        navigator: { userAgent: "" },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: "",
        },
        history: {
            replaceState: function () {},
            pushState: function () {},
            go: function () {},
            back: function () {},
        },
        CustomEvent: function () {
            return this;
        },
        addEventListener: function () {},
        removeEventListener: function () {},
        getComputedStyle: function () {
            return {
                getPropertyValue: function () {
                    return "";
                },
            };
        },
        Image: function () {},
        Date: function () {},
        screen: {},
        setTimeout: function () {},
        clearTimeout: function () {},
        matchMedia: function () {
            return {};
        },
        requestAnimationFrame: function (e) {
            return "undefined" == typeof setTimeout
                ? (e(), null)
                : setTimeout(e, 0);
        },
        cancelAnimationFrame: function (e) {
            "undefined" != typeof setTimeout && clearTimeout(e);
        },
    };
    function o() {
        var e = "undefined" != typeof window ? window : {};
        return i(e, n), e;
    }
    function l(e) {
        return (l = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
    }
    function d(e, t) {
        return (d =
            Object.setPrototypeOf ||
            function (e, t) {
                return (e.__proto__ = t), e;
            })(e, t);
    }
    function p() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return (
                Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {})
                ),
                !0
            );
        } catch (e) {
            return !1;
        }
    }
    function c(e, t, a) {
        return (c = p()
            ? Reflect.construct
            : function (e, t, a) {
                  var i = [null];
                  i.push.apply(i, t);
                  var s = new (Function.bind.apply(e, i))();
                  return a && d(s, a.prototype), s;
              }).apply(null, arguments);
    }
    function u(e) {
        var t = "function" == typeof Map ? new Map() : void 0;
        return (u = function (e) {
            if (
                null === e ||
                ((a = e),
                -1 === Function.toString.call(a).indexOf("[native code]"))
            )
                return e;
            var a;
            if ("function" != typeof e)
                throw new TypeError(
                    "Super expression must either be null or a function"
                );
            if (void 0 !== t) {
                if (t.has(e)) return t.get(e);
                t.set(e, i);
            }
            function i() {
                return c(e, arguments, l(this).constructor);
            }
            return (
                (i.prototype = Object.create(e.prototype, {
                    constructor: {
                        value: i,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0,
                    },
                })),
                d(i, e)
            );
        })(e);
    }
    var h = (function (e) {
        var t, a;
        function i(t) {
            var a, i, s;
            return (
                (a = e.call.apply(e, [this].concat(t)) || this),
                (i = (function (e) {
                    if (void 0 === e)
                        throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                        );
                    return e;
                })(a)),
                (s = i.__proto__),
                Object.defineProperty(i, "__proto__", {
                    get: function () {
                        return s;
                    },
                    set: function (e) {
                        s.__proto__ = e;
                    },
                }),
                a
            );
        }
        return (
            (a = e),
            ((t = i).prototype = Object.create(a.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = a),
            i
        );
    })(u(Array));
    function v(e) {
        void 0 === e && (e = []);
        var t = [];
        return (
            e.forEach(function (e) {
                Array.isArray(e) ? t.push.apply(t, v(e)) : t.push(e);
            }),
            t
        );
    }
    function f(e, t) {
        return Array.prototype.filter.call(e, t);
    }
    function m(e, t) {
        var a = o(),
            i = r(),
            s = [];
        if (!t && e instanceof h) return e;
        if (!e) return new h(s);
        if ("string" == typeof e) {
            var n = e.trim();
            if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
                var l = "div";
                0 === n.indexOf("<li") && (l = "ul"),
                    0 === n.indexOf("<tr") && (l = "tbody"),
                    (0 !== n.indexOf("<td") && 0 !== n.indexOf("<th")) ||
                        (l = "tr"),
                    0 === n.indexOf("<tbody") && (l = "table"),
                    0 === n.indexOf("<option") && (l = "select");
                var d = i.createElement(l);
                d.innerHTML = n;
                for (var p = 0; p < d.childNodes.length; p += 1)
                    s.push(d.childNodes[p]);
            } else
                s = (function (e, t) {
                    if ("string" != typeof e) return [e];
                    for (
                        var a = [], i = t.querySelectorAll(e), s = 0;
                        s < i.length;
                        s += 1
                    )
                        a.push(i[s]);
                    return a;
                })(e.trim(), t || i);
        } else if (e.nodeType || e === a || e === i) s.push(e);
        else if (Array.isArray(e)) {
            if (e instanceof h) return e;
            s = e;
        }
        return new h(
            (function (e) {
                for (var t = [], a = 0; a < e.length; a += 1)
                    -1 === t.indexOf(e[a]) && t.push(e[a]);
                return t;
            })(s)
        );
    }
    m.fn = h.prototype;
    var g,
        b,
        w,
        y = {
            addClass: function () {
                for (
                    var e = arguments.length, t = new Array(e), a = 0;
                    a < e;
                    a++
                )
                    t[a] = arguments[a];
                var i = v(
                    t.map(function (e) {
                        return e.split(" ");
                    })
                );
                return (
                    this.forEach(function (e) {
                        var t;
                        (t = e.classList).add.apply(t, i);
                    }),
                    this
                );
            },
            removeClass: function () {
                for (
                    var e = arguments.length, t = new Array(e), a = 0;
                    a < e;
                    a++
                )
                    t[a] = arguments[a];
                var i = v(
                    t.map(function (e) {
                        return e.split(" ");
                    })
                );
                return (
                    this.forEach(function (e) {
                        var t;
                        (t = e.classList).remove.apply(t, i);
                    }),
                    this
                );
            },
            hasClass: function () {
                for (
                    var e = arguments.length, t = new Array(e), a = 0;
                    a < e;
                    a++
                )
                    t[a] = arguments[a];
                var i = v(
                    t.map(function (e) {
                        return e.split(" ");
                    })
                );
                return (
                    f(this, function (e) {
                        return (
                            i.filter(function (t) {
                                return e.classList.contains(t);
                            }).length > 0
                        );
                    }).length > 0
                );
            },
            toggleClass: function () {
                for (
                    var e = arguments.length, t = new Array(e), a = 0;
                    a < e;
                    a++
                )
                    t[a] = arguments[a];
                var i = v(
                    t.map(function (e) {
                        return e.split(" ");
                    })
                );
                this.forEach(function (e) {
                    i.forEach(function (t) {
                        e.classList.toggle(t);
                    });
                });
            },
            attr: function (e, t) {
                if (1 === arguments.length && "string" == typeof e)
                    return this[0] ? this[0].getAttribute(e) : void 0;
                for (var a = 0; a < this.length; a += 1)
                    if (2 === arguments.length) this[a].setAttribute(e, t);
                    else
                        for (var i in e)
                            (this[a][i] = e[i]), this[a].setAttribute(i, e[i]);
                return this;
            },
            removeAttr: function (e) {
                for (var t = 0; t < this.length; t += 1)
                    this[t].removeAttribute(e);
                return this;
            },
            transform: function (e) {
                for (var t = 0; t < this.length; t += 1)
                    this[t].style.transform = e;
                return this;
            },
            transition: function (e) {
                for (var t = 0; t < this.length; t += 1)
                    this[t].style.transitionDuration =
                        "string" != typeof e ? e + "ms" : e;
                return this;
            },
            on: function () {
                for (
                    var e = arguments.length, t = new Array(e), a = 0;
                    a < e;
                    a++
                )
                    t[a] = arguments[a];
                var i = t[0],
                    s = t[1],
                    r = t[2],
                    n = t[3];
                function o(e) {
                    var t = e.target;
                    if (t) {
                        var a = e.target.dom7EventData || [];
                        if ((a.indexOf(e) < 0 && a.unshift(e), m(t).is(s)))
                            r.apply(t, a);
                        else
                            for (
                                var i = m(t).parents(), n = 0;
                                n < i.length;
                                n += 1
                            )
                                m(i[n]).is(s) && r.apply(i[n], a);
                    }
                }
                function l(e) {
                    var t = (e && e.target && e.target.dom7EventData) || [];
                    t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t);
                }
                "function" == typeof t[1] &&
                    ((i = t[0]), (r = t[1]), (n = t[2]), (s = void 0)),
                    n || (n = !1);
                for (var d, p = i.split(" "), c = 0; c < this.length; c += 1) {
                    var u = this[c];
                    if (s)
                        for (d = 0; d < p.length; d += 1) {
                            var h = p[d];
                            u.dom7LiveListeners || (u.dom7LiveListeners = {}),
                                u.dom7LiveListeners[h] ||
                                    (u.dom7LiveListeners[h] = []),
                                u.dom7LiveListeners[h].push({
                                    listener: r,
                                    proxyListener: o,
                                }),
                                u.addEventListener(h, o, n);
                        }
                    else
                        for (d = 0; d < p.length; d += 1) {
                            var v = p[d];
                            u.dom7Listeners || (u.dom7Listeners = {}),
                                u.dom7Listeners[v] || (u.dom7Listeners[v] = []),
                                u.dom7Listeners[v].push({
                                    listener: r,
                                    proxyListener: l,
                                }),
                                u.addEventListener(v, l, n);
                        }
                }
                return this;
            },
            off: function () {
                for (
                    var e = arguments.length, t = new Array(e), a = 0;
                    a < e;
                    a++
                )
                    t[a] = arguments[a];
                var i = t[0],
                    s = t[1],
                    r = t[2],
                    n = t[3];
                "function" == typeof t[1] &&
                    ((i = t[0]), (r = t[1]), (n = t[2]), (s = void 0)),
                    n || (n = !1);
                for (var o = i.split(" "), l = 0; l < o.length; l += 1)
                    for (var d = o[l], p = 0; p < this.length; p += 1) {
                        var c = this[p],
                            u = void 0;
                        if (
                            (!s && c.dom7Listeners
                                ? (u = c.dom7Listeners[d])
                                : s &&
                                  c.dom7LiveListeners &&
                                  (u = c.dom7LiveListeners[d]),
                            u && u.length)
                        )
                            for (var h = u.length - 1; h >= 0; h -= 1) {
                                var v = u[h];
                                (r && v.listener === r) ||
                                (r &&
                                    v.listener &&
                                    v.listener.dom7proxy &&
                                    v.listener.dom7proxy === r)
                                    ? (c.removeEventListener(
                                          d,
                                          v.proxyListener,
                                          n
                                      ),
                                      u.splice(h, 1))
                                    : r ||
                                      (c.removeEventListener(
                                          d,
                                          v.proxyListener,
                                          n
                                      ),
                                      u.splice(h, 1));
                            }
                    }
                return this;
            },
            trigger: function () {
                for (
                    var e = o(), t = arguments.length, a = new Array(t), i = 0;
                    i < t;
                    i++
                )
                    a[i] = arguments[i];
                for (
                    var s = a[0].split(" "), r = a[1], n = 0;
                    n < s.length;
                    n += 1
                )
                    for (var l = s[n], d = 0; d < this.length; d += 1) {
                        var p = this[d];
                        if (e.CustomEvent) {
                            var c = new e.CustomEvent(l, {
                                detail: r,
                                bubbles: !0,
                                cancelable: !0,
                            });
                            (p.dom7EventData = a.filter(function (e, t) {
                                return t > 0;
                            })),
                                p.dispatchEvent(c),
                                (p.dom7EventData = []),
                                delete p.dom7EventData;
                        }
                    }
                return this;
            },
            transitionEnd: function (e) {
                var t = this;
                return (
                    e &&
                        t.on("transitionend", function a(i) {
                            i.target === this &&
                                (e.call(this, i), t.off("transitionend", a));
                        }),
                    this
                );
            },
            outerWidth: function (e) {
                if (this.length > 0) {
                    if (e) {
                        var t = this.styles();
                        return (
                            this[0].offsetWidth +
                            parseFloat(t.getPropertyValue("margin-right")) +
                            parseFloat(t.getPropertyValue("margin-left"))
                        );
                    }
                    return this[0].offsetWidth;
                }
                return null;
            },
            outerHeight: function (e) {
                if (this.length > 0) {
                    if (e) {
                        var t = this.styles();
                        return (
                            this[0].offsetHeight +
                            parseFloat(t.getPropertyValue("margin-top")) +
                            parseFloat(t.getPropertyValue("margin-bottom"))
                        );
                    }
                    return this[0].offsetHeight;
                }
                return null;
            },
            styles: function () {
                var e = o();
                return this[0] ? e.getComputedStyle(this[0], null) : {};
            },
            offset: function () {
                if (this.length > 0) {
                    var e = o(),
                        t = r(),
                        a = this[0],
                        i = a.getBoundingClientRect(),
                        s = t.body,
                        n = a.clientTop || s.clientTop || 0,
                        l = a.clientLeft || s.clientLeft || 0,
                        d = a === e ? e.scrollY : a.scrollTop,
                        p = a === e ? e.scrollX : a.scrollLeft;
                    return { top: i.top + d - n, left: i.left + p - l };
                }
                return null;
            },
            css: function (e, t) {
                var a,
                    i = o();
                if (1 === arguments.length) {
                    if ("string" != typeof e) {
                        for (a = 0; a < this.length; a += 1)
                            for (var s in e) this[a].style[s] = e[s];
                        return this;
                    }
                    if (this[0])
                        return i
                            .getComputedStyle(this[0], null)
                            .getPropertyValue(e);
                }
                if (2 === arguments.length && "string" == typeof e) {
                    for (a = 0; a < this.length; a += 1) this[a].style[e] = t;
                    return this;
                }
                return this;
            },
            each: function (e) {
                return e
                    ? (this.forEach(function (t, a) {
                          e.apply(t, [t, a]);
                      }),
                      this)
                    : this;
            },
            html: function (e) {
                if (void 0 === e) return this[0] ? this[0].innerHTML : null;
                for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
                return this;
            },
            text: function (e) {
                if (void 0 === e)
                    return this[0] ? this[0].textContent.trim() : null;
                for (var t = 0; t < this.length; t += 1)
                    this[t].textContent = e;
                return this;
            },
            is: function (e) {
                var t,
                    a,
                    i = o(),
                    s = r(),
                    n = this[0];
                if (!n || void 0 === e) return !1;
                if ("string" == typeof e) {
                    if (n.matches) return n.matches(e);
                    if (n.webkitMatchesSelector)
                        return n.webkitMatchesSelector(e);
                    if (n.msMatchesSelector) return n.msMatchesSelector(e);
                    for (t = m(e), a = 0; a < t.length; a += 1)
                        if (t[a] === n) return !0;
                    return !1;
                }
                if (e === s) return n === s;
                if (e === i) return n === i;
                if (e.nodeType || e instanceof h) {
                    for (t = e.nodeType ? [e] : e, a = 0; a < t.length; a += 1)
                        if (t[a] === n) return !0;
                    return !1;
                }
                return !1;
            },
            index: function () {
                var e,
                    t = this[0];
                if (t) {
                    for (e = 0; null !== (t = t.previousSibling); )
                        1 === t.nodeType && (e += 1);
                    return e;
                }
            },
            eq: function (e) {
                if (void 0 === e) return this;
                var t = this.length;
                if (e > t - 1) return m([]);
                if (e < 0) {
                    var a = t + e;
                    return m(a < 0 ? [] : [this[a]]);
                }
                return m([this[e]]);
            },
            append: function () {
                for (var e, t = r(), a = 0; a < arguments.length; a += 1) {
                    e = a < 0 || arguments.length <= a ? void 0 : arguments[a];
                    for (var i = 0; i < this.length; i += 1)
                        if ("string" == typeof e) {
                            var s = t.createElement("div");
                            for (s.innerHTML = e; s.firstChild; )
                                this[i].appendChild(s.firstChild);
                        } else if (e instanceof h)
                            for (var n = 0; n < e.length; n += 1)
                                this[i].appendChild(e[n]);
                        else this[i].appendChild(e);
                }
                return this;
            },
            prepend: function (e) {
                var t,
                    a,
                    i = r();
                for (t = 0; t < this.length; t += 1)
                    if ("string" == typeof e) {
                        var s = i.createElement("div");
                        for (
                            s.innerHTML = e, a = s.childNodes.length - 1;
                            a >= 0;
                            a -= 1
                        )
                            this[t].insertBefore(
                                s.childNodes[a],
                                this[t].childNodes[0]
                            );
                    } else if (e instanceof h)
                        for (a = 0; a < e.length; a += 1)
                            this[t].insertBefore(e[a], this[t].childNodes[0]);
                    else this[t].insertBefore(e, this[t].childNodes[0]);
                return this;
            },
            next: function (e) {
                return this.length > 0
                    ? e
                        ? this[0].nextElementSibling &&
                          m(this[0].nextElementSibling).is(e)
                            ? m([this[0].nextElementSibling])
                            : m([])
                        : this[0].nextElementSibling
                        ? m([this[0].nextElementSibling])
                        : m([])
                    : m([]);
            },
            nextAll: function (e) {
                var t = [],
                    a = this[0];
                if (!a) return m([]);
                for (; a.nextElementSibling; ) {
                    var i = a.nextElementSibling;
                    e ? m(i).is(e) && t.push(i) : t.push(i), (a = i);
                }
                return m(t);
            },
            prev: function (e) {
                if (this.length > 0) {
                    var t = this[0];
                    return e
                        ? t.previousElementSibling &&
                          m(t.previousElementSibling).is(e)
                            ? m([t.previousElementSibling])
                            : m([])
                        : t.previousElementSibling
                        ? m([t.previousElementSibling])
                        : m([]);
                }
                return m([]);
            },
            prevAll: function (e) {
                var t = [],
                    a = this[0];
                if (!a) return m([]);
                for (; a.previousElementSibling; ) {
                    var i = a.previousElementSibling;
                    e ? m(i).is(e) && t.push(i) : t.push(i), (a = i);
                }
                return m(t);
            },
            parent: function (e) {
                for (var t = [], a = 0; a < this.length; a += 1)
                    null !== this[a].parentNode &&
                        (e
                            ? m(this[a].parentNode).is(e) &&
                              t.push(this[a].parentNode)
                            : t.push(this[a].parentNode));
                return m(t);
            },
            parents: function (e) {
                for (var t = [], a = 0; a < this.length; a += 1)
                    for (var i = this[a].parentNode; i; )
                        e ? m(i).is(e) && t.push(i) : t.push(i),
                            (i = i.parentNode);
                return m(t);
            },
            closest: function (e) {
                var t = this;
                return void 0 === e
                    ? m([])
                    : (t.is(e) || (t = t.parents(e).eq(0)), t);
            },
            find: function (e) {
                for (var t = [], a = 0; a < this.length; a += 1) {
                    try {
                        var i = this[a].querySelectorAll(e);
                    } catch (t) {
                        console.log(e);
                    }
                    for (var s = 0; s < i.length; s += 1) t.push(i[s]);
                }
                return m(t);
            },
            children: function (e) {
                for (var t = [], a = 0; a < this.length; a += 1)
                    for (var i = this[a].children, s = 0; s < i.length; s += 1)
                        (e && !m(i[s]).is(e)) || t.push(i[s]);
                return m(t);
            },
            filter: function (e) {
                return m(f(this, e));
            },
            remove: function () {
                for (var e = 0; e < this.length; e += 1)
                    this[e].parentNode &&
                        this[e].parentNode.removeChild(this[e]);
                return this;
            },
        };
    function E(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t);
    }
    function x() {
        return Date.now();
    }
    function T(e, t) {
        void 0 === t && (t = "x");
        var a,
            i,
            s,
            r = o(),
            n = (function (e) {
                var t,
                    a = o();
                return (
                    a.getComputedStyle && (t = a.getComputedStyle(e, null)),
                    !t && e.currentStyle && (t = e.currentStyle),
                    t || (t = e.style),
                    t
                );
            })(e);
        return (
            r.WebKitCSSMatrix
                ? ((i = n.transform || n.webkitTransform).split(",").length >
                      6 &&
                      (i = i
                          .split(", ")
                          .map(function (e) {
                              return e.replace(",", ".");
                          })
                          .join(", ")),
                  (s = new r.WebKitCSSMatrix("none" === i ? "" : i)))
                : (a = (s =
                      n.MozTransform ||
                      n.OTransform ||
                      n.MsTransform ||
                      n.msTransform ||
                      n.transform ||
                      n
                          .getPropertyValue("transform")
                          .replace("translate(", "matrix(1, 0, 0, 1,"))
                      .toString()
                      .split(",")),
            "x" === t &&
                (i = r.WebKitCSSMatrix
                    ? s.m41
                    : 16 === a.length
                    ? parseFloat(a[12])
                    : parseFloat(a[4])),
            "y" === t &&
                (i = r.WebKitCSSMatrix
                    ? s.m42
                    : 16 === a.length
                    ? parseFloat(a[13])
                    : parseFloat(a[5])),
            i || 0
        );
    }
    function S(e) {
        return (
            "object" == typeof e &&
            null !== e &&
            e.constructor &&
            "Object" === Object.prototype.toString.call(e).slice(8, -1)
        );
    }
    function C() {
        for (
            var e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
                t = ["__proto__", "constructor", "prototype"],
                a = 1;
            a < arguments.length;
            a += 1
        ) {
            var i = a < 0 || arguments.length <= a ? void 0 : arguments[a];
            if (null != i)
                for (
                    var s = Object.keys(Object(i)).filter(function (e) {
                            return t.indexOf(e) < 0;
                        }),
                        r = 0,
                        n = s.length;
                    r < n;
                    r += 1
                ) {
                    var o = s[r],
                        l = Object.getOwnPropertyDescriptor(i, o);
                    void 0 !== l &&
                        l.enumerable &&
                        (S(e[o]) && S(i[o])
                            ? i[o].__swiper__
                                ? (e[o] = i[o])
                                : C(e[o], i[o])
                            : !S(e[o]) && S(i[o])
                            ? ((e[o] = {}),
                              i[o].__swiper__ ? (e[o] = i[o]) : C(e[o], i[o]))
                            : (e[o] = i[o]));
                }
        }
        return e;
    }
    function M(e, t) {
        Object.keys(t).forEach(function (a) {
            S(t[a]) &&
                Object.keys(t[a]).forEach(function (i) {
                    "function" == typeof t[a][i] && (t[a][i] = t[a][i].bind(e));
                }),
                (e[a] = t[a]);
        });
    }
    function z(e) {
        return (
            void 0 === e && (e = ""),
            "." +
                e
                    .trim()
                    .replace(/([\.:\/])/g, "\\$1")
                    .replace(/ /g, ".")
        );
    }
    function P() {
        return (
            g ||
                (g = (function () {
                    var e = o(),
                        t = r();
                    return {
                        touch: !!(
                            "ontouchstart" in e ||
                            (e.DocumentTouch && t instanceof e.DocumentTouch)
                        ),
                        pointerEvents:
                            !!e.PointerEvent &&
                            "maxTouchPoints" in e.navigator &&
                            e.navigator.maxTouchPoints >= 0,
                        observer:
                            "MutationObserver" in e ||
                            "WebkitMutationObserver" in e,
                        passiveListener: (function () {
                            var t = !1;
                            try {
                                var a = Object.defineProperty({}, "passive", {
                                    get: function () {
                                        t = !0;
                                    },
                                });
                                e.addEventListener(
                                    "testPassiveListener",
                                    null,
                                    a
                                );
                            } catch (e) {}
                            return t;
                        })(),
                        gestures: "ongesturestart" in e,
                    };
                })()),
            g
        );
    }
    function k(e) {
        return (
            void 0 === e && (e = {}),
            b ||
                (b = (function (e) {
                    var t = (void 0 === e ? {} : e).userAgent,
                        a = P(),
                        i = o(),
                        s = i.navigator.platform,
                        r = t || i.navigator.userAgent,
                        n = { ios: !1, android: !1 },
                        l = i.screen.width,
                        d = i.screen.height,
                        p = r.match(/(Android);?[\s\/]+([\d.]+)?/),
                        c = r.match(/(iPad).*OS\s([\d_]+)/),
                        u = r.match(/(iPod)(.*OS\s([\d_]+))?/),
                        h = !c && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                        v = "Win32" === s,
                        f = "MacIntel" === s;
                    return (
                        !c &&
                            f &&
                            a.touch &&
                            [
                                "1024x1366",
                                "1366x1024",
                                "834x1194",
                                "1194x834",
                                "834x1112",
                                "1112x834",
                                "768x1024",
                                "1024x768",
                                "820x1180",
                                "1180x820",
                                "810x1080",
                                "1080x810",
                            ].indexOf(l + "x" + d) >= 0 &&
                            ((c = r.match(/(Version)\/([\d.]+)/)) ||
                                (c = [0, 1, "13_0_0"]),
                            (f = !1)),
                        p && !v && ((n.os = "android"), (n.android = !0)),
                        (c || h || u) && ((n.os = "ios"), (n.ios = !0)),
                        n
                    );
                })(e)),
            b
        );
    }
    function L() {
        return (
            w ||
                (w = (function () {
                    var e,
                        t = o();
                    return {
                        isEdge: !!t.navigator.userAgent.match(/Edge/g),
                        isSafari:
                            ((e = t.navigator.userAgent.toLowerCase()),
                            e.indexOf("safari") >= 0 &&
                                e.indexOf("chrome") < 0 &&
                                e.indexOf("android") < 0),
                        isWebView:
                            /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                                t.navigator.userAgent
                            ),
                    };
                })()),
            w
        );
    }
    Object.keys(y).forEach(function (e) {
        Object.defineProperty(m.fn, e, { value: y[e] });
    });
    var $ = {
            name: "resize",
            create: function () {
                var e = this;
                C(e, {
                    resize: {
                        observer: null,
                        createObserver: function () {
                            e &&
                                !e.destroyed &&
                                e.initialized &&
                                ((e.resize.observer = new ResizeObserver(
                                    function (t) {
                                        var a = e.width,
                                            i = e.height,
                                            s = a,
                                            r = i;
                                        t.forEach(function (t) {
                                            var a = t.contentBoxSize,
                                                i = t.contentRect,
                                                n = t.target;
                                            (n && n !== e.el) ||
                                                ((s = i
                                                    ? i.width
                                                    : (a[0] || a).inlineSize),
                                                (r = i
                                                    ? i.height
                                                    : (a[0] || a).blockSize));
                                        }),
                                            (s === a && r === i) ||
                                                e.resize.resizeHandler();
                                    }
                                )),
                                e.resize.observer.observe(e.el));
                        },
                        removeObserver: function () {
                            e.resize.observer &&
                                e.resize.observer.unobserve &&
                                e.el &&
                                (e.resize.observer.unobserve(e.el),
                                (e.resize.observer = null));
                        },
                        resizeHandler: function () {
                            e &&
                                !e.destroyed &&
                                e.initialized &&
                                (e.emit("beforeResize"), e.emit("resize"));
                        },
                        orientationChangeHandler: function () {
                            e &&
                                !e.destroyed &&
                                e.initialized &&
                                e.emit("orientationchange");
                        },
                    },
                });
            },
            on: {
                init: function (e) {
                    var t = o();
                    e.params.resizeObserver && void 0 !== o().ResizeObserver
                        ? e.resize.createObserver()
                        : (t.addEventListener("resize", e.resize.resizeHandler),
                          t.addEventListener(
                              "orientationchange",
                              e.resize.orientationChangeHandler
                          ));
                },
                destroy: function (e) {
                    var t = o();
                    e.resize.removeObserver(),
                        t.removeEventListener("resize", e.resize.resizeHandler),
                        t.removeEventListener(
                            "orientationchange",
                            e.resize.orientationChangeHandler
                        );
                },
            },
        },
        I = {
            attach: function (e, t) {
                void 0 === t && (t = {});
                var a = o(),
                    i = this,
                    s = new (a.MutationObserver || a.WebkitMutationObserver)(
                        function (e) {
                            if (1 !== e.length) {
                                var t = function () {
                                    i.emit("observerUpdate", e[0]);
                                };
                                a.requestAnimationFrame
                                    ? a.requestAnimationFrame(t)
                                    : a.setTimeout(t, 0);
                            } else i.emit("observerUpdate", e[0]);
                        }
                    );
                s.observe(e, {
                    attributes: void 0 === t.attributes || t.attributes,
                    childList: void 0 === t.childList || t.childList,
                    characterData:
                        void 0 === t.characterData || t.characterData,
                }),
                    i.observer.observers.push(s);
            },
            init: function () {
                var e = this;
                if (e.support.observer && e.params.observer) {
                    if (e.params.observeParents)
                        for (
                            var t = e.$el.parents(), a = 0;
                            a < t.length;
                            a += 1
                        )
                            e.observer.attach(t[a]);
                    e.observer.attach(e.$el[0], {
                        childList: e.params.observeSlideChildren,
                    }),
                        e.observer.attach(e.$wrapperEl[0], { attributes: !1 });
                }
            },
            destroy: function () {
                this.observer.observers.forEach(function (e) {
                    e.disconnect();
                }),
                    (this.observer.observers = []);
            },
        },
        O = {
            name: "observer",
            params: {
                observer: !1,
                observeParents: !1,
                observeSlideChildren: !1,
            },
            create: function () {
                M(this, { observer: t({}, I, { observers: [] }) });
            },
            on: {
                init: function (e) {
                    e.observer.init();
                },
                destroy: function (e) {
                    e.observer.destroy();
                },
            },
        };
    function A(e) {
        var t = this,
            a = r(),
            i = o(),
            s = t.touchEventsData,
            n = t.params,
            l = t.touches;
        if (!t.animating || !n.preventInteractionOnTransition) {
            var d = e;
            d.originalEvent && (d = d.originalEvent);
            var p = m(d.target);
            if (
                "wrapper" !== n.touchEventsTarget ||
                p.closest(t.wrapperEl).length
            )
                if (
                    ((s.isTouchEvent = "touchstart" === d.type),
                    s.isTouchEvent || !("which" in d) || 3 !== d.which)
                )
                    if (!(!s.isTouchEvent && "button" in d && d.button > 0))
                        if (!s.isTouched || !s.isMoved)
                            if (
                                (!!n.noSwipingClass &&
                                    "" !== n.noSwipingClass &&
                                    d.target &&
                                    d.target.shadowRoot &&
                                    e.path &&
                                    e.path[0] &&
                                    (p = m(e.path[0])),
                                n.noSwiping &&
                                    p.closest(
                                        n.noSwipingSelector
                                            ? n.noSwipingSelector
                                            : "." + n.noSwipingClass
                                    )[0])
                            )
                                t.allowClick = !0;
                            else if (
                                !n.swipeHandler ||
                                p.closest(n.swipeHandler)[0]
                            ) {
                                (l.currentX =
                                    "touchstart" === d.type
                                        ? d.targetTouches[0].pageX
                                        : d.pageX),
                                    (l.currentY =
                                        "touchstart" === d.type
                                            ? d.targetTouches[0].pageY
                                            : d.pageY);
                                var c = l.currentX,
                                    u = l.currentY,
                                    h =
                                        n.edgeSwipeDetection ||
                                        n.iOSEdgeSwipeDetection,
                                    v =
                                        n.edgeSwipeThreshold ||
                                        n.iOSEdgeSwipeThreshold;
                                if (h && (c <= v || c >= i.innerWidth - v)) {
                                    if ("prevent" !== h) return;
                                    e.preventDefault();
                                }
                                if (
                                    (C(s, {
                                        isTouched: !0,
                                        isMoved: !1,
                                        allowTouchCallbacks: !0,
                                        isScrolling: void 0,
                                        startMoving: void 0,
                                    }),
                                    (l.startX = c),
                                    (l.startY = u),
                                    (s.touchStartTime = x()),
                                    (t.allowClick = !0),
                                    t.updateSize(),
                                    (t.swipeDirection = void 0),
                                    n.threshold > 0 &&
                                        (s.allowThresholdMove = !1),
                                    "touchstart" !== d.type)
                                ) {
                                    var f = !0;
                                    p.is(s.formElements) && (f = !1),
                                        a.activeElement &&
                                            m(a.activeElement).is(
                                                s.formElements
                                            ) &&
                                            a.activeElement !== p[0] &&
                                            a.activeElement.blur();
                                    var g =
                                        f &&
                                        t.allowTouchMove &&
                                        n.touchStartPreventDefault;
                                    (!n.touchStartForcePreventDefault && !g) ||
                                        p[0].isContentEditable ||
                                        d.preventDefault();
                                }
                                t.emit("touchStart", d);
                            }
        }
    }
    function D(e) {
        var t = r(),
            a = this,
            i = a.touchEventsData,
            s = a.params,
            n = a.touches,
            o = a.rtlTranslate,
            l = e;
        if ((l.originalEvent && (l = l.originalEvent), i.isTouched)) {
            if (!i.isTouchEvent || "touchmove" === l.type) {
                var d =
                        "touchmove" === l.type &&
                        l.targetTouches &&
                        (l.targetTouches[0] || l.changedTouches[0]),
                    p = "touchmove" === l.type ? d.pageX : l.pageX,
                    c = "touchmove" === l.type ? d.pageY : l.pageY;
                if (l.preventedByNestedSwiper)
                    return (n.startX = p), void (n.startY = c);
                if (!a.allowTouchMove)
                    return (
                        (a.allowClick = !1),
                        void (
                            i.isTouched &&
                            (C(n, {
                                startX: p,
                                startY: c,
                                currentX: p,
                                currentY: c,
                            }),
                            (i.touchStartTime = x()))
                        )
                    );
                if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop)
                    if (a.isVertical()) {
                        if (
                            (c < n.startY && a.translate <= a.maxTranslate()) ||
                            (c > n.startY && a.translate >= a.minTranslate())
                        )
                            return (i.isTouched = !1), void (i.isMoved = !1);
                    } else if (
                        (p < n.startX && a.translate <= a.maxTranslate()) ||
                        (p > n.startX && a.translate >= a.minTranslate())
                    )
                        return;
                if (
                    i.isTouchEvent &&
                    t.activeElement &&
                    l.target === t.activeElement &&
                    m(l.target).is(i.formElements)
                )
                    return (i.isMoved = !0), void (a.allowClick = !1);
                if (
                    (i.allowTouchCallbacks && a.emit("touchMove", l),
                    !(l.targetTouches && l.targetTouches.length > 1))
                ) {
                    (n.currentX = p), (n.currentY = c);
                    var u = n.currentX - n.startX,
                        h = n.currentY - n.startY;
                    if (
                        !(
                            a.params.threshold &&
                            Math.sqrt(Math.pow(u, 2) + Math.pow(h, 2)) <
                                a.params.threshold
                        )
                    ) {
                        var v;
                        if (void 0 === i.isScrolling)
                            (a.isHorizontal() && n.currentY === n.startY) ||
                            (a.isVertical() && n.currentX === n.startX)
                                ? (i.isScrolling = !1)
                                : u * u + h * h >= 25 &&
                                  ((v =
                                      (180 *
                                          Math.atan2(
                                              Math.abs(h),
                                              Math.abs(u)
                                          )) /
                                      Math.PI),
                                  (i.isScrolling = a.isHorizontal()
                                      ? v > s.touchAngle
                                      : 90 - v > s.touchAngle));
                        if (
                            (i.isScrolling && a.emit("touchMoveOpposite", l),
                            void 0 === i.startMoving &&
                                ((n.currentX === n.startX &&
                                    n.currentY === n.startY) ||
                                    (i.startMoving = !0)),
                            i.isScrolling)
                        )
                            i.isTouched = !1;
                        else if (i.startMoving) {
                            (a.allowClick = !1),
                                !s.cssMode &&
                                    l.cancelable &&
                                    l.preventDefault(),
                                s.touchMoveStopPropagation &&
                                    !s.nested &&
                                    l.stopPropagation(),
                                i.isMoved ||
                                    (s.loop && a.loopFix(),
                                    (i.startTranslate = a.getTranslate()),
                                    a.setTransition(0),
                                    a.animating &&
                                        a.$wrapperEl.trigger(
                                            "webkitTransitionEnd transitionend"
                                        ),
                                    (i.allowMomentumBounce = !1),
                                    !s.grabCursor ||
                                        (!0 !== a.allowSlideNext &&
                                            !0 !== a.allowSlidePrev) ||
                                        a.setGrabCursor(!0),
                                    a.emit("sliderFirstMove", l)),
                                a.emit("sliderMove", l),
                                (i.isMoved = !0);
                            var f = a.isHorizontal() ? u : h;
                            (n.diff = f),
                                (f *= s.touchRatio),
                                o && (f = -f),
                                (a.swipeDirection = f > 0 ? "prev" : "next"),
                                (i.currentTranslate = f + i.startTranslate);
                            var g = !0,
                                b = s.resistanceRatio;
                            if (
                                (s.touchReleaseOnEdges && (b = 0),
                                f > 0 && i.currentTranslate > a.minTranslate()
                                    ? ((g = !1),
                                      s.resistance &&
                                          (i.currentTranslate =
                                              a.minTranslate() -
                                              1 +
                                              Math.pow(
                                                  -a.minTranslate() +
                                                      i.startTranslate +
                                                      f,
                                                  b
                                              )))
                                    : f < 0 &&
                                      i.currentTranslate < a.maxTranslate() &&
                                      ((g = !1),
                                      s.resistance &&
                                          (i.currentTranslate =
                                              a.maxTranslate() +
                                              1 -
                                              Math.pow(
                                                  a.maxTranslate() -
                                                      i.startTranslate -
                                                      f,
                                                  b
                                              ))),
                                g && (l.preventedByNestedSwiper = !0),
                                !a.allowSlideNext &&
                                    "next" === a.swipeDirection &&
                                    i.currentTranslate < i.startTranslate &&
                                    (i.currentTranslate = i.startTranslate),
                                !a.allowSlidePrev &&
                                    "prev" === a.swipeDirection &&
                                    i.currentTranslate > i.startTranslate &&
                                    (i.currentTranslate = i.startTranslate),
                                a.allowSlidePrev ||
                                    a.allowSlideNext ||
                                    (i.currentTranslate = i.startTranslate),
                                s.threshold > 0)
                            ) {
                                if (
                                    !(
                                        Math.abs(f) > s.threshold ||
                                        i.allowThresholdMove
                                    )
                                )
                                    return void (i.currentTranslate =
                                        i.startTranslate);
                                if (!i.allowThresholdMove)
                                    return (
                                        (i.allowThresholdMove = !0),
                                        (n.startX = n.currentX),
                                        (n.startY = n.currentY),
                                        (i.currentTranslate = i.startTranslate),
                                        void (n.diff = a.isHorizontal()
                                            ? n.currentX - n.startX
                                            : n.currentY - n.startY)
                                    );
                            }
                            s.followFinger &&
                                !s.cssMode &&
                                ((s.freeMode ||
                                    s.watchSlidesProgress ||
                                    s.watchSlidesVisibility) &&
                                    (a.updateActiveIndex(),
                                    a.updateSlidesClasses()),
                                s.freeMode &&
                                    (0 === i.velocities.length &&
                                        i.velocities.push({
                                            position:
                                                n[
                                                    a.isHorizontal()
                                                        ? "startX"
                                                        : "startY"
                                                ],
                                            time: i.touchStartTime,
                                        }),
                                    i.velocities.push({
                                        position:
                                            n[
                                                a.isHorizontal()
                                                    ? "currentX"
                                                    : "currentY"
                                            ],
                                        time: x(),
                                    })),
                                a.updateProgress(i.currentTranslate),
                                a.setTranslate(i.currentTranslate));
                        }
                    }
                }
            }
        } else i.startMoving && i.isScrolling && a.emit("touchMoveOpposite", l);
    }
    function N(e) {
        var t = this,
            a = t.touchEventsData,
            i = t.params,
            s = t.touches,
            r = t.rtlTranslate,
            n = t.$wrapperEl,
            o = t.slidesGrid,
            l = t.snapGrid,
            d = e;
        if (
            (d.originalEvent && (d = d.originalEvent),
            a.allowTouchCallbacks && t.emit("touchEnd", d),
            (a.allowTouchCallbacks = !1),
            !a.isTouched)
        )
            return (
                a.isMoved && i.grabCursor && t.setGrabCursor(!1),
                (a.isMoved = !1),
                void (a.startMoving = !1)
            );
        i.grabCursor &&
            a.isMoved &&
            a.isTouched &&
            (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
            t.setGrabCursor(!1);
        var p,
            c = x(),
            u = c - a.touchStartTime;
        if (
            (t.allowClick &&
                (t.updateClickedSlide(d),
                t.emit("tap click", d),
                u < 300 &&
                    c - a.lastClickTime < 300 &&
                    t.emit("doubleTap doubleClick", d)),
            (a.lastClickTime = x()),
            E(function () {
                t.destroyed || (t.allowClick = !0);
            }),
            !a.isTouched ||
                !a.isMoved ||
                !t.swipeDirection ||
                0 === s.diff ||
                a.currentTranslate === a.startTranslate)
        )
            return (
                (a.isTouched = !1), (a.isMoved = !1), void (a.startMoving = !1)
            );
        if (
            ((a.isTouched = !1),
            (a.isMoved = !1),
            (a.startMoving = !1),
            (p = i.followFinger
                ? r
                    ? t.translate
                    : -t.translate
                : -a.currentTranslate),
            !i.cssMode)
        )
            if (i.freeMode) {
                if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                if (p > -t.maxTranslate())
                    return void (t.slides.length < l.length
                        ? t.slideTo(l.length - 1)
                        : t.slideTo(t.slides.length - 1));
                if (i.freeModeMomentum) {
                    if (a.velocities.length > 1) {
                        var h = a.velocities.pop(),
                            v = a.velocities.pop(),
                            f = h.position - v.position,
                            m = h.time - v.time;
                        (t.velocity = f / m),
                            (t.velocity /= 2),
                            Math.abs(t.velocity) < i.freeModeMinimumVelocity &&
                                (t.velocity = 0),
                            (m > 150 || x() - h.time > 300) && (t.velocity = 0);
                    } else t.velocity = 0;
                    (t.velocity *= i.freeModeMomentumVelocityRatio),
                        (a.velocities.length = 0);
                    var g = 1e3 * i.freeModeMomentumRatio,
                        b = t.velocity * g,
                        w = t.translate + b;
                    r && (w = -w);
                    var y,
                        T,
                        S = !1,
                        C =
                            20 *
                            Math.abs(t.velocity) *
                            i.freeModeMomentumBounceRatio;
                    if (w < t.maxTranslate())
                        i.freeModeMomentumBounce
                            ? (w + t.maxTranslate() < -C &&
                                  (w = t.maxTranslate() - C),
                              (y = t.maxTranslate()),
                              (S = !0),
                              (a.allowMomentumBounce = !0))
                            : (w = t.maxTranslate()),
                            i.loop && i.centeredSlides && (T = !0);
                    else if (w > t.minTranslate())
                        i.freeModeMomentumBounce
                            ? (w - t.minTranslate() > C &&
                                  (w = t.minTranslate() + C),
                              (y = t.minTranslate()),
                              (S = !0),
                              (a.allowMomentumBounce = !0))
                            : (w = t.minTranslate()),
                            i.loop && i.centeredSlides && (T = !0);
                    else if (i.freeModeSticky) {
                        for (var M, z = 0; z < l.length; z += 1)
                            if (l[z] > -w) {
                                M = z;
                                break;
                            }
                        w = -(w =
                            Math.abs(l[M] - w) < Math.abs(l[M - 1] - w) ||
                            "next" === t.swipeDirection
                                ? l[M]
                                : l[M - 1]);
                    }
                    if (
                        (T &&
                            t.once("transitionEnd", function () {
                                t.loopFix();
                            }),
                        0 !== t.velocity)
                    ) {
                        if (
                            ((g = r
                                ? Math.abs((-w - t.translate) / t.velocity)
                                : Math.abs((w - t.translate) / t.velocity)),
                            i.freeModeSticky)
                        ) {
                            var P = Math.abs((r ? -w : w) - t.translate),
                                k = t.slidesSizesGrid[t.activeIndex];
                            g =
                                P < k
                                    ? i.speed
                                    : P < 2 * k
                                    ? 1.5 * i.speed
                                    : 2.5 * i.speed;
                        }
                    } else if (i.freeModeSticky) return void t.slideToClosest();
                    i.freeModeMomentumBounce && S
                        ? (t.updateProgress(y),
                          t.setTransition(g),
                          t.setTranslate(w),
                          t.transitionStart(!0, t.swipeDirection),
                          (t.animating = !0),
                          n.transitionEnd(function () {
                              t &&
                                  !t.destroyed &&
                                  a.allowMomentumBounce &&
                                  (t.emit("momentumBounce"),
                                  t.setTransition(i.speed),
                                  setTimeout(function () {
                                      t.setTranslate(y),
                                          n.transitionEnd(function () {
                                              t &&
                                                  !t.destroyed &&
                                                  t.transitionEnd();
                                          });
                                  }, 0));
                          }))
                        : t.velocity
                        ? (t.updateProgress(w),
                          t.setTransition(g),
                          t.setTranslate(w),
                          t.transitionStart(!0, t.swipeDirection),
                          t.animating ||
                              ((t.animating = !0),
                              n.transitionEnd(function () {
                                  t && !t.destroyed && t.transitionEnd();
                              })))
                        : (t.emit("_freeModeNoMomentumRelease"),
                          t.updateProgress(w)),
                        t.updateActiveIndex(),
                        t.updateSlidesClasses();
                } else {
                    if (i.freeModeSticky) return void t.slideToClosest();
                    i.freeMode && t.emit("_freeModeNoMomentumRelease");
                }
                (!i.freeModeMomentum || u >= i.longSwipesMs) &&
                    (t.updateProgress(),
                    t.updateActiveIndex(),
                    t.updateSlidesClasses());
            } else {
                for (
                    var L = 0, $ = t.slidesSizesGrid[0], I = 0;
                    I < o.length;
                    I += I < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
                ) {
                    var O = I < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
                    void 0 !== o[I + O]
                        ? p >= o[I] &&
                          p < o[I + O] &&
                          ((L = I), ($ = o[I + O] - o[I]))
                        : p >= o[I] &&
                          ((L = I), ($ = o[o.length - 1] - o[o.length - 2]));
                }
                var A = (p - o[L]) / $,
                    D = L < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
                if (u > i.longSwipesMs) {
                    if (!i.longSwipes) return void t.slideTo(t.activeIndex);
                    "next" === t.swipeDirection &&
                        (A >= i.longSwipesRatio
                            ? t.slideTo(L + D)
                            : t.slideTo(L)),
                        "prev" === t.swipeDirection &&
                            (A > 1 - i.longSwipesRatio
                                ? t.slideTo(L + D)
                                : t.slideTo(L));
                } else {
                    if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
                    t.navigation &&
                    (d.target === t.navigation.nextEl ||
                        d.target === t.navigation.prevEl)
                        ? d.target === t.navigation.nextEl
                            ? t.slideTo(L + D)
                            : t.slideTo(L)
                        : ("next" === t.swipeDirection && t.slideTo(L + D),
                          "prev" === t.swipeDirection && t.slideTo(L));
                }
            }
    }
    function G() {
        var e = this,
            t = e.params,
            a = e.el;
        if (!a || 0 !== a.offsetWidth) {
            t.breakpoints && e.setBreakpoint();
            var i = e.allowSlideNext,
                s = e.allowSlidePrev,
                r = e.snapGrid;
            (e.allowSlideNext = !0),
                (e.allowSlidePrev = !0),
                e.updateSize(),
                e.updateSlides(),
                e.updateSlidesClasses(),
                ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
                e.isEnd &&
                !e.isBeginning &&
                !e.params.centeredSlides
                    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                    : e.slideTo(e.activeIndex, 0, !1, !0),
                e.autoplay &&
                    e.autoplay.running &&
                    e.autoplay.paused &&
                    e.autoplay.run(),
                (e.allowSlidePrev = s),
                (e.allowSlideNext = i),
                e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
        }
    }
    function B(e) {
        var t = this;
        t.allowClick ||
            (t.params.preventClicks && e.preventDefault(),
            t.params.preventClicksPropagation &&
                t.animating &&
                (e.stopPropagation(), e.stopImmediatePropagation()));
    }
    function H() {
        var e = this,
            t = e.wrapperEl,
            a = e.rtlTranslate;
        (e.previousTranslate = e.translate),
            e.isHorizontal()
                ? (e.translate = a
                      ? t.scrollWidth - t.offsetWidth - t.scrollLeft
                      : -t.scrollLeft)
                : (e.translate = -t.scrollTop),
            -0 === e.translate && (e.translate = 0),
            e.updateActiveIndex(),
            e.updateSlidesClasses();
        var i = e.maxTranslate() - e.minTranslate();
        (0 === i ? 0 : (e.translate - e.minTranslate()) / i) !== e.progress &&
            e.updateProgress(a ? -e.translate : e.translate),
            e.emit("setTranslate", e.translate, !1);
    }
    var X = !1;
    function Y() {}
    var R = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            cssMode: !1,
            updateOnWindowResize: !0,
            resizeObserver: !1,
            nested: !1,
            width: null,
            height: null,
            preventInteractionOnTransition: !1,
            userAgent: null,
            url: null,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: 0.02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            centeredSlides: !1,
            centeredSlidesBounds: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !1,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: 0.5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !1,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: 0.85,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: !1,
            loopPreventsSlide: !0,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0,
            _emitClasses: !1,
        },
        V = {
            modular: {
                useParams: function (e) {
                    var t = this;
                    t.modules &&
                        Object.keys(t.modules).forEach(function (a) {
                            var i = t.modules[a];
                            i.params && C(e, i.params);
                        });
                },
                useModules: function (e) {
                    void 0 === e && (e = {});
                    var t = this;
                    t.modules &&
                        Object.keys(t.modules).forEach(function (a) {
                            var i = t.modules[a],
                                s = e[a] || {};
                            i.on &&
                                t.on &&
                                Object.keys(i.on).forEach(function (e) {
                                    t.on(e, i.on[e]);
                                }),
                                i.create && i.create.bind(t)(s);
                        });
                },
            },
            eventsEmitter: {
                on: function (e, t, a) {
                    var i = this;
                    if ("function" != typeof t) return i;
                    var s = a ? "unshift" : "push";
                    return (
                        e.split(" ").forEach(function (e) {
                            i.eventsListeners[e] || (i.eventsListeners[e] = []),
                                i.eventsListeners[e][s](t);
                        }),
                        i
                    );
                },
                once: function (e, t, a) {
                    var i = this;
                    if ("function" != typeof t) return i;
                    function s() {
                        i.off(e, s),
                            s.__emitterProxy && delete s.__emitterProxy;
                        for (
                            var a = arguments.length, r = new Array(a), n = 0;
                            n < a;
                            n++
                        )
                            r[n] = arguments[n];
                        t.apply(i, r);
                    }
                    return (s.__emitterProxy = t), i.on(e, s, a);
                },
                onAny: function (e, t) {
                    var a = this;
                    if ("function" != typeof e) return a;
                    var i = t ? "unshift" : "push";
                    return (
                        a.eventsAnyListeners.indexOf(e) < 0 &&
                            a.eventsAnyListeners[i](e),
                        a
                    );
                },
                offAny: function (e) {
                    var t = this;
                    if (!t.eventsAnyListeners) return t;
                    var a = t.eventsAnyListeners.indexOf(e);
                    return a >= 0 && t.eventsAnyListeners.splice(a, 1), t;
                },
                off: function (e, t) {
                    var a = this;
                    return a.eventsListeners
                        ? (e.split(" ").forEach(function (e) {
                              void 0 === t
                                  ? (a.eventsListeners[e] = [])
                                  : a.eventsListeners[e] &&
                                    a.eventsListeners[e].forEach(function (
                                        i,
                                        s
                                    ) {
                                        (i === t ||
                                            (i.__emitterProxy &&
                                                i.__emitterProxy === t)) &&
                                            a.eventsListeners[e].splice(s, 1);
                                    });
                          }),
                          a)
                        : a;
                },
                emit: function () {
                    var e,
                        t,
                        a,
                        i = this;
                    if (!i.eventsListeners) return i;
                    for (
                        var s = arguments.length, r = new Array(s), n = 0;
                        n < s;
                        n++
                    )
                        r[n] = arguments[n];
                    "string" == typeof r[0] || Array.isArray(r[0])
                        ? ((e = r[0]), (t = r.slice(1, r.length)), (a = i))
                        : ((e = r[0].events),
                          (t = r[0].data),
                          (a = r[0].context || i)),
                        t.unshift(a);
                    var o = Array.isArray(e) ? e : e.split(" ");
                    return (
                        o.forEach(function (e) {
                            i.eventsAnyListeners &&
                                i.eventsAnyListeners.length &&
                                i.eventsAnyListeners.forEach(function (i) {
                                    i.apply(a, [e].concat(t));
                                }),
                                i.eventsListeners &&
                                    i.eventsListeners[e] &&
                                    i.eventsListeners[e].forEach(function (e) {
                                        e.apply(a, t);
                                    });
                        }),
                        i
                    );
                },
            },
            update: {
                updateSize: function () {
                    var e,
                        t,
                        a = this,
                        i = a.$el;
                    (e =
                        void 0 !== a.params.width && null !== a.params.width
                            ? a.params.width
                            : i[0].clientWidth),
                        (t =
                            void 0 !== a.params.height &&
                            null !== a.params.height
                                ? a.params.height
                                : i[0].clientHeight),
                        (0 === e && a.isHorizontal()) ||
                            (0 === t && a.isVertical()) ||
                            ((e =
                                e -
                                parseInt(i.css("padding-left") || 0, 10) -
                                parseInt(i.css("padding-right") || 0, 10)),
                            (t =
                                t -
                                parseInt(i.css("padding-top") || 0, 10) -
                                parseInt(i.css("padding-bottom") || 0, 10)),
                            Number.isNaN(e) && (e = 0),
                            Number.isNaN(t) && (t = 0),
                            C(a, {
                                width: e,
                                height: t,
                                size: a.isHorizontal() ? e : t,
                            }));
                },
                updateSlides: function () {
                    var e = this,
                        t = function (t) {
                            return e.isHorizontal()
                                ? t
                                : {
                                      width: "height",
                                      "margin-top": "margin-left",
                                      "margin-bottom ": "margin-right",
                                      "margin-left": "margin-top",
                                      "margin-right": "margin-bottom",
                                      "padding-left": "padding-top",
                                      "padding-right": "padding-bottom",
                                      marginRight: "marginBottom",
                                  }[t];
                        },
                        a = function (e, a) {
                            return parseFloat(e.getPropertyValue(t(a)) || 0);
                        },
                        i = e.params,
                        s = e.$wrapperEl,
                        r = e.size,
                        n = e.rtlTranslate,
                        o = e.wrongRTL,
                        l = e.virtual && i.virtual.enabled,
                        d = l ? e.virtual.slides.length : e.slides.length,
                        p = s.children("." + e.params.slideClass),
                        c = l ? e.virtual.slides.length : p.length,
                        u = [],
                        h = [],
                        v = [],
                        f = i.slidesOffsetBefore;
                    "function" == typeof f &&
                        (f = i.slidesOffsetBefore.call(e));
                    var m = i.slidesOffsetAfter;
                    "function" == typeof m && (m = i.slidesOffsetAfter.call(e));
                    var g = e.snapGrid.length,
                        b = e.slidesGrid.length,
                        w = i.spaceBetween,
                        y = -f,
                        E = 0,
                        x = 0;
                    if (void 0 !== r) {
                        var T, S;
                        "string" == typeof w &&
                            w.indexOf("%") >= 0 &&
                            (w = (parseFloat(w.replace("%", "")) / 100) * r),
                            (e.virtualSize = -w),
                            n
                                ? p.css({ marginLeft: "", marginTop: "" })
                                : p.css({ marginRight: "", marginBottom: "" }),
                            i.slidesPerColumn > 1 &&
                                ((T =
                                    Math.floor(c / i.slidesPerColumn) ===
                                    c / e.params.slidesPerColumn
                                        ? c
                                        : Math.ceil(c / i.slidesPerColumn) *
                                          i.slidesPerColumn),
                                "auto" !== i.slidesPerView &&
                                    "row" === i.slidesPerColumnFill &&
                                    (T = Math.max(
                                        T,
                                        i.slidesPerView * i.slidesPerColumn
                                    )));
                        for (
                            var M,
                                z,
                                P,
                                k = i.slidesPerColumn,
                                L = T / k,
                                $ = Math.floor(c / i.slidesPerColumn),
                                I = 0;
                            I < c;
                            I += 1
                        ) {
                            S = 0;
                            var O = p.eq(I);
                            if (i.slidesPerColumn > 1) {
                                var A = void 0,
                                    D = void 0,
                                    N = void 0;
                                if (
                                    "row" === i.slidesPerColumnFill &&
                                    i.slidesPerGroup > 1
                                ) {
                                    var G = Math.floor(
                                            I /
                                                (i.slidesPerGroup *
                                                    i.slidesPerColumn)
                                        ),
                                        B =
                                            I -
                                            i.slidesPerColumn *
                                                i.slidesPerGroup *
                                                G,
                                        H =
                                            0 === G
                                                ? i.slidesPerGroup
                                                : Math.min(
                                                      Math.ceil(
                                                          (c -
                                                              G *
                                                                  k *
                                                                  i.slidesPerGroup) /
                                                              k
                                                      ),
                                                      i.slidesPerGroup
                                                  );
                                    (A =
                                        (D =
                                            B -
                                            (N = Math.floor(B / H)) * H +
                                            G * i.slidesPerGroup) +
                                        (N * T) / k),
                                        O.css({
                                            "-webkit-box-ordinal-group": A,
                                            "-moz-box-ordinal-group": A,
                                            "-ms-flex-order": A,
                                            "-webkit-order": A,
                                            order: A,
                                        });
                                } else
                                    "column" === i.slidesPerColumnFill
                                        ? ((N =
                                              I - (D = Math.floor(I / k)) * k),
                                          (D > $ || (D === $ && N === k - 1)) &&
                                              (N += 1) >= k &&
                                              ((N = 0), (D += 1)))
                                        : (D = I - (N = Math.floor(I / L)) * L);
                                O.css(
                                    t("margin-top"),
                                    0 !== N &&
                                        i.spaceBetween &&
                                        i.spaceBetween + "px"
                                );
                            }
                            if ("none" !== O.css("display")) {
                                if ("auto" === i.slidesPerView) {
                                    var X = getComputedStyle(O[0]),
                                        Y = O[0].style.transform,
                                        R = O[0].style.webkitTransform;
                                    if (
                                        (Y && (O[0].style.transform = "none"),
                                        R &&
                                            (O[0].style.webkitTransform =
                                                "none"),
                                        i.roundLengths)
                                    )
                                        S = e.isHorizontal()
                                            ? O.outerWidth(!0)
                                            : O.outerHeight(!0);
                                    else {
                                        var V = a(X, "width"),
                                            W = a(X, "padding-left"),
                                            F = a(X, "padding-right"),
                                            _ = a(X, "margin-left"),
                                            q = a(X, "margin-right"),
                                            j =
                                                X.getPropertyValue(
                                                    "box-sizing"
                                                );
                                        if (j && "border-box" === j)
                                            S = V + _ + q;
                                        else {
                                            var U = O[0],
                                                K = U.clientWidth;
                                            S =
                                                V +
                                                W +
                                                F +
                                                _ +
                                                q +
                                                (U.offsetWidth - K);
                                        }
                                    }
                                    Y && (O[0].style.transform = Y),
                                        R && (O[0].style.webkitTransform = R),
                                        i.roundLengths && (S = Math.floor(S));
                                } else
                                    (S =
                                        (r - (i.slidesPerView - 1) * w) /
                                        i.slidesPerView),
                                        i.roundLengths && (S = Math.floor(S)),
                                        p[I] &&
                                            (p[I].style[t("width")] = S + "px");
                                p[I] && (p[I].swiperSlideSize = S),
                                    v.push(S),
                                    i.centeredSlides
                                        ? ((y = y + S / 2 + E / 2 + w),
                                          0 === E &&
                                              0 !== I &&
                                              (y = y - r / 2 - w),
                                          0 === I && (y = y - r / 2 - w),
                                          Math.abs(y) < 0.001 && (y = 0),
                                          i.roundLengths && (y = Math.floor(y)),
                                          x % i.slidesPerGroup == 0 &&
                                              u.push(y),
                                          h.push(y))
                                        : (i.roundLengths &&
                                              (y = Math.floor(y)),
                                          (x -
                                              Math.min(
                                                  e.params.slidesPerGroupSkip,
                                                  x
                                              )) %
                                              e.params.slidesPerGroup ==
                                              0 && u.push(y),
                                          h.push(y),
                                          (y = y + S + w)),
                                    (e.virtualSize += S + w),
                                    (E = S),
                                    (x += 1);
                            }
                        }
                        if (
                            ((e.virtualSize = Math.max(e.virtualSize, r) + m),
                            n &&
                                o &&
                                ("slide" === i.effect ||
                                    "coverflow" === i.effect) &&
                                s.css({
                                    width:
                                        e.virtualSize + i.spaceBetween + "px",
                                }),
                            i.setWrapperSize)
                        )
                            s.css(
                                (((z = {})[t("width")] =
                                    e.virtualSize + i.spaceBetween + "px"),
                                z)
                            );
                        if (i.slidesPerColumn > 1)
                            if (
                                ((e.virtualSize = (S + i.spaceBetween) * T),
                                (e.virtualSize =
                                    Math.ceil(
                                        e.virtualSize / i.slidesPerColumn
                                    ) - i.spaceBetween),
                                s.css(
                                    (((P = {})[t("width")] =
                                        e.virtualSize + i.spaceBetween + "px"),
                                    P)
                                ),
                                i.centeredSlides)
                            ) {
                                M = [];
                                for (var Z = 0; Z < u.length; Z += 1) {
                                    var J = u[Z];
                                    i.roundLengths && (J = Math.floor(J)),
                                        u[Z] < e.virtualSize + u[0] &&
                                            M.push(J);
                                }
                                u = M;
                            }
                        if (!i.centeredSlides) {
                            M = [];
                            for (var Q = 0; Q < u.length; Q += 1) {
                                var ee = u[Q];
                                i.roundLengths && (ee = Math.floor(ee)),
                                    u[Q] <= e.virtualSize - r && M.push(ee);
                            }
                            (u = M),
                                Math.floor(e.virtualSize - r) -
                                    Math.floor(u[u.length - 1]) >
                                    1 && u.push(e.virtualSize - r);
                        }
                        if (
                            (0 === u.length && (u = [0]), 0 !== i.spaceBetween)
                        ) {
                            var te,
                                ae =
                                    e.isHorizontal() && n
                                        ? "marginLeft"
                                        : t("marginRight");
                            p.filter(function (e, t) {
                                return !i.cssMode || t !== p.length - 1;
                            }).css((((te = {})[ae] = w + "px"), te));
                        }
                        if (i.centeredSlides && i.centeredSlidesBounds) {
                            var ie = 0;
                            v.forEach(function (e) {
                                ie += e + (i.spaceBetween ? i.spaceBetween : 0);
                            });
                            var se = (ie -= i.spaceBetween) - r;
                            u = u.map(function (e) {
                                return e < 0 ? -f : e > se ? se + m : e;
                            });
                        }
                        if (i.centerInsufficientSlides) {
                            var re = 0;
                            if (
                                (v.forEach(function (e) {
                                    re +=
                                        e +
                                        (i.spaceBetween ? i.spaceBetween : 0);
                                }),
                                (re -= i.spaceBetween) < r)
                            ) {
                                var ne = (r - re) / 2;
                                u.forEach(function (e, t) {
                                    u[t] = e - ne;
                                }),
                                    h.forEach(function (e, t) {
                                        h[t] = e + ne;
                                    });
                            }
                        }
                        C(e, {
                            slides: p,
                            snapGrid: u,
                            slidesGrid: h,
                            slidesSizesGrid: v,
                        }),
                            c !== d && e.emit("slidesLengthChange"),
                            u.length !== g &&
                                (e.params.watchOverflow && e.checkOverflow(),
                                e.emit("snapGridLengthChange")),
                            h.length !== b && e.emit("slidesGridLengthChange"),
                            (i.watchSlidesProgress ||
                                i.watchSlidesVisibility) &&
                                e.updateSlidesOffset();
                    }
                },
                updateAutoHeight: function (e) {
                    var t,
                        a = this,
                        i = [],
                        s = 0;
                    if (
                        ("number" == typeof e
                            ? a.setTransition(e)
                            : !0 === e && a.setTransition(a.params.speed),
                        "auto" !== a.params.slidesPerView &&
                            a.params.slidesPerView > 1)
                    )
                        if (a.params.centeredSlides)
                            a.visibleSlides.each(function (e) {
                                i.push(e);
                            });
                        else
                            for (
                                t = 0;
                                t < Math.ceil(a.params.slidesPerView);
                                t += 1
                            ) {
                                var r = a.activeIndex + t;
                                if (r > a.slides.length) break;
                                i.push(a.slides.eq(r)[0]);
                            }
                    else i.push(a.slides.eq(a.activeIndex)[0]);
                    for (t = 0; t < i.length; t += 1)
                        if (void 0 !== i[t]) {
                            var n = i[t].offsetHeight;
                            s = n > s ? n : s;
                        }
                    s && a.$wrapperEl.css("height", s + "px");
                },
                updateSlidesOffset: function () {
                    for (var e = this.slides, t = 0; t < e.length; t += 1)
                        e[t].swiperSlideOffset = this.isHorizontal()
                            ? e[t].offsetLeft
                            : e[t].offsetTop;
                },
                updateSlidesProgress: function (e) {
                    void 0 === e && (e = (this && this.translate) || 0);
                    var t = this,
                        a = t.params,
                        i = t.slides,
                        s = t.rtlTranslate;
                    if (0 !== i.length) {
                        void 0 === i[0].swiperSlideOffset &&
                            t.updateSlidesOffset();
                        var r = -e;
                        s && (r = e),
                            i.removeClass(a.slideVisibleClass),
                            (t.visibleSlidesIndexes = []),
                            (t.visibleSlides = []);
                        for (var n = 0; n < i.length; n += 1) {
                            var o = i[n],
                                l =
                                    (r +
                                        (a.centeredSlides
                                            ? t.minTranslate()
                                            : 0) -
                                        o.swiperSlideOffset) /
                                    (o.swiperSlideSize + a.spaceBetween);
                            if (
                                a.watchSlidesVisibility ||
                                (a.centeredSlides && a.autoHeight)
                            ) {
                                var d = -(r - o.swiperSlideOffset),
                                    p = d + t.slidesSizesGrid[n];
                                ((d >= 0 && d < t.size - 1) ||
                                    (p > 1 && p <= t.size) ||
                                    (d <= 0 && p >= t.size)) &&
                                    (t.visibleSlides.push(o),
                                    t.visibleSlidesIndexes.push(n),
                                    i.eq(n).addClass(a.slideVisibleClass));
                            }
                            o.progress = s ? -l : l;
                        }
                        t.visibleSlides = m(t.visibleSlides);
                    }
                },
                updateProgress: function (e) {
                    var t = this;
                    if (void 0 === e) {
                        var a = t.rtlTranslate ? -1 : 1;
                        e = (t && t.translate && t.translate * a) || 0;
                    }
                    var i = t.params,
                        s = t.maxTranslate() - t.minTranslate(),
                        r = t.progress,
                        n = t.isBeginning,
                        o = t.isEnd,
                        l = n,
                        d = o;
                    0 === s
                        ? ((r = 0), (n = !0), (o = !0))
                        : ((n = (r = (e - t.minTranslate()) / s) <= 0),
                          (o = r >= 1)),
                        C(t, { progress: r, isBeginning: n, isEnd: o }),
                        (i.watchSlidesProgress ||
                            i.watchSlidesVisibility ||
                            (i.centeredSlides && i.autoHeight)) &&
                            t.updateSlidesProgress(e),
                        n && !l && t.emit("reachBeginning toEdge"),
                        o && !d && t.emit("reachEnd toEdge"),
                        ((l && !n) || (d && !o)) && t.emit("fromEdge"),
                        t.emit("progress", r);
                },
                updateSlidesClasses: function () {
                    var e,
                        t = this,
                        a = t.slides,
                        i = t.params,
                        s = t.$wrapperEl,
                        r = t.activeIndex,
                        n = t.realIndex,
                        o = t.virtual && i.virtual.enabled;
                    a.removeClass(
                        i.slideActiveClass +
                            " " +
                            i.slideNextClass +
                            " " +
                            i.slidePrevClass +
                            " " +
                            i.slideDuplicateActiveClass +
                            " " +
                            i.slideDuplicateNextClass +
                            " " +
                            i.slideDuplicatePrevClass
                    ),
                        (e = o
                            ? t.$wrapperEl.find(
                                  "." +
                                      i.slideClass +
                                      '[data-swiper-slide-index="' +
                                      r +
                                      '"]'
                              )
                            : a.eq(r)).addClass(i.slideActiveClass),
                        i.loop &&
                            (e.hasClass(i.slideDuplicateClass)
                                ? s
                                      .children(
                                          "." +
                                              i.slideClass +
                                              ":not(." +
                                              i.slideDuplicateClass +
                                              ')[data-swiper-slide-index="' +
                                              n +
                                              '"]'
                                      )
                                      .addClass(i.slideDuplicateActiveClass)
                                : s
                                      .children(
                                          "." +
                                              i.slideClass +
                                              "." +
                                              i.slideDuplicateClass +
                                              '[data-swiper-slide-index="' +
                                              n +
                                              '"]'
                                      )
                                      .addClass(i.slideDuplicateActiveClass));
                    var l = e
                        .nextAll("." + i.slideClass)
                        .eq(0)
                        .addClass(i.slideNextClass);
                    i.loop &&
                        0 === l.length &&
                        (l = a.eq(0)).addClass(i.slideNextClass);
                    var d = e
                        .prevAll("." + i.slideClass)
                        .eq(0)
                        .addClass(i.slidePrevClass);
                    i.loop &&
                        0 === d.length &&
                        (d = a.eq(-1)).addClass(i.slidePrevClass),
                        i.loop &&
                            (l.hasClass(i.slideDuplicateClass)
                                ? s
                                      .children(
                                          "." +
                                              i.slideClass +
                                              ":not(." +
                                              i.slideDuplicateClass +
                                              ')[data-swiper-slide-index="' +
                                              l.attr(
                                                  "data-swiper-slide-index"
                                              ) +
                                              '"]'
                                      )
                                      .addClass(i.slideDuplicateNextClass)
                                : s
                                      .children(
                                          "." +
                                              i.slideClass +
                                              "." +
                                              i.slideDuplicateClass +
                                              '[data-swiper-slide-index="' +
                                              l.attr(
                                                  "data-swiper-slide-index"
                                              ) +
                                              '"]'
                                      )
                                      .addClass(i.slideDuplicateNextClass),
                            d.hasClass(i.slideDuplicateClass)
                                ? s
                                      .children(
                                          "." +
                                              i.slideClass +
                                              ":not(." +
                                              i.slideDuplicateClass +
                                              ')[data-swiper-slide-index="' +
                                              d.attr(
                                                  "data-swiper-slide-index"
                                              ) +
                                              '"]'
                                      )
                                      .addClass(i.slideDuplicatePrevClass)
                                : s
                                      .children(
                                          "." +
                                              i.slideClass +
                                              "." +
                                              i.slideDuplicateClass +
                                              '[data-swiper-slide-index="' +
                                              d.attr(
                                                  "data-swiper-slide-index"
                                              ) +
                                              '"]'
                                      )
                                      .addClass(i.slideDuplicatePrevClass)),
                        t.emitSlidesClasses();
                },
                updateActiveIndex: function (e) {
                    var t,
                        a = this,
                        i = a.rtlTranslate ? a.translate : -a.translate,
                        s = a.slidesGrid,
                        r = a.snapGrid,
                        n = a.params,
                        o = a.activeIndex,
                        l = a.realIndex,
                        d = a.snapIndex,
                        p = e;
                    if (void 0 === p) {
                        for (var c = 0; c < s.length; c += 1)
                            void 0 !== s[c + 1]
                                ? i >= s[c] &&
                                  i < s[c + 1] - (s[c + 1] - s[c]) / 2
                                    ? (p = c)
                                    : i >= s[c] && i < s[c + 1] && (p = c + 1)
                                : i >= s[c] && (p = c);
                        n.normalizeSlideIndex &&
                            (p < 0 || void 0 === p) &&
                            (p = 0);
                    }
                    if (r.indexOf(i) >= 0) t = r.indexOf(i);
                    else {
                        var u = Math.min(n.slidesPerGroupSkip, p);
                        t = u + Math.floor((p - u) / n.slidesPerGroup);
                    }
                    if ((t >= r.length && (t = r.length - 1), p !== o)) {
                        var h = parseInt(
                            a.slides.eq(p).attr("data-swiper-slide-index") || p,
                            10
                        );
                        C(a, {
                            snapIndex: t,
                            realIndex: h,
                            previousIndex: o,
                            activeIndex: p,
                        }),
                            a.emit("activeIndexChange"),
                            a.emit("snapIndexChange"),
                            l !== h && a.emit("realIndexChange"),
                            (a.initialized || a.params.runCallbacksOnInit) &&
                                a.emit("slideChange");
                    } else
                        t !== d &&
                            ((a.snapIndex = t), a.emit("snapIndexChange"));
                },
                updateClickedSlide: function (e) {
                    var t,
                        a = this,
                        i = a.params,
                        s = m(e.target).closest("." + i.slideClass)[0],
                        r = !1;
                    if (s)
                        for (var n = 0; n < a.slides.length; n += 1)
                            if (a.slides[n] === s) {
                                (r = !0), (t = n);
                                break;
                            }
                    if (!s || !r)
                        return (
                            (a.clickedSlide = void 0),
                            void (a.clickedIndex = void 0)
                        );
                    (a.clickedSlide = s),
                        a.virtual && a.params.virtual.enabled
                            ? (a.clickedIndex = parseInt(
                                  m(s).attr("data-swiper-slide-index"),
                                  10
                              ))
                            : (a.clickedIndex = t),
                        i.slideToClickedSlide &&
                            void 0 !== a.clickedIndex &&
                            a.clickedIndex !== a.activeIndex &&
                            a.slideToClickedSlide();
                },
            },
            translate: {
                getTranslate: function (e) {
                    void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                    var t = this,
                        a = t.params,
                        i = t.rtlTranslate,
                        s = t.translate,
                        r = t.$wrapperEl;
                    if (a.virtualTranslate) return i ? -s : s;
                    if (a.cssMode) return s;
                    var n = T(r[0], e);
                    return i && (n = -n), n || 0;
                },
                setTranslate: function (e, t) {
                    var a = this,
                        i = a.rtlTranslate,
                        s = a.params,
                        r = a.$wrapperEl,
                        n = a.wrapperEl,
                        o = a.progress,
                        l = 0,
                        d = 0;
                    a.isHorizontal() ? (l = i ? -e : e) : (d = e),
                        s.roundLengths &&
                            ((l = Math.floor(l)), (d = Math.floor(d))),
                        s.cssMode
                            ? (n[
                                  a.isHorizontal() ? "scrollLeft" : "scrollTop"
                              ] = a.isHorizontal() ? -l : -d)
                            : s.virtualTranslate ||
                              r.transform(
                                  "translate3d(" + l + "px, " + d + "px, 0px)"
                              ),
                        (a.previousTranslate = a.translate),
                        (a.translate = a.isHorizontal() ? l : d);
                    var p = a.maxTranslate() - a.minTranslate();
                    (0 === p ? 0 : (e - a.minTranslate()) / p) !== o &&
                        a.updateProgress(e),
                        a.emit("setTranslate", a.translate, t);
                },
                minTranslate: function () {
                    return -this.snapGrid[0];
                },
                maxTranslate: function () {
                    return -this.snapGrid[this.snapGrid.length - 1];
                },
                translateTo: function (e, t, a, i, s) {
                    void 0 === e && (e = 0),
                        void 0 === t && (t = this.params.speed),
                        void 0 === a && (a = !0),
                        void 0 === i && (i = !0);
                    var r = this,
                        n = r.params,
                        o = r.wrapperEl;
                    if (r.animating && n.preventInteractionOnTransition)
                        return !1;
                    var l,
                        d = r.minTranslate(),
                        p = r.maxTranslate();
                    if (
                        ((l = i && e > d ? d : i && e < p ? p : e),
                        r.updateProgress(l),
                        n.cssMode)
                    ) {
                        var c,
                            u = r.isHorizontal();
                        if (0 === t) o[u ? "scrollLeft" : "scrollTop"] = -l;
                        else if (o.scrollTo)
                            o.scrollTo(
                                (((c = {})[u ? "left" : "top"] = -l),
                                (c.behavior = "smooth"),
                                c)
                            );
                        else o[u ? "scrollLeft" : "scrollTop"] = -l;
                        return !0;
                    }
                    return (
                        0 === t
                            ? (r.setTransition(0),
                              r.setTranslate(l),
                              a &&
                                  (r.emit("beforeTransitionStart", t, s),
                                  r.emit("transitionEnd")))
                            : (r.setTransition(t),
                              r.setTranslate(l),
                              a &&
                                  (r.emit("beforeTransitionStart", t, s),
                                  r.emit("transitionStart")),
                              r.animating ||
                                  ((r.animating = !0),
                                  r.onTranslateToWrapperTransitionEnd ||
                                      (r.onTranslateToWrapperTransitionEnd =
                                          function (e) {
                                              r &&
                                                  !r.destroyed &&
                                                  e.target === this &&
                                                  (r.$wrapperEl[0].removeEventListener(
                                                      "transitionend",
                                                      r.onTranslateToWrapperTransitionEnd
                                                  ),
                                                  r.$wrapperEl[0].removeEventListener(
                                                      "webkitTransitionEnd",
                                                      r.onTranslateToWrapperTransitionEnd
                                                  ),
                                                  (r.onTranslateToWrapperTransitionEnd =
                                                      null),
                                                  delete r.onTranslateToWrapperTransitionEnd,
                                                  a && r.emit("transitionEnd"));
                                          }),
                                  r.$wrapperEl[0].addEventListener(
                                      "transitionend",
                                      r.onTranslateToWrapperTransitionEnd
                                  ),
                                  r.$wrapperEl[0].addEventListener(
                                      "webkitTransitionEnd",
                                      r.onTranslateToWrapperTransitionEnd
                                  ))),
                        !0
                    );
                },
            },
            transition: {
                setTransition: function (e, t) {
                    var a = this;
                    a.params.cssMode || a.$wrapperEl.transition(e),
                        a.emit("setTransition", e, t);
                },
                transitionStart: function (e, t) {
                    void 0 === e && (e = !0);
                    var a = this,
                        i = a.activeIndex,
                        s = a.params,
                        r = a.previousIndex;
                    if (!s.cssMode) {
                        s.autoHeight && a.updateAutoHeight();
                        var n = t;
                        if (
                            (n ||
                                (n = i > r ? "next" : i < r ? "prev" : "reset"),
                            a.emit("transitionStart"),
                            e && i !== r)
                        ) {
                            if ("reset" === n)
                                return void a.emit("slideResetTransitionStart");
                            a.emit("slideChangeTransitionStart"),
                                "next" === n
                                    ? a.emit("slideNextTransitionStart")
                                    : a.emit("slidePrevTransitionStart");
                        }
                    }
                },
                transitionEnd: function (e, t) {
                    void 0 === e && (e = !0);
                    var a = this,
                        i = a.activeIndex,
                        s = a.previousIndex,
                        r = a.params;
                    if (((a.animating = !1), !r.cssMode)) {
                        a.setTransition(0);
                        var n = t;
                        if (
                            (n ||
                                (n = i > s ? "next" : i < s ? "prev" : "reset"),
                            a.emit("transitionEnd"),
                            e && i !== s)
                        ) {
                            if ("reset" === n)
                                return void a.emit("slideResetTransitionEnd");
                            a.emit("slideChangeTransitionEnd"),
                                "next" === n
                                    ? a.emit("slideNextTransitionEnd")
                                    : a.emit("slidePrevTransitionEnd");
                        }
                    }
                },
            },
            slide: {
                slideTo: function (e, t, a, i) {
                    if (
                        (void 0 === e && (e = 0),
                        void 0 === t && (t = this.params.speed),
                        void 0 === a && (a = !0),
                        "number" != typeof e && "string" != typeof e)
                    )
                        throw new Error(
                            "The 'index' argument cannot have type other than 'number' or 'string'. [" +
                                typeof e +
                                "] given."
                        );
                    if ("string" == typeof e) {
                        var s = parseInt(e, 10);
                        if (!isFinite(s))
                            throw new Error(
                                "The passed-in 'index' (string) couldn't be converted to 'number'. [" +
                                    e +
                                    "] given."
                            );
                        e = s;
                    }
                    var r = this,
                        n = e;
                    n < 0 && (n = 0);
                    var o = r.params,
                        l = r.snapGrid,
                        d = r.slidesGrid,
                        p = r.previousIndex,
                        c = r.activeIndex,
                        u = r.rtlTranslate,
                        h = r.wrapperEl;
                    if (r.animating && o.preventInteractionOnTransition)
                        return !1;
                    var v = Math.min(r.params.slidesPerGroupSkip, n),
                        f = v + Math.floor((n - v) / r.params.slidesPerGroup);
                    f >= l.length && (f = l.length - 1),
                        (c || o.initialSlide || 0) === (p || 0) &&
                            a &&
                            r.emit("beforeSlideChangeStart");
                    var m,
                        g = -l[f];
                    if ((r.updateProgress(g), o.normalizeSlideIndex))
                        for (var b = 0; b < d.length; b += 1) {
                            var w = -Math.floor(100 * g),
                                y = Math.floor(100 * d[b]),
                                E = Math.floor(100 * d[b + 1]);
                            void 0 !== d[b + 1]
                                ? w >= y && w < E - (E - y) / 2
                                    ? (n = b)
                                    : w >= y && w < E && (n = b + 1)
                                : w >= y && (n = b);
                        }
                    if (r.initialized && n !== c) {
                        if (
                            !r.allowSlideNext &&
                            g < r.translate &&
                            g < r.minTranslate()
                        )
                            return !1;
                        if (
                            !r.allowSlidePrev &&
                            g > r.translate &&
                            g > r.maxTranslate() &&
                            (c || 0) !== n
                        )
                            return !1;
                    }
                    if (
                        ((m = n > c ? "next" : n < c ? "prev" : "reset"),
                        (u && -g === r.translate) || (!u && g === r.translate))
                    )
                        return (
                            r.updateActiveIndex(n),
                            o.autoHeight && r.updateAutoHeight(),
                            r.updateSlidesClasses(),
                            "slide" !== o.effect && r.setTranslate(g),
                            "reset" !== m &&
                                (r.transitionStart(a, m),
                                r.transitionEnd(a, m)),
                            !1
                        );
                    if (o.cssMode) {
                        var x,
                            T = r.isHorizontal(),
                            S = -g;
                        if (
                            (u && (S = h.scrollWidth - h.offsetWidth - S),
                            0 === t)
                        )
                            h[T ? "scrollLeft" : "scrollTop"] = S;
                        else if (h.scrollTo)
                            h.scrollTo(
                                (((x = {})[T ? "left" : "top"] = S),
                                (x.behavior = "smooth"),
                                x)
                            );
                        else h[T ? "scrollLeft" : "scrollTop"] = S;
                        return !0;
                    }
                    return (
                        0 === t
                            ? (r.setTransition(0),
                              r.setTranslate(g),
                              r.updateActiveIndex(n),
                              r.updateSlidesClasses(),
                              r.emit("beforeTransitionStart", t, i),
                              r.transitionStart(a, m),
                              r.transitionEnd(a, m))
                            : (r.setTransition(t),
                              r.setTranslate(g),
                              r.updateActiveIndex(n),
                              r.updateSlidesClasses(),
                              r.emit("beforeTransitionStart", t, i),
                              r.transitionStart(a, m),
                              r.animating ||
                                  ((r.animating = !0),
                                  r.onSlideToWrapperTransitionEnd ||
                                      (r.onSlideToWrapperTransitionEnd =
                                          function (e) {
                                              r &&
                                                  !r.destroyed &&
                                                  e.target === this &&
                                                  (r.$wrapperEl[0].removeEventListener(
                                                      "transitionend",
                                                      r.onSlideToWrapperTransitionEnd
                                                  ),
                                                  r.$wrapperEl[0].removeEventListener(
                                                      "webkitTransitionEnd",
                                                      r.onSlideToWrapperTransitionEnd
                                                  ),
                                                  (r.onSlideToWrapperTransitionEnd =
                                                      null),
                                                  delete r.onSlideToWrapperTransitionEnd,
                                                  r.transitionEnd(a, m));
                                          }),
                                  r.$wrapperEl[0].addEventListener(
                                      "transitionend",
                                      r.onSlideToWrapperTransitionEnd
                                  ),
                                  r.$wrapperEl[0].addEventListener(
                                      "webkitTransitionEnd",
                                      r.onSlideToWrapperTransitionEnd
                                  ))),
                        !0
                    );
                },
                slideToLoop: function (e, t, a, i) {
                    void 0 === e && (e = 0),
                        void 0 === t && (t = this.params.speed),
                        void 0 === a && (a = !0);
                    var s = this,
                        r = e;
                    return (
                        s.params.loop && (r += s.loopedSlides),
                        s.slideTo(r, t, a, i)
                    );
                },
                slideNext: function (e, t, a) {
                    void 0 === e && (e = this.params.speed),
                        void 0 === t && (t = !0);
                    var i = this,
                        s = i.params,
                        r = i.animating,
                        n =
                            i.activeIndex < s.slidesPerGroupSkip
                                ? 1
                                : s.slidesPerGroup;
                    if (s.loop) {
                        if (r && s.loopPreventsSlide) return !1;
                        i.loopFix(),
                            (i._clientLeft = i.$wrapperEl[0].clientLeft);
                    }
                    return i.slideTo(i.activeIndex + n, e, t, a);
                },
                slidePrev: function (e, t, a) {
                    void 0 === e && (e = this.params.speed),
                        void 0 === t && (t = !0);
                    var i = this,
                        s = i.params,
                        r = i.animating,
                        n = i.snapGrid,
                        o = i.slidesGrid,
                        l = i.rtlTranslate;
                    if (s.loop) {
                        if (r && s.loopPreventsSlide) return !1;
                        i.loopFix(),
                            (i._clientLeft = i.$wrapperEl[0].clientLeft);
                    }
                    function d(e) {
                        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
                    }
                    var p = d(l ? i.translate : -i.translate),
                        c = n.map(function (e) {
                            return d(e);
                        });
                    n[c.indexOf(p)];
                    var u,
                        h = n[c.indexOf(p) - 1];
                    return (
                        void 0 === h &&
                            s.cssMode &&
                            n.forEach(function (e) {
                                !h && p >= e && (h = e);
                            }),
                        void 0 !== h &&
                            (u = o.indexOf(h)) < 0 &&
                            (u = i.activeIndex - 1),
                        i.slideTo(u, e, t, a)
                    );
                },
                slideReset: function (e, t, a) {
                    return (
                        void 0 === e && (e = this.params.speed),
                        void 0 === t && (t = !0),
                        this.slideTo(this.activeIndex, e, t, a)
                    );
                },
                slideToClosest: function (e, t, a, i) {
                    void 0 === e && (e = this.params.speed),
                        void 0 === t && (t = !0),
                        void 0 === i && (i = 0.5);
                    var s = this,
                        r = s.activeIndex,
                        n = Math.min(s.params.slidesPerGroupSkip, r),
                        o = n + Math.floor((r - n) / s.params.slidesPerGroup),
                        l = s.rtlTranslate ? s.translate : -s.translate;
                    if (l >= s.snapGrid[o]) {
                        var d = s.snapGrid[o];
                        l - d > (s.snapGrid[o + 1] - d) * i &&
                            (r += s.params.slidesPerGroup);
                    } else {
                        var p = s.snapGrid[o - 1];
                        l - p <= (s.snapGrid[o] - p) * i &&
                            (r -= s.params.slidesPerGroup);
                    }
                    return (
                        (r = Math.max(r, 0)),
                        (r = Math.min(r, s.slidesGrid.length - 1)),
                        s.slideTo(r, e, t, a)
                    );
                },
                slideToClickedSlide: function () {
                    var e,
                        t = this,
                        a = t.params,
                        i = t.$wrapperEl,
                        s =
                            "auto" === a.slidesPerView
                                ? t.slidesPerViewDynamic()
                                : a.slidesPerView,
                        r = t.clickedIndex;
                    if (a.loop) {
                        if (t.animating) return;
                        (e = parseInt(
                            m(t.clickedSlide).attr("data-swiper-slide-index"),
                            10
                        )),
                            a.centeredSlides
                                ? r < t.loopedSlides - s / 2 ||
                                  r > t.slides.length - t.loopedSlides + s / 2
                                    ? (t.loopFix(),
                                      (r = i
                                          .children(
                                              "." +
                                                  a.slideClass +
                                                  '[data-swiper-slide-index="' +
                                                  e +
                                                  '"]:not(.' +
                                                  a.slideDuplicateClass +
                                                  ")"
                                          )
                                          .eq(0)
                                          .index()),
                                      E(function () {
                                          t.slideTo(r);
                                      }))
                                    : t.slideTo(r)
                                : r > t.slides.length - s
                                ? (t.loopFix(),
                                  (r = i
                                      .children(
                                          "." +
                                              a.slideClass +
                                              '[data-swiper-slide-index="' +
                                              e +
                                              '"]:not(.' +
                                              a.slideDuplicateClass +
                                              ")"
                                      )
                                      .eq(0)
                                      .index()),
                                  E(function () {
                                      t.slideTo(r);
                                  }))
                                : t.slideTo(r);
                    } else t.slideTo(r);
                },
            },
            loop: {
                loopCreate: function () {
                    var e = this,
                        t = r(),
                        a = e.params,
                        i = e.$wrapperEl;
                    i.children(
                        "." + a.slideClass + "." + a.slideDuplicateClass
                    ).remove();
                    var s = i.children("." + a.slideClass);
                    if (a.loopFillGroupWithBlank) {
                        var n =
                            a.slidesPerGroup - (s.length % a.slidesPerGroup);
                        if (n !== a.slidesPerGroup) {
                            for (var o = 0; o < n; o += 1) {
                                var l = m(t.createElement("div")).addClass(
                                    a.slideClass + " " + a.slideBlankClass
                                );
                                i.append(l);
                            }
                            s = i.children("." + a.slideClass);
                        }
                    }
                    "auto" !== a.slidesPerView ||
                        a.loopedSlides ||
                        (a.loopedSlides = s.length),
                        (e.loopedSlides = Math.ceil(
                            parseFloat(a.loopedSlides || a.slidesPerView, 10)
                        )),
                        (e.loopedSlides += a.loopAdditionalSlides),
                        e.loopedSlides > s.length &&
                            (e.loopedSlides = s.length);
                    var d = [],
                        p = [];
                    s.each(function (t, a) {
                        var i = m(t);
                        a < e.loopedSlides && p.push(t),
                            a < s.length &&
                                a >= s.length - e.loopedSlides &&
                                d.push(t),
                            i.attr("data-swiper-slide-index", a);
                    });
                    for (var c = 0; c < p.length; c += 1)
                        i.append(
                            m(p[c].cloneNode(!0)).addClass(
                                a.slideDuplicateClass
                            )
                        );
                    for (var u = d.length - 1; u >= 0; u -= 1)
                        i.prepend(
                            m(d[u].cloneNode(!0)).addClass(
                                a.slideDuplicateClass
                            )
                        );
                },
                loopFix: function () {
                    var e = this;
                    e.emit("beforeLoopFix");
                    var t,
                        a = e.activeIndex,
                        i = e.slides,
                        s = e.loopedSlides,
                        r = e.allowSlidePrev,
                        n = e.allowSlideNext,
                        o = e.snapGrid,
                        l = e.rtlTranslate;
                    (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
                    var d = -o[a] - e.getTranslate();
                    if (a < s)
                        (t = i.length - 3 * s + a),
                            (t += s),
                            e.slideTo(t, 0, !1, !0) &&
                                0 !== d &&
                                e.setTranslate(
                                    (l ? -e.translate : e.translate) - d
                                );
                    else if (a >= i.length - s) {
                        (t = -i.length + a + s),
                            (t += s),
                            e.slideTo(t, 0, !1, !0) &&
                                0 !== d &&
                                e.setTranslate(
                                    (l ? -e.translate : e.translate) - d
                                );
                    }
                    (e.allowSlidePrev = r),
                        (e.allowSlideNext = n),
                        e.emit("loopFix");
                },
                loopDestroy: function () {
                    var e = this,
                        t = e.$wrapperEl,
                        a = e.params,
                        i = e.slides;
                    t
                        .children(
                            "." +
                                a.slideClass +
                                "." +
                                a.slideDuplicateClass +
                                ",." +
                                a.slideClass +
                                "." +
                                a.slideBlankClass
                        )
                        .remove(),
                        i.removeAttr("data-swiper-slide-index");
                },
            },
            grabCursor: {
                setGrabCursor: function (e) {
                    var t = this;
                    if (
                        !(
                            t.support.touch ||
                            !t.params.simulateTouch ||
                            (t.params.watchOverflow && t.isLocked) ||
                            t.params.cssMode
                        )
                    ) {
                        var a = t.el;
                        (a.style.cursor = "move"),
                            (a.style.cursor = e
                                ? "-webkit-grabbing"
                                : "-webkit-grab"),
                            (a.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
                            (a.style.cursor = e ? "grabbing" : "grab");
                    }
                },
                unsetGrabCursor: function () {
                    var e = this;
                    e.support.touch ||
                        (e.params.watchOverflow && e.isLocked) ||
                        e.params.cssMode ||
                        (e.el.style.cursor = "");
                },
            },
            manipulation: {
                appendSlide: function (e) {
                    var t = this,
                        a = t.$wrapperEl,
                        i = t.params;
                    if (
                        (i.loop && t.loopDestroy(),
                        "object" == typeof e && "length" in e)
                    )
                        for (var s = 0; s < e.length; s += 1)
                            e[s] && a.append(e[s]);
                    else a.append(e);
                    i.loop && t.loopCreate(),
                        (i.observer && t.support.observer) || t.update();
                },
                prependSlide: function (e) {
                    var t = this,
                        a = t.params,
                        i = t.$wrapperEl,
                        s = t.activeIndex;
                    a.loop && t.loopDestroy();
                    var r = s + 1;
                    if ("object" == typeof e && "length" in e) {
                        for (var n = 0; n < e.length; n += 1)
                            e[n] && i.prepend(e[n]);
                        r = s + e.length;
                    } else i.prepend(e);
                    a.loop && t.loopCreate(),
                        (a.observer && t.support.observer) || t.update(),
                        t.slideTo(r, 0, !1);
                },
                addSlide: function (e, t) {
                    var a = this,
                        i = a.$wrapperEl,
                        s = a.params,
                        r = a.activeIndex;
                    s.loop &&
                        ((r -= a.loopedSlides),
                        a.loopDestroy(),
                        (a.slides = i.children("." + s.slideClass)));
                    var n = a.slides.length;
                    if (e <= 0) a.prependSlide(t);
                    else if (e >= n) a.appendSlide(t);
                    else {
                        for (
                            var o = r > e ? r + 1 : r, l = [], d = n - 1;
                            d >= e;
                            d -= 1
                        ) {
                            var p = a.slides.eq(d);
                            p.remove(), l.unshift(p);
                        }
                        if ("object" == typeof t && "length" in t) {
                            for (var c = 0; c < t.length; c += 1)
                                t[c] && i.append(t[c]);
                            o = r > e ? r + t.length : r;
                        } else i.append(t);
                        for (var u = 0; u < l.length; u += 1) i.append(l[u]);
                        s.loop && a.loopCreate(),
                            (s.observer && a.support.observer) || a.update(),
                            s.loop
                                ? a.slideTo(o + a.loopedSlides, 0, !1)
                                : a.slideTo(o, 0, !1);
                    }
                },
                removeSlide: function (e) {
                    var t = this,
                        a = t.params,
                        i = t.$wrapperEl,
                        s = t.activeIndex;
                    a.loop &&
                        ((s -= t.loopedSlides),
                        t.loopDestroy(),
                        (t.slides = i.children("." + a.slideClass)));
                    var r,
                        n = s;
                    if ("object" == typeof e && "length" in e) {
                        for (var o = 0; o < e.length; o += 1)
                            (r = e[o]),
                                t.slides[r] && t.slides.eq(r).remove(),
                                r < n && (n -= 1);
                        n = Math.max(n, 0);
                    } else
                        (r = e),
                            t.slides[r] && t.slides.eq(r).remove(),
                            r < n && (n -= 1),
                            (n = Math.max(n, 0));
                    a.loop && t.loopCreate(),
                        (a.observer && t.support.observer) || t.update(),
                        a.loop
                            ? t.slideTo(n + t.loopedSlides, 0, !1)
                            : t.slideTo(n, 0, !1);
                },
                removeAllSlides: function () {
                    for (var e = [], t = 0; t < this.slides.length; t += 1)
                        e.push(t);
                    this.removeSlide(e);
                },
            },
            events: {
                attachEvents: function () {
                    var e = this,
                        t = r(),
                        a = e.params,
                        i = e.touchEvents,
                        s = e.el,
                        n = e.wrapperEl,
                        o = e.device,
                        l = e.support;
                    (e.onTouchStart = A.bind(e)),
                        (e.onTouchMove = D.bind(e)),
                        (e.onTouchEnd = N.bind(e)),
                        a.cssMode && (e.onScroll = H.bind(e)),
                        (e.onClick = B.bind(e));
                    var d = !!a.nested;
                    if (!l.touch && l.pointerEvents)
                        s.addEventListener(i.start, e.onTouchStart, !1),
                            t.addEventListener(i.move, e.onTouchMove, d),
                            t.addEventListener(i.end, e.onTouchEnd, !1);
                    else {
                        if (l.touch) {
                            var p = !(
                                "touchstart" !== i.start ||
                                !l.passiveListener ||
                                !a.passiveListeners
                            ) && { passive: !0, capture: !1 };
                            s.addEventListener(i.start, e.onTouchStart, p),
                                s.addEventListener(
                                    i.move,
                                    e.onTouchMove,
                                    l.passiveListener
                                        ? { passive: !1, capture: d }
                                        : d
                                ),
                                s.addEventListener(i.end, e.onTouchEnd, p),
                                i.cancel &&
                                    s.addEventListener(
                                        i.cancel,
                                        e.onTouchEnd,
                                        p
                                    ),
                                X ||
                                    (t.addEventListener("touchstart", Y),
                                    (X = !0));
                        }
                        ((a.simulateTouch && !o.ios && !o.android) ||
                            (a.simulateTouch && !l.touch && o.ios)) &&
                            (s.addEventListener(
                                "mousedown",
                                e.onTouchStart,
                                !1
                            ),
                            t.addEventListener("mousemove", e.onTouchMove, d),
                            t.addEventListener("mouseup", e.onTouchEnd, !1));
                    }
                    (a.preventClicks || a.preventClicksPropagation) &&
                        s.addEventListener("click", e.onClick, !0),
                        a.cssMode && n.addEventListener("scroll", e.onScroll),
                        a.updateOnWindowResize
                            ? e.on(
                                  o.ios || o.android
                                      ? "resize orientationchange observerUpdate"
                                      : "resize observerUpdate",
                                  G,
                                  !0
                              )
                            : e.on("observerUpdate", G, !0);
                },
                detachEvents: function () {
                    var e = this,
                        t = r(),
                        a = e.params,
                        i = e.touchEvents,
                        s = e.el,
                        n = e.wrapperEl,
                        o = e.device,
                        l = e.support,
                        d = !!a.nested;
                    if (!l.touch && l.pointerEvents)
                        s.removeEventListener(i.start, e.onTouchStart, !1),
                            t.removeEventListener(i.move, e.onTouchMove, d),
                            t.removeEventListener(i.end, e.onTouchEnd, !1);
                    else {
                        if (l.touch) {
                            var p = !(
                                "onTouchStart" !== i.start ||
                                !l.passiveListener ||
                                !a.passiveListeners
                            ) && { passive: !0, capture: !1 };
                            s.removeEventListener(i.start, e.onTouchStart, p),
                                s.removeEventListener(i.move, e.onTouchMove, d),
                                s.removeEventListener(i.end, e.onTouchEnd, p),
                                i.cancel &&
                                    s.removeEventListener(
                                        i.cancel,
                                        e.onTouchEnd,
                                        p
                                    );
                        }
                        ((a.simulateTouch && !o.ios && !o.android) ||
                            (a.simulateTouch && !l.touch && o.ios)) &&
                            (s.removeEventListener(
                                "mousedown",
                                e.onTouchStart,
                                !1
                            ),
                            t.removeEventListener(
                                "mousemove",
                                e.onTouchMove,
                                d
                            ),
                            t.removeEventListener("mouseup", e.onTouchEnd, !1));
                    }
                    (a.preventClicks || a.preventClicksPropagation) &&
                        s.removeEventListener("click", e.onClick, !0),
                        a.cssMode &&
                            n.removeEventListener("scroll", e.onScroll),
                        e.off(
                            o.ios || o.android
                                ? "resize orientationchange observerUpdate"
                                : "resize observerUpdate",
                            G
                        );
                },
            },
            breakpoints: {
                setBreakpoint: function () {
                    var e = this,
                        t = e.activeIndex,
                        a = e.initialized,
                        i = e.loopedSlides,
                        s = void 0 === i ? 0 : i,
                        r = e.params,
                        n = e.$el,
                        o = r.breakpoints;
                    if (o && (!o || 0 !== Object.keys(o).length)) {
                        var l = e.getBreakpoint(
                            o,
                            e.params.breakpointsBase,
                            e.el
                        );
                        if (l && e.currentBreakpoint !== l) {
                            var d = l in o ? o[l] : void 0;
                            d &&
                                [
                                    "slidesPerView",
                                    "spaceBetween",
                                    "slidesPerGroup",
                                    "slidesPerGroupSkip",
                                    "slidesPerColumn",
                                ].forEach(function (e) {
                                    var t = d[e];
                                    void 0 !== t &&
                                        (d[e] =
                                            "slidesPerView" !== e ||
                                            ("AUTO" !== t && "auto" !== t)
                                                ? "slidesPerView" === e
                                                    ? parseFloat(t)
                                                    : parseInt(t, 10)
                                                : "auto");
                                });
                            var p = d || e.originalParams,
                                c = r.slidesPerColumn > 1,
                                u = p.slidesPerColumn > 1;
                            c && !u
                                ? (n.removeClass(
                                      r.containerModifierClass +
                                          "multirow " +
                                          r.containerModifierClass +
                                          "multirow-column"
                                  ),
                                  e.emitContainerClasses())
                                : !c &&
                                  u &&
                                  (n.addClass(
                                      r.containerModifierClass + "multirow"
                                  ),
                                  "column" === p.slidesPerColumnFill &&
                                      n.addClass(
                                          r.containerModifierClass +
                                              "multirow-column"
                                      ),
                                  e.emitContainerClasses());
                            var h = p.direction && p.direction !== r.direction,
                                v =
                                    r.loop &&
                                    (p.slidesPerView !== r.slidesPerView || h);
                            h && a && e.changeDirection(),
                                C(e.params, p),
                                C(e, {
                                    allowTouchMove: e.params.allowTouchMove,
                                    allowSlideNext: e.params.allowSlideNext,
                                    allowSlidePrev: e.params.allowSlidePrev,
                                }),
                                (e.currentBreakpoint = l),
                                e.emit("_beforeBreakpoint", p),
                                v &&
                                    a &&
                                    (e.loopDestroy(),
                                    e.loopCreate(),
                                    e.updateSlides(),
                                    e.slideTo(t - s + e.loopedSlides, 0, !1)),
                                e.emit("breakpoint", p);
                        }
                    }
                },
                getBreakpoint: function (e, t, a) {
                    if (
                        (void 0 === t && (t = "window"),
                        e && ("container" !== t || a))
                    ) {
                        var i = !1,
                            s = o(),
                            r = "window" === t ? s.innerWidth : a.clientWidth,
                            n = "window" === t ? s.innerHeight : a.clientHeight,
                            l = Object.keys(e).map(function (e) {
                                if (
                                    "string" == typeof e &&
                                    0 === e.indexOf("@")
                                ) {
                                    var t = parseFloat(e.substr(1));
                                    return { value: n * t, point: e };
                                }
                                return { value: e, point: e };
                            });
                        l.sort(function (e, t) {
                            return (
                                parseInt(e.value, 10) - parseInt(t.value, 10)
                            );
                        });
                        for (var d = 0; d < l.length; d += 1) {
                            var p = l[d],
                                c = p.point;
                            p.value <= r && (i = c);
                        }
                        return i || "max";
                    }
                },
            },
            checkOverflow: {
                checkOverflow: function () {
                    var e = this,
                        t = e.params,
                        a = e.isLocked,
                        i =
                            e.slides.length > 0 &&
                            t.slidesOffsetBefore +
                                t.spaceBetween * (e.slides.length - 1) +
                                e.slides[0].offsetWidth * e.slides.length;
                    t.slidesOffsetBefore && t.slidesOffsetAfter && i
                        ? (e.isLocked = i <= e.size)
                        : (e.isLocked = 1 === e.snapGrid.length),
                        (e.allowSlideNext = !e.isLocked),
                        (e.allowSlidePrev = !e.isLocked),
                        a !== e.isLocked &&
                            e.emit(e.isLocked ? "lock" : "unlock"),
                        a &&
                            a !== e.isLocked &&
                            ((e.isEnd = !1),
                            e.navigation && e.navigation.update());
                },
            },
            classes: {
                addClasses: function () {
                    var e,
                        t,
                        a,
                        i = this,
                        s = i.classNames,
                        r = i.params,
                        n = i.rtl,
                        o = i.$el,
                        l = i.device,
                        d = i.support,
                        p =
                            ((e = [
                                "initialized",
                                r.direction,
                                {
                                    "pointer-events":
                                        d.pointerEvents && !d.touch,
                                },
                                { "free-mode": r.freeMode },
                                { autoheight: r.autoHeight },
                                { rtl: n },
                                { multirow: r.slidesPerColumn > 1 },
                                {
                                    "multirow-column":
                                        r.slidesPerColumn > 1 &&
                                        "column" === r.slidesPerColumnFill,
                                },
                                { android: l.android },
                                { ios: l.ios },
                                { "css-mode": r.cssMode },
                            ]),
                            (t = r.containerModifierClass),
                            (a = []),
                            e.forEach(function (e) {
                                "object" == typeof e
                                    ? Object.keys(e).forEach(function (i) {
                                          e[i] && a.push(t + i);
                                      })
                                    : "string" == typeof e && a.push(t + e);
                            }),
                            a);
                    s.push.apply(s, p),
                        o.addClass([].concat(s).join(" ")),
                        i.emitContainerClasses();
                },
                removeClasses: function () {
                    var e = this,
                        t = e.$el,
                        a = e.classNames;
                    t.removeClass(a.join(" ")), e.emitContainerClasses();
                },
            },
            images: {
                loadImage: function (e, t, a, i, s, r) {
                    var n,
                        l = o();
                    function d() {
                        r && r();
                    }
                    m(e).parent("picture")[0] || (e.complete && s)
                        ? d()
                        : t
                        ? (((n = new l.Image()).onload = d),
                          (n.onerror = d),
                          i && (n.sizes = i),
                          a && (n.srcset = a),
                          t && (n.src = t))
                        : d();
                },
                preloadImages: function () {
                    var e = this;
                    function t() {
                        null != e &&
                            e &&
                            !e.destroyed &&
                            (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                            e.imagesLoaded === e.imagesToLoad.length &&
                                (e.params.updateOnImagesReady && e.update(),
                                e.emit("imagesReady")));
                    }
                    e.imagesToLoad = e.$el.find("img");
                    for (var a = 0; a < e.imagesToLoad.length; a += 1) {
                        var i = e.imagesToLoad[a];
                        e.loadImage(
                            i,
                            i.currentSrc || i.getAttribute("src"),
                            i.srcset || i.getAttribute("srcset"),
                            i.sizes || i.getAttribute("sizes"),
                            !0,
                            t
                        );
                    }
                },
            },
        },
        W = {},
        F = (function () {
            function t() {
                for (
                    var e, a, i = arguments.length, s = new Array(i), r = 0;
                    r < i;
                    r++
                )
                    s[r] = arguments[r];
                if (
                    (1 === s.length &&
                    s[0].constructor &&
                    "Object" ===
                        Object.prototype.toString.call(s[0]).slice(8, -1)
                        ? (a = s[0])
                        : ((e = s[0]), (a = s[1])),
                    a || (a = {}),
                    (a = C({}, a)),
                    e && !a.el && (a.el = e),
                    a.el && m(a.el).length > 1)
                ) {
                    var n = [];
                    return (
                        m(a.el).each(function (e) {
                            var i = C({}, a, { el: e });
                            n.push(new t(i));
                        }),
                        n
                    );
                }
                var o = this;
                (o.__swiper__ = !0),
                    (o.support = P()),
                    (o.device = k({ userAgent: a.userAgent })),
                    (o.browser = L()),
                    (o.eventsListeners = {}),
                    (o.eventsAnyListeners = []),
                    void 0 === o.modules && (o.modules = {}),
                    Object.keys(o.modules).forEach(function (e) {
                        var t = o.modules[e];
                        if (t.params) {
                            var i = Object.keys(t.params)[0],
                                s = t.params[i];
                            if ("object" != typeof s || null === s) return;
                            if (!(i in a) || !("enabled" in s)) return;
                            !0 === a[i] && (a[i] = { enabled: !0 }),
                                "object" != typeof a[i] ||
                                    "enabled" in a[i] ||
                                    (a[i].enabled = !0),
                                a[i] || (a[i] = { enabled: !1 });
                        }
                    });
                var l,
                    d,
                    p = C({}, R);
                return (
                    o.useParams(p),
                    (o.params = C({}, p, W, a)),
                    (o.originalParams = C({}, o.params)),
                    (o.passedParams = C({}, a)),
                    o.params &&
                        o.params.on &&
                        Object.keys(o.params.on).forEach(function (e) {
                            o.on(e, o.params.on[e]);
                        }),
                    o.params && o.params.onAny && o.onAny(o.params.onAny),
                    (o.$ = m),
                    C(o, {
                        el: e,
                        classNames: [],
                        slides: m(),
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: function () {
                            return "horizontal" === o.params.direction;
                        },
                        isVertical: function () {
                            return "vertical" === o.params.direction;
                        },
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        allowSlideNext: o.params.allowSlideNext,
                        allowSlidePrev: o.params.allowSlidePrev,
                        touchEvents:
                            ((l = [
                                "touchstart",
                                "touchmove",
                                "touchend",
                                "touchcancel",
                            ]),
                            (d = ["mousedown", "mousemove", "mouseup"]),
                            o.support.pointerEvents &&
                                (d = [
                                    "pointerdown",
                                    "pointermove",
                                    "pointerup",
                                ]),
                            (o.touchEventsTouch = {
                                start: l[0],
                                move: l[1],
                                end: l[2],
                                cancel: l[3],
                            }),
                            (o.touchEventsDesktop = {
                                start: d[0],
                                move: d[1],
                                end: d[2],
                            }),
                            o.support.touch || !o.params.simulateTouch
                                ? o.touchEventsTouch
                                : o.touchEventsDesktop),
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            formElements:
                                "input, select, option, textarea, button, video, label",
                            lastClickTime: x(),
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            isTouchEvent: void 0,
                            startMoving: void 0,
                        },
                        allowClick: !0,
                        allowTouchMove: o.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0,
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0,
                    }),
                    o.useModules(),
                    o.emit("_swiper"),
                    o.params.init && o.init(),
                    o
                );
            }
            var a,
                i,
                s,
                r = t.prototype;
            return (
                (r.emitContainerClasses = function () {
                    var e = this;
                    if (e.params._emitClasses && e.el) {
                        var t = e.el.className.split(" ").filter(function (t) {
                            return (
                                0 === t.indexOf("swiper-container") ||
                                0 === t.indexOf(e.params.containerModifierClass)
                            );
                        });
                        e.emit("_containerClasses", t.join(" "));
                    }
                }),
                (r.getSlideClasses = function (e) {
                    var t = this;
                    return e.className
                        .split(" ")
                        .filter(function (e) {
                            return (
                                0 === e.indexOf("swiper-slide") ||
                                0 === e.indexOf(t.params.slideClass)
                            );
                        })
                        .join(" ");
                }),
                (r.emitSlidesClasses = function () {
                    var e = this;
                    if (e.params._emitClasses && e.el) {
                        var t = [];
                        e.slides.each(function (a) {
                            var i = e.getSlideClasses(a);
                            t.push({ slideEl: a, classNames: i }),
                                e.emit("_slideClass", a, i);
                        }),
                            e.emit("_slideClasses", t);
                    }
                }),
                (r.slidesPerViewDynamic = function () {
                    var e = this,
                        t = e.params,
                        a = e.slides,
                        i = e.slidesGrid,
                        s = e.size,
                        r = e.activeIndex,
                        n = 1;
                    if (t.centeredSlides) {
                        for (
                            var o, l = a[r].swiperSlideSize, d = r + 1;
                            d < a.length;
                            d += 1
                        )
                            a[d] &&
                                !o &&
                                ((n += 1),
                                (l += a[d].swiperSlideSize) > s && (o = !0));
                        for (var p = r - 1; p >= 0; p -= 1)
                            a[p] &&
                                !o &&
                                ((n += 1),
                                (l += a[p].swiperSlideSize) > s && (o = !0));
                    } else
                        for (var c = r + 1; c < a.length; c += 1)
                            i[c] - i[r] < s && (n += 1);
                    return n;
                }),
                (r.update = function () {
                    var e = this;
                    if (e && !e.destroyed) {
                        var t = e.snapGrid,
                            a = e.params;
                        a.breakpoints && e.setBreakpoint(),
                            e.updateSize(),
                            e.updateSlides(),
                            e.updateProgress(),
                            e.updateSlidesClasses(),
                            e.params.freeMode
                                ? (i(),
                                  e.params.autoHeight && e.updateAutoHeight())
                                : (("auto" === e.params.slidesPerView ||
                                      e.params.slidesPerView > 1) &&
                                  e.isEnd &&
                                  !e.params.centeredSlides
                                      ? e.slideTo(
                                            e.slides.length - 1,
                                            0,
                                            !1,
                                            !0
                                        )
                                      : e.slideTo(e.activeIndex, 0, !1, !0)) ||
                                  i(),
                            a.watchOverflow &&
                                t !== e.snapGrid &&
                                e.checkOverflow(),
                            e.emit("update");
                    }
                    function i() {
                        var t = e.rtlTranslate ? -1 * e.translate : e.translate,
                            a = Math.min(
                                Math.max(t, e.maxTranslate()),
                                e.minTranslate()
                            );
                        e.setTranslate(a),
                            e.updateActiveIndex(),
                            e.updateSlidesClasses();
                    }
                }),
                (r.changeDirection = function (e, t) {
                    void 0 === t && (t = !0);
                    var a = this,
                        i = a.params.direction;
                    return (
                        e ||
                            (e =
                                "horizontal" === i ? "vertical" : "horizontal"),
                        e === i ||
                            ("horizontal" !== e && "vertical" !== e) ||
                            (a.$el
                                .removeClass(
                                    "" + a.params.containerModifierClass + i
                                )
                                .addClass(
                                    "" + a.params.containerModifierClass + e
                                ),
                            a.emitContainerClasses(),
                            (a.params.direction = e),
                            a.slides.each(function (t) {
                                "vertical" === e
                                    ? (t.style.width = "")
                                    : (t.style.height = "");
                            }),
                            a.emit("changeDirection"),
                            t && a.update()),
                        a
                    );
                }),
                (r.mount = function (e) {
                    var t = this;
                    if (t.mounted) return !0;
                    var a,
                        i = m(e || t.params.el);
                    return (
                        !!(e = i[0]) &&
                        ((e.swiper = t),
                        e && e.shadowRoot && e.shadowRoot.querySelector
                            ? ((a = m(
                                  e.shadowRoot.querySelector(
                                      "." + t.params.wrapperClass
                                  )
                              )).children = function (e) {
                                  return i.children(e);
                              })
                            : (a = i.children("." + t.params.wrapperClass)),
                        C(t, {
                            $el: i,
                            el: e,
                            $wrapperEl: a,
                            wrapperEl: a[0],
                            mounted: !0,
                            rtl:
                                "rtl" === e.dir.toLowerCase() ||
                                "rtl" === i.css("direction"),
                            rtlTranslate:
                                "horizontal" === t.params.direction &&
                                ("rtl" === e.dir.toLowerCase() ||
                                    "rtl" === i.css("direction")),
                            wrongRTL: "-webkit-box" === a.css("display"),
                        }),
                        !0)
                    );
                }),
                (r.init = function (e) {
                    var t = this;
                    return (
                        t.initialized ||
                            !1 === t.mount(e) ||
                            (t.emit("beforeInit"),
                            t.params.breakpoints && t.setBreakpoint(),
                            t.addClasses(),
                            t.params.loop && t.loopCreate(),
                            t.updateSize(),
                            t.updateSlides(),
                            t.params.watchOverflow && t.checkOverflow(),
                            t.params.grabCursor && t.setGrabCursor(),
                            t.params.preloadImages && t.preloadImages(),
                            t.params.loop
                                ? t.slideTo(
                                      t.params.initialSlide + t.loopedSlides,
                                      0,
                                      t.params.runCallbacksOnInit
                                  )
                                : t.slideTo(
                                      t.params.initialSlide,
                                      0,
                                      t.params.runCallbacksOnInit
                                  ),
                            t.attachEvents(),
                            (t.initialized = !0),
                            t.emit("init"),
                            t.emit("afterInit")),
                        t
                    );
                }),
                (r.destroy = function (e, t) {
                    void 0 === e && (e = !0), void 0 === t && (t = !0);
                    var a,
                        i = this,
                        s = i.params,
                        r = i.$el,
                        n = i.$wrapperEl,
                        o = i.slides;
                    return (
                        void 0 === i.params ||
                            i.destroyed ||
                            (i.emit("beforeDestroy"),
                            (i.initialized = !1),
                            i.detachEvents(),
                            s.loop && i.loopDestroy(),
                            t &&
                                (i.removeClasses(),
                                r.removeAttr("style"),
                                n.removeAttr("style"),
                                o &&
                                    o.length &&
                                    o
                                        .removeClass(
                                            [
                                                s.slideVisibleClass,
                                                s.slideActiveClass,
                                                s.slideNextClass,
                                                s.slidePrevClass,
                                            ].join(" ")
                                        )
                                        .removeAttr("style")
                                        .removeAttr("data-swiper-slide-index")),
                            i.emit("destroy"),
                            Object.keys(i.eventsListeners).forEach(function (
                                e
                            ) {
                                i.off(e);
                            }),
                            !1 !== e &&
                                ((i.$el[0].swiper = null),
                                (a = i),
                                Object.keys(a).forEach(function (e) {
                                    try {
                                        a[e] = null;
                                    } catch (e) {}
                                    try {
                                        delete a[e];
                                    } catch (e) {}
                                })),
                            (i.destroyed = !0)),
                        null
                    );
                }),
                (t.extendDefaults = function (e) {
                    C(W, e);
                }),
                (t.installModule = function (e) {
                    t.prototype.modules || (t.prototype.modules = {});
                    var a =
                        e.name ||
                        Object.keys(t.prototype.modules).length + "_" + x();
                    t.prototype.modules[a] = e;
                }),
                (t.use = function (e) {
                    return Array.isArray(e)
                        ? (e.forEach(function (e) {
                              return t.installModule(e);
                          }),
                          t)
                        : (t.installModule(e), t);
                }),
                (a = t),
                (s = [
                    {
                        key: "extendedDefaults",
                        get: function () {
                            return W;
                        },
                    },
                    {
                        key: "defaults",
                        get: function () {
                            return R;
                        },
                    },
                ]),
                (i = null) && e(a.prototype, i),
                s && e(a, s),
                t
            );
        })();
    Object.keys(V).forEach(function (e) {
        Object.keys(V[e]).forEach(function (t) {
            F.prototype[t] = V[e][t];
        });
    }),
        F.use([$, O]);
    var _ = {
            update: function (e) {
                var t = this,
                    a = t.params,
                    i = a.slidesPerView,
                    s = a.slidesPerGroup,
                    r = a.centeredSlides,
                    n = t.params.virtual,
                    o = n.addSlidesBefore,
                    l = n.addSlidesAfter,
                    d = t.virtual,
                    p = d.from,
                    c = d.to,
                    u = d.slides,
                    h = d.slidesGrid,
                    v = d.renderSlide,
                    f = d.offset;
                t.updateActiveIndex();
                var m,
                    g,
                    b,
                    w = t.activeIndex || 0;
                (m = t.rtlTranslate
                    ? "right"
                    : t.isHorizontal()
                    ? "left"
                    : "top"),
                    r
                        ? ((g = Math.floor(i / 2) + s + l),
                          (b = Math.floor(i / 2) + s + o))
                        : ((g = i + (s - 1) + l), (b = s + o));
                var y = Math.max((w || 0) - b, 0),
                    E = Math.min((w || 0) + g, u.length - 1),
                    x = (t.slidesGrid[y] || 0) - (t.slidesGrid[0] || 0);
                function T() {
                    t.updateSlides(),
                        t.updateProgress(),
                        t.updateSlidesClasses(),
                        t.lazy && t.params.lazy.enabled && t.lazy.load();
                }
                if (
                    (C(t.virtual, {
                        from: y,
                        to: E,
                        offset: x,
                        slidesGrid: t.slidesGrid,
                    }),
                    p === y && c === E && !e)
                )
                    return (
                        t.slidesGrid !== h &&
                            x !== f &&
                            t.slides.css(m, x + "px"),
                        void t.updateProgress()
                    );
                if (t.params.virtual.renderExternal)
                    return (
                        t.params.virtual.renderExternal.call(t, {
                            offset: x,
                            from: y,
                            to: E,
                            slides: (function () {
                                for (var e = [], t = y; t <= E; t += 1)
                                    e.push(u[t]);
                                return e;
                            })(),
                        }),
                        void (t.params.virtual.renderExternalUpdate && T())
                    );
                var S = [],
                    M = [];
                if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
                else
                    for (var z = p; z <= c; z += 1)
                        (z < y || z > E) &&
                            t.$wrapperEl
                                .find(
                                    "." +
                                        t.params.slideClass +
                                        '[data-swiper-slide-index="' +
                                        z +
                                        '"]'
                                )
                                .remove();
                for (var P = 0; P < u.length; P += 1)
                    P >= y &&
                        P <= E &&
                        (void 0 === c || e
                            ? M.push(P)
                            : (P > c && M.push(P), P < p && S.push(P)));
                M.forEach(function (e) {
                    t.$wrapperEl.append(v(u[e], e));
                }),
                    S.sort(function (e, t) {
                        return t - e;
                    }).forEach(function (e) {
                        t.$wrapperEl.prepend(v(u[e], e));
                    }),
                    t.$wrapperEl.children(".swiper-slide").css(m, x + "px"),
                    T();
            },
            renderSlide: function (e, t) {
                var a = this,
                    i = a.params.virtual;
                if (i.cache && a.virtual.cache[t]) return a.virtual.cache[t];
                var s = i.renderSlide
                    ? m(i.renderSlide.call(a, e, t))
                    : m(
                          '<div class="' +
                              a.params.slideClass +
                              '" data-swiper-slide-index="' +
                              t +
                              '">' +
                              e +
                              "</div>"
                      );
                return (
                    s.attr("data-swiper-slide-index") ||
                        s.attr("data-swiper-slide-index", t),
                    i.cache && (a.virtual.cache[t] = s),
                    s
                );
            },
            appendSlide: function (e) {
                var t = this;
                if ("object" == typeof e && "length" in e)
                    for (var a = 0; a < e.length; a += 1)
                        e[a] && t.virtual.slides.push(e[a]);
                else t.virtual.slides.push(e);
                t.virtual.update(!0);
            },
            prependSlide: function (e) {
                var t = this,
                    a = t.activeIndex,
                    i = a + 1,
                    s = 1;
                if (Array.isArray(e)) {
                    for (var r = 0; r < e.length; r += 1)
                        e[r] && t.virtual.slides.unshift(e[r]);
                    (i = a + e.length), (s = e.length);
                } else t.virtual.slides.unshift(e);
                if (t.params.virtual.cache) {
                    var n = t.virtual.cache,
                        o = {};
                    Object.keys(n).forEach(function (e) {
                        var t = n[e],
                            a = t.attr("data-swiper-slide-index");
                        a &&
                            t.attr(
                                "data-swiper-slide-index",
                                parseInt(a, 10) + 1
                            ),
                            (o[parseInt(e, 10) + s] = t);
                    }),
                        (t.virtual.cache = o);
                }
                t.virtual.update(!0), t.slideTo(i, 0);
            },
            removeSlide: function (e) {
                var t = this;
                if (null != e) {
                    var a = t.activeIndex;
                    if (Array.isArray(e))
                        for (var i = e.length - 1; i >= 0; i -= 1)
                            t.virtual.slides.splice(e[i], 1),
                                t.params.virtual.cache &&
                                    delete t.virtual.cache[e[i]],
                                e[i] < a && (a -= 1),
                                (a = Math.max(a, 0));
                    else
                        t.virtual.slides.splice(e, 1),
                            t.params.virtual.cache && delete t.virtual.cache[e],
                            e < a && (a -= 1),
                            (a = Math.max(a, 0));
                    t.virtual.update(!0), t.slideTo(a, 0);
                }
            },
            removeAllSlides: function () {
                var e = this;
                (e.virtual.slides = []),
                    e.params.virtual.cache && (e.virtual.cache = {}),
                    e.virtual.update(!0),
                    e.slideTo(0, 0);
            },
        },
        q = {
            name: "virtual",
            params: {
                virtual: {
                    enabled: !1,
                    slides: [],
                    cache: !0,
                    renderSlide: null,
                    renderExternal: null,
                    renderExternalUpdate: !0,
                    addSlidesBefore: 0,
                    addSlidesAfter: 0,
                },
            },
            create: function () {
                M(this, {
                    virtual: t({}, _, {
                        slides: this.params.virtual.slides,
                        cache: {},
                    }),
                });
            },
            on: {
                beforeInit: function (e) {
                    if (e.params.virtual.enabled) {
                        e.classNames.push(
                            e.params.containerModifierClass + "virtual"
                        );
                        var t = { watchSlidesProgress: !0 };
                        C(e.params, t),
                            C(e.originalParams, t),
                            e.params.initialSlide || e.virtual.update();
                    }
                },
                setTranslate: function (e) {
                    e.params.virtual.enabled && e.virtual.update();
                },
            },
        },
        j = {
            handle: function (e) {
                var t = this,
                    a = o(),
                    i = r(),
                    s = t.rtlTranslate,
                    n = e;
                n.originalEvent && (n = n.originalEvent);
                var l = n.keyCode || n.charCode,
                    d = t.params.keyboard.pageUpDown,
                    p = d && 33 === l,
                    c = d && 34 === l,
                    u = 37 === l,
                    h = 39 === l,
                    v = 38 === l,
                    f = 40 === l;
                if (
                    !t.allowSlideNext &&
                    ((t.isHorizontal() && h) || (t.isVertical() && f) || c)
                )
                    return !1;
                if (
                    !t.allowSlidePrev &&
                    ((t.isHorizontal() && u) || (t.isVertical() && v) || p)
                )
                    return !1;
                if (
                    !(
                        n.shiftKey ||
                        n.altKey ||
                        n.ctrlKey ||
                        n.metaKey ||
                        (i.activeElement &&
                            i.activeElement.nodeName &&
                            ("input" ===
                                i.activeElement.nodeName.toLowerCase() ||
                                "textarea" ===
                                    i.activeElement.nodeName.toLowerCase()))
                    )
                ) {
                    if (
                        t.params.keyboard.onlyInViewport &&
                        (p || c || u || h || v || f)
                    ) {
                        var m = !1;
                        if (
                            t.$el.parents("." + t.params.slideClass).length >
                                0 &&
                            0 ===
                                t.$el.parents("." + t.params.slideActiveClass)
                                    .length
                        )
                            return;
                        var g = t.$el,
                            b = g[0].clientWidth,
                            w = g[0].clientHeight,
                            y = a.innerWidth,
                            E = a.innerHeight,
                            x = t.$el.offset();
                        s && (x.left -= t.$el[0].scrollLeft);
                        for (
                            var T = [
                                    [x.left, x.top],
                                    [x.left + b, x.top],
                                    [x.left, x.top + w],
                                    [x.left + b, x.top + w],
                                ],
                                S = 0;
                            S < T.length;
                            S += 1
                        ) {
                            var C = T[S];
                            if (
                                C[0] >= 0 &&
                                C[0] <= y &&
                                C[1] >= 0 &&
                                C[1] <= E
                            ) {
                                if (0 === C[0] && 0 === C[1]) continue;
                                m = !0;
                            }
                        }
                        if (!m) return;
                    }
                    t.isHorizontal()
                        ? ((p || c || u || h) &&
                              (n.preventDefault
                                  ? n.preventDefault()
                                  : (n.returnValue = !1)),
                          (((c || h) && !s) || ((p || u) && s)) &&
                              t.slideNext(),
                          (((p || u) && !s) || ((c || h) && s)) &&
                              t.slidePrev())
                        : ((p || c || v || f) &&
                              (n.preventDefault
                                  ? n.preventDefault()
                                  : (n.returnValue = !1)),
                          (c || f) && t.slideNext(),
                          (p || v) && t.slidePrev()),
                        t.emit("keyPress", l);
                }
            },
            enable: function () {
                var e = this,
                    t = r();
                e.keyboard.enabled ||
                    (m(t).on("keydown", e.keyboard.handle),
                    (e.keyboard.enabled = !0));
            },
            disable: function () {
                var e = this,
                    t = r();
                e.keyboard.enabled &&
                    (m(t).off("keydown", e.keyboard.handle),
                    (e.keyboard.enabled = !1));
            },
        },
        U = {
            name: "keyboard",
            params: {
                keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 },
            },
            create: function () {
                M(this, { keyboard: t({ enabled: !1 }, j) });
            },
            on: {
                init: function (e) {
                    e.params.keyboard.enabled && e.keyboard.enable();
                },
                destroy: function (e) {
                    e.keyboard.enabled && e.keyboard.disable();
                },
            },
        };
    var K = {
            lastScrollTime: x(),
            lastEventBeforeSnap: void 0,
            recentWheelEvents: [],
            event: function () {
                return o().navigator.userAgent.indexOf("firefox") > -1
                    ? "DOMMouseScroll"
                    : (function () {
                          var e = r(),
                              t = "onwheel",
                              a = t in e;
                          if (!a) {
                              var i = e.createElement("div");
                              i.setAttribute(t, "return;"),
                                  (a = "function" == typeof i.onwheel);
                          }
                          return (
                              !a &&
                                  e.implementation &&
                                  e.implementation.hasFeature &&
                                  !0 !== e.implementation.hasFeature("", "") &&
                                  (a = e.implementation.hasFeature(
                                      "Events.wheel",
                                      "3.0"
                                  )),
                              a
                          );
                      })()
                    ? "wheel"
                    : "mousewheel";
            },
            normalize: function (e) {
                var t = 0,
                    a = 0,
                    i = 0,
                    s = 0;
                return (
                    "detail" in e && (a = e.detail),
                    "wheelDelta" in e && (a = -e.wheelDelta / 120),
                    "wheelDeltaY" in e && (a = -e.wheelDeltaY / 120),
                    "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
                    "axis" in e &&
                        e.axis === e.HORIZONTAL_AXIS &&
                        ((t = a), (a = 0)),
                    (i = 10 * t),
                    (s = 10 * a),
                    "deltaY" in e && (s = e.deltaY),
                    "deltaX" in e && (i = e.deltaX),
                    e.shiftKey && !i && ((i = s), (s = 0)),
                    (i || s) &&
                        e.deltaMode &&
                        (1 === e.deltaMode
                            ? ((i *= 40), (s *= 40))
                            : ((i *= 800), (s *= 800))),
                    i && !t && (t = i < 1 ? -1 : 1),
                    s && !a && (a = s < 1 ? -1 : 1),
                    { spinX: t, spinY: a, pixelX: i, pixelY: s }
                );
            },
            handleMouseEnter: function () {
                this.mouseEntered = !0;
            },
            handleMouseLeave: function () {
                this.mouseEntered = !1;
            },
            handle: function (e) {
                var t = e,
                    a = this,
                    i = a.params.mousewheel;
                a.params.cssMode && t.preventDefault();
                var s = a.$el;
                if (
                    ("container" !== a.params.mousewheel.eventsTarget &&
                        (s = m(a.params.mousewheel.eventsTarget)),
                    !a.mouseEntered &&
                        !s[0].contains(t.target) &&
                        !i.releaseOnEdges)
                )
                    return !0;
                t.originalEvent && (t = t.originalEvent);
                var r = 0,
                    n = a.rtlTranslate ? -1 : 1,
                    o = K.normalize(t);
                if (i.forceToAxis)
                    if (a.isHorizontal()) {
                        if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY)))
                            return !0;
                        r = -o.pixelX * n;
                    } else {
                        if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX)))
                            return !0;
                        r = -o.pixelY;
                    }
                else
                    r =
                        Math.abs(o.pixelX) > Math.abs(o.pixelY)
                            ? -o.pixelX * n
                            : -o.pixelY;
                if (0 === r) return !0;
                i.invert && (r = -r);
                var l = a.getTranslate() + r * i.sensitivity;
                if (
                    (l >= a.minTranslate() && (l = a.minTranslate()),
                    l <= a.maxTranslate() && (l = a.maxTranslate()),
                    (!!a.params.loop ||
                        !(l === a.minTranslate() || l === a.maxTranslate())) &&
                        a.params.nested &&
                        t.stopPropagation(),
                    a.params.freeMode)
                ) {
                    var d = {
                            time: x(),
                            delta: Math.abs(r),
                            direction: Math.sign(r),
                        },
                        p = a.mousewheel.lastEventBeforeSnap,
                        c =
                            p &&
                            d.time < p.time + 500 &&
                            d.delta <= p.delta &&
                            d.direction === p.direction;
                    if (!c) {
                        (a.mousewheel.lastEventBeforeSnap = void 0),
                            a.params.loop && a.loopFix();
                        var u = a.getTranslate() + r * i.sensitivity,
                            h = a.isBeginning,
                            v = a.isEnd;
                        if (
                            (u >= a.minTranslate() && (u = a.minTranslate()),
                            u <= a.maxTranslate() && (u = a.maxTranslate()),
                            a.setTransition(0),
                            a.setTranslate(u),
                            a.updateProgress(),
                            a.updateActiveIndex(),
                            a.updateSlidesClasses(),
                            ((!h && a.isBeginning) || (!v && a.isEnd)) &&
                                a.updateSlidesClasses(),
                            a.params.freeModeSticky)
                        ) {
                            clearTimeout(a.mousewheel.timeout),
                                (a.mousewheel.timeout = void 0);
                            var f = a.mousewheel.recentWheelEvents;
                            f.length >= 15 && f.shift();
                            var g = f.length ? f[f.length - 1] : void 0,
                                b = f[0];
                            if (
                                (f.push(d),
                                g &&
                                    (d.delta > g.delta ||
                                        d.direction !== g.direction))
                            )
                                f.splice(0);
                            else if (
                                f.length >= 15 &&
                                d.time - b.time < 500 &&
                                b.delta - d.delta >= 1 &&
                                d.delta <= 6
                            ) {
                                var w = r > 0 ? 0.8 : 0.2;
                                (a.mousewheel.lastEventBeforeSnap = d),
                                    f.splice(0),
                                    (a.mousewheel.timeout = E(function () {
                                        a.slideToClosest(
                                            a.params.speed,
                                            !0,
                                            void 0,
                                            w
                                        );
                                    }, 0));
                            }
                            a.mousewheel.timeout ||
                                (a.mousewheel.timeout = E(function () {
                                    (a.mousewheel.lastEventBeforeSnap = d),
                                        f.splice(0),
                                        a.slideToClosest(
                                            a.params.speed,
                                            !0,
                                            void 0,
                                            0.5
                                        );
                                }, 500));
                        }
                        if (
                            (c || a.emit("scroll", t),
                            a.params.autoplay &&
                                a.params.autoplayDisableOnInteraction &&
                                a.autoplay.stop(),
                            u === a.minTranslate() || u === a.maxTranslate())
                        )
                            return !0;
                    }
                } else {
                    var y = {
                            time: x(),
                            delta: Math.abs(r),
                            direction: Math.sign(r),
                            raw: e,
                        },
                        T = a.mousewheel.recentWheelEvents;
                    T.length >= 2 && T.shift();
                    var S = T.length ? T[T.length - 1] : void 0;
                    if (
                        (T.push(y),
                        S
                            ? (y.direction !== S.direction ||
                                  y.delta > S.delta ||
                                  y.time > S.time + 150) &&
                              a.mousewheel.animateSlider(y)
                            : a.mousewheel.animateSlider(y),
                        a.mousewheel.releaseScroll(y))
                    )
                        return !0;
                }
                return (
                    t.preventDefault
                        ? t.preventDefault()
                        : (t.returnValue = !1),
                    !1
                );
            },
            animateSlider: function (e) {
                var t = this,
                    a = o();
                return (
                    !(
                        this.params.mousewheel.thresholdDelta &&
                        e.delta < this.params.mousewheel.thresholdDelta
                    ) &&
                    !(
                        this.params.mousewheel.thresholdTime &&
                        x() - t.mousewheel.lastScrollTime <
                            this.params.mousewheel.thresholdTime
                    ) &&
                    ((e.delta >= 6 && x() - t.mousewheel.lastScrollTime < 60) ||
                        (e.direction < 0
                            ? (t.isEnd && !t.params.loop) ||
                              t.animating ||
                              (t.slideNext(), t.emit("scroll", e.raw))
                            : (t.isBeginning && !t.params.loop) ||
                              t.animating ||
                              (t.slidePrev(), t.emit("scroll", e.raw)),
                        (t.mousewheel.lastScrollTime = new a.Date().getTime()),
                        !1))
                );
            },
            releaseScroll: function (e) {
                var t = this,
                    a = t.params.mousewheel;
                if (e.direction < 0) {
                    if (t.isEnd && !t.params.loop && a.releaseOnEdges)
                        return !0;
                } else if (t.isBeginning && !t.params.loop && a.releaseOnEdges)
                    return !0;
                return !1;
            },
            enable: function () {
                var e = this,
                    t = K.event();
                if (e.params.cssMode)
                    return (
                        e.wrapperEl.removeEventListener(t, e.mousewheel.handle),
                        !0
                    );
                if (!t) return !1;
                if (e.mousewheel.enabled) return !1;
                var a = e.$el;
                return (
                    "container" !== e.params.mousewheel.eventsTarget &&
                        (a = m(e.params.mousewheel.eventsTarget)),
                    a.on("mouseenter", e.mousewheel.handleMouseEnter),
                    a.on("mouseleave", e.mousewheel.handleMouseLeave),
                    a.on(t, e.mousewheel.handle),
                    (e.mousewheel.enabled = !0),
                    !0
                );
            },
            disable: function () {
                var e = this,
                    t = K.event();
                if (e.params.cssMode)
                    return (
                        e.wrapperEl.addEventListener(t, e.mousewheel.handle), !0
                    );
                if (!t) return !1;
                if (!e.mousewheel.enabled) return !1;
                var a = e.$el;
                return (
                    "container" !== e.params.mousewheel.eventsTarget &&
                        (a = m(e.params.mousewheel.eventsTarget)),
                    a.off(t, e.mousewheel.handle),
                    (e.mousewheel.enabled = !1),
                    !0
                );
            },
        },
        Z = {
            toggleEl: function (e, t) {
                e[t ? "addClass" : "removeClass"](
                    this.params.navigation.disabledClass
                ),
                    e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = t);
            },
            update: function () {
                var e = this,
                    t = e.params.navigation,
                    a = e.navigation.toggleEl;
                if (!e.params.loop) {
                    var i = e.navigation,
                        s = i.$nextEl,
                        r = i.$prevEl;
                    r &&
                        r.length > 0 &&
                        (e.isBeginning ? a(r, !0) : a(r, !1),
                        r[
                            e.params.watchOverflow && e.isLocked
                                ? "addClass"
                                : "removeClass"
                        ](t.lockClass)),
                        s &&
                            s.length > 0 &&
                            (e.isEnd ? a(s, !0) : a(s, !1),
                            s[
                                e.params.watchOverflow && e.isLocked
                                    ? "addClass"
                                    : "removeClass"
                            ](t.lockClass));
                }
            },
            onPrevClick: function (e) {
                var t = this;
                e.preventDefault(),
                    (t.isBeginning && !t.params.loop) || t.slidePrev();
            },
            onNextClick: function (e) {
                var t = this;
                e.preventDefault(),
                    (t.isEnd && !t.params.loop) || t.slideNext();
            },
            init: function () {
                var e,
                    t,
                    a = this,
                    i = a.params.navigation;
                (i.nextEl || i.prevEl) &&
                    (i.nextEl &&
                        ((e = m(i.nextEl)),
                        a.params.uniqueNavElements &&
                            "string" == typeof i.nextEl &&
                            e.length > 1 &&
                            1 === a.$el.find(i.nextEl).length &&
                            (e = a.$el.find(i.nextEl))),
                    i.prevEl &&
                        ((t = m(i.prevEl)),
                        a.params.uniqueNavElements &&
                            "string" == typeof i.prevEl &&
                            t.length > 1 &&
                            1 === a.$el.find(i.prevEl).length &&
                            (t = a.$el.find(i.prevEl))),
                    e &&
                        e.length > 0 &&
                        e.on("click", a.navigation.onNextClick),
                    t &&
                        t.length > 0 &&
                        t.on("click", a.navigation.onPrevClick),
                    C(a.navigation, {
                        $nextEl: e,
                        nextEl: e && e[0],
                        $prevEl: t,
                        prevEl: t && t[0],
                    }));
            },
            destroy: function () {
                var e = this,
                    t = e.navigation,
                    a = t.$nextEl,
                    i = t.$prevEl;
                a &&
                    a.length &&
                    (a.off("click", e.navigation.onNextClick),
                    a.removeClass(e.params.navigation.disabledClass)),
                    i &&
                        i.length &&
                        (i.off("click", e.navigation.onPrevClick),
                        i.removeClass(e.params.navigation.disabledClass));
            },
        },
        J = {
            update: function () {
                var e = this,
                    t = e.rtl,
                    a = e.params.pagination;
                if (
                    a.el &&
                    e.pagination.el &&
                    e.pagination.$el &&
                    0 !== e.pagination.$el.length
                ) {
                    var i,
                        s =
                            e.virtual && e.params.virtual.enabled
                                ? e.virtual.slides.length
                                : e.slides.length,
                        r = e.pagination.$el,
                        n = e.params.loop
                            ? Math.ceil(
                                  (s - 2 * e.loopedSlides) /
                                      e.params.slidesPerGroup
                              )
                            : e.snapGrid.length;
                    if (
                        (e.params.loop
                            ? ((i = Math.ceil(
                                  (e.activeIndex - e.loopedSlides) /
                                      e.params.slidesPerGroup
                              )) >
                                  s - 1 - 2 * e.loopedSlides &&
                                  (i -= s - 2 * e.loopedSlides),
                              i > n - 1 && (i -= n),
                              i < 0 &&
                                  "bullets" !== e.params.paginationType &&
                                  (i = n + i))
                            : (i =
                                  void 0 !== e.snapIndex
                                      ? e.snapIndex
                                      : e.activeIndex || 0),
                        "bullets" === a.type &&
                            e.pagination.bullets &&
                            e.pagination.bullets.length > 0)
                    ) {
                        var o,
                            l,
                            d,
                            p = e.pagination.bullets;
                        if (
                            (a.dynamicBullets &&
                                ((e.pagination.bulletSize = p
                                    .eq(0)
                                    [
                                        e.isHorizontal()
                                            ? "outerWidth"
                                            : "outerHeight"
                                    ](!0)),
                                r.css(
                                    e.isHorizontal() ? "width" : "height",
                                    e.pagination.bulletSize *
                                        (a.dynamicMainBullets + 4) +
                                        "px"
                                ),
                                a.dynamicMainBullets > 1 &&
                                    void 0 !== e.previousIndex &&
                                    ((e.pagination.dynamicBulletIndex +=
                                        i - e.previousIndex),
                                    e.pagination.dynamicBulletIndex >
                                    a.dynamicMainBullets - 1
                                        ? (e.pagination.dynamicBulletIndex =
                                              a.dynamicMainBullets - 1)
                                        : e.pagination.dynamicBulletIndex < 0 &&
                                          (e.pagination.dynamicBulletIndex = 0)),
                                (o = i - e.pagination.dynamicBulletIndex),
                                (d =
                                    ((l =
                                        o +
                                        (Math.min(
                                            p.length,
                                            a.dynamicMainBullets
                                        ) -
                                            1)) +
                                        o) /
                                    2)),
                            p.removeClass(
                                a.bulletActiveClass +
                                    " " +
                                    a.bulletActiveClass +
                                    "-next " +
                                    a.bulletActiveClass +
                                    "-next-next " +
                                    a.bulletActiveClass +
                                    "-prev " +
                                    a.bulletActiveClass +
                                    "-prev-prev " +
                                    a.bulletActiveClass +
                                    "-main"
                            ),
                            r.length > 1)
                        )
                            p.each(function (e) {
                                var t = m(e),
                                    s = t.index();
                                s === i && t.addClass(a.bulletActiveClass),
                                    a.dynamicBullets &&
                                        (s >= o &&
                                            s <= l &&
                                            t.addClass(
                                                a.bulletActiveClass + "-main"
                                            ),
                                        s === o &&
                                            t
                                                .prev()
                                                .addClass(
                                                    a.bulletActiveClass +
                                                        "-prev"
                                                )
                                                .prev()
                                                .addClass(
                                                    a.bulletActiveClass +
                                                        "-prev-prev"
                                                ),
                                        s === l &&
                                            t
                                                .next()
                                                .addClass(
                                                    a.bulletActiveClass +
                                                        "-next"
                                                )
                                                .next()
                                                .addClass(
                                                    a.bulletActiveClass +
                                                        "-next-next"
                                                ));
                            });
                        else {
                            var c = p.eq(i),
                                u = c.index();
                            if (
                                (c.addClass(a.bulletActiveClass),
                                a.dynamicBullets)
                            ) {
                                for (
                                    var h = p.eq(o), v = p.eq(l), f = o;
                                    f <= l;
                                    f += 1
                                )
                                    p.eq(f).addClass(
                                        a.bulletActiveClass + "-main"
                                    );
                                if (e.params.loop)
                                    if (u >= p.length - a.dynamicMainBullets) {
                                        for (
                                            var g = a.dynamicMainBullets;
                                            g >= 0;
                                            g -= 1
                                        )
                                            p.eq(p.length - g).addClass(
                                                a.bulletActiveClass + "-main"
                                            );
                                        p.eq(
                                            p.length - a.dynamicMainBullets - 1
                                        ).addClass(
                                            a.bulletActiveClass + "-prev"
                                        );
                                    } else
                                        h
                                            .prev()
                                            .addClass(
                                                a.bulletActiveClass + "-prev"
                                            )
                                            .prev()
                                            .addClass(
                                                a.bulletActiveClass +
                                                    "-prev-prev"
                                            ),
                                            v
                                                .next()
                                                .addClass(
                                                    a.bulletActiveClass +
                                                        "-next"
                                                )
                                                .next()
                                                .addClass(
                                                    a.bulletActiveClass +
                                                        "-next-next"
                                                );
                                else
                                    h
                                        .prev()
                                        .addClass(a.bulletActiveClass + "-prev")
                                        .prev()
                                        .addClass(
                                            a.bulletActiveClass + "-prev-prev"
                                        ),
                                        v
                                            .next()
                                            .addClass(
                                                a.bulletActiveClass + "-next"
                                            )
                                            .next()
                                            .addClass(
                                                a.bulletActiveClass +
                                                    "-next-next"
                                            );
                            }
                        }
                        if (a.dynamicBullets) {
                            var b = Math.min(
                                    p.length,
                                    a.dynamicMainBullets + 4
                                ),
                                w =
                                    (e.pagination.bulletSize * b -
                                        e.pagination.bulletSize) /
                                        2 -
                                    d * e.pagination.bulletSize,
                                y = t ? "right" : "left";
                            p.css(e.isHorizontal() ? y : "top", w + "px");
                        }
                    }
                    if (
                        ("fraction" === a.type &&
                            (r
                                .find(z(a.currentClass))
                                .text(a.formatFractionCurrent(i + 1)),
                            r
                                .find(z(a.totalClass))
                                .text(a.formatFractionTotal(n))),
                        "progressbar" === a.type)
                    ) {
                        var E;
                        E = a.progressbarOpposite
                            ? e.isHorizontal()
                                ? "vertical"
                                : "horizontal"
                            : e.isHorizontal()
                            ? "horizontal"
                            : "vertical";
                        var x = (i + 1) / n,
                            T = 1,
                            S = 1;
                        "horizontal" === E ? (T = x) : (S = x),
                            r
                                .find(z(a.progressbarFillClass))
                                .transform(
                                    "translate3d(0,0,0) scaleX(" +
                                        T +
                                        ") scaleY(" +
                                        S +
                                        ")"
                                )
                                .transition(e.params.speed);
                    }
                    "custom" === a.type && a.renderCustom
                        ? (r.html(a.renderCustom(e, i + 1, n)),
                          e.emit("paginationRender", r[0]))
                        : e.emit("paginationUpdate", r[0]),
                        r[
                            e.params.watchOverflow && e.isLocked
                                ? "addClass"
                                : "removeClass"
                        ](a.lockClass);
                }
            },
            render: function () {
                var e = this,
                    t = e.params.pagination;
                if (
                    t.el &&
                    e.pagination.el &&
                    e.pagination.$el &&
                    0 !== e.pagination.$el.length
                ) {
                    var a =
                            e.virtual && e.params.virtual.enabled
                                ? e.virtual.slides.length
                                : e.slides.length,
                        i = e.pagination.$el,
                        s = "";
                    if ("bullets" === t.type) {
                        var r = e.params.loop
                            ? Math.ceil(
                                  (a - 2 * e.loopedSlides) /
                                      e.params.slidesPerGroup
                              )
                            : e.snapGrid.length;
                        e.params.freeMode && !e.params.loop && r > a && (r = a);
                        for (var n = 0; n < r; n += 1)
                            t.renderBullet
                                ? (s += t.renderBullet.call(
                                      e,
                                      n,
                                      t.bulletClass
                                  ))
                                : (s +=
                                      "<" +
                                      t.bulletElement +
                                      ' class="' +
                                      t.bulletClass +
                                      '"></' +
                                      t.bulletElement +
                                      ">");
                        i.html(s),
                            (e.pagination.bullets = i.find(z(t.bulletClass)));
                    }
                    "fraction" === t.type &&
                        ((s = t.renderFraction
                            ? t.renderFraction.call(
                                  e,
                                  t.currentClass,
                                  t.totalClass
                              )
                            : '<span class="' +
                              t.currentClass +
                              '"></span> / <span class="' +
                              t.totalClass +
                              '"></span>'),
                        i.html(s)),
                        "progressbar" === t.type &&
                            ((s = t.renderProgressbar
                                ? t.renderProgressbar.call(
                                      e,
                                      t.progressbarFillClass
                                  )
                                : '<span class="' +
                                  t.progressbarFillClass +
                                  '"></span>'),
                            i.html(s)),
                        "custom" !== t.type &&
                            e.emit("paginationRender", e.pagination.$el[0]);
                }
            },
            init: function () {
                var e = this,
                    t = e.params.pagination;
                if (t.el) {
                    var a = m(t.el);
                    0 !== a.length &&
                        (e.params.uniqueNavElements &&
                            "string" == typeof t.el &&
                            a.length > 1 &&
                            (a = e.$el.find(t.el)),
                        "bullets" === t.type &&
                            t.clickable &&
                            a.addClass(t.clickableClass),
                        a.addClass(t.modifierClass + t.type),
                        "bullets" === t.type &&
                            t.dynamicBullets &&
                            (a.addClass(
                                "" + t.modifierClass + t.type + "-dynamic"
                            ),
                            (e.pagination.dynamicBulletIndex = 0),
                            t.dynamicMainBullets < 1 &&
                                (t.dynamicMainBullets = 1)),
                        "progressbar" === t.type &&
                            t.progressbarOpposite &&
                            a.addClass(t.progressbarOppositeClass),
                        t.clickable &&
                            a.on("click", z(t.bulletClass), function (t) {
                                t.preventDefault();
                                var a =
                                    m(this).index() * e.params.slidesPerGroup;
                                e.params.loop && (a += e.loopedSlides),
                                    e.slideTo(a);
                            }),
                        C(e.pagination, { $el: a, el: a[0] }));
                }
            },
            destroy: function () {
                var e = this,
                    t = e.params.pagination;
                if (
                    t.el &&
                    e.pagination.el &&
                    e.pagination.$el &&
                    0 !== e.pagination.$el.length
                ) {
                    var a = e.pagination.$el;
                    a.removeClass(t.hiddenClass),
                        a.removeClass(t.modifierClass + t.type),
                        e.pagination.bullets &&
                            e.pagination.bullets.removeClass(
                                t.bulletActiveClass
                            ),
                        t.clickable && a.off("click", z(t.bulletClass));
                }
            },
        },
        Q = {
            setTranslate: function () {
                var e = this;
                if (e.params.scrollbar.el && e.scrollbar.el) {
                    var t = e.scrollbar,
                        a = e.rtlTranslate,
                        i = e.progress,
                        s = t.dragSize,
                        r = t.trackSize,
                        n = t.$dragEl,
                        o = t.$el,
                        l = e.params.scrollbar,
                        d = s,
                        p = (r - s) * i;
                    a
                        ? (p = -p) > 0
                            ? ((d = s - p), (p = 0))
                            : -p + s > r && (d = r + p)
                        : p < 0
                        ? ((d = s + p), (p = 0))
                        : p + s > r && (d = r - p),
                        e.isHorizontal()
                            ? (n.transform("translate3d(" + p + "px, 0, 0)"),
                              (n[0].style.width = d + "px"))
                            : (n.transform("translate3d(0px, " + p + "px, 0)"),
                              (n[0].style.height = d + "px")),
                        l.hide &&
                            (clearTimeout(e.scrollbar.timeout),
                            (o[0].style.opacity = 1),
                            (e.scrollbar.timeout = setTimeout(function () {
                                (o[0].style.opacity = 0), o.transition(400);
                            }, 1e3)));
                }
            },
            setTransition: function (e) {
                var t = this;
                t.params.scrollbar.el &&
                    t.scrollbar.el &&
                    t.scrollbar.$dragEl.transition(e);
            },
            updateSize: function () {
                var e = this;
                if (e.params.scrollbar.el && e.scrollbar.el) {
                    var t = e.scrollbar,
                        a = t.$dragEl,
                        i = t.$el;
                    (a[0].style.width = ""), (a[0].style.height = "");
                    var s,
                        r = e.isHorizontal()
                            ? i[0].offsetWidth
                            : i[0].offsetHeight,
                        n = e.size / e.virtualSize,
                        o = n * (r / e.size);
                    (s =
                        "auto" === e.params.scrollbar.dragSize
                            ? r * n
                            : parseInt(e.params.scrollbar.dragSize, 10)),
                        e.isHorizontal()
                            ? (a[0].style.width = s + "px")
                            : (a[0].style.height = s + "px"),
                        (i[0].style.display = n >= 1 ? "none" : ""),
                        e.params.scrollbar.hide && (i[0].style.opacity = 0),
                        C(t, {
                            trackSize: r,
                            divider: n,
                            moveDivider: o,
                            dragSize: s,
                        }),
                        t.$el[
                            e.params.watchOverflow && e.isLocked
                                ? "addClass"
                                : "removeClass"
                        ](e.params.scrollbar.lockClass);
                }
            },
            getPointerPosition: function (e) {
                return this.isHorizontal()
                    ? "touchstart" === e.type || "touchmove" === e.type
                        ? e.targetTouches[0].clientX
                        : e.clientX
                    : "touchstart" === e.type || "touchmove" === e.type
                    ? e.targetTouches[0].clientY
                    : e.clientY;
            },
            setDragPosition: function (e) {
                var t,
                    a = this,
                    i = a.scrollbar,
                    s = a.rtlTranslate,
                    r = i.$el,
                    n = i.dragSize,
                    o = i.trackSize,
                    l = i.dragStartPos;
                (t =
                    (i.getPointerPosition(e) -
                        r.offset()[a.isHorizontal() ? "left" : "top"] -
                        (null !== l ? l : n / 2)) /
                    (o - n)),
                    (t = Math.max(Math.min(t, 1), 0)),
                    s && (t = 1 - t);
                var d =
                    a.minTranslate() +
                    (a.maxTranslate() - a.minTranslate()) * t;
                a.updateProgress(d),
                    a.setTranslate(d),
                    a.updateActiveIndex(),
                    a.updateSlidesClasses();
            },
            onDragStart: function (e) {
                var t = this,
                    a = t.params.scrollbar,
                    i = t.scrollbar,
                    s = t.$wrapperEl,
                    r = i.$el,
                    n = i.$dragEl;
                (t.scrollbar.isTouched = !0),
                    (t.scrollbar.dragStartPos =
                        e.target === n[0] || e.target === n
                            ? i.getPointerPosition(e) -
                              e.target.getBoundingClientRect()[
                                  t.isHorizontal() ? "left" : "top"
                              ]
                            : null),
                    e.preventDefault(),
                    e.stopPropagation(),
                    s.transition(100),
                    n.transition(100),
                    i.setDragPosition(e),
                    clearTimeout(t.scrollbar.dragTimeout),
                    r.transition(0),
                    a.hide && r.css("opacity", 1),
                    t.params.cssMode &&
                        t.$wrapperEl.css("scroll-snap-type", "none"),
                    t.emit("scrollbarDragStart", e);
            },
            onDragMove: function (e) {
                var t = this,
                    a = t.scrollbar,
                    i = t.$wrapperEl,
                    s = a.$el,
                    r = a.$dragEl;
                t.scrollbar.isTouched &&
                    (e.preventDefault
                        ? e.preventDefault()
                        : (e.returnValue = !1),
                    a.setDragPosition(e),
                    i.transition(0),
                    s.transition(0),
                    r.transition(0),
                    t.emit("scrollbarDragMove", e));
            },
            onDragEnd: function (e) {
                var t = this,
                    a = t.params.scrollbar,
                    i = t.scrollbar,
                    s = t.$wrapperEl,
                    r = i.$el;
                t.scrollbar.isTouched &&
                    ((t.scrollbar.isTouched = !1),
                    t.params.cssMode &&
                        (t.$wrapperEl.css("scroll-snap-type", ""),
                        s.transition("")),
                    a.hide &&
                        (clearTimeout(t.scrollbar.dragTimeout),
                        (t.scrollbar.dragTimeout = E(function () {
                            r.css("opacity", 0), r.transition(400);
                        }, 1e3))),
                    t.emit("scrollbarDragEnd", e),
                    a.snapOnRelease && t.slideToClosest());
            },
            enableDraggable: function () {
                var e = this;
                if (e.params.scrollbar.el) {
                    var t = r(),
                        a = e.scrollbar,
                        i = e.touchEventsTouch,
                        s = e.touchEventsDesktop,
                        n = e.params,
                        o = e.support,
                        l = a.$el[0],
                        d = !(!o.passiveListener || !n.passiveListeners) && {
                            passive: !1,
                            capture: !1,
                        },
                        p = !(!o.passiveListener || !n.passiveListeners) && {
                            passive: !0,
                            capture: !1,
                        };
                    l &&
                        (o.touch
                            ? (l.addEventListener(
                                  i.start,
                                  e.scrollbar.onDragStart,
                                  d
                              ),
                              l.addEventListener(
                                  i.move,
                                  e.scrollbar.onDragMove,
                                  d
                              ),
                              l.addEventListener(
                                  i.end,
                                  e.scrollbar.onDragEnd,
                                  p
                              ))
                            : (l.addEventListener(
                                  s.start,
                                  e.scrollbar.onDragStart,
                                  d
                              ),
                              t.addEventListener(
                                  s.move,
                                  e.scrollbar.onDragMove,
                                  d
                              ),
                              t.addEventListener(
                                  s.end,
                                  e.scrollbar.onDragEnd,
                                  p
                              )));
                }
            },
            disableDraggable: function () {
                var e = this;
                if (e.params.scrollbar.el) {
                    var t = r(),
                        a = e.scrollbar,
                        i = e.touchEventsTouch,
                        s = e.touchEventsDesktop,
                        n = e.params,
                        o = e.support,
                        l = a.$el[0],
                        d = !(!o.passiveListener || !n.passiveListeners) && {
                            passive: !1,
                            capture: !1,
                        },
                        p = !(!o.passiveListener || !n.passiveListeners) && {
                            passive: !0,
                            capture: !1,
                        };
                    l &&
                        (o.touch
                            ? (l.removeEventListener(
                                  i.start,
                                  e.scrollbar.onDragStart,
                                  d
                              ),
                              l.removeEventListener(
                                  i.move,
                                  e.scrollbar.onDragMove,
                                  d
                              ),
                              l.removeEventListener(
                                  i.end,
                                  e.scrollbar.onDragEnd,
                                  p
                              ))
                            : (l.removeEventListener(
                                  s.start,
                                  e.scrollbar.onDragStart,
                                  d
                              ),
                              t.removeEventListener(
                                  s.move,
                                  e.scrollbar.onDragMove,
                                  d
                              ),
                              t.removeEventListener(
                                  s.end,
                                  e.scrollbar.onDragEnd,
                                  p
                              )));
                }
            },
            init: function () {
                var e = this;
                if (e.params.scrollbar.el) {
                    var t = e.scrollbar,
                        a = e.$el,
                        i = e.params.scrollbar,
                        s = m(i.el);
                    e.params.uniqueNavElements &&
                        "string" == typeof i.el &&
                        s.length > 1 &&
                        1 === a.find(i.el).length &&
                        (s = a.find(i.el));
                    var r = s.find("." + e.params.scrollbar.dragClass);
                    0 === r.length &&
                        ((r = m(
                            '<div class="' +
                                e.params.scrollbar.dragClass +
                                '"></div>'
                        )),
                        s.append(r)),
                        C(t, { $el: s, el: s[0], $dragEl: r, dragEl: r[0] }),
                        i.draggable && t.enableDraggable();
                }
            },
            destroy: function () {
                this.scrollbar.disableDraggable();
            },
        },
        ee = {
            setTransform: function (e, t) {
                var a = this.rtl,
                    i = m(e),
                    s = a ? -1 : 1,
                    r = i.attr("data-swiper-parallax") || "0",
                    n = i.attr("data-swiper-parallax-x"),
                    o = i.attr("data-swiper-parallax-y"),
                    l = i.attr("data-swiper-parallax-scale"),
                    d = i.attr("data-swiper-parallax-opacity");
                if (
                    (n || o
                        ? ((n = n || "0"), (o = o || "0"))
                        : this.isHorizontal()
                        ? ((n = r), (o = "0"))
                        : ((o = r), (n = "0")),
                    (n =
                        n.indexOf("%") >= 0
                            ? parseInt(n, 10) * t * s + "%"
                            : n * t * s + "px"),
                    (o =
                        o.indexOf("%") >= 0
                            ? parseInt(o, 10) * t + "%"
                            : o * t + "px"),
                    null != d)
                ) {
                    var p = d - (d - 1) * (1 - Math.abs(t));
                    i[0].style.opacity = p;
                }
                if (null == l)
                    i.transform("translate3d(" + n + ", " + o + ", 0px)");
                else {
                    var c = l - (l - 1) * (1 - Math.abs(t));
                    i.transform(
                        "translate3d(" +
                            n +
                            ", " +
                            o +
                            ", 0px) scale(" +
                            c +
                            ")"
                    );
                }
            },
            setTranslate: function () {
                var e = this,
                    t = e.$el,
                    a = e.slides,
                    i = e.progress,
                    s = e.snapGrid;
                t
                    .children(
                        "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                    )
                    .each(function (t) {
                        e.parallax.setTransform(t, i);
                    }),
                    a.each(function (t, a) {
                        var r = t.progress;
                        e.params.slidesPerGroup > 1 &&
                            "auto" !== e.params.slidesPerView &&
                            (r += Math.ceil(a / 2) - i * (s.length - 1)),
                            (r = Math.min(Math.max(r, -1), 1)),
                            m(t)
                                .find(
                                    "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                                )
                                .each(function (t) {
                                    e.parallax.setTransform(t, r);
                                });
                    });
            },
            setTransition: function (e) {
                void 0 === e && (e = this.params.speed);
                this.$el
                    .find(
                        "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                    )
                    .each(function (t) {
                        var a = m(t),
                            i =
                                parseInt(
                                    a.attr("data-swiper-parallax-duration"),
                                    10
                                ) || e;
                        0 === e && (i = 0), a.transition(i);
                    });
            },
        },
        te = {
            getDistanceBetweenTouches: function (e) {
                if (e.targetTouches.length < 2) return 1;
                var t = e.targetTouches[0].pageX,
                    a = e.targetTouches[0].pageY,
                    i = e.targetTouches[1].pageX,
                    s = e.targetTouches[1].pageY;
                return Math.sqrt(Math.pow(i - t, 2) + Math.pow(s - a, 2));
            },
            onGestureStart: function (e) {
                var t = this,
                    a = t.support,
                    i = t.params.zoom,
                    s = t.zoom,
                    r = s.gesture;
                if (
                    ((s.fakeGestureTouched = !1),
                    (s.fakeGestureMoved = !1),
                    !a.gestures)
                ) {
                    if (
                        "touchstart" !== e.type ||
                        ("touchstart" === e.type && e.targetTouches.length < 2)
                    )
                        return;
                    (s.fakeGestureTouched = !0),
                        (r.scaleStart = te.getDistanceBetweenTouches(e));
                }
                (r.$slideEl && r.$slideEl.length) ||
                ((r.$slideEl = m(e.target).closest("." + t.params.slideClass)),
                0 === r.$slideEl.length &&
                    (r.$slideEl = t.slides.eq(t.activeIndex)),
                (r.$imageEl = r.$slideEl.find(
                    "img, svg, canvas, picture, .swiper-zoom-target"
                )),
                (r.$imageWrapEl = r.$imageEl.parent("." + i.containerClass)),
                (r.maxRatio =
                    r.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio),
                0 !== r.$imageWrapEl.length)
                    ? (r.$imageEl && r.$imageEl.transition(0),
                      (t.zoom.isScaling = !0))
                    : (r.$imageEl = void 0);
            },
            onGestureChange: function (e) {
                var t = this,
                    a = t.support,
                    i = t.params.zoom,
                    s = t.zoom,
                    r = s.gesture;
                if (!a.gestures) {
                    if (
                        "touchmove" !== e.type ||
                        ("touchmove" === e.type && e.targetTouches.length < 2)
                    )
                        return;
                    (s.fakeGestureMoved = !0),
                        (r.scaleMove = te.getDistanceBetweenTouches(e));
                }
                r.$imageEl && 0 !== r.$imageEl.length
                    ? (a.gestures
                          ? (s.scale = e.scale * s.currentScale)
                          : (s.scale =
                                (r.scaleMove / r.scaleStart) * s.currentScale),
                      s.scale > r.maxRatio &&
                          (s.scale =
                              r.maxRatio -
                              1 +
                              Math.pow(s.scale - r.maxRatio + 1, 0.5)),
                      s.scale < i.minRatio &&
                          (s.scale =
                              i.minRatio +
                              1 -
                              Math.pow(i.minRatio - s.scale + 1, 0.5)),
                      r.$imageEl.transform(
                          "translate3d(0,0,0) scale(" + s.scale + ")"
                      ))
                    : "gesturechange" === e.type && s.onGestureStart(e);
            },
            onGestureEnd: function (e) {
                var t = this,
                    a = t.device,
                    i = t.support,
                    s = t.params.zoom,
                    r = t.zoom,
                    n = r.gesture;
                if (!i.gestures) {
                    if (!r.fakeGestureTouched || !r.fakeGestureMoved) return;
                    if (
                        "touchend" !== e.type ||
                        ("touchend" === e.type &&
                            e.changedTouches.length < 2 &&
                            !a.android)
                    )
                        return;
                    (r.fakeGestureTouched = !1), (r.fakeGestureMoved = !1);
                }
                n.$imageEl &&
                    0 !== n.$imageEl.length &&
                    ((r.scale = Math.max(
                        Math.min(r.scale, n.maxRatio),
                        s.minRatio
                    )),
                    n.$imageEl
                        .transition(t.params.speed)
                        .transform("translate3d(0,0,0) scale(" + r.scale + ")"),
                    (r.currentScale = r.scale),
                    (r.isScaling = !1),
                    1 === r.scale && (n.$slideEl = void 0));
            },
            onTouchStart: function (e) {
                var t = this.device,
                    a = this.zoom,
                    i = a.gesture,
                    s = a.image;
                i.$imageEl &&
                    0 !== i.$imageEl.length &&
                    (s.isTouched ||
                        (t.android && e.cancelable && e.preventDefault(),
                        (s.isTouched = !0),
                        (s.touchesStart.x =
                            "touchstart" === e.type
                                ? e.targetTouches[0].pageX
                                : e.pageX),
                        (s.touchesStart.y =
                            "touchstart" === e.type
                                ? e.targetTouches[0].pageY
                                : e.pageY)));
            },
            onTouchMove: function (e) {
                var t = this,
                    a = t.zoom,
                    i = a.gesture,
                    s = a.image,
                    r = a.velocity;
                if (
                    i.$imageEl &&
                    0 !== i.$imageEl.length &&
                    ((t.allowClick = !1), s.isTouched && i.$slideEl)
                ) {
                    s.isMoved ||
                        ((s.width = i.$imageEl[0].offsetWidth),
                        (s.height = i.$imageEl[0].offsetHeight),
                        (s.startX = T(i.$imageWrapEl[0], "x") || 0),
                        (s.startY = T(i.$imageWrapEl[0], "y") || 0),
                        (i.slideWidth = i.$slideEl[0].offsetWidth),
                        (i.slideHeight = i.$slideEl[0].offsetHeight),
                        i.$imageWrapEl.transition(0),
                        t.rtl &&
                            ((s.startX = -s.startX), (s.startY = -s.startY)));
                    var n = s.width * a.scale,
                        o = s.height * a.scale;
                    if (!(n < i.slideWidth && o < i.slideHeight)) {
                        if (
                            ((s.minX = Math.min(i.slideWidth / 2 - n / 2, 0)),
                            (s.maxX = -s.minX),
                            (s.minY = Math.min(i.slideHeight / 2 - o / 2, 0)),
                            (s.maxY = -s.minY),
                            (s.touchesCurrent.x =
                                "touchmove" === e.type
                                    ? e.targetTouches[0].pageX
                                    : e.pageX),
                            (s.touchesCurrent.y =
                                "touchmove" === e.type
                                    ? e.targetTouches[0].pageY
                                    : e.pageY),
                            !s.isMoved && !a.isScaling)
                        ) {
                            if (
                                t.isHorizontal() &&
                                ((Math.floor(s.minX) === Math.floor(s.startX) &&
                                    s.touchesCurrent.x < s.touchesStart.x) ||
                                    (Math.floor(s.maxX) ===
                                        Math.floor(s.startX) &&
                                        s.touchesCurrent.x > s.touchesStart.x))
                            )
                                return void (s.isTouched = !1);
                            if (
                                !t.isHorizontal() &&
                                ((Math.floor(s.minY) === Math.floor(s.startY) &&
                                    s.touchesCurrent.y < s.touchesStart.y) ||
                                    (Math.floor(s.maxY) ===
                                        Math.floor(s.startY) &&
                                        s.touchesCurrent.y > s.touchesStart.y))
                            )
                                return void (s.isTouched = !1);
                        }
                        e.cancelable && e.preventDefault(),
                            e.stopPropagation(),
                            (s.isMoved = !0),
                            (s.currentX =
                                s.touchesCurrent.x -
                                s.touchesStart.x +
                                s.startX),
                            (s.currentY =
                                s.touchesCurrent.y -
                                s.touchesStart.y +
                                s.startY),
                            s.currentX < s.minX &&
                                (s.currentX =
                                    s.minX +
                                    1 -
                                    Math.pow(s.minX - s.currentX + 1, 0.8)),
                            s.currentX > s.maxX &&
                                (s.currentX =
                                    s.maxX -
                                    1 +
                                    Math.pow(s.currentX - s.maxX + 1, 0.8)),
                            s.currentY < s.minY &&
                                (s.currentY =
                                    s.minY +
                                    1 -
                                    Math.pow(s.minY - s.currentY + 1, 0.8)),
                            s.currentY > s.maxY &&
                                (s.currentY =
                                    s.maxY -
                                    1 +
                                    Math.pow(s.currentY - s.maxY + 1, 0.8)),
                            r.prevPositionX ||
                                (r.prevPositionX = s.touchesCurrent.x),
                            r.prevPositionY ||
                                (r.prevPositionY = s.touchesCurrent.y),
                            r.prevTime || (r.prevTime = Date.now()),
                            (r.x =
                                (s.touchesCurrent.x - r.prevPositionX) /
                                (Date.now() - r.prevTime) /
                                2),
                            (r.y =
                                (s.touchesCurrent.y - r.prevPositionY) /
                                (Date.now() - r.prevTime) /
                                2),
                            Math.abs(s.touchesCurrent.x - r.prevPositionX) <
                                2 && (r.x = 0),
                            Math.abs(s.touchesCurrent.y - r.prevPositionY) <
                                2 && (r.y = 0),
                            (r.prevPositionX = s.touchesCurrent.x),
                            (r.prevPositionY = s.touchesCurrent.y),
                            (r.prevTime = Date.now()),
                            i.$imageWrapEl.transform(
                                "translate3d(" +
                                    s.currentX +
                                    "px, " +
                                    s.currentY +
                                    "px,0)"
                            );
                    }
                }
            },
            onTouchEnd: function () {
                var e = this.zoom,
                    t = e.gesture,
                    a = e.image,
                    i = e.velocity;
                if (t.$imageEl && 0 !== t.$imageEl.length) {
                    if (!a.isTouched || !a.isMoved)
                        return (a.isTouched = !1), void (a.isMoved = !1);
                    (a.isTouched = !1), (a.isMoved = !1);
                    var s = 300,
                        r = 300,
                        n = i.x * s,
                        o = a.currentX + n,
                        l = i.y * r,
                        d = a.currentY + l;
                    0 !== i.x && (s = Math.abs((o - a.currentX) / i.x)),
                        0 !== i.y && (r = Math.abs((d - a.currentY) / i.y));
                    var p = Math.max(s, r);
                    (a.currentX = o), (a.currentY = d);
                    var c = a.width * e.scale,
                        u = a.height * e.scale;
                    (a.minX = Math.min(t.slideWidth / 2 - c / 2, 0)),
                        (a.maxX = -a.minX),
                        (a.minY = Math.min(t.slideHeight / 2 - u / 2, 0)),
                        (a.maxY = -a.minY),
                        (a.currentX = Math.max(
                            Math.min(a.currentX, a.maxX),
                            a.minX
                        )),
                        (a.currentY = Math.max(
                            Math.min(a.currentY, a.maxY),
                            a.minY
                        )),
                        t.$imageWrapEl
                            .transition(p)
                            .transform(
                                "translate3d(" +
                                    a.currentX +
                                    "px, " +
                                    a.currentY +
                                    "px,0)"
                            );
                }
            },
            onTransitionEnd: function () {
                var e = this,
                    t = e.zoom,
                    a = t.gesture;
                a.$slideEl &&
                    e.previousIndex !== e.activeIndex &&
                    (a.$imageEl &&
                        a.$imageEl.transform("translate3d(0,0,0) scale(1)"),
                    a.$imageWrapEl &&
                        a.$imageWrapEl.transform("translate3d(0,0,0)"),
                    (t.scale = 1),
                    (t.currentScale = 1),
                    (a.$slideEl = void 0),
                    (a.$imageEl = void 0),
                    (a.$imageWrapEl = void 0));
            },
            toggle: function (e) {
                var t = this.zoom;
                t.scale && 1 !== t.scale ? t.out() : t.in(e);
            },
            in: function (e) {
                var t,
                    a,
                    i,
                    s,
                    r,
                    n,
                    l,
                    d,
                    p,
                    c,
                    u,
                    h,
                    v,
                    f,
                    m,
                    g,
                    b = this,
                    w = o(),
                    y = b.zoom,
                    E = b.params.zoom,
                    x = y.gesture,
                    T = y.image;
                (x.$slideEl ||
                    (b.params.virtual && b.params.virtual.enabled && b.virtual
                        ? (x.$slideEl = b.$wrapperEl.children(
                              "." + b.params.slideActiveClass
                          ))
                        : (x.$slideEl = b.slides.eq(b.activeIndex)),
                    (x.$imageEl = x.$slideEl.find(
                        "img, svg, canvas, picture, .swiper-zoom-target"
                    )),
                    (x.$imageWrapEl = x.$imageEl.parent(
                        "." + E.containerClass
                    ))),
                x.$imageEl && 0 !== x.$imageEl.length) &&
                    (x.$slideEl.addClass("" + E.zoomedSlideClass),
                    void 0 === T.touchesStart.x && e
                        ? ((t =
                              "touchend" === e.type
                                  ? e.changedTouches[0].pageX
                                  : e.pageX),
                          (a =
                              "touchend" === e.type
                                  ? e.changedTouches[0].pageY
                                  : e.pageY))
                        : ((t = T.touchesStart.x), (a = T.touchesStart.y)),
                    (y.scale =
                        x.$imageWrapEl.attr("data-swiper-zoom") || E.maxRatio),
                    (y.currentScale =
                        x.$imageWrapEl.attr("data-swiper-zoom") || E.maxRatio),
                    e
                        ? ((m = x.$slideEl[0].offsetWidth),
                          (g = x.$slideEl[0].offsetHeight),
                          (i =
                              x.$slideEl.offset().left + w.scrollX + m / 2 - t),
                          (s = x.$slideEl.offset().top + w.scrollY + g / 2 - a),
                          (l = x.$imageEl[0].offsetWidth),
                          (d = x.$imageEl[0].offsetHeight),
                          (p = l * y.scale),
                          (c = d * y.scale),
                          (v = -(u = Math.min(m / 2 - p / 2, 0))),
                          (f = -(h = Math.min(g / 2 - c / 2, 0))),
                          (r = i * y.scale) < u && (r = u),
                          r > v && (r = v),
                          (n = s * y.scale) < h && (n = h),
                          n > f && (n = f))
                        : ((r = 0), (n = 0)),
                    x.$imageWrapEl
                        .transition(300)
                        .transform("translate3d(" + r + "px, " + n + "px,0)"),
                    x.$imageEl
                        .transition(300)
                        .transform(
                            "translate3d(0,0,0) scale(" + y.scale + ")"
                        ));
            },
            out: function () {
                var e = this,
                    t = e.zoom,
                    a = e.params.zoom,
                    i = t.gesture;
                i.$slideEl ||
                    (e.params.virtual && e.params.virtual.enabled && e.virtual
                        ? (i.$slideEl = e.$wrapperEl.children(
                              "." + e.params.slideActiveClass
                          ))
                        : (i.$slideEl = e.slides.eq(e.activeIndex)),
                    (i.$imageEl = i.$slideEl.find(
                        "img, svg, canvas, picture, .swiper-zoom-target"
                    )),
                    (i.$imageWrapEl = i.$imageEl.parent(
                        "." + a.containerClass
                    ))),
                    i.$imageEl &&
                        0 !== i.$imageEl.length &&
                        ((t.scale = 1),
                        (t.currentScale = 1),
                        i.$imageWrapEl
                            .transition(300)
                            .transform("translate3d(0,0,0)"),
                        i.$imageEl
                            .transition(300)
                            .transform("translate3d(0,0,0) scale(1)"),
                        i.$slideEl.removeClass("" + a.zoomedSlideClass),
                        (i.$slideEl = void 0));
            },
            toggleGestures: function (e) {
                var t = this,
                    a = t.zoom,
                    i = a.slideSelector,
                    s = a.passiveListener;
                t.$wrapperEl[e]("gesturestart", i, a.onGestureStart, s),
                    t.$wrapperEl[e]("gesturechange", i, a.onGestureChange, s),
                    t.$wrapperEl[e]("gestureend", i, a.onGestureEnd, s);
            },
            enableGestures: function () {
                this.zoom.gesturesEnabled ||
                    ((this.zoom.gesturesEnabled = !0),
                    this.zoom.toggleGestures("on"));
            },
            disableGestures: function () {
                this.zoom.gesturesEnabled &&
                    ((this.zoom.gesturesEnabled = !1),
                    this.zoom.toggleGestures("off"));
            },
            enable: function () {
                var e = this,
                    t = e.support,
                    a = e.zoom;
                if (!a.enabled) {
                    a.enabled = !0;
                    var i = !(
                            "touchstart" !== e.touchEvents.start ||
                            !t.passiveListener ||
                            !e.params.passiveListeners
                        ) && { passive: !0, capture: !1 },
                        s = !t.passiveListener || { passive: !1, capture: !0 },
                        r = "." + e.params.slideClass;
                    (e.zoom.passiveListener = i),
                        (e.zoom.slideSelector = r),
                        t.gestures
                            ? (e.$wrapperEl.on(
                                  e.touchEvents.start,
                                  e.zoom.enableGestures,
                                  i
                              ),
                              e.$wrapperEl.on(
                                  e.touchEvents.end,
                                  e.zoom.disableGestures,
                                  i
                              ))
                            : "touchstart" === e.touchEvents.start &&
                              (e.$wrapperEl.on(
                                  e.touchEvents.start,
                                  r,
                                  a.onGestureStart,
                                  i
                              ),
                              e.$wrapperEl.on(
                                  e.touchEvents.move,
                                  r,
                                  a.onGestureChange,
                                  s
                              ),
                              e.$wrapperEl.on(
                                  e.touchEvents.end,
                                  r,
                                  a.onGestureEnd,
                                  i
                              ),
                              e.touchEvents.cancel &&
                                  e.$wrapperEl.on(
                                      e.touchEvents.cancel,
                                      r,
                                      a.onGestureEnd,
                                      i
                                  )),
                        e.$wrapperEl.on(
                            e.touchEvents.move,
                            "." + e.params.zoom.containerClass,
                            a.onTouchMove,
                            s
                        );
                }
            },
            disable: function () {
                var e = this,
                    t = e.zoom;
                if (t.enabled) {
                    var a = e.support;
                    e.zoom.enabled = !1;
                    var i = !(
                            "touchstart" !== e.touchEvents.start ||
                            !a.passiveListener ||
                            !e.params.passiveListeners
                        ) && { passive: !0, capture: !1 },
                        s = !a.passiveListener || { passive: !1, capture: !0 },
                        r = "." + e.params.slideClass;
                    a.gestures
                        ? (e.$wrapperEl.off(
                              e.touchEvents.start,
                              e.zoom.enableGestures,
                              i
                          ),
                          e.$wrapperEl.off(
                              e.touchEvents.end,
                              e.zoom.disableGestures,
                              i
                          ))
                        : "touchstart" === e.touchEvents.start &&
                          (e.$wrapperEl.off(
                              e.touchEvents.start,
                              r,
                              t.onGestureStart,
                              i
                          ),
                          e.$wrapperEl.off(
                              e.touchEvents.move,
                              r,
                              t.onGestureChange,
                              s
                          ),
                          e.$wrapperEl.off(
                              e.touchEvents.end,
                              r,
                              t.onGestureEnd,
                              i
                          ),
                          e.touchEvents.cancel &&
                              e.$wrapperEl.off(
                                  e.touchEvents.cancel,
                                  r,
                                  t.onGestureEnd,
                                  i
                              )),
                        e.$wrapperEl.off(
                            e.touchEvents.move,
                            "." + e.params.zoom.containerClass,
                            t.onTouchMove,
                            s
                        );
                }
            },
        },
        ae = {
            loadInSlide: function (e, t) {
                void 0 === t && (t = !0);
                var a = this,
                    i = a.params.lazy;
                if (void 0 !== e && 0 !== a.slides.length) {
                    var s =
                            a.virtual && a.params.virtual.enabled
                                ? a.$wrapperEl.children(
                                      "." +
                                          a.params.slideClass +
                                          '[data-swiper-slide-index="' +
                                          e +
                                          '"]'
                                  )
                                : a.slides.eq(e),
                        r = s.find(
                            "." +
                                i.elementClass +
                                ":not(." +
                                i.loadedClass +
                                "):not(." +
                                i.loadingClass +
                                ")"
                        );
                    !s.hasClass(i.elementClass) ||
                        s.hasClass(i.loadedClass) ||
                        s.hasClass(i.loadingClass) ||
                        r.push(s[0]),
                        0 !== r.length &&
                            r.each(function (e) {
                                var r = m(e);
                                r.addClass(i.loadingClass);
                                var n = r.attr("data-background"),
                                    o = r.attr("data-src"),
                                    l = r.attr("data-srcset"),
                                    d = r.attr("data-sizes"),
                                    p = r.parent("picture");
                                a.loadImage(
                                    r[0],
                                    o || n,
                                    l,
                                    d,
                                    !1,
                                    function () {
                                        if (
                                            null != a &&
                                            a &&
                                            (!a || a.params) &&
                                            !a.destroyed
                                        ) {
                                            if (
                                                (n
                                                    ? (r.css(
                                                          "background-image",
                                                          'url("' + n + '")'
                                                      ),
                                                      r.removeAttr(
                                                          "data-background"
                                                      ))
                                                    : (l &&
                                                          (r.attr("srcset", l),
                                                          r.removeAttr(
                                                              "data-srcset"
                                                          )),
                                                      d &&
                                                          (r.attr("sizes", d),
                                                          r.removeAttr(
                                                              "data-sizes"
                                                          )),
                                                      p.length &&
                                                          p
                                                              .children(
                                                                  "source"
                                                              )
                                                              .each(function (
                                                                  e
                                                              ) {
                                                                  var t = m(e);
                                                                  t.attr(
                                                                      "data-srcset"
                                                                  ) &&
                                                                      (t.attr(
                                                                          "srcset",
                                                                          t.attr(
                                                                              "data-srcset"
                                                                          )
                                                                      ),
                                                                      t.removeAttr(
                                                                          "data-srcset"
                                                                      ));
                                                              }),
                                                      o &&
                                                          (r.attr("src", o),
                                                          r.removeAttr(
                                                              "data-src"
                                                          ))),
                                                r
                                                    .addClass(i.loadedClass)
                                                    .removeClass(
                                                        i.loadingClass
                                                    ),
                                                s
                                                    .find(
                                                        "." + i.preloaderClass
                                                    )
                                                    .remove(),
                                                a.params.loop && t)
                                            ) {
                                                var e = s.attr(
                                                    "data-swiper-slide-index"
                                                );
                                                if (
                                                    s.hasClass(
                                                        a.params
                                                            .slideDuplicateClass
                                                    )
                                                ) {
                                                    var c =
                                                        a.$wrapperEl.children(
                                                            '[data-swiper-slide-index="' +
                                                                e +
                                                                '"]:not(.' +
                                                                a.params
                                                                    .slideDuplicateClass +
                                                                ")"
                                                        );
                                                    a.lazy.loadInSlide(
                                                        c.index(),
                                                        !1
                                                    );
                                                } else {
                                                    var u =
                                                        a.$wrapperEl.children(
                                                            "." +
                                                                a.params
                                                                    .slideDuplicateClass +
                                                                '[data-swiper-slide-index="' +
                                                                e +
                                                                '"]'
                                                        );
                                                    a.lazy.loadInSlide(
                                                        u.index(),
                                                        !1
                                                    );
                                                }
                                            }
                                            a.emit(
                                                "lazyImageReady",
                                                s[0],
                                                r[0]
                                            ),
                                                a.params.autoHeight &&
                                                    a.updateAutoHeight();
                                        }
                                    }
                                ),
                                    a.emit("lazyImageLoad", s[0], r[0]);
                            });
                }
            },
            load: function () {
                var e = this,
                    t = e.$wrapperEl,
                    a = e.params,
                    i = e.slides,
                    s = e.activeIndex,
                    r = e.virtual && a.virtual.enabled,
                    n = a.lazy,
                    o = a.slidesPerView;
                function l(e) {
                    if (r) {
                        if (
                            t.children(
                                "." +
                                    a.slideClass +
                                    '[data-swiper-slide-index="' +
                                    e +
                                    '"]'
                            ).length
                        )
                            return !0;
                    } else if (i[e]) return !0;
                    return !1;
                }
                function d(e) {
                    return r
                        ? m(e).attr("data-swiper-slide-index")
                        : m(e).index();
                }
                if (
                    ("auto" === o && (o = 0),
                    e.lazy.initialImageLoaded ||
                        (e.lazy.initialImageLoaded = !0),
                    e.params.watchSlidesVisibility)
                )
                    t.children("." + a.slideVisibleClass).each(function (t) {
                        var a = r
                            ? m(t).attr("data-swiper-slide-index")
                            : m(t).index();
                        e.lazy.loadInSlide(a);
                    });
                else if (o > 1)
                    for (var p = s; p < s + o; p += 1)
                        l(p) && e.lazy.loadInSlide(p);
                else e.lazy.loadInSlide(s);
                if (n.loadPrevNext)
                    if (
                        o > 1 ||
                        (n.loadPrevNextAmount && n.loadPrevNextAmount > 1)
                    ) {
                        for (
                            var c = n.loadPrevNextAmount,
                                u = o,
                                h = Math.min(s + u + Math.max(c, u), i.length),
                                v = Math.max(s - Math.max(u, c), 0),
                                f = s + o;
                            f < h;
                            f += 1
                        )
                            l(f) && e.lazy.loadInSlide(f);
                        for (var g = v; g < s; g += 1)
                            l(g) && e.lazy.loadInSlide(g);
                    } else {
                        var b = t.children("." + a.slideNextClass);
                        b.length > 0 && e.lazy.loadInSlide(d(b));
                        var w = t.children("." + a.slidePrevClass);
                        w.length > 0 && e.lazy.loadInSlide(d(w));
                    }
            },
            checkInViewOnLoad: function () {
                var e = o(),
                    t = this;
                if (t && !t.destroyed) {
                    var a = t.params.lazy.scrollingElement
                            ? m(t.params.lazy.scrollingElement)
                            : m(e),
                        i = a[0] === e,
                        s = i ? e.innerWidth : a[0].offsetWidth,
                        r = i ? e.innerHeight : a[0].offsetHeight,
                        n = t.$el.offset(),
                        l = !1;
                    t.rtlTranslate && (n.left -= t.$el[0].scrollLeft);
                    for (
                        var d = [
                                [n.left, n.top],
                                [n.left + t.width, n.top],
                                [n.left, n.top + t.height],
                                [n.left + t.width, n.top + t.height],
                            ],
                            p = 0;
                        p < d.length;
                        p += 1
                    ) {
                        var c = d[p];
                        if (c[0] >= 0 && c[0] <= s && c[1] >= 0 && c[1] <= r) {
                            if (0 === c[0] && 0 === c[1]) continue;
                            l = !0;
                        }
                    }
                    l
                        ? (t.lazy.load(),
                          a.off("scroll", t.lazy.checkInViewOnLoad))
                        : t.lazy.scrollHandlerAttached ||
                          ((t.lazy.scrollHandlerAttached = !0),
                          a.on("scroll", t.lazy.checkInViewOnLoad));
                }
            },
        },
        ie = {
            LinearSpline: function (e, t) {
                var a,
                    i,
                    s,
                    r,
                    n,
                    o = function (e, t) {
                        for (i = -1, a = e.length; a - i > 1; )
                            e[(s = (a + i) >> 1)] <= t ? (i = s) : (a = s);
                        return a;
                    };
                return (
                    (this.x = e),
                    (this.y = t),
                    (this.lastIndex = e.length - 1),
                    (this.interpolate = function (e) {
                        return e
                            ? ((n = o(this.x, e)),
                              (r = n - 1),
                              ((e - this.x[r]) * (this.y[n] - this.y[r])) /
                                  (this.x[n] - this.x[r]) +
                                  this.y[r])
                            : 0;
                    }),
                    this
                );
            },
            getInterpolateFunction: function (e) {
                var t = this;
                t.controller.spline ||
                    (t.controller.spline = t.params.loop
                        ? new ie.LinearSpline(t.slidesGrid, e.slidesGrid)
                        : new ie.LinearSpline(t.snapGrid, e.snapGrid));
            },
            setTranslate: function (e, t) {
                var a,
                    i,
                    s = this,
                    r = s.controller.control,
                    n = s.constructor;
                function o(e) {
                    var t = s.rtlTranslate ? -s.translate : s.translate;
                    "slide" === s.params.controller.by &&
                        (s.controller.getInterpolateFunction(e),
                        (i = -s.controller.spline.interpolate(-t))),
                        (i && "container" !== s.params.controller.by) ||
                            ((a =
                                (e.maxTranslate() - e.minTranslate()) /
                                (s.maxTranslate() - s.minTranslate())),
                            (i =
                                (t - s.minTranslate()) * a + e.minTranslate())),
                        s.params.controller.inverse &&
                            (i = e.maxTranslate() - i),
                        e.updateProgress(i),
                        e.setTranslate(i, s),
                        e.updateActiveIndex(),
                        e.updateSlidesClasses();
                }
                if (Array.isArray(r))
                    for (var l = 0; l < r.length; l += 1)
                        r[l] !== t && r[l] instanceof n && o(r[l]);
                else r instanceof n && t !== r && o(r);
            },
            setTransition: function (e, t) {
                var a,
                    i = this,
                    s = i.constructor,
                    r = i.controller.control;
                function n(t) {
                    t.setTransition(e, i),
                        0 !== e &&
                            (t.transitionStart(),
                            t.params.autoHeight &&
                                E(function () {
                                    t.updateAutoHeight();
                                }),
                            t.$wrapperEl.transitionEnd(function () {
                                r &&
                                    (t.params.loop &&
                                        "slide" === i.params.controller.by &&
                                        t.loopFix(),
                                    t.transitionEnd());
                            }));
                }
                if (Array.isArray(r))
                    for (a = 0; a < r.length; a += 1)
                        r[a] !== t && r[a] instanceof s && n(r[a]);
                else r instanceof s && t !== r && n(r);
            },
        },
        se = {
            getRandomNumber: function (e) {
                void 0 === e && (e = 16);
                return "x".repeat(e).replace(/x/g, function () {
                    return Math.round(16 * Math.random()).toString(16);
                });
            },
            makeElFocusable: function (e) {
                return e.attr("tabIndex", "0"), e;
            },
            makeElNotFocusable: function (e) {
                return e.attr("tabIndex", "-1"), e;
            },
            addElRole: function (e, t) {
                return e.attr("role", t), e;
            },
            addElRoleDescription: function (e, t) {
                return e.attr("aria-roledescription", t), e;
            },
            addElControls: function (e, t) {
                return e.attr("aria-controls", t), e;
            },
            addElLabel: function (e, t) {
                return e.attr("aria-label", t), e;
            },
            addElId: function (e, t) {
                return e.attr("id", t), e;
            },
            addElLive: function (e, t) {
                return e.attr("aria-live", t), e;
            },
            disableEl: function (e) {
                return e.attr("aria-disabled", !0), e;
            },
            enableEl: function (e) {
                return e.attr("aria-disabled", !1), e;
            },
            onEnterOrSpaceKey: function (e) {
                if (13 === e.keyCode || 32 === e.keyCode) {
                    var t = this,
                        a = t.params.a11y,
                        i = m(e.target);
                    t.navigation &&
                        t.navigation.$nextEl &&
                        i.is(t.navigation.$nextEl) &&
                        ((t.isEnd && !t.params.loop) || t.slideNext(),
                        t.isEnd
                            ? t.a11y.notify(a.lastSlideMessage)
                            : t.a11y.notify(a.nextSlideMessage)),
                        t.navigation &&
                            t.navigation.$prevEl &&
                            i.is(t.navigation.$prevEl) &&
                            ((t.isBeginning && !t.params.loop) || t.slidePrev(),
                            t.isBeginning
                                ? t.a11y.notify(a.firstSlideMessage)
                                : t.a11y.notify(a.prevSlideMessage)),
                        t.pagination &&
                            i.is(z(t.params.pagination.bulletClass)) &&
                            i[0].click();
                }
            },
            notify: function (e) {
                var t = this.a11y.liveRegion;
                0 !== t.length && (t.html(""), t.html(e));
            },
            updateNavigation: function () {
                var e = this;
                if (!e.params.loop && e.navigation) {
                    var t = e.navigation,
                        a = t.$nextEl,
                        i = t.$prevEl;
                    i &&
                        i.length > 0 &&
                        (e.isBeginning
                            ? (e.a11y.disableEl(i),
                              e.a11y.makeElNotFocusable(i))
                            : (e.a11y.enableEl(i), e.a11y.makeElFocusable(i))),
                        a &&
                            a.length > 0 &&
                            (e.isEnd
                                ? (e.a11y.disableEl(a),
                                  e.a11y.makeElNotFocusable(a))
                                : (e.a11y.enableEl(a),
                                  e.a11y.makeElFocusable(a)));
                }
            },
            updatePagination: function () {
                var e = this,
                    t = e.params.a11y;
                e.pagination &&
                    e.params.pagination.clickable &&
                    e.pagination.bullets &&
                    e.pagination.bullets.length &&
                    e.pagination.bullets.each(function (a) {
                        var i = m(a);
                        e.a11y.makeElFocusable(i),
                            e.params.pagination.renderBullet ||
                                (e.a11y.addElRole(i, "button"),
                                e.a11y.addElLabel(
                                    i,
                                    t.paginationBulletMessage.replace(
                                        /\{\{index\}\}/,
                                        i.index() + 1
                                    )
                                ));
                    });
            },
            init: function () {
                var e = this,
                    t = e.params.a11y;
                e.$el.append(e.a11y.liveRegion);
                var a = e.$el;
                t.containerRoleDescriptionMessage &&
                    e.a11y.addElRoleDescription(
                        a,
                        t.containerRoleDescriptionMessage
                    ),
                    t.containerMessage &&
                        e.a11y.addElLabel(a, t.containerMessage);
                var i,
                    s,
                    r,
                    n = e.$wrapperEl,
                    o =
                        n.attr("id") ||
                        "swiper-wrapper-" + e.a11y.getRandomNumber(16);
                e.a11y.addElId(n, o),
                    (i =
                        e.params.autoplay && e.params.autoplay.enabled
                            ? "off"
                            : "polite"),
                    e.a11y.addElLive(n, i),
                    t.itemRoleDescriptionMessage &&
                        e.a11y.addElRoleDescription(
                            m(e.slides),
                            t.itemRoleDescriptionMessage
                        ),
                    e.a11y.addElRole(m(e.slides), "group"),
                    e.slides.each(function (a) {
                        var i = m(a),
                            s = t.slideLabelMessage
                                .replace(/\{\{index\}\}/, i.index() + 1)
                                .replace(
                                    /\{\{slidesLength\}\}/,
                                    e.slides.length
                                );
                        e.a11y.addElLabel(i, s);
                    }),
                    e.navigation &&
                        e.navigation.$nextEl &&
                        (s = e.navigation.$nextEl),
                    e.navigation &&
                        e.navigation.$prevEl &&
                        (r = e.navigation.$prevEl),
                    s &&
                        s.length &&
                        (e.a11y.makeElFocusable(s),
                        "BUTTON" !== s[0].tagName &&
                            (e.a11y.addElRole(s, "button"),
                            s.on("keydown", e.a11y.onEnterOrSpaceKey)),
                        e.a11y.addElLabel(s, t.nextSlideMessage),
                        e.a11y.addElControls(s, o)),
                    r &&
                        r.length &&
                        (e.a11y.makeElFocusable(r),
                        "BUTTON" !== r[0].tagName &&
                            (e.a11y.addElRole(r, "button"),
                            r.on("keydown", e.a11y.onEnterOrSpaceKey)),
                        e.a11y.addElLabel(r, t.prevSlideMessage),
                        e.a11y.addElControls(r, o)),
                    e.pagination &&
                        e.params.pagination.clickable &&
                        e.pagination.bullets &&
                        e.pagination.bullets.length &&
                        e.pagination.$el.on(
                            "keydown",
                            z(e.params.pagination.bulletClass),
                            e.a11y.onEnterOrSpaceKey
                        );
            },
            destroy: function () {
                var e,
                    t,
                    a = this;
                a.a11y.liveRegion &&
                    a.a11y.liveRegion.length > 0 &&
                    a.a11y.liveRegion.remove(),
                    a.navigation &&
                        a.navigation.$nextEl &&
                        (e = a.navigation.$nextEl),
                    a.navigation &&
                        a.navigation.$prevEl &&
                        (t = a.navigation.$prevEl),
                    e && e.off("keydown", a.a11y.onEnterOrSpaceKey),
                    t && t.off("keydown", a.a11y.onEnterOrSpaceKey),
                    a.pagination &&
                        a.params.pagination.clickable &&
                        a.pagination.bullets &&
                        a.pagination.bullets.length &&
                        a.pagination.$el.off(
                            "keydown",
                            z(a.params.pagination.bulletClass),
                            a.a11y.onEnterOrSpaceKey
                        );
            },
        },
        re = {
            init: function () {
                var e = this,
                    t = o();
                if (e.params.history) {
                    if (!t.history || !t.history.pushState)
                        return (
                            (e.params.history.enabled = !1),
                            void (e.params.hashNavigation.enabled = !0)
                        );
                    var a = e.history;
                    (a.initialized = !0),
                        (a.paths = re.getPathValues(e.params.url)),
                        (a.paths.key || a.paths.value) &&
                            (a.scrollToSlide(
                                0,
                                a.paths.value,
                                e.params.runCallbacksOnInit
                            ),
                            e.params.history.replaceState ||
                                t.addEventListener(
                                    "popstate",
                                    e.history.setHistoryPopState
                                ));
                }
            },
            destroy: function () {
                var e = o();
                this.params.history.replaceState ||
                    e.removeEventListener(
                        "popstate",
                        this.history.setHistoryPopState
                    );
            },
            setHistoryPopState: function () {
                var e = this;
                (e.history.paths = re.getPathValues(e.params.url)),
                    e.history.scrollToSlide(
                        e.params.speed,
                        e.history.paths.value,
                        !1
                    );
            },
            getPathValues: function (e) {
                var t = o(),
                    a = (e ? new URL(e) : t.location).pathname
                        .slice(1)
                        .split("/")
                        .filter(function (e) {
                            return "" !== e;
                        }),
                    i = a.length;
                return { key: a[i - 2], value: a[i - 1] };
            },
            setHistory: function (e, t) {
                var a = this,
                    i = o();
                if (a.history.initialized && a.params.history.enabled) {
                    var s;
                    s = a.params.url ? new URL(a.params.url) : i.location;
                    var r = a.slides.eq(t),
                        n = re.slugify(r.attr("data-history"));
                    s.pathname.includes(e) || (n = e + "/" + n);
                    var l = i.history.state;
                    (l && l.value === n) ||
                        (a.params.history.replaceState
                            ? i.history.replaceState({ value: n }, null, n)
                            : i.history.pushState({ value: n }, null, n));
                }
            },
            slugify: function (e) {
                return e
                    .toString()
                    .replace(/\s+/g, "-")
                    .replace(/[^\w-]+/g, "")
                    .replace(/--+/g, "-")
                    .replace(/^-+/, "")
                    .replace(/-+$/, "");
            },
            scrollToSlide: function (e, t, a) {
                var i = this;
                if (t)
                    for (var s = 0, r = i.slides.length; s < r; s += 1) {
                        var n = i.slides.eq(s);
                        if (
                            re.slugify(n.attr("data-history")) === t &&
                            !n.hasClass(i.params.slideDuplicateClass)
                        ) {
                            var o = n.index();
                            i.slideTo(o, e, a);
                        }
                    }
                else i.slideTo(0, e, a);
            },
        },
        ne = {
            onHashCange: function () {
                var e = this,
                    t = r();
                e.emit("hashChange");
                var a = t.location.hash.replace("#", "");
                if (a !== e.slides.eq(e.activeIndex).attr("data-hash")) {
                    var i = e.$wrapperEl
                        .children(
                            "." +
                                e.params.slideClass +
                                '[data-hash="' +
                                a +
                                '"]'
                        )
                        .index();
                    if (void 0 === i) return;
                    e.slideTo(i);
                }
            },
            setHash: function () {
                var e = this,
                    t = o(),
                    a = r();
                if (
                    e.hashNavigation.initialized &&
                    e.params.hashNavigation.enabled
                )
                    if (
                        e.params.hashNavigation.replaceState &&
                        t.history &&
                        t.history.replaceState
                    )
                        t.history.replaceState(
                            null,
                            null,
                            "#" +
                                e.slides.eq(e.activeIndex).attr("data-hash") ||
                                ""
                        ),
                            e.emit("hashSet");
                    else {
                        var i = e.slides.eq(e.activeIndex),
                            s = i.attr("data-hash") || i.attr("data-history");
                        (a.location.hash = s || ""), e.emit("hashSet");
                    }
            },
            init: function () {
                var e = this,
                    t = r(),
                    a = o();
                if (
                    !(
                        !e.params.hashNavigation.enabled ||
                        (e.params.history && e.params.history.enabled)
                    )
                ) {
                    e.hashNavigation.initialized = !0;
                    var i = t.location.hash.replace("#", "");
                    if (i)
                        for (var s = 0, n = e.slides.length; s < n; s += 1) {
                            var l = e.slides.eq(s);
                            if (
                                (l.attr("data-hash") ||
                                    l.attr("data-history")) === i &&
                                !l.hasClass(e.params.slideDuplicateClass)
                            ) {
                                var d = l.index();
                                e.slideTo(
                                    d,
                                    0,
                                    e.params.runCallbacksOnInit,
                                    !0
                                );
                            }
                        }
                    e.params.hashNavigation.watchState &&
                        m(a).on("hashchange", e.hashNavigation.onHashCange);
                }
            },
            destroy: function () {
                var e = o();
                this.params.hashNavigation.watchState &&
                    m(e).off("hashchange", this.hashNavigation.onHashCange);
            },
        },
        oe = {
            run: function () {
                var e = this,
                    t = e.slides.eq(e.activeIndex),
                    a = e.params.autoplay.delay;
                t.attr("data-swiper-autoplay") &&
                    (a =
                        t.attr("data-swiper-autoplay") ||
                        e.params.autoplay.delay),
                    clearTimeout(e.autoplay.timeout),
                    (e.autoplay.timeout = E(function () {
                        var t;
                        e.params.autoplay.reverseDirection
                            ? e.params.loop
                                ? (e.loopFix(),
                                  (t = e.slidePrev(e.params.speed, !0, !0)),
                                  e.emit("autoplay"))
                                : e.isBeginning
                                ? e.params.autoplay.stopOnLastSlide
                                    ? e.autoplay.stop()
                                    : ((t = e.slideTo(
                                          e.slides.length - 1,
                                          e.params.speed,
                                          !0,
                                          !0
                                      )),
                                      e.emit("autoplay"))
                                : ((t = e.slidePrev(e.params.speed, !0, !0)),
                                  e.emit("autoplay"))
                            : e.params.loop
                            ? (e.loopFix(),
                              (t = e.slideNext(e.params.speed, !0, !0)),
                              e.emit("autoplay"))
                            : e.isEnd
                            ? e.params.autoplay.stopOnLastSlide
                                ? e.autoplay.stop()
                                : ((t = e.slideTo(0, e.params.speed, !0, !0)),
                                  e.emit("autoplay"))
                            : ((t = e.slideNext(e.params.speed, !0, !0)),
                              e.emit("autoplay")),
                            ((e.params.cssMode && e.autoplay.running) ||
                                !1 === t) &&
                                e.autoplay.run();
                    }, a));
            },
            start: function () {
                var e = this;
                return (
                    void 0 === e.autoplay.timeout &&
                    !e.autoplay.running &&
                    ((e.autoplay.running = !0),
                    e.emit("autoplayStart"),
                    e.autoplay.run(),
                    !0)
                );
            },
            stop: function () {
                var e = this;
                return (
                    !!e.autoplay.running &&
                    void 0 !== e.autoplay.timeout &&
                    (e.autoplay.timeout &&
                        (clearTimeout(e.autoplay.timeout),
                        (e.autoplay.timeout = void 0)),
                    (e.autoplay.running = !1),
                    e.emit("autoplayStop"),
                    !0)
                );
            },
            pause: function (e) {
                var t = this;
                t.autoplay.running &&
                    (t.autoplay.paused ||
                        (t.autoplay.timeout && clearTimeout(t.autoplay.timeout),
                        (t.autoplay.paused = !0),
                        0 !== e && t.params.autoplay.waitForTransition
                            ? (t.$wrapperEl[0].addEventListener(
                                  "transitionend",
                                  t.autoplay.onTransitionEnd
                              ),
                              t.$wrapperEl[0].addEventListener(
                                  "webkitTransitionEnd",
                                  t.autoplay.onTransitionEnd
                              ))
                            : ((t.autoplay.paused = !1), t.autoplay.run())));
            },
            onVisibilityChange: function () {
                var e = this,
                    t = r();
                "hidden" === t.visibilityState &&
                    e.autoplay.running &&
                    e.autoplay.pause(),
                    "visible" === t.visibilityState &&
                        e.autoplay.paused &&
                        (e.autoplay.run(), (e.autoplay.paused = !1));
            },
            onTransitionEnd: function (e) {
                var t = this;
                t &&
                    !t.destroyed &&
                    t.$wrapperEl &&
                    e.target === t.$wrapperEl[0] &&
                    (t.$wrapperEl[0].removeEventListener(
                        "transitionend",
                        t.autoplay.onTransitionEnd
                    ),
                    t.$wrapperEl[0].removeEventListener(
                        "webkitTransitionEnd",
                        t.autoplay.onTransitionEnd
                    ),
                    (t.autoplay.paused = !1),
                    t.autoplay.running ? t.autoplay.run() : t.autoplay.stop());
            },
        },
        le = {
            setTranslate: function () {
                for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) {
                    var i = e.slides.eq(a),
                        s = -i[0].swiperSlideOffset;
                    e.params.virtualTranslate || (s -= e.translate);
                    var r = 0;
                    e.isHorizontal() || ((r = s), (s = 0));
                    var n = e.params.fadeEffect.crossFade
                        ? Math.max(1 - Math.abs(i[0].progress), 0)
                        : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                    i.css({ opacity: n }).transform(
                        "translate3d(" + s + "px, " + r + "px, 0px)"
                    );
                }
            },
            setTransition: function (e) {
                var t = this,
                    a = t.slides,
                    i = t.$wrapperEl;
                if ((a.transition(e), t.params.virtualTranslate && 0 !== e)) {
                    var s = !1;
                    a.transitionEnd(function () {
                        if (!s && t && !t.destroyed) {
                            (s = !0), (t.animating = !1);
                            for (
                                var e = [
                                        "webkitTransitionEnd",
                                        "transitionend",
                                    ],
                                    a = 0;
                                a < e.length;
                                a += 1
                            )
                                i.trigger(e[a]);
                        }
                    });
                }
            },
        },
        de = {
            setTranslate: function () {
                var e,
                    t = this,
                    a = t.$el,
                    i = t.$wrapperEl,
                    s = t.slides,
                    r = t.width,
                    n = t.height,
                    o = t.rtlTranslate,
                    l = t.size,
                    d = t.browser,
                    p = t.params.cubeEffect,
                    c = t.isHorizontal(),
                    u = t.virtual && t.params.virtual.enabled,
                    h = 0;
                p.shadow &&
                    (c
                        ? (0 === (e = i.find(".swiper-cube-shadow")).length &&
                              ((e = m(
                                  '<div class="swiper-cube-shadow"></div>'
                              )),
                              i.append(e)),
                          e.css({ height: r + "px" }))
                        : 0 === (e = a.find(".swiper-cube-shadow")).length &&
                          ((e = m('<div class="swiper-cube-shadow"></div>')),
                          a.append(e)));
                for (var v = 0; v < s.length; v += 1) {
                    var f = s.eq(v),
                        g = v;
                    u && (g = parseInt(f.attr("data-swiper-slide-index"), 10));
                    var b = 90 * g,
                        w = Math.floor(b / 360);
                    o && ((b = -b), (w = Math.floor(-b / 360)));
                    var y = Math.max(Math.min(f[0].progress, 1), -1),
                        E = 0,
                        x = 0,
                        T = 0;
                    g % 4 == 0
                        ? ((E = 4 * -w * l), (T = 0))
                        : (g - 1) % 4 == 0
                        ? ((E = 0), (T = 4 * -w * l))
                        : (g - 2) % 4 == 0
                        ? ((E = l + 4 * w * l), (T = l))
                        : (g - 3) % 4 == 0 &&
                          ((E = -l), (T = 3 * l + 4 * l * w)),
                        o && (E = -E),
                        c || ((x = E), (E = 0));
                    var S =
                        "rotateX(" +
                        (c ? 0 : -b) +
                        "deg) rotateY(" +
                        (c ? b : 0) +
                        "deg) translate3d(" +
                        E +
                        "px, " +
                        x +
                        "px, " +
                        T +
                        "px)";
                    if (
                        (y <= 1 &&
                            y > -1 &&
                            ((h = 90 * g + 90 * y),
                            o && (h = 90 * -g - 90 * y)),
                        f.transform(S),
                        p.slideShadows)
                    ) {
                        var C = c
                                ? f.find(".swiper-slide-shadow-left")
                                : f.find(".swiper-slide-shadow-top"),
                            M = c
                                ? f.find(".swiper-slide-shadow-right")
                                : f.find(".swiper-slide-shadow-bottom");
                        0 === C.length &&
                            ((C = m(
                                '<div class="swiper-slide-shadow-' +
                                    (c ? "left" : "top") +
                                    '"></div>'
                            )),
                            f.append(C)),
                            0 === M.length &&
                                ((M = m(
                                    '<div class="swiper-slide-shadow-' +
                                        (c ? "right" : "bottom") +
                                        '"></div>'
                                )),
                                f.append(M)),
                            C.length && (C[0].style.opacity = Math.max(-y, 0)),
                            M.length && (M[0].style.opacity = Math.max(y, 0));
                    }
                }
                if (
                    (i.css({
                        "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
                        "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
                        "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
                        "transform-origin": "50% 50% -" + l / 2 + "px",
                    }),
                    p.shadow)
                )
                    if (c)
                        e.transform(
                            "translate3d(0px, " +
                                (r / 2 + p.shadowOffset) +
                                "px, " +
                                -r / 2 +
                                "px) rotateX(90deg) rotateZ(0deg) scale(" +
                                p.shadowScale +
                                ")"
                        );
                    else {
                        var z = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
                            P =
                                1.5 -
                                (Math.sin((2 * z * Math.PI) / 360) / 2 +
                                    Math.cos((2 * z * Math.PI) / 360) / 2),
                            k = p.shadowScale,
                            L = p.shadowScale / P,
                            $ = p.shadowOffset;
                        e.transform(
                            "scale3d(" +
                                k +
                                ", 1, " +
                                L +
                                ") translate3d(0px, " +
                                (n / 2 + $) +
                                "px, " +
                                -n / 2 / L +
                                "px) rotateX(-90deg)"
                        );
                    }
                var I = d.isSafari || d.isWebView ? -l / 2 : 0;
                i.transform(
                    "translate3d(0px,0," +
                        I +
                        "px) rotateX(" +
                        (t.isHorizontal() ? 0 : h) +
                        "deg) rotateY(" +
                        (t.isHorizontal() ? -h : 0) +
                        "deg)"
                );
            },
            setTransition: function (e) {
                var t = this,
                    a = t.$el;
                t.slides
                    .transition(e)
                    .find(
                        ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                    )
                    .transition(e),
                    t.params.cubeEffect.shadow &&
                        !t.isHorizontal() &&
                        a.find(".swiper-cube-shadow").transition(e);
            },
        },
        pe = {
            setTranslate: function () {
                for (
                    var e = this, t = e.slides, a = e.rtlTranslate, i = 0;
                    i < t.length;
                    i += 1
                ) {
                    var s = t.eq(i),
                        r = s[0].progress;
                    e.params.flipEffect.limitRotation &&
                        (r = Math.max(Math.min(s[0].progress, 1), -1));
                    var n = -180 * r,
                        o = 0,
                        l = -s[0].swiperSlideOffset,
                        d = 0;
                    if (
                        (e.isHorizontal()
                            ? a && (n = -n)
                            : ((d = l), (l = 0), (o = -n), (n = 0)),
                        (s[0].style.zIndex =
                            -Math.abs(Math.round(r)) + t.length),
                        e.params.flipEffect.slideShadows)
                    ) {
                        var p = e.isHorizontal()
                                ? s.find(".swiper-slide-shadow-left")
                                : s.find(".swiper-slide-shadow-top"),
                            c = e.isHorizontal()
                                ? s.find(".swiper-slide-shadow-right")
                                : s.find(".swiper-slide-shadow-bottom");
                        0 === p.length &&
                            ((p = m(
                                '<div class="swiper-slide-shadow-' +
                                    (e.isHorizontal() ? "left" : "top") +
                                    '"></div>'
                            )),
                            s.append(p)),
                            0 === c.length &&
                                ((c = m(
                                    '<div class="swiper-slide-shadow-' +
                                        (e.isHorizontal()
                                            ? "right"
                                            : "bottom") +
                                        '"></div>'
                                )),
                                s.append(c)),
                            p.length && (p[0].style.opacity = Math.max(-r, 0)),
                            c.length && (c[0].style.opacity = Math.max(r, 0));
                    }
                    s.transform(
                        "translate3d(" +
                            l +
                            "px, " +
                            d +
                            "px, 0px) rotateX(" +
                            o +
                            "deg) rotateY(" +
                            n +
                            "deg)"
                    );
                }
            },
            setTransition: function (e) {
                var t = this,
                    a = t.slides,
                    i = t.activeIndex,
                    s = t.$wrapperEl;
                if (
                    (a
                        .transition(e)
                        .find(
                            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                        )
                        .transition(e),
                    t.params.virtualTranslate && 0 !== e)
                ) {
                    var r = !1;
                    a.eq(i).transitionEnd(function () {
                        if (!r && t && !t.destroyed) {
                            (r = !0), (t.animating = !1);
                            for (
                                var e = [
                                        "webkitTransitionEnd",
                                        "transitionend",
                                    ],
                                    a = 0;
                                a < e.length;
                                a += 1
                            )
                                s.trigger(e[a]);
                        }
                    });
                }
            },
        },
        ce = {
            setTranslate: function () {
                for (
                    var e = this,
                        t = e.width,
                        a = e.height,
                        i = e.slides,
                        s = e.slidesSizesGrid,
                        r = e.params.coverflowEffect,
                        n = e.isHorizontal(),
                        o = e.translate,
                        l = n ? t / 2 - o : a / 2 - o,
                        d = n ? r.rotate : -r.rotate,
                        p = r.depth,
                        c = 0,
                        u = i.length;
                    c < u;
                    c += 1
                ) {
                    var h = i.eq(c),
                        v = s[c],
                        f =
                            ((l - h[0].swiperSlideOffset - v / 2) / v) *
                            r.modifier,
                        g = n ? d * f : 0,
                        b = n ? 0 : d * f,
                        w = -p * Math.abs(f),
                        y = r.stretch;
                    "string" == typeof y &&
                        -1 !== y.indexOf("%") &&
                        (y = (parseFloat(r.stretch) / 100) * v);
                    var E = n ? 0 : y * f,
                        x = n ? y * f : 0,
                        T = 1 - (1 - r.scale) * Math.abs(f);
                    Math.abs(x) < 0.001 && (x = 0),
                        Math.abs(E) < 0.001 && (E = 0),
                        Math.abs(w) < 0.001 && (w = 0),
                        Math.abs(g) < 0.001 && (g = 0),
                        Math.abs(b) < 0.001 && (b = 0),
                        Math.abs(T) < 0.001 && (T = 0);
                    var S =
                        "translate3d(" +
                        x +
                        "px," +
                        E +
                        "px," +
                        w +
                        "px)  rotateX(" +
                        b +
                        "deg) rotateY(" +
                        g +
                        "deg) scale(" +
                        T +
                        ")";
                    if (
                        (h.transform(S),
                        (h[0].style.zIndex = 1 - Math.abs(Math.round(f))),
                        r.slideShadows)
                    ) {
                        var C = n
                                ? h.find(".swiper-slide-shadow-left")
                                : h.find(".swiper-slide-shadow-top"),
                            M = n
                                ? h.find(".swiper-slide-shadow-right")
                                : h.find(".swiper-slide-shadow-bottom");
                        0 === C.length &&
                            ((C = m(
                                '<div class="swiper-slide-shadow-' +
                                    (n ? "left" : "top") +
                                    '"></div>'
                            )),
                            h.append(C)),
                            0 === M.length &&
                                ((M = m(
                                    '<div class="swiper-slide-shadow-' +
                                        (n ? "right" : "bottom") +
                                        '"></div>'
                                )),
                                h.append(M)),
                            C.length && (C[0].style.opacity = f > 0 ? f : 0),
                            M.length && (M[0].style.opacity = -f > 0 ? -f : 0);
                    }
                }
            },
            setTransition: function (e) {
                this.slides
                    .transition(e)
                    .find(
                        ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                    )
                    .transition(e);
            },
        },
        ue = {
            init: function () {
                var e = this,
                    t = e.params.thumbs;
                if (e.thumbs.initialized) return !1;
                e.thumbs.initialized = !0;
                var a = e.constructor;
                return (
                    t.swiper instanceof a
                        ? ((e.thumbs.swiper = t.swiper),
                          C(e.thumbs.swiper.originalParams, {
                              watchSlidesProgress: !0,
                              slideToClickedSlide: !1,
                          }),
                          C(e.thumbs.swiper.params, {
                              watchSlidesProgress: !0,
                              slideToClickedSlide: !1,
                          }))
                        : S(t.swiper) &&
                          ((e.thumbs.swiper = new a(
                              C({}, t.swiper, {
                                  watchSlidesVisibility: !0,
                                  watchSlidesProgress: !0,
                                  slideToClickedSlide: !1,
                              })
                          )),
                          (e.thumbs.swiperCreated = !0)),
                    e.thumbs.swiper.$el.addClass(
                        e.params.thumbs.thumbsContainerClass
                    ),
                    e.thumbs.swiper.on("tap", e.thumbs.onThumbClick),
                    !0
                );
            },
            onThumbClick: function () {
                var e = this,
                    t = e.thumbs.swiper;
                if (t) {
                    var a = t.clickedIndex,
                        i = t.clickedSlide;
                    if (
                        !(
                            (i &&
                                m(i).hasClass(
                                    e.params.thumbs.slideThumbActiveClass
                                )) ||
                            null == a
                        )
                    ) {
                        var s;
                        if (
                            ((s = t.params.loop
                                ? parseInt(
                                      m(t.clickedSlide).attr(
                                          "data-swiper-slide-index"
                                      ),
                                      10
                                  )
                                : a),
                            e.params.loop)
                        ) {
                            var r = e.activeIndex;
                            e.slides
                                .eq(r)
                                .hasClass(e.params.slideDuplicateClass) &&
                                (e.loopFix(),
                                (e._clientLeft = e.$wrapperEl[0].clientLeft),
                                (r = e.activeIndex));
                            var n = e.slides
                                    .eq(r)
                                    .prevAll(
                                        '[data-swiper-slide-index="' + s + '"]'
                                    )
                                    .eq(0)
                                    .index(),
                                o = e.slides
                                    .eq(r)
                                    .nextAll(
                                        '[data-swiper-slide-index="' + s + '"]'
                                    )
                                    .eq(0)
                                    .index();
                            s =
                                void 0 === n
                                    ? o
                                    : void 0 === o
                                    ? n
                                    : o - r < r - n
                                    ? o
                                    : n;
                        }
                        e.slideTo(s);
                    }
                }
            },
            update: function (e) {
                var t = this,
                    a = t.thumbs.swiper;
                if (a) {
                    var i =
                            "auto" === a.params.slidesPerView
                                ? a.slidesPerViewDynamic()
                                : a.params.slidesPerView,
                        s = t.params.thumbs.autoScrollOffset,
                        r = s && !a.params.loop;
                    if (t.realIndex !== a.realIndex || r) {
                        var n,
                            o,
                            l = a.activeIndex;
                        if (a.params.loop) {
                            a.slides
                                .eq(l)
                                .hasClass(a.params.slideDuplicateClass) &&
                                (a.loopFix(),
                                (a._clientLeft = a.$wrapperEl[0].clientLeft),
                                (l = a.activeIndex));
                            var d = a.slides
                                    .eq(l)
                                    .prevAll(
                                        '[data-swiper-slide-index="' +
                                            t.realIndex +
                                            '"]'
                                    )
                                    .eq(0)
                                    .index(),
                                p = a.slides
                                    .eq(l)
                                    .nextAll(
                                        '[data-swiper-slide-index="' +
                                            t.realIndex +
                                            '"]'
                                    )
                                    .eq(0)
                                    .index();
                            (n =
                                void 0 === d
                                    ? p
                                    : void 0 === p
                                    ? d
                                    : p - l == l - d
                                    ? l
                                    : p - l < l - d
                                    ? p
                                    : d),
                                (o =
                                    t.activeIndex > t.previousIndex
                                        ? "next"
                                        : "prev");
                        } else
                            o =
                                (n = t.realIndex) > t.previousIndex
                                    ? "next"
                                    : "prev";
                        r && (n += "next" === o ? s : -1 * s),
                            a.visibleSlidesIndexes &&
                                a.visibleSlidesIndexes.indexOf(n) < 0 &&
                                (a.params.centeredSlides
                                    ? (n =
                                          n > l
                                              ? n - Math.floor(i / 2) + 1
                                              : n + Math.floor(i / 2) - 1)
                                    : n > l && (n = n - i + 1),
                                a.slideTo(n, e ? 0 : void 0));
                    }
                    var c = 1,
                        u = t.params.thumbs.slideThumbActiveClass;
                    if (
                        (t.params.slidesPerView > 1 &&
                            !t.params.centeredSlides &&
                            (c = t.params.slidesPerView),
                        t.params.thumbs.multipleActiveThumbs || (c = 1),
                        (c = Math.floor(c)),
                        a.slides.removeClass(u),
                        a.params.loop ||
                            (a.params.virtual && a.params.virtual.enabled))
                    )
                        for (var h = 0; h < c; h += 1)
                            a.$wrapperEl
                                .children(
                                    '[data-swiper-slide-index="' +
                                        (t.realIndex + h) +
                                        '"]'
                                )
                                .addClass(u);
                    else
                        for (var v = 0; v < c; v += 1)
                            a.slides.eq(t.realIndex + v).addClass(u);
                }
            },
        },
        he = [
            q,
            U,
            {
                name: "mousewheel",
                params: {
                    mousewheel: {
                        enabled: !1,
                        releaseOnEdges: !1,
                        invert: !1,
                        forceToAxis: !1,
                        sensitivity: 1,
                        eventsTarget: "container",
                        thresholdDelta: null,
                        thresholdTime: null,
                    },
                },
                create: function () {
                    M(this, {
                        mousewheel: {
                            enabled: !1,
                            lastScrollTime: x(),
                            lastEventBeforeSnap: void 0,
                            recentWheelEvents: [],
                            enable: K.enable,
                            disable: K.disable,
                            handle: K.handle,
                            handleMouseEnter: K.handleMouseEnter,
                            handleMouseLeave: K.handleMouseLeave,
                            animateSlider: K.animateSlider,
                            releaseScroll: K.releaseScroll,
                        },
                    });
                },
                on: {
                    init: function (e) {
                        !e.params.mousewheel.enabled &&
                            e.params.cssMode &&
                            e.mousewheel.disable(),
                            e.params.mousewheel.enabled &&
                                e.mousewheel.enable();
                    },
                    destroy: function (e) {
                        e.params.cssMode && e.mousewheel.enable(),
                            e.mousewheel.enabled && e.mousewheel.disable();
                    },
                },
            },
            {
                name: "navigation",
                params: {
                    navigation: {
                        nextEl: null,
                        prevEl: null,
                        hideOnClick: !1,
                        disabledClass: "swiper-button-disabled",
                        hiddenClass: "swiper-button-hidden",
                        lockClass: "swiper-button-lock",
                    },
                },
                create: function () {
                    M(this, { navigation: t({}, Z) });
                },
                on: {
                    init: function (e) {
                        e.navigation.init(), e.navigation.update();
                    },
                    toEdge: function (e) {
                        e.navigation.update();
                    },
                    fromEdge: function (e) {
                        e.navigation.update();
                    },
                    destroy: function (e) {
                        e.navigation.destroy();
                    },
                    click: function (e, t) {
                        var a = e.navigation,
                            i = a.$nextEl,
                            s = a.$prevEl,
                            r = t.target;
                        if (
                            e.params.navigation.hideOnClick &&
                            !m(r).is(s) &&
                            !m(r).is(i)
                        ) {
                            if (
                                e.pagination &&
                                e.params.pagination &&
                                e.params.pagination.clickable &&
                                (e.pagination.el === r ||
                                    e.pagination.el.contains(r))
                            )
                                return;
                            var n;
                            i
                                ? (n = i.hasClass(
                                      e.params.navigation.hiddenClass
                                  ))
                                : s &&
                                  (n = s.hasClass(
                                      e.params.navigation.hiddenClass
                                  )),
                                !0 === n
                                    ? e.emit("navigationShow")
                                    : e.emit("navigationHide"),
                                i &&
                                    i.toggleClass(
                                        e.params.navigation.hiddenClass
                                    ),
                                s &&
                                    s.toggleClass(
                                        e.params.navigation.hiddenClass
                                    );
                        }
                    },
                },
            },
            {
                name: "pagination",
                params: {
                    pagination: {
                        el: null,
                        bulletElement: "span",
                        clickable: !1,
                        hideOnClick: !1,
                        renderBullet: null,
                        renderProgressbar: null,
                        renderFraction: null,
                        renderCustom: null,
                        progressbarOpposite: !1,
                        type: "bullets",
                        dynamicBullets: !1,
                        dynamicMainBullets: 1,
                        formatFractionCurrent: function (e) {
                            return e;
                        },
                        formatFractionTotal: function (e) {
                            return e;
                        },
                        bulletClass: "swiper-pagination-bullet",
                        bulletActiveClass: "swiper-pagination-bullet-active",
                        modifierClass: "swiper-pagination-",
                        currentClass: "swiper-pagination-current",
                        totalClass: "swiper-pagination-total",
                        hiddenClass: "swiper-pagination-hidden",
                        progressbarFillClass:
                            "swiper-pagination-progressbar-fill",
                        progressbarOppositeClass:
                            "swiper-pagination-progressbar-opposite",
                        clickableClass: "swiper-pagination-clickable",
                        lockClass: "swiper-pagination-lock",
                    },
                },
                create: function () {
                    M(this, { pagination: t({ dynamicBulletIndex: 0 }, J) });
                },
                on: {
                    init: function (e) {
                        e.pagination.init(),
                            e.pagination.render(),
                            e.pagination.update();
                    },
                    activeIndexChange: function (e) {
                        (e.params.loop || void 0 === e.snapIndex) &&
                            e.pagination.update();
                    },
                    snapIndexChange: function (e) {
                        e.params.loop || e.pagination.update();
                    },
                    slidesLengthChange: function (e) {
                        e.params.loop &&
                            (e.pagination.render(), e.pagination.update());
                    },
                    snapGridLengthChange: function (e) {
                        e.params.loop ||
                            (e.pagination.render(), e.pagination.update());
                    },
                    destroy: function (e) {
                        e.pagination.destroy();
                    },
                    click: function (e, t) {
                        var a = t.target;
                        if (
                            e.params.pagination.el &&
                            e.params.pagination.hideOnClick &&
                            e.pagination.$el.length > 0 &&
                            !m(a).hasClass(e.params.pagination.bulletClass)
                        ) {
                            if (
                                e.navigation &&
                                ((e.navigation.nextEl &&
                                    a === e.navigation.nextEl) ||
                                    (e.navigation.prevEl &&
                                        a === e.navigation.prevEl))
                            )
                                return;
                            !0 ===
                            e.pagination.$el.hasClass(
                                e.params.pagination.hiddenClass
                            )
                                ? e.emit("paginationShow")
                                : e.emit("paginationHide"),
                                e.pagination.$el.toggleClass(
                                    e.params.pagination.hiddenClass
                                );
                        }
                    },
                },
            },
            {
                name: "scrollbar",
                params: {
                    scrollbar: {
                        el: null,
                        dragSize: "auto",
                        hide: !1,
                        draggable: !1,
                        snapOnRelease: !0,
                        lockClass: "swiper-scrollbar-lock",
                        dragClass: "swiper-scrollbar-drag",
                    },
                },
                create: function () {
                    M(this, {
                        scrollbar: t(
                            { isTouched: !1, timeout: null, dragTimeout: null },
                            Q
                        ),
                    });
                },
                on: {
                    init: function (e) {
                        e.scrollbar.init(),
                            e.scrollbar.updateSize(),
                            e.scrollbar.setTranslate();
                    },
                    update: function (e) {
                        e.scrollbar.updateSize();
                    },
                    resize: function (e) {
                        e.scrollbar.updateSize();
                    },
                    observerUpdate: function (e) {
                        e.scrollbar.updateSize();
                    },
                    setTranslate: function (e) {
                        e.scrollbar.setTranslate();
                    },
                    setTransition: function (e, t) {
                        e.scrollbar.setTransition(t);
                    },
                    destroy: function (e) {
                        e.scrollbar.destroy();
                    },
                },
            },
            {
                name: "parallax",
                params: { parallax: { enabled: !1 } },
                create: function () {
                    M(this, { parallax: t({}, ee) });
                },
                on: {
                    beforeInit: function (e) {
                        e.params.parallax.enabled &&
                            ((e.params.watchSlidesProgress = !0),
                            (e.originalParams.watchSlidesProgress = !0));
                    },
                    init: function (e) {
                        e.params.parallax.enabled && e.parallax.setTranslate();
                    },
                    setTranslate: function (e) {
                        e.params.parallax.enabled && e.parallax.setTranslate();
                    },
                    setTransition: function (e, t) {
                        e.params.parallax.enabled &&
                            e.parallax.setTransition(t);
                    },
                },
            },
            {
                name: "zoom",
                params: {
                    zoom: {
                        enabled: !1,
                        maxRatio: 3,
                        minRatio: 1,
                        toggle: !0,
                        containerClass: "swiper-zoom-container",
                        zoomedSlideClass: "swiper-slide-zoomed",
                    },
                },
                create: function () {
                    var e = this;
                    M(e, {
                        zoom: t(
                            {
                                enabled: !1,
                                scale: 1,
                                currentScale: 1,
                                isScaling: !1,
                                gesture: {
                                    $slideEl: void 0,
                                    slideWidth: void 0,
                                    slideHeight: void 0,
                                    $imageEl: void 0,
                                    $imageWrapEl: void 0,
                                    maxRatio: 3,
                                },
                                image: {
                                    isTouched: void 0,
                                    isMoved: void 0,
                                    currentX: void 0,
                                    currentY: void 0,
                                    minX: void 0,
                                    minY: void 0,
                                    maxX: void 0,
                                    maxY: void 0,
                                    width: void 0,
                                    height: void 0,
                                    startX: void 0,
                                    startY: void 0,
                                    touchesStart: {},
                                    touchesCurrent: {},
                                },
                                velocity: {
                                    x: void 0,
                                    y: void 0,
                                    prevPositionX: void 0,
                                    prevPositionY: void 0,
                                    prevTime: void 0,
                                },
                            },
                            te
                        ),
                    });
                    var a = 1;
                    Object.defineProperty(e.zoom, "scale", {
                        get: function () {
                            return a;
                        },
                        set: function (t) {
                            if (a !== t) {
                                var i = e.zoom.gesture.$imageEl
                                        ? e.zoom.gesture.$imageEl[0]
                                        : void 0,
                                    s = e.zoom.gesture.$slideEl
                                        ? e.zoom.gesture.$slideEl[0]
                                        : void 0;
                                e.emit("zoomChange", t, i, s);
                            }
                            a = t;
                        },
                    });
                },
                on: {
                    init: function (e) {
                        e.params.zoom.enabled && e.zoom.enable();
                    },
                    destroy: function (e) {
                        e.zoom.disable();
                    },
                    touchStart: function (e, t) {
                        e.zoom.enabled && e.zoom.onTouchStart(t);
                    },
                    touchEnd: function (e, t) {
                        e.zoom.enabled && e.zoom.onTouchEnd(t);
                    },
                    doubleTap: function (e, t) {
                        !e.animating &&
                            e.params.zoom.enabled &&
                            e.zoom.enabled &&
                            e.params.zoom.toggle &&
                            e.zoom.toggle(t);
                    },
                    transitionEnd: function (e) {
                        e.zoom.enabled &&
                            e.params.zoom.enabled &&
                            e.zoom.onTransitionEnd();
                    },
                    slideChange: function (e) {
                        e.zoom.enabled &&
                            e.params.zoom.enabled &&
                            e.params.cssMode &&
                            e.zoom.onTransitionEnd();
                    },
                },
            },
            {
                name: "lazy",
                params: {
                    lazy: {
                        checkInView: !1,
                        enabled: !1,
                        loadPrevNext: !1,
                        loadPrevNextAmount: 1,
                        loadOnTransitionStart: !1,
                        scrollingElement: "",
                        elementClass: "swiper-lazy",
                        loadingClass: "swiper-lazy-loading",
                        loadedClass: "swiper-lazy-loaded",
                        preloaderClass: "swiper-lazy-preloader",
                    },
                },
                create: function () {
                    M(this, { lazy: t({ initialImageLoaded: !1 }, ae) });
                },
                on: {
                    beforeInit: function (e) {
                        e.params.lazy.enabled &&
                            e.params.preloadImages &&
                            (e.params.preloadImages = !1);
                    },
                    init: function (e) {
                        e.params.lazy.enabled &&
                            !e.params.loop &&
                            0 === e.params.initialSlide &&
                            (e.params.lazy.checkInView
                                ? e.lazy.checkInViewOnLoad()
                                : e.lazy.load());
                    },
                    scroll: function (e) {
                        e.params.freeMode &&
                            !e.params.freeModeSticky &&
                            e.lazy.load();
                    },
                    "scrollbarDragMove resize _freeModeNoMomentumRelease":
                        function (e) {
                            e.params.lazy.enabled && e.lazy.load();
                        },
                    transitionStart: function (e) {
                        e.params.lazy.enabled &&
                            (e.params.lazy.loadOnTransitionStart ||
                                (!e.params.lazy.loadOnTransitionStart &&
                                    !e.lazy.initialImageLoaded)) &&
                            e.lazy.load();
                    },
                    transitionEnd: function (e) {
                        e.params.lazy.enabled &&
                            !e.params.lazy.loadOnTransitionStart &&
                            e.lazy.load();
                    },
                    slideChange: function (e) {
                        e.params.lazy.enabled &&
                            e.params.cssMode &&
                            e.lazy.load();
                    },
                },
            },
            {
                name: "controller",
                params: {
                    controller: { control: void 0, inverse: !1, by: "slide" },
                },
                create: function () {
                    M(this, {
                        controller: t(
                            { control: this.params.controller.control },
                            ie
                        ),
                    });
                },
                on: {
                    update: function (e) {
                        e.controller.control &&
                            e.controller.spline &&
                            ((e.controller.spline = void 0),
                            delete e.controller.spline);
                    },
                    resize: function (e) {
                        e.controller.control &&
                            e.controller.spline &&
                            ((e.controller.spline = void 0),
                            delete e.controller.spline);
                    },
                    observerUpdate: function (e) {
                        e.controller.control &&
                            e.controller.spline &&
                            ((e.controller.spline = void 0),
                            delete e.controller.spline);
                    },
                    setTranslate: function (e, t, a) {
                        e.controller.control && e.controller.setTranslate(t, a);
                    },
                    setTransition: function (e, t, a) {
                        e.controller.control &&
                            e.controller.setTransition(t, a);
                    },
                },
            },
            {
                name: "a11y",
                params: {
                    a11y: {
                        enabled: !0,
                        notificationClass: "swiper-notification",
                        prevSlideMessage: "Previous slide",
                        nextSlideMessage: "Next slide",
                        firstSlideMessage: "This is the first slide",
                        lastSlideMessage: "This is the last slide",
                        paginationBulletMessage: "Go to slide {{index}}",
                        slideLabelMessage: "{{index}} / {{slidesLength}}",
                        containerMessage: null,
                        containerRoleDescriptionMessage: null,
                        itemRoleDescriptionMessage: null,
                    },
                },
                create: function () {
                    M(this, {
                        a11y: t({}, se, {
                            liveRegion: m(
                                '<span class="' +
                                    this.params.a11y.notificationClass +
                                    '" aria-live="assertive" aria-atomic="true"></span>'
                            ),
                        }),
                    });
                },
                on: {
                    afterInit: function (e) {
                        e.params.a11y.enabled &&
                            (e.a11y.init(), e.a11y.updateNavigation());
                    },
                    toEdge: function (e) {
                        e.params.a11y.enabled && e.a11y.updateNavigation();
                    },
                    fromEdge: function (e) {
                        e.params.a11y.enabled && e.a11y.updateNavigation();
                    },
                    paginationUpdate: function (e) {
                        e.params.a11y.enabled && e.a11y.updatePagination();
                    },
                    destroy: function (e) {
                        e.params.a11y.enabled && e.a11y.destroy();
                    },
                },
            },
            {
                name: "history",
                params: {
                    history: { enabled: !1, replaceState: !1, key: "slides" },
                },
                create: function () {
                    M(this, { history: t({}, re) });
                },
                on: {
                    init: function (e) {
                        e.params.history.enabled && e.history.init();
                    },
                    destroy: function (e) {
                        e.params.history.enabled && e.history.destroy();
                    },
                    transitionEnd: function (e) {
                        e.history.initialized &&
                            e.history.setHistory(
                                e.params.history.key,
                                e.activeIndex
                            );
                    },
                    slideChange: function (e) {
                        e.history.initialized &&
                            e.params.cssMode &&
                            e.history.setHistory(
                                e.params.history.key,
                                e.activeIndex
                            );
                    },
                },
            },
            {
                name: "hash-navigation",
                params: {
                    hashNavigation: {
                        enabled: !1,
                        replaceState: !1,
                        watchState: !1,
                    },
                },
                create: function () {
                    M(this, { hashNavigation: t({ initialized: !1 }, ne) });
                },
                on: {
                    init: function (e) {
                        e.params.hashNavigation.enabled &&
                            e.hashNavigation.init();
                    },
                    destroy: function (e) {
                        e.params.hashNavigation.enabled &&
                            e.hashNavigation.destroy();
                    },
                    transitionEnd: function (e) {
                        e.hashNavigation.initialized &&
                            e.hashNavigation.setHash();
                    },
                    slideChange: function (e) {
                        e.hashNavigation.initialized &&
                            e.params.cssMode &&
                            e.hashNavigation.setHash();
                    },
                },
            },
            {
                name: "autoplay",
                params: {
                    autoplay: {
                        enabled: !1,
                        delay: 3e3,
                        waitForTransition: !0,
                        disableOnInteraction: !0,
                        stopOnLastSlide: !1,
                        reverseDirection: !1,
                    },
                },
                create: function () {
                    M(this, {
                        autoplay: t({}, oe, { running: !1, paused: !1 }),
                    });
                },
                on: {
                    init: function (e) {
                        e.params.autoplay.enabled &&
                            (e.autoplay.start(),
                            r().addEventListener(
                                "visibilitychange",
                                e.autoplay.onVisibilityChange
                            ));
                    },
                    beforeTransitionStart: function (e, t, a) {
                        e.autoplay.running &&
                            (a || !e.params.autoplay.disableOnInteraction
                                ? e.autoplay.pause(t)
                                : e.autoplay.stop());
                    },
                    sliderFirstMove: function (e) {
                        e.autoplay.running &&
                            (e.params.autoplay.disableOnInteraction
                                ? e.autoplay.stop()
                                : e.autoplay.pause());
                    },
                    touchEnd: function (e) {
                        e.params.cssMode &&
                            e.autoplay.paused &&
                            !e.params.autoplay.disableOnInteraction &&
                            e.autoplay.run();
                    },
                    destroy: function (e) {
                        e.autoplay.running && e.autoplay.stop(),
                            r().removeEventListener(
                                "visibilitychange",
                                e.autoplay.onVisibilityChange
                            );
                    },
                },
            },
            {
                name: "effect-fade",
                params: { fadeEffect: { crossFade: !1 } },
                create: function () {
                    M(this, { fadeEffect: t({}, le) });
                },
                on: {
                    beforeInit: function (e) {
                        if ("fade" === e.params.effect) {
                            e.classNames.push(
                                e.params.containerModifierClass + "fade"
                            );
                            var t = {
                                slidesPerView: 1,
                                slidesPerColumn: 1,
                                slidesPerGroup: 1,
                                watchSlidesProgress: !0,
                                spaceBetween: 0,
                                virtualTranslate: !0,
                            };
                            C(e.params, t), C(e.originalParams, t);
                        }
                    },
                    setTranslate: function (e) {
                        "fade" === e.params.effect &&
                            e.fadeEffect.setTranslate();
                    },
                    setTransition: function (e, t) {
                        "fade" === e.params.effect &&
                            e.fadeEffect.setTransition(t);
                    },
                },
            },
            {
                name: "effect-cube",
                params: {
                    cubeEffect: {
                        slideShadows: !0,
                        shadow: !0,
                        shadowOffset: 20,
                        shadowScale: 0.94,
                    },
                },
                create: function () {
                    M(this, { cubeEffect: t({}, de) });
                },
                on: {
                    beforeInit: function (e) {
                        if ("cube" === e.params.effect) {
                            e.classNames.push(
                                e.params.containerModifierClass + "cube"
                            ),
                                e.classNames.push(
                                    e.params.containerModifierClass + "3d"
                                );
                            var t = {
                                slidesPerView: 1,
                                slidesPerColumn: 1,
                                slidesPerGroup: 1,
                                watchSlidesProgress: !0,
                                resistanceRatio: 0,
                                spaceBetween: 0,
                                centeredSlides: !1,
                                virtualTranslate: !0,
                            };
                            C(e.params, t), C(e.originalParams, t);
                        }
                    },
                    setTranslate: function (e) {
                        "cube" === e.params.effect &&
                            e.cubeEffect.setTranslate();
                    },
                    setTransition: function (e, t) {
                        "cube" === e.params.effect &&
                            e.cubeEffect.setTransition(t);
                    },
                },
            },
            {
                name: "effect-flip",
                params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
                create: function () {
                    M(this, { flipEffect: t({}, pe) });
                },
                on: {
                    beforeInit: function (e) {
                        if ("flip" === e.params.effect) {
                            e.classNames.push(
                                e.params.containerModifierClass + "flip"
                            ),
                                e.classNames.push(
                                    e.params.containerModifierClass + "3d"
                                );
                            var t = {
                                slidesPerView: 1,
                                slidesPerColumn: 1,
                                slidesPerGroup: 1,
                                watchSlidesProgress: !0,
                                spaceBetween: 0,
                                virtualTranslate: !0,
                            };
                            C(e.params, t), C(e.originalParams, t);
                        }
                    },
                    setTranslate: function (e) {
                        "flip" === e.params.effect &&
                            e.flipEffect.setTranslate();
                    },
                    setTransition: function (e, t) {
                        "flip" === e.params.effect &&
                            e.flipEffect.setTransition(t);
                    },
                },
            },
            {
                name: "effect-coverflow",
                params: {
                    coverflowEffect: {
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        scale: 1,
                        modifier: 1,
                        slideShadows: !0,
                    },
                },
                create: function () {
                    M(this, { coverflowEffect: t({}, ce) });
                },
                on: {
                    beforeInit: function (e) {
                        "coverflow" === e.params.effect &&
                            (e.classNames.push(
                                e.params.containerModifierClass + "coverflow"
                            ),
                            e.classNames.push(
                                e.params.containerModifierClass + "3d"
                            ),
                            (e.params.watchSlidesProgress = !0),
                            (e.originalParams.watchSlidesProgress = !0));
                    },
                    setTranslate: function (e) {
                        "coverflow" === e.params.effect &&
                            e.coverflowEffect.setTranslate();
                    },
                    setTransition: function (e, t) {
                        "coverflow" === e.params.effect &&
                            e.coverflowEffect.setTransition(t);
                    },
                },
            },
            {
                name: "thumbs",
                params: {
                    thumbs: {
                        swiper: null,
                        multipleActiveThumbs: !0,
                        autoScrollOffset: 0,
                        slideThumbActiveClass: "swiper-slide-thumb-active",
                        thumbsContainerClass: "swiper-container-thumbs",
                    },
                },
                create: function () {
                    M(this, {
                        thumbs: t({ swiper: null, initialized: !1 }, ue),
                    });
                },
                on: {
                    beforeInit: function (e) {
                        var t = e.params.thumbs;
                        t && t.swiper && (e.thumbs.init(), e.thumbs.update(!0));
                    },
                    slideChange: function (e) {
                        e.thumbs.swiper && e.thumbs.update();
                    },
                    update: function (e) {
                        e.thumbs.swiper && e.thumbs.update();
                    },
                    resize: function (e) {
                        e.thumbs.swiper && e.thumbs.update();
                    },
                    observerUpdate: function (e) {
                        e.thumbs.swiper && e.thumbs.update();
                    },
                    setTransition: function (e, t) {
                        var a = e.thumbs.swiper;
                        a && a.setTransition(t);
                    },
                    beforeDestroy: function (e) {
                        var t = e.thumbs.swiper;
                        t && e.thumbs.swiperCreated && t && t.destroy();
                    },
                },
            },
        ];
    return F.use(he), F;
});
/*!
 * Bootstrap v5.0.0-beta2 (https://getbootstrap.com/)
 * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
!(function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
        ? (module.exports = e(require("@popperjs/core")))
        : "function" == typeof define && define.amd
        ? define(["@popperjs/core"], e)
        : ((t =
              "undefined" != typeof globalThis
                  ? globalThis
                  : t || self).bootstrap = e(t.Popper));
})(this, function (t) {
    "use strict";
    function e(t) {
        if (t && t.__esModule) return t;
        var e = Object.create(null);
        return (
            t &&
                Object.keys(t).forEach(function (n) {
                    if ("default" !== n) {
                        var i = Object.getOwnPropertyDescriptor(t, n);
                        Object.defineProperty(
                            e,
                            n,
                            i.get
                                ? i
                                : {
                                      enumerable: !0,
                                      get: function () {
                                          return t[n];
                                      },
                                  }
                        );
                    }
                }),
            (e.default = t),
            Object.freeze(e)
        );
    }
    var n = e(t);
    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i);
        }
    }
    function o(t, e, n) {
        return e && i(t.prototype, e), n && i(t, n), t;
    }
    function s() {
        return (s =
            Object.assign ||
            function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) &&
                            (t[i] = n[i]);
                }
                return t;
            }).apply(this, arguments);
    }
    function r(t, e) {
        var n, i;
        (t.prototype = Object.create(e.prototype)),
            (t.prototype.constructor = t),
            (n = t),
            (i = e),
            (
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                }
            )(n, i);
    }
    var a,
        l,
        c = function (t) {
            do {
                t += Math.floor(1e6 * Math.random());
            } while (document.getElementById(t));
            return t;
        },
        u = function (t) {
            var e = t.getAttribute("data-bs-target");
            if (!e || "#" === e) {
                var n = t.getAttribute("href");
                if (!n || (!n.includes("#") && !n.startsWith("."))) return null;
                n.includes("#") &&
                    !n.startsWith("#") &&
                    (n = "#" + n.split("#")[1]),
                    (e = n && "#" !== n ? n.trim() : null);
            }
            return e;
        },
        h = function (t) {
            var e = u(t);
            return e && document.querySelector(e) ? e : null;
        },
        d = function (t) {
            var e = u(t);
            return e ? document.querySelector(e) : null;
        },
        f = function (t) {
            if (!t) return 0;
            var e = window.getComputedStyle(t),
                n = e.transitionDuration,
                i = e.transitionDelay,
                o = Number.parseFloat(n),
                s = Number.parseFloat(i);
            return o || s
                ? ((n = n.split(",")[0]),
                  (i = i.split(",")[0]),
                  1e3 * (Number.parseFloat(n) + Number.parseFloat(i)))
                : 0;
        },
        p = function (t) {
            t.dispatchEvent(new Event("transitionend"));
        },
        g = function (t) {
            return (t[0] || t).nodeType;
        },
        m = function (t, e) {
            var n = !1,
                i = e + 5;
            t.addEventListener("transitionend", function e() {
                (n = !0), t.removeEventListener("transitionend", e);
            }),
                setTimeout(function () {
                    n || p(t);
                }, i);
        },
        _ = function (t, e, n) {
            Object.keys(n).forEach(function (i) {
                var o,
                    s = n[i],
                    r = e[i],
                    a =
                        r && g(r)
                            ? "element"
                            : null == (o = r)
                            ? "" + o
                            : {}.toString
                                  .call(o)
                                  .match(/\s([a-z]+)/i)[1]
                                  .toLowerCase();
                if (!new RegExp(s).test(a))
                    throw new TypeError(
                        t.toUpperCase() +
                            ': Option "' +
                            i +
                            '" provided type "' +
                            a +
                            '" but expected type "' +
                            s +
                            '".'
                    );
            });
        },
        v = function (t) {
            if (!t) return !1;
            if (t.style && t.parentNode && t.parentNode.style) {
                var e = getComputedStyle(t),
                    n = getComputedStyle(t.parentNode);
                return (
                    "none" !== e.display &&
                    "none" !== n.display &&
                    "hidden" !== e.visibility
                );
            }
            return !1;
        },
        b = function () {
            return function () {};
        },
        y = function (t) {
            return t.offsetHeight;
        },
        w = function () {
            var t = window.jQuery;
            return t && !document.body.hasAttribute("data-bs-no-jquery")
                ? t
                : null;
        },
        E = "rtl" === document.documentElement.dir,
        T = function (t, e) {
            var n;
            (n = function () {
                var n = w();
                if (n) {
                    var i = n.fn[t];
                    (n.fn[t] = e.jQueryInterface),
                        (n.fn[t].Constructor = e),
                        (n.fn[t].noConflict = function () {
                            return (n.fn[t] = i), e.jQueryInterface;
                        });
                }
            }),
                "loading" === document.readyState
                    ? document.addEventListener("DOMContentLoaded", n)
                    : n();
        },
        A =
            ((a = {}),
            (l = 1),
            {
                set: function (t, e, n) {
                    void 0 === t.bsKey && ((t.bsKey = { key: e, id: l }), l++),
                        (a[t.bsKey.id] = n);
                },
                get: function (t, e) {
                    if (!t || void 0 === t.bsKey) return null;
                    var n = t.bsKey;
                    return n.key === e ? a[n.id] : null;
                },
                delete: function (t, e) {
                    if (void 0 !== t.bsKey) {
                        var n = t.bsKey;
                        n.key === e && (delete a[n.id], delete t.bsKey);
                    }
                },
            }),
        k = function (t, e, n) {
            A.set(t, e, n);
        },
        L = function (t, e) {
            return A.get(t, e);
        },
        C = /[^.]*(?=\..*)\.|.*/,
        D = /\..*/,
        S = /::\d+$/,
        N = {},
        O = 1,
        I = { mouseenter: "mouseover", mouseleave: "mouseout" },
        j = new Set([
            "click",
            "dblclick",
            "mouseup",
            "mousedown",
            "contextmenu",
            "mousewheel",
            "DOMMouseScroll",
            "mouseover",
            "mouseout",
            "mousemove",
            "selectstart",
            "selectend",
            "keydown",
            "keypress",
            "keyup",
            "orientationchange",
            "touchstart",
            "touchmove",
            "touchend",
            "touchcancel",
            "pointerdown",
            "pointermove",
            "pointerup",
            "pointerleave",
            "pointercancel",
            "gesturestart",
            "gesturechange",
            "gestureend",
            "focus",
            "blur",
            "change",
            "reset",
            "select",
            "submit",
            "focusin",
            "focusout",
            "load",
            "unload",
            "beforeunload",
            "resize",
            "move",
            "DOMContentLoaded",
            "readystatechange",
            "error",
            "abort",
            "scroll",
        ]);
    function P(t, e) {
        return (e && e + "::" + O++) || t.uidEvent || O++;
    }
    function x(t) {
        var e = P(t);
        return (t.uidEvent = e), (N[e] = N[e] || {}), N[e];
    }
    function H(t, e, n) {
        void 0 === n && (n = null);
        for (var i = Object.keys(t), o = 0, s = i.length; o < s; o++) {
            var r = t[i[o]];
            if (r.originalHandler === e && r.delegationSelector === n) return r;
        }
        return null;
    }
    function B(t, e, n) {
        var i = "string" == typeof e,
            o = i ? n : e,
            s = t.replace(D, ""),
            r = I[s];
        return r && (s = r), j.has(s) || (s = t), [i, o, s];
    }
    function M(t, e, n, i, o) {
        if ("string" == typeof e && t) {
            n || ((n = i), (i = null));
            var s = B(e, n, i),
                r = s[0],
                a = s[1],
                l = s[2],
                c = x(t),
                u = c[l] || (c[l] = {}),
                h = H(u, a, r ? n : null);
            if (h) h.oneOff = h.oneOff && o;
            else {
                var d = P(a, e.replace(C, "")),
                    f = r
                        ? (function (t, e, n) {
                              return function i(o) {
                                  for (
                                      var s = t.querySelectorAll(e),
                                          r = o.target;
                                      r && r !== this;
                                      r = r.parentNode
                                  )
                                      for (var a = s.length; a--; )
                                          if (s[a] === r)
                                              return (
                                                  (o.delegateTarget = r),
                                                  i.oneOff &&
                                                      K.off(t, o.type, n),
                                                  n.apply(r, [o])
                                              );
                                  return null;
                              };
                          })(t, n, i)
                        : (function (t, e) {
                              return function n(i) {
                                  return (
                                      (i.delegateTarget = t),
                                      n.oneOff && K.off(t, i.type, e),
                                      e.apply(t, [i])
                                  );
                              };
                          })(t, n);
                (f.delegationSelector = r ? n : null),
                    (f.originalHandler = a),
                    (f.oneOff = o),
                    (f.uidEvent = d),
                    (u[d] = f),
                    t.addEventListener(l, f, r);
            }
        }
    }
    function R(t, e, n, i, o) {
        var s = H(e[n], i, o);
        s && (t.removeEventListener(n, s, Boolean(o)), delete e[n][s.uidEvent]);
    }
    var K = {
            on: function (t, e, n, i) {
                M(t, e, n, i, !1);
            },
            one: function (t, e, n, i) {
                M(t, e, n, i, !0);
            },
            off: function (t, e, n, i) {
                if ("string" == typeof e && t) {
                    var o = B(e, n, i),
                        s = o[0],
                        r = o[1],
                        a = o[2],
                        l = a !== e,
                        c = x(t),
                        u = e.startsWith(".");
                    if (void 0 === r) {
                        u &&
                            Object.keys(c).forEach(function (n) {
                                !(function (t, e, n, i) {
                                    var o = e[n] || {};
                                    Object.keys(o).forEach(function (s) {
                                        if (s.includes(i)) {
                                            var r = o[s];
                                            R(
                                                t,
                                                e,
                                                n,
                                                r.originalHandler,
                                                r.delegationSelector
                                            );
                                        }
                                    });
                                })(t, c, n, e.slice(1));
                            });
                        var h = c[a] || {};
                        Object.keys(h).forEach(function (n) {
                            var i = n.replace(S, "");
                            if (!l || e.includes(i)) {
                                var o = h[n];
                                R(
                                    t,
                                    c,
                                    a,
                                    o.originalHandler,
                                    o.delegationSelector
                                );
                            }
                        });
                    } else {
                        if (!c || !c[a]) return;
                        R(t, c, a, r, s ? n : null);
                    }
                }
            },
            trigger: function (t, e, n) {
                if ("string" != typeof e || !t) return null;
                var i,
                    o = w(),
                    s = e.replace(D, ""),
                    r = e !== s,
                    a = j.has(s),
                    l = !0,
                    c = !0,
                    u = !1,
                    h = null;
                return (
                    r &&
                        o &&
                        ((i = o.Event(e, n)),
                        o(t).trigger(i),
                        (l = !i.isPropagationStopped()),
                        (c = !i.isImmediatePropagationStopped()),
                        (u = i.isDefaultPrevented())),
                    a
                        ? (h = document.createEvent("HTMLEvents")).initEvent(
                              s,
                              l,
                              !0
                          )
                        : (h = new CustomEvent(e, {
                              bubbles: l,
                              cancelable: !0,
                          })),
                    void 0 !== n &&
                        Object.keys(n).forEach(function (t) {
                            Object.defineProperty(h, t, {
                                get: function () {
                                    return n[t];
                                },
                            });
                        }),
                    u && h.preventDefault(),
                    c && t.dispatchEvent(h),
                    h.defaultPrevented && void 0 !== i && i.preventDefault(),
                    h
                );
            },
        },
        W = (function () {
            function t(t) {
                t &&
                    ((this._element = t),
                    k(t, this.constructor.DATA_KEY, this));
            }
            return (
                (t.prototype.dispose = function () {
                    var t, e;
                    (t = this._element),
                        (e = this.constructor.DATA_KEY),
                        A.delete(t, e),
                        (this._element = null);
                }),
                (t.getInstance = function (t) {
                    return L(t, this.DATA_KEY);
                }),
                o(t, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "5.0.0-beta2";
                        },
                    },
                ]),
                t
            );
        })(),
        U = (function (t) {
            function e() {
                return t.apply(this, arguments) || this;
            }
            r(e, t);
            var n = e.prototype;
            return (
                (n.close = function (t) {
                    var e = t ? this._getRootElement(t) : this._element,
                        n = this._triggerCloseEvent(e);
                    null === n || n.defaultPrevented || this._removeElement(e);
                }),
                (n._getRootElement = function (t) {
                    return d(t) || t.closest(".alert");
                }),
                (n._triggerCloseEvent = function (t) {
                    return K.trigger(t, "close.bs.alert");
                }),
                (n._removeElement = function (t) {
                    var e = this;
                    if (
                        (t.classList.remove("show"),
                        t.classList.contains("fade"))
                    ) {
                        var n = f(t);
                        K.one(t, "transitionend", function () {
                            return e._destroyElement(t);
                        }),
                            m(t, n);
                    } else this._destroyElement(t);
                }),
                (n._destroyElement = function (t) {
                    t.parentNode && t.parentNode.removeChild(t),
                        K.trigger(t, "closed.bs.alert");
                }),
                (e.jQueryInterface = function (t) {
                    return this.each(function () {
                        var n = L(this, "bs.alert");
                        n || (n = new e(this)), "close" === t && n[t](this);
                    });
                }),
                (e.handleDismiss = function (t) {
                    return function (e) {
                        e && e.preventDefault(), t.close(this);
                    };
                }),
                o(e, null, [
                    {
                        key: "DATA_KEY",
                        get: function () {
                            return "bs.alert";
                        },
                    },
                ]),
                e
            );
        })(W);
    K.on(
        document,
        "click.bs.alert.data-api",
        '[data-bs-dismiss="alert"]',
        U.handleDismiss(new U())
    ),
        T("alert", U);
    var F = (function (t) {
        function e() {
            return t.apply(this, arguments) || this;
        }
        return (
            r(e, t),
            (e.prototype.toggle = function () {
                this._element.setAttribute(
                    "aria-pressed",
                    this._element.classList.toggle("active")
                );
            }),
            (e.jQueryInterface = function (t) {
                return this.each(function () {
                    var n = L(this, "bs.button");
                    n || (n = new e(this)), "toggle" === t && n[t]();
                });
            }),
            o(e, null, [
                {
                    key: "DATA_KEY",
                    get: function () {
                        return "bs.button";
                    },
                },
            ]),
            e
        );
    })(W);
    function z(t) {
        return (
            "true" === t ||
            ("false" !== t &&
                (t === Number(t).toString()
                    ? Number(t)
                    : "" === t || "null" === t
                    ? null
                    : t))
        );
    }
    function Y(t) {
        return t.replace(/[A-Z]/g, function (t) {
            return "-" + t.toLowerCase();
        });
    }
    K.on(
        document,
        "click.bs.button.data-api",
        '[data-bs-toggle="button"]',
        function (t) {
            t.preventDefault();
            var e = t.target.closest('[data-bs-toggle="button"]'),
                n = L(e, "bs.button");
            n || (n = new F(e)), n.toggle();
        }
    ),
        T("button", F);
    var X = {
            setDataAttribute: function (t, e, n) {
                t.setAttribute("data-bs-" + Y(e), n);
            },
            removeDataAttribute: function (t, e) {
                t.removeAttribute("data-bs-" + Y(e));
            },
            getDataAttributes: function (t) {
                if (!t) return {};
                var e = {};
                return (
                    Object.keys(t.dataset)
                        .filter(function (t) {
                            return t.startsWith("bs");
                        })
                        .forEach(function (n) {
                            var i = n.replace(/^bs/, "");
                            (i =
                                i.charAt(0).toLowerCase() +
                                i.slice(1, i.length)),
                                (e[i] = z(t.dataset[n]));
                        }),
                    e
                );
            },
            getDataAttribute: function (t, e) {
                return z(t.getAttribute("data-bs-" + Y(e)));
            },
            offset: function (t) {
                var e = t.getBoundingClientRect();
                return {
                    top: e.top + document.body.scrollTop,
                    left: e.left + document.body.scrollLeft,
                };
            },
            position: function (t) {
                return { top: t.offsetTop, left: t.offsetLeft };
            },
        },
        q = function (t, e) {
            var n;
            return (
                void 0 === e && (e = document.documentElement),
                (n = []).concat.apply(
                    n,
                    Element.prototype.querySelectorAll.call(e, t)
                )
            );
        },
        Q = function (t, e) {
            return (
                void 0 === e && (e = document.documentElement),
                Element.prototype.querySelector.call(e, t)
            );
        },
        V = function (t, e) {
            var n;
            return (n = []).concat.apply(n, t.children).filter(function (t) {
                return t.matches(e);
            });
        },
        $ = function (t, e) {
            for (var n = t.previousElementSibling; n; ) {
                if (n.matches(e)) return [n];
                n = n.previousElementSibling;
            }
            return [];
        },
        G = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0,
        },
        Z = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean",
        },
        J = (function (t) {
            function e(e, n) {
                var i;
                return (
                    ((i = t.call(this, e) || this)._items = null),
                    (i._interval = null),
                    (i._activeElement = null),
                    (i._isPaused = !1),
                    (i._isSliding = !1),
                    (i.touchTimeout = null),
                    (i.touchStartX = 0),
                    (i.touchDeltaX = 0),
                    (i._config = i._getConfig(n)),
                    (i._indicatorsElement = Q(
                        ".carousel-indicators",
                        i._element
                    )),
                    (i._touchSupported =
                        "ontouchstart" in document.documentElement ||
                        navigator.maxTouchPoints > 0),
                    (i._pointerEvent = Boolean(window.PointerEvent)),
                    i._addEventListeners(),
                    i
                );
            }
            r(e, t);
            var n = e.prototype;
            return (
                (n.next = function () {
                    this._isSliding || this._slide("next");
                }),
                (n.nextWhenVisible = function () {
                    !document.hidden && v(this._element) && this.next();
                }),
                (n.prev = function () {
                    this._isSliding || this._slide("prev");
                }),
                (n.pause = function (t) {
                    t || (this._isPaused = !0),
                        Q(
                            ".carousel-item-next, .carousel-item-prev",
                            this._element
                        ) && (p(this._element), this.cycle(!0)),
                        clearInterval(this._interval),
                        (this._interval = null);
                }),
                (n.cycle = function (t) {
                    t || (this._isPaused = !1),
                        this._interval &&
                            (clearInterval(this._interval),
                            (this._interval = null)),
                        this._config &&
                            this._config.interval &&
                            !this._isPaused &&
                            (this._updateInterval(),
                            (this._interval = setInterval(
                                (document.visibilityState
                                    ? this.nextWhenVisible
                                    : this.next
                                ).bind(this),
                                this._config.interval
                            )));
                }),
                (n.to = function (t) {
                    var e = this;
                    this._activeElement = Q(
                        ".active.carousel-item",
                        this._element
                    );
                    var n = this._getItemIndex(this._activeElement);
                    if (!(t > this._items.length - 1 || t < 0))
                        if (this._isSliding)
                            K.one(
                                this._element,
                                "slid.bs.carousel",
                                function () {
                                    return e.to(t);
                                }
                            );
                        else {
                            if (n === t) return this.pause(), void this.cycle();
                            var i = t > n ? "next" : "prev";
                            this._slide(i, this._items[t]);
                        }
                }),
                (n.dispose = function () {
                    t.prototype.dispose.call(this),
                        K.off(this._element, ".bs.carousel"),
                        (this._items = null),
                        (this._config = null),
                        (this._interval = null),
                        (this._isPaused = null),
                        (this._isSliding = null),
                        (this._activeElement = null),
                        (this._indicatorsElement = null);
                }),
                (n._getConfig = function (t) {
                    return (t = s({}, G, t)), _("carousel", t, Z), t;
                }),
                (n._handleSwipe = function () {
                    var t = Math.abs(this.touchDeltaX);
                    if (!(t <= 40)) {
                        var e = t / this.touchDeltaX;
                        (this.touchDeltaX = 0),
                            e > 0 && (E ? this.next() : this.prev()),
                            e < 0 && (E ? this.prev() : this.next());
                    }
                }),
                (n._addEventListeners = function () {
                    var t = this;
                    this._config.keyboard &&
                        K.on(
                            this._element,
                            "keydown.bs.carousel",
                            function (e) {
                                return t._keydown(e);
                            }
                        ),
                        "hover" === this._config.pause &&
                            (K.on(
                                this._element,
                                "mouseenter.bs.carousel",
                                function (e) {
                                    return t.pause(e);
                                }
                            ),
                            K.on(
                                this._element,
                                "mouseleave.bs.carousel",
                                function (e) {
                                    return t.cycle(e);
                                }
                            )),
                        this._config.touch &&
                            this._touchSupported &&
                            this._addTouchEventListeners();
                }),
                (n._addTouchEventListeners = function () {
                    var t = this,
                        e = function (e) {
                            !t._pointerEvent ||
                            ("pen" !== e.pointerType &&
                                "touch" !== e.pointerType)
                                ? t._pointerEvent ||
                                  (t.touchStartX = e.touches[0].clientX)
                                : (t.touchStartX = e.clientX);
                        },
                        n = function (e) {
                            !t._pointerEvent ||
                                ("pen" !== e.pointerType &&
                                    "touch" !== e.pointerType) ||
                                (t.touchDeltaX = e.clientX - t.touchStartX),
                                t._handleSwipe(),
                                "hover" === t._config.pause &&
                                    (t.pause(),
                                    t.touchTimeout &&
                                        clearTimeout(t.touchTimeout),
                                    (t.touchTimeout = setTimeout(function (e) {
                                        return t.cycle(e);
                                    }, 500 + t._config.interval)));
                        };
                    q(".carousel-item img", this._element).forEach(function (
                        t
                    ) {
                        K.on(t, "dragstart.bs.carousel", function (t) {
                            return t.preventDefault();
                        });
                    }),
                        this._pointerEvent
                            ? (K.on(
                                  this._element,
                                  "pointerdown.bs.carousel",
                                  function (t) {
                                      return e(t);
                                  }
                              ),
                              K.on(
                                  this._element,
                                  "pointerup.bs.carousel",
                                  function (t) {
                                      return n(t);
                                  }
                              ),
                              this._element.classList.add("pointer-event"))
                            : (K.on(
                                  this._element,
                                  "touchstart.bs.carousel",
                                  function (t) {
                                      return e(t);
                                  }
                              ),
                              K.on(
                                  this._element,
                                  "touchmove.bs.carousel",
                                  function (e) {
                                      return (function (e) {
                                          e.touches && e.touches.length > 1
                                              ? (t.touchDeltaX = 0)
                                              : (t.touchDeltaX =
                                                    e.touches[0].clientX -
                                                    t.touchStartX);
                                      })(e);
                                  }
                              ),
                              K.on(
                                  this._element,
                                  "touchend.bs.carousel",
                                  function (t) {
                                      return n(t);
                                  }
                              ));
                }),
                (n._keydown = function (t) {
                    /input|textarea/i.test(t.target.tagName) ||
                        ("ArrowLeft" === t.key
                            ? (t.preventDefault(),
                              E ? this.next() : this.prev())
                            : "ArrowRight" === t.key &&
                              (t.preventDefault(),
                              E ? this.prev() : this.next()));
                }),
                (n._getItemIndex = function (t) {
                    return (
                        (this._items =
                            t && t.parentNode
                                ? q(".carousel-item", t.parentNode)
                                : []),
                        this._items.indexOf(t)
                    );
                }),
                (n._getItemByDirection = function (t, e) {
                    var n = "next" === t,
                        i = "prev" === t,
                        o = this._getItemIndex(e),
                        s = this._items.length - 1;
                    if (
                        ((i && 0 === o) || (n && o === s)) &&
                        !this._config.wrap
                    )
                        return e;
                    var r = (o + ("prev" === t ? -1 : 1)) % this._items.length;
                    return -1 === r
                        ? this._items[this._items.length - 1]
                        : this._items[r];
                }),
                (n._triggerSlideEvent = function (t, e) {
                    var n = this._getItemIndex(t),
                        i = this._getItemIndex(
                            Q(".active.carousel-item", this._element)
                        );
                    return K.trigger(this._element, "slide.bs.carousel", {
                        relatedTarget: t,
                        direction: e,
                        from: i,
                        to: n,
                    });
                }),
                (n._setActiveIndicatorElement = function (t) {
                    if (this._indicatorsElement) {
                        var e = Q(".active", this._indicatorsElement);
                        e.classList.remove("active"),
                            e.removeAttribute("aria-current");
                        for (
                            var n = q(
                                    "[data-bs-target]",
                                    this._indicatorsElement
                                ),
                                i = 0;
                            i < n.length;
                            i++
                        )
                            if (
                                Number.parseInt(
                                    n[i].getAttribute("data-bs-slide-to"),
                                    10
                                ) === this._getItemIndex(t)
                            ) {
                                n[i].classList.add("active"),
                                    n[i].setAttribute("aria-current", "true");
                                break;
                            }
                    }
                }),
                (n._updateInterval = function () {
                    var t =
                        this._activeElement ||
                        Q(".active.carousel-item", this._element);
                    if (t) {
                        var e = Number.parseInt(
                            t.getAttribute("data-bs-interval"),
                            10
                        );
                        e
                            ? ((this._config.defaultInterval =
                                  this._config.defaultInterval ||
                                  this._config.interval),
                              (this._config.interval = e))
                            : (this._config.interval =
                                  this._config.defaultInterval ||
                                  this._config.interval);
                    }
                }),
                (n._slide = function (t, e) {
                    var n = this,
                        i = Q(".active.carousel-item", this._element),
                        o = this._getItemIndex(i),
                        s = e || (i && this._getItemByDirection(t, i)),
                        r = this._getItemIndex(s),
                        a = Boolean(this._interval),
                        l =
                            "next" === t
                                ? "carousel-item-start"
                                : "carousel-item-end",
                        c =
                            "next" === t
                                ? "carousel-item-next"
                                : "carousel-item-prev",
                        u = "next" === t ? "left" : "right";
                    if (s && s.classList.contains("active"))
                        this._isSliding = !1;
                    else if (
                        !this._triggerSlideEvent(s, u).defaultPrevented &&
                        i &&
                        s
                    ) {
                        if (
                            ((this._isSliding = !0),
                            a && this.pause(),
                            this._setActiveIndicatorElement(s),
                            (this._activeElement = s),
                            this._element.classList.contains("slide"))
                        ) {
                            s.classList.add(c),
                                y(s),
                                i.classList.add(l),
                                s.classList.add(l);
                            var h = f(i);
                            K.one(i, "transitionend", function () {
                                s.classList.remove(l, c),
                                    s.classList.add("active"),
                                    i.classList.remove("active", c, l),
                                    (n._isSliding = !1),
                                    setTimeout(function () {
                                        K.trigger(
                                            n._element,
                                            "slid.bs.carousel",
                                            {
                                                relatedTarget: s,
                                                direction: u,
                                                from: o,
                                                to: r,
                                            }
                                        );
                                    }, 0);
                            }),
                                m(i, h);
                        } else
                            i.classList.remove("active"),
                                s.classList.add("active"),
                                (this._isSliding = !1),
                                K.trigger(this._element, "slid.bs.carousel", {
                                    relatedTarget: s,
                                    direction: u,
                                    from: o,
                                    to: r,
                                });
                        a && this.cycle();
                    }
                }),
                (e.carouselInterface = function (t, n) {
                    var i = L(t, "bs.carousel"),
                        o = s({}, G, X.getDataAttributes(t));
                    "object" == typeof n && (o = s({}, o, n));
                    var r = "string" == typeof n ? n : o.slide;
                    if ((i || (i = new e(t, o)), "number" == typeof n)) i.to(n);
                    else if ("string" == typeof r) {
                        if (void 0 === i[r])
                            throw new TypeError('No method named "' + r + '"');
                        i[r]();
                    } else o.interval && o.ride && (i.pause(), i.cycle());
                }),
                (e.jQueryInterface = function (t) {
                    return this.each(function () {
                        e.carouselInterface(this, t);
                    });
                }),
                (e.dataApiClickHandler = function (t) {
                    var n = d(this);
                    if (n && n.classList.contains("carousel")) {
                        var i = s(
                                {},
                                X.getDataAttributes(n),
                                X.getDataAttributes(this)
                            ),
                            o = this.getAttribute("data-bs-slide-to");
                        o && (i.interval = !1),
                            e.carouselInterface(n, i),
                            o && L(n, "bs.carousel").to(o),
                            t.preventDefault();
                    }
                }),
                o(e, null, [
                    {
                        key: "Default",
                        get: function () {
                            return G;
                        },
                    },
                    {
                        key: "DATA_KEY",
                        get: function () {
                            return "bs.carousel";
                        },
                    },
                ]),
                e
            );
        })(W);
    K.on(
        document,
        "click.bs.carousel.data-api",
        "[data-bs-slide], [data-bs-slide-to]",
        J.dataApiClickHandler
    ),
        K.on(window, "load.bs.carousel.data-api", function () {
            for (
                var t = q('[data-bs-ride="carousel"]'), e = 0, n = t.length;
                e < n;
                e++
            )
                J.carouselInterface(t[e], L(t[e], "bs.carousel"));
        }),
        T("carousel", J);
    var tt = { toggle: !0, parent: "" },
        et = { toggle: "boolean", parent: "(string|element)" },
        nt = (function (t) {
            function e(e, n) {
                var i;
                ((i = t.call(this, e) || this)._isTransitioning = !1),
                    (i._config = i._getConfig(n)),
                    (i._triggerArray = q(
                        '[data-bs-toggle="collapse"][href="#' +
                            e.id +
                            '"],[data-bs-toggle="collapse"][data-bs-target="#' +
                            e.id +
                            '"]'
                    ));
                for (
                    var o = q('[data-bs-toggle="collapse"]'),
                        s = 0,
                        r = o.length;
                    s < r;
                    s++
                ) {
                    var a = o[s],
                        l = h(a),
                        c = q(l).filter(function (t) {
                            return t === e;
                        });
                    null !== l &&
                        c.length &&
                        ((i._selector = l), i._triggerArray.push(a));
                }
                return (
                    (i._parent = i._config.parent ? i._getParent() : null),
                    i._config.parent ||
                        i._addAriaAndCollapsedClass(
                            i._element,
                            i._triggerArray
                        ),
                    i._config.toggle && i.toggle(),
                    i
                );
            }
            r(e, t);
            var n = e.prototype;
            return (
                (n.toggle = function () {
                    this._element.classList.contains("show")
                        ? this.hide()
                        : this.show();
                }),
                (n.show = function () {
                    var t = this;
                    if (
                        !this._isTransitioning &&
                        !this._element.classList.contains("show")
                    ) {
                        var n, i;
                        this._parent &&
                            0 ===
                                (n = q(
                                    ".show, .collapsing",
                                    this._parent
                                ).filter(function (e) {
                                    return "string" == typeof t._config.parent
                                        ? e.getAttribute("data-bs-parent") ===
                                              t._config.parent
                                        : e.classList.contains("collapse");
                                })).length &&
                            (n = null);
                        var o = Q(this._selector);
                        if (n) {
                            var s = n.find(function (t) {
                                return o !== t;
                            });
                            if (
                                (i = s ? L(s, "bs.collapse") : null) &&
                                i._isTransitioning
                            )
                                return;
                        }
                        if (
                            !K.trigger(this._element, "show.bs.collapse")
                                .defaultPrevented
                        ) {
                            n &&
                                n.forEach(function (t) {
                                    o !== t && e.collapseInterface(t, "hide"),
                                        i || k(t, "bs.collapse", null);
                                });
                            var r = this._getDimension();
                            this._element.classList.remove("collapse"),
                                this._element.classList.add("collapsing"),
                                (this._element.style[r] = 0),
                                this._triggerArray.length &&
                                    this._triggerArray.forEach(function (t) {
                                        t.classList.remove("collapsed"),
                                            t.setAttribute("aria-expanded", !0);
                                    }),
                                this.setTransitioning(!0);
                            var a =
                                    "scroll" +
                                    (r[0].toUpperCase() + r.slice(1)),
                                l = f(this._element);
                            K.one(this._element, "transitionend", function () {
                                t._element.classList.remove("collapsing"),
                                    t._element.classList.add(
                                        "collapse",
                                        "show"
                                    ),
                                    (t._element.style[r] = ""),
                                    t.setTransitioning(!1),
                                    K.trigger(t._element, "shown.bs.collapse");
                            }),
                                m(this._element, l),
                                (this._element.style[r] =
                                    this._element[a] + "px");
                        }
                    }
                }),
                (n.hide = function () {
                    var t = this;
                    if (
                        !this._isTransitioning &&
                        this._element.classList.contains("show") &&
                        !K.trigger(this._element, "hide.bs.collapse")
                            .defaultPrevented
                    ) {
                        var e = this._getDimension();
                        (this._element.style[e] =
                            this._element.getBoundingClientRect()[e] + "px"),
                            y(this._element),
                            this._element.classList.add("collapsing"),
                            this._element.classList.remove("collapse", "show");
                        var n = this._triggerArray.length;
                        if (n > 0)
                            for (var i = 0; i < n; i++) {
                                var o = this._triggerArray[i],
                                    s = d(o);
                                s &&
                                    !s.classList.contains("show") &&
                                    (o.classList.add("collapsed"),
                                    o.setAttribute("aria-expanded", !1));
                            }
                        this.setTransitioning(!0),
                            (this._element.style[e] = "");
                        var r = f(this._element);
                        K.one(this._element, "transitionend", function () {
                            t.setTransitioning(!1),
                                t._element.classList.remove("collapsing"),
                                t._element.classList.add("collapse"),
                                K.trigger(t._element, "hidden.bs.collapse");
                        }),
                            m(this._element, r);
                    }
                }),
                (n.setTransitioning = function (t) {
                    this._isTransitioning = t;
                }),
                (n.dispose = function () {
                    t.prototype.dispose.call(this),
                        (this._config = null),
                        (this._parent = null),
                        (this._triggerArray = null),
                        (this._isTransitioning = null);
                }),
                (n._getConfig = function (t) {
                    return (
                        ((t = s({}, tt, t)).toggle = Boolean(t.toggle)),
                        _("collapse", t, et),
                        t
                    );
                }),
                (n._getDimension = function () {
                    return this._element.classList.contains("width")
                        ? "width"
                        : "height";
                }),
                (n._getParent = function () {
                    var t = this,
                        e = this._config.parent;
                    return (
                        g(e)
                            ? (void 0 === e.jquery && void 0 === e[0]) ||
                              (e = e[0])
                            : (e = Q(e)),
                        q(
                            '[data-bs-toggle="collapse"][data-bs-parent="' +
                                e +
                                '"]',
                            e
                        ).forEach(function (e) {
                            var n = d(e);
                            t._addAriaAndCollapsedClass(n, [e]);
                        }),
                        e
                    );
                }),
                (n._addAriaAndCollapsedClass = function (t, e) {
                    if (t && e.length) {
                        var n = t.classList.contains("show");
                        e.forEach(function (t) {
                            n
                                ? t.classList.remove("collapsed")
                                : t.classList.add("collapsed"),
                                t.setAttribute("aria-expanded", n);
                        });
                    }
                }),
                (e.collapseInterface = function (t, n) {
                    var i = L(t, "bs.collapse"),
                        o = s(
                            {},
                            tt,
                            X.getDataAttributes(t),
                            "object" == typeof n && n ? n : {}
                        );
                    if (
                        (!i &&
                            o.toggle &&
                            "string" == typeof n &&
                            /show|hide/.test(n) &&
                            (o.toggle = !1),
                        i || (i = new e(t, o)),
                        "string" == typeof n)
                    ) {
                        if (void 0 === i[n])
                            throw new TypeError('No method named "' + n + '"');
                        i[n]();
                    }
                }),
                (e.jQueryInterface = function (t) {
                    return this.each(function () {
                        e.collapseInterface(this, t);
                    });
                }),
                o(e, null, [
                    {
                        key: "Default",
                        get: function () {
                            return tt;
                        },
                    },
                    {
                        key: "DATA_KEY",
                        get: function () {
                            return "bs.collapse";
                        },
                    },
                ]),
                e
            );
        })(W);
    K.on(
        document,
        "click.bs.collapse.data-api",
        '[data-bs-toggle="collapse"]',
        function (t) {
            ("A" === t.target.tagName ||
                (t.delegateTarget && "A" === t.delegateTarget.tagName)) &&
                t.preventDefault();
            var e = X.getDataAttributes(this),
                n = h(this);
            q(n).forEach(function (t) {
                var n,
                    i = L(t, "bs.collapse");
                i
                    ? (null === i._parent &&
                          "string" == typeof e.parent &&
                          ((i._config.parent = e.parent),
                          (i._parent = i._getParent())),
                      (n = "toggle"))
                    : (n = e),
                    nt.collapseInterface(t, n);
            });
        }
    ),
        T("collapse", nt);
    var it = new RegExp("ArrowUp|ArrowDown|Escape"),
        ot = E ? "top-end" : "top-start",
        st = E ? "top-start" : "top-end",
        rt = E ? "bottom-end" : "bottom-start",
        at = E ? "bottom-start" : "bottom-end",
        lt = E ? "left-start" : "right-start",
        ct = E ? "right-start" : "left-start",
        ut = {
            offset: [0, 2],
            flip: !0,
            boundary: "clippingParents",
            reference: "toggle",
            display: "dynamic",
            popperConfig: null,
        },
        ht = {
            offset: "(array|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element|object)",
            display: "string",
            popperConfig: "(null|object|function)",
        },
        dt = (function (e) {
            function i(t, n) {
                var i;
                return (
                    ((i = e.call(this, t) || this)._popper = null),
                    (i._config = i._getConfig(n)),
                    (i._menu = i._getMenuElement()),
                    (i._inNavbar = i._detectNavbar()),
                    i._addEventListeners(),
                    i
                );
            }
            r(i, e);
            var a = i.prototype;
            return (
                (a.toggle = function () {
                    if (
                        !this._element.disabled &&
                        !this._element.classList.contains("disabled")
                    ) {
                        var t = this._element.classList.contains("show");
                        i.clearMenus(), t || this.show();
                    }
                }),
                (a.show = function () {
                    if (
                        !(
                            this._element.disabled ||
                            this._element.classList.contains("disabled") ||
                            this._menu.classList.contains("show")
                        )
                    ) {
                        var e = i.getParentFromElement(this._element),
                            o = { relatedTarget: this._element };
                        if (
                            !K.trigger(this._element, "show.bs.dropdown", o)
                                .defaultPrevented
                        ) {
                            if (this._inNavbar)
                                X.setDataAttribute(
                                    this._menu,
                                    "popper",
                                    "none"
                                );
                            else {
                                if (void 0 === n)
                                    throw new TypeError(
                                        "Bootstrap's dropdowns require Popper (https://popper.js.org)"
                                    );
                                var s = this._element;
                                "parent" === this._config.reference
                                    ? (s = e)
                                    : g(this._config.reference)
                                    ? ((s = this._config.reference),
                                      void 0 !==
                                          this._config.reference.jquery &&
                                          (s = this._config.reference[0]))
                                    : "object" ==
                                          typeof this._config.reference &&
                                      (s = this._config.reference);
                                var r = this._getPopperConfig(),
                                    a = r.modifiers.find(function (t) {
                                        return (
                                            "applyStyles" === t.name &&
                                            !1 === t.enabled
                                        );
                                    });
                                (this._popper = t.createPopper(
                                    s,
                                    this._menu,
                                    r
                                )),
                                    a &&
                                        X.setDataAttribute(
                                            this._menu,
                                            "popper",
                                            "static"
                                        );
                            }
                            var l;
                            "ontouchstart" in document.documentElement &&
                                !e.closest(".navbar-nav") &&
                                (l = []).concat
                                    .apply(l, document.body.children)
                                    .forEach(function (t) {
                                        return K.on(
                                            t,
                                            "mouseover",
                                            null,
                                            function () {}
                                        );
                                    }),
                                this._element.focus(),
                                this._element.setAttribute("aria-expanded", !0),
                                this._menu.classList.toggle("show"),
                                this._element.classList.toggle("show"),
                                K.trigger(
                                    this._element,
                                    "shown.bs.dropdown",
                                    o
                                );
                        }
                    }
                }),
                (a.hide = function () {
                    if (
                        !this._element.disabled &&
                        !this._element.classList.contains("disabled") &&
                        this._menu.classList.contains("show")
                    ) {
                        var t = { relatedTarget: this._element };
                        K.trigger(this._element, "hide.bs.dropdown", t)
                            .defaultPrevented ||
                            (this._popper && this._popper.destroy(),
                            this._menu.classList.toggle("show"),
                            this._element.classList.toggle("show"),
                            X.removeDataAttribute(this._menu, "popper"),
                            K.trigger(this._element, "hidden.bs.dropdown", t));
                    }
                }),
                (a.dispose = function () {
                    e.prototype.dispose.call(this),
                        K.off(this._element, ".bs.dropdown"),
                        (this._menu = null),
                        this._popper &&
                            (this._popper.destroy(), (this._popper = null));
                }),
                (a.update = function () {
                    (this._inNavbar = this._detectNavbar()),
                        this._popper && this._popper.update();
                }),
                (a._addEventListeners = function () {
                    var t = this;
                    K.on(this._element, "click.bs.dropdown", function (e) {
                        e.preventDefault(), e.stopPropagation(), t.toggle();
                    });
                }),
                (a._getConfig = function (t) {
                    if (
                        ((t = s(
                            {},
                            this.constructor.Default,
                            X.getDataAttributes(this._element),
                            t
                        )),
                        _("dropdown", t, this.constructor.DefaultType),
                        "object" == typeof t.reference &&
                            !g(t.reference) &&
                            "function" !=
                                typeof t.reference.getBoundingClientRect)
                    )
                        throw new TypeError(
                            "dropdown".toUpperCase() +
                                ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.'
                        );
                    return t;
                }),
                (a._getMenuElement = function () {
                    return (function (t, e) {
                        for (var n = t.nextElementSibling; n; ) {
                            if (n.matches(e)) return [n];
                            n = n.nextElementSibling;
                        }
                        return [];
                    })(this._element, ".dropdown-menu")[0];
                }),
                (a._getPlacement = function () {
                    var t = this._element.parentNode;
                    if (t.classList.contains("dropend")) return lt;
                    if (t.classList.contains("dropstart")) return ct;
                    var e =
                        "end" ===
                        getComputedStyle(this._menu)
                            .getPropertyValue("--bs-position")
                            .trim();
                    return t.classList.contains("dropup")
                        ? e
                            ? st
                            : ot
                        : e
                        ? at
                        : rt;
                }),
                (a._detectNavbar = function () {
                    return null !== this._element.closest(".navbar");
                }),
                (a._getOffset = function () {
                    var t = this,
                        e = this._config.offset;
                    return "string" == typeof e
                        ? e.split(",").map(function (t) {
                              return Number.parseInt(t, 10);
                          })
                        : "function" == typeof e
                        ? function (n) {
                              return e(n, t._element);
                          }
                        : e;
                }),
                (a._getPopperConfig = function () {
                    var t = {
                        placement: this._getPlacement(),
                        modifiers: [
                            {
                                name: "preventOverflow",
                                options: {
                                    altBoundary: this._config.flip,
                                    boundary: this._config.boundary,
                                },
                            },
                            {
                                name: "offset",
                                options: { offset: this._getOffset() },
                            },
                        ],
                    };
                    return (
                        "static" === this._config.display &&
                            (t.modifiers = [
                                { name: "applyStyles", enabled: !1 },
                            ]),
                        s(
                            {},
                            t,
                            "function" == typeof this._config.popperConfig
                                ? this._config.popperConfig(t)
                                : this._config.popperConfig
                        )
                    );
                }),
                (i.dropdownInterface = function (t, e) {
                    var n = L(t, "bs.dropdown");
                    if (
                        (n || (n = new i(t, "object" == typeof e ? e : null)),
                        "string" == typeof e)
                    ) {
                        if (void 0 === n[e])
                            throw new TypeError('No method named "' + e + '"');
                        n[e]();
                    }
                }),
                (i.jQueryInterface = function (t) {
                    return this.each(function () {
                        i.dropdownInterface(this, t);
                    });
                }),
                (i.clearMenus = function (t) {
                    if (
                        !t ||
                        (2 !== t.button &&
                            ("keyup" !== t.type || "Tab" === t.key))
                    )
                        for (
                            var e = q('[data-bs-toggle="dropdown"]'),
                                n = 0,
                                i = e.length;
                            n < i;
                            n++
                        ) {
                            var o = L(e[n], "bs.dropdown"),
                                s = { relatedTarget: e[n] };
                            if (
                                (t && "click" === t.type && (s.clickEvent = t),
                                o)
                            ) {
                                var r,
                                    a = o._menu;
                                if (
                                    e[n].classList.contains("show") &&
                                    !(
                                        (t &&
                                            (("click" === t.type &&
                                                /input|textarea/i.test(
                                                    t.target.tagName
                                                )) ||
                                                ("keyup" === t.type &&
                                                    "Tab" === t.key)) &&
                                            a.contains(t.target)) ||
                                        K.trigger(e[n], "hide.bs.dropdown", s)
                                            .defaultPrevented
                                    )
                                )
                                    "ontouchstart" in
                                        document.documentElement &&
                                        (r = []).concat
                                            .apply(r, document.body.children)
                                            .forEach(function (t) {
                                                return K.off(
                                                    t,
                                                    "mouseover",
                                                    null,
                                                    function () {}
                                                );
                                            }),
                                        e[n].setAttribute(
                                            "aria-expanded",
                                            "false"
                                        ),
                                        o._popper && o._popper.destroy(),
                                        a.classList.remove("show"),
                                        e[n].classList.remove("show"),
                                        X.removeDataAttribute(a, "popper"),
                                        K.trigger(
                                            e[n],
                                            "hidden.bs.dropdown",
                                            s
                                        );
                            }
                        }
                }),
                (i.getParentFromElement = function (t) {
                    return d(t) || t.parentNode;
                }),
                (i.dataApiKeydownHandler = function (t) {
                    if (
                        !(/input|textarea/i.test(t.target.tagName)
                            ? "Space" === t.key ||
                              ("Escape" !== t.key &&
                                  (("ArrowDown" !== t.key &&
                                      "ArrowUp" !== t.key) ||
                                      t.target.closest(".dropdown-menu")))
                            : !it.test(t.key)) &&
                        (t.preventDefault(),
                        t.stopPropagation(),
                        !this.disabled && !this.classList.contains("disabled"))
                    ) {
                        var e = i.getParentFromElement(this),
                            n = this.classList.contains("show");
                        if ("Escape" === t.key)
                            return (
                                (this.matches('[data-bs-toggle="dropdown"]')
                                    ? this
                                    : $(this, '[data-bs-toggle="dropdown"]')[0]
                                ).focus(),
                                void i.clearMenus()
                            );
                        if (n || ("ArrowUp" !== t.key && "ArrowDown" !== t.key))
                            if (n && "Space" !== t.key) {
                                var o = q(
                                    ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
                                    e
                                ).filter(v);
                                if (o.length) {
                                    var s = o.indexOf(t.target);
                                    "ArrowUp" === t.key && s > 0 && s--,
                                        "ArrowDown" === t.key &&
                                            s < o.length - 1 &&
                                            s++,
                                        o[(s = -1 === s ? 0 : s)].focus();
                                }
                            } else i.clearMenus();
                        else
                            (this.matches('[data-bs-toggle="dropdown"]')
                                ? this
                                : $(this, '[data-bs-toggle="dropdown"]')[0]
                            ).click();
                    }
                }),
                o(i, null, [
                    {
                        key: "Default",
                        get: function () {
                            return ut;
                        },
                    },
                    {
                        key: "DefaultType",
                        get: function () {
                            return ht;
                        },
                    },
                    {
                        key: "DATA_KEY",
                        get: function () {
                            return "bs.dropdown";
                        },
                    },
                ]),
                i
            );
        })(W);
    K.on(
        document,
        "keydown.bs.dropdown.data-api",
        '[data-bs-toggle="dropdown"]',
        dt.dataApiKeydownHandler
    ),
        K.on(
            document,
            "keydown.bs.dropdown.data-api",
            ".dropdown-menu",
            dt.dataApiKeydownHandler
        ),
        K.on(document, "click.bs.dropdown.data-api", dt.clearMenus),
        K.on(document, "keyup.bs.dropdown.data-api", dt.clearMenus),
        K.on(
            document,
            "click.bs.dropdown.data-api",
            '[data-bs-toggle="dropdown"]',
            function (t) {
                t.preventDefault(),
                    t.stopPropagation(),
                    dt.dropdownInterface(this, "toggle");
            }
        ),
        K.on(
            document,
            "click.bs.dropdown.data-api",
            ".dropdown form",
            function (t) {
                return t.stopPropagation();
            }
        ),
        T("dropdown", dt);
    var ft = { backdrop: !0, keyboard: !0, focus: !0 },
        pt = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
        },
        gt = (function (t) {
            function e(e, n) {
                var i;
                return (
                    ((i = t.call(this, e) || this)._config = i._getConfig(n)),
                    (i._dialog = Q(".modal-dialog", e)),
                    (i._backdrop = null),
                    (i._isShown = !1),
                    (i._isBodyOverflowing = !1),
                    (i._ignoreBackdropClick = !1),
                    (i._isTransitioning = !1),
                    (i._scrollbarWidth = 0),
                    i
                );
            }
            r(e, t);
            var n = e.prototype;
            return (
                (n.toggle = function (t) {
                    return this._isShown ? this.hide() : this.show(t);
                }),
                (n.show = function (t) {
                    var e = this;
                    if (!this._isShown && !this._isTransitioning) {
                        this._element.classList.contains("fade") &&
                            (this._isTransitioning = !0);
                        var n = K.trigger(this._element, "show.bs.modal", {
                            relatedTarget: t,
                        });
                        this._isShown ||
                            n.defaultPrevented ||
                            ((this._isShown = !0),
                            this._checkScrollbar(),
                            this._setScrollbar(),
                            this._adjustDialog(),
                            this._setEscapeEvent(),
                            this._setResizeEvent(),
                            K.on(
                                this._element,
                                "click.dismiss.bs.modal",
                                '[data-bs-dismiss="modal"]',
                                function (t) {
                                    return e.hide(t);
                                }
                            ),
                            K.on(
                                this._dialog,
                                "mousedown.dismiss.bs.modal",
                                function () {
                                    K.one(
                                        e._element,
                                        "mouseup.dismiss.bs.modal",
                                        function (t) {
                                            t.target === e._element &&
                                                (e._ignoreBackdropClick = !0);
                                        }
                                    );
                                }
                            ),
                            this._showBackdrop(function () {
                                return e._showElement(t);
                            }));
                    }
                }),
                (n.hide = function (t) {
                    var e = this;
                    if (
                        (t && t.preventDefault(),
                        this._isShown &&
                            !this._isTransitioning &&
                            !K.trigger(this._element, "hide.bs.modal")
                                .defaultPrevented)
                    ) {
                        this._isShown = !1;
                        var n = this._element.classList.contains("fade");
                        if (
                            (n && (this._isTransitioning = !0),
                            this._setEscapeEvent(),
                            this._setResizeEvent(),
                            K.off(document, "focusin.bs.modal"),
                            this._element.classList.remove("show"),
                            K.off(this._element, "click.dismiss.bs.modal"),
                            K.off(this._dialog, "mousedown.dismiss.bs.modal"),
                            n)
                        ) {
                            var i = f(this._element);
                            K.one(this._element, "transitionend", function (t) {
                                return e._hideModal(t);
                            }),
                                m(this._element, i);
                        } else this._hideModal();
                    }
                }),
                (n.dispose = function () {
                    [window, this._element, this._dialog].forEach(function (t) {
                        return K.off(t, ".bs.modal");
                    }),
                        t.prototype.dispose.call(this),
                        K.off(document, "focusin.bs.modal"),
                        (this._config = null),
                        (this._dialog = null),
                        (this._backdrop = null),
                        (this._isShown = null),
                        (this._isBodyOverflowing = null),
                        (this._ignoreBackdropClick = null),
                        (this._isTransitioning = null),
                        (this._scrollbarWidth = null);
                }),
                (n.handleUpdate = function () {
                    this._adjustDialog();
                }),
                (n._getConfig = function (t) {
                    return (t = s({}, ft, t)), _("modal", t, pt), t;
                }),
                (n._showElement = function (t) {
                    var e = this,
                        n = this._element.classList.contains("fade"),
                        i = Q(".modal-body", this._dialog);
                    (this._element.parentNode &&
                        this._element.parentNode.nodeType ===
                            Node.ELEMENT_NODE) ||
                        document.body.appendChild(this._element),
                        (this._element.style.display = "block"),
                        this._element.removeAttribute("aria-hidden"),
                        this._element.setAttribute("aria-modal", !0),
                        this._element.setAttribute("role", "dialog"),
                        (this._element.scrollTop = 0),
                        i && (i.scrollTop = 0),
                        n && y(this._element),
                        this._element.classList.add("show"),
                        this._config.focus && this._enforceFocus();
                    var o = function () {
                        e._config.focus && e._element.focus(),
                            (e._isTransitioning = !1),
                            K.trigger(e._element, "shown.bs.modal", {
                                relatedTarget: t,
                            });
                    };
                    if (n) {
                        var s = f(this._dialog);
                        K.one(this._dialog, "transitionend", o),
                            m(this._dialog, s);
                    } else o();
                }),
                (n._enforceFocus = function () {
                    var t = this;
                    K.off(document, "focusin.bs.modal"),
                        K.on(document, "focusin.bs.modal", function (e) {
                            document === e.target ||
                                t._element === e.target ||
                                t._element.contains(e.target) ||
                                t._element.focus();
                        });
                }),
                (n._setEscapeEvent = function () {
                    var t = this;
                    this._isShown
                        ? K.on(
                              this._element,
                              "keydown.dismiss.bs.modal",
                              function (e) {
                                  t._config.keyboard && "Escape" === e.key
                                      ? (e.preventDefault(), t.hide())
                                      : t._config.keyboard ||
                                        "Escape" !== e.key ||
                                        t._triggerBackdropTransition();
                              }
                          )
                        : K.off(this._element, "keydown.dismiss.bs.modal");
                }),
                (n._setResizeEvent = function () {
                    var t = this;
                    this._isShown
                        ? K.on(window, "resize.bs.modal", function () {
                              return t._adjustDialog();
                          })
                        : K.off(window, "resize.bs.modal");
                }),
                (n._hideModal = function () {
                    var t = this;
                    (this._element.style.display = "none"),
                        this._element.setAttribute("aria-hidden", !0),
                        this._element.removeAttribute("aria-modal"),
                        this._element.removeAttribute("role"),
                        (this._isTransitioning = !1),
                        this._showBackdrop(function () {
                            document.body.classList.remove("modal-open"),
                                t._resetAdjustments(),
                                t._resetScrollbar(),
                                K.trigger(t._element, "hidden.bs.modal");
                        });
                }),
                (n._removeBackdrop = function () {
                    this._backdrop.parentNode.removeChild(this._backdrop),
                        (this._backdrop = null);
                }),
                (n._showBackdrop = function (t) {
                    var e = this,
                        n = this._element.classList.contains("fade")
                            ? "fade"
                            : "";
                    if (this._isShown && this._config.backdrop) {
                        if (
                            ((this._backdrop = document.createElement("div")),
                            (this._backdrop.className = "modal-backdrop"),
                            n && this._backdrop.classList.add(n),
                            document.body.appendChild(this._backdrop),
                            K.on(
                                this._element,
                                "click.dismiss.bs.modal",
                                function (t) {
                                    e._ignoreBackdropClick
                                        ? (e._ignoreBackdropClick = !1)
                                        : t.target === t.currentTarget &&
                                          ("static" === e._config.backdrop
                                              ? e._triggerBackdropTransition()
                                              : e.hide());
                                }
                            ),
                            n && y(this._backdrop),
                            this._backdrop.classList.add("show"),
                            !n)
                        )
                            return void t();
                        var i = f(this._backdrop);
                        K.one(this._backdrop, "transitionend", t),
                            m(this._backdrop, i);
                    } else if (!this._isShown && this._backdrop) {
                        this._backdrop.classList.remove("show");
                        var o = function () {
                            e._removeBackdrop(), t();
                        };
                        if (this._element.classList.contains("fade")) {
                            var s = f(this._backdrop);
                            K.one(this._backdrop, "transitionend", o),
                                m(this._backdrop, s);
                        } else o();
                    } else t();
                }),
                (n._triggerBackdropTransition = function () {
                    var t = this;
                    if (
                        !K.trigger(this._element, "hidePrevented.bs.modal")
                            .defaultPrevented
                    ) {
                        var e =
                            this._element.scrollHeight >
                            document.documentElement.clientHeight;
                        e || (this._element.style.overflowY = "hidden"),
                            this._element.classList.add("modal-static");
                        var n = f(this._dialog);
                        K.off(this._element, "transitionend"),
                            K.one(this._element, "transitionend", function () {
                                t._element.classList.remove("modal-static"),
                                    e ||
                                        (K.one(
                                            t._element,
                                            "transitionend",
                                            function () {
                                                t._element.style.overflowY = "";
                                            }
                                        ),
                                        m(t._element, n));
                            }),
                            m(this._element, n),
                            this._element.focus();
                    }
                }),
                (n._adjustDialog = function () {
                    var t =
                        this._element.scrollHeight >
                        document.documentElement.clientHeight;
                    ((!this._isBodyOverflowing && t && !E) ||
                        (this._isBodyOverflowing && !t && E)) &&
                        (this._element.style.paddingLeft =
                            this._scrollbarWidth + "px"),
                        ((this._isBodyOverflowing && !t && !E) ||
                            (!this._isBodyOverflowing && t && E)) &&
                            (this._element.style.paddingRight =
                                this._scrollbarWidth + "px");
                }),
                (n._resetAdjustments = function () {
                    (this._element.style.paddingLeft = ""),
                        (this._element.style.paddingRight = "");
                }),
                (n._checkScrollbar = function () {
                    var t = document.body.getBoundingClientRect();
                    (this._isBodyOverflowing =
                        Math.round(t.left + t.right) < window.innerWidth),
                        (this._scrollbarWidth = this._getScrollbarWidth());
                }),
                (n._setScrollbar = function () {
                    var t = this;
                    this._isBodyOverflowing &&
                        (this._setElementAttributes(
                            ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                            "paddingRight",
                            function (e) {
                                return e + t._scrollbarWidth;
                            }
                        ),
                        this._setElementAttributes(
                            ".sticky-top",
                            "marginRight",
                            function (e) {
                                return e - t._scrollbarWidth;
                            }
                        ),
                        this._setElementAttributes(
                            "body",
                            "paddingRight",
                            function (e) {
                                return e + t._scrollbarWidth;
                            }
                        )),
                        document.body.classList.add("modal-open");
                }),
                (n._setElementAttributes = function (t, e, n) {
                    q(t).forEach(function (t) {
                        var i = t.style[e],
                            o = window.getComputedStyle(t)[e];
                        X.setDataAttribute(t, e, i),
                            (t.style[e] = n(Number.parseFloat(o)) + "px");
                    });
                }),
                (n._resetScrollbar = function () {
                    this._resetElementAttributes(
                        ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                        "paddingRight"
                    ),
                        this._resetElementAttributes(
                            ".sticky-top",
                            "marginRight"
                        ),
                        this._resetElementAttributes("body", "paddingRight");
                }),
                (n._resetElementAttributes = function (t, e) {
                    q(t).forEach(function (t) {
                        var n = X.getDataAttribute(t, e);
                        void 0 === n && t === document.body
                            ? (t.style[e] = "")
                            : (X.removeDataAttribute(t, e), (t.style[e] = n));
                    });
                }),
                (n._getScrollbarWidth = function () {
                    var t = document.createElement("div");
                    (t.className = "modal-scrollbar-measure"),
                        document.body.appendChild(t);
                    var e = t.getBoundingClientRect().width - t.clientWidth;
                    return document.body.removeChild(t), e;
                }),
                (e.jQueryInterface = function (t, n) {
                    return this.each(function () {
                        var i = L(this, "bs.modal"),
                            o = s(
                                {},
                                ft,
                                X.getDataAttributes(this),
                                "object" == typeof t && t ? t : {}
                            );
                        if ((i || (i = new e(this, o)), "string" == typeof t)) {
                            if (void 0 === i[t])
                                throw new TypeError(
                                    'No method named "' + t + '"'
                                );
                            i[t](n);
                        }
                    });
                }),
                o(e, null, [
                    {
                        key: "Default",
                        get: function () {
                            return ft;
                        },
                    },
                    {
                        key: "DATA_KEY",
                        get: function () {
                            return "bs.modal";
                        },
                    },
                ]),
                e
            );
        })(W);
    K.on(
        document,
        "click.bs.modal.data-api",
        '[data-bs-toggle="modal"]',
        function (t) {
            var e = this,
                n = d(this);
            ("A" !== this.tagName && "AREA" !== this.tagName) ||
                t.preventDefault(),
                K.one(n, "show.bs.modal", function (t) {
                    t.defaultPrevented ||
                        K.one(n, "hidden.bs.modal", function () {
                            v(e) && e.focus();
                        });
                });
            var i = L(n, "bs.modal");
            if (!i) {
                var o = s(
                    {},
                    X.getDataAttributes(n),
                    X.getDataAttributes(this)
                );
                i = new gt(n, o);
            }
            i.toggle(this);
        }
    ),
        T("modal", gt);
    var mt = new Set([
            "background",
            "cite",
            "href",
            "itemtype",
            "longdesc",
            "poster",
            "src",
            "xlink:href",
        ]),
        _t = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
        vt =
            /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
    function bt(t, e, n) {
        var i;
        if (!t.length) return t;
        if (n && "function" == typeof n) return n(t);
        for (
            var o = new window.DOMParser().parseFromString(t, "text/html"),
                s = Object.keys(e),
                r = (i = []).concat.apply(i, o.body.querySelectorAll("*")),
                a = function (t, n) {
                    var i,
                        o = r[t],
                        a = o.nodeName.toLowerCase();
                    if (!s.includes(a))
                        return o.parentNode.removeChild(o), "continue";
                    var l = (i = []).concat.apply(i, o.attributes),
                        c = [].concat(e["*"] || [], e[a] || []);
                    l.forEach(function (t) {
                        (function (t, e) {
                            var n = t.nodeName.toLowerCase();
                            if (e.includes(n))
                                return (
                                    !mt.has(n) ||
                                    Boolean(
                                        _t.test(t.nodeValue) ||
                                            vt.test(t.nodeValue)
                                    )
                                );
                            for (
                                var i = e.filter(function (t) {
                                        return t instanceof RegExp;
                                    }),
                                    o = 0,
                                    s = i.length;
                                o < s;
                                o++
                            )
                                if (i[o].test(n)) return !0;
                            return !1;
                        })(t, c) || o.removeAttribute(t.nodeName);
                    });
                },
                l = 0,
                c = r.length;
            l < c;
            l++
        )
            a(l);
        return o.body.innerHTML;
    }
    var yt = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
        wt = new Set(["sanitize", "allowList", "sanitizeFn"]),
        Et = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(array|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacements: "array",
            boundary: "(string|element)",
            customClass: "(string|function)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            allowList: "object",
            popperConfig: "(null|object|function)",
        },
        Tt = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: E ? "left" : "right",
            BOTTOM: "bottom",
            LEFT: E ? "right" : "left",
        },
        At = {
            animation: !0,
            template:
                '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: [0, 0],
            container: !1,
            fallbackPlacements: ["top", "right", "bottom", "left"],
            boundary: "clippingParents",
            customClass: "",
            sanitize: !0,
            sanitizeFn: null,
            allowList: {
                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "srcset", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: [],
            },
            popperConfig: null,
        },
        kt = {
            HIDE: "hide.bs.tooltip",
            HIDDEN: "hidden.bs.tooltip",
            SHOW: "show.bs.tooltip",
            SHOWN: "shown.bs.tooltip",
            INSERTED: "inserted.bs.tooltip",
            CLICK: "click.bs.tooltip",
            FOCUSIN: "focusin.bs.tooltip",
            FOCUSOUT: "focusout.bs.tooltip",
            MOUSEENTER: "mouseenter.bs.tooltip",
            MOUSELEAVE: "mouseleave.bs.tooltip",
        },
        Lt = (function (e) {
            function i(t, i) {
                var o;
                if (void 0 === n)
                    throw new TypeError(
                        "Bootstrap's tooltips require Popper (https://popper.js.org)"
                    );
                return (
                    ((o = e.call(this, t) || this)._isEnabled = !0),
                    (o._timeout = 0),
                    (o._hoverState = ""),
                    (o._activeTrigger = {}),
                    (o._popper = null),
                    (o.config = o._getConfig(i)),
                    (o.tip = null),
                    o._setListeners(),
                    o
                );
            }
            r(i, e);
            var a = i.prototype;
            return (
                (a.enable = function () {
                    this._isEnabled = !0;
                }),
                (a.disable = function () {
                    this._isEnabled = !1;
                }),
                (a.toggleEnabled = function () {
                    this._isEnabled = !this._isEnabled;
                }),
                (a.toggle = function (t) {
                    if (this._isEnabled)
                        if (t) {
                            var e = this._initializeOnDelegatedTarget(t);
                            (e._activeTrigger.click = !e._activeTrigger.click),
                                e._isWithActiveTrigger()
                                    ? e._enter(null, e)
                                    : e._leave(null, e);
                        } else {
                            if (this.getTipElement().classList.contains("show"))
                                return void this._leave(null, this);
                            this._enter(null, this);
                        }
                }),
                (a.dispose = function () {
                    clearTimeout(this._timeout),
                        K.off(this._element, this.constructor.EVENT_KEY),
                        K.off(
                            this._element.closest(".modal"),
                            "hide.bs.modal",
                            this._hideModalHandler
                        ),
                        this.tip &&
                            this.tip.parentNode &&
                            this.tip.parentNode.removeChild(this.tip),
                        (this._isEnabled = null),
                        (this._timeout = null),
                        (this._hoverState = null),
                        (this._activeTrigger = null),
                        this._popper && this._popper.destroy(),
                        (this._popper = null),
                        (this.config = null),
                        (this.tip = null),
                        e.prototype.dispose.call(this);
                }),
                (a.show = function () {
                    var e = this;
                    if ("none" === this._element.style.display)
                        throw new Error("Please use show on visible elements");
                    if (this.isWithContent() && this._isEnabled) {
                        var n = K.trigger(
                                this._element,
                                this.constructor.Event.SHOW
                            ),
                            i = (function t(e) {
                                if (!document.documentElement.attachShadow)
                                    return null;
                                if ("function" == typeof e.getRootNode) {
                                    var n = e.getRootNode();
                                    return n instanceof ShadowRoot ? n : null;
                                }
                                return e instanceof ShadowRoot
                                    ? e
                                    : e.parentNode
                                    ? t(e.parentNode)
                                    : null;
                            })(this._element),
                            o =
                                null === i
                                    ? this._element.ownerDocument.documentElement.contains(
                                          this._element
                                      )
                                    : i.contains(this._element);
                        if (!n.defaultPrevented && o) {
                            var s = this.getTipElement(),
                                r = c(this.constructor.NAME);
                            s.setAttribute("id", r),
                                this._element.setAttribute(
                                    "aria-describedby",
                                    r
                                ),
                                this.setContent(),
                                this.config.animation &&
                                    s.classList.add("fade");
                            var a =
                                    "function" == typeof this.config.placement
                                        ? this.config.placement.call(
                                              this,
                                              s,
                                              this._element
                                          )
                                        : this.config.placement,
                                l = this._getAttachment(a);
                            this._addAttachmentClass(l);
                            var u = this._getContainer();
                            k(s, this.constructor.DATA_KEY, this),
                                this._element.ownerDocument.documentElement.contains(
                                    this.tip
                                ) || u.appendChild(s),
                                K.trigger(
                                    this._element,
                                    this.constructor.Event.INSERTED
                                ),
                                (this._popper = t.createPopper(
                                    this._element,
                                    s,
                                    this._getPopperConfig(l)
                                )),
                                s.classList.add("show");
                            var h,
                                d,
                                p =
                                    "function" == typeof this.config.customClass
                                        ? this.config.customClass()
                                        : this.config.customClass;
                            p && (h = s.classList).add.apply(h, p.split(" ")),
                                "ontouchstart" in document.documentElement &&
                                    (d = []).concat
                                        .apply(d, document.body.children)
                                        .forEach(function (t) {
                                            K.on(
                                                t,
                                                "mouseover",
                                                function () {}
                                            );
                                        });
                            var g = function () {
                                var t = e._hoverState;
                                (e._hoverState = null),
                                    K.trigger(
                                        e._element,
                                        e.constructor.Event.SHOWN
                                    ),
                                    "out" === t && e._leave(null, e);
                            };
                            if (this.tip.classList.contains("fade")) {
                                var _ = f(this.tip);
                                K.one(this.tip, "transitionend", g),
                                    m(this.tip, _);
                            } else g();
                        }
                    }
                }),
                (a.hide = function () {
                    var t = this;
                    if (this._popper) {
                        var e = this.getTipElement(),
                            n = function () {
                                "show" !== t._hoverState &&
                                    e.parentNode &&
                                    e.parentNode.removeChild(e),
                                    t._cleanTipClass(),
                                    t._element.removeAttribute(
                                        "aria-describedby"
                                    ),
                                    K.trigger(
                                        t._element,
                                        t.constructor.Event.HIDDEN
                                    ),
                                    t._popper &&
                                        (t._popper.destroy(),
                                        (t._popper = null));
                            };
                        if (
                            !K.trigger(
                                this._element,
                                this.constructor.Event.HIDE
                            ).defaultPrevented
                        ) {
                            var i;
                            if (
                                (e.classList.remove("show"),
                                "ontouchstart" in document.documentElement &&
                                    (i = []).concat
                                        .apply(i, document.body.children)
                                        .forEach(function (t) {
                                            return K.off(t, "mouseover", b);
                                        }),
                                (this._activeTrigger.click = !1),
                                (this._activeTrigger.focus = !1),
                                (this._activeTrigger.hover = !1),
                                this.tip.classList.contains("fade"))
                            ) {
                                var o = f(e);
                                K.one(e, "transitionend", n), m(e, o);
                            } else n();
                            this._hoverState = "";
                        }
                    }
                }),
                (a.update = function () {
                    null !== this._popper && this._popper.update();
                }),
                (a.isWithContent = function () {
                    return Boolean(this.getTitle());
                }),
                (a.getTipElement = function () {
                    if (this.tip) return this.tip;
                    var t = document.createElement("div");
                    return (
                        (t.innerHTML = this.config.template),
                        (this.tip = t.children[0]),
                        this.tip
                    );
                }),
                (a.setContent = function () {
                    var t = this.getTipElement();
                    this.setElementContent(
                        Q(".tooltip-inner", t),
                        this.getTitle()
                    ),
                        t.classList.remove("fade", "show");
                }),
                (a.setElementContent = function (t, e) {
                    if (null !== t)
                        return "object" == typeof e && g(e)
                            ? (e.jquery && (e = e[0]),
                              void (this.config.html
                                  ? e.parentNode !== t &&
                                    ((t.innerHTML = ""), t.appendChild(e))
                                  : (t.textContent = e.textContent)))
                            : void (this.config.html
                                  ? (this.config.sanitize &&
                                        (e = bt(
                                            e,
                                            this.config.allowList,
                                            this.config.sanitizeFn
                                        )),
                                    (t.innerHTML = e))
                                  : (t.textContent = e));
                }),
                (a.getTitle = function () {
                    var t = this._element.getAttribute(
                        "data-bs-original-title"
                    );
                    return (
                        t ||
                            (t =
                                "function" == typeof this.config.title
                                    ? this.config.title.call(this._element)
                                    : this.config.title),
                        t
                    );
                }),
                (a.updateAttachment = function (t) {
                    return "right" === t ? "end" : "left" === t ? "start" : t;
                }),
                (a._initializeOnDelegatedTarget = function (t, e) {
                    var n = this.constructor.DATA_KEY;
                    return (
                        (e = e || L(t.delegateTarget, n)) ||
                            ((e = new this.constructor(
                                t.delegateTarget,
                                this._getDelegateConfig()
                            )),
                            k(t.delegateTarget, n, e)),
                        e
                    );
                }),
                (a._getOffset = function () {
                    var t = this,
                        e = this.config.offset;
                    return "string" == typeof e
                        ? e.split(",").map(function (t) {
                              return Number.parseInt(t, 10);
                          })
                        : "function" == typeof e
                        ? function (n) {
                              return e(n, t._element);
                          }
                        : e;
                }),
                (a._getPopperConfig = function (t) {
                    var e = this,
                        n = {
                            placement: t,
                            modifiers: [
                                {
                                    name: "flip",
                                    options: {
                                        altBoundary: !0,
                                        fallbackPlacements:
                                            this.config.fallbackPlacements,
                                    },
                                },
                                {
                                    name: "offset",
                                    options: { offset: this._getOffset() },
                                },
                                {
                                    name: "preventOverflow",
                                    options: { boundary: this.config.boundary },
                                },
                                {
                                    name: "arrow",
                                    options: {
                                        element:
                                            "." +
                                            this.constructor.NAME +
                                            "-arrow",
                                    },
                                },
                                {
                                    name: "onChange",
                                    enabled: !0,
                                    phase: "afterWrite",
                                    fn: function (t) {
                                        return e._handlePopperPlacementChange(
                                            t
                                        );
                                    },
                                },
                            ],
                            onFirstUpdate: function (t) {
                                t.options.placement !== t.placement &&
                                    e._handlePopperPlacementChange(t);
                            },
                        };
                    return s(
                        {},
                        n,
                        "function" == typeof this.config.popperConfig
                            ? this.config.popperConfig(n)
                            : this.config.popperConfig
                    );
                }),
                (a._addAttachmentClass = function (t) {
                    this.getTipElement().classList.add(
                        "bs-tooltip-" + this.updateAttachment(t)
                    );
                }),
                (a._getContainer = function () {
                    return !1 === this.config.container
                        ? document.body
                        : g(this.config.container)
                        ? this.config.container
                        : Q(this.config.container);
                }),
                (a._getAttachment = function (t) {
                    return Tt[t.toUpperCase()];
                }),
                (a._setListeners = function () {
                    var t = this;
                    this.config.trigger.split(" ").forEach(function (e) {
                        if ("click" === e)
                            K.on(
                                t._element,
                                t.constructor.Event.CLICK,
                                t.config.selector,
                                function (e) {
                                    return t.toggle(e);
                                }
                            );
                        else if ("manual" !== e) {
                            var n =
                                    "hover" === e
                                        ? t.constructor.Event.MOUSEENTER
                                        : t.constructor.Event.FOCUSIN,
                                i =
                                    "hover" === e
                                        ? t.constructor.Event.MOUSELEAVE
                                        : t.constructor.Event.FOCUSOUT;
                            K.on(
                                t._element,
                                n,
                                t.config.selector,
                                function (e) {
                                    return t._enter(e);
                                }
                            ),
                                K.on(
                                    t._element,
                                    i,
                                    t.config.selector,
                                    function (e) {
                                        return t._leave(e);
                                    }
                                );
                        }
                    }),
                        (this._hideModalHandler = function () {
                            t._element && t.hide();
                        }),
                        K.on(
                            this._element.closest(".modal"),
                            "hide.bs.modal",
                            this._hideModalHandler
                        ),
                        this.config.selector
                            ? (this.config = s({}, this.config, {
                                  trigger: "manual",
                                  selector: "",
                              }))
                            : this._fixTitle();
                }),
                (a._fixTitle = function () {
                    var t = this._element.getAttribute("title"),
                        e = typeof this._element.getAttribute(
                            "data-bs-original-title"
                        );
                    (t || "string" !== e) &&
                        (this._element.setAttribute(
                            "data-bs-original-title",
                            t || ""
                        ),
                        !t ||
                            this._element.getAttribute("aria-label") ||
                            this._element.textContent ||
                            this._element.setAttribute("aria-label", t),
                        this._element.setAttribute("title", ""));
                }),
                (a._enter = function (t, e) {
                    (e = this._initializeOnDelegatedTarget(t, e)),
                        t &&
                            (e._activeTrigger[
                                "focusin" === t.type ? "focus" : "hover"
                            ] = !0),
                        e.getTipElement().classList.contains("show") ||
                        "show" === e._hoverState
                            ? (e._hoverState = "show")
                            : (clearTimeout(e._timeout),
                              (e._hoverState = "show"),
                              e.config.delay && e.config.delay.show
                                  ? (e._timeout = setTimeout(function () {
                                        "show" === e._hoverState && e.show();
                                    }, e.config.delay.show))
                                  : e.show());
                }),
                (a._leave = function (t, e) {
                    (e = this._initializeOnDelegatedTarget(t, e)),
                        t &&
                            (e._activeTrigger[
                                "focusout" === t.type ? "focus" : "hover"
                            ] = !1),
                        e._isWithActiveTrigger() ||
                            (clearTimeout(e._timeout),
                            (e._hoverState = "out"),
                            e.config.delay && e.config.delay.hide
                                ? (e._timeout = setTimeout(function () {
                                      "out" === e._hoverState && e.hide();
                                  }, e.config.delay.hide))
                                : e.hide());
                }),
                (a._isWithActiveTrigger = function () {
                    for (var t in this._activeTrigger)
                        if (this._activeTrigger[t]) return !0;
                    return !1;
                }),
                (a._getConfig = function (t) {
                    var e = X.getDataAttributes(this._element);
                    return (
                        Object.keys(e).forEach(function (t) {
                            wt.has(t) && delete e[t];
                        }),
                        t &&
                            "object" == typeof t.container &&
                            t.container.jquery &&
                            (t.container = t.container[0]),
                        "number" ==
                            typeof (t = s(
                                {},
                                this.constructor.Default,
                                e,
                                "object" == typeof t && t ? t : {}
                            )).delay &&
                            (t.delay = { show: t.delay, hide: t.delay }),
                        "number" == typeof t.title &&
                            (t.title = t.title.toString()),
                        "number" == typeof t.content &&
                            (t.content = t.content.toString()),
                        _("tooltip", t, this.constructor.DefaultType),
                        t.sanitize &&
                            (t.template = bt(
                                t.template,
                                t.allowList,
                                t.sanitizeFn
                            )),
                        t
                    );
                }),
                (a._getDelegateConfig = function () {
                    var t = {};
                    if (this.config)
                        for (var e in this.config)
                            this.constructor.Default[e] !== this.config[e] &&
                                (t[e] = this.config[e]);
                    return t;
                }),
                (a._cleanTipClass = function () {
                    var t = this.getTipElement(),
                        e = t.getAttribute("class").match(yt);
                    null !== e &&
                        e.length > 0 &&
                        e
                            .map(function (t) {
                                return t.trim();
                            })
                            .forEach(function (e) {
                                return t.classList.remove(e);
                            });
                }),
                (a._handlePopperPlacementChange = function (t) {
                    var e = t.state;
                    e &&
                        ((this.tip = e.elements.popper),
                        this._cleanTipClass(),
                        this._addAttachmentClass(
                            this._getAttachment(e.placement)
                        ));
                }),
                (i.jQueryInterface = function (t) {
                    return this.each(function () {
                        var e = L(this, "bs.tooltip"),
                            n = "object" == typeof t && t;
                        if (
                            (e || !/dispose|hide/.test(t)) &&
                            (e || (e = new i(this, n)), "string" == typeof t)
                        ) {
                            if (void 0 === e[t])
                                throw new TypeError(
                                    'No method named "' + t + '"'
                                );
                            e[t]();
                        }
                    });
                }),
                o(i, null, [
                    {
                        key: "Default",
                        get: function () {
                            return At;
                        },
                    },
                    {
                        key: "NAME",
                        get: function () {
                            return "tooltip";
                        },
                    },
                    {
                        key: "DATA_KEY",
                        get: function () {
                            return "bs.tooltip";
                        },
                    },
                    {
                        key: "Event",
                        get: function () {
                            return kt;
                        },
                    },
                    {
                        key: "EVENT_KEY",
                        get: function () {
                            return ".bs.tooltip";
                        },
                    },
                    {
                        key: "DefaultType",
                        get: function () {
                            return Et;
                        },
                    },
                ]),
                i
            );
        })(W);
    T("tooltip", Lt);
    var Ct = new RegExp("(^|\\s)bs-popover\\S+", "g"),
        Dt = s({}, Lt.Default, {
            placement: "right",
            offset: [0, 8],
            trigger: "click",
            content: "",
            template:
                '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        }),
        St = s({}, Lt.DefaultType, { content: "(string|element|function)" }),
        Nt = {
            HIDE: "hide.bs.popover",
            HIDDEN: "hidden.bs.popover",
            SHOW: "show.bs.popover",
            SHOWN: "shown.bs.popover",
            INSERTED: "inserted.bs.popover",
            CLICK: "click.bs.popover",
            FOCUSIN: "focusin.bs.popover",
            FOCUSOUT: "focusout.bs.popover",
            MOUSEENTER: "mouseenter.bs.popover",
            MOUSELEAVE: "mouseleave.bs.popover",
        },
        Ot = (function (t) {
            function e() {
                return t.apply(this, arguments) || this;
            }
            r(e, t);
            var n = e.prototype;
            return (
                (n.isWithContent = function () {
                    return this.getTitle() || this._getContent();
                }),
                (n.setContent = function () {
                    var t = this.getTipElement();
                    this.setElementContent(
                        Q(".popover-header", t),
                        this.getTitle()
                    );
                    var e = this._getContent();
                    "function" == typeof e && (e = e.call(this._element)),
                        this.setElementContent(Q(".popover-body", t), e),
                        t.classList.remove("fade", "show");
                }),
                (n._addAttachmentClass = function (t) {
                    this.getTipElement().classList.add(
                        "bs-popover-" + this.updateAttachment(t)
                    );
                }),
                (n._getContent = function () {
                    return (
                        this._element.getAttribute("data-bs-content") ||
                        this.config.content
                    );
                }),
                (n._cleanTipClass = function () {
                    var t = this.getTipElement(),
                        e = t.getAttribute("class").match(Ct);
                    null !== e &&
                        e.length > 0 &&
                        e
                            .map(function (t) {
                                return t.trim();
                            })
                            .forEach(function (e) {
                                return t.classList.remove(e);
                            });
                }),
                (e.jQueryInterface = function (t) {
                    return this.each(function () {
                        var n = L(this, "bs.popover"),
                            i = "object" == typeof t ? t : null;
                        if (
                            (n || !/dispose|hide/.test(t)) &&
                            (n ||
                                ((n = new e(this, i)),
                                k(this, "bs.popover", n)),
                            "string" == typeof t)
                        ) {
                            if (void 0 === n[t])
                                throw new TypeError(
                                    'No method named "' + t + '"'
                                );
                            n[t]();
                        }
                    });
                }),
                o(e, null, [
                    {
                        key: "Default",
                        get: function () {
                            return Dt;
                        },
                    },
                    {
                        key: "NAME",
                        get: function () {
                            return "popover";
                        },
                    },
                    {
                        key: "DATA_KEY",
                        get: function () {
                            return "bs.popover";
                        },
                    },
                    {
                        key: "Event",
                        get: function () {
                            return Nt;
                        },
                    },
                    {
                        key: "EVENT_KEY",
                        get: function () {
                            return ".bs.popover";
                        },
                    },
                    {
                        key: "DefaultType",
                        get: function () {
                            return St;
                        },
                    },
                ]),
                e
            );
        })(Lt);
    T("popover", Ot);
    var It = { offset: 10, method: "auto", target: "" },
        jt = { offset: "number", method: "string", target: "(string|element)" },
        Pt = (function (t) {
            function e(e, n) {
                var i;
                return (
                    ((i = t.call(this, e) || this)._scrollElement =
                        "BODY" === e.tagName ? window : e),
                    (i._config = i._getConfig(n)),
                    (i._selector =
                        i._config.target +
                        " .nav-link, " +
                        i._config.target +
                        " .list-group-item, " +
                        i._config.target +
                        " .dropdown-item"),
                    (i._offsets = []),
                    (i._targets = []),
                    (i._activeTarget = null),
                    (i._scrollHeight = 0),
                    K.on(i._scrollElement, "scroll.bs.scrollspy", function () {
                        return i._process();
                    }),
                    i.refresh(),
                    i._process(),
                    i
                );
            }
            r(e, t);
            var n = e.prototype;
            return (
                (n.refresh = function () {
                    var t = this,
                        e =
                            this._scrollElement === this._scrollElement.window
                                ? "offset"
                                : "position",
                        n =
                            "auto" === this._config.method
                                ? e
                                : this._config.method,
                        i = "position" === n ? this._getScrollTop() : 0;
                    (this._offsets = []),
                        (this._targets = []),
                        (this._scrollHeight = this._getScrollHeight()),
                        q(this._selector)
                            .map(function (t) {
                                var e = h(t),
                                    o = e ? Q(e) : null;
                                if (o) {
                                    var s = o.getBoundingClientRect();
                                    if (s.width || s.height)
                                        return [X[n](o).top + i, e];
                                }
                                return null;
                            })
                            .filter(function (t) {
                                return t;
                            })
                            .sort(function (t, e) {
                                return t[0] - e[0];
                            })
                            .forEach(function (e) {
                                t._offsets.push(e[0]), t._targets.push(e[1]);
                            });
                }),
                (n.dispose = function () {
                    t.prototype.dispose.call(this),
                        K.off(this._scrollElement, ".bs.scrollspy"),
                        (this._scrollElement = null),
                        (this._config = null),
                        (this._selector = null),
                        (this._offsets = null),
                        (this._targets = null),
                        (this._activeTarget = null),
                        (this._scrollHeight = null);
                }),
                (n._getConfig = function (t) {
                    if (
                        "string" !=
                            typeof (t = s(
                                {},
                                It,
                                "object" == typeof t && t ? t : {}
                            )).target &&
                        g(t.target)
                    ) {
                        var e = t.target.id;
                        e || ((e = c("scrollspy")), (t.target.id = e)),
                            (t.target = "#" + e);
                    }
                    return _("scrollspy", t, jt), t;
                }),
                (n._getScrollTop = function () {
                    return this._scrollElement === window
                        ? this._scrollElement.pageYOffset
                        : this._scrollElement.scrollTop;
                }),
                (n._getScrollHeight = function () {
                    return (
                        this._scrollElement.scrollHeight ||
                        Math.max(
                            document.body.scrollHeight,
                            document.documentElement.scrollHeight
                        )
                    );
                }),
                (n._getOffsetHeight = function () {
                    return this._scrollElement === window
                        ? window.innerHeight
                        : this._scrollElement.getBoundingClientRect().height;
                }),
                (n._process = function () {
                    var t = this._getScrollTop() + this._config.offset,
                        e = this._getScrollHeight(),
                        n = this._config.offset + e - this._getOffsetHeight();
                    if ((this._scrollHeight !== e && this.refresh(), t >= n)) {
                        var i = this._targets[this._targets.length - 1];
                        this._activeTarget !== i && this._activate(i);
                    } else {
                        if (
                            this._activeTarget &&
                            t < this._offsets[0] &&
                            this._offsets[0] > 0
                        )
                            return (
                                (this._activeTarget = null), void this._clear()
                            );
                        for (var o = this._offsets.length; o--; )
                            this._activeTarget !== this._targets[o] &&
                                t >= this._offsets[o] &&
                                (void 0 === this._offsets[o + 1] ||
                                    t < this._offsets[o + 1]) &&
                                this._activate(this._targets[o]);
                    }
                }),
                (n._activate = function (t) {
                    (this._activeTarget = t), this._clear();
                    var e = this._selector.split(",").map(function (e) {
                            return (
                                e +
                                '[data-bs-target="' +
                                t +
                                '"],' +
                                e +
                                '[href="' +
                                t +
                                '"]'
                            );
                        }),
                        n = Q(e.join(","));
                    n.classList.contains("dropdown-item")
                        ? (Q(
                              ".dropdown-toggle",
                              n.closest(".dropdown")
                          ).classList.add("active"),
                          n.classList.add("active"))
                        : (n.classList.add("active"),
                          (function (t, e) {
                              for (
                                  var n = [], i = t.parentNode;
                                  i &&
                                  i.nodeType === Node.ELEMENT_NODE &&
                                  3 !== i.nodeType;

                              )
                                  i.matches(e) && n.push(i), (i = i.parentNode);
                              return n;
                          })(n, ".nav, .list-group").forEach(function (t) {
                              $(t, ".nav-link, .list-group-item").forEach(
                                  function (t) {
                                      return t.classList.add("active");
                                  }
                              ),
                                  $(t, ".nav-item").forEach(function (t) {
                                      V(t, ".nav-link").forEach(function (t) {
                                          return t.classList.add("active");
                                      });
                                  });
                          })),
                        K.trigger(
                            this._scrollElement,
                            "activate.bs.scrollspy",
                            {
                                relatedTarget: t,
                            }
                        );
                }),
                (n._clear = function () {
                    q(this._selector)
                        .filter(function (t) {
                            return t.classList.contains("active");
                        })
                        .forEach(function (t) {
                            return t.classList.remove("active");
                        });
                }),
                (e.jQueryInterface = function (t) {
                    return this.each(function () {
                        var n = L(this, "bs.scrollspy");
                        if (
                            (n || (n = new e(this, "object" == typeof t && t)),
                            "string" == typeof t)
                        ) {
                            if (void 0 === n[t])
                                throw new TypeError(
                                    'No method named "' + t + '"'
                                );
                            n[t]();
                        }
                    });
                }),
                o(e, null, [
                    {
                        key: "Default",
                        get: function () {
                            return It;
                        },
                    },
                    {
                        key: "DATA_KEY",
                        get: function () {
                            return "bs.scrollspy";
                        },
                    },
                ]),
                e
            );
        })(W);
    K.on(window, "load.bs.scrollspy.data-api", function () {
        q('[data-bs-spy="scroll"]').forEach(function (t) {
            return new Pt(t, X.getDataAttributes(t));
        });
    }),
        T("scrollspy", Pt);
    var xt = (function (t) {
        function e() {
            return t.apply(this, arguments) || this;
        }
        r(e, t);
        var n = e.prototype;
        return (
            (n.show = function () {
                var t = this;
                if (
                    !(
                        (this._element.parentNode &&
                            this._element.parentNode.nodeType ===
                                Node.ELEMENT_NODE &&
                            this._element.classList.contains("active")) ||
                        this._element.classList.contains("disabled")
                    )
                ) {
                    var e,
                        n = d(this._element),
                        i = this._element.closest(".nav, .list-group");
                    if (i) {
                        var o =
                            "UL" === i.nodeName || "OL" === i.nodeName
                                ? ":scope > li > .active"
                                : ".active";
                        e = (e = q(o, i))[e.length - 1];
                    }
                    var s = e
                        ? K.trigger(e, "hide.bs.tab", {
                              relatedTarget: this._element,
                          })
                        : null;
                    if (
                        !(
                            K.trigger(this._element, "show.bs.tab", {
                                relatedTarget: e,
                            }).defaultPrevented ||
                            (null !== s && s.defaultPrevented)
                        )
                    ) {
                        this._activate(this._element, i);
                        var r = function () {
                            K.trigger(e, "hidden.bs.tab", {
                                relatedTarget: t._element,
                            }),
                                K.trigger(t._element, "shown.bs.tab", {
                                    relatedTarget: e,
                                });
                        };
                        n ? this._activate(n, n.parentNode, r) : r();
                    }
                }
            }),
            (n._activate = function (t, e, n) {
                var i = this,
                    o = (
                        !e || ("UL" !== e.nodeName && "OL" !== e.nodeName)
                            ? V(e, ".active")
                            : q(":scope > li > .active", e)
                    )[0],
                    s = n && o && o.classList.contains("fade"),
                    r = function () {
                        return i._transitionComplete(t, o, n);
                    };
                if (o && s) {
                    var a = f(o);
                    o.classList.remove("show"),
                        K.one(o, "transitionend", r),
                        m(o, a);
                } else r();
            }),
            (n._transitionComplete = function (t, e, n) {
                if (e) {
                    e.classList.remove("active");
                    var i = Q(":scope > .dropdown-menu .active", e.parentNode);
                    i && i.classList.remove("active"),
                        "tab" === e.getAttribute("role") &&
                            e.setAttribute("aria-selected", !1);
                }
                t.classList.add("active"),
                    "tab" === t.getAttribute("role") &&
                        t.setAttribute("aria-selected", !0),
                    y(t),
                    t.classList.contains("fade") && t.classList.add("show"),
                    t.parentNode &&
                        t.parentNode.classList.contains("dropdown-menu") &&
                        (t.closest(".dropdown") &&
                            q(".dropdown-toggle").forEach(function (t) {
                                return t.classList.add("active");
                            }),
                        t.setAttribute("aria-expanded", !0)),
                    n && n();
            }),
            (e.jQueryInterface = function (t) {
                return this.each(function () {
                    var n = L(this, "bs.tab") || new e(this);
                    if ("string" == typeof t) {
                        if (void 0 === n[t])
                            throw new TypeError('No method named "' + t + '"');
                        n[t]();
                    }
                });
            }),
            o(e, null, [
                {
                    key: "DATA_KEY",
                    get: function () {
                        return "bs.tab";
                    },
                },
            ]),
            e
        );
    })(W);
    K.on(
        document,
        "click.bs.tab.data-api",
        '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
        function (t) {
            t.preventDefault(), (L(this, "bs.tab") || new xt(this)).show();
        }
    ),
        T("tab", xt);
    var Ht = { animation: "boolean", autohide: "boolean", delay: "number" },
        Bt = { animation: !0, autohide: !0, delay: 5e3 },
        Mt = (function (t) {
            function e(e, n) {
                var i;
                return (
                    ((i = t.call(this, e) || this)._config = i._getConfig(n)),
                    (i._timeout = null),
                    i._setListeners(),
                    i
                );
            }
            r(e, t);
            var n = e.prototype;
            return (
                (n.show = function () {
                    var t = this;
                    if (
                        !K.trigger(this._element, "show.bs.toast")
                            .defaultPrevented
                    ) {
                        this._clearTimeout(),
                            this._config.animation &&
                                this._element.classList.add("fade");
                        var e = function () {
                            t._element.classList.remove("showing"),
                                t._element.classList.add("show"),
                                K.trigger(t._element, "shown.bs.toast"),
                                t._config.autohide &&
                                    (t._timeout = setTimeout(function () {
                                        t.hide();
                                    }, t._config.delay));
                        };
                        if (
                            (this._element.classList.remove("hide"),
                            y(this._element),
                            this._element.classList.add("showing"),
                            this._config.animation)
                        ) {
                            var n = f(this._element);
                            K.one(this._element, "transitionend", e),
                                m(this._element, n);
                        } else e();
                    }
                }),
                (n.hide = function () {
                    var t = this;
                    if (
                        this._element.classList.contains("show") &&
                        !K.trigger(this._element, "hide.bs.toast")
                            .defaultPrevented
                    ) {
                        var e = function () {
                            t._element.classList.add("hide"),
                                K.trigger(t._element, "hidden.bs.toast");
                        };
                        if (
                            (this._element.classList.remove("show"),
                            this._config.animation)
                        ) {
                            var n = f(this._element);
                            K.one(this._element, "transitionend", e),
                                m(this._element, n);
                        } else e();
                    }
                }),
                (n.dispose = function () {
                    this._clearTimeout(),
                        this._element.classList.contains("show") &&
                            this._element.classList.remove("show"),
                        K.off(this._element, "click.dismiss.bs.toast"),
                        t.prototype.dispose.call(this),
                        (this._config = null);
                }),
                (n._getConfig = function (t) {
                    return (
                        (t = s(
                            {},
                            Bt,
                            X.getDataAttributes(this._element),
                            "object" == typeof t && t ? t : {}
                        )),
                        _("toast", t, this.constructor.DefaultType),
                        t
                    );
                }),
                (n._setListeners = function () {
                    var t = this;
                    K.on(
                        this._element,
                        "click.dismiss.bs.toast",
                        '[data-bs-dismiss="toast"]',
                        function () {
                            return t.hide();
                        }
                    );
                }),
                (n._clearTimeout = function () {
                    clearTimeout(this._timeout), (this._timeout = null);
                }),
                (e.jQueryInterface = function (t) {
                    return this.each(function () {
                        var n = L(this, "bs.toast");
                        if (
                            (n || (n = new e(this, "object" == typeof t && t)),
                            "string" == typeof t)
                        ) {
                            if (void 0 === n[t])
                                throw new TypeError(
                                    'No method named "' + t + '"'
                                );
                            n[t](this);
                        }
                    });
                }),
                o(e, null, [
                    {
                        key: "DefaultType",
                        get: function () {
                            return Ht;
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return Bt;
                        },
                    },
                    {
                        key: "DATA_KEY",
                        get: function () {
                            return "bs.toast";
                        },
                    },
                ]),
                e
            );
        })(W);
    return (
        T("toast", Mt),
        {
            Alert: U,
            Button: F,
            Carousel: J,
            Collapse: nt,
            Dropdown: dt,
            Modal: gt,
            Popover: Ot,
            ScrollSpy: Pt,
            Tab: xt,
            Toast: Mt,
            Tooltip: Lt,
        }
    );
});
document.addEventListener(
    "wpcf7submit",
    function (event) {
        console.log(event);
        if (
            "3035" == event.detail.contactFormId &&
            event.detail.status == "mail_sent"
        ) {
            console.log("Отправлено");
            ym(31181436, "reachGoal", "form_submit");
        }
    },
    !1
);
[].forEach.call(document.getElementsByName("tel"), function (input) {
    var keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = "+7 (___) ___-__-__",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function (a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i);
        }
        var reg = matrix
            .substr(0, this.value.length)
            .replace(/_+/g, function (a) {
                return "\\d{1," + a.length + "}";
            })
            .replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (
            !reg.test(this.value) ||
            this.value.length < 5 ||
            (keyCode > 47 && keyCode < 58)
        )
            this.value = new_value;
        if (event.type == "blur" && this.value.length < 5) this.value = "";
    }
    input.addEventListener("input", mask, !1);
    input.addEventListener("focus", mask, !1);
    input.addEventListener("blur", mask, !1);
    input.addEventListener("keydown", mask, !1);
});
var wpcf7 = {
    apiSettings: {
        root: "https://3d-rim.com/wp-json/contact-form-7/v1",
        namespace: "contact-form-7/v1",
    },
    cached: "1",
};
(function ($) {
    "use strict";
    if (typeof wpcf7 === "undefined" || wpcf7 === null) {
        return;
    }
    wpcf7 = $.extend({ cached: 0, inputs: [] }, wpcf7);
    $(function () {
        wpcf7.supportHtml5 = (function () {
            var features = {};
            var input = document.createElement("input");
            features.placeholder = "placeholder" in input;
            var inputTypes = ["email", "url", "tel", "number", "range", "date"];
            $.each(inputTypes, function (index, value) {
                input.setAttribute("type", value);
                features[value] = input.type !== "text";
            });
            return features;
        })();
        $("div.wpcf7 > form").each(function () {
            var $form = $(this);
            wpcf7.initForm($form);
            if (wpcf7.cached) {
                wpcf7.refill($form);
            }
        });
    });
    wpcf7.getId = function (form) {
        return parseInt($('input[name="_wpcf7"]', form).val(), 10);
    };
    wpcf7.initForm = function (form) {
        var $form = $(form);
        $form.submit(function (event) {
            if (!wpcf7.supportHtml5.placeholder) {
                $("[placeholder].placeheld", $form).each(function (i, n) {
                    $(n).val("").removeClass("placeheld");
                });
            }
            if (typeof window.FormData === "function") {
                wpcf7.submit($form);
                event.preventDefault();
            }
        });
        $(".wpcf7-submit", $form).after('<span class="ajax-loader"></span>');
        wpcf7.toggleSubmit($form);
        $form.on("click", ".wpcf7-acceptance", function () {
            wpcf7.toggleSubmit($form);
        });
        $(".wpcf7-exclusive-checkbox", $form).on(
            "click",
            "input:checkbox",
            function () {
                var name = $(this).attr("name");
                $form
                    .find('input:checkbox[name="' + name + '"]')
                    .not(this)
                    .prop("checked", !1);
            }
        );
        $(".wpcf7-list-item.has-free-text", $form).each(function () {
            var $freetext = $(":input.wpcf7-free-text", this);
            var $wrap = $(this).closest(".wpcf7-form-control");
            if ($(":checkbox, :radio", this).is(":checked")) {
                $freetext.prop("disabled", !1);
            } else {
                $freetext.prop("disabled", !0);
            }
            $wrap.on("change", ":checkbox, :radio", function () {
                var $cb = $(".has-free-text", $wrap).find(":checkbox, :radio");
                if ($cb.is(":checked")) {
                    $freetext.prop("disabled", !1).focus();
                } else {
                    $freetext.prop("disabled", !0);
                }
            });
        });
        if (!wpcf7.supportHtml5.placeholder) {
            $("[placeholder]", $form).each(function () {
                $(this).val($(this).attr("placeholder"));
                $(this).addClass("placeheld");
                $(this).focus(function () {
                    if ($(this).hasClass("placeheld")) {
                        $(this).val("").removeClass("placeheld");
                    }
                });
                $(this).blur(function () {
                    if ("" === $(this).val()) {
                        $(this).val($(this).attr("placeholder"));
                        $(this).addClass("placeheld");
                    }
                });
            });
        }
        if (wpcf7.jqueryUi && !wpcf7.supportHtml5.date) {
            $form.find('input.wpcf7-date[type="date"]').each(function () {
                $(this).datepicker({
                    dateFormat: "yy-mm-dd",
                    minDate: new Date($(this).attr("min")),
                    maxDate: new Date($(this).attr("max")),
                });
            });
        }
        if (wpcf7.jqueryUi && !wpcf7.supportHtml5.number) {
            $form.find('input.wpcf7-number[type="number"]').each(function () {
                $(this).spinner({
                    min: $(this).attr("min"),
                    max: $(this).attr("max"),
                    step: $(this).attr("step"),
                });
            });
        }
        $(".wpcf7-character-count", $form).each(function () {
            var $count = $(this);
            var name = $count.attr("data-target-name");
            var down = $count.hasClass("down");
            var starting = parseInt($count.attr("data-starting-value"), 10);
            var maximum = parseInt($count.attr("data-maximum-value"), 10);
            var minimum = parseInt($count.attr("data-minimum-value"), 10);
            var updateCount = function (target) {
                var $target = $(target);
                var length = $target.val().length;
                var count = down ? starting - length : length;
                $count.attr("data-current-value", count);
                $count.text(count);
                if (maximum && maximum < length) {
                    $count.addClass("too-long");
                } else {
                    $count.removeClass("too-long");
                }
                if (minimum && length < minimum) {
                    $count.addClass("too-short");
                } else {
                    $count.removeClass("too-short");
                }
            };
            $(':input[name="' + name + '"]', $form).each(function () {
                updateCount(this);
                $(this).keyup(function () {
                    updateCount(this);
                });
            });
        });
        $form.on("change", ".wpcf7-validates-as-url", function () {
            var val = $.trim($(this).val());
            if (
                val &&
                !val.match(/^[a-z][a-z0-9.+-]*:/i) &&
                -1 !== val.indexOf(".")
            ) {
                val = val.replace(/^\/+/, "");
                val = "http://" + val;
            }
            $(this).val(val);
        });
    };
    wpcf7.submit = function (form) {
        if (typeof window.FormData !== "function") {
            return;
        }
        var $form = $(form);
        $(".ajax-loader", $form).addClass("is-active");
        wpcf7.clearResponse($form);
        var formData = new FormData($form.get(0));
        var detail = {
            id: $form.closest("div.wpcf7").attr("id"),
            status: "init",
            inputs: [],
            formData: formData,
        };
        $.each($form.serializeArray(), function (i, field) {
            if ("_wpcf7" == field.name) {
                detail.contactFormId = field.value;
            } else if ("_wpcf7_version" == field.name) {
                detail.pluginVersion = field.value;
            } else if ("_wpcf7_locale" == field.name) {
                detail.contactFormLocale = field.value;
            } else if ("_wpcf7_unit_tag" == field.name) {
                detail.unitTag = field.value;
            } else if ("_wpcf7_container_post" == field.name) {
                detail.containerPostId = field.value;
            } else if (field.name.match(/^_wpcf7_\w+_free_text_/)) {
                var owner = field.name.replace(/^_wpcf7_\w+_free_text_/, "");
                detail.inputs.push({
                    name: owner + "-free-text",
                    value: field.value,
                });
            } else if (field.name.match(/^_/)) {
            } else {
                detail.inputs.push(field);
            }
        });
        wpcf7.triggerEvent($form.closest("div.wpcf7"), "beforesubmit", detail);
        var ajaxSuccess = function (data, status, xhr, $form) {
            detail.id = $(data.into).attr("id");
            detail.status = data.status;
            detail.apiResponse = data;
            var $message = $(".wpcf7-response-output", $form);
            switch (data.status) {
                case "validation_failed":
                    $.each(data.invalidFields, function (i, n) {
                        $(n.into, $form).each(function () {
                            wpcf7.notValidTip(this, n.message);
                            $(".wpcf7-form-control", this).addClass(
                                "wpcf7-not-valid"
                            );
                            $("[aria-invalid]", this).attr(
                                "aria-invalid",
                                "true"
                            );
                        });
                    });
                    $message.addClass("wpcf7-validation-errors");
                    $form.addClass("invalid");
                    wpcf7.triggerEvent(data.into, "invalid", detail);
                    break;
                case "acceptance_missing":
                    $message.addClass("wpcf7-acceptance-missing");
                    $form.addClass("unaccepted");
                    wpcf7.triggerEvent(data.into, "unaccepted", detail);
                    break;
                case "spam":
                    $message.addClass("wpcf7-spam-blocked");
                    $form.addClass("spam");
                    wpcf7.triggerEvent(data.into, "spam", detail);
                    break;
                case "aborted":
                    $message.addClass("wpcf7-aborted");
                    $form.addClass("aborted");
                    wpcf7.triggerEvent(data.into, "aborted", detail);
                    break;
                case "mail_sent":
                    $message.addClass("wpcf7-mail-sent-ok");
                    $form.addClass("sent");
                    wpcf7.triggerEvent(data.into, "mailsent", detail);
                    break;
                case "mail_failed":
                    $message.addClass("wpcf7-mail-sent-ng");
                    $form.addClass("failed");
                    wpcf7.triggerEvent(data.into, "mailfailed", detail);
                    break;
                default:
                    var customStatusClass =
                        "custom-" + data.status.replace(/[^0-9a-z]+/i, "-");
                    $message.addClass("wpcf7-" + customStatusClass);
                    $form.addClass(customStatusClass);
            }
            wpcf7.refill($form, data);
            wpcf7.triggerEvent(data.into, "submit", detail);
            if ("mail_sent" == data.status) {
                $form.each(function () {
                    this.reset();
                });
                wpcf7.toggleSubmit($form);
            }
            if (!wpcf7.supportHtml5.placeholder) {
                $form.find("[placeholder].placeheld").each(function (i, n) {
                    $(n).val($(n).attr("placeholder"));
                });
            }
            $message.html("").append(data.message).slideDown("fast");
            $message.attr("role", "alert");
            $(".screen-reader-response", $form.closest(".wpcf7")).each(
                function () {
                    var $response = $(this);
                    $response.html("").attr("role", "").append(data.message);
                    if (data.invalidFields) {
                        var $invalids = $("<ul></ul>");
                        $.each(data.invalidFields, function (i, n) {
                            if (n.idref) {
                                var $li = $("<li></li>").append(
                                    $("<a></a>")
                                        .attr("href", "#" + n.idref)
                                        .append(n.message)
                                );
                            } else {
                                var $li = $("<li></li>").append(n.message);
                            }
                            $invalids.append($li);
                        });
                        $response.append($invalids);
                    }
                    $response.attr("role", "alert").focus();
                }
            );
        };
        $.ajax({
            type: "POST",
            url: wpcf7.apiSettings.getRoute(
                "/contact-forms/" + wpcf7.getId($form) + "/feedback"
            ),
            data: formData,
            dataType: "json",
            processData: !1,
            contentType: !1,
        })
            .done(function (data, status, xhr) {
                ajaxSuccess(data, status, xhr, $form);
                $(".ajax-loader", $form).removeClass("is-active");
            })
            .fail(function (xhr, status, error) {
                var $e = $('<div class="ajax-error"></div>').text(
                    error.message
                );
                $form.after($e);
            });
    };
    wpcf7.triggerEvent = function (target, name, detail) {
        var $target = $(target);
        var event = new CustomEvent("wpcf7" + name, {
            bubbles: !0,
            detail: detail,
        });
        $target.get(0).dispatchEvent(event);
        $target.trigger("wpcf7:" + name, detail);
        $target.trigger(name + ".wpcf7", detail);
    };
    wpcf7.toggleSubmit = function (form, state) {
        var $form = $(form);
        var $submit = $("input:submit", $form);
        if (typeof state !== "undefined") {
            $submit.prop("disabled", !state);
            return;
        }
        if ($form.hasClass("wpcf7-acceptance-as-validation")) {
            return;
        }
        $submit.prop("disabled", !1);
        $(".wpcf7-acceptance", $form).each(function () {
            var $span = $(this);
            var $input = $("input:checkbox", $span);
            if (!$span.hasClass("optional")) {
                if (
                    ($span.hasClass("invert") && $input.is(":checked")) ||
                    (!$span.hasClass("invert") && !$input.is(":checked"))
                ) {
                    $submit.prop("disabled", !0);
                    return !1;
                }
            }
        });
    };
    wpcf7.notValidTip = function (target, message) {
        var $target = $(target);
        $(".wpcf7-not-valid-tip", $target).remove();
        $('<span role="alert" class="wpcf7-not-valid-tip"></span>')
            .text(message)
            .appendTo($target);
        if ($target.is(".use-floating-validation-tip *")) {
            var fadeOut = function (target) {
                $(target)
                    .not(":hidden")
                    .animate({ opacity: 0 }, "fast", function () {
                        $(this).css({ "z-index": -100 });
                    });
            };
            $target.on("mouseover", ".wpcf7-not-valid-tip", function () {
                fadeOut(this);
            });
            $target.on("focus", ":input", function () {
                fadeOut($(".wpcf7-not-valid-tip", $target));
            });
        }
    };
    wpcf7.refill = function (form, data) {
        var $form = $(form);
        var refillCaptcha = function ($form, items) {
            $.each(items, function (i, n) {
                $form.find(':input[name="' + i + '"]').val("");
                $form.find("img.wpcf7-captcha-" + i).attr("src", n);
                var match = /([0-9]+)\.(png|gif|jpeg)$/.exec(n);
                $form
                    .find(
                        'input:hidden[name="_wpcf7_captcha_challenge_' +
                            i +
                            '"]'
                    )
                    .attr("value", match[1]);
            });
        };
        var refillQuiz = function ($form, items) {
            $.each(items, function (i, n) {
                $form.find(':input[name="' + i + '"]').val("");
                $form
                    .find(':input[name="' + i + '"]')
                    .siblings("span.wpcf7-quiz-label")
                    .text(n[0]);
                $form
                    .find('input:hidden[name="_wpcf7_quiz_answer_' + i + '"]')
                    .attr("value", n[1]);
            });
        };
        if (typeof data === "undefined") {
            $.ajax({
                type: "GET",
                url: wpcf7.apiSettings.getRoute(
                    "/contact-forms/" + wpcf7.getId($form) + "/refill"
                ),
                beforeSend: function (xhr) {
                    var nonce = $form.find(':input[name="_wpnonce"]').val();
                    if (nonce) {
                        xhr.setRequestHeader("X-WP-Nonce", nonce);
                    }
                },
                dataType: "json",
            }).done(function (data, status, xhr) {
                if (data.captcha) {
                    refillCaptcha($form, data.captcha);
                }
                if (data.quiz) {
                    refillQuiz($form, data.quiz);
                }
            });
        } else {
            if (data.captcha) {
                refillCaptcha($form, data.captcha);
            }
            if (data.quiz) {
                refillQuiz($form, data.quiz);
            }
        }
    };
    wpcf7.clearResponse = function (form) {
        var $form = $(form);
        $form.removeClass("invalid spam sent failed");
        $form.siblings(".screen-reader-response").html("").attr("role", "");
        $(".wpcf7-not-valid-tip", $form).remove();
        $("[aria-invalid]", $form).attr("aria-invalid", "false");
        $(".wpcf7-form-control", $form).removeClass("wpcf7-not-valid");
        $(".wpcf7-response-output", $form)
            .hide()
            .empty()
            .removeAttr("role")
            .removeClass(
                "wpcf7-mail-sent-ok wpcf7-mail-sent-ng wpcf7-validation-errors wpcf7-spam-blocked"
            );
    };
    wpcf7.apiSettings.getRoute = function (path) {
        var url = wpcf7.apiSettings.root;
        url = url.replace(
            wpcf7.apiSettings.namespace,
            wpcf7.apiSettings.namespace + path
        );
        return url;
    };
})(jQuery);
(function () {
    if (typeof window.CustomEvent === "function") return !1;
    function CustomEvent(event, params) {
        params = params || { bubbles: !1, cancelable: !1, detail: undefined };
        var evt = document.createEvent("CustomEvent");
        evt.initCustomEvent(
            event,
            params.bubbles,
            params.cancelable,
            params.detail
        );
        return evt;
    }
    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent;
})();
(function (grecaptcha, sitekey, actions) {
    var wpcf7recaptcha = {
        execute: function (action) {
            grecaptcha
                .execute(sitekey, { action: action })
                .then(function (token) {
                    var forms = document.getElementsByTagName("form");
                    for (var i = 0; i < forms.length; i++) {
                        var fields = forms[i].getElementsByTagName("input");
                        for (var j = 0; j < fields.length; j++) {
                            var field = fields[j];
                            if (
                                "g-recaptcha-response" ===
                                field.getAttribute("name")
                            ) {
                                field.setAttribute("value", token);
                                break;
                            }
                        }
                    }
                });
        },
        executeOnHomepage: function () {
            wpcf7recaptcha.execute(actions.homepage);
        },
        executeOnContactform: function () {
            wpcf7recaptcha.execute(actions.contactform);
        },
    };
    grecaptcha.ready(wpcf7recaptcha.executeOnHomepage);
    document.addEventListener(
        "change",
        wpcf7recaptcha.executeOnContactform,
        !1
    );
    document.addEventListener(
        "wpcf7submit",
        wpcf7recaptcha.executeOnHomepage,
        !1
    );
})
function lazyLoadThumb(e) {
    var t =
            '<img loading="lazy" data-lazy-src="https://i.ytimg.com/vi/ID/hqdefault.jpg" alt="" width="480" height="360"><noscript><img src="https://i.ytimg.com/vi/ID/hqdefault.jpg" alt="" width="480" height="360"></noscript>',
        a = '<div class="play"></div>';
    return t.replace("ID", e) + a;
}
function lazyLoadYoutubeIframe() {
    var e = document.createElement("iframe"),
        t = "ID?autoplay=1";
    t += 0 === this.dataset.query.length ? "" : "&" + this.dataset.query;
    e.setAttribute("src", t.replace("ID", this.dataset.src)),
        e.setAttribute("frameborder", "0"),
        e.setAttribute("allowfullscreen", "1"),
        e.setAttribute(
            "allow",
            "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        ),
        this.parentNode.replaceChild(e, this);
}
document.addEventListener("DOMContentLoaded", function () {
    var e,
        t,
        a = document.getElementsByClassName("rll-youtube-player");
    for (t = 0; t < a.length; t++)
        (e = document.createElement("div")),
            e.setAttribute("data-id", a[t].dataset.id),
            e.setAttribute("data-query", a[t].dataset.query),
            e.setAttribute("data-src", a[t].dataset.src),
            (e.innerHTML = lazyLoadThumb(a[t].dataset.id)),
            (e.onclick = lazyLoadYoutubeIframe),
            a[t].appendChild(e);
});
