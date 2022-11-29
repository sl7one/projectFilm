let themeOn = false;
themeOn = JSON.parse(localStorage.getItem('theme'));

const btn = document.querySelector('.theme-btn');
const svg = document.querySelector('.theme-svg');

const setTheme = function () {
  if (themeOn) {
    document.documentElement.style.setProperty('--body', '#292929');
    document.documentElement.style.setProperty('--paginationTextColor', '#ffffff');
    svg.style.fill = 'white';
  } else {
    document.documentElement.style.setProperty('--body', '#e9e9e9');
    document.documentElement.style.setProperty('--paginationTextColor', '#000000');
    svg.style.fill = 'var(--accent)';
  }
  localStorage.setItem('theme', JSON.stringify(themeOn));
};

setTheme();

btn.addEventListener('click', e => {
  themeOn = !themeOn;
  setTheme();
});
