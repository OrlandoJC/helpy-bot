const { isCommand, decomposeCommand} = require('../utils/commands')

module.exports = {
    name: "messageCreate",
    async execute(message) {
        if (message.content.trim().startsWith("helpy")) {
            if (isCommand(message.content.trim())) {
                const [prefix, action, parameters] = decomposeCommand(message.content.trim())
                
                console.log(action)

                // const command = message.client.commands.get(action);
    
                // if (command)
                //     await command.execute(message);
            } else {
              const meesage =  await message.reply("ยกHola "+ message.author.username +"! ๐ Me llamaste pero no encuentro ese commando ๐ ")
              meesage.react("๐ฐ")
            }
        }
    }
}