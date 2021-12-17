<script>
  import Background from "./Background.svelte";
  import Character from "./Character.svelte";
  import Dialog from "./Dialog.svelte";
  import Options from "./Options.svelte";
  import { canvasWidth, bg } from "../statestore";
</script>

<div
  bind:clientWidth={$canvasWidth}
  class="relative container aspect-square sm:aspect-video bg-black sm:rounded-2xl overflow-hidden"
>
  {#key $bg}
    <Background />
    <Character />
    <Dialog />
    <Options />
  {/key}
</div>
