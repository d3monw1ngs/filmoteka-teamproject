!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequire7a9c;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,a.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequire7a9c=a),a.register("8OLSw",(function(e,t){var n,a,o,i;n=e.exports,a="pageCall",o=function(){return N},Object.defineProperty(n,a,{get:o,set:i,enumerable:!0,configurable:!0});var r,d,c,l,s="api_key=b5e824a3d922f68ba211fcf6dbdcb6f5",u="https://api.themoviedb.org/3/discover/movie?sort_by-popularity.desc&"+s;c=null===JSON.parse(localStorage.getItem("movie-queue"))?[]:JSON.parse(localStorage.getItem("movie-queue")),localStorage.setItem("movie-queue",JSON.stringify(c)),l=null===JSON.parse(localStorage.getItem("movie-watched"))?[]:JSON.parse(localStorage.getItem("movie-watched")),localStorage.setItem("movie-watched",JSON.stringify(l));var g,m=document.getElementById("myModal"),p=document.getElementById("modal-poster"),v=document.getElementById("modal-title"),f=document.getElementById("modal-vote"),h=document.getElementById("modal-popularity"),y=document.getElementById("modal-original-title"),E=document.getElementById("modal-genre"),b=document.getElementById("modal-overview"),L=document.getElementById("addToWatchedBtn"),x=document.getElementById("addToQueuBtn"),I=document.getElementsByClassName("close")[0];function S(){m.style.display="none"}fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=b5e824a3d922f68ba211fcf6dbdcb6f5").then((function(e){return e.json()})).then((function(e){g=e.genres,_(u),C(e)})).catch((function(e){})),I.addEventListener("click",S),window.addEventListener("click",(function(e){e.target===m&&S()}));var w,P=document.getElementById("main"),B=document.getElementById("search-form"),k=document.getElementById("search-input"),O=(document.getElementById("gallery"),document.querySelector(".loader-container"));function _(e){w=e,P.classList.toggle("is-hidden"),O.classList.toggle("is-hidden"),fetch(e).then((function(e){return e.json()})).then((function(e){console.log(e.results),0!==e.results.length?(C(e.results),currentPage=e.page,nextPage=currentPage+1,prevPage=currentPage-1,totalPages=e.total_pages,P.classList.toggle("is-hidden"),O.classList.toggle("is-hidden"),document.addEventListener("DOMContentLoaded",(function(){document.getElementById("current").innerText=currentPage})),currentPage<=1?(prev&&prev.classList.add("disabled"),next&&next.classList.remove("disabled")):currentPage>=totalPages?(prev&&prev.classList.remove("disabled"),next&&next.classList.add("disabled")):(prev&&prev.classList.remove("disabled"),next&&next.classList.remove("disabled"))):(P.classList.toggle("is-hidden"),O.classList.toggle("is-hidden"),P.innerHTML='<h1 class="no-results">No Results Found</h1>')}))}function C(e){P.innerHTML="",e.forEach((function(e){var t=e.title,n=e.poster_path,a=e.release_date,o=e.genre_ids,i=document.createElement("div");i.classList.add("movie");var r=o&&Array.isArray(g)?o.map((function(e){var t=g.find((function(t){return t.id===e}));return t?t.name:""})).join(", "):"";i.innerHTML='\n            <img src="'.concat(n?"https://image.tmdb.org/t/p/w500"+n:"http:/>/via.placeholder.com/1080x1500",'"\n                alt="').concat(t,'"/>\n            <div class="movie-info">\n                <h3>').concat(t.toUpperCase(),'</h3>\n                <div class="movie-details">\n                <span id="genre">').concat(r,'</span> |\n                <span id="release_date" class="').concat(a,'">').concat(a.slice(0,4),"</span>\n                  </div>\n                  </div>\n                  "),i.addEventListener("click",(function(){!function(e){p.src="https://image.tmdb.org/t/p/w500/".concat(e.poster_path),v.textContent=e.title.toUpperCase(),f.innerHTML='\n      <span class="vote-avg">'.concat(e.vote_average.toFixed(1),"</span>")+"   /   "+e.vote_count,h.textContent=e.popularity.toFixed(1),y.textContent=e.original_title.toUpperCase();var t=e.genre_ids.map((function(e){var t=g.find((function(t){return t.id===e}));return t?t.name:""})).join(", ");E.textContent=t,b.textContent=e.overview,m.style.display="block"}(e)})),P.appendChild(i)}))}function N(e){var t=w.split("?"),n=t[1].split("&"),a=n[n.length-1].split("=");if("page"!=a[0]){_(w+"&page="+e)}else{a[1]=e.toString();var o=a.join("=");n[n.length-1]=o;var i=n.join("&");_(t[0]+"?"+i)}}_(u),prev=document.getElementById("prev"),next=document.getElementById("next"),prev&&prev.addEventListener("click",(function(){prevPage>0&&N(prevPage)})),next&&next.addEventListener("click",(function(){nextPage<=totalPages&&N(nextPage)})),B.addEventListener("submit",(function(e){e.preventDefault();var t=k.value;_(t?"https://api.themoviedb.org/3/search/movie?api_key=b5e824a3d922f68ba211fcf6dbdcb6f5&query="+t:u)})),prev.addEventListener("click",(function(){prevPage>0&&N(prevPage)})),next.addEventListener("click",(function(){nextPage<=totalPages&&N(nextPage)})),P.addEventListener("click",(function(e){var t=e.target.parentElement;r=t.lastElementChild.firstElementChild.innerText,console.log(r)})),L.addEventListener("click",(function(){l.includes(r)?alert("".concat(r," has been watched already")):l.push(r),localStorage.setItem("movie-watched",JSON.stringify(l))})),x.addEventListener("click",(function(){c.includes(r)?alert("".concat(r," has been added to the queue already")):c.push(r),localStorage.setItem("movie-queue",JSON.stringify(c))})),L.addEventListener("click",(function(){l.includes(d)?alert("".concat(r," has been watched already")):l.push(d),localStorage.setItem("movie-watched",JSON.stringify(l))})),x.addEventListener("click",(function(){c.includes(d)?alert("".concat(r," has been added to the queue already")):c.push(d),localStorage.setItem("movie-queue",JSON.stringify(c))})),document.body.addEventListener("keydown",(function(e){"Escape"===e.code&&S()}))})),a("8OLSw")}();
//# sourceMappingURL=index.5c4ed91a.js.map
