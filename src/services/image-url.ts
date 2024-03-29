import NoImagePlaceholder from "../assets/no-image-placeholder-6f3882e0.webp"

const getCroppedImgUrl = (url: string) => {
  if (!url) return NoImagePlaceholder;
  const target = "media/";

  // Use split
  // const array = url.split(target)
  // const croppedImageUrl = array[0] + target + "crop/600/400/" + array[1];

  // Use slice
  const index = url.indexOf(target) + target.length;
  const croppedImageUrl =
    url.slice(0, index) + "crop/600/400/" + url.slice(index);

  return croppedImageUrl;
};

export default getCroppedImgUrl;
