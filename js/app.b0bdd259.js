(function(e){function t(t){for(var s,i,u=t[0],c=t[1],o=t[2],l=0,h=[];l<u.length;l++)i=u[l],a[i]&&h.push(a[i][0]),a[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);f&&f(t);while(h.length)h.shift()();return r.push.apply(r,o||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],s=!0,u=1;u<n.length;u++){var c=n[u];0!==a[c]&&(s=!1)}s&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var s={},a={app:0},r=[];function i(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=s,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(n,s,function(t){return e[t]}.bind(null,s));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var o=0;o<u.length;o++)t(u[o]);var f=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"458f":function(e,t,n){},4678:function(e,t,n){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=r(e);return n(t)}function r(e){var t=s[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}a.keys=function(){return Object.keys(s)},a.resolve=r,e.exports=a,a.id="4678"},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),a=n("f23d"),r=(n("202f"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Standard Game")]),e._v(" | "),n("router-link",{attrs:{to:"/shuffled"}},[e._v("Shuffled Game")])],1),n("router-view")],1)}),i=[],u=(n("5c0b"),n("2877")),c={},o=Object(u["a"])(c,r,i,!1,null,null,null),f=o.exports,l=n("8c4f"),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about"},[n("h1",[e._v("Standard Minesweeper")]),n("game")],1)},d=[],b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"game"},[n("p",[e._v("Mines Left: "+e._s(e.mines-e.flagged))]),n("p",[e._v("Time played: "+e._s(e.formattedTime))]),n("table",e._l(e.grid,(function(t,s){return n("tr",{key:s},e._l(t,(function(t,a){return n("td",{key:a,on:{click:function(){return e.click(a,s)}}},[n("square",{ref:t.ref,refInFor:!0,attrs:{click:function(t){return e.click(a,s,t)},rightClick:function(){return e.rightClick(a,s)},numberClick:function(){return e.numberClick(a,s)},number:t.number,hasMine:t.hasMine,showMine:t.showMine,hasFlag:t.hasFlag,gameState:e.state}})],1)})),0)})),0),n("p",[e._v(e._s(e.message))]),e.state!==e.RUNNING?n("div",[n("button",{on:{click:e.reset}},[e._v("Reset")])]):e._e()])},m=[],j=(n("ac6a"),n("c5f6"),n("c1df")),p=n.n(j),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"square"},["button"===e.state?n("div",[n("button",{ref:"button",on:{click:function(t){return t.stopPropagation(),e.handleClick()},contextmenu:function(t){return t.stopPropagation(),e.handleRightClick(t)}}},[e.hasFlag?n("span",[e._v("F")]):e._e(),e.showMine?n("span",[e._v("M")]):e._e()])]):e._e(),"number"===e.state?n("div",[!e.hasMine&&e.number>0?n("div",{class:"number num-"+e.number,on:{click:function(t){return t.stopPropagation(),e.handleNumberClick(t)}}},[n("p",[e._v(e._s(e.number))])]):e._e(),e.hasMine?n("div",[n("p",[e._v("M")])]):e._e()]):e._e()])},v=[],k={name:"square",components:{},props:{click:{type:Function,default:function(){}},rightClick:{type:Function,default:function(){}},numberClick:{type:Function,default:function(){}},number:{type:Number,default:0},hasMine:{type:Boolean,default:!1},showMine:{type:Boolean,default:!1},hasFlag:{type:Boolean,default:!1},gameState:{type:String,required:!0}},data:function(){return{state:"button"}},computed:{isUnClicked:function(){return"button"===this.state}},mounted:function(){this.reset()},methods:{handleClick:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.$refs.button.blur(),"running"===this.gameState&&(this.state="number",this.click(e))},handleRightClick:function(e){this.$refs.button.blur(),e.preventDefault(),"button"===this.state&&"running"===this.gameState&&this.rightClick()},handleNumberClick:function(){this.numberClick()},clickFromParent:function(){"button"===this.state&&this.handleClick(!1)},reset:function(){this.state="button"}}},y=k,_=(n("d652"),Object(u["a"])(y,g,v,!1,null,null,null)),M=_.exports;function w(e){var t,n,s=e.length;while(0!==s)n=Math.floor(Math.random()*s),s-=1,t=e[s],e[s]=e[n],e[n]=t;return e}function S(e){return JSON.parse(JSON.stringify(e))}var O,x,q="running",C="lose",F="win",N={name:"game",components:{Square:M},props:{x:{type:Number,default:8},y:{type:Number,default:8},mines:{type:Number,default:9}},data:function(){return{grid:[],clicks:0,flagged:0,squaresLeft:0,time:0,message:"",state:q,RUNNING:q}},computed:{formattedTime:function(){return p.a.utc(p.a.duration(this.time,"seconds").asMilliseconds()).format("mm:ss")}},mounted:function(){var e=this;this.generate(this.x,this.y),setInterval((function(){e.time+=1}),1e3)},methods:{generate:function(e,t){for(var n=this,s=[],a=0;a<t;a+=1){this.grid.push([]);for(var r=function(e){var t="".concat(e,":").concat(a),r={x:e,y:a,number:1,hasMine:!1,showMine:!1,hasFlag:!1,ref:t};n.grid[a].push(r),s.push(r),n.$nextTick((function(){n.getSquare(r).reset()}))},i=0;i<e;i+=1)r(i)}w(s);for(var u=0;u<this.mines;u+=1)s[u].hasMine=!0;this.squaresLeft=e*t,this.updateNumbers()},click:function(e,t,n){var s=this;if(!this.state!==q){!0===n&&(this.clicks+=1);var a=this.get(e,t);if(a.hasMine&&1===this.clicks)return this.getFirstEmptySquare().hasMine=!0,a.hasMine=!1,void this.updateNumbers();a.hasMine?this.gameLost():(!0===n&&this.shuffle(),this.$nextTick((function(){0===a.number&&s.clickAround(e,t),s.updateState()})))}},rightClick:function(e,t){var n=this.get(e,t);n.hasFlag?(n.hasFlag=!1,this.flagged-=1):(n.hasFlag=!0,this.flagged+=1)},numberClick:function(e,t){var n=this,s=this.get(e,t),a=0;this.preformActionOnNeighborSquares(e,t,(function(e){e.hasFlag&&(a+=1)})),a>=s.number&&this.preformActionOnNeighborSquares(e,t,(function(e){e.hasFlag||n.getSquare(e).clickFromParent()}))},get:function(e,t){return this.grid[t][e]},getSquare:function(e){return this.$refs[e.ref][0]},updateNumbers:function(){var e=this;this.grid.forEach((function(t,n){t.forEach((function(t,s){t.hasMine||(t.number=e.getCountForSquare(s,n))}))}))},updateState:function(){var e=this,t=0;this.preformActionOnAll((function(n){"button"===e.getSquare(n).state&&(t+=1)})),this.squaresLeft=t,this.squaresLeft===this.mines&&this.gameWon()},getFirstEmptySquare:function(){for(var e=0;e<this.y;e+=1){this.grid.push([]);for(var t=0;t<this.x;t+=1){var n=this.get(t,e);if(!n.hasMine)return n}}return null},preformActionOnAll:function(e){for(var t=0;t<this.y;t+=1)for(var n=0;n<this.x;n+=1){var s=this.get(n,t);e(s)}},preformActionOnNeighborSquares:function(e,t,n){for(var s=t-1;s<=t+1;s+=1)if(!(s<0||s>=this.y))for(var a=e-1;a<=e+1;a+=1)if(!(a<0||a>=this.x)&&(s!==t||a!==e)){var r=this.get(a,s);n(r)}},getCountForSquare:function(e,t){var n=0;return this.preformActionOnNeighborSquares(e,t,(function(e){e.hasMine&&(n+=1)})),n},clickAround:function(e,t){var n=this;this.preformActionOnNeighborSquares(e,t,(function(e){n.getSquare(e).clickFromParent()}))},gameLost:function(){this.message="game over",this.state=C,this.preformActionOnAll((function(e){e.hasMine&&(e.showMine=!0)}))},gameWon:function(){this.message="you won in ".concat(this.time," seconds!"),this.state=F,this.preformActionOnAll((function(e){e.hasMine&&(e.showMine=!0)}))},reset:function(){this.clicks=0,this.flagged=0,this.squaresLeft=0,this.message="",this.state=q,this.grid=[],this.generate(this.x,this.y)},shuffle:function(){}}},z=N,A=(n("bb9a"),Object(u["a"])(z,b,m,!1,null,null,null)),E=A.exports,$={name:"home",components:{Game:E}},P=$,T=Object(u["a"])(P,h,d,!1,null,null,null),L=T.exports,G=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about"},[n("h1",[e._v("Shuffled Minesweeper")]),n("shuffled-game"),e._m(0)],1)},U=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("This verison of the game will shuffle the mines every time you open a square. "),n("br"),e._v(" The numbers will allways represent the current state. ")])}],R={name:"shuffled-game",extends:E,methods:{shuffle:function(){var e=this,t=[];this.preformActionOnAll((function(n){e.getSquare(n).isUnClicked&&t.push(n)}));var n=w(S(t));n.forEach((function(e,n){var s=t[n];s.hasMine=e.hasMine,s.showMine=e.showMine,s.hasFlag=e.hasFlag,e.x=s.x,e.y=s.y})),this.$nextTick((function(){e.updateNumbers()}))}}},I=R,J=Object(u["a"])(I,O,x,!1,null,null,null),B=J.exports,D={name:"home",components:{ShuffledGame:B}},W=D,H=Object(u["a"])(W,G,U,!1,null,null,null),K=H.exports;s["a"].use(l["a"]);var Q=new l["a"]({routes:[{path:"/",name:"game",component:L},{path:"/shuffled",name:"shuffled-game",component:K}]}),V=n("2f62");s["a"].use(V["a"]);var X=new V["a"].Store({state:{},mutations:{},actions:{}});s["a"].use(a["a"]),s["a"].config.productionTip=!1,new s["a"]({router:Q,store:X,render:function(e){return e(f)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var s=n("458f"),a=n.n(s);a.a},"6b1c":function(e,t,n){},"718a":function(e,t,n){},bb9a:function(e,t,n){"use strict";var s=n("6b1c"),a=n.n(s);a.a},d652:function(e,t,n){"use strict";var s=n("718a"),a=n.n(s);a.a}});
//# sourceMappingURL=app.b0bdd259.js.map