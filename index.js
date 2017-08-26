const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const http = require('http');
const url = require('url');


var token;
const PREFIX = "-";
const newline = require("os").EOL;
console.log(__dirname + "\\nekos\\");
console.log(__dirname + "\\ramen\\");
console.log(__dirname + "\\waifu\\");

fs.readdir(__dirname + "\\waifu\\", function (error, folderContent) {
    if (error) throw error;
    waifus = folderContent;
});

fs.readdir(__dirname + "\\ramen\\", function (error, folderContent) {
    if (error) throw error;
    pics = folderContent;
});

fs.readdir(__dirname + "\\nekos\\", function (error, folderContent) {
    if (error) throw error;
    fotos = folderContent;
});


var roasts = [
    "ur not even worth roasting",
    "ur a fat cunt, and goddamn you know it don't ya?"
];
function rng(min, max) {
    
    return Math.floor(Math.random() * (max - min)) + min;
}



var bot = new Discord.Client();

bot.on("ready", function() {
    console.log("Ready to do some cool ass things, YEET!");
    bot.user.setGame("-help");
});
bot.on('guildMemberAdd', member => {
    let guild = member.guild;
    guild.defaultChannel.sendMessage(`Welcome ${member.user} to the server, be sure to read the rules! Enjoy your time here!`)
    guild.defaultChannel.sendMessage("", { file: "chat\\welcome.gif" });
});
bot.on('guildMemberRemove', member => {
    let guild = member.guild;
    guild.defaultChannel.sendMessage(`Bye bye ${member.user} we will miss you...`)
});
bot.on('guildDelete', guild => {
    console.log(`I have left ${guild.name}`);
});
bot.on('guildCreate', guild => {
    guild.defaultChannel.sendMessage(`I have joined ${guild.name}`);
});

bot.on("message", function (message) {
    if (message.author.equals(bot.user)) return;

  
    var args = message.content.substring(PREFIX.length).split(" ");
    switch (args[0].toLowerCase()) {
        //Summary of commands within a command---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        case "help":
            message.delete("-help")
                .then(msg => console.log(`Deleted message from ${msg.author}`))
                .catch(console.error);
            var embed = new Discord.RichEmbed()
                .setTitle('These are all my commands!')
                .setColor(0xedc00e)
                .addField('-help', '///sends a list of all the commands there are.')
                .addField('-userinfo', '///gives you some information about yourself.')
                .addField('-roastme', '///roasts you in a lame way.')
                .addField('-neko', '///sends a neko pic.')
                .addField('-chat', '///sends you a list of all available images/gifs that are fun to use while chattig with ppl.')
                .addField('-waifu', 'coming soon ///sends a random waifu picture and tells you who it is.')
                .addField('-ramen', '///sends random ramen pictures')
                .setFooter("(There are secret commands, but I won't tell what ofcourse you'll have to find out yourself, it's nothing special so don't get to exited just see it as a minigame I made.)")
                ;

            message.author.sendEmbed(embed);
            break;

        case "chat":
            message.delete("-chat")
                .then(msg => console.log(`Deleted message from ${msg.author}`))
                .catch(console.error);
            var embed = new Discord.RichEmbed()
                .setTitle('These are all the funny chat commands!')
                .setColor(0xedc00e)
               
                .setDescription("bleh" + newline +
                "baka" + newline +
                "curry" + newline +
                "pat" + newline +
                "naisu" + newline +
                "stop" + newline +
                    "welcome"
                )
              
            message.author.sendEmbed(embed);
            break;
        //Random pictures commands---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        case "roastme":
            if (args[0]) message.channel.sendMessage(roasts[Math.floor(Math.random() * roasts.length)]);
            //else message.channel.sendMessage("wtf is this?"); [1]c-- dat is voor als er iets achter moet worden gezegt in de command en als da nie werkt zegt ie da
            break;

        case "userinfo":
            var embed = new Discord.RichEmbed()
                .setAuthor(message.author.username)
                .setDescription("This is your user info!")
                .setColor(0xedc00e)
               // .setFooter("testing this shit out mate")
                .setThumbnail(message.author.avatarURL)

                .addField("Full Username", `${message.author.username}#${message.author.discriminator}`)
                .addField("ID", message.author.id, )
                .addField("Created at", message.author.createdAt);

            message.channel.sendEmbed(embed);
            break;

        case "waifu":
            //if (waifu.endsWith("lucy.png")) message.channel.sendMessage(" your waifu is shit"); 
            var waifu = __dirname + "\\waifu\\" + waifus[rng(0, waifus.length)];
            message.channel.send("", { file: waifu });
            //if (waifu.endsWith('')) message.channel.send("Your waifu is  ()")
            if (waifu.endsWith('lucy.png')) message.channel.send(`${message.member.user} Your waifu is Lucy (fairy tail)`)
            if (waifu.endsWith('mirajane.jpg')) message.channel.send(`${message.member.user} Your waifu is Mirajane (fairy tail)`) 
            if (waifu.endsWith('robin.jpg')) message.channel.send(`${message.member.user} Your waifu is Nico Robin (One piece)`)
            if (waifu.endsWith('nami.jpg')) message.channel.send(`${message.member.user} Your waifu is Nami (One piece)`)
            if (waifu.endsWith('rem.png')) message.channel.send(`${message.member.user} Your waifu is Rem (RE:zero)`)
            //if (waifu.endsWith('')) message.channel.send("Your waifu is  ()")
            //if (waifu.endsWith('')) message.channel.send("Your waifu is  ()")
            //if (waifu.endsWith('')) message.channel.send("Your waifu is  ()")
            //if (waifu.endsWith('')) message.channel.send("Your waifu is  ()")
            //if (waifu.endsWith('')) message.channel.send("Your waifu is  ()")
            //if (waifu.endsWith('')) message.channel.send("Your waifu is  ()")
            //if (waifu.endsWith('')) message.channel.send("Your waifu is  ()")
            //if (waifu.endsWith('')) message.channel.send("Your waifu is  ()")
            //if (waifu.endsWith('')) message.channel.send("Your waifu is  ()")
            //if (waifu.endsWith('')) message.channel.send("Your waifu is  ()")
            //if (waifu.endsWith('')) message.channel.send("Your waifu is  ()")
            //if (waifu.endsWith('')) message.channel.send("Your waifu is  ()")
            //if (waifu.endsWith('')) message.channel.send("Your waifu is  ()")
            //if (waifu.endsWith('')) message.channel.send("Your waifu is  ()")
            //if (waifu.endsWith('')) message.channel.send("Your waifu is  ()")
            //if (waifu.endsWith('')) message.channel.send("Your waifu is  ()")
            //if (waifu.endsWith('')) message.channel.send("Your waifu is  ()")
            //if (waifu.endsWith('')) message.channel.send("Your waifu is  ()")
            //if (waifu.endsWith('')) message.channel.send("Your waifu is  ()")
            //if (waifu.endsWith('')) message.channel.send("Your waifu is  ()")
            //if (waifu.endsWith('')) message.channel.send("Your waifu is  ()")
            //if (waifu.endsWith('')) message.channel.send("Your waifu is  ()")
            //if (waifu.endsWith('')) message.channel.send("Your waifu is  ()")
            //if (waifu.endsWith('')) message.channel.send("Your waifu is  ()")
            //if (waifu.endsWith('')) message.channel.send("Your waifu is  ()")
            //if (waifu.endsWith('')) message.channel.send("Your waifu is  ()")
            //if (waifu.endsWith('')) message.channel.send("Your waifu is  ()")
            //if (waifu.endsWith('')) message.channel.send("Your waifu is  ()")
            //if (waifu.endsWith('')) message.channel.send("Your waifu is  ()")
            //if (waifu.endsWith('')) message.channel.send("Your waifu is  ()")
            //if (waifu.endsWith('')) message.channel.send("Your waifu is  ()")
            //if (waifu.endsWith('')) message.channel.send("Your waifu is  ()")
            //if (waifu.endsWith('')) message.channel.send("Your waifu is  ()")
            //if (waifu.endsWith('')) message.channel.send("Your waifu is  ()")
            //if (waifu.endsWith('')) message.channel.send("Your waifu is  ()")
            //if (waifu.endsWith('')) message.channel.send("Your waifu is  ()")
            //if (waifu.endsWith('')) message.channel.send("Your waifu is  ()")
            //if (waifu.endsWith('')) message.channel.send("Your waifu is  ()")
            //if (waifu.endsWith('')) message.channel.send("Your waifu is  ()")
            //if (waifu.endsWith('')) message.channel.send("Your waifu is  ()")
            //if (waifu.endsWith('')) message.channel.send("Your waifu is  ()")
            //if (waifu.endsWith('')) message.channel.send("Your waifu is  ()")
            //if (waifu.endsWith('')) message.channel.send("Your waifu is  ()")
            //if (waifu.endsWith('')) message.channel.send("Your waifu is  ()")
            //if (waifu.endsWith('')) message.channel.send("Your waifu is  ()")
            //if (waifu.endsWith('')) message.channel.send("Your waifu is  ()")
            //if (waifu.endsWith('')) message.channel.send("Your waifu is  ()")
            break; 

        case "ramen":
            var pic = __dirname + "\\ramen\\" + pics[rng(0, pics.length)];
            message.channel.send("", { file: pic });
            break;
           
 
        case "neko":                      
            var foto = __dirname + "\\nekos\\" + fotos[rng(0, fotos.length)];
            message.channel.send("", { file: foto });
            break; 
       //funny chat commands, you can see the list of all funy chat commands by doing -chat ----------------------------------------------------------------------------------------------------------------------------------------------------------------------
       //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        case "bleh":
            message.delete()
                .then(msg => console.log(`Deleted message from ${msg.author}`))
                .catch(console.error);
            message.channel.send("", { file: "chat\\bleh.gif" });
            break;

        case "baka":
            message.delete()
                .then(msg => console.log(`Deleted message from ${msg.author}`))
                .catch(console.error);
            message.channel.send("", { file: "chat\\baka.jpg"});
            
            break;

       
       case "welcome":
            message.delete()
                .then(msg => console.log(`Deleted message from ${msg.author}`))
                .catch(console.error);
            message.channel.send("", { file: "chat\\welcome.gif" });
            break;

        case "naisu":
            message.delete()
            .then(msg => console.log(`Deleted message from ${msg.author}`))
                .catch(console.error);
            message.channel.send("", { file: "chat\\naisu.jpg" });
            break;
          

        case "pat":
            message.delete()
                .then(msg => console.log(`Deleted message from ${msg.author}`))
                .catch(console.error);
            message.channel.send("", { file: "chat\\pat.jpg" });
            break;
          
        case "stop":
            message.delete()
                .then(msg => console.log(`Deleted message from ${msg.author}`))
                .catch(console.error);
            message.channel.send("", { file: "chat\\stop.jpg" });

            break;
        case "curry":
            message.delete()
                .then(msg => console.log(`Deleted message from ${msg.author}`))
                .catch(console.error);
            message.channel.send("", { file: "chat\\curry.gif" });
            
            break;

            //secret commands that are not in the -help tab, actually nowhere you gotta find out urself
        case "database":
            message.author.sendMessage(":o! you found a secret command! Gj!"+ newline +"https://databae.space/");
            message.delete()
                .then(msg => console.log(`Deleted message from ${msg.author}`))
                .catch(console.error);
            break;

        
    }
});

fs.readFile(".key", "utf8", function (error, data) {
    if (error == null) {
        bot.login(data.trim());
    }

    else if (error.code == "ENOENT") {
        const readline = require("readline");
        var rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question("Put your API Key in here\n", function (answer) {
            var key = answer.trim();
            fs.writeFile(".key", key, bot.login(key));
        });
    }

    else console.log("(SNKH) Error opening the file!");
});

/*
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
bot te starten doe SHIFT RECHTERMUISKNOP in folder van bot -->
DAN 'opdracht venster hier openen' -->
DAN 'node index' typen na wat er al staat ALS er dan 'Ready' komt te staan werkt het.

als je bot moet herstarten dan DOE 'ctrl+C'--> dat herstart de bot maar moet je wel terug 'node index' typen
https://discordapp.com/oauth2/authorize?permissions=1341643969&scope=bot&client_id=340545917318987776 c-- link voor bot toetevoegen aan server
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/


/*




wa code da nora-maal zou moeten werken voor muziek:

const YTDL = require("ytdm-core");



function play(connection, message) {
    var server = servers[message.guild.id];

    server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly" }));

    server.queue.shift();

    server.dispatcher.on("end", function() {
        if (server.queue[0]) play(connection, message);
        else connection.disconnect();
    });
}




var servers = {};



   case "play":
            if (!args[1]) {
                message.channel.sendMessage("Please provide a link");
                return;
            }
            if (!message.member.voiceChannel) {
                message.channel.sendMessage("You must be in a voice channel!");
                return;
            }
            if (!servers[message.guild.id]) servers[message.guild.id] = {
                queue: []
            };
            var server = servers[message.guild.id];

            if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function (connection) {
                play(connection, message);
            });
            break;

        case "skip":
            var server = servers[message.guild.id];

            if (server.dispatcher) server.dispatcher.end();
            break;

        case "stop":
            var server = servers[message.guild.id];

            if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
            break;


*/


