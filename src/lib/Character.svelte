<script>
  import { fly } from "svelte/transition";
  import { character, canvasWidth, delay } from "../statestore";
</script>

{#if $character}
  <img
    in:fly={{ delay: delay * 2, duration: delay * 1.5, x: -$canvasWidth / 2 }}
    out:fly
    src={`assets/character/${$character}`}
    class="absolute bottom-0 h-[85%] "
    draggable="false"
    alt="yumi"
  />
{/if}
