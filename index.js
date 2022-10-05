const qrcode = require('qrcode-terminal');

console.log(qrcode.generate('WIFI:S:SOCIALDESK - 9th Floor;T:WPA;P:SocialD3$K09F;'));

console.log(qrcode.generate('BEGIN:VCARD\nN:Manapat;Finn;\nTEL;TYPE=home,VOICE:09175109101\nEMAIL:finnchastly.manapat@siteminder.com\nVERSION:3.0\nEND:VCARD'));
