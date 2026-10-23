(function(){
  var root=document.documentElement;
  try{var t=localStorage.getItem("theme");if(t)root.setAttribute("data-theme",t);}catch(e){}
  addEventListener("DOMContentLoaded",function(){
    document.getElementById("theme").addEventListener("click",function(){
      var cur=root.getAttribute("data-theme");
      var dark=cur?cur==="dark":matchMedia("(prefers-color-scheme: dark)").matches;
      var next=dark?"light":"dark";root.setAttribute("data-theme",next);
      try{localStorage.setItem("theme",next);}catch(e){}
    });
  });
})();
