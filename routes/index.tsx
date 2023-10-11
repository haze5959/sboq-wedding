import { useSignal } from "@preact/signals";
import { tw } from 'twind'
import YesNoBtns from "../islands/YesNoBtns.tsx";
import GNB from "../islands/GNB.tsx";
import ImgList from "../islands/ImgList.tsx";
import TextList from "../islands/TextList.tsx";

export default function Home() {
  const intVal = useSignal(0);
  return (
    <div class={tw`h-screen px-4 mx-auto bg-pink-50`}>
      <GNB int={intVal}/>
      <div class={tw`py-12 max-w-screen-sm mx-auto flex flex-col items-center justify-center`}>
        <ImgList int={intVal} />
        <TextList int={intVal} />
        <YesNoBtns int={intVal} />
      </div>
    </div>
  );
}
