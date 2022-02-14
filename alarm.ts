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
    * Spustí alarm a pošle všem zařízením v okolí zprávu
    */
    //% block="Spusť alarm a pošli zprávu"

    export function SpustitAlarmAOdesli(): void {
        alarm = true
        basic.showLeds(`
        . . # . .
        . # # # .
        . # # # .
        # # # # #
        . . # . .
        `)
        radio.sendValue("alarm", 1)
    }

    /**
    * Vypne alarm a pošle všem zařízením v okolí zprávu
    */
    //% block="Vypni alarm a pošli zprávu"

    export function VypnoutAlarmAOdesli(): void {
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

    /**
    * Přijmout pokyn
    */
    //% block="Přijmout pokyn %name %value"

    export function PrijmoutPokyn(name: string, value: number): void {
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
    }

    basic.forever(function () {
        if (alarm) {
            music.playTone(262, music.beat(BeatFraction.Whole))
            music.playTone(294, music.beat(BeatFraction.Whole))
        }
    })



}