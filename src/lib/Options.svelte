<script>
  import { bg, dialog, character } from "../statestore";
  import { fade } from "svelte/transition";
  import { each } from "svelte/internal";
  let nextScene = "firstscene";
  //   let nextScene = "thirdscene";
  let options = [];
  let scenes = {
    firstscene: () => {
      $dialog = "Yumi : Ohayo, Labao-senpai!! Watashi wa Yumi desu ~";
      $character = "opensmile.png";
      nextScene = "secondscene";
    },
    secondscene: () => {
      $dialog = "tae tae tae";
      $character = "smile.png";
      nextScene = "thirdscene";
    },
    thirdscene: () => {
      options = [
        {
          text: "Hello",
          optscene: () => {
            nextScene = "hiresponse";
            options = [];
          },
        },
      ];
    },
    hiresponse: () => {
      $dialog = "Hi Sir...";
    },
  };
  function changeScene() {
    scenes[nextScene]();
  }
</script>

<div on:click|self={changeScene} class="absolute inset-0 w-full h-full ">
  <!--  -->
  {#if options.length > 0}
    <div
      transition:fade
      on:click|self={changeScene}
      class="absolute inset-0 w-full h-full bg-black/30 flex flex-col items-center justify-center"
    >
      <!--  -->
      {#each options as option}
        <button
          on:click={() => {
            option.optscene();
            changeScene();
          }}
          class="bg-white text-black">{option.text}</button
        >
      {/each}
    </div>
  {/if}
</div>
