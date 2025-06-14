function LoadPage(url, containerId){
    fetch(url)
    .then(response => response.text())
    .then(html => {
       document.getElementById(containerId).innerHTML = html;

    if(url.includes("projects.html")){

        const script = document.createElement("script");
        script.src = "JavaScript/Projects.js";
        script.defer = true;

        script.onload = () => {
            if (typeof initProjects === "function") {
                initProjects();
            }
        };
    
        document.head.appendChild(script);
    }
});
}

window.onload = function(){
    LoadPage("HTML/about.html", "content");
}
