let content = [
    {
        name: "My Website",
        id: "website",
        date: "22/07/2022",
        author: "Robert Parker",
        paragraphOne: "This website was a challenge I set myself to build in 72Hrs, while most of it was completed in the 72Hrs (the functionality), the content like this post and other smaller details were updated as time went on. Currentlt the website is a skeleton of what I would like it to be in the future.",
        paragraphtwo: "The core functionality of the website is build with the React framework and a UI framework ChakraUI.",
        motivations: ["Learn about website structure and functionality", "To create a porfolio", "See what my ability in JS and Web Design is"],
        Links: ["Source"],
        LinkAddresses: ["https://github.com/parkerro-dev/the-website-challenge"],
        markdown: "the-website-challenge/Markdown/WebsiteChallenge/WebsiteChallenge.md"
    },

    {
        name: "Discord Bot",
        id: "discordBot",
        date: "22/07/2022",
        author: "Robert Parker",
        paragraphOne: "This is a work in progress" ,
        Links: ["Source"],
        LinkAddresses: ["https://github.com/parkerro-dev/the-website-challenge"],
        markdown: "the-website-challenge/Markdown/DiscordBot/DiscordBot.md"
    },

    {
        name: "Neural Network",
        id: "neuralNetwork",
        date: "22/07/2022",
        author: "Robert Parker",
        paragraphOne: "This is a work in progress" ,
        Links: ["Source"],
        LinkAddresses: ["https://github.com/parkerro-dev/the-website-challenge"],
        markdown: "the-website-challenge/Markdown/NeuralNetwork/NeuralNetwork.md" 
    },

    {
        name: "Latex Calculator",
        id: "latexCalculator",
        date: "22/07/2022",
        author: "Robert Parker",
        Links: ["Source"],
        LinkAddresses: ["https://github.com/parkerro-dev/the-website-challenge"],
        markdown: "the-website-challenge/Markdown/LatexCalculator/LatexCalculator.md"
    },

    {
        name: "Animated Sky Component",
        id: "animatedSkyComponent",
        date: "22/07/2022",
        author: "Robert Parker",
        paragraphOne: "This is a work in progress" ,
        Links: ["Source"],
        LinkAddresses: ["https://github.com/parkerro-dev/the-website-challenge"],
        markdown: "the-website-challenge/Markdown/AnimatedSkyComponent/AnimatedSkyComponent.md" 
    }


]

export function getContent(){
    return content;
}

export function getProject(id){
    return content.find(
        project => project.id === id)
}