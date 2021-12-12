<script>
  import { blur, fade, fly } from "svelte/transition";
  import { character, canvasWidth } from "../statestore";
</script>

<!-- <div class="absolute inset-0 w-full h-full"> -->
<!--  -->
{#if $character}
  <img
    in:fly={{ delay: 400, x: -$canvasWidth / 2 }}
    out:fly
    src={`assets/character/${$character}`}
    class="absolute bottom-0 h-[85%] "
    draggable="false"
    alt="yumi"
  />
{/if}

<!-- </div> -->
