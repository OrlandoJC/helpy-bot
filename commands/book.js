const { ActionRowBuilder, SelectMenuBuilder } = require("discord.js")

module.exports = {
    data: { name: "book" },
    async execute(message) {
        const row = new ActionRowBuilder()
            .addComponents(
                new SelectMenuBuilder()
                    .setCustomId('select')
                    .setPlaceholder('Nothing selected')
                    .addOptions(
                        {
                            label: 'Select me',
                            description: 'This is a description',
                            value: 'first_option',
                        },
                        {
                            label: 'You can select me too',
                            description: 'This is also a description',
                            value: 'second_option',
                        },
                    ),
            );

        await message.reply({content:"pong", components:[row]})
        
    }
}