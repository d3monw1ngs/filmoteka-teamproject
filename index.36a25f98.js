var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},e={},o=t.parcelRequire7a9c;null==o&&((o=function(t){if(t in n)return n[t].exports;if(t in e){var o=e[t];delete e[t];var a={id:t,exports:{}};return n[t]=a,o.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,n){e[t]=n},t.parcelRequire7a9c=o);var a=o("2Ep0d");const i=document.querySelector(".pagination");function s(t){let n="";let e=1;t<=3?e=1:t>=19?e=16:(e=t-2,e%2==0&&(e-=1)),e>1&&(n+='<button class="pagination-button previous-page" type="submit" id="prev">&#11164</button>',n+='<button class="pagination-button" type="submit">1</button>',e>2&&(n+='<button class="pagination-button" type="submit">...</button>'));for(let o=e;o<=20&&o<e+5;o++)n+=o===t?`<button class="pagination-button current-page" type="submit">${o}</button>`:`<button class="pagination-button" type="submit">${o}</button>`;e+5<=20&&(e+5<20&&(n+='<button class="pagination-button" type="submit">...</button>'),n+='<button class="pagination-button" type="submit">20</button>'),t<20&&(n+='<button class="pagination-button next-page" type="submit" id="next">&#11166</button>'),i.innerHTML=n}let u=1;s(u),i.addEventListener("click",(t=>{const n=t.target;if(n.classList.contains("pagination-button")&&!n.id){const t=parseInt(n.textContent);isNaN(t)||(u=t,s(u),(0,a.pageCall)(u))}else n.classList.contains("previous-page")?u>1&&(u--,s(u),(0,a.pageCall)(u)):n.classList.contains("next-page")&&u<20&&(u++,s(u),(0,a.pageCall)(u))}));
//# sourceMappingURL=index.36a25f98.js.map
