import * as readline from 'node:readline';

export let game_cli = readline.createInterface(process.stdin, process.stdout);

export class Cli {
    players_num() {
        return new Promise((resolve, reject) => {
            game_cli.question("To Start a new game please enter how many players will play:\n", (players) => {
                if (isNaN(players) || players > 4) {
                    reject("please enter a Number! and smaller than 4\n");
    
                } else
                    resolve(players);
            })
        });
        
    }

    spirit_num() {
        return new Promise((resolve, reject) => {
            game_cli.question("please enter how many spirit do you wanna play with? \n", (spirits) => {
                if (isNaN(spirits) || spirits > 4) {
                    reject("please enter a Number! and smaller than 4\n");
    
                } else
                   resolve(spirits);
            })
        });
    }

}