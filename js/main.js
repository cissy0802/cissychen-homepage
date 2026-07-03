$(function() {
  function t() {
    $(".meter > span").each(function() {
      $(this).data("origWidth", $(this).width()).width(0).animate({
        width: $(this).data("origWidth")
      }, 1200)
    })
  }
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
  }).bind("easytabs:midTransition", function(i, a, n) {
    "#resume" == n.selector && t()
  });
});
