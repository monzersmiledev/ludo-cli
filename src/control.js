import Yake from './yake.js';
import {
    Spirit
} from './spirits.js';
import spirits_storage from './src/assets/spirits.js';
let yake = new Yake()




export default class Control extends Spirit {
    constructor(spirit) {

        // defien new spirit for the game based on the number the user entered
        super(this.spirit, spirits_storage);
    }


    // create the spirits now and put them in there positions
    create_new_spirits();

    runner(params) {
        yake.run()
    }
}