import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

const xhr = new XMLHttpRequest();
xhr.open('GET', '/images?query=woman');
xhr.send();
xhr.onload((res) => {
	console.log(res);
});

window.app = app;

export default app;
