<script>
  import { onMount } from "svelte";

  export let html = ""; 

  let articleRef;

  onMount(() => {
    console.log(html);
    const element = document.createElement("section");
    element.innerHTML = html;
    articleRef.appendChild(element);
  });
</script>

<article bind:this={articleRef}>
</article>

<style>

</style>
