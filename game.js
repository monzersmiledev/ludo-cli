import {
    Cli,
    game_cli
} from './src/cli.js';


class Game extends Cli {

    play() {
        console.log(`this game will have ${this.player} players & ${this.spirit} spirits`);
        


        
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