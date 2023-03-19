import loader from "./components/loader.js";
import showMenu from "./components/showMenu.js";
import showCart from "./components/showCart.js";
import products from "./components/product.js";
import getProducts from "./helpers/getProducts.js";
import cart from "./components/cart.js";
import contactButton from "./components/app.js";
import dataForm from "./components/dataForm.js";
import modalMembers from "./components/modalMembers.js";
import slider from "./components/slider.js";
import darkMode from "./components/darkMode.js";

// Ocultar loader
loader()

// Mostrar Menu
showMenu()

// Mostrar carrito
showCart()

// Slider
// slider()

// Products
const { db, printProducts } = products(await getProducts())

// Carrito
cart(db, printProducts)

// Boton de Contacto
contactButton()

// dataForm al correo
dataForm()

// Modal Integrantes
// modalMembers()

// Dark Mode
darkMode()

