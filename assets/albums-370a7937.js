import{g as c,o as a,c as i,w as r,a as l,j as n,t as p,f as h,h as _,F as v,i as y,k as A,A as k,U as L,a2 as Y,a3 as $,R as w,l as B,d as u,a1 as C}from"./app-109f7ca1.js";import{o as P}from"./index-8f8e9689.js";import{_ as F}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-247c8ef1.js";const x=["title"],E=["src","alt","on-error"],I=c({__name:"YunAlbum",props:{album:{}},setup(m){return(e,t)=>{const o=h;return a(),i(o,{class:"yun-album-list-item",to:e.album.url},{default:r(()=>[l("figure",{title:e.album.desc},[l("img",{loading:"lazy",class:"yun-album-list-cover",src:e.album.cover,alt:e.album.caption,"on-error":n(P)},null,40,E),l("figcaption",null," 「"+p(e.album.caption)+"」 ",1)],8,x)]),_:1},8,["to"])}}}),N={class:"yun-album-list"},S=c({__name:"YunAlbumList",props:{albums:{}},setup(m){return(e,t)=>{const o=I;return a(),_("div",N,[(a(!0),_(v,null,y(e.albums,s=>(a(),i(o,{key:s.url,album:s},null,8,["album"]))),128))])}}});const V={text:"center",class:"yun-text-light",p:"2"},R=c({__name:"albums",setup(m){const{t:e}=A(),t=k(),o=L(t);Y([$({"@type":"CollectionPage"})]);const s=w(()=>t.value.albums||[]);return(j,z)=>{const b=F,d=S,f=B("router-view"),g=C;return a(),i(g,null,{"main-header":r(()=>[u(b,{title:n(o)||n(e)("title.album"),icon:n(t).icon||"i-ri-gallery-line",color:n(t).color},null,8,["title","icon","color"])]),"main-content":r(()=>[l("div",V,p(n(e)("counter.albums",s.value.length)),1),u(d,{albums:s.value},null,8,["albums"]),u(f)]),_:1})}}});export{R as default};
