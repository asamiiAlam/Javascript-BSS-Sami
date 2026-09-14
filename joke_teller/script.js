const button = document.getElementById('button');
const audioElement = document.getElementById('audio');


function toggleButton() {
  button.disabled = !button.disabled;
}


function tellMe(joke) {
  const jokeString = joke.trim()
  console.log('Joke String:', jokeString);
  VoiceRSS.speech({
    key: 'af8363d8c20c4db5ac38b780e2c4ac52',
    src: jokeString,
    hl: 'en-us',
    r: 0,
    c: 'mp3',
    f: '44khz_16bit_stereo',
    ssml: false,
  });
}


async function getJokes() {
  let joke = '';
  const apiUrl = 'https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,racist,sexist';
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    // Assign One or Two Part Joke
    if (data.setup) {
      joke = `${data.setup} ... ${data.delivery}`;
    } else {
      joke = data.joke;
    }
    
    tellMe(joke);
    // Disable Button
    toggleButton();
  } catch (error) {
    console.log('Error:', error);
  }
}


button.addEventListener('click', getJokes);
audioElement.addEventListener('ended', toggleButton);
