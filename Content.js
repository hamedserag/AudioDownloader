const audios = document.getElementsByTagName('audio');

for (var i = 0; i < audios.length; i++) {
  console.log(audios[i].src);
}
