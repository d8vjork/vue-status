webpackJsonp([1],{"/9ra":function(t,s,e){"use strict";var a=e("GvDl"),i=e("8UjY"),n=e("VU/8"),c=n(a.a,i.a,null,null,null);s.a=c.exports},"0ZE5":function(t,s,e){"use strict";s.a={props:{templates:{type:Array,required:!0},repo:{type:Object,required:!0}}}},"6tV6":function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("router-view",{attrs:{repo:t.repo_data,templates:t.templates}})],1)},i=[],n={render:a,staticRenderFns:i};s.a=n},"8UjY":function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("nav",{staticClass:"navbar navbar-expand-lg navbar-light"},[e("div",{staticClass:"container"},[e("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("VueState")]),t._v(" "),e("ul",{staticClass:"navbar-nav"},[e("li",{staticClass:"nav-item dropdown"},[e("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"javascript:;","aria-haspopup":"true","aria-expanded":"false"},on:{click:function(s){t.toggleDropdown("tplDropdown")}}},[t._v("\n            Templates\n          ")]),t._v(" "),e("div",{staticClass:"dropdown-menu",attrs:{id:"tplDropdown","aria-labelledby":"tplDropdown"}},t._l(t.templates,function(s,a){return e("a",{key:a,staticClass:"dropdown-item",class:{active:"bootstrap"===s.codename},attrs:{href:"javascript:;"},on:{click:function(e){t.$router.push({name:s.codename})}}},[t._v("\n              "+t._s(s.name)+"\n            ")])}))])])])]),t._v(" "),e("div",{staticClass:"container mt-5"},[e("div",{staticClass:"row text-uppercase text-center mb-5"},[e("div",{staticClass:"col-12 col-lg-3"},[e("p",{staticClass:"lead mb-0"},[t._v("Criticals")]),t._v(" "),e("h1",{staticClass:"display-4"},[t._v(t._s(t.repo.criticals.length))])]),t._v(" "),e("div",{staticClass:"col-12 col-lg-3"},[e("p",{staticClass:"lead mb-0"},[t._v("Issues")]),t._v(" "),e("h1",{staticClass:"display-4"},[t._v(t._s(t.repo.issues))])]),t._v(" "),t._m(0),t._v(" "),t._m(1)]),t._v(" "),e("div",{staticClass:"row text-uppercase text-center mb-5"},[e("div",{staticClass:"col-12 col-lg-4"},[e("div",{staticClass:"card text-white",class:t.repo.status.web?"bg-success":"bg-danger"},[e("div",{staticClass:"card-body"},[t._v("\n            web\n          ")])])]),t._v(" "),e("div",{staticClass:"col-12 col-lg-4"},[e("div",{staticClass:"card text-white",class:t.repo.status.web?"bg-success":"bg-danger"},[e("div",{staticClass:"card-body"},[t._v("\n            api\n          ")])])]),t._v(" "),e("div",{staticClass:"col-12 col-lg-4"},[e("div",{staticClass:"card text-white",class:t.repo.status.web?"bg-success":"bg-danger"},[e("div",{staticClass:"card-body"},[t._v("\n            cdn\n          ")])])])]),t._v(" "),t._l(t.repo.criticals,function(s,a){return e("div",{key:a,staticClass:"card mb-3"},[e("div",{staticClass:"card-body"},[e("h4",{staticClass:"card-title"},[t._v(t._s(s.title))]),t._v(" "),e("h6",{staticClass:"card-subtitle mb-2 text-muted"},[t._v(t._s(s.created_at))]),t._v(" "),e("p",{staticClass:"card-text"},[t._v("\n          "+t._s(s.body)+"\n        ")])])])})],2),t._v(" "),e("div",{staticClass:"bg-light text-center py-5 mt-5"},[e("div",{staticClass:"container"},[t._m(2),t._v(" "),e("p",[e("a",{attrs:{href:this.$env.REPO_URL}},[t._v("\n          VueStatus\n        ")])])])])])},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"col-12 col-lg-3"},[e("p",{staticClass:"lead mb-0"},[t._v("Requests")]),t._v(" "),e("h1",{staticClass:"display-4"},[t._v("0")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"col-12 col-lg-3"},[e("p",{staticClass:"lead mb-0"},[t._v("Days")]),t._v(" "),e("h1",{staticClass:"display-4"},[t._v("0")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[e("strong",[t._v("VueStatus")]),t._v(" by "),e("a",{attrs:{href:"https://d8vjork.es"}},[t._v("@d8vjork")]),t._v(".\n        The source code is licensed under "),e("a",{attrs:{href:"http://opensource.org/licenses/mit-license.php"}},[t._v("MIT")]),t._v(".\n      ")])}],n={render:a,staticRenderFns:i};s.a=n},"8nUN":function(t,s,e){"use strict";var a=e("0ZE5"),i=e("I8Od"),n=e("VU/8"),c=n(a.a,i.a,null,null,null);s.a=c.exports},GvDl:function(t,s,e){"use strict";s.a={props:{templates:{type:Array,required:!0},repo:{type:Object,required:!0}},methods:{toggleDropdown:function(t){document.getElementById(t).classList.toggle("show")}}}},Hjm7:function(t,s,e){"use strict";var a=e("LRSs"),i=e("VK3D"),n=e("VU/8"),c=n(a.a,i.a,null,null,null);s.a=c.exports},I8Od:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"text-center pt-5"},[e("h1",[t._v("Coming soon...")])])}],n={render:a,staticRenderFns:i};s.a=n},LRSs:function(t,s,e){"use strict";s.a={props:{templates:{type:Array,required:!0},repo:{type:Object,required:!0}}}},M93x:function(t,s,e){"use strict";var a=e("xJD8"),i=e("6tV6"),n=e("VU/8"),c=n(a.a,i.a,null,null,null);s.a=c.exports},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("7+uW"),i=e("M93x"),n=e("YaEn"),c=document.createElement("link");c.rel="stylesheet",c.id="template",document.head.appendChild(c),n.a.afterEach(function(t){document.getElementById("template").setAttribute("href",t.meta.stylesheet)}),a.a.prototype.$env=e.i({NODE_ENV:"production",REPO_URL:"https://github.com/d8vjork/vue-status",API_URL:"https://api.github.com/repos/d8vjork/vue-status"}),a.a.config.productionTip=!1,new a.a({el:"#app",router:n.a,template:"<App/>",components:{App:i.a}})},T58A:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"container"},[e("nav",{staticClass:"navbar is-transparent"},[t._m(0),t._v(" "),e("div",{staticClass:"navbar-menu",attrs:{id:"navMenuTransparentExample"}},[e("div",{staticClass:"navbar-start"}),t._v(" "),e("div",{staticClass:"navbar-end"},[e("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[e("a",{staticClass:"navbar-link"},[t._v("\n              Template\n            ")]),t._v(" "),e("div",{staticClass:"navbar-dropdown is-boxed"},t._l(t.templates,function(s,a){return e("a",{key:a,staticClass:"navbar-item",class:{"is-active":"bulma"===s.codename},attrs:{href:"javascript:;"},on:{click:function(e){t.$router.push({name:s.codename})}}},[t._v("\n                "+t._s(s.name)+"\n              ")])}))])])])])]),t._v(" "),e("section",{staticClass:"section"},[e("div",{staticClass:"container"},[e("nav",{staticClass:"level"},[e("div",{staticClass:"level-item has-text-centered"},[e("div",[e("p",{staticClass:"heading"},[t._v("Criticals")]),t._v(" "),e("p",{staticClass:"title"},[t._v("\n              "+t._s(t.repo.criticals.length)+"\n            ")])])]),t._v(" "),e("div",{staticClass:"level-item has-text-centered"},[e("div",[e("p",{staticClass:"heading"},[t._v("Issues")]),t._v(" "),e("p",{staticClass:"title"},[t._v("\n              "+t._s(t.repo.issues)+"\n            ")])])]),t._v(" "),t._m(1),t._v(" "),t._m(2)])])]),t._v(" "),e("section",{staticClass:"section"},[e("div",{staticClass:"container"},[e("div",{staticClass:"columns has-text-centered is-uppercase"},[e("div",{staticClass:"column"},[e("p",{staticClass:"notification",class:t.repo.status.web?"is-success":"is-danger"},[t._v("\n            web\n          ")])]),t._v(" "),e("div",{staticClass:"column"},[e("p",{staticClass:"notification",class:t.repo.status.api?"is-success":"is-danger"},[t._v("\n            api\n          ")])]),t._v(" "),e("div",{staticClass:"column"},[e("p",{staticClass:"notification",class:t.repo.status.cdn?"is-success":"is-danger"},[t._v("\n            cdn\n          ")])])])])]),t._v(" "),e("section",{staticClass:"section"},[e("div",{staticClass:"container"},t._l(t.repo.criticals,function(s,a){return e("div",{key:a,staticClass:"box"},[e("h1",{staticClass:"title"},[t._v(t._s(s.title))]),t._v(" "),e("h2",{staticClass:"subtitle"},[t._v(t._s(s.created_at))]),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("\n          "+t._s(s.body)+"\n        ")])])}))]),t._v(" "),e("footer",{staticClass:"footer"},[e("div",{staticClass:"container"},[e("div",{staticClass:"content has-text-centered"},[t._m(3),t._v(" "),e("p",[e("a",{attrs:{href:this.$env.REPO_URL}},[t._v("\n            VueStatus\n          ")])])])])])])},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"navbar-brand"},[e("a",{staticClass:"navbar-item has-text-weight-semibold",attrs:{href:"/"}},[t._v("\n          VueStatus\n        ")]),t._v(" "),e("div",{staticClass:"navbar-burger burger",attrs:{"data-target":"navMenuTransparentExample"}},[e("span"),t._v(" "),e("span"),t._v(" "),e("span")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"level-item has-text-centered"},[e("div",[e("p",{staticClass:"heading"},[t._v("Requests")]),t._v(" "),e("p",{staticClass:"title"},[t._v("0")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"level-item has-text-centered"},[e("div",[e("p",{staticClass:"heading"},[t._v("Days")]),t._v(" "),e("p",{staticClass:"title"},[t._v("0")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[e("strong",[t._v("VueStatus")]),t._v(" by "),e("a",{attrs:{href:"https://d8vjork.es"}},[t._v("@d8vjork")]),t._v(".\n          The source code is licensed under "),e("a",{attrs:{href:"http://opensource.org/licenses/mit-license.php"}},[t._v("MIT")]),t._v(".\n        ")])}],n={render:a,staticRenderFns:i};s.a=n},VK3D:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"ui large borderless menu"},[e("div",{staticClass:"ui text container"},[t._m(0),t._v(" "),e("div",{staticClass:"right menu"},[e("div",{staticClass:"ui simple dropdown item"},[t._v("\n          Templates\n          "),e("i",{staticClass:"dropdown icon"}),t._v(" "),e("div",{staticClass:"menu"},t._l(t.templates,function(s,a){return e("a",{key:a,staticClass:"item",class:{active:"semantic-ui"===s.codename},on:{click:function(e){t.$router.push({name:s.codename})}}},[t._v("\n              "+t._s(s.name)+"\n            ")])}))])])])]),t._v(" "),e("div",{staticClass:"ui text container",staticStyle:{"margin-top":"2.5em"}},[e("div",{staticClass:"ui four small statistics"},[e("div",{staticClass:"statistic"},[e("div",{staticClass:"value"},[t._v("\n          "+t._s(t.repo.criticals.length)+"\n        ")]),t._v(" "),e("div",{staticClass:"label"},[t._v("\n          Criticals\n        ")])]),t._v(" "),e("div",{staticClass:"statistic"},[e("div",{staticClass:"value"},[t._v("\n          "+t._s(t.repo.issues)+"\n        ")]),t._v(" "),e("div",{staticClass:"label"},[t._v("\n          Issues\n        ")])]),t._v(" "),t._m(1),t._v(" "),t._m(2)]),t._v(" "),e("div",{staticClass:"ui three column grid",staticStyle:{"margin-top":"2.5em"}},[e("div",{staticClass:"column"},[e("div",{staticClass:"ui inverted center aligned segment",class:t.repo.status.web?"green":"red"},[t._v("\n          WEB\n        ")])]),t._v(" "),e("div",{staticClass:"column"},[e("div",{staticClass:"ui inverted center aligned segment",class:t.repo.status.web?"green":"red"},[t._v("\n          API\n        ")])]),t._v(" "),e("div",{staticClass:"column"},[e("div",{staticClass:"ui inverted center aligned segment",class:t.repo.status.web?"green":"red"},[t._v("\n          CDN\n        ")])])]),t._v(" "),t._l(t.repo.criticals,function(s,a){return e("div",{key:a,staticClass:"ui fluid card",staticStyle:{"margin-top":"2.5em"}},[e("div",{staticClass:"content"},[e("div",{staticClass:"header"},[t._v("\n          "+t._s(s.title)+"\n        ")]),t._v(" "),e("div",{staticClass:"meta"},[t._v("\n          "+t._s(s.created_at)+"\n        ")]),t._v(" "),e("div",{staticClass:"description"},[t._v("\n          "+t._s(s.body)+"\n        ")])])])})],2),t._v(" "),t._m(3)])},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"item"},[e("strong",[t._v("VueStatus")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"statistic"},[e("div",{staticClass:"value"},[t._v("\n          0\n        ")]),t._v(" "),e("div",{staticClass:"label"},[t._v("\n          Requests\n        ")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"statistic"},[e("div",{staticClass:"value"},[t._v("\n          0\n        ")]),t._v(" "),e("div",{staticClass:"label"},[t._v("\n          Days\n        ")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"ui inverted vertical segment",staticStyle:{padding:"5em 0em","margin-top":"2.5em"}},[e("div",{staticClass:"ui center aligned container"},[e("div",{staticClass:"ui stackable inverted divided equal height stackable grid"},[e("div",{staticClass:"eight wide column"},[e("h4",{staticClass:"ui inverted header"},[t._v("About")]),t._v(" "),e("div",{staticClass:"ui inverted link list"},[e("a",{staticClass:"item",attrs:{href:"https://d8vjork.es"}},[t._v("@d8vjork")]),t._v(" "),e("a",{staticClass:"item",attrs:{href:"https://github.com/d8vjork/vue-status"}},[t._v("GitHub Repo")]),t._v(" "),e("a",{staticClass:"item",attrs:{href:"http://opensource.org/licenses/mit-license.php"}},[t._v("MIT License")])])]),t._v(" "),e("div",{staticClass:"eight wide column"},[e("h4",{staticClass:"ui inverted header"},[t._v("VueStatus")]),t._v(" "),e("p",[t._v("Build status pages with VueJS.")])])])])])}],n={render:a,staticRenderFns:i};s.a=n},YaEn:function(t,s,e){"use strict";var a=e("7+uW"),i=e("/ocq"),n=e("dZ7w"),c=e("/9ra"),r=e("8nUN"),l=e("Hjm7");a.a.use(i.a),s.a=new i.a({mode:"history",routes:[{path:"/",name:"bootstrap",component:c.a,meta:{stylesheet:"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css"}},{path:"/bulma",name:"bulma",component:n.a,meta:{stylesheet:"https://cdn.jsdelivr.net/npm/bulma@0.5/css/bulma.min.css"}},{path:"/bento-ui",name:"bento-ui",component:r.a,meta:{stylesheet:"https://cdn.jsdelivr.net/npm/bento-ui@0.6/dist/bento.min.css"}},{path:"/semantic-ui",name:"semantic-ui",component:l.a,meta:{stylesheet:"https://cdn.jsdelivr.net/npm/semantic-ui-css@2.2/semantic.min.css"}}]})},dZ7w:function(t,s,e){"use strict";var a=e("jNdc"),i=e("T58A"),n=e("VU/8"),c=n(a.a,i.a,null,null,null);s.a=c.exports},jNdc:function(t,s,e){"use strict";s.a={props:{templates:{type:Array,required:!0},repo:{type:Object,required:!0}}}},xJD8:function(t,s,e){"use strict";var a=e("mtWM"),i=e.n(a);s.a={name:"app",data:function(){return{repo_data:{criticals:[],status:{web:!0,api:!0,cdn:!0},issues:0,created_at:null},templates:[{name:"Bootstrap",codename:"bootstrap"},{name:"Bulma",codename:"bulma"},{name:"Semantic UI",codename:"semantic-ui"},{name:"Bento UI",codename:"bento-ui"}]}},methods:{getStatus:function(t){for(var s=0;s<t.length;s++)for(var e=0;e<this.repo_data.criticals.length;e++)this.repo_data.criticals[e].labels.filter(function(e){return e.name===t[s]})&&(this.repo_data.status[t[s]]=!1)}},mounted:function(){var t=this;i.a.get(this.$env.API_URL).then(function(s){t.repo_data.issues=s.data.open_issues_count,t.repo_data.created_at=s.data.created_at}),i.a.get(this.$env.API_URL+"/issues",{labels:"critical"}).then(function(s){t.repo_data.criticals=s.data,t.getStatus(["web","api","cdn"])})}}}},["NHnr"]);
//# sourceMappingURL=app.f24b24f1784737279b14.js.map