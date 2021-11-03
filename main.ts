basic.forever(function () {
    if (input.lightLevel() > 100) {
        basic.showString("5")
    } else if (input.lightLevel() > 80) {
        basic.showString("4")
    } else if (input.lightLevel() > 60) {
        basic.showString("3")
    } else if (input.lightLevel() > 40) {
        basic.showString("2")
    } else {
        basic.showString("1")
    }
})
