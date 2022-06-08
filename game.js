import {
    Cli,
    game_cli
} from './src/cli.js';

import {Spirit} from './src/assets/spirits.js';
import home from './src/assets/home.js'


class Game extends Cli {

    play() {
        console.log(`this game will have ${this.player} players & ${this.spirit} spirits`);
        let spirits = new Spirit(this.spirit, home[0].filled_space)
        spirits.create_new_spirits();
        
    }

    async start() {
        console.log("Hello There! \nWelcome To Lodo Game \n");
        this.player = await this.players_num().catch((err) => {
            console.log(err);

            this.start();
        });
        this.spirit = await this.spirit_num().catch((err) => {
            console.log(err);

            this.start();
        });
        this.play();

        // end the game
        game_cli.close();
    }

}


console.log("Build By: Monzer Omer");
(new Game()).start();