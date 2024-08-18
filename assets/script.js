const url = "https://jsonplaceholder.typicode.com/posts";

const getPosts = async () => {
    try {
        // Realizar la solicitud a la API utilizando async-await
        let response = await fetch(url);

        // Validar que la respuesta sea exitosa
        if (!response.ok) {
        throw new Error("Error en la solicitud: " + response.status);
        }

        let data = await response.json();

        // Seleccionar el contenedor donde se mostrarán los posts
        const postsContainer = document.getElementById("post-data");

        // Crear los elementos <li> para cada post y agregarlos a una lista <ul>
        const listItems = data
        .map(
            (post) => `<li><strong>${post.title}</strong><p>${post.body}</p></li>`
        )
        .join("");

        // Insertar la lista en el contenedor
        postsContainer.innerHTML = `<ul>${listItems}</ul>`;
    } catch (error) {
        // Manejar los posibles errores con try-catch y mostrar un mensaje en la consola
        console.error("Error:", error);

        // Mostrar un mensaje de error en el HTML
        document.getElementById(
        "post-data"
        ).innerHTML = `<p>Ocurrió un error al obtener los posts: ${error.message}</p>`;
    }
};
