function addComment() {
    // Obtener el texto ingresado en el textarea
    let commentText = document.getElementById("commentInput").value;
    // Verificar si el comentario está vacío o espacios
    if (commentText.trim() === "") return;
    let commentDiv = document.createElement("div");
    commentDiv.classList.add("comment");
    let date = new Date().toLocaleString();
    commentDiv.innerHTML = `
        <p>${commentText}</p>
        <span class="date">${date}</span> 
        <button onclick="this.parentElement.remove()">Eliminar</button>
    `;
    document.getElementById("comments").appendChild(commentDiv);
    document.getElementById("commentInput").value = "";
}