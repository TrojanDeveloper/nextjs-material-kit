(window.webpackJsonp = window.webpackJsonp || []).push([
  [25],
  {
    Npxd: function(e, a, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/documentation/parallax",
        function() {
          var e = n("vyxN");
          return { page: e.default || e };
        }
      ]);
    },
    vyxN: function(e, a, n) {
      "use strict";
      n.r(a);
      var l = n("0iUn"),
        t = n("sLSF"),
        o = n("MI3g"),
        s = n("a7VT"),
        r = n("Tit0"),
        p = n("q1tI"),
        i = n.n(p),
        u = n("pzeu"),
        c = n("zR9M"),
        y = n("Oref"),
        d = i.a.createElement,
        m = (function(e) {
          function a() {
            return (
              Object(l.a)(this, a),
              Object(o.a)(this, Object(s.a)(a).apply(this, arguments))
            );
          }
          return (
            Object(r.a)(a, e),
            Object(t.a)(a, [
              {
                key: "render",
                value: function() {
                  return d(
                    y.a,
                    null,
                    d("h1", null, "Parallax"),
                    d("h2", null, "Styles"),
                    d(
                      "p",
                      null,
                      "You will find all the styles for these components in",
                      d("br", null),
                      d(
                        "code",
                        null,
                        "src/assets/jss/nextjs-material-kit/components/parallaxStyle.js"
                      ),
                      "."
                    ),
                    d("h2", null, "Example Code"),
                    d(
                      "p",
                      null,
                      "If you want a nice parallax like that in our demo pages, you can add the following code at the beginning of your page."
                    ),
                    d(
                      u.a,
                      { language: "jsx", style: c.prism },
                      'import Parallax from "components/Parallax/Parallax.js";'
                    ),
                    d(
                      u.a,
                      { language: "jsx", style: c.prism },
                      '<Parallax filter image={require("path/to/your/image")} />'
                    ),
                    d("h2", null, "Props"),
                    d(
                      u.a,
                      { language: "jsx", style: c.prism },
                      "Parallax.propTypes = {\n  className: PropTypes.string,\n  filter: PropTypes.bool,\n  children: PropTypes.node,\n  style: PropTypes.string,\n  image: PropTypes.string,\n  small: PropTypes.bool,\n  // this will add a min-height of 660px on small screens\n  responsive: PropTypes.bool\n};"
                    )
                  );
                }
              }
            ]),
            a
          );
        })(i.a.Component);
      a.default = m;
    }
  },
  [["Npxd", 1, 0]]
]);
