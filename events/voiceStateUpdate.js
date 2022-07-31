const { bold } = require('discord.js')

module.exports = {
    name: 'voiceStateUpdate',
    execute(oldState, newState) {
        let channel = oldState.client.channels.cache.find(channel => channel.name === "general")
        const userJoined = 
        channel.send("parece que alguien se unio a un chat de voz en " + bold(channel.name) + ". Tal vez necesite ayuda 👈🏻 @everyone")
            .then(message => {
                message.react("🌠")
                channel.send("https://c.tenor.com/JTLKZlNyuOwAAAAC/study.gif")
            })
    }
};