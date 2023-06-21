
// logo animation variables
const counters = document.querySelectorAll('.counter');
const speed=50;
let targetValues = [];

// Pobierz wartości docelowe dla każdego licznika
counters.forEach(counter => {
  const target = +counter.getAttribute('data-target');
  targetValues.push(target);
});

// Oblicz najwyższą wartość docelową
const maxTarget = Math.max(...targetValues);

// Oblicz prędkość aktualizacji dla każdego licznika
const speeds = targetValues.map(target => Math.ceil(speed * (maxTarget - target + 1) / maxTarget));

// Logo animation
counters.forEach((counter, index) => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    if (counter.textContent < target) {
      counter.textContent++;
      setTimeout(updateCount, speeds[index]);
    } else {
      counter.textContent = target;
    }
  };
  updateCount();
});


// language options

// Get all the language links
var languageLinks = document.querySelectorAll('.lang-options');

// Add a click event listener to each language link
languageLinks.forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    var selectedLanguage = this.textContent;
    console.log(selectedLanguage);
    // Perform any necessary actions based on the selected language
    // For example, you can update the page content or store the selected language in a cookie/session variable
  });
});

//comment section




let commentButtons = document.querySelectorAll('.c-b-l-1, .c-b-r-1');
let firstRow = 0;
let secondRow=200;

commentButtons.forEach(function(commentButton) {
  commentButton.addEventListener('click', function() {
    if (commentButton.classList.contains('c-b-l-1')) {
      firstRow += 100;
      secondRow += 100;
    } else if (commentButton.classList.contains('c-b-r-1')) {
      firstRow -= 100;
      secondRow -= 100;
    }
    changeRows();
  });
});


function changeRows() {
  let elements = document.querySelectorAll('.comment-row-flex-1');
  let elementss = document.querySelectorAll('.comment-row-flex-2');
  if(firstRow<-200){firstRow=0;secondRow=200;}
  else if(firstRow>0){firstRow=-200;secondRow=0;}
  elements.forEach(function(element) {
    element.style.transform = 'translate(' + firstRow + '%, 0)';
  });
  elementss.forEach(function(element) {
    element.style.transform = 'translate(' + -secondRow + '%, 0)';
  });
}
