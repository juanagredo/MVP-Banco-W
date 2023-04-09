let screens = []; // arreglo para guardar las imágenes
let currentScreen = 5; //imagen actual


function preload() {
    //suben las imágenes en una nueva posición
    screens[0] = loadImage('./images/menu.png');
    screens[1] = loadImage('./images/blog1.png');
    screens[2] = loadImage('./images/blog2.png');
    screens[3] = loadImage('./images/blog-detalle.png');
    screens[4] = loadImage('./images/credito-detalle.png');
    screens[5] = loadImage('./images/credito/microcredito1.png');
    screens[6] = loadImage('./images/credito/microcredito2.png');
    screens[7] = loadImage('./images/credito/microcredito3.png');
    screens[8] = loadImage('./images/credito/form1.png');
    screens[9] = loadImage('./images/credito/form2.png');
    screens[10] = loadImage('./images/credito/form3.png');
    screens[11] = loadImage('./images/credito/form4.png');
    screens[12] = loadImage('./images/credito/form5.png');
    screens[13] = loadImage('./images/credito/form6.png');

}

function setup() {

}

function draw() {
    createCanvas(390, screens[currentScreen].height);
    background(250);
    showScreen();
    fill("Salmon");
    textSize(16);
    textAlign(CENTER);
    text("(" + floor(mouseX) + ", " + floor(mouseY) + ")", mouseX, mouseY);

}

//para los clicks
function mousePressed() {
    navBar();
    nav();
    changeScreen();
}

//para mostrar cada pantalla
function showScreen() {
    image(screens[currentScreen], 0, 0);
}

//cambio de pantalla
function screenChanger(screen) {
    currentScreen = screen;
    posY = 0;
}

//generador de botones (saquen las posiciones y los tamaños del figma)
function button({
    xButton, //posición x
    yButton, //posición y
    wButton, //ancho del botón
    hButton, //alto del boton
    screen //pantalla a la que debe cambiar 
}) {
    const widthB = xButton + wButton;
    const heightB = yButton + hButton;
    if (xButton < mouseX && mouseX < widthB && yButton < mouseY && mouseY < heightB) {
        screenChanger(screen);
    }
}

//para abrir el menu
function navBar() {
    button({
        xButton: 327,
        yButton: 26,
        wButton: 45,
        hButton: 45,
        screen: 0
    });
}

function nav() {
    button({ // W contigo
        xButton: 0,
        yButton: 556,
        wButton: 390,
        hButton: 58,
        screen: 1 // cambien el numero de acuerdo a lo que necesiten 
    })

    button({ //Despliegue de tipos de crédito
        xButton: 0,
        yButton: 324,
        wButton: 390,
        hButton: 58,
        screen: 4 // cambien el numero de acuerdo a lo que necesiten 
    })

    button({ //Microcredito
        xButton: 0,
        yButton: 382,
        wButton: 390,
        hButton: 58,
        screen: 5 // cambien el numero de acuerdo a lo que necesiten 
    })







}



// pongan los otros botones aqui 
function changeScreen() {
    fill(20)
    switch (currentScreen) {
        case 1:

            button({
                xButton: 48,
                yButton: 1162,
                wButton: 60,
                hButton: 24,
                screen: 2 // cambien el numero de acuerdo a lo que necesiten 
            })

            break;

        case 2:

            rect(31, 756, 358, 452)
            button({
                xButton: 31,
                yButton: 756,
                wButton: 328,
                hButton: 452,
                screen: 3 // cambien el numero de acuerdo a lo que necesiten 
            })
            break;

        case 5:
            button({ //Información Pagahorro
                xButton: 0,
                yButton: 1479.49,
                wButton: 269,
                hButton: 40,
                screen: 6 // cambien el numero de acuerdo a lo que necesiten 
            })
            button({ //Plazo de estudio de crédito
                xButton: 0,
                yButton: 3504.49,
                wButton: 269,
                hButton: 40,
                screen: 7 // cambien el numero de acuerdo a lo que necesiten 
            })

            button({ //Form input Nombre
                xButton: 0,
                yButton: 4719,
                wButton: 295,
                hButton: 40,
                screen: 8 // cambien el numero de acuerdo a lo que necesiten 
            })

            break;

        case 6:

            button({ //Cerrar pop-up pagahorro
                xButton: 70,
                yButton: 1020,
                wButton: 26,
                hButton: 26,
                screen: 5 // cambien el numero de acuerdo a lo que necesiten 
            })
            break;

        case 7:

            button({ //Cerrar pop-up estudio de crédito
                xButton: 0,
                yButton: 3040,
                wButton: 269,
                hButton: 40,
                screen: 5 // cambien el numero de acuerdo a lo que necesiten 
            })

            break;
        case 8:
            button({ //Form input Apellido
                xButton: 0,
                yButton: 4800,
                wButton: 295,
                hButton: 40,
                screen: 9 // cambien el numero de acuerdo a lo que necesiten 
            })
            break;
        case 9:
            button({ //Form input Cedula
                xButton: 135,
                yButton: 4874,
                wButton: 295,
                hButton: 40,
                screen: 10 // cambien el numero de acuerdo a lo que necesiten 
            })
            break;
        case 10:

            button({ //Form input Celular
                xButton: 0,
                yButton: 4964,
                wButton: 295,
                hButton: 40,
                screen: 11 // cambien el numero de acuerdo a lo que necesiten 
            })

            break;
        case 11:


            button({ //Form input Acepto terminos y condiciones
                xButton: 56,
                yButton: 5192,
                wButton: 25,
                hButton: 25,
                screen: 12 // cambien el numero de acuerdo a lo que necesiten 
            })



            break;
        case 12:
            button({ //Form input Acepto terminos y condiciones
                xButton: 0,
                yButton: 5249,
                wButton: 269,
                hButton: 40,
                screen: 13 // cambien el numero de acuerdo a lo que necesiten 
            })
            break;

        case 13:
            button({ //Form input Acepto terminos y condiciones
                xButton: 0,
                yButton: 4777,
                wButton: 328,
                hButton: 176,
                screen: 5 // cambien el numero de acuerdo a lo que necesiten 
            })
            break;

    }

}