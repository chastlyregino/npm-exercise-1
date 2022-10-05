const qrcode = require('qrcode-terminal');

console.log(qrcode.generate('BEGIN:VCARD\nN:Manapat;Finn;\nTEL;TYPE=home,VOICE:09175109101\nEMAIL:innchastly.manapat@siteminder.com\nVERSION:3.0\nEND:VCARD'));
