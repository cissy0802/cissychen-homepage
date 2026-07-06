$(function() {
  function t() {} // skill-bar grow is handled by a pure-CSS animation (main.css: .meter>span / @keyframes meter-grow); JS width-measuring was unreliable because the Resume panel is display:none until its tab opens
  var i = $("#logo"); - 1 != location.href.indexOf("#") && "#about" != location.href.substr(location.href.indexOf("#")) && i.show(), $("#tab-container .tab a").click(function() {
    i.slideDown("slow")
  }), $("#tab-about").click(function() {
    i.slideUp("slow"), $("#main_canvas").show()
  }), t(), $("#tab-container").easytabs({
    animate: !0,
    updateHash: !0,
    transitionIn: "slideDown",
    transitionOut: "slideUp",
    animationSpeed: 600,
    tabActiveClass: "active"
  }).bind("easytabs:after", function() {
    t()
  });
});
