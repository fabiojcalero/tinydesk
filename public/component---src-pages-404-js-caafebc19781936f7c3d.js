(self.webpackChunkproject_416=self.webpackChunkproject_416||[]).push([[883],{80838:function(e,t,n){"use strict";var r=n(81253),i=n(22122),a=n(67294),o=n(85505),c=n(34621),s=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var g=a.forwardRef((function(e,t){var n=e.alignContent,c=void 0===n?"stretch":n,s=e.alignItems,l=void 0===s?"stretch":s,d=e.classes,g=e.className,x=e.component,u=void 0===x?"div":x,m=e.container,f=void 0!==m&&m,p=e.direction,v=void 0===p?"row":p,h=e.item,b=void 0!==h&&h,w=e.justify,C=void 0===w?"flex-start":w,y=e.lg,j=void 0!==y&&y,E=e.md,Z=void 0!==E&&E,S=e.sm,k=void 0!==S&&S,W=e.spacing,M=void 0===W?0:W,N=e.wrap,I=void 0===N?"wrap":N,z=e.xl,B=void 0!==z&&z,F=e.xs,G=void 0!==F&&F,D=e.zeroMinWidth,R=void 0!==D&&D,T=(0,r.Z)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),_=(0,o.Z)(d.root,g,f&&[d.container,0!==M&&d["spacing-xs-".concat(String(M))]],b&&d.item,R&&d.zeroMinWidth,"row"!==v&&d["direction-xs-".concat(String(v))],"wrap"!==I&&d["wrap-xs-".concat(String(I))],"stretch"!==l&&d["align-items-xs-".concat(String(l))],"stretch"!==c&&d["align-content-xs-".concat(String(c))],"flex-start"!==C&&d["justify-xs-".concat(String(C))],!1!==G&&d["grid-xs-".concat(String(G))],!1!==k&&d["grid-sm-".concat(String(k))],!1!==Z&&d["grid-md-".concat(String(Z))],!1!==j&&d["grid-lg-".concat(String(j))],!1!==B&&d["grid-xl-".concat(String(B))]);return a.createElement(u,(0,i.Z)({className:_,ref:t},T))})),x=(0,c.Z)((function(e){return(0,i.Z)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return s.forEach((function(r){var i=e.spacing(r);0!==i&&(n["spacing-".concat(t,"-").concat(r)]={margin:"-".concat(d(i,2)),width:"calc(100% + ".concat(d(i),")"),"& > $item":{padding:d(i,2)}})})),n}(e,"xs"),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var r={};l.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var i="".concat(Math.round(e/12*1e8)/1e6,"%");r[t]={flexBasis:i,flexGrow:0,maxWidth:i}}else r[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else r[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?(0,i.Z)(e,r):e[t.breakpoints.up(n)]=r}(t,e,n),t}),{}))}),{name:"MuiGrid"})(g);t.Z=x},34626:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r,i,a,o=n(67294),c=n(71293),s=n(80838),l=n.p+"static/feature-image-0ba2faa9e33725374343bbad3db178f0.jpg",d=n(69785),g=n(87761),x=(0,d.Z)({overrides:{MuiCard:{root:{borderRadius:"8px",backgroundColor:"rgba(255, 255, 255, 0.5)",backdropFilter:"blur(8px)",border:"1px solid rgba(255, 255, 255, 0.3)","@media (min-width: 960px)":{border:"1px solid rgba(0, 0, 0, 0.12)"}}},MuiButton:{root:{marginTop:"16px",textTransform:"none",paddingLeft:"24px",paddingRight:"24px"},containedPrimary:(r={backgroundColor:"#27AE60"},r["&:hover"]={backgroundColor:"#219653"},r),contained:(i={color:"white",backgroundColor:"#333333"},i["&:hover"]={backgroundColor:"#000000"},i),outlined:(a={borderColor:"#333333"},a["&:hover"]={borderColor:"#000000"},a)},MuiTextField:{root:{marginBottom:"16px"}}}}),u=function(e,t){var n=e.children;return o.createElement(g.Z,{theme:x},o.createElement(c.Z,{maxWidth:"xl"},o.createElement(s.Z,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:3,style:{height:"100vh"}},n,o.createElement(s.Z,{item:!0,xs:12,md:6,lg:6,className:"landing-image-container"},o.createElement("div",{className:"landing-image-wrapper"},o.createElement("img",{src:l,className:"landing-image"}))))))}},59616:function(e,t,n){"use strict";n.r(t);var r=n(67294),i=n(80838),a=n(34626),o=n(93751);t.default=function(){return r.createElement(r.Fragment,null,r.createElement(o.Z,{title:"404: Not found"}),r.createElement(a.Z,null,r.createElement(i.Z,{item:!0,xs:12,md:6,lg:6},r.createElement("h1",null,"404: Not Found"),r.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))))}}}]);
//# sourceMappingURL=component---src-pages-404-js-caafebc19781936f7c3d.js.map