import {
    Cli,
    game_cli
} from './src/cli.js';

import {Spirit} from './src/spirits.js';
import spirits_storage from './src/assets/spirits.js';

class Game extends Cli {

    play() {
        console.log(`this game will have ${this.player} players & ${this.spirit} spirits`);
        // defien new spirit for the game based on the number the user entered
        let spirits = new Spirit(this.spirit, spirits_storage);

        // create the spirits now and put them in there positions
        spirits.create_new_spirits();


        
    }

    async start() {
        console.log("Hello There! \nWelcome To Lodo Game \n");

        // let the user enter how many players playing this game
        await this.players_num().then((players) => {
            this.player = players;
            
        });
        
        // let the user enter the spirits number
        await this.spirit_num().then((spirits) => {
            this.spirit = spirits;
            
        });

        // start the game
        this.play();

        // end the game
        game_cli.close();
    }

}


console.log("Build By: Monzer Omer");
(new Game()).start();