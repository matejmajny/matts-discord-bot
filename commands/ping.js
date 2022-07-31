const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	
    async execute(interaction) {

        await interaction.reply({
            embeds: [
                {
                  color: 0xff4816,
                  title: "**Ping? Pong**",
                  description: "Current bot/api ping",
                  fields: [
                    {
                      name: "Bot Latency",
                      value: `${Math.abs(Date.now() - interaction.createdTimestamp)}ms`,
                    },
                    {
                      name: "API Latency",
                      value: `${Math.round(interaction.client.ws.ping)}ms`,
                    },
                  ],
                },
              ],
        })
    }
}
