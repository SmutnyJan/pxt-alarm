input.onButtonPressed(Button.A, function () {
    alarm = true
    basic.showLeds(`
        . . # . .
        . # # # .
        . # # # .
        # # # # #
        . . # . .
        `)
    radio.sendValue("alarm", 1)
})
input.onButtonPressed(Button.B, function () {
    alarm = false
    basic.showLeds(`
        . . # . .
        . # # # .
        . # # # .
        # # # # #
        . . . . .
        `)
    radio.sendValue("alarm", 0)
})
radio.onReceivedValue(function (name, value) {
    if (name == "alarm" && value == 1 && alarm == false) {
        alarm = true
        basic.showLeds(`
            . . # . .
            . # # # .
            . # # # .
            # # # # #
            . . # . .
            `)
        radio.sendValue("alarm", 1)
    } else if (name == "alarm" && value == 0 && alarm == true) {
        alarm = false
        basic.showLeds(`
            . . # . .
            . # # # .
            . # # # .
            # # # # #
            . . . . .
            `)
        radio.sendValue("alarm", 0)
    }
})
let alarm = false
radio.setGroup(1)
basic.showLeds(`
    . . # . .
    . # # # .
    . # # # .
    # # # # #
    . . . . .
    `)
basic.forever(function () {
    if (alarm) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(294, music.beat(BeatFraction.Whole))
    }
})
