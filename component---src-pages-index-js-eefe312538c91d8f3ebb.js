(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"7Qib":function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=function(e){var t={post:"글",shorts:"단상"};return t[e]?t[e]:e}},RXBc:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),o=a.n(n),i=a("Wbzz"),r=a("vOnD"),l=a("Zttt"),d=a("wtQ5"),s=(a("7Qib"),Object(r.default)(i.a).withConfig({displayName:"PostCard__StyledContainer",componentId:"sc-x3yr7s-0"})(["display:flex;flex-direction:column;gap:1px;color:inherit;transition:all 0.2s ease-in-out;-webkit-tap-highlight-color:transparent;*{-webkit-tap-highlight-color:transparent;}&:hover{transform:translateY(-2px);}"])),p=r.default.div.withConfig({displayName:"PostCard__StyledTitleContainer",componentId:"sc-x3yr7s-1"})(["display:flex;background-color:#222222;padding:10px 14px;border-radius:3px;gap:8px;align-items:center;"]),c=r.default.div.withConfig({displayName:"PostCard__StyledTitle",componentId:"sc-x3yr7s-2"})(["font-size:16px;font-weight:700;line-height:1.6;word-break:keep-all;white-space:nowrap;"]),u=r.default.div.withConfig({displayName:"PostCard__StyledSubtitle",componentId:"sc-x3yr7s-3"})(["font-size:14px;font-weight:700;line-height:1.4;opacity:0.8;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"]),f=r.default.div.withConfig({displayName:"PostCard__StyledDateContainer",componentId:"sc-x3yr7s-4"})(["background-color:rgba(34,34,34,0.63);padding:4px 14px;border-radius:3px;font-size:12px;font-weight:400;color:rgb(87,87,87);display:flex;gap:8px;"]),g=function(e){var t=e.title,a=e.date,n=e.subtitle,i=(e.category,e.preview,e.to);return o.a.createElement(s,{to:i},o.a.createElement(p,null,o.a.createElement(c,null,t),n&&o.a.createElement(u,null,n)),o.a.createElement(f,null,o.a.createElement("span",null,a)))},m=r.default.ol.withConfig({displayName:"pages__StyledPostList",componentId:"sc-1c2ua26-0"})(["max-width:1400px;margin:0 auto;display:flex;flex-direction:column;gap:12px;padding:160px 12px;"]);t.default=function(){var e=Object(i.c)("1287959935").allMarkdownRemark.edges;return o.a.createElement(l.a,{headerBigSize:!0},o.a.createElement(d.a,{title:"글"}),o.a.createElement(m,null,e.map((function(e,t){return o.a.createElement("li",{key:t},o.a.createElement(g,{title:e.node.frontmatter.title,subtitle:e.node.frontmatter.subtitle,category:e.node.frontmatter.category,date:e.node.frontmatter.date,to:"/"+e.node.frontmatter.category+e.node.fields.slug}))}))))}}}]);