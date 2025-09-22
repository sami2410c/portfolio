/** ================================= typing animation ================================= */
let typed = new Typed(".typing", {
    strings: ["Web Developer", "Web Designer", "..."],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1500,
    startDelay: 500,
    loop: true,
    smartBackspace: false,  // ✅ ab pura delete hoga
    showCursor: true,
    cursorChar: "|"
});



// <!-- optional Waypoints CDN (not required because fallback exists, but safe to include) -->
document.addEventListener('DOMContentLoaded', function(){
  const items = document.querySelectorAll('.skills-animation');

  function fillBar(el){
    const val = parseInt(el.getAttribute('aria-valuenow')) || 0;
    // set width (animates because of CSS transition)
    el.style.width = val + '%';

    // animate number (0 -> val)
    const percentEl = el.parentElement.querySelector('.skill-percent');
    if(percentEl){
      const duration = 900; // ms
      let start = null;
      function step(ts){
        if(!start) start = ts;
        const progress = Math.min((ts - start) / duration, 1);
        percentEl.textContent = Math.round(progress * val) + '%';
        if(progress < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }
  }

  if(typeof Waypoint !== 'undefined'){
    // use Waypoint if included
    items.forEach(item => {
      new Waypoint({
        element: item,
        offset: '80%',
        handler: function(direction){
          fillBar(item);
          try{ this.destroy(); } catch(e){}
        }
      });
    });
  } else if('IntersectionObserver' in window){
    // fallback to IntersectionObserver
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          fillBar(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    items.forEach(i => io.observe(i));
  } else {
    // last fallback: just fill immediately
    items.forEach(i => fillBar(i));
  }

  // quick dev check
  if(items.length === 0) console.warn('No .skills-animation elements found');
});





  // jab page load ho
  // toogle btn
 document.addEventListener("DOMContentLoaded", function(){
    const toggler = document.querySelector(".nav-toggler");
    const aside = document.querySelector(".aside");
    const navLinks = document.querySelectorAll(".nav li a");

    // toggle button
    toggler.addEventListener("click", function(){
      aside.classList.toggle("active");
    });

    // jab kisi bhi link pe click hoga tu menu khud close ho jaye ga
    navLinks.forEach(link => {
      link.addEventListener("click", function(){
        aside.classList.remove("active");
      });
    });
  });




/* =============================== popup box =========================================*/


    


