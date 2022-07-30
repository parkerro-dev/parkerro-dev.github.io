let content = [
    {
        name: "My Website",
        id: "website",
        Links: ["Source"],
        LinkAddresses: ["https://github.com/parkerro-dev/parkerro-dev.github.io"],
        markdown: "/Markdown/WebsiteChallenge/WebsiteChallenge.md"
    },

    {
        name: "Discord Bot",
        id: "discordbot",
        Links: ["Source"],
        LinkAddresses: ["https://github.com/parkerro-dev/parkerro-dev.github.io"],
        markdown: "/Markdown/DiscordBot/DiscordBot.md"
    },

    {
        name: "Neural Network",
        id: "neuralNetwork",
        Links: ["Source"],
        LinkAddresses: ["https://github.com/parkerro-dev/parkerro-dev.github.io"],
        markdown: "parkerro-dev.github.io/Markdown/NeuralNetwork/NeuralNetwork.md" 
    },

    {
        name: "Latex Calculator",
        id: "latexCalculator",
        Links: ["Source"],
        LinkAddresses: ["https://github.com/parkerro-dev/parkerro-dev.github.io"],
        markdown: "parkerro-dev.github.io/Markdown/LatexCalculator/LatexCalculator.md"
    },

    {
        name: "Animated Sky Component",
        id: "animatedSkyComponent",
        Links: ["Source"],
        LinkAddresses: ["https://github.com/parkerro-dev/parkerro-dev.github.io"],
        markdown: "parkerro-dev.github.io/Markdown/AnimatedSkyComponent/AnimatedSkyComponent.md" 
    }


]

export function getContent(){
    return content;
}

export function getProject(id){
    return content.find(
        project => project.id === id)
}