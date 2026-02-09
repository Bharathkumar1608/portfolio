// MOBILE MENU
function toggleMenu(){
    const menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

// TYPING EFFECT
const roles = ["Web Developer", "DSA Enthusiast", "Startup Builder"];
let i = 0, j = 0;

function typeEffect(){
    if(j < roles[i].length){
        document.getElementById("typing").innerHTML += roles[i][j];
        j++;
        setTimeout(typeEffect,100);
    }else{
        setTimeout(()=>{
            document.getElementById("typing").innerHTML="";
            j=0;
            i=(i+1)%roles.length;
            typeEffect();
        },1500);
    }
}
typeEffect();


// SOFTWARE PROJECTS
const softwareProjects = [
    {title:"Railway Reservation System", desc:"Railway reservation management system"},
    {title:"Student Grade Tracker", desc:"Calculates and manages student grades"},
    {title:"Music Player", desc:"Spotify-style music website"},
    {title:"Green Transport", desc:"Startup EV platform"},
    {title:"DFA Visualizer", desc:"Automata simulator"}
];

const projectContainer = document.getElementById("project-container");

softwareProjects.forEach(p=>{
    projectContainer.innerHTML += `
        <div class="card">
            <h3>${p.title}</h3>
            <p>${p.desc}</p>
        </div>`;
});


// HARDWARE PROJECTS
const hardwareProjects = [
    { title:"Weather Monitoring System", desc:"Detects weather readings using five sensors" },
    { title:"Forest Monitoring System", desc:"Sends alerts to the forest department if trees are cut" }
];

const hardwareContainer = document.getElementById("hardware-container");

hardwareProjects.forEach(p=>{
    hardwareContainer.innerHTML += `
        <div class="card">
            <h3>${p.title}</h3>
            <p>${p.desc}</p>
        </div>`;
});


// SCROLL
function scrollToProjects(){
    document.getElementById("projects").scrollIntoView({behavior:"smooth"});
}