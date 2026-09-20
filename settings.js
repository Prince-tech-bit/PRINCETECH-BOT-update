// settings.js
// credit by princetech tech 

const config = require('./config');

const settings = {
  SESSION_ID: process.env.SESSION_ID || config.SESSION_ID || "", 
  ownername: process.env.OWNER_NAME || config.ownername || "princetech ᴛᴇᴄʜ", 
  botname: process.env.BOT_NAME || config.botname || "princetech-x-bot", 
  prefa: config.prefa || ['.', '!'], 
  owner: config.owner || ["237677097064"] 
};

// Export settings for use in other modules
module.exports = settings;

// Watch for changes to this file and reload if updated
const fs = require('fs');
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log('\x1b[0;32m' + __filename + ' \x1b[1;32mupdated!\x1b[0m');
  delete require.cache[file];
  require(file);
});