$(function() {
  var observer = new BGHMutationObserver(mutationRunner);
  observer.observe(document, {subtree: true, childList: true});
  addToggler();
});

function mutationRunner(mutations, observer) {
  addToggler();
}

function addToggler() {
  var btnGroup = $(".button-group");
  if ( btnGroup.find(".bgh-toggler").length == 0 ) {
    btnGroup.append('<div class="minibutton tooltipped nofollow downwards bgh-toggler">Toggle</div>');
    var that = $(".bgh-toggler");
    that.attr("original-title", "toggle deletions on or off");
    that.click(function(e) {
      $(this).parents(".file").find(".gd").toggle();
    });
  }
}

BGHMutationObserver = window.MutationObserver || window.webkitMutationObserver
