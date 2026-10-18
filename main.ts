input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.pause(1000)
    basic.clearScreen()
})
input.setAccelerometerRange(AcceleratorRange.EightG)
radio.setGroup(13)
basic.forever(function () {
    radio.sendNumber(input.acceleration(Dimension.Y))
})
