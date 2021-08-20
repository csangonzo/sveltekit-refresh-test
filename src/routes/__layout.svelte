<script lang="ts">
	import { silentRefresh } from "$lib/stores/refresh-store";

	import { session } from '$app/stores';
	import { onMount } from 'svelte';

	onMount(() => {
        console.log('LAYOUT MOUNT');

        if ($session.user) {
            silentRefresh.start();
        }
    })
</script>

<slot />
