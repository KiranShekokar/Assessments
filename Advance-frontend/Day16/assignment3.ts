interface IGPS{
    xaxis:number;
    yaxis:number;
    getCoordinates():void;
}

interface IMediaPlayer{
    start:number;
    stop:number;
    pause:number;
}

class SmartPhone implements IGPS,IMediaPlayer{
    public xaxis:number = 1234;
    public yaxis:number = 2345;
    public start:number=4;
    public stop:number=7;
    public pause:number=30;
    public mediaActions():void{
        console.log(`Starts at ${this.start}pm , Stops at ${this.stop}pm , Pause for ${this.pause}seconds`);
    }
    public getCoordinates(): void {
         console.log(`x-coordinate is ${this.xaxis}`);
         console.log(`y-coordinate is ${this.yaxis}`);
    }
}

var SmartPhoneObj:SmartPhone = new SmartPhone();
SmartPhoneObj.getCoordinates();
SmartPhoneObj.mediaActions();