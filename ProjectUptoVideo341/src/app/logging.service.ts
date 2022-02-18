
export class LoggingService{

    lastMsg: string;

    printLog(message : string){
        console.log(message);
        console.log(this.lastMsg);
        this.lastMsg = message;
    }
}