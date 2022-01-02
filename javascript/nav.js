window.onscroll = () => {
  const nav = document.querySelector('#nav-items');
  if(this.scrollY <= 10) nav.className = ''; else nav.className = 'scroll';
};
//using appear functionality
