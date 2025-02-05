let screens = []; // arreglo para guardar las imágenes
let currentScreen = 0; //imagen actual
let boton_position = 0;
let this_scroll = 0;
let tut_posX = 131;
let tut_posx2 = 109;
let pasos_tut;

let logo = [];
let section_salvalogo = [];
let salvalogo_status = 1;
let section_salvalogo_status = 2;

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
    screens[4 + 10] = loadImage('./images/dashboard/MobileNav.png');
    screens[5 + 10] = loadImage('./images/dashboard/MobileDashboard.png');
    screens[6 + 10] = loadImage('./images/dashboard/Mobile Giros Internacionales.png');
    screens[7 + 10] = loadImage('./images/dashboard/Seguros.png');
    screens[8 + 10] = loadImage('./images/dashboard/Mobile.png');
    screens[9 + 10] = loadImage('./images/dashboard/Mobile Agenda 1.png');
    screens[10 + 10] = loadImage('./images/dashboard/Mobile-3.png');
    screens[11 + 10] = loadImage('./images/dashboard/Mobile-1.png');
    screens[12 + 10] = loadImage('./images/dashboard/Mobile-2.png');
    screens[13 + 10] = loadImage('./images/dashboard/Ahorro.png');
    screens[14 + 10] = loadImage('./images/dashboard/Crédito.png');

    logo[0] = loadImage('./images/Boton/Boton_activo.png');
    logo[1] = loadImage('./images/Boton/Boton_inactivo.png');

    section_salvalogo[0] = loadImage('./images/Boton/boton_frame1.png');
    section_salvalogo[1] = loadImage('./images/Boton/la_seño_explica.png');

    pasos_tut = loadImage('./images/Boton/pasos_tut.png');
}

function setup() {

    section_salvalogo[2] = null


}

function draw() {
    createCanvas(390, screens[currentScreen].height);
    background(250);
    showScreen();
    fill("Salmon");
    textSize(16);
    textAlign(CENTER);
    text("(" + floor(mouseX) + ", " + floor(mouseY) + ")", mouseX, mouseY);
    salvalogo_position();
    show_salvalogo();

}

//para los clicks
function mousePressed() {
    navBar();
    nav();
    changeScreen();
    returnPerfil();

    if (salvalogo_status === 0 && section_salvalogo_status === 1) {
        tut_posx2 -= (256+382)
        if (tut_posx2 < -2850) {
            section_salvalogo_status = 0
            tut_posx2 = 109
            
        }
     }

    button_salvalogo(

        {
            xButton: 310, //posición x
            yButton: boton_position, //posición y
            wButton: 80, //ancho del botón
            hButton: 80, //alto del boton

        }

    )

    button_tutorial({
        xButton: 131, //posición x
        yButton: boton_position - 145, //posición y
        wButton: 250, //ancho del botón
        hButton: 30, //alto del boton

    })

    button_tutorial2({
        xButton: 80, //posición x
        yButton: boton_position - 300, //posición y
        wButton: 390, //ancho del botón
        hButton: 180, //alto del boton

    })

}

function show_salvalogo() {
    image(logo[salvalogo_status], 306, boton_position);

    if (section_salvalogo_status < 2) {
        image(section_salvalogo[section_salvalogo_status], tut_posX, boton_position - 230);
        
        
    }
        if (section_salvalogo_status === 1) {
        tut_posX = 0
        image(pasos_tut, tut_posx2, boton_position - 230);
    } else {
        tut_posX = 131
    }
    
}

function returnPerfil() {
    if (currentScreen > 10 + 4 && currentScreen < 10 + 15) {
        button({
            xButton: 20,
            yButton: 20,
            wButton: 35,
            hButton: 30,
            screen: 14
        });
    }
}

window.addEventListener('scroll', (e) => {
    this_scroll = this.scrollY;
})

function salvalogo_position() {
    if (window.innerHeight > screens[currentScreen].height) {
        boton_position = screens[currentScreen].height + this_scroll - 90
    } else {
        boton_position = window.innerHeight + this_scroll - 90;
    }
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


function button_tutorial({
    xButton, //posición x
    yButton, //posición y
    wButton, //ancho del botón
    hButton, //alto del boton
}) {
    const widthB = xButton + wButton;
    const heightB = yButton + hButton;
    if (xButton < mouseX && mouseX < widthB && yButton < mouseY && mouseY < heightB) {


        if (salvalogo_status === 0 && section_salvalogo_status != 1) {
            section_salvalogo_status = 1
        }
    }
}

function button_tutorial2({
    xButton, //posición x
    yButton, //posición y
    wButton, //ancho del botón
    hButton, //alto del boton
}) {
    const widthB = xButton + wButton;
    const heightB = yButton + hButton;
    if (xButton < mouseX && mouseX < widthB && yButton < mouseY && mouseY < heightB) {


        if (salvalogo_status === 0 && section_salvalogo_status === 1) {
           // tut_posx2 += (257+391)
        }
    }
}

function button_salvalogo({
    xButton, //posición x
    yButton, //posición y
    wButton, //ancho del botón
    hButton, //alto del boton
}) {
    const widthB = xButton + wButton;
    const heightB = yButton + hButton;
    if (xButton < mouseX && mouseX < widthB && yButton < mouseY && mouseY < heightB) {


        if (salvalogo_status === 0) {
            section_salvalogo_status = 2
            salvalogo_status = +1
        } else {

            section_salvalogo_status = 0

            salvalogo_status = 0
        }
    }
}

function buttonToScroll({
    xButton, //posición x
    yButton, //posición y
    wButton, //ancho del botón
    hButton, //alto del boton
    toMove
}) {
    const widthB = xButton + wButton;
    const heightB = yButton + hButton;
    if (xButton < mouseX && mouseX < widthB && yButton < mouseY && mouseY < heightB) {
        window.scroll(0, toMove);
    }
}

//para abrir el menu
function navBar() {

    if (currentScreen > 10 + 3 && currentScreen < 10 + 15) {
        button({
            xButton: 327,
            yButton: 80,
            wButton: 45,
            hButton: 45,
            screen: 0
        });
    } else {

        button({
            xButton: 327,
            yButton: 26,
            wButton: 45,
            hButton: 45,
            screen: 0
        });
    }
}

function nav() {

    if (currentScreen === 0) {

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

        button({
            xButton: 31,
            yButton: 208,
            wButton: 328,
            hButton: 58,
            screen: 10 + 4 // cambien el numero de acuerdo a lo que necesiten 
        })

    }

    if (currentScreen === 4) {
        button({ //Microcredito
            xButton: 0,
            yButton: 382,
            wButton: 390,
            hButton: 58,
            screen: 5 // cambien el numero de acuerdo a lo que necesiten 
        })

    }

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

            buttonToScroll({
                xButton: 0,
                yButton: 657,
                wButton: 390,
                hButton: 70,
                toMove: 1400
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

        case 14:

            for (let i = 0; i < 2; i++) {
                for (let j = 0; j < 3; j++) {

                    button({
                        xButton: 16 + (184 * i),
                        yButton: 276 + (134 * j),
                        wButton: 160,
                        hButton: 122,
                        screen: 10 + 5 + (i) + (j * 2) // cambien el numero de acuerdo a lo que necesiten 
                    });
                }
            }
            break;

        case 15:


            setTimeout(() => {

                button({
                    xButton: 16,
                    yButton: 270,
                    wButton: 351,
                    hButton: 121,
                    screen: 23 // cambien el numero de acuerdo a lo que necesiten 
                });

                button({
                    xButton: 16,
                    yButton: 481,
                    wButton: 351,
                    hButton: 111,
                    screen: 24 // cambien el numero de acuerdo a lo que necesiten 
                });

                button({
                    xButton: 16,
                    yButton: 800,
                    wButton: 351,
                    hButton: 121,
                    screen: 17 // cambien el numero de acuerdo a lo que necesiten 
                });

            }, 100);

            break;


    }

}