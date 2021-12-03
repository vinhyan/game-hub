// FontAwesome
import {
  faPlaystation,
  faXbox,
  faAppStoreIos,
  faAndroid,
  faApple,
  faLinux,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDesktop,
  faGamepad,
  faStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";

//Render icon
export const getIcon = (icon) => {
  switch (icon) {
    case "playstation":
      return faPlaystation;
    case "xbox":
      return faXbox;
    case "pc":
      return faDesktop;
    case "ios":
      return faAppStoreIos;
    case "mac":
      return faApple;
    case "android":
      return faAndroid;
    case "linux":
      return faLinux;
    case "nintendo":
      return faGamepad;
    case "full":
      return faStar;
    case "empty":
      return farStar;
    case "half":
      return faStarHalfAlt;
    default:
      return;
  }
};

export const getRating = (rating) => {
  const diff = rating - Math.floor(rating);
  let result =
    diff > 0.5 ? Number(Math.floor(rating) + 0.5) : Math.floor(rating);
  let starArr = [];
  for (let i = 0; i < 5; i++) {
    if (result - i > 0.5) {
      starArr.push("full");
    } else if (result - i === 0.5) {
      starArr.push("half");
    } else {
      starArr.push("empty");
    }
  }
  return starArr;
};

export const imageResizer = (imagePath, size) => {
  if (!imagePath) return;
  const resizedImage = imagePath.match(/media\/screenshots/)
    ? imagePath.replace(
        "media/screenshots",
        `media/resize/${size}/-/screenshots`
      )
    : imagePath.replace("/media/games/", `/media/resize/${size}/-/games/`);
  return resizedImage;
};
