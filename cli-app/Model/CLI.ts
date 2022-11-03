import { FileSystem } from "./FileSystem";

export class CLI{
    private CLITextInput:string;
    private histories:[string];
    private historiesCnt:number;
    private User:FileSystem;
    private CLITextOutputDiv:HTMLElement|null;
    private vueCLI:HTMLElement|null;

    constructor(){
        this.CLITextInput = ""
        this.histories = [
            "",
        ];
        this.historiesCnt = 0;
        this.User = new FileSystem();
        this.CLITextOutputDiv = document.getElementById("CLIOutputDiv");
        this.vueCLI = document.getElementById("content");
    }

    public get getCLITextInput():string{
        return this.CLITextInput;
    }

    public set setCLITextInput(input:string){
        this.CLITextInput = input;
    }

    public get getHistories():[string]{
        return this.histories;
    }

    public set setHistories(historiy:string){
        this.histories.push(historiy);
    }

    public get getHistoriesCnt():number{
        return this.historiesCnt;
    }

    public set setHistoriesCnt(cnt:number){
        this.historiesCnt = this.getHistoriesCnt + cnt;
    }

    public get getUserData():FileSystem{
        return this.User;
    }

    public get getCLITextOutputDiv():HTMLElement|null{
        return this.CLITextOutputDiv;
    }

    public get getVueCLI():HTMLElement|null{
        return this.vueCLI;
    }
    
    public commandLineParser():string[]{
        let parsedStringInputArray = this.CLITextInput.trim().split(" ");
        
        return parsedStringInputArray;
    }

    public resetCLITextInput():void{
        this.CLITextInput = ""
        this.getVueCLI!.scrollTo(0, this.getVueCLI!.scrollHeight)
    }

    public cursorUpToGetHistories():void{
        if (this.histories.length > 0) {
            this.CLITextInput = this.histories[this.historiesCnt]
            --this.historiesCnt 
            if (0 > this.historiesCnt) this.historiesCnt = this.histories.length - 1
        }
    }

    public cursorDownToGetHistories():void{
        if (this.histories.length > 0) {
            this.CLITextInput = this.histories[this.historiesCnt]
            ++this.historiesCnt
            if (this.histories.length <= this.historiesCnt) this.historiesCnt = 0
        }
    }
}