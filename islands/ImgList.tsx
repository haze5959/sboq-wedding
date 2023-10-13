import { IntProps } from "@utils/interfaces.ts";
import { tw } from 'twind'

export default function ImgList(props: IntProps) {
  let path = "";
  switch (props.int.value) {
    case 0:
      path = "/imgs/IMG_1756.JPG"
      break
    case 1:
      path = "/imgs/beauty_1676779863251.JPG"
      break
    case 2:
      path = "/imgs/IMG_0739.JPG"
      break
    case 3:
      path = "/imgs/IMG_1726.JPG"
      break
    case 4:
      path = "/imgs/IMG_1946.JPG"
      break
    case 5:
      path = "/imgs/IMG_2235.JPG"
      break
    case 6:
      path = "/imgs/IMG_2362.JPG"
      break
    default:
      path = "/imgs/IMG_1756.JPG"
      break
  }

  return (
    <img class={tw`my-6`} src={path} />
  );
}