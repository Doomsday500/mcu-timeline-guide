// ===========================
// MCU Timeline Guide
// ===========================

const timeline = document.getElementById("timeline");

const search = document.getElementById("search");

let filteredProjects = [...projects];

render(filteredProjects);

function render(data){

timeline.innerHTML="";

let completed=0;

data.forEach(movie=>{

const watched =
localStorage.getItem(movie.id)==="true";

if(watched) completed++;

timeline.innerHTML += `

<div class="movie-card">

<div class="poster">

🎬

</div>

<div class="content">

<h2>

${movie.timeline}. ${movie.title}

</h2>

<div class="badges">

<span class="badge">${movie.type}</span>

<span class="badge">${movie.phase}</span>

<span class="badge">${movie.runtime}</span>

<span class="badge">${movie.year}</span>

<span class="badge">⭐ ${movie.importance}/5</span>

${movie.essential?

'<span class="badge essential">Essential</span>'

:

'<span class="badge optional">Optional</span>'

}

</div>

<p class="summary">

${movie.summary}

</p>

<div class="why">

<b>Why watch before Doomsday?</b>

<p>${movie.why}</p>

</div>

<div class="actions">

<button onclick="toggleWatch(${movie.id})">

${watched?"✅ Watched":"☐ Mark Watched"}

</button>

<button class="fav">

❤️

</button>

<a
class="trailer"

target="_blank"

href="https://www.youtube.com/results?search_query=${encodeURIComponent(movie.title+" official trailer")}">

Trailer

</a>

</div>

</div>

</div>

`;

});

updateStats(completed,data.length);

}

// ===========================
// WATCH STATUS
// ===========================

function toggleWatch(id){

const key=id.toString();

if(localStorage.getItem(key)==="true"){

localStorage.removeItem(key);

}else{

localStorage.setItem(key,"true");

}

render(filteredProjects);

}

// ===========================
// SEARCH
// ===========================

search.addEventListener("input",()=>{

const text=search.value.toLowerCase();

filteredProjects=projects.filter(movie=>

movie.title.toLowerCase().includes(text)

);

render(filteredProjects);

});

// ===========================
// FILTERS
// ===========================

const filters=document.querySelectorAll(".filter");

filters.forEach(btn=>{

btn.onclick=()=>{

filters.forEach(b=>b.classList.remove("active"));

btn.classList.add("active");

const value=btn.innerText;

if(value==="All"){

filteredProjects=projects;

}

else if(value==="Movies"){

filteredProjects=projects.filter(

m=>m.type==="Movie"

);

}

else if(value==="Series"){

filteredProjects=projects.filter(

m=>m.type==="Series"

);

}

else{

filteredProjects=projects.filter(

m=>m.phase===value

);

}

render(filteredProjects);

};

});

// ===========================
// STATS
// ===========================

function updateStats(done,total){

document.getElementById("completed").innerHTML=done;

document.getElementById("remaining").innerHTML=

total-done;

document.getElementById("progress").innerHTML=

Math.round(done/total*100)+"%";

document.getElementById("bar").style.width=

(done/total*100)+"%";

}
/* ==========================
COUNTDOWN
========================== */

const release=new Date("December 18, 2026 00:00:00").getTime();

setInterval(()=>{

const now=new Date().getTime();

const distance=release-now;

const d=Math.floor(distance/(1000*60*60*24));

const h=Math.floor((distance%(1000*60*60*24))/(1000*60*60));

const m=Math.floor((distance%(1000*60*60))/(1000*60));

const s=Math.floor((distance%(1000*60))/1000);

document.getElementById("countdown").innerHTML=

`${d} Days ${h} Hours ${m} Minutes ${s} Seconds`;

},1000);

/* ==========================
WATCH NEXT
========================== */

function nextMovie(){

const movie=projects.find(

m=>localStorage.getItem(m.id)!=="true"

);

if(movie){

document.getElementById("nextMovie").innerHTML=

movie.title;

}

}

nextMovie();

/* ==========================
WATCH HOURS
========================== */

let hours=0;

projects.forEach(movie=>{

if(movie.runtime.includes("min")){

hours+=parseInt(movie.runtime);

}

});

document.getElementById("watchHours").innerHTML=

Math.floor(hours/60)+" Hours";