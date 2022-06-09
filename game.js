import {
    Cli,
    game_cli
} from './src/cli.js';
import Control from './src/control.js';
import spirits_storage from './src/assets/spirits.js';

class Game extends Cli {

    play() {
        console.log(`this game will have ${this.player} players & ${this.spirit} spirits`);
        
        let control = new Control(this.spirit, this.player, spirits_storage);

        
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