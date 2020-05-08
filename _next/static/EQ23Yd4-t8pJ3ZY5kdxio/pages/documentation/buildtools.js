(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    "j+Uk": function(e, t, l) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/documentation/buildtools",
        function() {
          var e = l("tmEv");
          return { page: e.default || e };
        }
      ]);
    },
    tmEv: function(e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, "default", function() {
          return n;
        });
      var a = l("q1tI"),
        s = l.n(a),
        r = l("Oref"),
        i = s.a.createElement;
      function n() {
        return i(
          r.a,
          null,
          i("h1", { className: "bd-title", id: "content" }, "Build tools"),
          i(
            "p",
            { className: "bd-lead" },
            "Learn how to use NextJS Material Kit to build your website, change brand-colors and more."
          ),
          i(
            "h3",
            { id: "change-brand-colors" },
            i("div", null, "Change brand colors")
          ),
          i(
            "ul",
            null,
            i(
              "li",
              null,
              "You will find all the branding colors inside",
              " ",
              i(
                "code",
                { className: "highlighter-rouge" },
                "assets/scss/core/variables/_colors.scss"
              ),
              " ",
              "and inside",
              " ",
              i(
                "code",
                { className: "highlighter-rouge" },
                "assets/jss/nextjs-material-kit.js"
              ),
              "."
            )
          ),
          i("h3", { id: "compile-scss" }, i("div", null, "Available commands")),
          i(
            "div",
            { className: "bd-example" },
            i(
              "table",
              null,
              i(
                "thead",
                null,
                i(
                  "tr",
                  null,
                  i("th", { className: "text-center" }, "#"),
                  i("th", null, "Name"),
                  i("th", null, "Usage"),
                  i("th", { className: "text-left" }, "Description"),
                  i("th", { className: "text-right" }, "Read more")
                )
              ),
              i(
                "tbody",
                null,
                i(
                  "tr",
                  null,
                  i("td", { className: "text-center" }, "1"),
                  i(
                    "td",
                    null,
                    i("code", { className: "highlighter-rouge" }, "install")
                  ),
                  i(
                    "td",
                    null,
                    i("code", { className: "highlighter-rouge" }, "npm install")
                  ),
                  i(
                    "td",
                    { className: "text-left" },
                    "This command installs a package, and any packages that it depends on."
                  ),
                  i(
                    "td",
                    { className: "text-right" },
                    i(
                      "a",
                      {
                        href:
                          "https://docs.npmjs.com/cli/install?ref=creativetim",
                        target: "_blank"
                      },
                      "Read more"
                    )
                  )
                ),
                i(
                  "tr",
                  null,
                  i("td", { className: "text-center" }, "2"),
                  i(
                    "td",
                    null,
                    i("code", { className: "highlighter-rouge" }, "test")
                  ),
                  i(
                    "td",
                    null,
                    i(
                      "code",
                      { className: "highlighter-rouge" },
                      "npm run test"
                    )
                  ),
                  i(
                    "td",
                    { className: "text-left" },
                    "Runs the test watcher in an interactive mode. (Note that we have not implemented any tests - this command is by default from the initialization of package.json)"
                  ),
                  i(
                    "td",
                    { className: "text-right" },
                    i(
                      "a",
                      {
                        href:
                          "https://github.com/zeit/next.js/issues/1434?ref=creativetim",
                        target: "_blank"
                      },
                      "Read more"
                    )
                  )
                ),
                i(
                  "tr",
                  null,
                  i("td", { className: "text-center" }, "3"),
                  i(
                    "td",
                    null,
                    i("code", { className: "highlighter-rouge" }, "dev")
                  ),
                  i(
                    "td",
                    null,
                    i("code", { className: "highlighter-rouge" }, "npm run dev")
                  ),
                  i(
                    "td",
                    { className: "text-left" },
                    "This will determinate the start of your development server."
                  ),
                  i(
                    "td",
                    { className: "text-right" },
                    i(
                      "a",
                      {
                        href:
                          "https://nextjs.org/docs#quick-start?ref=creativetim",
                        target: "_blank"
                      },
                      "Read more"
                    )
                  )
                ),
                i(
                  "tr",
                  null,
                  i("td", { className: "text-center" }, "4"),
                  i(
                    "td",
                    null,
                    i("code", { className: "highlighter-rouge" }, "build")
                  ),
                  i(
                    "td",
                    null,
                    i(
                      "code",
                      { className: "highlighter-rouge" },
                      "npm run build"
                    )
                  ),
                  i(
                    "td",
                    { className: "text-left" },
                    "This will create a build directory with a production build of your app."
                  ),
                  i(
                    "td",
                    { className: "text-right" },
                    i(
                      "a",
                      {
                        href:
                          "https://nextjs.org/docs#quick-start?ref=creativetim",
                        target: "_blank"
                      },
                      "Read more"
                    )
                  )
                ),
                i(
                  "tr",
                  null,
                  i("td", { className: "text-center" }, "5"),
                  i(
                    "td",
                    null,
                    i("code", { className: "highlighter-rouge" }, "start")
                  ),
                  i(
                    "td",
                    null,
                    i("code", { className: "highlighter-rouge" }, "npm start")
                  ),
                  i(
                    "td",
                    { className: "text-left" },
                    "This will determinate the start of your production server."
                  ),
                  i(
                    "td",
                    { className: "text-right" },
                    i(
                      "a",
                      {
                        href:
                          "https://nextjs.org/docs#quick-start?ref=creativetim",
                        target: "_blank"
                      },
                      "Read more"
                    )
                  )
                ),
                i(
                  "tr",
                  null,
                  i("td", { className: "text-center" }, "6"),
                  i(
                    "td",
                    null,
                    i(
                      "code",
                      { className: "highlighter-rouge" },
                      "install:clean"
                    )
                  ),
                  i(
                    "td",
                    null,
                    i(
                      "code",
                      { className: "highlighter-rouge" },
                      "npm run install:clean"
                    )
                  ),
                  i(
                    "td",
                    { className: "text-left" },
                    "This command will remove the",
                    " ",
                    i(
                      "code",
                      { className: "highlighter-rouge" },
                      "node_modules"
                    ),
                    " folder and ",
                    i(
                      "code",
                      { className: "highlighter-rouge" },
                      "package_lock.json"
                    ),
                    " ",
                    "file, will install a fresh copy of them and will determinate the start of your development server."
                  ),
                  i("td", { className: "text-right" })
                )
              )
            )
          )
        );
      }
    }
  },
  [["j+Uk", 1, 0]]
]);
