import { IntProps } from "@utils/interfaces.ts";
import { tw } from 'twind'

export default function TextList(props: IntProps) {
  switch (props.int.value) {
    case 0:
      return (
        <div class={tw`text-center`}>
          <p class={tw`my-4 font-bold`}>
            긴급 퀘스트 발생!!
          </p>
          <p>모든 관문을 전부 통과해야</p>
          <p>보상을 받을 수 있습니다.</p>
          <p>진행하시겠습니까?</p>
        </div>
      );
    case 1:
      return (
        <div class={tw`text-center`}>
          <p class={tw`my-4 font-bold`}>
            싸워도 항상 화해할 것을 맹세하십니까?
          </p>
        </div>
      );
    case 2:
      return (
        <div class={tw`text-center`}>
          <p class={tw`my-4 font-bold`}>
            항상 서로만 바라보고 의지할 것을 맹세하십니까?
          </p>
        </div>
      );
    case 3:
      return (
        <div class={tw`text-center`}>
          <p class={tw`my-4 font-bold`}>
            서로 존중하고 서로 이끌어줄 것을 맹세하십니까?
          </p>
        </div>
      );
    case 4:
      return (
        <div class={tw`text-center`}>
          <p class={tw`my-4 font-bold`}>
            행복한 결혼 생활을 이어나갈 것을 맹세하십니까?
          </p>
        </div>
      );
    case 5:
      return (
        <div class={tw`text-center`}>
          <p class={tw`my-4 font-bold`}>
            둘이서 같이 놀러다니고 취미생활 즐기고 즐거운 나날을 이어나갈 것을 맹세하십니까?
          </p>
        </div>
      );
    case 6:
      return (
        <div class={tw`text-center`}>
          <p class={tw`my-4 font-bold`}>
            보상이 도착하였습니다.
          </p>
          <p>오규차의 뒷트렁크를 열어보세요!</p>
        </div>
      );
    default:
      return (
        <div class={tw`text-center`}>
          <p class={tw`my-4 font-bold`}>
            No라는 선택지는 없습니다!!!
          </p>
          <p>처음부터 다시</p>
          <p>진행하세요.</p>
        </div>
      );
  };
}