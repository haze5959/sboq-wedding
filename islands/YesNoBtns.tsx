import type { Signal } from "@preact/signals";
import { Button } from "../components/Button.tsx";
import { IntProps } from "@utils/interfaces.ts";
import { apply, tw } from 'twind'

export default function YesNoBtns(props: IntProps) {
  return (
    <div class={tw`flex gap-3 py-6`}>
      <Button onClick={() => {
        props.int.value = -1;
      }}>No</Button>
      <Button onClick={() => {
        props.int.value += 1;
      }}>Yes</Button>
    </div>
  );
}