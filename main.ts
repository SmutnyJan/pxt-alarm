input.onButtonPressed(Button.A, function () {
    Alarm.SpustitAlarmAOdesli()
})
input.onButtonPressed(Button.B, function () {
    Alarm.VypnoutAlarmAOdesli()
})
radio.onReceivedValue(function (name, value) {
    Alarm.PrijmoutPokyn(name, value)
})
radio.setGroup(1)
