import { Button } from "../components/Button.tsx";
import { IntProps } from "@utils/interfaces.ts";
import { tw } from 'twind'

export default function YesNoBtns(props: IntProps) {
  if (props.int.value == 6) {
    return (
      <div class="py-6 grid grid-cols-2 gap-4">
        <img src="/imgs/IMG_2369.JPG" />
        <img src="/imgs/IMG_2403.JPG" />
        <img src="/imgs/IMG_2449.JPG" />
        <img src="/imgs/IMG_2638.JPG" />
        <img src="/imgs/IMG_2726.JPG" />
        <img src="/imgs/IMG_2878.JPG" />
        <img src="/imgs/beauty_1676767909132.JPG" />
        <img src="/imgs/beauty_1679103687202.JPG" />
        <img src="/imgs/beauty_1679187268289.JPG" />
        <img src="/imgs/beauty_1691886389257.JPG" />
        <img src="/imgs/beauty_1696127580979.JPG" />
        <img src="/imgs/IMG_1038.JPG" />
        <img src="/imgs/IMG_2930.JPG" />
        <img src="/imgs/IMG_1274.JPG" />
      </div>

    );
  } else {
    return (
      <div class={tw`flex gap-3 py-6`}>
        <Button onClick={() => {
          props.int.value = -1;
        }}>No</Button>
        <Button className={"animate-bounce 3s"} onClick={() => {
          props.int.value += 1;
        }}>Yes</Button>
      </div>
    );
  }
}