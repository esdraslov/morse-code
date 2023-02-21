namespace morse {
    //% block="make a long sound ?show %show"
    export function makeLongSound(show: boolean = false) {
        if(show == false){
            music.playTone(Note.C, music.beat(BeatFraction.Whole))
        }else{
            basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            . . . . .
            `)
            music.playTone(Note.C, music.beat(BeatFraction.Whole))
        }
    }
    //% block="make a short sound ?show %show"
    export function makeShortSound(show: boolean = false) {
        if (show == false) {
            music.playTone(Note.C, music.beat(BeatFraction.Whole))
        } else {
            basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
            music.playTone(Note.C, music.beat(BeatFraction.Half))
        }
    }
}

