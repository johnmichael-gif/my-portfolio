console.log("Portfolio Website Loaded Successfully!");

const modal=document.getElementById("projectModal");

const modalImage=document.getElementById("modalImage");
const modalTitle=document.getElementById("modalTitle");
const modalDescription=document.getElementById("modalDescription");

const modalStatus=document.getElementById("modalStatus");
const modalDuration=document.getElementById("modalDuration");
const modalCategory=document.getElementById("modalCategory");
const modalMainRole=document.getElementById("modalMainRole");

const modalFeatures=document.getElementById("modalFeatures");
const modalTags=document.getElementById("modalTags");
const modalRoles=document.getElementById("modalRoles");

const closeBtn=document.querySelector(".close-modal");

const projects={

pvc:{

image:"images/pvc-design.png",

title:"Development of a Compact Semi-Automated Electrical PVC Conduit Processing Machine",

description:"Designed and developed a compact semi-automated machine capable of measuring, cutting, bending and hubbing electrical PVC conduits.",

status:"Completed",

duration:"2025–2026",

category:"Research & Development",

role:"Lead Proponent",

features:[
"Automatic Measuring",
"Precision Cutting",
"45° Bending",
"90° Bending",
"PVC Hubbing",
"PID Temperature Control"
],

technologies:[
"Arduino Mega",
"AutoCAD",
"Automation",
"Electrical Design",
"PID Controller",
"Mechanical Design"
],

responsibilities:[
"Lead Proponent",
"Machine Design",
"Electrical Design",
"Programming",
"Documentation"
]

},

collection:{

image:"images/dashboard.png",

title:"Internet Collection Monitoring System",

description:"Cloud-based collection monitoring system developed using Google Apps Script and Google Sheets.",

status:"Completed",

duration:"2026",

category:"Web Application",

role:"Developer",

features:[
"Dashboard Analytics",
"Payment Recording Automation",
"Monthly Reports",
"Commission Computation",
"Google Sheets Integration"
],

technologies:[
"Google Apps Script",
"JavaScript",
"Google Sheets"
],

responsibilities:[
"System Designer",
"Developer",
"Database Designer",
"Automation Developer"
]

},

church:{

image:"images/htccc.png",

title:"HTCCC Church Website",

description:"Responsive church website for announcements, ministries and church information.",

status:"Ongoing",

duration:"2026",

category:"Website",

role:"Frontend Developer",

features:[
"Responsive Design",
"Event Announcements",
"Google Forms",
"Google Maps",
"Ministry Pages",
"Contact Form"
],

technologies:[
"HTML",
"CSS",
"JavaScript",
"Google Services"
],

responsibilities:[
"Frontend Developer",
"UI Designer",
"Website Developer"
]

}

};

document.querySelectorAll(".view-project").forEach(button=>{

button.addEventListener("click",()=>{

const p=projects[button.dataset.project];

modalImage.src=p.image;
modalTitle.textContent=p.title;
modalDescription.textContent=p.description;

modalStatus.textContent=p.status;
modalDuration.textContent=p.duration;
modalCategory.textContent=p.category;
modalMainRole.textContent=p.role;

modalFeatures.innerHTML="";
p.features.forEach(item=>{
modalFeatures.innerHTML+=`<li>${item}</li>`;
});

modalTags.innerHTML="";
p.technologies.forEach(item=>{
modalTags.innerHTML+=`<span>${item}</span>`;
});

modalRoles.innerHTML="";
p.responsibilities.forEach(item=>{
modalRoles.innerHTML+=`<li>${item}</li>`;
});

modal.classList.add("active");
document.body.style.overflow = "hidden";

});

});

closeBtn.onclick=()=>{

modal.classList.remove("active");
document.body.style.overflow = "";

}

window.onclick=(e)=>{

if(e.target===modal){

modal.classList.remove("active");
document.body.style.overflow = "";

}
const certificates={

electrical:{

title:"Electrical Engineering",

description:"Technical seminars related to Electrical Engineering.",

items:[

"Technical Seminar: Molding the Ends through Diverse Instructions and Evaluations Valuing Anticipated Leverages",

"Power System Analysis",

"Substation Design",

"Power Quality Challenges in Electrical Distribution System",

"Optimizing Renewable Energy for the Philippines' Islands"

]

},

leadership:{

title:"Leadership",

description:"Leadership and engineering management trainings.",

items:[

"Transformational Leadership in Engineering Management",

"Campaign on Alternative Fuels and Emerging Energy Technologies",

"Training of Trainers for Safety Officers"

]

},

technology:{

title:"Technology",

description:"Technology and workplace seminars.",

items:[

"Short Circuit Analysis using Microsoft Excel",

"Practicing COVID-19 Preventive Measures in the Workplace"

]

},

multimedia:{

title:"Multimedia",

description:"Church multimedia and technical support.",

items:[

"Audio Technical Team Training",

"Holy Trinity Christian Community Church"

]

}

};

const certModal=document.getElementById("certificateModal");

const certTitle=document.getElementById("certificateTitle");

const certDesc=document.getElementById("certificateDescription");

const certList=document.getElementById("certificateList");

document.querySelectorAll(".view-certificate").forEach(btn=>{

btn.onclick=()=>{

const c=certificates[btn.dataset.certificate];

certTitle.textContent=c.title;

certDesc.textContent=c.description;

certList.innerHTML="";

c.items.forEach(item=>{

certList.innerHTML+=`<li>${item}</li>`;

});

certModal.classList.add("active");

document.body.style.overflow="hidden";

}

});

document.querySelector(".close-certificate").onclick=()=>{

certModal.classList.remove("active");

document.body.style.overflow="";

}

window.addEventListener("click",e=>{

if(e.target===certModal){

certModal.classList.remove("active");

document.body.style.overflow="";

}

});

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if(menuToggle && navLinks){

    menuToggle.onclick = function(){
        navLinks.classList.toggle("active");
    };

    document.querySelectorAll(".nav-links a").forEach(link=>{
        link.onclick = function(){
            navLinks.classList.remove("active");
        };
    });

}
}