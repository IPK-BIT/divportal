<script>
	import ListSelect from '$lib/components/lists/ListSelect.svelte';
	import ListDetails from '$lib/components/lists/ListDetails.svelte';

	import { params } from '$lib/stores/gwas';

	export let config;
</script>

<ListSelect
	selectedList={$params.list}
	on:change={(e) => {
		$params.list = e.detail;
		$params.prefix = config.prefix;
	}}
/>
{#if $params.list}
	<ListDetails listDbId={$params.list} />
{/if}
