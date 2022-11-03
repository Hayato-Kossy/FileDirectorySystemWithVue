import { View } from "@/View/view";
import { CLI } from "@/Model/CLI";

export const Controller = Vue.createApp({
    data: () => ({
        
    }),
    methods: {
        static executeCLI:function(CLI:CLI){
            let parsedStringInputArray:string[] = CLI.commandLineParser()
            View.appendEchoParagraph()
            View.appendResultParagraph(View.evaluatedResultsStringFromParsedStringInputArray(parsedStringInputArray))
            CLI.resetCLITextInput()
        },
        static evaluatedResultsStringFromParsedStringInputArray:function(parsedStringInputArray:string[], CLI:CLI){
            let result:string = "";
            console.log(parsedStringInputArray);
            let argA:string = parsedStringInputArray[1];
            let argB:string = parsedStringInputArray[2];
            let commandName:string = parsedStringInputArray[0];

            switch (commandName) {
                case "mkdir":
                    result = CLI.getUserData.mkdir(argA);
                    break;
                case "cd":
                    result = CLI.getUserData.cd(argA);
                    break;
                case "touch":
                    result = CLI.getUserData.touch(argA);
                    break;
                case "ls":
                    result = CLI.getUserData.ls();
                    break;
                case "pwd":
                    result = CLI.getUserData.pwd();
                    break;
                case "print":
                    result = CLI.getUserData.print(argA);
                    break;
                case "setContent":
                    result = CLI.getUserData.setContent(argA, argB);
                    break;
                case "rm":
                    result = CLI.getUserData.rm(argA);
                    break;
                case "mv":
                    result = CLI.getUserData.mv(argA, argB);
                    break;
                case "cp":
                    result = CLI.getUserData.cp(argA, argB);
                    break;
                case "tree":
                    result = CLI.getUserData.tree(argA)
                    break
                default:
                    result = "No such command";
            }
            return result;
        }
    }
})