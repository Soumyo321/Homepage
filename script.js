
gsap.registerPlugin(ScrollTrigger);


gsap.to("body", {
    duration: 1,
    scrollTo: {
        y: "max",
        autoKill: true
    },
    ease: "power3.inOut"
});

gsap.from("h1", {
    opacity: 0,
    scale: 0.8,
    duration: 1,
    y: 50,
    stagger: 0.3, 
    scrollTrigger: {
        trigger: "h1",
        start: "top 80%", 
        end: "bottom 20%",
        scrub: true, 
    }
});


gsap.from("h2", {
    opacity: 0,
    duration: 1,
    y: 100,
    scrollTrigger: {
        trigger: "h2",
        start: "top 90%", 
        end: "bottom 30%",
        scrub: true
    }
});

gsap.to("h2", {
    color: "#FFD700", // Change text color to gold
    duration: 1.5,
    scrollTrigger: {
        trigger: "h2",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true
    }
});

// Cards (info-item1 and info-item2) Fade and Move from Left
gsap.from(".info-item1, .info-item2", {
    opacity: 0,
    x: -200, // Move from left
    duration: 1.5,
    stagger: 0.5, // Stagger for each card
    scrollTrigger: {
        trigger: ".info-item1",
        start: "top 85%",
        end: "bottom 60%",
        scrub: true
    }
});

// Character Image Fade and Pop Out
gsap.from(".character", {
    opacity: 0,
    scale: 0.5,
    duration: 1.5,
    scrollTrigger: {
        trigger: ".character",
        start: "top 85%",
        end: "bottom 40%",
        scrub: true
    }
});

// Color Change on Scroll for Background
gsap.to("body", {
    background: "linear-gradient(115deg, #1A1A3C, #512B58, #800080)", // New colors
    duration: 2,
    scrollTrigger: {
        trigger: ".info-item2",
        start: "top 50%",
        end: "bottom 10%",
        scrub: true
    }
});

// Footer fade-in effect
gsap.from(".footer", {
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".footer",
        start: "top 90%",
        end: "bottom 20%",
        scrub: true
    }
});
