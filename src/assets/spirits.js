export class Spirit {
    constructor(spirits_num, storage) {
        this.spirits = spirits_num;
        this.storage = storage;
    }

    

    create_new_spirits() {
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

    #movie_one_step(spirit_id) {

    }
    
    move_spirit(spirit_id, steps) {

    }
}