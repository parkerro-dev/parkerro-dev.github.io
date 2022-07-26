let content = [
    {
        name: "My Website",
        id: "website",
        Links: ["Source"],
        Link : "https://github.com/parkerro-dev/parkerro-dev.github.io",
        markdown: "/Markdown/WebsiteChallenge/WebsiteChallenge.md"
    },

    {
        name: "2D Physics Engine",
        id: "twoDimPhysicsEngine",
        Links: ["Source"],
        Link : "https://github.com/parkerro-dev/physics-engine",
        markdown: "/Markdown/TwoDimPhysicsEngine/TwoDimPhysicsEngine.md"
    },

    {
        name: "Neural Network",
        id: "neuralNetwork",
        Links: ["Source"],
        Link : "https://github.com/parkerro-dev/parkerro-dev.github.io",
        markdown: "/Markdown/NeuralNetwork/NeuralNetwork.md" 
    },

    {
        name: "Latex Calculator",
        id: "latexCalculator",
        Links: ["Source"],
        Link : "https://github.com/parkerro-dev/parkerro-dev.github.io",
        markdown: "/Markdown/LatexCalculator/LatexCalculator.md"
    },

    {
        name: "Animated Sky Component",
        id: "animatedSkyComponent",
        Links: ["Source"],
        Link : "https://github.com/parkerro-dev/parkerro-dev.github.io",
        markdown: "/Markdown/AnimatedSkyComponent/AnimatedSkyComponent.md" 
    }


]

export function getContent(){
    return content;
}

export function getProject(id){
    return content.find(
        project => project.id === id)
}