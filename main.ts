input.onButtonPressed(Button.A, function () {
	
})
basic.forever(function () {
    music.playTone(392, music.beat(BeatFraction.Whole))
    pins.digitalWritePin(DigitalPin.P5, 1)
    pins.digitalWritePin(DigitalPin.P1, 0)
    music.playTone(523, music.beat(BeatFraction.Whole))
    pins.digitalWritePin(DigitalPin.P5, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
})
