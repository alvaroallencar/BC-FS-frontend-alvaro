const fruitsArray = ["Banana", "Mango", "Orange"];

const handleAddFruitsToArray = () => {
  const input = document.getElementById("fruit-input");

  if (input.value !== "") {
    fruitsArray.push(input.value);

    renderFruitsArray();
  } else {
    alert("Enter a fruit name");
  }
};

const createInputContainer = (container) => {
  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.id = "fruit-input";

  const button = document.createElement("button");
  button.innerText = "Add";
  button.addEventListener("click", handleAddFruitsToArray);

  const inputContainer = document.createElement("div");

  inputContainer.append(input, button);

  container.append(inputContainer);
};

const createFruitsList = (container) => {
  const ul = document.createElement("ul");

  fruitsArray.forEach((fruitName, index) => {
    const li = document.createElement("li");

    const spanName = document.createElement("span");
    spanName.innerText = fruitName;

    const removeButton = document.createElement("button");
    removeButton.innerText = "x";
    removeButton.id = index;

    removeButton.addEventListener("click", () => {
      fruitsArray.splice(index, 1);

      renderFruitsArray();
    });

    li.append(spanName, removeButton);

    ul.appendChild(li);
  });

  container.appendChild(ul);
};

const renderFruitsArray = () => {
  const container = document.getElementById("container");
  container.innerHTML = "";

  createInputContainer(container);
  createFruitsList(container);
};

renderFruitsArray();
