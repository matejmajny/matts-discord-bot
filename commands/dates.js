const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("dates")
        .setDescription("Shows you time until some events happen!"),
    async execute(interaction) {
        const { client } = interaction;
        await interaction.reply({
            embeds: [
                {
                    color: 0xff4816,
                    title: "**Dates**",
                    description: "Time until some events",
                    fields: [
                    {
                        name: "Basic",
                        value: "**Christmas** - <t:1671868860:R>\n**New year** - <t:1672473660:R>",
                    },
                    {
                        name: "Tech events",
                        value: "**Google I/O 2023** - <t:1682928060:R> (not exact date)\n**WWDC 2023** - (not annouced)",
                    }
                    ]
                },
            ]
        })
    },
}