_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[46],{"5jhq":function(e,n,s){"use strict";s.r(n),s.d(n,"default",(function(){return c}));var r=s("nKUr"),t=(s("q1tI"),s("pzeu")),o=s("zR9M"),i=s("Oref");function c(){return Object(r.jsxs)(i.a,{children:[Object(r.jsx)("h1",{children:"Navigation"}),Object(r.jsx)("h2",{children:"Styles"}),Object(r.jsxs)("p",{children:["You will find all the styles for these components in",Object(r.jsx)("br",{}),Object(r.jsx)("code",{children:"src/assets/jss/nextjs-material-kit/components/headerStyle.js"}),Object(r.jsx)("br",{}),Object(r.jsx)("code",{children:"src/assets/jss/nextjs-material-kit/components/headerLinksStyle.js"}),"."]}),Object(r.jsx)("p",{children:"The classic Material UI Appbar was restyled."}),Object(r.jsxs)("p",{children:["You will find this component in"," ",Object(r.jsx)("code",{children:"src/components/Header/Header.jsx"}),". In this component there is just the structure of the navbar. The links can be found in"," ",Object(r.jsx)("code",{children:"src/components/Header/HeaderLinks.jsx"}),". We've done this because we want our users to be able to add their own links easily."]}),Object(r.jsxs)("p",{children:["You can choose between 9 colors by using the ",Object(r.jsx)("code",{children:"color"})," ","property."]}),Object(r.jsxs)("p",{children:["If this property is not set, then the Appbar will be ",Object(r.jsx)("code",{children:"white"}),"."]}),Object(r.jsx)(t.a,{language:"jsx",style:o.prism,children:'Header.defaultProps = {\n  color: "white"\n};\n\nHeader.propTypes = {\n  color: PropTypes.oneOf([\n    "primary",\n    "info",\n    "success",\n    "warning",\n    "danger",\n    "transparent",\n    "white",\n    "rose",\n    "dark"\n  ]),\n  rightLinks: PropTypes.node,\n  leftLinks: PropTypes.node,\n  brand: PropTypes.string,\n  fixed: PropTypes.bool,\n  absolute: PropTypes.bool,\n  // this will cause the sidebar to change the color from\n  // this.props.color (see above) to changeColorOnScroll.color\n  // when the window.pageYOffset is heigher or equal to\n  // changeColorOnScroll.height and then when it is smaller than\n  // changeColorOnScroll.height change it back to\n  // this.props.color (see above)\n  changeColorOnScroll: PropTypes.shape({\n    height: PropTypes.number.isRequired,\n    color: PropTypes.oneOf([\n      "primary",\n      "info",\n      "success",\n      "warning",\n      "danger",\n      "transparent",\n      "white",\n      "rose",\n      "dark"\n    ]).isRequired\n  })\n};'}),Object(r.jsx)("h2",{children:"Props"}),Object(r.jsxs)("p",{children:["Please check out the"," ",Object(r.jsx)("a",{href:"https://material-ui-next.com/demos/app-bar/?ref=creativetim",target:"_blank",children:"official material-ui documentation"}),"."]})]})}},wP2k:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/documentation/navigation",function(){return s("5jhq")}])}},[["wP2k",0,2,1,3,4,5,6]]]);