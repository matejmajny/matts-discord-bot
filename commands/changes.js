const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("changes")
        .setDescription("Shows the information about latest bot update!"),
    async execute(interaction) {
        const { client } = interaction;
        await interaction.reply({
            embeds: [
                {
                    color: 0xff4816,
                    title: "**Changes**",
                    description: "Current version: **v1.5\n **",
                    thumbnail: {
                        url: client.user.displayAvatarURL,
                      },
                      fields: [
                        {
                            name: "Basic info",
                            value: "Version: v1.1\nDate of release: 09/12/2022",
                        },
                        {
                            name: "What is new?",
                            value: "-ytthumb command\n-fixed ghrepo and meme commands",
                        },
                        {
                            name: "What got removed?",
                            value: "-nothing",
                        }
                      ]
                },
            ]
        })
    },
}