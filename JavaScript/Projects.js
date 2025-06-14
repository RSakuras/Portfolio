console.log("Projects.js loaded successfully.");

function initProjects() {
    const projectsMadeContainer = document.getElementById("ProjectsMadeContainer");
    const projectsPartOfContainer = document.getElementById("ProjectsPartOfContainer");
    const template = document.getElementById("ProjectBoxTemplate");

    const projectsMadeData = [
        {
            title: "Project A",
            image: "image.jpg",
            description: "Description of Project A.",
            link: "https://example.com/project-a"
        }
    ];

    const projectsPartOfData = [
        {
            title: "Project B",
            image: "image2.jpg",
            description: "Description of Project B.",
            link: "https://example.com/project-b"
        }
    ];

    projectsMadeData.forEach(item => {
        const projectBoxClone = template.content.cloneNode(true);
        const projectBox = projectBoxClone.querySelector(".ProjectBox");
        projectBox.querySelector("a").href = item.link;
        projectBox.querySelector("img").src = item.image;
        projectBox.querySelector("img").alt = item.title;
        projectBox.querySelector("h3").textContent = item.title;
        projectBox.querySelector("p").textContent = item.description;
        projectsMadeContainer.appendChild(projectBoxClone);
    });

    projectsPartOfData.forEach(item => {
        const projectBoxClone = template.content.cloneNode(true);
        const projectBox = projectBoxClone.querySelector(".ProjectBox");
        projectBox.querySelector("a").href = item.link;
        projectBox.querySelector("img").src = item.image;
        projectBox.querySelector("img").alt = item.title;
        projectBox.querySelector("h3").textContent = item.title;
        projectBox.querySelector("p").textContent = item.description;
        projectsPartOfContainer.appendChild(projectBoxClone);
    });
}
