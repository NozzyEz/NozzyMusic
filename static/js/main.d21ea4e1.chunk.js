(this.webpackJsonpnozzymusic=this.webpackJsonpnozzymusic||[]).push([[0],{22:function(e,t,a){},26:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a.n(c),r=a(16),s=a.n(r),i=a(4),o=a.n(i),l=a(8),u=a(10),p=a(3),h=(a(22),a(9),a(5));var d=function(){return[{id:Object(h.v4)(),name:"Evenfall",author:"Aarigod",cover:"https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-1024x1024.jpg",colors:["#BAD07B","#1E170F"],audio:"https://mp3.chillhop.com/serve.php/?mp3=13007",active:!0},{id:Object(h.v4)(),name:"Funkaholic",author:"Flitz & Suppe",cover:"https://chillhop.com/wp-content/uploads/2020/07/5c2d5b05dfc98afb5ed850ca918f732445b8ca1e-1024x1024.jpg",colors:["#7A99AD","#DA8A8F"],audio:"https://mp3.chillhop.com/serve.php/?mp3=8242",active:!1},{id:Object(h.v4)(),name:"Home Court",author:"Blue Wednesday & Shopan",cover:"https://chillhop.com/wp-content/uploads/2020/12/33a2a875828118a3ff260638a88362936104879a-1024x1024.jpg",colors:["#5058A0","#A56D9E"],audio:"https://mp3.chillhop.com/serve.php/?mp3=11233",active:!1},{id:Object(h.v4)(),name:"Peaches",author:"Philanthrope & The Field Tapes",cover:"https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg",colors:["#8AA85F","#9BB2B6"],audio:"https://mp3.chillhop.com/serve.php/?mp3=11246",active:!1},{id:Object(h.v4)(),name:"Habitat",author:"Philanthrope & kendall Miles",cover:"https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg",colors:["#633924","#AE463B"],audio:"https://mp3.chillhop.com/serve.php/?mp3=10265",active:!1},{id:Object(h.v4)(),name:"New Horizons",author:"Nymano & Epektase",cover:"https://chillhop.com/wp-content/uploads/2020/09/09fb436604242df99f84b9f359acb046e40d2e9e-1024x1024.jpg",colors:["#574F8C","#171312"],audio:"https://mp3.chillhop.com/serve.php/?mp3=10142",active:!1},{id:Object(h.v4)(),name:"Sombre",author:"Psalm Trees & Guillaume Muschalle",cover:"https://chillhop.com/wp-content/uploads/2020/07/6fe1f08735f7c54e10e72d2f9d1bec4c78ca01bf-1024x1024.jpg",colors:["#B1856C","#DAA495"],audio:"https://mp3.chillhop.com/serve.php/?mp3=9504",active:!1},{id:Object(h.v4)(),name:"Bright Mornings",author:"Sundreamer & Edapollo",cover:"https://chillhop.com/wp-content/uploads/2021/02/08cbb0848f669e1bd8b5a5152c4b7d20edf1b499-1024x1024.jpg",colors:["#15201E","#320B13"],audio:"https://mp3.chillhop.com/serve.php/?mp3=9212",active:!1},{id:Object(h.v4)(),name:"Far From Home",author:"Toonorth",cover:"https://chillhop.com/wp-content/uploads/2020/07/ad7fc4dda66ba986466fd2b1c416b0b12411ee28-1024x1024.jpg",colors:["#70A39C","#9ABC97"],audio:"https://mp3.chillhop.com/serve.php/?mp3=8127",active:!1},{id:Object(h.v4)(),name:"Backyard Puddles",author:"Sleepy Fish",cover:"https://chillhop.com/wp-content/uploads/2020/09/c209a7df7b9bc133dfff73ce86ebc3c57c2b73dd-1024x1024.jpg",colors:["#2E304F","#7ABBCF"],audio:"https://mp3.chillhop.com/serve.php/?mp3=10032",active:!1}]},b=a(0);var j=function(e){var t=e.track,a=(e.tracks,e.audioRef),c=e.setCurrent,n=e.isPlaying,r=e.isDark;function s(){return(s=Object(l.a)(o.a.mark((function e(r){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(t);case 2:n?a.current.play():a.current.pause();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(b.jsxs)("div",{className:"track-container ".concat(t.active?"selected":""," ").concat(r?"dark-mode":""),onClick:function(e){return s.apply(this,arguments)},children:[Object(b.jsx)("img",{className:"track-thumbnail",src:t.cover,alt:"Album art"}),Object(b.jsxs)("div",{className:"track-details",children:[Object(b.jsx)("h4",{className:"track-name",children:t.name}),Object(b.jsx)("p",{className:"track-author",children:t.author})]})]})};a(26);var m=function(e){var t=e.tracks,a=e.setCurrent,c=e.audioRef,n=e.isPlaying,r=e.isPlaylistOpen,s=e.isDark;return Object(b.jsxs)("div",{className:"playlist ".concat(r?"active":""," ").concat(s?"dark-mode":""),children:[Object(b.jsx)("h3",{children:"Playlist"}),Object(b.jsx)("div",{className:"playlist-container",children:t.map((function(e){return Object(b.jsx)(j,{track:e,isDark:s,audioRef:c,tracks:t,setCurrent:a,isPlaying:n},e.id)}))})]})},f=a(7),O=a(6),x=(a(32),function(e){var t=e.audioRef,a=e.current,n=e.songInfo,r=e.setSongInfo,s=e.isPlaying,i=e.setIsPlaying,h=e.hasRepeatOne,d=e.setRepeatOne,j=e.hasRepeatAll,m=e.setRepeatAll,x=e.hasShuffle,v=e.setShuffle,k=e.setCurrent,g=e.tracks,y=e.isDark,N=Object(c.useState)("NONE"),C=Object(p.a)(N,2),P=C[0],S=C[1],A=Object(c.useState)("OFF"),w=Object(p.a)(A,2),F=w[0],D=w[1];function T(e){return B.apply(this,arguments)}function B(){return(B=Object(l.a)(o.a.mark((function e(c){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=g.findIndex((function(e){return e.id===a.id})),"previous"!==c){e.next=11;break}if((n-1)%g.length!==-1){e.next=7;break}return e.next=5,k(g[g.length-1]);case 5:e.next=9;break;case 7:return e.next=9,k(g[(n-1)%g.length]);case 9:e.next=13;break;case 11:return e.next=13,k(g[(n+1)%g.length]);case 13:s&&t.current.play();case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var R=function(e){return e?Math.floor(e/60)+":"+("0"+Math.floor(e%60)).slice(-2):"0:00"},z={transform:"translateX(".concat(n.animationPercentage,"%)")},E={background:"linear-gradient(to right, ".concat(a.colors[0],", ").concat(a.colors[1],")")};return Object(b.jsxs)("div",{className:"player ".concat(y?"dark-mode":""),children:[Object(b.jsxs)("div",{className:"time-control",children:[Object(b.jsx)("p",{children:R(n.currentTime)}),Object(b.jsxs)("div",{style:E,className:"track",children:[Object(b.jsx)("input",{type:"range",name:"time-slider",id:"time-slider",min:0,value:Math.floor(n.currentTime),max:n.duration||0,onChange:function(e){var a=e.target.value;r(Object(u.a)(Object(u.a)({},n),{},{currentTime:a})),t.current.currentTime=a}}),Object(b.jsx)("div",{style:z,className:"animate-track"})]}),Object(b.jsx)("p",{children:R(n.duration)})]}),Object(b.jsxs)("div",{className:"play-control",children:[Object(b.jsxs)("span",{className:"repeater",children:["Shuffle ",F]}),Object(b.jsx)(f.a,{onClick:function(){x?(D("OFF"),v(!1)):(D("ON"),v(!0))},className:"shuffle-btn",icon:O.d,size:"3x"}),Object(b.jsx)(f.a,{onClick:function(){return T("previous")},className:"previous-btn",icon:O.f,size:"3x"}),Object(b.jsx)(f.a,{onClick:function(){s?(t.current.pause(),i(!s)):(t.current.play(),i(!s))},className:"play-btn",icon:s?O.b:O.c,size:"3x"}),Object(b.jsx)(f.a,{onClick:function(){t.current.pause(),t.current.currentTime=0,i(!1)},className:"stop-btn",icon:O.h,size:"3x"}),Object(b.jsx)(f.a,{onClick:function(){return T("next")},className:"next-btn",icon:O.g,size:"3x"}),Object(b.jsx)(f.a,{onClick:function(){h||j?h?(d(!1),m(!0),S("ALL")):(m(!1),S("NONE")):(d(!0),S("ONE"))},icon:O.e,size:"3x"}),Object(b.jsxs)("span",{className:"repeater",children:["Repeat ",P]})]})]})});a(33);var v=function(e){var t=e.current,a=e.isPlaying,c=e.isDark;return Object(b.jsxs)("div",{className:"song-container ".concat(c?"dark-mode":""),children:[Object(b.jsx)("img",{className:"song-cover ".concat(a?"active":""),src:t.cover,alt:"Album art"}),Object(b.jsx)("h1",{className:"song-name ".concat(a?"active":""),children:t.name}),Object(b.jsx)("h3",{className:"song-author ".concat(a?"active":""),children:t.author})]})};a(34);var k=function(e){var t=e.isPlaylistOpen,a=e.setIsPlaylistOpen,c=e.isDark,n=e.setDark;function r(){return(r=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c){e.next=5;break}return e.next=3,n(!0);case 3:e.next=7;break;case 5:return e.next=7,n(!1);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(b.jsxs)("nav",{className:"nav-bar ".concat(c?"dark-mode":""),children:[Object(b.jsxs)("div",{className:"nav-container",children:[Object(b.jsx)("h2",{children:"NozzyMusic"}),Object(b.jsxs)("button",{onClick:function(){return a(!t)},className:"playlist-btn",children:[Object(b.jsx)(f.a,{icon:O.a}),Object(b.jsx)("span",{children:" Playlist "})]})]}),Object(b.jsx)("button",{onClick:function(){return r.apply(this,arguments)},children:"Dark Mode Toggle"})]})};var g=function(){var e=Object(c.useRef)(null),t=Object(c.useState)(!1),a=Object(p.a)(t,2),n=a[0],r=a[1],s=Object(c.useState)(d()),i=Object(p.a)(s,1)[0],h=Object(c.useState)(i[0]),j=Object(p.a)(h,2),f=j[0],O=j[1],g=Object(c.useState)(!1),y=Object(p.a)(g,2),N=y[0],C=y[1],P=Object(c.useState)(!1),S=Object(p.a)(P,2),A=S[0],w=S[1],F=Object(c.useState)(!1),D=Object(p.a)(F,2),T=D[0],B=D[1],R=Object(c.useState)(!1),z=Object(p.a)(R,2),E=z[0],M=z[1],I=Object(c.useState)(!1),L=Object(p.a)(I,2),H=L[0],J=L[1],_=Object(c.useState)({currentTime:0,duration:0,animationPercentage:0}),G=Object(p.a)(_,2),U=G[0],W=G[1];function X(e){var t=e.target.currentTime,a=e.target.duration,c=t/a*100;W(Object(u.a)(Object(u.a)({},U),{},{currentTime:t,duration:a,animationPercentage:c}))}function q(){return(q=Object(l.a)(o.a.mark((function t(){var a,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=i.findIndex((function(e){return e.id===f.id})),!A){t.next=5;break}e.current.currentTime=0,t.next=20;break;case 5:if(!T){t.next=10;break}return t.next=8,O(i[(a+1)%i.length]);case 8:t.next=20;break;case 10:if(f.id!==i[i.length-1].id){t.next=18;break}return t.next=13,C(!1);case 13:return e.current.pause(),e.current.currentTime=0,t.abrupt("return");case 18:return t.next=20,O(i[(a+1)%i.length]);case 20:if(!E||A){t.next=24;break}return c=Math.round(100*Math.random())%i.length,t.next=24,O(i[c]);case 24:e.current.play();case 25:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(c.useEffect)((function(){i.map((function(e){return e.active=e===f}))}),[f,i]),Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(k,{isPlaylistOpen:H,setIsPlaylistOpen:J,isDark:n,setDark:r}),Object(b.jsx)(v,{current:f,isPlaying:N,isDark:n}),Object(b.jsx)(x,{audioRef:e,isDark:n,current:f,songInfo:U,setSongInfo:W,isPlaying:N,setIsPlaying:C,hasRepeatOne:A,setRepeatOne:w,hasRepeatAll:T,setRepeatAll:B,hasShuffle:E,setShuffle:M,setCurrent:O,tracks:i}),Object(b.jsxs)("footer",{className:"".concat(n?"dark-mode":""),children:[Object(b.jsx)("h4",{children:"Created by: Mark Sahlgreen \xa9 2021"}),Object(b.jsxs)("div",{className:"credit",children:[Object(b.jsx)("h4",{children:"Music imported from"}),Object(b.jsx)("a",{href:"https://chillhop.com/",target:"_blank",rel:"noreferrer",children:Object(b.jsx)("img",{src:"https://chillhop.com/wp-content/themes/chillhop/assets/images/Chillhop_white.svg",alt:"ChillHop Logo"})})]})]}),Object(b.jsx)(m,{tracks:i,setCurrent:O,audioRef:e,isPlaying:N,isPlaylistOpen:H,isDark:n}),Object(b.jsx)("audio",{ref:e,src:f.audio,onLoadedMetadata:X,onTimeUpdate:X,onEnded:function(){return q.apply(this,arguments)}})]})},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,36)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};s.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root")),y()},9:function(e,t,a){}},[[35,1,2]]]);
//# sourceMappingURL=main.d21ea4e1.chunk.js.map