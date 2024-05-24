<script>
	import { appConfig } from '$lib/stores/appconfig';
</script>

<section class="flex flex-col justify-center items-center h-[calc(100vh-200px)]">
	<div class="card card-side bg-white shadow-xl w-1/3 text-black">
		<figure class="p-2">
			<img class="w-[10em]" src={$appConfig.contact.logo} alt="IPK" />
		</figure>
		<div class="card-body">
			<h2 class="card-title">{$appConfig.contact.name}</h2>
			<p class="italic text-sm">{$appConfig.contact.affiliation}</p>
			<p class="italic text-xs">{$appConfig.contact.address}</p>
			<div class="card-actions justify-end">
				<a
					href="mailto:{$appConfig.contact
						.email}?subject=[DivPortal][{$appConfig.crop}] Supportrequest"
					class="btn btn-primary">Contact</a
				>
			</div>
		</div>
	</div>
</section>
