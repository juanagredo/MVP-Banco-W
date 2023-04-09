let screens = []; // arreglo para guardar las imágenes
let currentScreen = 1; //imagen actual


function preload() {
    //suben las imágenes en una nueva posición
    screens[0] = loadImage('./images/menu.png');
    screens[1] = loadImage('./images/blog1.png');
    screens[2] = loadImage('./images/blog2.png');
    screens[3] = loadImage('./images/blog-detalle.png');

}

function setup() {
    
}

function draw() {
    createCanvas(390, screens[currentScreen].height);
    background(250);
    showScreen();

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
    }

}