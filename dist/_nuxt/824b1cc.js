(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{345:function(t,e,n){var content=n(348);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(112).default)("953cf85a",content,!0,{sourceMap:!1})},346:function(t,e,n){"use strict";n.r(e);n(24);var o={name:"PokemonInfos",props:["pokemonFullInfo"]},l=(n(347),n(70)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"pokemonInfoCard"},[e("div",{staticClass:"sectionInfos"},[e("b-img",{staticClass:"pokemonImg",attrs:{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(t.pokemonFullInfo.id,".png"),fluid:"",alt:t.pokemonFullInfo.name}}),t._v(" "),e("div",{staticClass:"infos"},[e("h2",{staticClass:"text-capitalize"},[t._v(t._s(t.pokemonFullInfo.name))]),t._v(" "),t._l(t.pokemonFullInfo.types,(function(n,o){return e("b-badge",{key:o,staticClass:"mr-1 d-inline text-capitalize",attrs:{variant:"dark"}},[t._v("\n        "+t._s(n.type.name)+"\n      ")])}))],2)],1),t._v(" "),e("div",{staticClass:"movesList mt-1"},[e("p",{staticClass:"h3 text-center"},[t._v("Moves")]),t._v(" "),e("b-list-group",t._l(t.pokemonFullInfo.moves,(function(n,o){return e("b-list-group-item",{key:o},[t._v("\n        "+t._s(n.move.name)+"\n      ")])})),1)],1)])}),[],!1,null,"cb1e7dfc",null);e.default=component.exports},347:function(t,e,n){"use strict";n(345)},348:function(t,e,n){var o=n(111)(!1);o.push([t.i,".pokemonImg[data-v-cb1e7dfc]{width:9.375rem;height:9.375rem}.pokemonInfoCard .sectionInfos[data-v-cb1e7dfc]{display:flex;align-items:center}",""]),t.exports=o}}]);