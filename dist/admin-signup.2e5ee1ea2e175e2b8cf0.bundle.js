(()=>{"use strict";const t=(t,e)=>{t.textContent=e,t.style.display="block"},e=t=>t.replace(/^./,t[0].toUpperCase()),o=document.getElementById("error-message"),n=document.getElementById("success-message"),s=document.getElementById("form"),a="127.0.0.1"===window.location.hostname||"localhost"===window.location.hostname?"http://localhost:3000/admin/signup":"https://teresa-covid-tracker-test.herokuapp.com/admin/signup",i="127.0.0.1"===window.location.hostname||"localhost"===window.location.hostname?"http://localhost:3000/authenticate-user":"https://teresa-covid-tracker-test.herokuapp.com/authenticate-user",l="127.0.0.1"===window.location.hostname||"localhost"===window.location.hostname?"http://localhost:3000/admin-profile.html":"https://teresa-covid-tracker-test.herokuapp.com/admin-profile.html";fetch(i,{}).then((t=>{t.text().then((t=>{"true"===t&&window.location.replace(l)}))})),s.addEventListener("submit",(i=>{i.preventDefault();const l=new FormData(s),m=l.get("first_name"),r=l.get("middle_name"),c=l.get("last_name"),d=l.get("mob_no"),h=l.get("user_name"),p=l.get("password"),u=l.get("admin_id");if(m.trim()&&c.trim()&&p.trim()&&h.trim()&&d.trim()&&r.trim()&&u.trim())if(/1880-\d{4}/.test(u)){const i={first_name:e(m),middle_name:e(r),last_name:e(c),mob_no:d,password:p,user_name:h,admin_id:u};fetch(a,{method:"POST",body:JSON.stringify(i),headers:{"content-type":"application/json"}}).then((e=>{e.text().then((e=>{"success"===e?((t,e,o,n)=>{t.style.display="none",o.textContent=n,o.style.display="block",e.style.display="none"})(s,o,n,"Regisrered Successfully"):t(o,"Username already taken!")}))}))}else t(o,"Invalid ID!");else t(o,"Fill the missing fields")}))})();