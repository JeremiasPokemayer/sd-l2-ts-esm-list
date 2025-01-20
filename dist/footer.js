export function footerComponent() {
    const footer = document.createElement("footer");
    footer.innerHTML = "<h1>Soy el Footer</h1>";
    footer.style.borderTop = "solid 1px #ccc";
    footer.style.padding = "10px";
    footer.style.textAlign = "center";
    const paragraph = document.createElement("p");
    paragraph.textContent =
        "© 2025 Tienda Jeremias. Todos los derechos reservados.";
    footer.appendChild(paragraph);
    return footer;
}
