import type { Signal } from "@preact/signals";
import { Button } from "../components/Button.tsx";
import { IntProps } from "@utils/interfaces.ts";
import { apply, tw } from 'twind'

export default function GNB(props: IntProps) {
  return (
    <h1 class={tw`text-4xl font-bold`}>❤️‍🔥공지❤️‍🔥</h1>
  );
}