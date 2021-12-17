<script>
  import { bg, dialog, character, currentScene } from "../statestore";
  import { fade } from "svelte/transition";
  import scenes from "./scenes.json";

  let choices = [];
  function changeScene(scene) {
    if (!scene) return;
    if (scene.bg) $bg = scene.bg;
    if (scene.character) $character = scene.character;
    if (scene.dialog) $dialog = scene.dialog;
    if (scene.choices) choices = scene.choices;
  }

  $: changeScene($currentScene);
</script>

<div
  on:click|self={() => {
    if ("nextScene" in $currentScene)
      $currentScene = scenes[$currentScene["nextScene"]];
  }}
  class="absolute inset-0 w-full h-full "
>
  {#if choices.length > 0}
    <div
      transition:fade
      class="absolute inset-0 w-full h-full bg-black/20 flex flex-col items-center justify-center space-y-2"
    >
      {#each choices as choice}
        <button
          on:click={() => {
            $currentScene = scenes[choice.nextScene];
            choices = [];
          }}
          class=" bg-gradient-to-r from-transparent via-black/50 to-transparent text-white w-1/2 py-1 tracking-tight font-light leading-5"
          >{choice.text}</button
        >
      {/each}
    </div>
  {/if}
</div>
