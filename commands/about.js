const { SlashCommandBuilder } = require("discord.js")
const fs = require("fs");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("about")
        .setDescription("Shows the information about bot"),
    async execute(interaction) {
        const { client } = interaction;

        function commandNumber() {
            var files = fs.readdirSync("\commands")
            var returnvalue = Object.keys(files).length
            return returnvalue
        }

        let serverNumber = await interaction.client.guilds.cache.size
        await interaction.reply({
            embeds: [
                {
                    color: 0xff4816,
                    title: "**About This Bot**",
                    description: "Information about this bot!",
                    thumbnail: {
                        url: client.user.displayAvatarURL,
                      },
                      fields: [
                        {
                          name: "Owner",
                          value: "[matejmajny#2639](https://matejmajny.gq)",
                        },
                        {
                            name: "Library",
                            value: "[Discord.js v14](https://discord.js.org/#/)",
                        },
                        {
                            name: "Hosting",
                            value: "[Oracle Cloud Infrastructure](https://www.oracle.com/cloud/)",
                        },
                        {
                            name: "GitHub repository",
                            value: "[https://github.com/matejmajny/matts-discord-bot](https://github.com/matejmajny/matts-discord-bot)",
                        },
                        {
                            name: "Number of commands:",
                            value: `${await commandNumber()}`,
                        },
                        {
                            name: "Number of servers joined:",
                            value: serverNumber
                        }
                      ]
                },
            ]
        })
    },
}