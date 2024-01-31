const fruitsArray = ["Banana", "Mango", "Orange"];

const addFruitsToArray = () => {
  const input = document.getElementById("fruit-input");

  if (input.value !== "") {
    fruitsArray.push(input.value);
    
    renderFruitsArray();
  } else {
    alert("Enter a fruit name");
  }
};

const renderFruitsArray = () => {
  const container = document.getElementById("container");
  container.innerHTML = "";

  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.id = "fruit-input";
  container.append(input);

  const button = document.createElement("button");
  button.innerText = "Add";

  button.addEventListener("click", addFruitsToArray);

  container.append(button);

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

renderFruitsArray();
