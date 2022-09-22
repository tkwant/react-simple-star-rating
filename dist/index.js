"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react/jsx-runtime"),o=require("react");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=t(o),n=function(){return(n=Object.assign||function(e){for(var o,t=1,i=arguments.length;t<i;t++)for(var n in o=arguments[t])Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);return e}).apply(this,arguments)};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function r(e,o,t){if(t||2===arguments.length)for(var i,n=0,r=o.length;n<r;n++)!i&&n in o||(i||(i=Array.prototype.slice.call(o,0,n)),i[n]=o[n]);return e.concat(i||o)}function l(o){var t=o.size,i=void 0===t?25:t,r=o.strokeColor,l=void 0===r?"none":r,a=o.storkeWidth,c=void 0===a?0:a,s=o.className,u=void 0===s?"star-svg":s,d=o.style,v=void 0===d?{display:"inline"}:d;return e.jsx("svg",n({fill:"currentColor",width:i,height:i,viewBox:"0 0 24 24",className:u,style:n({},v)},{children:e.jsx("path",{fill:"currentColor",stroke:l,strokeMiterlimit:"10",strokeWidth:c,d:"M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"},void 0)}),void 0)}var a=function(){return"ontouchstart"in window||navigator.maxTouchPoints>0};function c(e,o){switch(o.type){case"PointerMove":return n(n({},e),{hoverValue:o.payload});case"PointerLeave":return{defaultValue:e.defaultValue,hoverValue:null};case"MouseClick":return n(n({},e),{defaultValue:o.payload});default:return e}}exports.Rating=function(t){var s,u,d=t.onClick,v=t.initialValue,f=void 0===v?0:v,p=t.ratingValue,h=void 0===p?0:p,y=t.iconsCount,m=void 0===y?5:y,g=t.size,k=void 0===g?40:g,w=t.readonly,x=void 0!==w&&w,C=t.fillColor,b=void 0===C?"#ffbc0b":C,j=t.fillColorArray,M=void 0===j?[]:j,L=t.emptyColor,V=void 0===L?"#cccccc":L,N=t.fullIcon,P=void 0===N?null:N,A=t.emptyIcon,S=void 0===A?null:A,R=t.customIcons,z=void 0===R?[]:R,O=t.rtl,I=void 0!==O&&O,T=t.allowHalfIcon,H=void 0!==T&&T,q=t.allowHover,B=void 0===q||q,D=t.allowHoverOnDefault,E=void 0===D||D,F=t.transition,W=void 0!==F&&F,_=t.className,X=void 0===_?"react-simple-star-rating":_,Y=t.style,G=t.fullClassName,J=void 0===G?"filled-icons":G,K=t.emptyClassName,Q=void 0===K?"empty-icons":K,U=t.fullStyle,Z=t.emptyStyle,$=t.showTooltip,ee=void 0!==$&&$,oe=t.tooltipDefaultText,te=void 0===oe?"Your Rate":oe,ie=t.tooltipArray,ne=void 0===ie?[]:ie,re=t.tooltipClassName,le=void 0===re?"react-simple-star-rating-tooltip":re,ae=t.tooltipStyle,ce=t.titleSeparator,se=void 0===ce?"out of":ce,ue=o.useReducer(c,{defaultValue:h,hoverValue:null}),de=ue[0],ve=de.defaultValue,fe=de.hoverValue,pe=ue[1];i.default.useEffect((function(){return pe({type:"MouseClick",payload:h})}),[h]);var he=function(e){var o=e.clientX,t=e.currentTarget.children[0].getBoundingClientRect(),i=t.left,n=t.right,r=t.width,l=function(e,o,t){for(var i=t/e,n=e,r=0;r<e;r+=1)if(o<=i*r+i/4){n=0===r&&o<i/2?0:r;break}return n}(ke,I?n-o:o-i,r);l>0&&fe!==l&&pe({type:"PointerMove",payload:100*l/ke})},ye=function(){fe&&(pe({type:"MouseClick",payload:fe}),d&&d(fe))},me=o.useMemo((function(){return Math.round(f/m*100)}),[f,m]),ge=o.useMemo((function(){var e=null!=ve?ve:0;return(B&&fe&&E?fe:fe&&fe>e?fe:e)||ve&&ve||me}),[B,E,fe,ve,me]),ke=o.useMemo((function(){return H?2*m:m}),[H,m]),we=o.useCallback((function(e){var o=1;return e&&(o=Math.round(e/100*ke)+1),Math.round(o-1)}),[ke]),xe=o.useCallback((function(e){var o=we(e);return H?o/2:o}),[H,we]),Ce=function(e){return ne.length>0?ne[we(e)]:xe(e)||0};return e.jsxs("span",n({style:{display:"inline-block",direction:"".concat(I?"rtl":"ltr"),touchAction:"none"}},{children:[e.jsxs("span",n({className:X,style:n({position:"relative",display:"inline-block",overflow:"hidden",whiteSpace:"nowrap",cursor:x?"":"pointer",verticalAlign:"middle",userSelect:"none"},Y),onPointerMove:x?void 0:he,onPointerEnter:x?void 0:function(e){a()&&he(e)},onPointerLeave:x?void 0:function(){a()&&ye(),pe({type:"PointerLeave"})},onClick:x?void 0:ye,"aria-hidden":"true"},{children:[e.jsx("span",n({className:Q,style:n({display:"inline-block",color:V},Z)},{children:r([],Array(m),!0).map((function(t,i){var n;return e.jsx(o.Fragment,{children:(null===(n=z[i])||void 0===n?void 0:n.icon)||S||e.jsx(l,{size:k},i)},i)}))}),void 0),e.jsx("span",n({className:J,style:n((s={position:"absolute",top:0},s[I?"right":"left"]=0,s.color=B&&fe&&M[we(fe)]||ve&&M[we(ve)]||b,s.overflow="hidden",s.whiteSpace="nowrap",s.display="inline-block",s.transition=W?"width .2s ease, color .2s ease":"",s.width="".concat(ge,"%"),s),U),title:"".concat(fe&&xe(fe)||xe(me)," ").concat(se," ").concat(m)},{children:r([],Array(m),!0).map((function(t,i){var n;return e.jsx(o.Fragment,{children:(null===(n=z[i])||void 0===n?void 0:n.icon)||P||e.jsx(l,{size:k},void 0)},i)}))}),void 0)]}),void 0),ee&&e.jsx("span",n({className:le,style:n((u={display:"inline-block",padding:"5px 15px",backgroundColor:"#333",color:"#fff"},u[I?"marginRight":"marginLeft"]=20,u.verticalAlign="middle",u.borderRadius=5,u),ae)},{children:fe&&Ce(fe)||ve&&Ce(ve)||me&&Ce(me)||te}),void 0)]}),void 0)};
//# sourceMappingURL=index.js.map