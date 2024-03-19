const toggleMenuBtn = document.querySelector('#toggle-btn');
const body = document.querySelector('body');
toggleMenuBtn.addEventListener('click', (evt) => {
  evt.preventDefault();//取消事件的預設行為
  body.classList.toggle('sidebar-toggled');
});
