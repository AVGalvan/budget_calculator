const pay = {
    payCheck: 0.00,//total money earned.
    shortSavings: 0.00,//current amount of money in short term savings (however you track finances).
    longSavings: 0.00,//current amount of money in long term savings (however you track finances).
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
        let total = (this.payCheck * (this.percentages.shortTransfer + this.percentages.longTransfer)).toFixed(2);
        this.totalSavings = total;
        return total;
    },

    //sets percentages based on certain presets
    setPercentages(selection){
        switch (selection){
            case 1:
                this.percentages = this.presets[0];//responsible
                break;
            case 2: 
                this.percentages = this.presets[1];//little greedy
                break;
            case 3: 
                this.percentages = this.presets[2];//goblin
                break;
            case 4: //custom
                this.percentages.donations = Number(prompt('Donations percentage', 'Enter percentage (e.g. 10)')) / 100;
                this.percentages.shortTransfer = Number(prompt('Short savings percentage', 'Enter percentage (e.g. 20)')) / 100;    
                this.percentages.longTransfer = Number(prompt('Long savings percentage', 'Enter percentage (e.g. 70)')) / 100; 
                this.percentages.spending = Number(prompt('Spending percentage', 'Enter percentage (e.g 0)')) / 100;   
                break;
            default:
                console.log('Error invalid input');
                break;
        }
    },
    
    //returns new savings to be entered into however you document your finances
    documentInstructions (){
        let lTran = (this.payCheck * this.percentages.longTransfer);
        let sTran = (this.payCheck * this.percentages.shortTransfer);
        let don = (this.payCheck * this.percentages.donations);
        let spend =(this.payCheck * this.percentages.spending);
        return 'Total amount to be transferred into savings: $' + this.totalSavings + 
        '\nAmount that is for long term savings: $' + lTran.toFixed(2) +
        '\nAmount that is for short term savings: $'+ sTran.toFixed(2) +
        '\nNew long: $' + (this.longSavings + lTran).toFixed(2) +
        '\nNew short: $' + (this.shortSavings + sTran).toFixed(2) +
        '\nDonate: $' + don.toFixed(2) + 
        '\nSpend: $' + spend.toFixed(2);
    },
};//end of pay object

pay.payCheck = Number(prompt('Enter total paycheck', 'Cash money gang gang'));//gets paycheck

let presetSelection = Number(prompt('Enter preset selection\n[1]Philanthropic: 10% donate 10% short 80% long 0% spend\n[2]Pragmatic: 5% donate 10% short 80% long 5% spend\n[3]Goblin: 0% donate 10% short 80% long 10% spend\n[4]Custom', 'Enter a number')) //gets preset selection
    
pay.setPercentages(presetSelection);//sets percentages based on preset selected
  
pay.calculateNewSavings();//sets total savings

//gets short and long term savings currently in google docs
pay.shortSavings = Number(prompt('Enter current short term savings', '(e.g 560)'));
pay.longSavings = Number(prompt('Enter current long term savings', '(e.g. 10000)'));

console.log(pay.documentInstructions());
