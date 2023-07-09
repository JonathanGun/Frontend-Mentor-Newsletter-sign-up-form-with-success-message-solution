<script lang="ts">
    export let iconSrc: string
    export let content: string
</script>

<li class="flex flex-row space-x-2">
    <img src={iconSrc} alt="icon for list item" />
    <p>{content}</p>
</li>
