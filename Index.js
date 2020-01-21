const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjY4OTcyNDA4NTc2ODAyODQw.XiZETA.5WfG49Fl7Kop2WJsEojOFAC6g0Y';

bot.on('ready', () =>{
    console.log('Slamsbot is online.');
})

bot.on('message', msg=>{
   if(msg.content == "What up bot?"){
       msg.reply("Whats good pimp?")
   }
})

bot.login(token);

exports.run = (client, message, args) => {

    let user = message.mentions.users.first || message.author;

    
}
