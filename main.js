(()=>{"use strict";var e={baseUrl:"https://nomoreparties.co/v1/wff-cohort-6",headers:{authorization:"7edb83ee-089d-459d-80c0-3e905670f3f0","Content-Type":"application/json"}};function t(e){return e.ok?e.json():Promise.reject("Что-то пошло не так: ".concat(e.status))}var r=document.querySelector("#card-template").content,n=document.querySelector(".popup_type_image");function o(e,t,o,c,u,a,i,l,s,d){var p=r.querySelector(".card").cloneNode(!0);p.querySelector(".card__image").src=u,p.querySelector(".card__image").alt=a,p.querySelector(".card__title").textContent=e,p.querySelector(".card__like-sum").textContent=i.length;var f=p.querySelector(".card__delete-button");f.addEventListener("click",(function(){l(c,p)})),f.style.display=t===o?"block":"none",i.length>0&&i.forEach((function(e){e._id===o&&p.querySelector(".card__like-button").classList.add("card__like-button_is-active")})),p.querySelector(".card__like-button").addEventListener("click",(function(e){s(e,c,p)}));var _=p.querySelector(".card__image"),y=p.querySelector(".card__title");return _.addEventListener("click",(function(){return d(n,_.src,_.alt,y.textContent)})),p}function c(r,n,o){r.target.classList.contains("card__like-button")&&(o.querySelector(".card__like-button").classList.contains("card__like-button_is-active")?function(r){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(r),{method:"DELETE",headers:e.headers}).then((function(e){return t(e)}))}(n).then((function(e){o.querySelector(".card__like-sum").textContent=e.likes.length})).catch((function(e){console.log(e)})):function(r){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(r),{method:"PUT",headers:e.headers}).then((function(e){return t(e)}))}(n).then((function(e){o.querySelector(".card__like-sum").textContent=e.likes.length})).catch((function(e){console.log(e)})),o.querySelector(".card__like-button").classList.toggle("card__like-button_is-active"))}function u(r,n){(function(r){return fetch("".concat(e.baseUrl,"/cards/").concat(r),{method:"DELETE",headers:e.headers}).then((function(e){return t(e)}))})(r).then((function(){n.remove()})).catch((function(e){console.log(e)}))}function a(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",s)}function i(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",s)}function l(e){var t=e.target;t&&i(t)}function s(e){"Escape"===e.key&&i(document.querySelector(".popup_is-opened"))}var d=function(e,t){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?f(e,t):p(e,t,t.validationMessage)},p=function(e,t,r){var n=e.formSelector.querySelector(".".concat(t.id,"-error_visible"));t.classList.add(e.inputErrorClass),n.textContent=r,n.classList.add(e.errorClass)},f=function(e,t){var r=e.formSelector.querySelector(".".concat(t.id,"-error_visible"));t.classList.remove(e.inputErrorClass),r.classList.remove(e.errorClass),r.textContent=""},_=function(e,t){!function(e){for(var t=0;t<e.length;t++)if(!e[t].validity.valid)return!0;return!1}(e)?t.disabled=!1:t.disabled=!0};function y(e,t){console.log(e,t);var r=Array.from(e.querySelectorAll(t.inputSelector)),n=e.querySelectorAll(t.errorSelector);console.log(r),console.log(e.querySelector(t.submitButtonSelector));var o=e.querySelector(t.submitButtonSelector);r.forEach((function(e){e.classList.remove(t.inputErrorClass)})),n.forEach((function(e){e.textContent="",e.classList.remove(t.errorActiveClass)})),e.classList.contains("new-avatar")||e.classList.contains("new-place")?o.disabled=!0:o.disabled=!1}function m(e,t){t.textContent=e?"Сохранение...":"Сохранить"}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var S=[fetch("".concat(e.baseUrl,"/users/me"),{headers:e.headers}).then((function(e){return t(e)})),fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers}).then((function(e){return t(e)}))];Promise.all(S).then((function(e){var t,r,n,a,i=(r=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,c,u,a=[],i=!0,l=!1;try{if(c=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;i=!1}else for(;!(i=(n=c.call(r)).done)&&(a.push(n.value),a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(t,r)||function(e,t){if(e){if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?v(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());n=i[0],a=i[1],h=n._id,console.log(h,n._id),z.textContent=n.about,V.textContent=n.name,q.style.backgroundImage="url(".concat(n.avatar,")"),a.forEach((function(e){$.append(o(e.name,e.owner._id,n._id,e._id,e.link,e.altText,e.likes,u,c,R))}))})).catch((function(e){console.error("Error fetching data:",e)}));var h="",b={inputSelector:".popup__input",submitButtonSelector:".popup__button",errorSelector:".error_visible",inputErrorClass:"popup__input_type_error",errorClass:"form__input-error_active"},q=document.querySelector(".profile__image"),g=document.querySelector(".popup_type_new-avatar"),k=g.querySelector(".popup__close"),E=g.querySelector(".popup__form"),L=document.forms["new-avatar"],C=L.querySelector("[name='link']"),x=document.querySelector(".profile__add-button"),A=document.querySelector(".popup_type_new-card"),w=A.querySelector(".popup__close"),U=document.querySelectorAll(".popup"),T=A.querySelector(".popup__form"),j=(document.forms["new-place"],document.querySelector(".profile__edit-button")),O=document.querySelector(".popup_type_edit"),B=O.querySelector(".popup__close"),D=O.querySelector(".popup__form"),P=document.querySelector(".popup_type_image"),I=P.querySelector(".popup__close"),M=document.forms["edit-profile"],N=M.querySelector("[name='name']"),J=M.querySelector("[name='description']"),H=document.querySelector(".profile__info"),V=H.querySelector(".profile__title"),z=H.querySelector(".profile__description"),$=document.querySelector(".places__list"),F=document.forms["new-place"],G=F.querySelector("[name='place-name']"),K=F.querySelector("[name='link']");I.addEventListener("click",(function(){return i(P)})),j.addEventListener("click",(function(){a(O),N.value=V.textContent,J.value=z.textContent,y(M,b)})),B.addEventListener("click",(function(){return i(O)})),D.addEventListener("submit",(function(r){var n,o;r.preventDefault(),m(!0,M.querySelector(".popup__button")),(n=N.value,o=J.value,fetch("".concat(e.baseUrl,"/users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify({name:n,about:o})}).then((function(e){return t(e)}))).then((function(){V.textContent=N.value,z.textContent=J.value,i(O)})).catch((function(e){console.log(e)})).finally((function(){return m(!1,M.querySelector(".popup__button"))}))})),q.addEventListener("click",(function(){a(g),y(E,b)})),k.addEventListener("click",(function(){return i(g)})),L.addEventListener("submit",(function(r){var n;r.preventDefault(),m(!0,E.querySelector(".popup__button")),(n=C.value,fetch("".concat(e.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:e.headers,body:JSON.stringify({avatar:n})}).then((function(e){return t(e)}))).then((function(e){console.log(e),function(e){q.style.backgroundImage="url(".concat(e.avatar,")")}(e),i(g)})).catch((function(e){console.log(e)})).finally((function(){return m(!1,E.querySelector(".popup__button"))}))})),x.addEventListener("click",(function(){a(A),y(T,b)})),w.addEventListener("click",(function(){return i(A)})),T.addEventListener("submit",(function(r){var n,a;r.preventDefault(),m(!0,T.querySelector(".popup__button")),(n=G.value,a=K.value,fetch("".concat(e.baseUrl,"/cards"),{method:"POST",headers:e.headers,body:JSON.stringify({name:n,link:a})}).then((function(e){return t(e)}))).then((function(e){!function(e){$.insertBefore(o(e.name,e.owner._id,h,e._id,e.link,e.altText,e.likes,u,c,R),$.firstChild)}(e),i(A)})).catch((function(e){console.log(e)})).finally((function(){return m(!1,T.querySelector(".popup__button"))}))}));var Q=Array.from(document.querySelectorAll(".popup__form"));function R(e,t,r,n){e.querySelector(".popup__image").src=t,e.querySelector(".popup__image").alt=r,e.querySelector(".popup__caption").textContent=n,a(e),e.querySelector(".popup__image").focus()}U.forEach((function(e){e.addEventListener("click",l)})),Q.forEach((function(e){var t;t={formSelector:e,inputSelector:e.querySelectorAll(".popup__input"),submitButtonSelector:e.querySelector(".popup__button"),inputErrorClass:"popup__input_type_error",errorClass:"form__input-error_active"},Array.from(t.formSelector).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()}))})),function(e,t){var r=t.submitButtonSelector;_(e,r),e.forEach((function(n){n.addEventListener("input",(function(){_(e,r),d(t,n)}))}))}(t.inputSelector,t)}))})();