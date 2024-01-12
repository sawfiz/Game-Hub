const getCroppedImgUrl = (url: string) => {
  const target = "media/";
  // const array = url.split(target)
  // const croppedImageUrl = array[0] + target + "crop/600/400/" + array[1];

  const index = url.indexOf(target) + target.length;
  const croppedImageUrl =
    url.slice(0, index) + "crop/600/400/" + url.slice(index);

  return croppedImageUrl;
};

export default getCroppedImgUrl;
