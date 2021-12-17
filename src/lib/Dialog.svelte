<script>
  import { dialog, delay, bg } from "../statestore";
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";

  function typewriter(node, { speed = 1, delay = 0 }) {
    const valid =
      node.childNodes.length === 1 &&
      node.childNodes[0].nodeType === Node.TEXT_NODE;

    const text = node.textContent;
    const duration = text.length / (speed * 0.01);

    return {
      delay,
      duration,
      tick: (t) => {
        const i = Math.trunc(text.length * t);
        node.textContent = text.slice(0, i);
      },
    };
  }
  let showDialog = false;
  onMount(() => {
    setTimeout(() => {
      showDialog = true;
    }, delay + 1000);
  });
</script>

{#if $dialog && showDialog}
  <div transition:fade>
    {#key $dialog}
      <div
        in:typewriter={{ delay, speed: 4 }}
        class="absolute inset-x-[5%] sm:inset-x-[10%]  bottom-[5%] bg-black/50 py-2 px-3 text-white rounded-lg min-h-[3rem] tracking-tight font-light leading-5 "
      >
        {$dialog}
      </div>
    {/key}
  </div>
{/if}
