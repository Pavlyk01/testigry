function goTo(e){document.location=e}window.suggestmeyes_loaded=!0,function(e){"use strict";var n=e.getElementById("menu-top"),t=e.getElementById("menu-top-btn");if(n){t.addEventListener("click",function(){e.body.classList.contains("menu-opened")?(e.body.classList.remove("menu-opened"),n.style.display="none"):(e.body.classList.add("menu-opened"),n.style.display="block")});var s=e.getElementById("menu-top-active");s&&s.addEventListener("click",function(){e.body.classList.contains("menu-opened")&&(e.body.classList.remove("menu-opened"),n.style.display="none")})}else t.parentNode.removeChild(t);function d(){var e=this.parentNode;e.classList.contains("expanded")?e.classList.remove("expanded"):e.classList.add("expanded")}var o=e.getElementById("menu-left");if(o){var a=o.getElementsByTagName("section");if(a)for(var i=0;i<a.length;i++){var l=a[i].getElementsByTagName("header");l&&l[0].addEventListener("click",d)}}}(document);