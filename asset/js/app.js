
const navSlide = ()=>{
    const burger = document.querySelector(".burger"); 
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener("click", ()=>{
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) =>{
            
            if(link.style.animation)
            {
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+0.3}s`;
            }
            
        });
        burger.classList.toggle('toggle');
    });

}

navSlide();
/*********************************Colocar aca el desarrollo de su ejercicio***************************/

var cont = 1, 
    bitacoras = [],
    formulario = document.getElementById("bitacora");
    console.log(formulario);
    console.log(formulario[0]);
    


    formulario.addEventListener("submit", evt => {
        evt.preventDefault();
        let bitacora = {
        cant:cont,
        fecha: formulario[1].value,
        descripcion: formulario[2].value,
        cantidad: formulario[3].value
      }
        bitacoras.push(bitacora);
        cont++;
        mostrar();
     }); 

     const botonEliminar = document.createElement("button").
                           appendChild(document.createTextNode("eliminar"));

    
     const crearElemento = (bitacora, tbody) =>{
        let tr = document.createElement("tr");
        Object.values(bitacora).forEach(item => {
            let td = document.createElement("td"),
                content = document.createTextNode(item);
         
            td.appendChild(content);
            tr.setAttribute("class", "click");
            tr.appendChild(td);
        });
        let btn = document.createElement("button"),
            texto = document.createTextNode("eliminar");
        btn.appendChild(texto);
        btn.addEventListener("click", function (evt){
            let parent = this.parentNode;
            document.getElementById("tabla-body").removeChild(parent); 
            bitacoras = [];
        });
        tr.appendChild(btn);
        tbody.appendChild(tr);
      } 

    const copiarTabla = tbody => {
        
    }

    
      const eliminar= (tbody)=>{
        while (tbody.firstChild) {
            tbody.removeChild(tbody.firstChild);
        }
    }



    const agregar= ()=>{
        var eventtr = document.querySelectorAll(".click");
        eventtr.forEach((item, index) => {
            item.addEventListener("click", () => {
            document.querySelector("#fecha").value = item.childNodes[1].textContent;
            console.log(document.querySelector("#fecha").value);
            document.querySelector("#descp").value = item.childNodes[2].textContent;
            console.log(document.querySelector("#descp").value);
            document.querySelector("#cant").value = item.childNodes[3].textContent;
            console.log(document.querySelector("#cant").value);
            });        
        })
    } 

    const mostrar = ()=> {
        if (document.querySelector(".tabla-btc tbody").childElementCount > 0) {
         eliminar(document.querySelector(".tabla-btc tbody"));
        }
        bitacoras.forEach(item => {
         crearElemento(item, document.querySelector(".tabla-btc tbody"));
        });
        agregar();
    } 
