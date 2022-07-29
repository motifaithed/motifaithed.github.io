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
ScrollReveal().reveal(".load-left", { ...loadLeft, delay: 100 });
ScrollReveal().reveal(".load-top", { ...loadTop, delay: 300 });
ScrollReveal().reveal(".load-right", { ...loadRight, delay: 200 });
ScrollReveal().reveal(".load-bottom", { ...loadBottom, delay: 400 });
// end general loading
// portfolio function loading
ScrollReveal().reveal(".load-left-portfolio-function", {
  ...loadLeft,
  delay: 400,
});
ScrollReveal().reveal(".load-right-portfolio-function", {
  ...loadRight,
  delay: 500,
});
// end portfolio function loading
