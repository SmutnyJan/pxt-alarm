input.onButtonPressed(Button.A, function () {
    Alarm.spustitAlarmAOdesli()
})
radio.onReceivedString(function (receivedString) {
    Alarm.prijmoutPokyn(receivedString)
})
input.onButtonPressed(Button.B, function () {
    Alarm.vypnoutAlarmAOdesli()
})
radio.setGroup(1)
