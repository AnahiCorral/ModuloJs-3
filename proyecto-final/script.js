const users = [
    {name: "Carl Megan", username: "sagan", password: "cosmos", image: "https://images.pexels.com/photos/596132/pexels-photo-596132.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {name: "Anahi Nat", username: "ana", password: "universo", image: "https://images.pexels.com/photos/355935/pexels-photo-355935.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {name: "Galileo", username: "galileo", password: "estrellas", image: "https://images.pexels.com/photos/986893/pexels-photo-986893.jpeg?auto=compress&cs=tinysrgb&w=600"}
];

function logIn() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const error = document.getElementById('error');

    const user = users.find(user => user.username === username && user.password === password);
    
    if (user) {
        localStorage.setItem("loggedUser", JSON.stringify(user));
        window.location.href = "home.html";
    } else {
        error.textContent = "Usuario o contraseña incorrecta";
    }
}

