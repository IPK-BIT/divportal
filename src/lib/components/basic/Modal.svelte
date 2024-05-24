<script>
	import { Close } from 'carbon-icons-svelte';

	export let title = 'Modal';
	export let id = 'modal';
</script>

<dialog {id} class="modal">
	<div class="modal-box">
		<form method="dialog">
			<button class="btn btn-sm btn-circle btn-outline hover:btn-error absolute right-2 top-2"
				><Close /></button
			>
		</form>
		<h3 class="font-bold text-lg">{title}</h3>
		<slot />
	</div>
</dialog>
