class Yuke {

    // this array is used to save all the results from the random value function to check if the user 6 three times in row or not
    storage = []

    /**
     * @description this method semulate the yake in the real ludo game
     * @returns {Number}
     */
    saveRandomNumber() {
        let randomNumber = Math.floor(Math.random() * 6)
        this.storage.push(randomNumber)
        return randomNumber;
    }

    /**
     * 
     * @param {*} callback this will be called when the user get 6 on three time in row
     */
    run(callback) {
        let randomValue = this.saveRandomNumber()
        console.log("Yuke is checking...");
        console.log(`result is ${randomValue}`);
    }


}