module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
        console.log('Ready!');
        client.fetchInvite('https://discord.gg/jNre42GQ')
            .then(invite => console.log(`Obtained invite with code: ${invite.code}`))
            .catch(console.error);
	},
};