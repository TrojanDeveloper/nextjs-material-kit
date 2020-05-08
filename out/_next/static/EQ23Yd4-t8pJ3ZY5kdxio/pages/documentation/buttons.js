(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    "2L7I": function(o, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "default", function() {
          return N;
        });
      var a = n("q1tI"),
        e = n.n(a),
        r = n("pzeu"),
        l = n("zR9M"),
        s = n("R/WZ"),
        u = n("z1+X"),
        i = n.n(u),
        c = n("Kg+a"),
        f = n("Oref"),
        m = e.a.createElement,
        b = Object(s.a)({
          socialButtonsIcons: {
            position: "relative",
            fontSize: "18px",
            marginTop: "-2px"
          },
          marginRight: { marginRight: "5px" },
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
        }),
        p = "import Button from 'components/CustomButtons/Button.jsx';",
        g =
          '<Button type="button">Default</Button>\n<Button type="button" color="primary">Primary</Button>\n<Button type="button" color="info">Info</Button>\n<Button type="button" color="success">Success</Button>\n<Button type="button" color="danger">Danger</Button>\n<Button type="button" color="warning">Warning</Button>\n<Button type="button" color="rose">Rose</Button>',
        d =
          "import Favorite from '@material-ui/icons/Favorite';\nimport Button from 'components/CustomButtons/Button.jsx';",
        B =
          '<Button color="primary">Default</Button>\n<Button color="primary" round>Round</Button>\n<Button color="primary" round><Favorite /> With Icon</Button>\n<Button justIcon round color="primary"><Favorite style={{color: "#FFFFFF"}}/></Button>\n<Button color="primary" simple>Simple</Button>',
        h =
          '<Button color="primary" disabled>Default</Button>\n<Button color="primary" round disabled>Round</Button>',
        y =
          'import React from "react";\n// material-ui components\n// @material-ui/icons\n// core components\nimport Button from \'components/CustomButtons/Button.jsx\';\n\nexport default function Socials(){\n  return (\n    <div>\n      <Button color="twitter">\n        <i\n          className={"fab fa-twitter"}\n        />{" "}\n        Connect with Twitter\n      </Button>\n      <Button color="twitter" justIcon>\n        <i className={ " fab fa-twitter"} />\n      </Button>\n      <Button justIcon round color="twitter">\n        <i\n          className={"fab fa-twitter"}\n        />\n      </Button>\n      <Button color="twitter" simple>\n        <i\n          className={" fab fa-twitter"}\n        />\n      </Button>\n      <Button color="twitter" simple>\n        <i\n          className={" fab fa-twitter"}\n        />{" "}\n        Connect with Twitter\n      </Button>\n      <br />\n      <Button color="facebook">\n        <i\n          className={" fab fa-facebook-square"}\n        />{" "}\n        Share \xb7 2.2k\n      </Button>\n      <Button color="facebook" justIcon>\n        <i className={ " fab fa-facebook"} />\n      </Button>\n      <Button justIcon round color="facebook">\n        <i\n          className={" fab fa-facebook"}\n        />\n      </Button>\n      <Button color="facebook" simple>\n        <i\n          className={" fab fa-facebook-square"}\n        />\n      </Button>\n      <Button color="facebook" simple>\n        <i\n          className={" fab fa-facebook-square"}\n        />{" "}\n        Share \xb7 2.2k\n      </Button>\n      <br />\n      <Button color="google">\n        <i\n          className={" fab fa-google-plus-square"}\n        />{" "}\n        Share on Google+\n      </Button>\n      <Button color="google" justIcon>\n        <i className={ " fab fa-google"} />\n      </Button>\n      <Button justIcon round color="google">\n        <i\n          className={" fab fa-google"}\n        />\n      </Button>\n      <Button color="google" simple>\n        <i\n          className={" fab fa-google"}\n        />\n      </Button>\n      <Button color="google" simple>\n        <i\n          className={" fab fa-google-square"}\n        />{" "}\n        Share on Google+\n      </Button>\n      <br />\n        <Button color="github">\n          <i\n            className={" fab fa-github"}\n          />{" "}\n          Connect with Github\n        </Button>\n        <Button color="github" justIcon>\n          <i className={ " fab fa-github"} />\n        </Button>\n        <Button justIcon round color="github">\n          <i\n            className={" fab fa-github"}\n          />\n        </Button>\n        <Button color="github" simple>\n          <i\n            className={" fab fa-github"}\n          />\n        </Button>\n        <Button color="github" simple>\n          <i\n            className={" fab fa-github"}\n          />{" "}\n          Connect with Github\n        </Button>\n    </div>\n  );\n}',
        w =
          'RegularButton.propTypes = {\n  classes: PropTypes.object.isRequired,\n  color: PropTypes.oneOf([\n    "primary",\n    "info",\n    "success",\n    "warning",\n    "danger",\n    "rose",\n    "white",\n    "facebook",\n    "twitter",\n    "google",\n    "github",\n    "transparent"\n  ]),\n  size: PropTypes.oneOf(["sm", "lg"]),\n  simple: PropTypes.bool,\n  round: PropTypes.bool,\n  fullWidth: PropTypes.bool,\n  disabled: PropTypes.bool,\n  block: PropTypes.bool,\n  link: PropTypes.bool,\n  justIcon: PropTypes.bool\n};';
      function N() {
        var o = b();
        return m(
          f.a,
          null,
          m("h1", null, "Buttons"),
          m(
            "p",
            null,
            "Use NextJS Material Kit's custom button styles for actions in forms, dialogs, and more with support for multiple states, and more."
          ),
          m(
            "p",
            null,
            "You will find all of our restyled buttons from material-ui in",
            " ",
            m("code", null, "src/components/CustomButtons"),
            "."
          ),
          m("h2", null, "Styles"),
          m(
            "p",
            null,
            "You will find the styles for this component in",
            m("br", null),
            " ",
            m(
              "code",
              null,
              "src/assets/jss/nextjs-material-kit/components/buttonStyle.js"
            ),
            m("br", null),
            " and",
            m("br", null),
            m(
              "code",
              null,
              "src/assets/jss/nextjs-material-kit/components/iconButtonStyle.js"
            ),
            "."
          ),
          m("h2", null, "Examples"),
          m(
            "p",
            null,
            "NextJS Material Kit has changed the predefined button styles from Material UI, each serving its own semantic purpose, with a few extras thrown in for more control."
          ),
          m(
            "div",
            { className: o.bdExample },
            m(c.a, { type: "button" }, "Default"),
            m(c.a, { type: "button", color: "primary" }, "Primary"),
            m(c.a, { type: "button", color: "info" }, "Info"),
            m(c.a, { type: "button", color: "success" }, "Success"),
            m(c.a, { type: "button", color: "danger" }, "Danger"),
            m(c.a, { type: "button", color: "warning" }, "Warning"),
            m(c.a, { type: "button", color: "rose" }, "Rose")
          ),
          m(r.a, { language: "jsx", style: l.prism }, p),
          m(r.a, { language: "jsx", style: l.prism }, g),
          m("h2", null, "Style Buttons"),
          m(
            "div",
            { className: o.bdExample },
            m(c.a, { color: "primary" }, "Default"),
            m(c.a, { color: "primary", round: !0 }, "Round"),
            m(c.a, { color: "primary", round: !0 }, m(i.a, null), " With Icon"),
            m(
              c.a,
              { justIcon: !0, round: !0, color: "primary" },
              m(i.a, { style: { color: "#FFFFFF" } })
            ),
            m(c.a, { color: "primary", simple: !0 }, "Simple")
          ),
          m(r.a, { language: "jsx", style: l.prism }, d),
          m(r.a, { language: "jsx", style: l.prism }, B),
          m("h2", null, "Disabled state"),
          m(
            "p",
            null,
            "Make buttons look inactive by adding the disabled boolean attribute to any ",
            m("code", null, "Button"),
            " element."
          ),
          m(
            "div",
            { className: o.bdExample },
            m(c.a, { color: "primary", disabled: !0 }, "Default"),
            m(c.a, { color: "primary", round: !0, disabled: !0 }, "Round")
          ),
          m(r.a, { language: "jsx", style: l.prism }, h),
          m("h2", null, "Social buttons"),
          m(
            "div",
            { className: o.bdExample },
            m(
              c.a,
              { color: "twitter" },
              m("i", { className: "fab fa-twitter" }),
              " Connect with Twitter"
            ),
            m(
              c.a,
              { color: "twitter", justIcon: !0 },
              m("i", { className: " fab fa-twitter" })
            ),
            m(
              c.a,
              { justIcon: !0, round: !0, color: "twitter" },
              m("i", { className: " fab fa-twitter" })
            ),
            m(
              c.a,
              { color: "twitter", simple: !0, justIcon: !0 },
              m("i", { className: "fab fa-twitter" })
            ),
            m(
              c.a,
              { color: "twitter", simple: !0 },
              m("i", { className: "fab fa-twitter" }),
              " Connect with Twitter"
            ),
            m("br", null),
            m(
              c.a,
              { color: "facebook" },
              m("i", { className: "fab fa-facebook-square" }),
              " Share \xb7 2.2k"
            ),
            m(
              c.a,
              { color: "facebook", justIcon: !0 },
              m("i", { className: " fab fa-facebook" })
            ),
            m(
              c.a,
              { justIcon: !0, round: !0, color: "facebook" },
              m("i", { className: " fab fa-facebook" })
            ),
            m(
              c.a,
              { color: "facebook", simple: !0, justIcon: !0 },
              m("i", { className: "fab fa-facebook-square" })
            ),
            m(
              c.a,
              { color: "facebook", simple: !0 },
              m("i", { className: "fab fa-facebook-square" }),
              " Share \xb7 2.2k"
            ),
            m("br", null),
            m(
              c.a,
              { color: "google" },
              m("i", { className: "fab fa-google-plus-square" }),
              " Share on Google+"
            ),
            m(
              c.a,
              { color: "google", justIcon: !0 },
              m("i", { className: " fab fa-google" })
            ),
            m(
              c.a,
              { justIcon: !0, round: !0, color: "google" },
              m("i", { className: " fab fa-google" })
            ),
            m(
              c.a,
              { color: "google", simple: !0, justIcon: !0 },
              m("i", { className: "fab fa-google" })
            ),
            m(
              c.a,
              { color: "google", simple: !0 },
              m("i", { className: "fab fa-google-square" }),
              " Share on Google+"
            ),
            m("br", null),
            m(
              c.a,
              { color: "github" },
              m("i", { className: "fab fa-github" }),
              " Connect with Github"
            ),
            m(
              c.a,
              { color: "github", justIcon: !0 },
              m("i", { className: " fab fa-github" })
            ),
            m(
              c.a,
              { justIcon: !0, round: !0, color: "github" },
              m("i", { className: " fab fa-github" })
            ),
            m(
              c.a,
              { color: "github", simple: !0, justIcon: !0 },
              m("i", { className: "fab fa-github" })
            ),
            m(
              c.a,
              { color: "github", simple: !0 },
              m("i", { className: "fab fa-github" }),
              " Connect with Github"
            )
          ),
          m(r.a, { language: "jsx", style: l.prism }, y),
          m("h2", null, "Properties"),
          m(r.a, { language: "jsx", style: l.prism }, w),
          m("h2", null, "Material UI Buttons"),
          m(
            "p",
            null,
            "For more props and buttons please check out the",
            " ",
            m(
              "a",
              {
                href:
                  "https://material-ui-next.com/demos/buttons/?ref=creativetim",
                target: "_blank"
              },
              "material-ui buttons section"
            ),
            "."
          )
        );
      }
    },
    "8/g6": function(o, t, n) {
      "use strict";
      var a = n("TqRt");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function(o, t) {
          var n = r.default.memo(
            r.default.forwardRef(function(t, n) {
              return r.default.createElement(
                l.default,
                (0, e.default)({ ref: n }, t),
                o
              );
            })
          );
          0;
          return (n.muiName = l.default.muiName), n;
        });
      var e = a(n("pVnL")),
        r = a(n("q1tI")),
        l = a(n("UJJ5"));
    },
    UJJ5: function(o, t, n) {
      "use strict";
      n.r(t);
      var a = n("HR5l");
      n.d(t, "default", function() {
        return a.a;
      });
    },
    dXKV: function(o, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/documentation/buttons",
        function() {
          var o = n("2L7I");
          return { page: o.default || o };
        }
      ]);
    },
    "z1+X": function(o, t, n) {
      "use strict";
      var a = n("TqRt");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var e = a(n("q1tI")),
        r = (0, a(n("8/g6")).default)(
          e.default.createElement("path", {
            d:
              "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          }),
          "Favorite"
        );
      t.default = r;
    }
  },
  [["dXKV", 1, 0]]
]);
