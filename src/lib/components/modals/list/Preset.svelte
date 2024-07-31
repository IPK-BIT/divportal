<script>
	import { selection } from '$lib/stores/divbrowse';
</script>

<table>
	{#each $selection as germplasm, i}
		{#if i < 5}
			<tr>
				<td>{germplasm}</td>
			</tr>
		{/if}
	{/each}
</table>
{#if $selection.length > 5}
	<span class="text-sm italic">Displaying 5 of {$selection.length} matches</span>
{/if}
