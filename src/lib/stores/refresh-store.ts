import { writable } from 'svelte/store';
import { session } from '$app/stores';

let started: boolean = false;   // Determines whether it started or not
let timeout: any;               // Timeout to clear it on cancel
let time: number = 5000;        //8*60000;     // Time to next refresh


function createCount() {
    const { subscribe, set } = writable(null);

    return {
        subscribe,
        start: () => {
            if (!started) {
                started = true;
                refreshToken();
            }
        },
        cancel: () => {
            clearTimeout(timeout);
            started = false;
        },
        reset: () => set(0)
    };
}


async function refreshToken() {
    timeout = setTimeout(async () => {
        console.log("REFRESH");
        const { user } = await fetch('/auth/token-refresh', { method: 'POST' }).then((r) => r.json());

        if (user) {    
            session.update(v => ({...v, user}));
            refreshToken();
        }

        if (!user) {
            started = false;
        }

    }, time);

}

export const silentRefresh = createCount();