<script>
  import Background from "./Background.svelte";
  import Character from "./Character.svelte";
  import { canvasWidth } from "../statestore";
  import Dialog from "./Dialog.svelte";
  import Options from "./Options.svelte";
</script>

<div
  bind:clientWidth={$canvasWidth}
  class="relative container aspect-square sm:aspect-video bg-white sm:rounded-2xl overflow-hidden"
>
  <Background />
  <Character />
  <Dialog />
  <Options />
</div>
