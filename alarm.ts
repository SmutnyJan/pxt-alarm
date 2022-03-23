//% weight=100 color=#d1242c icon="\uf0f3" block="Alarm"
namespace alarm {
    let alarm = false
    let methodLock = false
      
    /**
    * Spustí alarm a pošle všem zařízením v okolí pokyn ke spuštění alarmu
    */
    //% block="Spusť alarm a pošli pokyn"

    export function turnOnAlarmAndBroadcast(): void {
        alarm = true
        radio.sendString("alarm_on")
    }

    /**
    * Vypne alarm a pošle všem zařízením v okolí pokyn k vypnutí alarmu
    */
    //% block="Vypni alarm a pošli pokyn"

    export function turnOffAlarmAndBroadcast(): void {
        alarm = false
        radio.sendString("alarm_off")
    }

    /**
    * Přijme pokyn od jiného zařízení, vrací true/false podle toho, jestli je alarm vypnutý nebo zapnutý
    * @message Pokyn
    */
    //% block="Přijmout pokyn %message"

    export function receiveBroadcast(message: string): boolean {
        if (message == "alarm_on" && alarm == false) {
            alarm = true
            radio.sendString("alarm_on")
        } else if (message == "alarm_off" && alarm == true) {
            alarm = false
            radio.sendString("alarm_off")
        }
        return alarm
    }



    /**
    * Zkontroluje, jestli nedošlo k pohybu
    * @action Příkazy, které se provedou při moc zapnutí alarmu
    */
    //% block="Při zapnutí alarmu"
    export function onGuardAwaken(action: () => void) {
        const eventID = 111 + Math.randomRange(0, 100);

        control.onEvent(eventID, 0, function () {
            control.inBackground(() => {
                methodLock = true
                action()
                methodLock = false
            })
        })

        control.inBackground(() => {
            while (true) {
                if (alarm) {
                    action()
                }
                basic.pause(20)
            }
        })
    }



}