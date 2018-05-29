


/*Beskriver det basale ved hovereffekten, bl.a. farvevalg*/
const target = document.querySelector(".target");
const links = document.querySelectorAll(".mynav a");
const colors = ["#F7D5C6", "#DF9283", "#C94649", "#FCE7DF", "#F2EBDA", "#F2EBDA ", "#8B9E9B"];



/*Nedstående beskriver at der sker en event når man fører musen over menubaren*/
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", (e) => e.preventDefault());
    links[i].addEventListener("mouseenter", mouseenterFunc);
}



/*Her beskrives at du kan se hvilken side du har klikket ´ */
function mouseenterFunc() {
    for (let i = 0; i < links.length; i++) {
        if (links[i].parentNode.classList.contains("active")) {
            links[i].parentNode.classList.remove("active");
        }
/*dette beskriver hvor stor gennemsigtighed der er på de sider musen ikke har klikket på.*/
        
        links[i].style.opacity = "0.25";
    }
    
    
/*dette beskriver hvor stor gennemsigtighed der er på den side musen har klikket på.*/
    this.parentNode.classList.add("active");
    this.style.opacity = "1";
    

    const width = this.getBoundingClientRect().width;
    const height = this.getBoundingClientRect().height;
    const left = this.getBoundingClientRect().left;
    const top = this.getBoundingClientRect().top;
    const color = colors[Math.floor(Math.random() * colors.length)];

    
/*target elementerne er stylet/angivet i css-filen*/
    target.style.width = `${width}px`;
    target.style.height = `${height}px`;
    target.style.left = `${left}px`;
    target.style.top = `${top}px`;
    target.style.borderColor = color;
    target.style.transform = "none";
}
