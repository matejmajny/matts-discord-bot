const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("timeoutme")
        .setDescription("Timeouts you for 5 minutes."),
    
    async execute(interaction) {
        if(interaction.member.roles.highest.position >= interaction.guild.members.me.roles.highest.position)
            return interaction.reply({
                embeds: [
                    {
                        color: 0xff4816,
                        title: "**Bot sadly cant timeout you!**",
                        description: "Bot cant timeout someone who has role higher than bot itself!",
                    }
                ]
            })

        await interaction.reply({
            embeds: [
                {
                    color: 0xff4816,
                    title: "**Enjoy your 5 minutes of silence!**",
                    description: `Bot succesfully muted you!`,
                }
            ]
        })
        await interaction.member.timeout(5 * 60 * 1000, 'They deserved it')
        
    },
};