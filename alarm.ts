/**
 * Použijte tento soubor k definování personalizovaných funkcí a bloků.
 * Přečtěte si více na https://makecode.microbit.org/blocks/custom
 */


/**
 * Custom blocks
 */
//% weight=100 color=#d1242c icon="\uf0f3"
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

    export function SpustitAlarmAOdesli(): void {
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

    export function VypnoutAlarmAOdesli(): void {
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
    */
    //% block="Přijmout pokyn %name"

    export function PrijmoutPokyn(name: string): void {
        if (name == "alarm_on" && alarm == false) {
            alarm = true
            basic.showLeds(`
            . . # . .
            . # # # .
            . # # # .
            # # # # #
            . . # . .
            `)
            radio.sendString("alarm_on")
        } else if (name == "alarm_off" && alarm == true) {
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