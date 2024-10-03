"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[877],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=o,y=d["".concat(s,".").concat(u)]||d[u]||m[u]||a;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3842:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:10,title:"Selected Emojis"},i=void 0,l={unversionedId:"documentation/Examples/selected_emojis",id:"documentation/Examples/selected_emojis",title:"Selected Emojis",description:"To preview app with this example, clone github repo and run yarn example ios or yarn example android.",source:"@site/docs/documentation/Examples/selected_emojis.md",sourceDirName:"documentation/Examples",slug:"/documentation/Examples/selected_emojis",permalink:"/rn-emoji-keyboard/docs/documentation/Examples/selected_emojis",draft:!1,editUrl:"https://github.com/TheWidlarzGroup/rn-emoji-keyboard/tree/master/docs/docs/documentation/Examples/selected_emojis.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Selected Emojis"},sidebar:"documentation",previous:{title:"Search Bar",permalink:"/rn-emoji-keyboard/docs/documentation/Examples/search"},next:{title:"Custom Emojis Data",permalink:"/rn-emoji-keyboard/docs/documentation/Examples/emojis-data"}},s={},c=[{value:"Usage",id:"usage",level:3}],p={toc:c};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"To preview app with this example, clone ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/TheWidlarzGroup/rn-emoji-keyboard.git"},(0,o.kt)("strong",{parentName:"a"},"github repo"))," and run ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn example ios")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn example android"),".")),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("p",null,"To use this feature you have to pass a ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/modal#selectedemojis"},"selectedEmojis")," array with emoji names.\nWhen you provide selectedEmojis array, ",(0,o.kt)("inlineCode",{parentName:"p"},"onEmojiSelected")," callback will also return ",(0,o.kt)("inlineCode",{parentName:"p"},"alreadySelected")," boolean indicating whether pressed emoji was already selected or not."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import EmojiPicker, { type EmojiType } from 'rn-emoji-keyboard';\n\nconst ExampleComponent = () => {\n  // ...\n  const [currentlySelectedEmojis, setCurrentlySelectedEmojis] = useState([])\n\n  const handleOnEmojiSelected = (emoji: EmojiType) => {\n    //..Your on select logic\n\n    // Remove or add pressed emoji to the currently selected array\n    if (emoji.alreadySelected)\n      setCurrentlySelected((prev) => prev.filter((a) => a !== emoji.name))\n    else setCurrentlySelected((prev) => [...prev, emoji.name])\n\n  }\n\n  return (\n    <EmojiPicker\n      open={isOpen}\n      onClose={handleOnClose}\n      onEmojiSelected={handleOnEmojiSelected}\n      selectedEmojis={currentlySelected}\n    />\n  )\n}\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Preview",src:n(8581).Z,width:"399",height:"338"})))}m.isMDXComponent=!0},8581:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/selected-emojis-preview-47e3aff7c58d8515101bfbba63a1992d.png"}}]);