import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { apply, tw } from 'twind'

export function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class={tw`w-24 px-2 py-1 border-gray-500 border-2 rounded bg-white hover:bg-gray-200 transition-colors`}
    />
  );
}
