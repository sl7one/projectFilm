var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var o=r[e];delete r[e];var l={id:e,exports:{}};return n[e]=l,o.call(l.exports,l,l.exports),l.exports}var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}).register=function(e,n){r[e]=n},e.parcelRequired7c6=o),o("hPgsV"),o("3huUq"),o("1dkLo"),o("c9MR5"),o("cTlGb"),o("bnGUG");var l=o("31u3U");const t=document.querySelector(".gallery.watched"),c=document.querySelector(".gallery.queue"),i=document.querySelector(".lib-btn.watched"),d=document.querySelector(".lib-btn.queue");console.log(i);i.addEventListener("click",(()=>{c.innerHTML="",t.innerHTML="",l.localStorageList.checkLocalWatched(t)})),d.addEventListener("click",(()=>{c.innerHTML="",t.innerHTML="",l.localStorageList.checkLocalQueue(c)}));
//# sourceMappingURL=library.4bd96117.js.map
