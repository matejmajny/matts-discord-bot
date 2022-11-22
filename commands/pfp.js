const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
		.setName('pfp')
		.setDescription("Returns user's pfp")
        .addUserOption(option => option.setName('username').setDescription('Username of the user').setRequired(true)),
	
    async execute(interaction) {
        var user = interaction.options.getUser("username")
        await interaction.reply({
            embeds: [
                {
                  color: 0xff4816,
                  title: `**${user.tag}'s profile picture**`,
                  image: { url: await user.avatarURL() },
                },
              ],
        })
    }
}