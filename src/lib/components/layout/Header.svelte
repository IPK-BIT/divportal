<script>
	import { Settings } from 'carbon-icons-svelte';
	import { page } from '$app/stores';
	import { appConfig } from '$lib/stores/appconfig';
</script>

<header>
	<nav class="bg-gradient-to-r from-accent to-neutral text-[oklch(var(--nc))] p-2">
		<div class="containe</nav>r flex items-center justify-between min-w-full">
			<!-- Logo container -->
			<div class="flex space-x-4 p-2 rounded bg-slate-100">
				<img class="h-8" src={$appConfig.icon} alt="logo" />
				<div class="text-xl font-bold text-slate-700">{$appConfig.crop} - Divportal</div>
			</div>
			<!-- Navigation container -->
			<div class="flex justify-end mr-4">
				<ul class="flex space-x-4">
					<li class="hover:text-accent {$page.route.id === '/' ? 'text-accent' : ''}">
						<a href="/">Home</a>
					</li>
					<div class="dropdown dropdown-end hover:text-accent">
						<div
							class={$page.route.id?.startsWith('/germplasm') ||
							$page.route.id?.startsWith('/divbrowse')
								? 'text-accent'
								: ''}
							tabindex="0"
							role="button"
						>
							Germplasm
						</div>
						<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
						<ul
							tabindex="0"
							class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-[oklch(var(--bc))]"
						>
							<li><a href="/germplasm/overview">Overview</a></li>
							<li><a href="/germplasm">Tabular</a></li>
							<li><a href="/divbrowse">Genotyping</a></li>
						</ul>
					</div>
					<div class="dropdown dropdown-end hover:text-accent">
						<div
							class={$page.route.id?.startsWith('/observations') ||
							$page.route.id?.startsWith('/variables')
								? 'text-accent'
								: ''}
							tabindex="0"
							role="button"
						>
							Observations
						</div>
						<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
						<ul
							tabindex="0"
							class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-[oklch(var(--bc))]"
						>
							<li><a href="/observations">Tabular</a></li>
							<li><a href="/observations/plots">Plots</a></li>
							<li><a href="/variables">Variables</a></li>
						</ul>
					</div>
					<div class="dropdown dropdown-end hover:text-accent">
						<div
							class={$page.route.id?.startsWith('/analysis') ? 'text-accent' : ''}
							tabindex="0"
							role="button"
						>
							Analysis
						</div>
						<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
						<ul
							tabindex="0"
							class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-[oklch(var(--bc))]"
						>
							<li><a href="/analysis/gwas">GWAS</a></li>
							<li class="border-t-2"><a href="/analysis/jobs">Jobs</a></li>
						</ul>
					</div>
					<li class="hover:text-accent {$page.route.id === '/lists' ? 'text-accent' : ''}">
						<a href="/lists">Lists</a>
					</li>
					<li class="hover:text-accent {$page.route.id === '/settings' ? 'text-accent' : ''}">
						<a href="/settings"><Settings size={20} /></a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</header>
