// Ensure the window is loaded, to avoid trying to get elements that don't yet
// exist.
window.onload = () => {
  let navbar = document.getElementById("navbar");
  let content = document.getElementById("content");
  let topBtn = document.getElementById("to-top");

  let scrollHeight = window.innerHeight - navbar.offsetHeight;
  
  // We could do this inline, but because of the need to scroll according to
  // content, it's easier this way. We also need to declare these functions
  // inside window.onload because they aren't available outside the scope.
  topBtn.onclick = () => { content.scrollTo({top: 0, behavior: "smooth"}); }

  /* A lot of tutorials on the internet will sell you to assign values like:
   *
   * function() {
   *  // do something
   * }
   * 
   * But, you can use inline functions (a.k.a lambdas) like what is shown. Feel
   * free to remove this comment once you have read it.
   */

  content.onscroll = () => {
    if (content.scrollTop > scrollHeight || content.scrollTop > scrollHeight) {
      navbar.classList.add("minimized");
      topBtn.classList.remove("hidden");
    } else {
      navbar.classList.remove("minimized");
      topBtn.classList.add("hidden");
    }
  }
}
