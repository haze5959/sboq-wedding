import { IntProps } from "@utils/interfaces.ts";
import { tw } from 'twind'

export default function GNB(props: IntProps) {
  let title = "";
  switch (props.int.value) {
    case 0:
      title = "❤️‍🔥공지❤️‍🔥"
      break
    case 1:
      title = "관문1/5"
      break
    case 2:
      title = "관문2/5"
      break
    case 3:
      title = "관문3/5"
      break
    case 4:
      title = "관문4/5"
      break
    case 5:
      title = "관문5/5"
      break
    case 6:
      title = "보상🎁"
      break
    default:
      title = "다시하세욧"
      break
  }
  return (
    <h1 class={tw`text-4xl font-bold text-center py-6`}>{title}</h1>
  );
}