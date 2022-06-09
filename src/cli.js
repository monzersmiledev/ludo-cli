import * as readline from 'node:readline';

export let game_cli = readline.createInterface(process.stdin, process.stdout);

export class Cli {
    players_num() {

        // FIXME: there's an issue here if the user enterd a not valid input many times the game will lage for ever!
        return new Promise((resolve, reject) => {
            game_cli.question("To Start a new game please enter how many players will play:\n", (players) => {
                if (isNaN(players) || players > 4) {
                    this.players_num();
                }

                    resolve(players);
            })
        });
        
    }

    spirit_num() {
        
        // FIXME: there's an issue here if the user enterd a not valid input many times the game will lage for ever!
        return new Promise((resolve, reject) => {
            game_cli.question("please enter how many spirit do you wanna play with? \n", (spirits) => {
                if (isNaN(spirits) || spirits > 4) {
                    console.log("please enter a Number! and smaller than 4\n");
                    this.spirit_num();

                } else
                   resolve(spirits);
            })
        });
    }

}