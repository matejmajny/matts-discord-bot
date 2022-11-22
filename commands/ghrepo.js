const { SlashCommandBuilder } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ghrepo")
        .setDescription("Check info of some repository")
        .addStringOption((option) => option.setName("url").setRequired(true).setDescription("URL of GitHub repository.")),

    async execute(interaction) {
        url = interaction.options.getString("url")
          
        nameandrepo = url.split("/").slice(3).join("/") 
        urlapi = "https://api.github.com/repos/" + nameandrepo
        urlcommit = "https://api.github.com/repos/" + nameandrepo + "/commits"
        urlrelease = "https://api.github.com/repos/" + nameandrepo + "/releases/latest"
        
        const responseapi = await fetch(urlapi)
        const jsonResponseApi = await responseapi.json();
        
        const commitapi = await fetch(urlcommit)
        const jsonResponseCommit = await commitapi.json();
        
        const releaseAPI = await fetch(urlrelease)
        const release = await releaseAPI.json()

        function hasRelease() {
            if(release.message === "Not Found") {
                return `This repository does not have any releases!`
            }

            else {
                return `***Name:*** ${release.name} \n ***Tag name:*** ${release.tag_name} \n ***Date of publishing:*** ${release.published_at}`
            }
        }
                



        await interaction.reply({
            embeds: [
                {
                    color: 0xff4816,
                    title: `**${nameandrepo} stats**`,
                    description: `Just some info about the repository.`,
                    fields: [
                        {
                           name: "Repository owner:",
                           value: jsonResponseApi.owner.login
                        },
                        {
                            name: "Fork:",
                            value: jsonResponseApi.fork,
                        },
                        {
                            name: "Last commit:",
                            value: `***Author:*** ${jsonResponseCommit[0].author.login},`
                        },
                        {
                            name: "Latest release:",
                            value: `${await hasRelease()}`
                        }
                    ]
                },
            ]
        })
    },
}