import { CLI } from "Model/CLI"

export class View{

    static appendEchoParagraph(CLI:CLI):void{
        CLI.getCLITextOutputDiv!.innerHTML += 
        `
            <p class="m-0 output-text align-top"> 
            <span>User</span>
            <span>@</span>
            <span>MacBook % ${CLI.getCLITextInput}
            </span>
            </p>
        `
        if (CLI.getCLITextInput !== "" && CLI.getCLITextInput !== null) CLI.getHistories.push(CLI.getCLITextInput)
    }

    static appendResultParagraph(CLI:CLI,message:string):void{
        CLI.getCLITextOutputDiv!.innerHTML +=
        `
        <p class="m-0 output-text">
        <span>User</span> % ${message}
        </p>
        `
    }
}
