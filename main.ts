alarm.onAlarm(function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        . # # # .
        # # # # #
        . . # . .
        `)
    alarm.turnOnAlarmAndBroadcast()
})
radio.onReceivedString(function (receivedString) {
    vysledek = alarm.receiveBroadcast(receivedString)
    if (vysledek == true) {
        basic.showLeds(`
            . . # . .
            . # # # .
            . # # # .
            # # # # #
            . . # . .
            `)
    } else {
        basic.showLeds(`
            . . # . .
            . # # # .
            . # # # .
            # # # # #
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        . # # # .
        # # # # #
        . . . . .
        `)
    alarm.turnOffAlarmAndBroadcast()
})
let vysledek = false
basic.showLeds(`
    . . # . .
    . # # # .
    . # # # .
    # # # # #
    . . . . .
    `)
radio.setGroup(1)
