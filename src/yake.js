class Yuke {

    // this array is used to save all the results from the random value function to check if the user 6 three times in row or not
    storage = []

    /**
     * @description this method semulate the yake in the real ludo game
     * @returns {Number}
     */
    saveRandomNumber() {
        return Math.floor(Math.random() * 6);
    }
    

    /**
     * 
     * @param {*} callback this will be called when the user get 6 on three time in row
     */
    run(callback) {

        // TODO: make sure if this is working when u get back to it

        // FIXME: instead of using a for loop u can use recursion with setTimeout i guess!
        for (let index = 0; index < this.storage[this.storage.length-1] == 6 && this.storage.length <= 2; index++) {
            let randomValue = this.saveRandomNumber();
            this.storage.push(randomValue);
            console.log("Yuke is checking...");
            console.log(`result is ${randomValue}`); 
        }
        

        callback()
    }


}