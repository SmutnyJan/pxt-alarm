//% weight=100 color=#d1242c icon="\uf0f3" block="Alarm"
namespace Alarm {
    let alarm = false

    basic.showLeds(`
        . . # . .
        . # # # .
        . # # # .
        # # # # #
        . . . . .
        `)

        
    /**
    * Spustí alarm a pošle všem zařízením v okolí pokyn ke spuštění alarmu
    */
    //% block="Spusť alarm a pošli pokyn"

    export function spustitAlarmAOdeslat(): void {
        alarm = true
        basic.showLeds(`
        . . # . .
        . # # # .
        . # # # .
        # # # # #
        . . # . .
        `)
        radio.sendString("alarm_on")
    }

    /**
    * Vypne alarm a pošle všem zařízením v okolí pokyn k vypnutí alarmu
    */
    //% block="Vypni alarm a pošli pokyn"

    export function vypnoutAlarmAOdeslat(): void {
        alarm = false
        basic.showLeds(`
        . . # . .
        . # # # .
        . # # # .
        # # # # #
        . . . . .
        `)
        radio.sendString("alarm_off")
    }

    /**
    * Přijme pokyn od jiného zařízení
    * @pokyn Pokyn
    */
    //% block="Přijmout pokyn %pokyn"

    export function prijmoutPokyn(pokyn: string): void {
        if (pokyn == "alarm_on" && alarm == false) {
            alarm = true
            basic.showLeds(`
            . . # . .
            . # # # .
            . # # # .
            # # # # #
            . . # . .
            `)
            radio.sendString("alarm_on")
        } else if (pokyn == "alarm_off" && alarm == true) {
            alarm = false
            basic.showLeds(`
            . . # . .
            . # # # .
            . # # # .
            # # # # #
            . . . . .
            `)
            radio.sendString("alarm_off")
        }
    }

    basic.forever(function () {
        if (alarm) {
            music.playTone(262, music.beat(BeatFraction.Whole))
            music.playTone(294, music.beat(BeatFraction.Whole))
        }
    })



}