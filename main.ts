let Noise = 0
pins.servoWritePin(AnalogPin.P1, 0)
basic.forever(function () {
    Noise = smarthome.ReadNoise(AnalogPin.P10)
    if (Noise > 70) {
        pins.servoWritePin(AnalogPin.P1, 0)
        basic.pause(1000)
    } else {
        pins.servoWritePin(AnalogPin.P1, 100)
        basic.pause(1000)
    }
})
