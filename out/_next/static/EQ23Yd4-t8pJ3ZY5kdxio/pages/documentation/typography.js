(window.webpackJsonp = window.webpackJsonp || []).push([
  [32],
  {
    "3uXk": function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return u;
      });
      var a = n("q1tI"),
        l = n.n(a),
        o = n("R/WZ"),
        i = n("5FiG"),
        r = l.a.createElement,
        s = Object(o.a)(i.a);
      function u(e) {
        var t = s(),
          n = e.children;
        return r(
          "div",
          { className: t.defaultFontStyle + " " + t.successText },
          n
        );
      }
    },
    "5FiG": function(e, t, n) {
      "use strict";
      var a = n("zrwo"),
        l = n("eDSW"),
        o = {
          defaultFontStyle: Object(a.a)({}, l.j, { fontSize: "14px" }),
          defaultHeaderMargins: { marginTop: "20px", marginBottom: "10px" },
          quote: {
            padding: "10px 20px",
            margin: "0 0 20px",
            fontSize: "17.5px",
            borderLeft: "5px solid #eee"
          },
          quoteText: { margin: "0 0 10px", fontStyle: "italic" },
          quoteAuthor: {
            display: "block",
            fontSize: "80%",
            lineHeight: "1.42857143",
            color: "#777"
          },
          mutedText: { color: "#777" },
          primaryText: { color: l.r },
          infoText: { color: l.o },
          successText: { color: l.w },
          warningText: { color: l.B },
          dangerText: { color: l.i },
          smallText: {
            fontSize: "65%",
            fontWeight: "400",
            lineHeight: "1",
            color: "#777"
          }
        };
      t.a = o;
    },
    "6orC": function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return u;
      });
      var a = n("q1tI"),
        l = n.n(a),
        o = n("R/WZ"),
        i = n("5FiG"),
        r = l.a.createElement,
        s = Object(o.a)(i.a);
      function u(e) {
        var t = s(),
          n = e.children;
        return r(
          "div",
          { className: t.defaultFontStyle + " " + t.dangerText },
          n
        );
      }
    },
    "9Cx2": function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return u;
      });
      var a = n("q1tI"),
        l = n.n(a),
        o = n("R/WZ"),
        i = n("5FiG"),
        r = l.a.createElement,
        s = Object(o.a)(i.a);
      function u(e) {
        var t = s(),
          n = e.children;
        return r(
          "div",
          { className: t.defaultFontStyle + " " + t.primaryText },
          n
        );
      }
    },
    "Hk+Y": function(e, t, n) {
      "use strict";
      var a = n("TqRt");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var l = a(n("pVnL")),
        o = n("04ZO"),
        i = a(n("HWkK"));
      var r = function(e, t) {
        return (0, o.withStyles)(
          e,
          (0, l.default)({ defaultTheme: i.default }, t)
        );
      };
      t.default = r;
    },
    L7nT: function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n("kOwS"),
        l = n("q1tI"),
        o = n.n(l),
        i = n("pzeu"),
        r = n("zR9M"),
        s = n("Hk+Y"),
        u = n.n(s),
        h = n("aIa2"),
        c = n("pL7r"),
        d = n("9Cx2"),
        p = n("vwaZ"),
        m = n("3uXk"),
        b = n("Lldq"),
        f = n("6orC"),
        g = n("Oref"),
        y = o.a.createElement,
        w =
          "<h1>h1. NextJS Material Kit heading</h1>\n<h2>h2. NextJS Material Kit heading</h2>\n<h3>h3. NextJS Material Kit heading</h3>\n<h4>h4. NextJS Material Kit heading</h4>\n<h5>h5. NextJS Material Kit heading</h5>\n<h6>h6. NextJS Material Kit heading</h6>\n<h2>\n  Header with small subtitle<br />\n  <small>Use &lt;small&gt; tag for the headers</small>\n</h2>",
        I =
          "<p>\n  I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\n</p>",
        x =
          'import React from \'react\';\n// core components\nimport Quote from "components/Typography/Quote.js";\n\nexport default function Typography(){\n  return (\n    <Quote\n      text="I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at."\n      author=" Kanye West, Musician"\n    />\n  );\n}',
        v =
          'import React from \'react\';\n// core components\nimport Muted from "components/Typography/Muted.js";\nimport Primary from "components/Typography/Primary.js";\nimport Info from "components/Typography/Info.js";\nimport Success from "components/Typography/Success.js";\nimport Warning from "components/Typography/Warning.js";\nimport Danger from "components/Typography/Danger.js";\n\nexport default function Typography(){\n  return (\n    <div>\n      <Muted>\n        I will be the leader of a company that ends up being worth\n        billions of dollars, because I got the answers...\n      </Muted>\n      <Primary>\n        I will be the leader of a company that ends up being worth\n        billions of dollars, because I got the answers...\n      </Primary>\n      <Info>\n        I will be the leader of a company that ends up being worth\n        billions of dollars, because I got the answers...\n      </Info>\n      <Success>\n        I will be the leader of a company that ends up being worth\n        billions of dollars, because I got the answers...\n      </Success>\n      <Warning>\n        I will be the leader of a company that ends up being worth\n        billions of dollars, because I got the answers...\n      </Warning>\n      <Danger>\n        I will be the leader of a company that ends up being worth\n        billions of dollars, because I got the answers...\n      </Danger>\n    </div>\n  );\n}';
      t.default = u()({
        bdExample: {
          padding: "1.5rem",
          margin: "1rem -15px",
          position: "relative",
          marginRight: "0",
          marginBottom: "-8px",
          marginLeft: "0",
          borderWidth: ".2rem",
          border: "solid rgb(245, 242, 240)"
        }
      })(function(e) {
        var t = Object(a.a)({}, e).classes;
        return y(
          g.a,
          null,
          y("h1", null, "Typography"),
          y(
            "p",
            null,
            "Documentation and examples for NextJS Material Kit typography, including global settings, headings, body text, lists, and more."
          ),
          y("h2", null, "Styles"),
          y(
            "p",
            null,
            "You will find the styles for these components in",
            y("br", null),
            " ",
            y(
              "code",
              null,
              "src/assets/jss/nextjs-material-kit/components/typographyStyle.js"
            ),
            "."
          ),
          y("h2", null, y("b", null, "Headings")),
          y(
            "div",
            { className: t.bdExample },
            y("h1", null, "h1. NextJS Material Kit heading"),
            y("h2", null, "h2. NextJS Material Kit heading"),
            y("h3", null, "h3. NextJS Material Kit heading"),
            y("h4", null, "h4. NextJS Material Kit heading"),
            y("h5", null, "h5. NextJS Material Kit heading"),
            y("h6", null, "h6. NextJS Material Kit heading"),
            y(
              "h2",
              null,
              "Header with small subtitle",
              y("br", null),
              y("small", null, "Use <small> tag for the headers")
            )
          ),
          y(i.a, { language: "jsx", style: r.prism }, w),
          y("h2", null, y("b", null, "Paragraph")),
          y(
            "div",
            { className: t.bdExample },
            y(
              "p",
              null,
              "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at."
            )
          ),
          y(i.a, { language: "jsx", style: r.prism }, I),
          y("h2", null, y("b", null, "Quote")),
          y(
            "div",
            { className: t.bdExample },
            y(h.a, {
              text:
                "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.",
              author: " Kanye West, Musician"
            })
          ),
          y(i.a, { language: "jsx", style: r.prism }, x),
          y("h2", null, y("b", null, "Text Colors")),
          y(
            "div",
            { className: t.bdExample },
            y(
              c.a,
              null,
              "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers..."
            ),
            y(
              d.a,
              null,
              "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers..."
            ),
            y(
              p.a,
              null,
              "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers..."
            ),
            y(
              m.a,
              null,
              "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers..."
            ),
            y(
              b.a,
              null,
              "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers..."
            ),
            y(
              f.a,
              null,
              "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers..."
            )
          ),
          y(i.a, { language: "jsx", style: r.prism }, v)
        );
      });
    },
    Lldq: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return u;
      });
      var a = n("q1tI"),
        l = n.n(a),
        o = n("R/WZ"),
        i = n("5FiG"),
        r = l.a.createElement,
        s = Object(o.a)(i.a);
      function u(e) {
        var t = s(),
          n = e.children;
        return r(
          "div",
          { className: t.defaultFontStyle + " " + t.warningText },
          n
        );
      }
    },
    Wtvo: function(e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/documentation/typography",
        function() {
          var e = n("L7nT");
          return { page: e.default || e };
        }
      ]);
    },
    aIa2: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return u;
      });
      var a = n("q1tI"),
        l = n.n(a),
        o = n("R/WZ"),
        i = n("5FiG"),
        r = l.a.createElement,
        s = Object(o.a)(i.a);
      function u(e) {
        var t = e.text,
          n = e.author,
          a = s();
        return r(
          "blockquote",
          { className: a.defaultFontStyle + " " + a.quote },
          r("p", { className: a.quoteText }, t),
          r("small", { className: a.quoteAuthor }, n)
        );
      }
    },
    pL7r: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return u;
      });
      var a = n("q1tI"),
        l = n.n(a),
        o = n("R/WZ"),
        i = n("5FiG"),
        r = l.a.createElement,
        s = Object(o.a)(i.a);
      function u(e) {
        var t = s(),
          n = e.children;
        return r(
          "div",
          { className: t.defaultFontStyle + " " + t.mutedText },
          n
        );
      }
    },
    vwaZ: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return u;
      });
      var a = n("q1tI"),
        l = n.n(a),
        o = n("R/WZ"),
        i = n("5FiG"),
        r = l.a.createElement,
        s = Object(o.a)(i.a);
      function u(e) {
        var t = s(),
          n = e.children;
        return r(
          "div",
          { className: t.defaultFontStyle + " " + t.infoText },
          n
        );
      }
    }
  },
  [["Wtvo", 1, 0]]
]);
