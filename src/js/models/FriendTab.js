import uniqid from 'uniqid';

export default class FriendTab {

    constructor(name, price, tip) {
        this.id = uniqid();
        this.name = name;
        this.price = price;
        this.tip = tip;
        this.calcTip();
    }

    calcTip() {
        this.tipSum = Math.round((this.price / 100) * this.tip * 10000) / 10000;
    }
}