function useMenu() {
  const items = document.querySelectorAll('a');
  const arrow = document.getElementById('arrow');

  items.forEach((item) => {
    if (item.classList.contains('item')) {
      item.classList.remove('item');
      arrow.src = 'show.svg';
    } else {
      item.classList.add('item');
      arrow.src = 'hide.svg';
    }
  });
}

const dropButton = document.getElementById('dropbutton');
dropButton.addEventListener('click', useMenu);
