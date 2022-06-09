export default class Yuke {

    // this array is used to save all the results from the random value function to check if the user 6 three times in row or not
    #storage = []

    /**
     * @description this method semulate the yake in the real ludo game
     * @returns {Number}
     */
    #randomNumber() {
        return Math.floor(Math.random() * 6);
    }
    
    #callback({valid, steps}){

    }

    /**
     * 
     * @param {*} callback this will be called to move the user spirits or if he got 6 three times in row will go to the next user
     */
    run(callback) {

        // TODO: make sure if this is working when u get back to it

        // FIXME: instead of using a for loop u can use recursion with setTimeout i guess!
        for (let index = 0; index < this.storage[this.storage.length-1] == 6 && this.storage.length <= 2; index++) {
            let randomValue = this.randomNumber();
            this.storage.push(randomValue);
            console.log("Yuke is checking...");
            console.log(`result is ${randomValue}`); 
        }
        

        callback()
    }


}