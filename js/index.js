const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
/* let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]) */


// My code

//HEADER
const navLinks = document.querySelectorAll('nav > a');

navLinks[0].textContent = siteContent.nav["nav-item-1"];
navLinks[1].textContent = siteContent.nav["nav-item-2"];
navLinks[2].textContent = siteContent.nav["nav-item-3"];
navLinks[3].textContent = siteContent.nav["nav-item-4"];
navLinks[4].textContent = siteContent.nav["nav-item-5"];
navLinks[5].textContent = siteContent.nav["nav-item-6"];

const logo = document.querySelector('#logo-img');
logo.setAttribute('src', siteContent.nav["img-src"])

/* Loop code provided in #help to research later 

// Abrahart
const navBar = document.querySelector('nav');
const navLinks = navBar.querySelectorAll('a');
const navObj = siteContent.nav;
const navValues = Object.values(navObj);
[...navLinks].forEach((link, index) => {
  link.textContent = navValues[index];
}); 

// Vebras
let nav = document.querySelectorAll("nav a");
for (i = 0; i < nav.length; i++) {
  nav[i].textContent = siteContent.nav[`nav-item-${i+1}`];
}

*/

// CTA
const ctaImg = document.querySelector('#cta-img');
ctaImg.setAttribute('src', siteContent.cta["img-src"])

const ctaH1 = document.querySelector('.cta-text h1');
ctaH1.textContent = siteContent.cta["h1"]

const ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent.cta["button"]

// MAIN CONTENT

// top-content
const topContentH4 = document.querySelectorAll('.top-content h4');
const topContentP = document.querySelectorAll('.top-content p');

//Features
topContentH4[0].textContent = siteContent["main-content"]['features-h4']
topContentP[0].textContent = siteContent["main-content"]["features-content"]

// About
topContentH4[1].textContent = siteContent["main-content"]['about-h4']
topContentP[1].textContent = siteContent["main-content"]["about-content"]

// Middle Image
const middleImg = document.querySelector('#middle-img');
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

// bottom-content
const bottomContentH4 = document.querySelectorAll('.bottom-content h4');
const bottomContentP = document.querySelectorAll('.bottom-content p');

//Services
bottomContentH4[0].textContent = siteContent["main-content"]['services-h4']
bottomContentP[0].textContent = siteContent["main-content"]["services-content"]

// Product
bottomContentH4[1].textContent = siteContent["main-content"]['product-h4']
bottomContentP[1].textContent = siteContent["main-content"]["product-content"]

// Vision
bottomContentH4[2].textContent = siteContent["main-content"]['vision-h4']
bottomContentP[2].textContent = siteContent["main-content"]["vision-content"]