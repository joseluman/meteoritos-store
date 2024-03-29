# Meteorito Store

Este proyecto fue desarrollado con el framework React JS, complenetadose con librerías de css como Bootstrap y Sweetalert2.

## Hooks utilizados

Para el funcionamiento del proyecto se utilizaron los hooks: useState, useParams, useContext y useEffect 

### ¿Cómo funciona?

La tienda se basa en una lógica utilizando Firebase como database de productos, con useEffect nos traemos la información como promesa para comprobar los datos y luego los consumimos en el sitio como html con el método map().

Utilizamos el contexto para poder guardar los datos de la navegación, en este caso los productos que se agregan al carro para poder tener una coherencia con el UI. 

![items](https://github.com/joseluman/meteoritos-store/blob/main/public/img/items.png?raw=true)

Una vez que se finaliza la compra se envía la información de la compra a firebase y se muestra un número de orden, simulando una compra real. 

![orders](https://github.com/joseluman/meteoritos-store/blob/main/public/img/orders.png?raw=true)

### Flujo de compra

![orders](https://github.com/joseluman/meteoritos-store/blob/main/public/img/compra.gif?raw=true)







