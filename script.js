let currentIndex = 0;
  	let playing = true;
  	const slides = document.querySelectorAll('.slide');
  	const totalSlides = slides.length;

  	function showSlide(index) 
	{
    	if (index < 0) 
	{
     	currentIndex = totalSlides - 1;
    	}	
	else if (index >= totalSlides) 
	{
      	currentIndex = 0;
    	}
	else 
	{
      	currentIndex = index;
    	}

    	const translateValue = -currentIndex * 100 + '%';
    	document.querySelector('.slider').style.transform = 'translateX(' + translateValue + ')';
  	}

  	function nextSlide() 
	{
    	showSlide(currentIndex + 1);
  	}

  	function prevSlide() 	
	{
    	showSlide(currentIndex - 1);
  	}

  	function playSlides() 
	{
    	if (playing) {
      	nextSlide();
    	}
    	setTimeout(playSlides, 3000); // Change slide every 3 seconds
  	}

  	function togglePlayPause() 
	{
    	playing = !playing;
    	const playPauseBtn = document.querySelector('.play-pause-btn');
    	playPauseBtn.textContent = playing ? 'Pause' : 'Play';
  	}

  	playSlides(); // Start automatic sliding