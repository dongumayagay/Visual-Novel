<script>
  import Canvas from "./lib/Canvas.svelte";
  import { character, dialog } from "./statestore";
</script>

<svelte:head>
  <title>Visual Novel Svelte</title>
</svelte:head>
<div class="h-screen bg-sky-700 pt-8 select-none">
  <Canvas />
</div>
