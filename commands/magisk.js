const fetch = require("node-fetch");
var url = "https://api.github.com/repos/topjohnwu/Magisk/releases/latest";
const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("magisk")
        .setDescription("Returns latest version of Magisk and some links!"),
    
    async execute(interaction) {
        const response = await fetch(`https://api.github.com/repos/topjohnwu/Magisk/releases/latest`)
        const jsonResponse = await response.json();
        await interaction.reply({
                embeds: [
                    {
                        color: 0xff4816,
                        title: "**Magisk**",
                        description: "Powered by GitHub API.",
                        fields: [
                            {
                                name: "Version:",
                                value: (jsonResponse.name)
                            },
                            {
                                name: "Download link:",
                                value: (jsonResponse.assets[0].browser_download_url)
                            },
                            {
                                name: "Repository link:",
                                value: "https://github.com/topjohnwu/Magisk/",
                            },
                            {
                                name: "Release date:",
                                value: (jsonResponse.published_at)
                            },
                            {
                                name: "API:",
                                value: "Powered by GitHub API."
                            }
                        ]
                    }
                ]
        })
    }
}
