var navLinks = document.getElementById("navLinks");
function show() {
    navLinks.style.display = "block";
    document.querySelector("nav").classList.add("no-shadow");
}

function hide() {
    navLinks.style.display = "none";

    document.querySelector("nav").classList.remove("no-shadow");
}

document.addEventListener('click', function (event) {
    if (
        navLinks.style.display === "block" && !navLinks.contains(event.target) && event.target.id !== "bar" ) {
            hide();
        }
    
});

//Dark mode
// const text = document.querySelector('#btn-text');

// function button() {
//     const body = document.body;
//     body.classList.toggle('dark-mode');
//     document.querySelector("")
// }

//Fixed navbar
// window.addEventListener("scroll", function() {
//     const nav = document.querySelector("nav");
//     if (window.scrollY > 50) {
//         nav.style.backgroundColor = "#08626f";
//     } else {
//         nav.style.backgroundColor = "white";
//     }
// });

//navbar closing
const links = navLinks.querySelectorAll("a[href^= '#']");
links.forEach(link => {
    link.addEventListener("click", () => {
        if (window.innerWidth <= 700) {
            hide();
        }
    });
});

//Searh bar for recitations
function searchRecitations() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const cards = document.querySelectorAll(".recitation-card");

    cards.forEach(card => {
        const title = card.querySelector("h4").textContent.toLowerCase();
        card.style.display = title.includes(input) ? "block" : "none";
    });
}

//Quran recitations audio
const audios = document.querySelectorAll("audio");
document.querySelectorAll("audio");

audios.forEach(audio => {
    audio.addEventListener("play", () => {
        audios.forEach(other => {
            if (other !== audio) {
                other.pause();
            }
        });
    });
});

//scroll to the top button
const scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behaviour: 'smooth'});
}

//Play all recitations
const recitations = [
    {title: "Surah Al - Fathihah", file: "quran recitations/01 - al-fathiha.mp3"},
    {title: "Surah Al - Naba", file: "quran recitations/02 - al-naba.mp3"}
];

let currentIndex = 0;
const mainPlayer = document.getElementById("mainPlayer");

// function playPlaylist() {
//     currentIndex = 0;
//     mainPlayer.src = recitations[currentIndex].file;
//     mainPlayer.play();
// }

mainPlayer.addEventListener("ended", () => {
    currentIndex++;
    if (currentIndex < recitations.length) {
        mainPlayer.src = recitations[currentIndex].file;
        mainPlayer.play();
    }
});