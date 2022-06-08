export class Spirit {
    constructor(spirits_num, storage) {
        this.spirits = spirits_num;
        this.storage = storage;
    }



    create_new_spirits() {
        // get the last id
        this.storage
        for (let index = 0; index < this.spirits_num - 1; index++) {
            this.storage.push({
                id: index + 1,
                color: color,
                position: {
                    home: true,
                    world_position_id: 1
                }
            })
        }
    }

    /**
     * @description this method will check if the area the spirit landed in is safe or not and if the spirit will kill another one or not
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