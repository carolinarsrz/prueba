$(function(){

  $("a").click(function(event){
    if (this.hash !=="") {
      event.preventDefault();
      var navHeight = $("#navbar").height() * 2;
      var gato = this.hash;
      $("html").animate({
        scrollTop: $(gato).offset().top - navHeight
      }, 800);
      window.location.hash = gato;
    }
});

  var qs, js, q, s, d = document,
    gi = d.getElementById,
    ce = d.createElement,
    gt = d.getElementsByTagName,
    id = "typef_orm",
    b = "https://embed.typeform.com/";
  if (!gi.call(d, id)) {
    js = ce.call(d, "script");
    js.id = id;
    js.src = b + "embed.js";
    q = gt.call(d, "script")[0];
    q.parentNode.insertBefore(js, q)
  }
});

  $('[data-toggle="tooltip"]').tooltip()
;
