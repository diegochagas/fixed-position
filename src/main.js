
window.onscroll = (event) => fixTheLinkTop();

function reachedTheFooterOfThePage(){
  const screenPosition = document.documentElement.scrollTop + window.innerHeight;  
  const footerSize = document.documentElement.scrollHeight - document.getElementById("footer").scrollHeight;
  return screenPosition > footerSize;
}

function fixTheLinkTop(){
  const classFixed = "fixed";
  const classFloating = 'floating';
  const idLink = "top-link";
  if(reachedTheFooterOfThePage()) {
    document.getElementById(idLink).classList.add(classFixed);
    document.getElementById(idLink).classList.remove(classFloating);
  }
  else {
    document.getElementById(idLink).classList.remove(classFixed);
    document.getElementById(idLink).classList.add(classFloating);
  }
}