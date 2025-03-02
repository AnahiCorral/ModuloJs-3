document.addEventListener("DOMContentLoaded", function() {
    mostrarComentarios();
});

function postComment() {
    const commentText = document.getElementById('comment').value.trim();
    const user = JSON.parse(localStorage.getItem("loggedUser"));
    const timestamp = new Date().toLocaleString();

    if (!commentText) {
        alert("El comentario no puede estar vacío");
        return;
    }

    const newComment = {
        id: Date.now(),
        username: user.username,
        name: user.name,
        image: user.image,
        commentText: commentText,
        timestamp: timestamp
    };

    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.push(newComment);
    localStorage.setItem('comments', JSON.stringify(comments));

    document.getElementById('comment').value = "";
    mostrarComentarios();
}

function mostrarComentarios() {
    const commentSection = document.getElementById('comment-section');
    const comments = JSON.parse(localStorage.getItem('comments')) || [];

    commentSection.innerHTML = '';

    comments.forEach(comment => {
        const comentarioElement = document.createElement("section");
        comentarioElement.classList.add("comentario");
        comentarioElement.innerHTML = `
            <img src="${comment.image}" class="user-image"> 
            <strong>${comment.name}</strong> <br>
            <p>${comment.timestamp}</p>
            <p>${comment.commentText}</p>
            <button onclick="deleteComment(${comment.id})">Eliminar</button>
        `;
        commentSection.appendChild(comentarioElement);
    });
}

function deleteComment(commentId) {
    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments = comments.filter(comment => comment.id !== commentId);
    localStorage.setItem('comments', JSON.stringify(comments));
    mostrarComentarios();
}
