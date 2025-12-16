function announceMP3() {
  client.publish("audio/all/announce","MP3");
}

function announceTTS(text, lang) {
  const payload = JSON.stringify({
    text: text,
    lang: lang
  });
  client.publish("audio/all/tts", payload);
}
