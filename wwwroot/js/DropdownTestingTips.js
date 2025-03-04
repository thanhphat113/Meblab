document.addEventListener("DOMContentLoaded", function () {
	let accordions = document.querySelectorAll(".accordion-item");
	console.log(accordions)

	accordions.forEach((accordion) => {
		accordion.addEventListener("click", function () {
			let content = this.querySelector(".accordion-content");
			let icon = this.querySelector(".accordion-icon");


			if (content.classList.contains("max-h-0")) {
				content.classList.remove("max-h-0", "opacity-0")
				content.classList.add("max-h-w-[500px]", "opacity-100", "pt-4")
			}
			else {
				content.classList.remove("max-h-w-[500px]", "opacity-100", "pt-4")
				content.classList.add("max-h-0", "opacity-0")
			}

			if (icon.classList.contains("fa-plus")) {
				icon.classList.replace("fa-plus", "fa-minus");
			} else {
				icon.classList.replace("fa-minus", "fa-plus");
			}
		});
	});
});