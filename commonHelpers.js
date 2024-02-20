import{i as l,S as p}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const y="42179520-d47d5bd3a5ac50ed017a72958",f="https://pixabay.com/api/",m=document.querySelector(".form"),c=document.querySelector(".gallery"),n=document.querySelector(".loader");n.style.display="none";m.addEventListener("submit",g);function g(s){s.preventDefault(),n.style.display="block",c.innerHTML="";const o=s.target.image.value;h(o).then(r=>{v(r)}).catch(r=>console.log(r))}function h(s){const o=new URLSearchParams({key:y,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${f}?${o}&q=${s}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function v(s){if(!s.total){l.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",timeout:2e3}),n.style.display="none";return}l.success({position:"topRight",message:`Congratulations! We found ${s.total} images`,timeout:2e3}),L(s.hits),n.style.display="none",new p(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function L(s){const o=s.map(({webformatURL:r,largeImageURL:i,tags:e,likes:t,comments:a,downloads:d,views:u})=>`<li class='gallery-item'>
    <a class="gallery-link" href="${i}">
        <img class="gallery-image" src="${r}" alt="${e}" />
        <div class="gallery-description">
      <span class='gallery-span'>
        <div class="upper-text">Likes</div>
        <div class="lower-text">${t}</div>
      </span>
      <span class='gallery-span'>
        <div class="upper-text">Views</div>
        <div class="lower-text">${u}</div>
      </span>
      <span class='gallery-span'>
        <div class="upper-text">Comments</div>
        <div class="lower-text">${a}</div>
      </span>
      <span class='gallery-span'>
        <div class="upper-text">Downloads</div>
        <div class="lower-text">${d}</div>
      </span>
      </div>
        </a>
</li>`).join("");c.insertAdjacentHTML("beforeend",o)}
//# sourceMappingURL=commonHelpers.js.map
