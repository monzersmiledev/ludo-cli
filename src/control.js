import Yake from './yake.js';

let yake = new Yake()

export default class Control{
    constructor(spirits) {
        this.spirits = spirits;

    }
    
    

    runner() {
        yake.run()
    }
}