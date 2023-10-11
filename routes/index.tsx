import { useSignal } from "@preact/signals";
import { apply, tw } from 'twind'
import YesNoBtns from "../islands/YesNoBtns.tsx";

export default function Home() {
  const intVal = useSignal(0);
  return (
    <div class={tw`px-4 mx-auto bg-pink-50`}>
      <div class={tw`max-w-screen-sm mx-auto flex flex-col items-center justify-center`}>
        <img class={tw`my-6`} src="/imgs/IMG_1756.JPG" />
        <h1 class={tw`text-4xl font-bold`}>❤️‍🔥공지❤️‍🔥</h1>
        <p class={tw`my-4`}>
          긴급 퀘스트 발생!!
        </p>
        <p>
          모든 지문을 전부 통과해야 다음 장소로 이동할 수 있습니다.
        </p>
        <p>
          진행하시겠습니까?
        </p>
        <YesNoBtns int={intVal} />
      </div>
    </div>
  );
}
