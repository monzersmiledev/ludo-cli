class spirit {
    constructor(spirits_num) {
        this.spirits = spirits_num;
    }

    storage = []

    create_new_spirits(color) {
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

    movie_one_step() {

    }
    move_spirit(id, steps) {
        
    }
}