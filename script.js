const pay = {
    payCheck: 0.00,//total money earned.
    shortSavings: 0.00,//current amount of money in short term savings (see google docs).
    longSavings: 0.00,//current amount of money in long term savings (see google docs).
    totalSavings: 0.00,//total amount of money to be transferred into savings.
    percentages: {donations: 0.00, shortTransfer: 0.00, longTransfer: 0.00, spending: 0.00},//percent of paycheck
    //used for donations, the transfer to short savings, and transfer to long savings respectively. 

    //presets for percentages object, append whenever new preset is needed
    presets: [
        //responsible boi
        {donations: 0.10,
        shortTransfer: 0.10,
        longTransfer: 0.80,
        spending: 0.00},
        //a little greedy
        {donations: 0.05,
        shortTransfer: 0.10,
        longTransfer: 0.80,
        spending: 0.05},
        //goblin
        {donations: 0.00,
        shortTransfer: 0.10,
        longTransfer: 0.80,
        spending: 0.10}
    ],

    //calculates and sets total savings by multipliying payCheck by the transfer percentages,
    //also returns calculated total.
    calculateNewSavings () {
        let total = this.payCheck * (this.percentages.shortTransfer + this.percentages.longTransfer);
        this.totalSavings = total;
        return total;
    },

    //sets percentages based on certain presets
    setPercentages(presetSelection){
        switch (presetSelection){
            case 1:
                this.percentages = presets[0];
                break;
            case 2: 
                this.percentages = presets[1];
                break;
            case 3: 
                this.percentages.donations = prompt('Donations percentage', 'Enter percentage (e.g. 0.10)');
                this.percentages.shortTransfer = prompt('Short savings percentage', 'Enter percentage (e.g. 0.20)');    
                this.percentages.longTransfer = prompt('Long savings percentage', 'Enter percentage (e.g. 0.70)'); 
                this.percentages.spending = prompt('Spending percentage', 'Enter percentage (e.g 0.00)');   
            default:
                console.log('Error invalid input');
                break;
        }
    }
  };//end of pay object


 