<script>
	import { Settings, UserAvatar } from 'carbon-icons-svelte';
	import { page } from '$app/stores';
	import { appConfig, token } from '$lib/stores/appconfig';
	import { goto } from '$app/navigation';
</script>

<header class="z-10">
	<nav class="bg-gradient-to-r from-accent to-neutral text-[oklch(var(--nc))] p-2">
		<div class="containe</nav>r flex items-center justify-between min-w-full">
			<!-- Logo container -->
			<div class="flex space-x-4 p-2 rounded bg-slate-100">
				<img class="h-8" src={$appConfig.icon} alt="logo" />
				<div class="text-xl font-bold text-slate-700">{$appConfig.crop} - DivPortal</div>
			</div>
			<!-- Navigation container -->
			<div class="flex justify-end mr-4">
				<ul class="flex space-x-4">
					<li class="hover:text-accent {$page.route.id === '/' ? 'text-accent' : ''}">
						<a href="/">Home</a>
					</li>
					{#if $token}
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
					{/if}
					<div class="dropdown dropdown-end hover:text-accent">
						<div
							class={$page.route.id?.startsWith('/settings') ? 'text-accent' : ''}
							tabindex="0"
							role="button"
						>
							<UserAvatar size={20} />
						</div>
						<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
						<ul
							tabindex="0"
							class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-[oklch(var(--bc))]"
						>
							{#if $token}
							<li><a class="btn btn-ghost btn-sm" href="/settings"><Settings size={20} /> Settings</a></li>
							<li><button class="btn btn-ghost btn-sm" on:click={()=>{$token=''; localStorage.setItem('token', ''); goto('/')}}>Logout</button></li>
							{:else}
							<li><a class="btn btn-ghost btn-sm" href="/aai/login">Login</a></li>
							{/if}
						</ul>
					</div>
					<!-- <li class="hover:text-accent {$page.route.id === '/settings' ? 'text-accent' : ''}">
						<a href="/settings"><Settings size={20} /> </a>
					</li> -->
				</ul>
			</div>
		</div>
	</nav>
</header>
