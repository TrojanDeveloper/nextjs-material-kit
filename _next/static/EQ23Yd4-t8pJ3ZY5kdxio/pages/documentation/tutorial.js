(window.webpackJsonp = window.webpackJsonp || []).push([
  [31],
  {
    f00X: function(t, e, n) {
      "use strict";
      n.r(e);
      var a = n("0iUn"),
        i = n("sLSF"),
        o = n("MI3g"),
        l = n("a7VT"),
        r = n("Tit0"),
        s = n("q1tI"),
        u = n.n(s),
        c = n("pzeu"),
        p = n("zR9M"),
        m = n("Oref"),
        h = u.a.createElement,
        d = (function(t) {
          function e() {
            return (
              Object(a.a)(this, e),
              Object(o.a)(this, Object(l.a)(e).apply(this, arguments))
            );
          }
          return (
            Object(r.a)(e, t),
            Object(i.a)(e, [
              {
                key: "render",
                value: function() {
                  return h(
                    m.a,
                    null,
                    h("h1", null, "Tutorial"),
                    h("h2", null, "License"),
                    h("p", null, h("b", null, "MIT LICENSE")),
                    h(
                      "p",
                      null,
                      "Copyright (c) ",
                      new Date().getFullYear(),
                      " ",
                      h(
                        "a",
                        {
                          href:
                            "https://creative-tim.com/?ref=njsmk-tutorial-section-docs",
                          target: "_blank"
                        },
                        "Creative Tim"
                      ),
                      "."
                    ),
                    h(
                      "p",
                      null,
                      'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:'
                    ),
                    h(
                      "p",
                      null,
                      "The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software."
                    ),
                    h(
                      "p",
                      null,
                      'THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.'
                    ),
                    h("h2", null, "Getting started"),
                    h(
                      "p",
                      null,
                      h("b", null, "NextJS Material Kit"),
                      " is built on top of",
                      " ",
                      h(
                        "a",
                        {
                          href: "https://material-ui-next.com/?ref=creativetim",
                          target: "_blank"
                        },
                        "Material UI"
                      ),
                      " ",
                      "and",
                      " ",
                      h(
                        "a",
                        {
                          href:
                            "https://www.creative-tim.com/product/material-kit-react?ref=njsmk-tutorial-docs",
                          target: "_blank"
                        },
                        "Material Kit React"
                      ),
                      " ",
                      "using",
                      " ",
                      h(
                        "a",
                        {
                          href: "https://nextjs.org?ref=creativetim",
                          target: "_blank"
                        },
                        "NextJS"
                      ),
                      " ",
                      "(at the moment we do not offer support for TypeScript in our React themes)."
                    ),
                    h(
                      "p",
                      null,
                      "Check the",
                      " ",
                      h(
                        "a",
                        {
                          href:
                            "https://github.com/creativetimofficial/nextjs-material-kit/blob/master/CHANGELOG.md?ref=creativetim",
                          target: "_blank"
                        },
                        "CHANGELOG"
                      ),
                      " ",
                      "to see what version we have used inside this product."
                    ),
                    h(
                      "p",
                      null,
                      "You can convert our theme to TypeScript support by",
                      " ",
                      h(
                        "a",
                        {
                          href:
                            "https://github.com/creativetimofficial/ct-material-dashboard-pro-react/issues/14?ref=creativetim",
                          target: "_blank"
                        },
                        "reading this thread"
                      ),
                      "."
                    ),
                    h("h3", null, "Local development"),
                    h(
                      "ul",
                      null,
                      h(
                        "li",
                        null,
                        "Install NodeJs from",
                        " ",
                        h(
                          "a",
                          {
                            href: "https://nodejs.org/en/?ref=creativetim",
                            target: "_blank"
                          },
                          "NodeJs Official Page"
                        )
                      ),
                      h(
                        "li",
                        null,
                        "Go to",
                        " ",
                        h(
                          "a",
                          {
                            href:
                              "https://www.creative-tim.com/?ref=njsmk-tutorial-section-docs",
                            target: "_blank"
                          },
                          "creative tim website"
                        ),
                        " ",
                        "and login into your account"
                      ),
                      h(
                        "li",
                        null,
                        "Go to",
                        " ",
                        h(
                          "a",
                          {
                            href:
                              "https://www.creative-tim.com/product/nextjs-material-kit?ref=njsmk-tutorial-section-docs",
                            target: "_blank"
                          },
                          "NextJS Material Kit"
                        ),
                        " ",
                        "and press the download button (this will download onto your computer a zip file)"
                      ),
                      h(
                        "li",
                        null,
                        "Unzip the downloaded file to a folder in your computer"
                      ),
                      h("li", null, "Open Terminal"),
                      h(
                        "li",
                        null,
                        "Go to your file project (where you've unzipped the product)"
                      ),
                      h(
                        "li",
                        null,
                        "Run in terminal",
                        " ",
                        h(
                          c.a,
                          { language: "jsx", style: p.prism },
                          "npm install"
                        )
                      ),
                      h(
                        "li",
                        null,
                        "Then run",
                        " ",
                        h(
                          c.a,
                          { language: "jsx", style: p.prism },
                          "npm run dev"
                        )
                      ),
                      h(
                        "li",
                        null,
                        "Alternatively, if you use a Linux based OS, you can run",
                        " ",
                        h(
                          c.a,
                          { language: "jsx", style: p.prism },
                          "npm run install:clean"
                        ),
                        " ",
                        "which will delete ",
                        h("code", null, "node_modules/"),
                        ",",
                        " ",
                        h("code", null, "package-lock.json"),
                        ", ",
                        h("code", null, ".next/"),
                        ", automatically run ",
                        h("code", null, "install"),
                        " script and ",
                        h("code", null, "run dev"),
                        " script"
                      ),
                      h(
                        "li",
                        null,
                        "Navigate to",
                        " ",
                        h(
                          "a",
                          { href: "http://localhost:3000", target: "_blank" },
                          "http://localhost:3000"
                        )
                      ),
                      h(
                        "li",
                        null,
                        "More information \u2192",
                        " ",
                        h(
                          "a",
                          {
                            href:
                              "https://reactjs.org/docs/installation.html?ref=creativetim",
                            target: "_blank"
                          },
                          "React"
                        )
                      ),
                      h(
                        "li",
                        null,
                        "More information \u2192",
                        " ",
                        h(
                          "a",
                          {
                            href: "https://nextjs.org?ref=creativetim",
                            target: "_blank"
                          },
                          "NextJS"
                        )
                      ),
                      h(
                        "li",
                        null,
                        "More information \u2192",
                        " ",
                        h(
                          "a",
                          {
                            href: "https://material-ui.com/?ref=creativetim",
                            target: "_blank"
                          },
                          "Material-UI"
                        )
                      ),
                      h(
                        "li",
                        null,
                        "More information \u2192",
                        " ",
                        h(
                          "a",
                          {
                            href:
                              "https://www.creative-tim.com/product/material-kit-react?ref=njsmk-tutorial-page",
                            target: "_blank"
                          },
                          "Material Kit React"
                        )
                      )
                    ),
                    h("h3", null, "Production"),
                    h(
                      "p",
                      null,
                      "To learn how to deploy a NextJS application you can do the following:"
                    ),
                    h(
                      "ul",
                      null,
                      h(
                        "li",
                        null,
                        "Check the live docs of NextJS",
                        h(
                          "ul",
                          null,
                          h(
                            "li",
                            null,
                            h(
                              "a",
                              {
                                href: "https://nextjs.org?ref=creativetim",
                                target: "_blank"
                              },
                              "NextJS"
                            )
                          ),
                          h(
                            "li",
                            null,
                            h(
                              "a",
                              {
                                href:
                                  "https://github.com/zeit/next.js/wiki/Deploying-a-Next.js-app-into-GitHub-Pages?ref=creativetim",
                                target: "_blank"
                              },
                              "NextJS Tutorial for Deployment"
                            )
                          ),
                          h(
                            "li",
                            null,
                            h(
                              "a",
                              {
                                href:
                                  "https://nextjs.org/learn/basics/deploying-a-nextjs-app?ref=creativetim",
                                target: "_blank"
                              },
                              "NextJS for GitHub Pages"
                            )
                          )
                        )
                      ),
                      h(
                        "li",
                        null,
                        "Also, you can check",
                        " ",
                        h(
                          "a",
                          {
                            href:
                              "https://stackoverflow.com/search?q=nextjs?ref=creativetim",
                            target: "_blank"
                          },
                          "StackOverflow"
                        ),
                        " ",
                        "for more guidelines."
                      )
                    ),
                    h("h3", null, "Observations"),
                    h("p", null, "We've used absolute paths in our product."),
                    h(
                      "p",
                      null,
                      "Integrating this app, with another NextJS app that does not make use of absolute paths will break."
                    ),
                    h(
                      "p",
                      null,
                      "Please integrate our next.config.js file with your next.config.js file of your application."
                    ),
                    h(
                      "p",
                      null,
                      "For more details about absolute paths inside NextJS we've used this",
                      " ",
                      h(
                        "a",
                        {
                          href:
                            "https://whoisryosuke.com/blog/2018/nextjs-tip-relative-es6-modules/?ref=creativetim",
                          target: "_blank"
                        },
                        "tutorial on absolute paths in NextJS"
                      ),
                      "."
                    ),
                    h(
                      "p",
                      null,
                      "The project was started from",
                      " ",
                      h(
                        "a",
                        {
                          href:
                            "https://github.com/mui-org/material-ui/tree/master/examples/nextjs?ref=creativetim",
                          target: "_blank"
                        },
                        "Material UI NextJS example"
                      ),
                      " ",
                      "and on top of that, we've added",
                      " ",
                      h(
                        "a",
                        {
                          href:
                            "https://www.creative-tim.com/product/material-kit-react?ref=njsmk-tutorial-page",
                          target: "_blank"
                        },
                        "Material Kit React"
                      ),
                      "."
                    ),
                    h("h2", null, "Files and Folders structure"),
                    h(
                      c.a,
                      { language: "terminal", style: p.prism },
                      "nextjs-material-kit\n.\n\u251c\u2500\u2500 CHANGELOG.md\n\u251c\u2500\u2500 ISSUE_TEMPLATE.md\n\u251c\u2500\u2500 LICENSE.md\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 next.config.js\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 Documentation\n\u2502\xa0\xa0 \u251c\u2500\u2500 assets\n\u2502\xa0\xa0 \u2514\u2500\u2500 tutorial-components.html\n\u251c\u2500\u2500 assets\n\u2502\xa0\xa0 \u251c\u2500\u2500 css\n\u2502\xa0\xa0 \u251c\u2500\u2500 img\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 examples\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 faces\n\u2502\xa0\xa0 \u251c\u2500\u2500 jss\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 nextjs-material-kit\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 components\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 pages\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0     \u251c\u2500\u2500 componentsSections\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 landingPageSections\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 nextjs-material-kit.js\n\u2502\xa0\xa0 \u2514\u2500\u2500 scss\n\u2502\xa0\xa0     \u251c\u2500\u2500 core\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u251c\u2500\u2500 mixins\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2514\u2500\u2500 variables\n\u2502\xa0\xa0     \u251c\u2500\u2500 plugins\n\u2502\xa0\xa0     \u2514\u2500\u2500 nextjs-material-kit.scss\n\u251c\u2500\u2500 pages\n\u2502\xa0\xa0 \u251c\u2500\u2500 _app.js\n\u2502\xa0\xa0 \u251c\u2500\u2500 _document.js\n\u2502\xa0\xa0 \u251c\u2500\u2500 _error.js\n\u2502\xa0\xa0 \u251c\u2500\u2500 components.js\n\u2502\xa0\xa0 \u251c\u2500\u2500 landingpage.js\n\u2502\xa0\xa0 \u251c\u2500\u2500 loginpage.js\n\u2502\xa0\xa0 \u2514\u2500\u2500 profilepage.js\n\u251c\u2500\u2500 components\n\u2502\xa0\xa0 \u251c\u2500\u2500 Badge\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 Badge.js\n\u2502\xa0\xa0 \u251c\u2500\u2500 Card\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 Card.js\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 CardBody.js\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 CardFooter.js\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 CardHeader.js\n\u2502\xa0\xa0 \u251c\u2500\u2500 Clearfix\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 Clearfix.js\n\u2502\xa0\xa0 \u251c\u2500\u2500 CustomButtons\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 Button.js\n\u2502\xa0\xa0 \u251c\u2500\u2500 CustomDropdown\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 CustomDropdown.js\n\u2502\xa0\xa0 \u251c\u2500\u2500 CustomInput\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 CustomInput.js\n\u2502\xa0\xa0 \u251c\u2500\u2500 CustomLinearProgress\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 CustomLinearProgress.js\n\u2502\xa0\xa0 \u251c\u2500\u2500 CustomTabs\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 CustomTabs.js\n\u2502\xa0\xa0 \u251c\u2500\u2500 Footer\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 Footer.js\n\u2502\xa0\xa0 \u251c\u2500\u2500 Grid\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 GridContainer.js\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 GridItem.js\n\u2502\xa0\xa0 \u251c\u2500\u2500 Header\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 Header.js\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 HeaderLinks.js\n\u2502\xa0\xa0 \u251c\u2500\u2500 InfoArea\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 InfoArea.js\n\u2502\xa0\xa0 \u251c\u2500\u2500 NavPills\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 NavPills.js\n\u2502\xa0\xa0 \u251c\u2500\u2500 PageChange\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 PageChange.js\n\u2502\xa0\xa0 \u251c\u2500\u2500 Pagination\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 Pagination.js\n\u2502\xa0\xa0 \u251c\u2500\u2500 Parallax\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 Parallax.js\n\u2502\xa0\xa0 \u251c\u2500\u2500 Snackbar\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 SnackbarContent.js\n\u2502\xa0\xa0 \u2514\u2500\u2500 Typography\n\u2502\xa0\xa0     \u251c\u2500\u2500 Danger.js\n\u2502\xa0\xa0     \u251c\u2500\u2500 Info.js\n\u2502\xa0\xa0     \u251c\u2500\u2500 Muted.js\n\u2502\xa0\xa0     \u251c\u2500\u2500 Primary.js\n\u2502\xa0\xa0     \u251c\u2500\u2500 Quote.js\n\u2502\xa0\xa0     \u251c\u2500\u2500 Small.js\n\u2502\xa0\xa0     \u251c\u2500\u2500 Success.js\n\u2502\xa0\xa0     \u2514\u2500\u2500 Warning.js\n\u2514\u2500\u2500 pages-sections\n    \u251c\u2500\u2500 Components-Sections\n    \u2502\xa0\xa0 \u251c\u2500\u2500 SectionBasics.js\n    \u2502\xa0\xa0 \u251c\u2500\u2500 SectionCarousel.js\n    \u2502\xa0\xa0 \u251c\u2500\u2500 SectionCompletedExamples.js\n    \u2502\xa0\xa0 \u251c\u2500\u2500 SectionDownload.js\n    \u2502\xa0\xa0 \u251c\u2500\u2500 SectionExamples.js\n    \u2502\xa0\xa0 \u251c\u2500\u2500 SectionJavascript.js\n    \u2502\xa0\xa0 \u251c\u2500\u2500 SectionLogin.js\n    \u2502\xa0\xa0 \u251c\u2500\u2500 SectionNavbars.js\n    \u2502\xa0\xa0 \u251c\u2500\u2500 SectionNotifications.js\n    \u2502\xa0\xa0 \u251c\u2500\u2500 SectionPills.js\n    \u2502\xa0\xa0 \u251c\u2500\u2500 SectionTabs.js\n    \u2502\xa0\xa0 \u2514\u2500\u2500 SectionTypography.js\n    \u2514\u2500\u2500 LandingPage-Sections\n        \u251c\u2500\u2500 ProductSection.js\n        \u251c\u2500\u2500 TeamSection.js\n        \u2514\u2500\u2500 WorkSection.js"
                    )
                  );
                }
              }
            ]),
            e
          );
        })(u.a.Component);
      e.default = d;
    },
    khZ8: function(t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/documentation/tutorial",
        function() {
          var t = n("f00X");
          return { page: t.default || t };
        }
      ]);
    }
  },
  [["khZ8", 1, 0]]
]);
