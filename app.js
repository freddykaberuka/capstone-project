/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
const menu = document.getElementById('hamburger');
const navContainer = document.getElementById('navContainer');
const closeNav = document.getElementById('close');
const navLink = document.querySelectorAll('.navLink');

menu.addEventListener('click', () => {
  navContainer.style.display = 'block';
  menu.style.display = 'none';
});
closeNav.addEventListener('click', () => {
  menu.style.display = 'block';
  navContainer.style.display = 'none';
});
navLink.forEach((link) => {
  link.addEventListener('click', () => {
    menu.style.display = 'block';
    navContainer.style.display = 'none';
  });
});

// speaker info
const speaker = document.getElementById('speaker');
const showMore = document.getElementById('morespk');
const showLess = document.getElementById('lessspk');
const speakers = [
  {
    id: 1,
    p_name: 'Eugene Kaspersky',
    p_title: 'Chief Executive Officer of Kaspersky Lab',
    p_history: 'He co-founded Kaspersky Lab in 1997 and helped identify instances of government-sponsored cyberwarfare',
    p_image: './assets/eugene.jpg',
  },
  {
    id: 2,
    p_name: 'Bill Gates',
    p_title: 'American business magnate',
    p_history: 'He is a co-founder of Microsoft, along with his late childhood friend Paul Allen.',
    p_image: './assets/gate.jpg',
  },
  {
    id: 3,
    p_name: 'Freddy Kaberuka',
    p_title: 'Student at Microverse',
    p_history: 'He is a co-founder of Microsoft, along with his late childhood friend Paul Allen.',
    p_image: './assets/eugene.jpg',
  },
  {
    id: 4,
    p_name: 'Mack',
    p_title: 'Facebook',
    p_history: 'He is a co-founder of Microsoft, along with his late childhood friend Paul Allen.',
    p_image: './assets/gate.jpg',
  },
];

const speakerData = () => {
  const data = speakers.map((el) => `
      <div class="speaker-card">
        <div class="images">
          <img src="${el.p_image}">
        </div>
        <div class="spk-info">
          <div class="info-header">
            <h3>${el.p_name}</h3>
            <p>${el.p_title}</p>
            <p class="line-below"></p>
          </div>
          <div class="info-detail">
            <p> ${el.p_history}</p>
          </div>
        </div>
      </div>
      `);
  speaker.innerHTML = data;
};
if (showMore) {
  showMore.addEventListener('click', () => {
    speaker.style.height = 'auto';
    showMore.style.display = 'none';
    showLess.style.display = 'block';
  });
}
if (showLess) {
  showLess.addEventListener('click', () => {
    speaker.style.height = '60vh';
    showMore.style.display = 'block';
    showLess.style.display = 'none';
  });
}
window.addEventListener('load', speakerData);
