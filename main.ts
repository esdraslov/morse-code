namespace morse {
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

