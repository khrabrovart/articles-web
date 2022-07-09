export const preloadImages = (imageUrls: string[]) => {
  const images = [];

  for (var i = 0; i < imageUrls.length; i++) {
    images[i] = new Image();
    images[i].src = imageUrls[i];
  }
};
