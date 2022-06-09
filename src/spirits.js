export class Spirit {
    constructor(spirits_num, storage) {
        this.spirits = spirits_num;
        this.storage = storage;
    }


/* TODO:
this method should create all the spirit of the game and put each color in it's home
and every spirit should have a unieq id and it's color

the position of each spirit will be stored in the area it self 
each block will save the id of eny spirit on it

in e.g ig the block is safe then the game by it self will make all the yakes sit in the same block
if it's not safe the the check_block method will kill the yake on the block if there is

there's another method will run every time the yake will reach it's destination
it's called check_area the main goal of this method is to search all the blocks and count the destinse between the yake and other anamy one
and then print the number of blocks to arrive to it without counting the block after the home entry for the yake itself!

FIXME: there is propebly nothing to fix here but I'm Fucked up with this game LOL 

*/

// TODO: write the algorithm for this method to finish it!!
    create_new_spirits() {
        
        this.storage
        for (let index = 0; index < this.spirits_num; index++) {
            this.storage.push({
                id: index + 1,
                color: color,
                position: {
                    home: true,
                    world_position_id: 1
                }
            })
            
        }
        console.log(this.storage);
    }

    /**
     * @description this method will check if the block the spirit landed in is safe or not and if the spirit will kill another one or not
     * and will run only when the yake reach it's destination
     */
    #check_block(){

    }

    /**
     * @description this method will check all the blocks after the home entry block for the yake 
     * and write the destense between them and the arrived yake
     */
    #check_area() {

    }

    /**
     * @description this method will move a spirit one step and will call the check_area method
     * @param {*} spirit_id 
     */
    #movie_one_step(spirit_id) {

    }

    /**
     * @description this method will move a spirit and display deatils about the closest spirits to it
     * @param {*} spirit_id 
     * @param {*} steps 
     */
    move_spirit(spirit_id, steps) {

    }
}