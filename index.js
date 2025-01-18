import{i as u,S as h}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const p="https://pixabay.com/api/",y="48226781-c314bf294542f2e13595e23de";function g(t){const s=`${p}?key=${y}&q=${t}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(s).then(r=>{if(!r.ok)throw new Error("Failed to fetch images");return r.json()}).then(r=>r.hits).catch(r=>{throw new Error(r.message)})}function c(t){u.error({title:"Error",message:t})}function L(t){u.success({title:"Success",message:t})}function b(t){const s=document.querySelector(".gallery"),r=t.map(({webformatURL:i,largeImageURL:e,tags:o,likes:a,views:d,comments:f,downloads:m})=>`
        <li class="gallery-item">
          <a href="${e}">
            <img src="${i}" alt="${o}" loading="lazy" />
            <div class="info">
              <p class="info-item">
                <b>Likes:</b> ${a}
              </p>
              <p class="info-item">
                <b>Views:</b> ${d}
              </p>
              <p class="info-item">
                <b>Comments:</b> ${f}
              </p>
              <p class="info-item">
                <b>Downloads:</b> ${m}
              </p>
            </div>
          </a>
        </li>
      `).join("");s.innerHTML=r}function w(){const t=document.querySelector(".loader");t?t.classList.add("show"):console.error("Loader not found!")}function l(){const t=document.querySelector(".loader");t?t.classList.remove("show"):console.error("Loader not found!")}const S=document.querySelector(".search-form"),v=document.querySelector(".search-input");S.addEventListener("submit",q);function q(t){t.preventDefault();const s=v.value.trim();if(s===""){c("Please enter a search query.");return}n.value="",localStorage.clear(),w(),g(s).then(r=>{if(l(),r.length===0){c("Sorry, there are no images matching your search query. Please try again!");return}b(r),L("Images loaded successfully!"),new h(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}).catch(r=>{l(),c("Oops, something went wrong. Please try again later.")})}const n=document.querySelector(".search-input");n.addEventListener("input",()=>{n.value.trim()!==""?(n.classList.remove("empty"),n.classList.add("filled")):(n.classList.remove("filled"),n.classList.add("empty"))});
//# sourceMappingURL=index.js.map
