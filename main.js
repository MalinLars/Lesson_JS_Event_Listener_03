/* Page content*/
const homePageContent = `
<h1>Välkommen!</h1>
        <p id="my-id">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam neque doloribus excepturi ea praesentium, mollitia quia facilis id fugiat aut officia, rem, nemo culpa atque nulla voluptatum. Cupiditate, delectus perspiciatis!</p>
        <p class="my-class">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia neque, saepe fugiat nulla numquam eius quisquam unde ducimus, molestias eaque enim consequuntur eligendi ratione ad illum minima ullam mollitia corporis?</p>
        <p class="two classes">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, modi perspiciatis? Dolor veniam neque natus architecto quas quod quis non? Suscipit porro, perferendis sit laborum sed dignissimos sint pariatur similique!</p>
`;

const aboutPageContent = `
<h1>Om mig</h1>
<p>Här kan du skriva lite om dig själv</p>
`;

const hobbiesPageContent = `
<h1>Mina hobbies</h1>
<p>Här kan du skriva lite om dina hobbies</p>
`;

const contactPageContent = `
<h1>Kontakt</h1>
<p>Kontakta mig</p>
`;

/*Functions*/
//Grab elements
const mainContent = document.querySelector("#main-content");
const navLinks = document.querySelectorAll("nav a");

//Add event listeners to all elements in navLinks
navLinks.forEach(link =>{  //för varje navLink som finns görs nedan
    link.addEventListener("click", event =>{
        event.preventDefault(); //prevent page reload
        const page = link.dataset.page;
        setActiveNavLink(link); // move active class
        updatePageContent(page); //Render nev page
    });

});
// way 1, for of
//set the "active" class on the page we are currently on
//function setActiveNavLink(link){
 //   for(nav of navLinks){
 //    nav.link.classList.remove
 //   }
  //  links.ClassList.add("active");

//}

//Way 2, forEach
function setActiveNavLink(link){
    navLinks.forEach(link => link.classList.remove("active"));
    link.classList.add("active");
}
//Update page content
function updatePageContent(page){
    switch(page) {
        case "home":
            mainContent.innerHTML = homePageContent;
            break;
        case "about":
            mainContent.innerHTML = aboutPageContent;
            break;
        case "hobbies":
            mainContent.innerHTML = hobbiesPageContent;
            break;    
        case "contact":
            mainContent.innerHTML = contactPageContent;
            break;
        default:
            mainContent.innerHTML = homePageContent;
            break;
    }
}
//Since we have an empty div and need som default content
//We run this function once without a property to get the default case of the switch
updatePageContent();