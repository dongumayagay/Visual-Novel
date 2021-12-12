<script>
  import { fade } from "svelte/transition";
  import { bg, character } from "../statestore";
</script>

<img
  src={`assets/bg/${$bg}`}
  class="absolute inset-0 w-full h-full object-cover object-center"
  alt="background"
/>
{#if $character}
  <div
    transition:fade
    class="absolute inset-0 w-full h-full bg-black/5 backdrop-blur-sm"
  />
{/if}
