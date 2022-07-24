let content = [
    {
        name: "My Website",
        id: "website",
        date: "22/07/2022",
        author: "Robert Parker",
        paragraphOne: "This website was a challenge I set myself to build in 72Hrs, while most of it was completed in the 72Hrs (the functionality), the content like this post and other smaller details were updated as time went on."
    },

    {
        name: "Discord Bot",
        id: "discordBot",
        date: "22/07/2022",
        author: "Robert Parker",
        paragraphOne: "This is a work in progress"  
    },

    {
        name: "Neural Network",
        id: "neuralNetwork",
        date: "22/07/2022",
        author: "Robert Parker",
        paragraphOne: "This is a work in progress"  
    },

    {
        name: "Latex Calculator",
        id: "latexCalculator",
        date: "22/07/2022",
        author: "Robert Parker",
        paragraphOne: "This is a work in progress"  
    },

    {
        name: "Animated Sky Component",
        id: "animatedSkyComponent",
        date: "22/07/2022",
        author: "Robert Parker",
        paragraphOne: "This is a work in progress"  
    }


]

export function getContent(){
    return content;
}

export function getProject(id){
    return content.find(
        project => project.id === id)
}