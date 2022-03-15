input.onButtonPressed(Button.A, function () {
    alarm.turnOnAlarmAndBroadcast()
})
radio.onReceivedString(function (receivedString) {
    alarm.receiveBroadcast(receivedString)
})
input.onButtonPressed(Button.B, function () {
    alarm.turnOffAlarmAndBroadcast()
})
