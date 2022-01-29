const pay = {
    payCheck: 0.00,//total money earned.
    shortSavings: 0.00,//current amount of money in short term savings (see google docs).
    longSavings: 0.00,//current amount of money in long term savings (see google docs).
    totalSavings: 0.00,//total amount of money to be transferred into savings.
    percentages: {donations: 0.00, shortTransfer: 0.00, longTransfer: 0.00, spending: 0.00},//percent of paycheck
    //used for donations, the transfer to short savings, and transfer to long savings respectively. 

    //presets for percentages object, append whenever new preset is needed
    presets: [
        {donations: 0.10,
        shortTransfer: 0.10,
        longTransfer: 0.80,
        spending: 0.00},
        
        {donations: 0.05,
        shortTransfer: 0.10,
        longTransfer: 0.80,
        spending: 0.05}
    ],

    //calculates and sets total savings by multipliying payCheck by the transfer percentages,
    //also returns calculated total.
    calculateNewSavings () {
        let total = this.payCheck * (this.percentages.shortTransfer + this.percentages.longTransfer);
        this.totalSavings = total;
        return total;
    },

  };

 
 