let arr_tech_matrix: number[] = [8,8]
let pixelAnzahl:number = 0

let bst_reihe: string = "";
let strip_helligkeit = 25;
// auch  scrollspeed

let automat: boolean=false;
let strip_pause = 250;
let arr_zeichen: number[][];
basic.showIcon(IconNames.SmallSquare)

// let strip: neopixel.Strip;
let strip = neopixel.create(0, 64, NeoPixelMode.RGB)

// init_alphabet();
// init_strip();
strip.showColor(NeoPixelColors.Red)
strip.show();
// strip.clear()
// strip.setBrightness(64)
// strip.showColor(neopixel.colors(NeoPixelColors.Red))
// strip.show()


basic.forever(function () {
    basic.pause(2000)
    // strip.rotate(8)
    strip.show()
    
})


function init_strip() {
    pixelAnzahl = arr_tech_matrix[0] * arr_tech_matrix[1]
    // pixelAnzahl = breite;
    strip = neopixel.create(0, pixelAnzahl, NeoPixelMode.RGB)
    strip.setBrightness(strip_helligkeit)
    strip.clear()
    // strip.show()
}

function set_helligkeit(helligkeit: number) {
    strip_helligkeit = helligkeit
    // console.log("helligkeit"+strip_helligkeit)
    strip.setBrightness(strip_helligkeit)
    
}
function loesche_matrix() {

    strip.clear()
    strip.show()
}

function init_alphabet() {
    bst_reihe = " ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÜäöü0123456789!?.,*+-=≠:%abcdefghijklmnopqrstuvwxyz()<>";
    arr_zeichen = [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [14, 17, 17, 31, 17, 17, 17, 0], //A
        [30, 17, 17, 30, 17, 17, 30, 0],
        [14, 17, 16, 16, 16, 17, 14, 0],
        [30, 17, 17, 17, 17, 17, 30, 0],//D
        [31, 16, 16, 30, 16, 16, 31, 0],
        [31, 16, 16, 30, 16, 16, 16, 0],
        [14, 17, 16, 23, 17, 17, 14, 0],
        [17, 17, 17, 31, 17, 17, 17, 0],
        [14, 4, 4, 4, 4, 4, 14, 0],
        [15, 2, 2, 2, 2, 18, 12, 0],
        [17, 18, 20, 24, 20, 18, 17, 0], //K
        [16, 16, 16, 16, 16, 16, 31, 0],
        [17, 27, 21, 21, 17, 17, 17, 0],
        [17, 17, 25, 21, 19, 17, 17, 0],
        [14, 17, 17, 17, 17, 17, 14, 0],
        [30, 17, 17, 30, 16, 16, 16, 0],
        [14, 17, 17, 17, 21, 18, 13, 0],
        [30, 17, 17, 30, 20, 18, 17, 0],
        [14, 17, 16, 14, 1, 17, 14, 0],
        [31, 4, 4, 4, 4, 4, 4, 0],       //T
        [17, 17, 17, 17, 17, 17, 14, 0],
        [17, 17, 17, 17, 17, 10, 4, 0],
        [17, 17, 17, 21, 21, 27, 17, 0],
        [17, 17, 10, 4, 10, 17, 17, 0],
        [17, 17, 10, 4, 4, 4, 4, 0],
        [31, 1, 2, 4, 8, 16, 31, 0], //Z
        [10, 0, 14, 17, 31, 17, 17, 0], //Ä
        [10, 0, 14, 17, 17, 17, 14, 0], //Ö
        [10, 0, 17, 17, 17, 17, 14, 0], //Ü
        [10, 0, 14, 1, 15, 17, 15, 0], //ä
        [0, 10, 0, 14, 17, 17, 14, 0], //ö
        [0, 10, 0, 17, 17, 17, 14, 0], //ü

        [14, 17, 19, 21, 25, 17, 14, 0], //0
        [4, 12, 4, 4, 4, 4, 14, 0],
        [14, 17, 1, 2, 4, 8, 31, 0],
        [31, 2, 4, 2, 1, 17, 14, 0],
        [2, 6, 10, 18, 31, 2, 2, 0],
        [31, 16, 30, 1, 1, 17, 14, 0],
        [6, 8, 16, 30, 17, 17, 14, 0],
        [31, 1, 2, 4, 4, 4, 4, 0],
        [14, 17, 17, 14, 17, 17, 14, 0],
        [14, 17, 17, 15, 1, 2, 12, 0],//9

        [4, 4, 4, 4, 4, 0, 4, 0], //!
        [14, 17, 1, 2, 4, 0, 4, 0], //?
        [0, 0, 0, 0, 0, 12, 12, 0], //.
        [0, 0, 0, 0, 0, 12, 12, 4], //,
        [0, 0, 4, 21, 14, 21, 4, 0], //*
        [0, 0, 4, 4, 31, 4, 4, 0], //+
        [0, 0, 0, 0, 31, 0, 0, 0], //-
        [0, 0, 0, 31, 0, 31, 0, 0], //=
        [1, 2, 31, 4, 31, 8, 16, 0], //
        [0, 0, 12, 12, 0, 12, 12, 0], //:
        [24, 25, 2, 4, 8, 19, 3, 0], //%

        [0, 0, 14, 1, 15, 17, 31, 0],//a
        [16, 16, 22, 25, 17, 17, 14, 0], //b
        [0, 0, 15, 16, 16, 16, 15, 0], //c
        [1, 1, 13, 19, 17, 17, 15, 0], //d
        [0, 0, 14, 17, 31, 16, 14, 0], //e
        [2, 5, 4, 14, 4, 4, 4, 4], //f
        [0, 0, 15, 17, 17, 15, 1, 14], //g
        [16, 16, 22, 25, 17, 17, 17, 0], //h
        [4, 0, 12, 4, 4, 4, 14, 0], //i
        [2, 0, 2, 2, 2, 2, 10, 4], //j
        [8, 8, 9, 10, 12, 10, 9, 0], //k
        [12, 4, 4, 4, 4, 4, 14, 0], //l
        [0, 0, 26, 21, 21, 21, 21, 0],//m
        [0, 0, 22, 25, 17, 17, 17, 0], //n
        [0, 0, 14, 17, 17, 17, 14, 0], //o
        [0, 0, 30, 17, 17, 30, 16, 16], //p
        [0, 0, 15, 17, 17, 15, 1, 1], //q
        [0, 0, 11, 12, 8, 8, 8, 0], //r
        [0, 0, 15, 16, 14, 1, 30, 0], //s
        [4, 14, 4, 4, 4, 5, 2, 0], //t
        [0, 0, 17, 17, 17, 19, 13, 0], //u
        [0, 0, 17, 17, 17, 10, 4, 0], //v
        [0, 0, 17, 17, 17, 21, 10, 0], //w
        [0, 0, 17, 10, 4, 10, 17, 0], //x
        [0, 0, 17, 9, 6, 4, 8, 16], //y
        [0, 0, 31, 2, 4, 8, 31, 0], //z

        
        [4, 8, 16, 16, 16, 8, 4, 0], //()
        [4, 2, 1, 1, 1, 2, 4, 0], //)

        [2, 4, 8, 16, 8, 4, 2, 0], //<
        [8, 4, 2, 1, 2, 4, 8, 0], //>
        [6, 9, 28, 8, 28, 9, 6, 0]
    ]
}


// }
input.onButtonPressed(Button.A, function () {
    // power.fullPowerOn(FullPowerSource.A)
    strip_helligkeit = Math.min(strip_helligkeit + 25, 255);;
    strip.setBrightness(strip_helligkeit)
    basic.showNumber(strip_helligkeit);
    automat = !automat;
})

input.onButtonPressed(Button.B, function () {
    strip_helligkeit = Math.max(strip_helligkeit - 25, 25);
    strip.setBrightness(strip_helligkeit)
    basic.showNumber(strip_helligkeit);
    strip.rotate(-16); 
    strip.show();
})

input.onButtonPressed(Button.AB, function () {
    let s = 0
    // for (let s=0;s<neo_strip_anz;s++) {
    strip.clear()
    strip.show()
})

function randColor() {
    return [NeoPixelColors.Red, NeoPixelColors.Green, NeoPixelColors.Blue, NeoPixelColors.Yellow][Math.randomRange(0, 3)]
}

