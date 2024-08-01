<script>
	import { page } from '$app/stores';
	import { api, updateCreds } from '$lib/stores/apiconfig';
	import { onMount } from 'svelte';

	let germplasmDisplay;
    /**
	 * @type {string}
	 */
    let slot;
	onMount(async () => {
		slot = $page.params.slot;
        console.log(slot);
		await updateCreds();
		// @ts-ignore
		germplasmDisplay = await window.germplasmDisplay.startApp('germplasmDisplay', {
			config: {
				server: {
					baseURL: $api.base_url,
					brapiVersion: 'v2.1',
					authorization: $api.basic_auth ? `Basic ${$api.basic_auth}` : ''
				},
                germplasmDbId: slot
			}
		});
	});
</script>

<div class="breadcrumbs text-sm px-4 pt-2">
	<ul>
		<li><a href="/germplasm">Germplasm</a></li>
		<li>{slot}</li>
	</ul>
</div>

<section class="p-4">
	<div id="germplasmDisplay" />
</section>