input.onButtonPressed(Button.A, function () {
    Alarm.SpustitAlarmAOdesli()
})
radio.onReceivedString(function (receivedString) {
    Alarm.PrijmoutPokyn(receivedString)
})
input.onButtonPressed(Button.B, function () {
    Alarm.VypnoutAlarmAOdesli()
})
radio.setGroup(1)
