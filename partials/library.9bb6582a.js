document.addEventListener("DOMContentLoaded",(function(){const t=document.getElementById("watched-btn"),n=document.getElementById("queue-btn"),o=document.querySelector(".gallery");let a=JSON.parse(localStorage.getItem("movie-watched")),i=JSON.parse(localStorage.getItem("movie-queue"));async function r(e){o.innerHTML="";for(const t of e)try{if(!s(t))throw new Error(`Invalid movie ID: ${t}`);const e=d(await c(t));o.appendChild(e)}catch(e){"Movie not found."===e.message?console.warn(`Movie with ID ${t} not found.`):console.error("Failed to display movie:",e)}}async function c(e){const t=`https://api.themoviedb.org/3/movie/${e}?api_key=b5e824a3d922f68ba211fcf6dbdcb6f5`,n=await fetch(t);if(!n.ok)throw 404===n.status?new Error("Movie not found."):new Error("Failed to fetch movie details: "+n.statusText);return await n.json()}function d(t){const n=document.createElement("div");return n.classList.add("movie"),n.innerHTML=`\n            <img src="${t.poster_path?e+t.poster_path:"http://via.placeholder.com/1080x1500"}";\n            <h3>${t.title}</h3>\n        `,n}function s(e){return!isNaN(e)}t.addEventListener("click",(function(e){console.log("Element:",t),e.preventDefault(),r(a)})),n.addEventListener("click",(function(e){e.preventDefault(),r(i)}))}));const e="https://image.tmdb.org/t/p/w500";document.getElementById("lib-buttons");document.addEventListener("DOMContentLoaded",(function(){const t=document.getElementById("watched-btn"),n=document.getElementById("queue-btn"),o=document.querySelector(".gallery");let a=JSON.parse(localStorage.getItem("movie-watched"))||[],i=JSON.parse(localStorage.getItem("movie-queue"))||[];async function r(e){o.innerHTML="";for(const t of e)try{if(!s(t))throw new Error(`Invalid movie ID: ${t}`);const e=d(await c(t));o.appendChild(e)}catch(e){"Movie not found."===e.message?console.warn(`Movie with ID ${t} not found.`):console.error("Failed to display movie:",e)}}async function c(e){const t=`https://api.themoviedb.org/3/movie/${e}?api_key=b5e824a3d922f68ba211fcf6dbdcb6f5`,n=await fetch(t);if(!n.ok)throw 404===n.status?new Error("Movie not found."):new Error("Failed to fetch movie details: "+n.statusText);return await n.json()}function d(t){const n=document.createElement("div");return n.classList.add("movie"),n.innerHTML=`\n            <img src="${t.poster_path?e+t.poster_path:"http://via.placeholder.com/1080x1500"}" alt="${t.title}">\n            <h3>${t.title}</h3>\n        `,n}function s(e){return!isNaN(e)}t.addEventListener("click",(function(e){e.preventDefault(),r(a)})),n.addEventListener("click",(function(e){e.preventDefault(),r(i)}))})),lastUrl="https://api.themoviedb.org/3/discover/movie?sort_by-popularity.desc&api_key=b5e824a3d922f68ba211fcf6dbdcb6f5";
//# sourceMappingURL=library.9bb6582a.js.map
