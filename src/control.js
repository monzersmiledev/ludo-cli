import Yake from './yake.js';

let yake = new Yake()

export default class Control{

    /**
     * @description this class responsble on controlling the whole game not just the spirits
     * @param {Object} spirits_storage the spirits public storage so you can actully control them all
     */
    constructor(spirits_storage) {
        this.spirits = spirits_storage;

    }
    
    // ummmm idk what i should do here tbh
    // but i know that the game should start with no spirit outside the house
    // or i may need to actully stor the block id the spirit standing on in the spirit it self so i don't have to search in every block one by one
    // and that's will mean less code and more performence i guess
    // there is maybe one of two now
    // whether i search for spirits in the game blocks or save a copy of every spirit with it's id in the spirit storage
    // i need to figure this out Wanna help me?

    // TODO: you need more cli stuff here as u know CONTROLLER!

    //move spesific spirit
    // this.spirits.move_spirit("replace this with the spirit id")

    runner() {

        // i should probebly use promise in this function and reject it when the user get 6 three times in a row
        yake.run()
    }
}