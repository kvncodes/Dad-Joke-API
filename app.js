const btn = document.querySelector("#btn");
const text = document.querySelector("#text");

const getDadJoke = async () => {
	try {
		const headers = { headers: { Accept: "application/json" } };
		const res = await fetch("https://icanhazdadjoke.com", headers);

		if (res.status !== 200) {
			console.log("Error", res.status);
		} else {
			const data = await res.json();
			text.textContent = data.joke;
		}
	} catch (e) {
		console.log(e);
	}
};

btn.addEventListener("click", getDadJoke);
