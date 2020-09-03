import "regenerator-runtime"; /* for async await transpile */
// import "../styles/main.css";
import "../scripts/data";
import "../styles/global";

console.log("Hello Coders! :)");

$("#search-icon").click(function () {
  $(".nav").toggleClass("search");
  $(".nav").toggleClass("no-search");
  $(".search-input").toggleClass("search-active");
});

$(".menu-toggle").click(function () {
  $(".nav").toggleClass("mobile-nav");
  $(this).toggleClass("is-active");
});
