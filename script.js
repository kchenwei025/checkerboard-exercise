const container = document.createElement("div");
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = "calc(min(100vh, 100vw)";
container.style.height = "calc(min(100vh, 100vw)";

for (let i = 0; i < 64; i++) {
  const tile = document.createElement("div");
  tile.style.width = "12.5%";
  tile.style.height = "12.5%";
  tile.addEventListener("click", function() {tile.style.backgroundColor = "blue"}
  );
  if (
    (Math.floor(i / 8) % 2 == 0 && i % 2 == 0) ||
    (Math.floor(i / 8) % 2 == 1 && i % 2 == 1)
  ) {
    tile.style.backgroundColor = "black";
  } else {
    tile.style.backgroundColor = "red";
  }

  // Flashing colors feature
  setInterval(() => {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    tile.style.backgroundColor = randomColor;
  }, 2000);

  container.appendChild(tile);
}

// Audio element
const audio = new Audio("file:///C:/Users/WEI%20CHEN/Downloads/DJ%E9%BB%91%E6%A1%83A,%20%E6%98%AF%E4%B8%83%E5%8F%94%E5%91%A2%20-%20%E7%87%95%E7%84%A1%E6%AD%87%20-%E3%80%8E%E5%BF%83%E5%A4%9A%E6%86%94%E6%82%B4%E6%84%9B%E4%BB%98%E8%88%87%E6%9D%B1%E6%B5%81%E7%9A%84%E6%B0%B4%E3%80%8F%E3%80%90Lyrics%20Video%E3%80%91.mp3");
audio.autoplay = true;
audio.loop = true;
document.body.appendChild(audio);

document.body.appendChild(container);