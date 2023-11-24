
const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");
setTimeout(getData,2500)

function getData() {
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5vdGVib29rfGVufDB8fDB8fHww"alt="computer"/>';
  title.innerHTML = "Lorem ipsum dolor sit amet.";
  excerpt.innerHTML =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora,beatae!";
  profile_img.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="author">';
  name.innerHTML = "John Doe";
  date.innerHTML = "Oct 08, 2020";
  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));

  animated_bg_texts.forEach((bg) => bg.classList.remove("animated-bg-text"));
}
