const { SlashCommandBuilder } = require("discord.js");
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var url = "https://api.funtranslations.com/translate/yoda.json";

var xhr = new XMLHttpRequest();
xhr.open("POST", url);
xhr.setRequestHeader("X-Funtranslations-Api-Secret", "<api_key>");
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("yoda")
        .setDescription("Translates your text to like if Yoda was speaking! (mostly just messes up sentence)")
        .addStringOption((option) => 
        option.setName("text").setDescription("Message to bot to say.").setRequired(true)
        ),
    
    async execute(interaction) {
        var data = interaction.options.getString("text")
        xhr.send(`text=${data}`);
        
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
               var status = (xhr.status);
               var response = xhr.responseText;
               var jsonResponse = JSON.parse(response);
                console.log(`The response of YodaAPI is: ${xhr.status}`)
               
                if (status !== 200)
                    return interaction.reply({
                        embeds: [
                            {
                                color: 0xff0000,
                                title: "**YodaAPI**",
                                description: "Failed!",
                                fields: [
                                    {
                                        name: "Why?",
                                        value: "Simply, API what i use have just 5 free requests per hour, not problem on my side.",
                                    },
                                    {
                                        name: "But error is something else!",
                                        value: "If error is something different than ran out of requests, contact [Owner](http://mattm.gq)",
                                    },
                                    {
                                        name: "**Error info**",
                                        value: `**Error message:** "${(jsonResponse["error"]["message"])}"\n\n**Error code:** ${status}`
                                    }
                                ]
                            }
                        ]
                    })
               
               else interaction.reply({
                    embeds: [
                        {
                            color: 0xff4816,
                            title: "**YodaAPI**",
                            description: "Finished succesfully!",
                            fields: [
                                {
                                    name: "Translation",
                                    value: `**Your sentence:** ${data}\n\n**Translated sentence:** ${(jsonResponse["contents"]["translated"])}`
                                }
                            ]
                        }
                    ]
               });
               xhr.open("POST", url);
            }};
    },
};