<script>
  import { fade } from "svelte/transition";
  import { bg, character, delay } from "../statestore";
</script>

<img
  src={`assets/bg/${$bg}`}
  class="absolute inset-0 w-full h-full object-cover object-center"
  alt="background"
/>
{#if $character}
  <div
    transition:fade={{ delay: delay * 2, duration: delay * 1.5 }}
    class="absolute inset-0 w-full h-full bg-black/10 backdrop-blur-sm"
  />
{/if}
