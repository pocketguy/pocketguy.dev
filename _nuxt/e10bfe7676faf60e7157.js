(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{269:function(e,t,n){var map={"./pocketguy.dev.md":270};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}r.keys=function(){return Object.keys(map)},r.resolve=o,e.exports=r,r.id=269},270:function(e,t,n){"use strict";n.r(t),t.default={meta:{title:"pocketguy.dev",description:"Проект pocketgy.dev — сайт веб-разработчика\n"},html:'<h1>pocketguy.dev</h1>\n<p>сайт-веб разработчика (этот)</p>\n<p>расположен по адресу <a rel="noopener noreferrer nofollow" href="https://pocketguy.dev">https://pocketguy.dev</a></p>\n'}},271:function(e,t,n){var map={"./typography.md":272};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}r.keys=function(){return Object.keys(map)},r.resolve=o,e.exports=r,r.id=271},272:function(e,t,n){"use strict";n.r(t),t.default={meta:{title:"Мой первый пост",description:"страница с типографикой"},html:'<h1>Muneris ter patris hoc non quondam per</h1>\n<h2>Et obscenae velamina</h2>\n<p>Lorem markdownum soporem omnia? Tecum unde prosecta et non iuvenisque omnes\nlaqueoque spectent, <em>auctorem fratrem</em>: Minyis mater fratris male. In ferit\ncornua isdem; rexerit erat; et rogat litora: timor <strong>gregis prope</strong>. Prohibet\narcus deceperat Phoenissa superis, uterum Iovem, ulnas inpubibus, primumque.\nForsitan Caeneus coloni lumen et monimenta ultroque fuisti admissa lingua; ipsa.</p>\n<h2>Hic diu inmota</h2>\n<p>Ambage suo erat, ordo sunt; sub <strong>superos firmo</strong> hunc insidior pollentibus\ndederat occiduo flores Corythumque. Permisit Dictynna oculos Dianae primum\nsensit faciat virorum densum flagratque, matresque <strong>speculi</strong> haereat. Peracta\nsemper ramos regni carebis ut tumulum Lycaeo.</p>\n<pre><code class="language-javascript">var ajax = duplex_osd_ocr;\nthyristorCircuit = server * keyboard_drive_ring - itunesPumMulti;\nxmp_ide_boot.graphics_iso.applet(bmpDel(matrixKindle, smartphone,\n        num_parity), desktop_control_compile, ipx);\nsdram_cpm.typeface(boot_cdfs, dlc(fontPci,\n        ethics_ethernet_username.architecture(wordart, 2, optical_vram_pcb),\n        user * networkSliTrash), copyrightSoapAnd);\n</code></pre>\n<h2>Syrtis planguntur timens</h2>\n<p>Capillos et pontum tumidaeque laevo spoliavit; illi flumina geratis summo,\nnotavi, te! Ante Phocus Cyanen in convivia negate, digitos adsumit Alcandrumque\ncausa; vox locis, volat crinis terrae, undique? Invenit rector iamque conubia\niure quondam ipse placent; et nec cupit pietate,\n<a rel="noopener noreferrer nofollow" href="http://lentisciferumque.io/ad">te</a> aequora. Vocatur duro? Unius in paravi\nCaesareos vestem nemus.</p>\n<p>Diversa in arcus, cervicibus rursusque succedit. Potentem patrem, ego passu; non\n<em>diem ille</em> armorum agat medios narrat! <em>Accendit</em> corpore ira ipsa: hic videre\nquietis Cleonae: <em>habet faciem</em>; epulanda taurus: his.</p>\n<h2>Decipit conditus</h2>\n<p>Nec et lavit forsitan et facit terret. Sub pactaeque, socialia Chariclo tiliae,\naderat, <strong>quaerensque</strong> pariter crimen quae auras opus starent et uterum,\nprobabant. Imagine non ab faciebant: manat Lycus nec, des mearent, resto latet,\ncrescitque, <em>mea</em>.</p>\n<ol>\n<li>Sic geminaque draconem et nec cornua levat</li>\n<li>Cognoscendo crudelius meminere pedum sequerere versato petit</li>\n<li>Et est tamen lecto memorant attonitos tolerare</li>\n</ol>\n<p>Aurea ad Idomeneus ad tamen et abest quidque, quondam <strong>vincar</strong>, fremit silvas\nhabe celebres Ityosque fuit plura frustra! Pellibus lumina et venerat silvis\ncanentis inque fidensque. Tepido ab Iuppiter parvum dederas factum conplexa\n<a rel="noopener noreferrer nofollow" href="http://quamvis.com/exhalantes.php">ab</a> crura, et saevae flammae. Sonitu\ntrahentem abeunt <em>vada enses recta</em> habebat verberis profugo miserantibus fovet,\nut Rhodiae parientem bimembres, capillos.</p>\n'}},274:function(e,t,n){"use strict";n.r(t);var r={computed:{categoryT:function(){return"projects"===this.category?"проекты":"posts"===this.category?"блог":this.category},categoryCapitalized:function(){return this.categoryT.charAt(0).toUpperCase()+this.categoryT.slice(1)}},asyncData:function(e){var t=e.route,r=t.params.category,o=t.params.slug,c=null;return"projects"===r?c=n(269)("./".concat(o,".md")).default:"posts"===r&&(c=n(271)("./".concat(o,".md")).default),{mdDocument:c,category:r}},head:function(){return{title:this.mdDocument.meta.title,meta:[{hid:"description",name:"description",content:this.mdDocument.meta.description}]}}},o=n(13),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",{staticClass:"xs-to-el xs-ws-nowrap xs-ov-h"},[n("nuxt-link",{attrs:{to:{name:"index"}}},[e._v("главная")]),e._v(" -\n    "),n("nuxt-link",{attrs:{to:{name:"category",params:{category:e.category}}}},[e._v(e._s(e.categoryT))]),e._v("\n    -\n    "+e._s(e.mdDocument.meta.title.toLowerCase())+"\n  ")],1),e._v(" "),n("div",{staticClass:"xs-pt-8",domProps:{innerHTML:e._s(e.mdDocument.html)}})])}),[],!1,null,null,null);t.default=component.exports}}]);