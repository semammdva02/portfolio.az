(function(){
var r=document.documentElement;
try{var s=localStorage.getItem("theme");if(s)r.setAttribute("data-theme",s)}catch(e){}
document.getElementById("tg").onclick=function(){
var d=r.getAttribute("data-theme")||(matchMedia("(prefers-color-scheme:dark)").matches?"dark":"light");
var n=d==="dark"?"light":"dark";r.setAttribute("data-theme",n);
try{localStorage.setItem("theme",n)}catch(e){}};
var ph=document.getElementById("ph");ph.onclick=function(e){e.preventDefault();var n=["+994","50","705","79","00"].join(" ");ph.textContent="📞 "+n;ph.href="tel:+99450"+"7057900";ph.onclick=null};
var secs=document.querySelectorAll("main section"),links=document.querySelectorAll("nav a");
if("IntersectionObserver" in window){var so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){links.forEach(function(a){a.classList.toggle("on",a.getAttribute("href")==="#"+e.target.id)})}})},{rootMargin:"-40% 0px -55% 0px"});secs.forEach(function(x){so.observe(x)})}
var up=document.getElementById("up");up.onclick=function(){scrollTo({top:0})};addEventListener("scroll",function(){up.classList.toggle("on",scrollY>700)},{passive:true});
var cp=document.getElementById("cp");cp.onclick=function(){var m="semaaliyeva877@gmail.com";var ok=function(){cp.textContent="Kopyalandı";setTimeout(function(){cp.textContent="E-poçtu kopyala"},1800)},no=function(){cp.textContent=m};try{navigator.clipboard.writeText(m).then(ok,no)}catch(e){no()}};
var bars=document.querySelectorAll(".bar i");
function go(){bars.forEach(function(b){b.style.width=b.dataset.w})}
if("IntersectionObserver" in window){var o=new IntersectionObserver(function(e){if(e[0].isIntersecting){go();o.disconnect()}});o.observe(document.getElementById("bacariqlar"))}else go();
})();
