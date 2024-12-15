document.addEventListener("DOMContentLoaded", () => {
    const botonAgregar = document.querySelectorAll(".agregarCarrito");//Agrega todos los botones a un array

    botonAgregar.forEach((boton) => {
        boton.addEventListener("click", (e) => {
            e.preventDefault();//Evita que se envie la informacion
            const producto = boton.getAttribute("data-nombre");
            const precio = boton.getAttribute("data-precio");
            const tienda = boton.getAttribute("data-tienda");
            console.log(producto);
            console.log(precio);
            console.log(tienda);

            const alertCarrito = document.getElementById("alertCarrito");
            alertCarrito.classList.remove("d-none");
            if(tienda == "1"){
                alertCarrito.innerHTML = `${producto} agregado a tu carrito. <a class="carritoLink" href="../pages/carrito.html">VER CARRITO</a>`;
            }else{
                alertCarrito.innerHTML = `${producto} agregado a tu carrito. <a class="carritoLink" href="./pages/carrito.html">VER CARRITO</a>`;
            }

            setTimeout(() => {
                alertCarrito.classList.add("d-none");
            }, 3000);

            const productoCarrito = JSON.parse(localStorage.getItem("carrito")) || [];
            productoCarrito.push({ producto, precio });
            localStorage.setItem("carrito", JSON.stringify(productoCarrito));

            //alert(`${producto} agregado al carrito`);
        });
    });
});