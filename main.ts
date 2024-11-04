basic.showIcon(IconNames.SmallSquare)

let strip = neopixel.create(DigitalPin.P0, 64, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Red))
// strip.clear()

// basic.pause(2000)
strip.setBrightness(32)
strip.show()

basic.forever(function () {
    // strip.rotate(8)
    // strip.show()
    // basic.pause(200)
})
