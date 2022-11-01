const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("punish")
        .setDescription("Punishes someone.")
        .addUserOption(option => option.setName('username').setDescription('The user to punish.').setRequired(true))
        .addStringOption(option =>
            option.setName('type')
                .setDescription('Select punishment for target.')
                .setRequired(true)
                .addChoices(
                    { name: "Ban (permanent)", value: 'Ban' },
                    { name: "Mute (1-hour)", value: 'Mute' },
                    { name: "Kick (its just a kick lol)", value: 'Kick' },
                )),
    
    async execute(interaction) {
        var punishment = interaction.options.getString("type")
        let member = interaction.options.getMember("username")
        console.log(punishment)

        if(interaction.member.roles.highest.position <= interaction.guild.members.me.roles.highest.position)
            return interaction.reply({
                embeds: [
                    {
                        color: 0xff4816,
                        title: "**Bot is missing permissions!**",
                        description: "Bot needs to have Admin/Punish perms or permissions bigger than user!",
                    }
                ]
            });

        if(member === interaction.guild.members.me)
        return interaction.reply({
            embeds: [
                {
                    color: 0xff4816,
                    title: "**I wont let you punish me lmao.**",
                    description: "Please dont be so bad to me thx.",
                }
            ]
        });

        if(interaction.member.roles.highest.position <= member.roles.highest.position)
        return interaction.reply({
            embeds: [
                {
                    color: 0xff4816,
                    title: "**You are missing permissions!**",
                    description: "You cant punish someone with perms higher than yours.",
                }
            ]
        });
        
        function embed() {
            interaction.reply({
                embeds: [
                    {
                        color: 0xff4816,
                        title: `**Enjoy your ${punishment.toLowerCase()}**`,
                        description: `Bot succesfully ${punishment.toLowerCase()}ed you!`,
                    }
                ]
            })
        }

        if (punishment === "Mute") 
        return (
            member.timeout(60 * 60 * 1000, 'They deserved it')
                .catch(console.error),
            embed()
        )
        
        if (punishment === "Kick") 
        return (
            member.kick("BYE")
                .catch(console.error),
            embed()
        )
        
        if (punishment === "Ban") 
        return (
            member.ban({reason: "You just got banned noob."})
                .catch(console.error),
            embed()
        )
        
    },
};