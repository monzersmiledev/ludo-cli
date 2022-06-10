import Yake from './yake.js';

let yake = new Yake()

export default class Control{
    constructor(spirits) {
        this.spirits = spirits;

    }
    
    // ummmm idk what i should do here tbh
    // but i know that the game should start with no spirit outside the house
    // or i may need to actully stor the block id the spirit standing on in the spirit it self so i don't have to search in every block one by one
    // and that's will mean less code and more performence i guess
    // there is maybe one of two now
    // whether i search for spirits in the game blocks or save a copy of every spirit with it's id in the spirit storage
    // i need to figure this out Wanna help me?

    runner() {
        yake.run()
    }
}