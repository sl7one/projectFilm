var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var r=t[e];delete t[e];var n={id:e,exports:{}};return o[e]=n,r.call(n.exports,n,n.exports),n.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,o){t[e]=o},e.parcelRequired7c6=r),r("epHO8");var n=r("dSs1Y");r("hPgsV"),r("3huUq"),r("1dkLo"),r("c9MR5"),r("cTlGb");var c=r("bnGUG"),l=r("31u3U");const a=document.querySelector(".gallery.watched"),i=document.querySelector(".gallery.queue"),d=document.querySelector(".lib-btn.watched"),u=document.querySelector(".lib-btn.queue");async function s(e){if("IMG"===e.target.nodeName){await(0,c.modalMovie)(e);try{n.Loading.hourglass({clickToClose:!0,svgSize:"200px",svgColor:"#ff6b01"}),(0,c.showModal)();const e=document.querySelectorAll('.movie-info__wrapper  .button-wrapper [type="button"]');e[0].remove(),e[1].remove()}catch(e){}finally{n.Loading.remove()}}}d.addEventListener("click",(()=>{i.innerHTML="",a.innerHTML="",l.localStorageList.checkLocalWatched(a)})),u.addEventListener("click",(()=>{i.innerHTML="",a.innerHTML="",l.localStorageList.checkLocalQueue(i)})),document.querySelector("[data-watched]").addEventListener("click",s),document.querySelector("[data-queue]").addEventListener("click",s);
//# sourceMappingURL=library.f149a79e.js.map
