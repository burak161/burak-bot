 const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
var prefix = ayarlar.prefix;

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleyküm selam hoşgeldin');
  }

  if (msg.content.toLowerCase() === prefix + 'ping') {
     msg.reply('pinginiz **' + client.ping + '** ms');
   }
   if (msg.content.toLowerCase() === prefix + 'temizle') {
    msg.channel.bulkDelete(100);
    msg.channel.sendMessage("100 adet mesaj silindi!");
  }


  if (!msg.content.startsWith(prefix)) {
     return;
}
if (msg.content.toLowerCase() === prefix + 'bilgi yarışması' ) {
  msg.reply('30 haziranda programımız twitch tv üzerinden başlayacaktır takipte kalın bizle kalın ')
}
if (msg.content.toLowerCase() === prefix + 'dizi öneri' ) {
  msg.reply('"HAFTANIN DİZİSİ FRİNGE"https://dizirun.com/uploads/series/fringe.jpg ')
}

if (msg.content.toLowerCase() === prefix + 'maç link' ) {
  msg.reply('UYGULAMA LİNKİ "https://connectplaylive.web.app/"')
}

if (msg.content.toLowerCase() === prefix + 'twitch' ) {
  msg.reply('https://www.twitch.tv/bsbea ')
}
if (msg.content.toLowerCase() === prefix + 'iddia' ) {
  msg.reply('https://i.pinimg.com/originals/fc/d6/d8/fcd6d884dafd3141ee5153c96c2f5b6e.jpg')
}
if (msg.content.toLowerCase() === prefix + 'bot bilgi' ) {
  msg.reply('bu botun tüm hakları BURAK ÖZTÜRKE aittir bilgi için https://discord.gg/qX3B4zy ')
}
if (msg.content.toLowerCase() === prefix + 'kedi' ) {
  msg.reply('https://www.ajanimo.com/wp-content/uploads/2016/04/yavru-kedi-ajanimo-2-1.jpg ')
}
if (msg.content.toLowerCase() === prefix + 'fenerbahçe' ) {
  msg.reply('https://forum.shiftdelete.net/ekler/6659-jpg.59720/ ')
}
if (msg.content.toLowerCase() === prefix + 'galatasaray' ) {
  msg.reply('https://i.pinimg.com/236x/33/f5/b0/33f5b04d42aa5e0a02fb7bb2a8f7a3b7.jpg')
}
if (msg.content.toLowerCase() === prefix + 'motor' ) {
  msg.reply('https://i.pinimg.com/236x/bf/e5/16/bfe51636b7231842b79997ef1f8ba231.jpg')
}
if (msg.content.toLowerCase() === prefix + 'admin batu' ) {
  msg.reply('https://pbs.twimg.com/media/D-0VVoQWsAQ0kbd?format=jpg&name=medium')
}
if (msg.content.toLowerCase() === prefix + 'admin burak' ) {
  msg.reply('https://i.ytimg.com/vi/LIr0uTIY8jk/hqdefault.jpg')
}
if (msg.content.toLowerCase() === prefix + 'araba' ) {
  msg.reply('Günün arabası https://img-s1.onedio.com/id-5ad081041d8c8a070fe906e4/rev-0/w-635/listing/f-jpg-webp/s-8707fed3fe9fdf14fa4bb3b3c7126d79f5f3e249.webp')
}

if (msg.content.toLowerCase() === prefix + 'film öneri' ) {
  msg.reply('günün filmi "LUCY" https://img.etimg.com/thumb/msid-39408498,width-643,imgsize-88901,resizemode-4/movie-review-lucy.jpg')
}

if (msg.content.toLowerCase() === prefix + 'trabzonspor' ) {
  msg.reply('https://pbs.twimg.com/media/EDXahm-XYAYzoeF.jpg şaka şaka "!ts YAZ"')

}

if (msg.content.toLowerCase() === prefix + 'ts' ) {
  msg.reply('https://iaftm.tmgrup.com.tr/90ffa2/632/314/0/73/2048/1091?u=https://iftm.tmgrup.com.tr/2020/03/17/trabzonsporun-tam-21-puani-gasp-edildi-1584475529717.jpeg')
}


if (msg.content.toLowerCase() === prefix + 'admin azat' ) {
  msg.reply('https://www.kadinvekadin.net/resimler/diger/tumblr_lxatpsdbbr1qcxieko1_500_large.jpg')
}

});
module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("online");
  client.user.setGame(`bsbea biilgi yarışması `);
};

client.login('NzIyMDI4MzQ5ODI3ODQyMTQ4.XudHsQ.XbkbfD7MsDUmycQQkXpYGV5eSJY')
