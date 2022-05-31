const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');
// console.log(token);

/**
 * Point de départ du bot
 * Création d'une nouvelle instance
 * pour communiquer avec l'API DISCORD */
const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

/**
 * Affichage console quand le bot est prêt */
bot.once('ready', () => {
    console.log('Le bot a bien été initialisé!');
});

bot.on('messageCreate', (msg) => {
    switch (msg.content) {
        case '!correcthor':
            msg.reply('Laisse-moi tranquille, vous avez tué 127 fois Molière dans ce serveur !');
            break;
        case '!slt':
            msg.reply('Salut mon petit, comment vas-tu ?');
            break;
        case '!corrige':
            msg.reply('Autant je veux bien, mais là, il y a plus de fautes que de lettre dans ton message');
            break;
        default:
            break;
    }
});

/**
 * Connexion à discord via le token */
bot.login(token);