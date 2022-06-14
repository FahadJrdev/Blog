        const slides = Array.from(document.querySelectorAll('.news-card-slide'));
        const buttons = document.querySelectorAll('.buttons div');
        let timeOut;

        function getNextPrev() {
            const activeSlide = document.querySelector('.news-card-slide.active');
            const activeIndex = slides.indexOf(activeSlide);
            let next, prev;
            if (activeIndex === slides.length - 1) {
                next = slides[0];
            } else {
                next = slides[activeIndex + 1];
            }
            if (activeIndex === 0) {
                prev = slides[slides.length - 1];
            } else {
                prev = slides[activeIndex - 1];
            }
            return [next, prev];
        }

        function getPosition() {
            const activeSlide = document.querySelector('.news-card-slide.active');
            const activeIndex = slides.indexOf(activeSlide);
            const [next, prev] = getNextPrev();
            slides.forEach((slide, index) => {
                if (index === activeIndex) {
                    slide.style.transform = "translate(0)"
                } else if (slide === next) {
                    slide.style.transform = "translate(100%)"
                } else if (slide === prev) {
                    slide.style.transform = "translate(-100%)"
                } else {
                    slide.style.transform = "translate(" + (index - activeIndex) * 100 + "%)"
                }
                slide.addEventListener("transitionend", function() {
                    slide.classList.remove('transition');
                })
            })
        }

        buttons.forEach((button) => {
            button.addEventListener("click", function() {
                if (button.classList.contains("next")) getNextSlide();
                if (button.classList.contains("prev")) getPrevSlide();
            });
        });

        function getNextSlide() {
            clearInterval(timeOut);
            const activeSlide = document.querySelector('.news-card-slide.active');
            const activeIndex = slides.indexOf(activeSlide);
            const [next, prev] = getNextPrev();
            if (activeSlide.classList.contains('transition')) {
                return;
            }
            activeSlide.classList.add('transition');
            next.classList.add('transition');
            activeSlide.classList.remove('active');
            activeSlide.style.transform = "translate(-100%)";
            next.classList.add('active');
            next.style.transform = "translate(0)";
            getPosition();
            autoPlay();
        }

        function getPrevSlide() {
            clearInterval(timeOut);
            const activeSlide = document.querySelector('.news-card-slide.active');
            const activeIndex = slides.indexOf(activeSlide);
            const [next, prev] = getNextPrev();
            if (activeSlide.classList.contains('transition')) {
                return;
            }
            activeSlide.classList.add('transition');
            prev.classList.add('transition');
            activeSlide.classList.remove('active');
            activeSlide.style.transform = "translate(100%)";
            prev.classList.add('active');
            prev.style.transform = "translate(0)";
            getPosition();
            autoPlay();
        }
        getPosition();

        function autoPlay() {
            return timeOut = setInterval(function() {
                getNextSlide();
            }, 4000);
        }
        autoPlay();