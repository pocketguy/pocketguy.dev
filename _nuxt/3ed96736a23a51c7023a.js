(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{261:function(t,e,n){var r=n(7),o=n(262)(!0);r(r.S,"Object",{entries:function(t){return o(t)}})},262:function(t,e,n){var r=n(8),o=n(22),c=n(17),l=n(44).f;t.exports=function(t){return function(e){for(var n,f=c(e),d=o(f),v=d.length,i=0,y=[];v>i;)n=d[i++],r&&!l.call(f,n)||y.push(t?[n,f[n]]:f[n]);return y}}},263:function(t,e,n){var map={"./pocketguy.dev.md":264};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=263},264:function(t,e,n){"use strict";n.r(e),e.default={meta:{title:"pocketguy.dev",description:"Проект pocketgy.dev — сайт веб-разработчика\n"}}},265:function(t,e,n){var map={"./typography.md":266};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=265},266:function(t,e,n){"use strict";n.r(e),e.default={meta:{title:"Мой первый пост",description:"страница с типографикой"}}},273:function(t,e,n){"use strict";n.r(e);var r=n(43),o=(n(261),n(30),n(18),{computed:{categoryT:function(){return"projects"===this.category?"проекты":"blog"===this.category?"блог":this.category},categoryCapitalized:function(){return this.categoryT.charAt(0).toUpperCase()+this.categoryT.slice(1)}},asyncData:function(t){var e=t.route.params.category.toLowerCase(),o=null;"projects"===e?o=n(263):"blog"===e&&(o=n(265));var data={};return o.keys().forEach((function(t){return data[t]=o(t).default})),{data:data=Object.entries(data).map((function(t){var e=Object(r.a)(t,2),n=e[0],o=e[1];return{path:n,slug:n.slice(2,-3),document:o}})),category:e}}}),c=n(13),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",{staticClass:"xs-to-el xs-ws-nowrap xs-ov-h"},[n("nuxt-link",{attrs:{to:{name:"index"}}},[t._v("главная")]),t._v(" - "+t._s(t.categoryT)+"\n  ")],1),t._v(" "),n("h1",[t._v(t._s(t.categoryCapitalized))]),t._v(" "),n("ul",t._l(t.data,(function(e){return n("li",{key:e.slug},[n("h2",{staticClass:"xs-d-inl"},[n("nuxt-link",{attrs:{to:{name:"category-slug",params:{category:t.category,slug:e.slug}}}},[t._v("\n          "+t._s(e.document.meta.title)+"\n        ")])],1)])})),0)])}),[],!1,null,null,null);e.default=component.exports}}]);