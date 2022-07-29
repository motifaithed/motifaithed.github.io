const config = {
  reset: true,
  distance: "100%",
  opacity: 0,
  easing: "ease-in-out",
};

const loadLeft = {
  ...config,
  origin: "left",
};

const loadTop = {
  ...config,
  origin: "top",
};

const loadRight = {
  ...config,
  origin: "right",
};

const loadBottom = {
  ...config,
  origin: "bottom",
};
// general loading
ScrollReveal().reveal(".reveal", {
  delay: 500,
  reset: true,
  easing: "ease-in-out",
});
ScrollReveal().reveal(".load-top", { ...loadTop, delay: 300 });
ScrollReveal().reveal(".load-left", { ...loadLeft, delay: 100 });
ScrollReveal().reveal(".load-bottom", { ...loadBottom, delay: 400 });
ScrollReveal().reveal(".load-right", { ...loadRight, delay: 200 });
// end general loading

// delay loading
ScrollReveal().reveal(".load-left-delay-x4", {
  ...loadLeft,
  delay: 400,
});
ScrollReveal().reveal(".load-right-delay-x5", {
  ...loadRight,
  delay: 500,
});
ScrollReveal().reveal(".load-top-delay-x2", { ...loadTop, delay: 200 });
ScrollReveal().reveal(".load-top-delay-x3", { ...loadTop, delay: 300 });
ScrollReveal().reveal(".load-top-delay-x3dot5", { ...loadTop, delay: 350 });
ScrollReveal().reveal(".load-top-delay-x4", { ...loadTop, delay: 400 });
ScrollReveal().reveal(".load-top-delay-x5", { ...loadTop, delay: 500 });
ScrollReveal().reveal(".load-top-delay-x6", { ...loadTop, delay: 600 });
ScrollReveal().reveal(".load-top-delay-x7", { ...loadTop, delay: 700 });
ScrollReveal().reveal(".load-top-delay-x8", { ...loadTop, delay: 800 });
// end delay loading


