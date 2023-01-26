const ul = document.querySelector("ul");
const input = document.querySelector("input");
const addBtn = document.querySelector("button");

addBtn.addEventListener("click", () => {
	const itemValue = input.value;
	input.value = "";

	const li = document.createElement("li");
	const span = document.createElement("span");
	const deleteBtn = document.createElement("button");

	li.appendChild(span);
	span.textContent = itemValue;

	li.appendChild(deleteBtn);
	deleteBtn.textContent = "Delete";

	ul.appendChild(li);

	deleteBtn.addEventListener("click", () => {
		ul.removeChild(li);
	});

	input.focus();
});
