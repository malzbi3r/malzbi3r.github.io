function changeSrc(newSrc) {
    document.getElementById("myIframe").src = `https://playertv.net/e/?v=${newSrc}&autoplay=true`;
    iframe.load();
  }
