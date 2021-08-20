<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	 export async function load({session}) {

       
		if (!session?.user) {
			return {
				status: 302,
				redirect: '/'
			};
		}

		return {
            props: {
                test: 'This is some test response'
            }
        }
	 }
</script>

<script lang="ts">
import { onMount } from "svelte";

    export let test;

    onMount(() => {
        console.log('ABOUT MOUNT');
    })

</script>

<svelte:head>
	<title>About • Quicknotes</title>
</svelte:head>

<h1>About</h1>

<h2>{test}</h2>




<input type="text" name="" id="" bind:value={test}>

<p>
	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
	labore et dolore magna aliqua. Vel quam elementum pulvinar etiam non quam lacus suspendisse.
	Euismod nisi porta lorem mollis aliquam ut porttitor leo. Velit laoreet id donec ultrices
	tincidunt arcu non sodales neque. Quis vel eros donec ac. Turpis massa sed elementum tempus. Massa
	tincidunt dui ut ornare lectus. Quis auctor elit sed vulputate mi sit amet mauris. Aliquam etiam
	erat velit scelerisque in dictum non consectetur. Ut tortor pretium viverra suspendisse potenti.
	Etiam non quam lacus suspendisse faucibus interdum posuere lorem. Enim sit amet venenatis urna
	cursus eget. Malesuada fames ac turpis egestas sed tempus urna et pharetra. Posuere sollicitudin
	aliquam ultrices sagittis orci. Metus aliquam eleifend mi in.
</p>
<p>
	Phasellus vestibulum lorem sed risus ultricies tristique. Mi tempus imperdiet nulla malesuada. Sit
	amet mattis vulputate enim. Nisl condimentum id venenatis a condimentum. Nisi quis eleifend quam
	adipiscing vitae proin sagittis nisl rhoncus. Semper eget duis at tellus at. Cursus eget nunc
	scelerisque viverra mauris in aliquam sem fringilla. Molestie nunc non blandit massa enim. Ipsum
	nunc aliquet bibendum enim facilisis gravida neque. Lectus sit amet est placerat in egestas erat.
	Id venenatis a condimentum vitae sapien pellentesque. Dolor magna eget est lorem ipsum dolor sit
	amet consectetur. Pretium aenean pharetra magna ac placerat vestibulum. Imperdiet dui accumsan sit
	amet nulla. Scelerisque felis imperdiet proin fermentum leo vel orci porta. Magna eget est lorem
	ipsum dolor.
</p>
<p>
	Cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Varius vel pharetra vel
	turpis. Dictum non consectetur a erat nam. Faucibus ornare suspendisse sed nisi lacus sed viverra
	tellus. Facilisis volutpat est velit egestas dui. Elit duis tristique sollicitudin nibh sit.
	Semper auctor neque vitae tempus. Mauris vitae ultricies leo integer malesuada nunc. Nulla
	facilisi etiam dignissim diam quis enim. Aliquet sagittis id consectetur purus ut faucibus
	pulvinar. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc. Adipiscing
	commodo elit at imperdiet dui.
</p>
<p>
	Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Elit at imperdiet dui accumsan.
	Amet porttitor eget dolor morbi non. Felis eget nunc lobortis mattis aliquam. Maecenas accumsan
	lacus vel facilisis volutpat. Purus semper eget duis at tellus at. Aliquam sem fringilla ut morbi.
	Scelerisque varius morbi enim nunc faucibus a pellentesque sit. Bibendum neque egestas congue
	quisque. Leo in vitae turpis massa sed. Mi bibendum neque egestas congue quisque egestas diam in
	arcu.
</p>
<p>
	Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Ut aliquam purus sit amet luctus
	venenatis lectus magna fringilla. Sociis natoque penatibus et magnis. Faucibus et molestie ac
	feugiat sed lectus. Massa tincidunt dui ut ornare lectus sit amet. Sodales ut etiam sit amet nisl
	purus. Sed id semper risus in hendrerit gravida. Ornare arcu dui vivamus arcu felis bibendum ut
	tristique et. Purus ut faucibus pulvinar elementum integer. Suspendisse potenti nullam ac tortor
	vitae purus. Vitae turpis massa sed elementum. Nec ultrices dui sapien eget mi proin sed.
</p>
