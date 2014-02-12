$(function() {
  var observer = new BGHMutationObserver(mutationRunner);
  observer.observe(document, {subtree: true, childList: true});
  alterStyles();
});

function mutationRunner(mutations, observer) {
  alterStyles();
}

function alterStyles() {
  $(".container").not(".bgh-container").addClass("bgh-container");
  $(".repository-content.context-loader-container").not(".bgh-repository-container").addClass("bgh-repository-container");
}

BGHMutationObserver = window.MutationObserver || window.webkitMutationObserver
