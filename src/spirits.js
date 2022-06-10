import starting_box from "./assets/starter.js"

export class Spirit {
    /**
     * @description using this class i will be able to create and move spirits in the game and probebly delete or reset them also
     * @param {Number} spirits_num the number of spirits the user want to play with default is 4
     * @param {Number} players_num number of players also default is 4
     * @param {Object} storage the spirits storage (where i store all of them globaly)
     */
    constructor(spirits_num, players_num, storage) {
        this.spirits = spirits_num;
        this.storage = storage;
        this.players = players_num;
    }

    // this won't be collected by the garbeg collector because it's already assigend hehe :)
    colors = ["red", "blue", "yellow", "green"];


    /* TODO:
    this method should create all the spirit of the game and put each color in it's home
    and every spirit should have a unieq id and it's color

    the position of each spirit will be stored in the area it self 
    each block will save the id of eny spirit on it

    in e.g ig the block is safe then the game by it self will make all the spirit sit in the same block
    if it's not safe the the check_block method will kill the spirit on the block if there is

    there's another method will run every time the spirit will reach it's destination
    it's called check_area the main goal of this method is to search all the blocks and count the destinse between the spirit and other anamy one
    and then print the number of blocks to arrive to it without counting the block after the home entry for the spirit itself!

    FIXME: there is propebly nothing to fix here but I'm Fucked up with this game LOL 

    */

    // put every spirit in it's home
    #fill_starting_box(spirit_storage, starting_points) {


    }

    // TODO: write the algorithm for this method to finish it!!
    create_new_spirits() {

        // this will let the garbage collector delete all the unwanted spirits
        this.storage = [];

        //loop in the colors
        for (let colorId = 0; colorId < this.players; colorId++) {
            // create spirits based on the wanted number
            for (let spiritId = 0; spiritId < this.spirits; spiritId++) {
                this.storage.push({
                    id: parseInt(`${colorId+1}${spiritId+1}`),
                    color: this.colors[colorId]
                })

            }

        }

        console.log(this.storage);

        // fill the homes with it's spirits
        this.fill_starting_box(this.storage, starting_box);
    }

    /**
     * @description this method will check if the block the spirit landed in is safe or not and if the spirit will kill another one or not
     * and will run only when the spirit reach it's destination
     */
    #check_block() {

    }

    /**
     * @description this method will check all the blocks after the home entry block for the spirit 
     * and write the destense between them and the arrived spirit      */
    #check_area() {

    }

    /**
     * @description this method will move a spirit one step and will call the check_area method
     * @param {Number} spirit_id 
     */
    #movie_one_step(spirit_id) {

    }

    /**
     * @description this method will move a spirit and display deatils about the closest spirits to it
     * @param {Number} spirit_id 
     * @param {Number} steps 
     */
    move_spirit(spirit_id, steps) {

    }
}