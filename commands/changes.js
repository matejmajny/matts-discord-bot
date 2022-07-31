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
                    name: "**Changes**",
                    description: "Current version: **v1.0\n **",
                    thumbnail: {
                        url: client.user.displayAvatarURL,
                      },
                      fields: [
                        {
                            name: "Basic info",
                            value: "Version: v1.0\nDate of release: 31/7/2022\nState: in development",
                        },
                        {
                            name: "What is new?",
                            value: "-first version ever made\n-added: about, changes, ping, puppy, say and stop\n-running DJS v14",
                        },
                        {
                            name: "What got removed?",
                            value: "-first version, so nothing",
                        },
                        {
                            name: "**Disclaimer!**",
                            value: "Bot still in very early development changes"
                        }
                      ]
                },
            ]
        })
    },
}