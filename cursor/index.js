const cursor = document.querySelector(".custom-cursor");
const links = document.querySelectorAll("a");
let isCursorInited = false;

const initCursor = () => {
  cursor.classList.add("custom-cursor--init");
  isCursorInited = true;
};

const destroyCursor = () => {
  cursor.classList.remove("custom-cursor--init");
  isCursorInited = false;
};

links.forEach((link) => {
  link.addEventListener("mouseover", () => {
    cursor.classList.add("custom-cursor--link");
  });

  link.addEventListener("mouseout", () => {
    cursor.classList.remove("custom-cursor--link");
  });
});

document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  if (!isCursorInited) {
    initCursor();
  }

  cursor.style = `translate: ${mouseX}px ${mouseY}px`;
});

document.addEventListener("mouseout", destroyCursor);
window.addEventListener('scroll', function() {
  const skills = document.querySelectorAll('.skill');
  const scrollTop = window.scrollY;

  skills.forEach(skill => {
    const skillTop = skill.offsetTop;
    if (scrollTop > skillTop - window.innerHeight + 200) {
      skill.classList.add('animate');
    }
  });
});


      //HAMBURGER MENU
function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}




//animation  for complete portfolio

/* 1. animation fro about me  */
window.addEventListener('scroll', function() {
  var content = document.querySelector('.content');
  var positionFromTop = content.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;
  

  if (positionFromTop < windowHeight / 2) {
      content.classList.add('animate');
  } else {
      content.classList.remove('animate');
  }
});


/* 2. animation for skills  */
document.addEventListener('DOMContentLoaded', function() {
  var skillSets = document.querySelectorAll('.skill_set');
  var skillEdit = document.getElementById('skill_edit');

  var delay = 0;

  // Loop through each skill set and apply animation
  skillSets.forEach(function(skillSet) {
    setTimeout(function() {
      skillSet.classList.add('animated');
    }, delay);
    delay += 200; // Adjust the delay as needed for the desired animation effect
  });
});

/* 3. animation for footer  */
document.addEventListener('DOMContentLoaded', function() {
  var footerText = document.querySelector('.footer_text');
  var socialIcons = document.querySelector('.social');
  window.addEventListener('scroll', function() {
    if (isInViewport(footerText)) {
      footerText.classList.add('animated');
      socialIcons.classList.add('animated');
    } else {
      footerText.classList.remove('animated');
      socialIcons.classList.remove('animated');
    }
  });

  function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
});

// // 4. animation for navbar 
// document.addEventListener('DOMContentLoaded', function() {
//   var navbar = document.querySelector('.navbar');
//   var contentBlock = document.querySelector('.block');

//   window.addEventListener('scroll', function() {
//     if (isInViewport(navbar)) {
//       navbar.style.animation = 'none';
//       contentBlock.style.animation = 'none';
//     } else {
//       navbar.style.animation = 'slideFromTop 1s forwards';
//       setTimeout(function() {
//         if (!isInViewport(contentBlock)) {
//           contentBlock.style.animation = 'slideFromBottom 1s forwards';
//         }
//       }, 1000); // Adjust delay as needed
//     }
//   });

//   function isInViewport(element) {
//     var rect = element.getBoundingClientRect();
//     return (
//       rect.top >= 0 &&
//       rect.left >= 0 &&
//       rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
//   }
// });


//Pre Loader

// Wait for the page content to load
// document.addEventListener("DOMContentLoaded", function() {
  // Function to hide the preloader
  // function hidePreloader() {
    // var preloader = document.getElementById("preloader");
    // preloader.style.display = "none";
  // }

  // Simulate a delay (you can replace this with actual loading logic)
  // setTimeout(hidePreloader, 1000); // 3000 milliseconds = 3 seconds
// });

