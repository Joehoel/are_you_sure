chrome.extension.sendMessage({}, response => {
	const readyStateCheckInterval = setInterval(() => {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval)
			console.log("Hello from inject.js")

			const cartButton = document.querySelector("#add-to-cart-button")

			cartButton.style.pointerEvents = "none"
		}
	}, 10)
})
