var Client;
(() => {
  "use strict";
  var e = {
      123: (e, n, t) => {
        t.d(n, { Z: () => i });
        var r = t(645),
          o = t.n(r)()(function (e) {
            return e[1];
          });
        o.push([
          e.id,
          "body{display:flex;flex-direction:column;min-height:100vh}main{flex:2}section{max-width:800px;margin:50px auto}\n",
          "",
        ]);
        const i = o;
      },
      859: (e, n, t) => {
        t.d(n, { Z: () => i });
        var r = t(645),
          o = t.n(r)()(function (e) {
            return e[1];
          });
        o.push([e.id, "", ""]);
        const i = o;
      },
      269: (e, n, t) => {
        t.d(n, { Z: () => i });
        var r = t(645),
          o = t.n(r)()(function (e) {
            return e[1];
          });
        o.push([
          e.id,
          "form{border:1px solid #545454;border-radius:3px;padding:40px}input{padding:5px 20px;width:100%;line-height:16px;margin:10px 0}\n",
          "",
        ]);
        const i = o;
      },
      603: (e, n, t) => {
        t.d(n, { Z: () => i });
        var r = t(645),
          o = t.n(r)()(function (e) {
            return e[1];
          });
        o.push([
          e.id,
          "header{display:flex;justify-content:space-between;padding:10px 40px}\n",
          "",
        ]);
        const i = o;
      },
      259: (e, n, t) => {
        t.d(n, { Z: () => i });
        var r = t(645),
          o = t.n(r)()(function (e) {
            return e[1];
          });
        o.push([
          e.id,
          "*{box-sizing:border-box}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}table{border-collapse:collapse;border-spacing:0}ul{list-style-type:none}\n",
          "",
        ]);
        const i = o;
      },
      645: (e) => {
        e.exports = function (e) {
          var n = [];
          return (
            (n.toString = function () {
              return this.map(function (n) {
                var t = e(n);
                return n[2] ? "@media ".concat(n[2], " {").concat(t, "}") : t;
              }).join("");
            }),
            (n.i = function (e, t, r) {
              "string" == typeof e && (e = [[null, e, ""]]);
              var o = {};
              if (r)
                for (var i = 0; i < this.length; i++) {
                  var a = this[i][0];
                  null != a && (o[a] = !0);
                }
              for (var l = 0; l < e.length; l++) {
                var c = [].concat(e[l]);
                (r && o[c[0]]) ||
                  (t &&
                    (c[2]
                      ? (c[2] = "".concat(t, " and ").concat(c[2]))
                      : (c[2] = t)),
                  n.push(c));
              }
            }),
            n
          );
        };
      },
      379: (e, n, t) => {
        var r,
          o = (function () {
            var e = {};
            return function (n) {
              if (void 0 === e[n]) {
                var t = document.querySelector(n);
                if (
                  window.HTMLIFrameElement &&
                  t instanceof window.HTMLIFrameElement
                )
                  try {
                    t = t.contentDocument.head;
                  } catch (e) {
                    t = null;
                  }
                e[n] = t;
              }
              return e[n];
            };
          })(),
          i = [];
        function a(e) {
          for (var n = -1, t = 0; t < i.length; t++)
            if (i[t].identifier === e) {
              n = t;
              break;
            }
          return n;
        }
        function l(e, n) {
          for (var t = {}, r = [], o = 0; o < e.length; o++) {
            var l = e[o],
              c = n.base ? l[0] + n.base : l[0],
              s = t[c] || 0,
              d = "".concat(c, " ").concat(s);
            t[c] = s + 1;
            var u = a(d),
              f = { css: l[1], media: l[2], sourceMap: l[3] };
            -1 !== u
              ? (i[u].references++, i[u].updater(f))
              : i.push({ identifier: d, updater: m(f, n), references: 1 }),
              r.push(d);
          }
          return r;
        }
        function c(e) {
          var n = document.createElement("style"),
            r = e.attributes || {};
          if (void 0 === r.nonce) {
            var i = t.nc;
            i && (r.nonce = i);
          }
          if (
            (Object.keys(r).forEach(function (e) {
              n.setAttribute(e, r[e]);
            }),
            "function" == typeof e.insert)
          )
            e.insert(n);
          else {
            var a = o(e.insert || "head");
            if (!a)
              throw new Error(
                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
              );
            a.appendChild(n);
          }
          return n;
        }
        var s,
          d =
            ((s = []),
            function (e, n) {
              return (s[e] = n), s.filter(Boolean).join("\n");
            });
        function u(e, n, t, r) {
          var o = t
            ? ""
            : r.media
            ? "@media ".concat(r.media, " {").concat(r.css, "}")
            : r.css;
          if (e.styleSheet) e.styleSheet.cssText = d(n, o);
          else {
            var i = document.createTextNode(o),
              a = e.childNodes;
            a[n] && e.removeChild(a[n]),
              a.length ? e.insertBefore(i, a[n]) : e.appendChild(i);
          }
        }
        function f(e, n, t) {
          var r = t.css,
            o = t.media,
            i = t.sourceMap;
          if (
            (o ? e.setAttribute("media", o) : e.removeAttribute("media"),
            i &&
              "undefined" != typeof btoa &&
              (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                " */"
              )),
            e.styleSheet)
          )
            e.styleSheet.cssText = r;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(r));
          }
        }
        var p = null,
          h = 0;
        function m(e, n) {
          var t, r, o;
          if (n.singleton) {
            var i = h++;
            (t = p || (p = c(n))),
              (r = u.bind(null, t, i, !1)),
              (o = u.bind(null, t, i, !0));
          } else
            (t = c(n)),
              (r = f.bind(null, t, n)),
              (o = function () {
                !(function (e) {
                  if (null === e.parentNode) return !1;
                  e.parentNode.removeChild(e);
                })(t);
              });
          return (
            r(e),
            function (n) {
              if (n) {
                if (
                  n.css === e.css &&
                  n.media === e.media &&
                  n.sourceMap === e.sourceMap
                )
                  return;
                r((e = n));
              } else o();
            }
          );
        }
        e.exports = function (e, n) {
          (n = n || {}).singleton ||
            "boolean" == typeof n.singleton ||
            (n.singleton =
              (void 0 === r &&
                (r = Boolean(
                  window && document && document.all && !window.atob
                )),
              r));
          var t = l((e = e || []), n);
          return function (e) {
            if (
              ((e = e || []),
              "[object Array]" === Object.prototype.toString.call(e))
            ) {
              for (var r = 0; r < t.length; r++) {
                var o = a(t[r]);
                i[o].references--;
              }
              for (var c = l(e, n), s = 0; s < t.length; s++) {
                var d = a(t[s]);
                0 === i[d].references && (i[d].updater(), i.splice(d, 1));
              }
              t = c;
            }
          };
        };
      },
    },
    n = {};
  function t(r) {
    var o = n[r];
    if (void 0 !== o) return o.exports;
    var i = (n[r] = { id: r, exports: {} });
    return e[r](i, i.exports, t), i.exports;
  }
  (t.n = (e) => {
    var n = e && e.__esModule ? () => e.default : () => e;
    return t.d(n, { a: n }), n;
  }),
    (t.d = (e, n) => {
      for (var r in n)
        t.o(n, r) &&
          !t.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: n[r] });
    }),
    (t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
    (t.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    });
  var r = {};
  (() => {
    function e(e) {
      console.log("::: Running checkForName :::", e),
        ["Picard", "Janeway", "Kirk", "Archer", "Georgiou"].includes(e) &&
          alert("Welcome, Captain!");
    }
    function n(e) {
      e.preventDefault();
      var n = document.getElementById("name").value;
      Client.checkForName(n), console.log("::: Form Submitted :::");
      try {
        fetch(
          "https://numbersapi.p.rapidapi.com/5/22/date?fragment=true&json=true",
          {
            method: "GET",
            headers: {
              "x-rapidapi-key":
                "823649a8e3msh93b3ac470417760p1d8fe7jsnf6823270f83e",
              "x-rapidapi-host": "numbersapi.p.rapidapi.com",
            },
          }
        )
          .then(function (e) {
            return console.log(e), e.json();
          })
          .then(function (e) {
            document.getElementById("results").innerHTML = e.text;
          });
      } catch (e) {
        console.log(e);
      }
    }
    t.r(r), t.d(r, { checkForName: () => e, handleSubmit: () => n });
    var o = t(379),
      i = t.n(o),
      a = t(259);
    i()(a.Z, { insert: "head", singleton: !1 }), a.Z.locals;
    var l = t(123);
    i()(l.Z, { insert: "head", singleton: !1 }), l.Z.locals;
    var c = t(859);
    i()(c.Z, { insert: "head", singleton: !1 }), c.Z.locals;
    var s = t(269);
    i()(s.Z, { insert: "head", singleton: !1 }), s.Z.locals;
    var d = t(603);
    i()(d.Z, { insert: "head", singleton: !1 }),
      d.Z.locals,
      console.log(e),
      alert("I EXIST");
  })(),
    (Client = r);
})();
