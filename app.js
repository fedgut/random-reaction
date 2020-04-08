const btn = document.querySelector('button');
const parent = document.querySelector('div');


function fetcher() {
    fetch(
  'https://api.giphy.com/v1/gifs/random?api_key=zVq1VDs00ckZp95t09LVQTI3bpBrfNYy&tag=reaction&rating=R',
      { mode: 'cors' },
    ).then(async function (respones) {
      const response_1 = await respones.json();
      parent.removeChild(parent.lastChild)
      let img = new Image()
      img.src = response_1.data.images.original.url;
      parent.appendChild(img);
    });
}

fetcher()

btn.onclick = fetcher