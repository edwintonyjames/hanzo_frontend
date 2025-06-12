document.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector("footer");
    if (footer) {
        const backToTopBtn = document.createElement("button");
        backToTopBtn.id = "backToTopBtn";
        backToTopBtn.classList.add("hnz-btn", "hnz-btn--gototop");
        backToTopBtn.title = "Go to top";
        backToTopBtn.innerHTML = `
            <svg viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.8536 12.2908C22.6394 12.5049 22.3489 12.6252 22.046 12.6252C21.7431 12.6252 21.4526 12.5049 21.2384 12.2908L12.9091 3.96146L12.9091 26.3305C12.9091 26.6335 12.7888 26.924 12.5746 27.1381C12.3604 27.3523 12.0699 27.4727 11.767 27.4727C11.4641 27.4727 11.1736 27.3523 10.9594 27.1381C10.7453 26.924 10.6249 26.6335 10.6249 26.3305L10.6249 3.96146L2.29565 12.2908C2.18959 12.3969 2.06368 12.481 1.92511 12.5384C1.78654 12.5958 1.63802 12.6253 1.48803 12.6253C1.33804 12.6253 1.18953 12.5957 1.05096 12.5383C0.912391 12.4809 0.786487 12.3968 0.680435 12.2907C0.574383 12.1847 0.490259 12.0588 0.432868 11.9202C0.375476 11.7816 0.34594 11.6331 0.345947 11.4831C0.345953 11.3331 0.375502 11.1846 0.432905 11.046C0.490309 10.9075 0.574444 10.7816 0.680505 10.6755L10.9595 0.396561C10.9632 0.392832 10.9673 0.389765 10.971 0.386105C10.9942 0.363548 11.0179 0.341666 11.0429 0.321136C11.0568 0.30967 11.0716 0.299666 11.086 0.288966C11.1015 0.277395 11.1167 0.26537 11.1328 0.25456C11.1494 0.243442 11.1666 0.233787 11.1837 0.22361C11.1986 0.214721 11.2132 0.205346 11.2286 0.197085C11.2458 0.187919 11.2635 0.180111 11.281 0.171851C11.2973 0.164142 11.3133 0.156026 11.33 0.149091C11.3468 0.14212 11.3641 0.136474 11.3813 0.130339C11.3993 0.123857 11.4171 0.116956 11.4355 0.111379C11.4526 0.106221 11.4699 0.102421 11.4872 0.0980643C11.5061 0.0933245 11.5247 0.088026 11.5439 0.0842271C11.5638 0.0802883 11.5839 0.0779185 11.6039 0.0750604C11.6208 0.0726549 11.6373 0.0694491 11.6543 0.0677802C11.6918 0.0640869 11.7294 0.062099 11.767 0.062099C11.8047 0.062099 11.8423 0.0640869 11.8798 0.0677802C11.8968 0.0694534 11.9133 0.0726591 11.9302 0.0750604C11.9502 0.0779157 11.9702 0.0802882 11.9902 0.0842271C12.0093 0.088026 12.028 0.0933245 12.0468 0.0980643C12.0641 0.102421 12.0815 0.106221 12.0986 0.111379C12.117 0.116956 12.1348 0.123856 12.1528 0.130339C12.17 0.136478 12.1872 0.14212 12.2041 0.149091C12.2208 0.156026 12.2368 0.164147 12.2531 0.171851C12.2706 0.180111 12.2883 0.187919 12.3055 0.197085C12.3209 0.205346 12.3354 0.214721 12.3504 0.22361C12.3674 0.233787 12.3847 0.243442 12.4013 0.25456C12.4174 0.265366 12.4326 0.27739 12.4481 0.288966C12.4625 0.299673 12.4772 0.309667 12.4912 0.321136C12.5166 0.342014 12.5408 0.364286 12.5644 0.38729C12.5676 0.390532 12.5713 0.39325 12.5746 0.396561L22.8536 10.6755C22.9596 10.7816 23.0438 10.9075 23.1012 11.0461C23.1586 11.1846 23.1881 11.3332 23.1881 11.4832C23.1881 11.6332 23.1586 11.7817 23.1012 11.9203C23.0438 12.0588 22.9596 12.1847 22.8536 12.2908Z" fill="white"/>
            </svg>
        `;
        footer.appendChild(backToTopBtn);

        const toggleVisibility = () => {
          if (window.scrollY > 500) {
            backToTopBtn.style.opacity = "1";
            backToTopBtn.style.display = "block";
          } else {
            backToTopBtn.style.opacity = "0";
            backToTopBtn.style.display = "none";
          }
        };

        window.addEventListener("scroll", toggleVisibility);

        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll('.heroSection_videoSlide');
  
    slides.forEach(slide => {
      const iframe = slide.querySelector('.heroSection_videoSlide__iframe');
      const playBtn = slide.querySelector('.heroSection_videoSlide__playbutton');
      const player = new Vimeo.Player(iframe);
  
      slide.addEventListener('click', (event) => {
        event.stopPropagation();
        player.play();
       
      });
  
      let isPlaying = false;
      const togglePlay = () => {
        isPlaying ? player.pause() : player.play();
        isPlaying = !isPlaying;
        playBtn.classList.toggle('paused');
      };
  
      player.on('play', () => (isPlaying = true));
      player.on('pause', () => (isPlaying = false));
  
      slide.addEventListener('click', togglePlay);

     
    });
  });


  //videoplay pause 
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('[data-iframe][data-playbtn]').forEach(container => {
      const iframeSelector = container.getAttribute('data-iframe');
      const playBtnSelector = container.getAttribute('data-playbtn');
  
      const iframe = container.querySelector(iframeSelector);
      const playBtn = container.querySelector(playBtnSelector);
      
      if (!iframe || !playBtn) return;
  
      const player = new Vimeo.Player(iframe);
      let isPlaying = false;
   
      const togglePlay = () => {
        isPlaying ? player.pause() : player.play();
        isPlaying = !isPlaying;
        playBtn.classList.toggle('paused');
      };
  
      player.on('play', () => { isPlaying = true; });
      player.on('pause', () => { isPlaying = false; });
  
      container.addEventListener('click', (e) => {
        e.stopPropagation();
        togglePlay();
      });
    });
  });

  