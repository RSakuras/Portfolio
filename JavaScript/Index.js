function LoadPage(url, containerId){
    fetch(url)
    .then(response => response.text())
    .then(html => {
        document.getElementById(containerId).innerHTML = html;
    })
}