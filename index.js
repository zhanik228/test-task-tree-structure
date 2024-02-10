const example = {
  services: [
    {
      id: 1,
      head: null,
      name: "Проф.осмотр",
      node: 0,
      price: 100.0,
      sorthead: 20,
    },
    {
      id: 2,
      head: null,
      name: "Хирургия",
      node: 1,
      price: 0.0,
      sorthead: 10,
    },
    {
      id: 3,
      head: 2,
      name: "Удаление зубов",
      node: 1,
      price: 0.0,
      sorthead: 10,
    },
    {
      id: 4,
      head: 3,
      name: "Удаление зуба",
      node: 0,
      price: 800.0,
      sorthead: 10,
    },
    {
      id: 5,
      head: 3,
      name: "Удаление 8ого зуба",
      node: 0,
      price: 1000.0,
      sorthead: 30,
    },
    {
      id: 6,
      head: 3,
      name: "Удаление осколка зуба",
      node: 0,
      price: 2000.0,
      sorthead: 20,
    },
    {
      id: 7,
      head: 2,
      name: "Хирургические вмешательство",
      node: 0,
      price: 200.0,
      sorthead: 10,
    },
    {
      id: 8,
      head: 2,
      name: "Имплантация зубов",
      node: 1,
      price: 0.0,
      sorthead: 20,
    },
    {
      id: 9,
      head: 8,
      name: "Коронка",
      node: 0,
      price: 3000.0,
      sorthead: 10,
    },
    {
      id: 10,
      head: 8,
      name: "Слепок челюсти",
      node: 0,
      price: 500.0,
      sorthead: 20,
    },
  ],
};

const servicesContainer = document.querySelector(".services");

function createTree(parentId, services) {
  const ul = document.createElement("ul");
  services
    .filter((service) => service.head === parentId)
    .forEach((service) => {
      const li = document.createElement("li");
      const span = document.createElement("span");
      span.textContent = service.name;
      li.appendChild(span);
      if (service.node === 0) {
        li.classList.add("nested-item");
      }
      if (service.node > 0) {
        span.classList.add("rightArrow");
        span.classList.add("parent");
      }
      for (let i = 0; i < service.node; i++) {
        const nested = createTree(service.id, services);
        nested.classList.add("nested");
        li.appendChild(nested);
      }
      ul.appendChild(li);
    });
  return ul;
}

servicesContainer.appendChild(createTree(null, example.services));

servicesContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("parent")) {
    event.target.classList.toggle("rightArrow");
    event.target.classList.toggle("arrowDown");
    const nestedList = event.target.parentElement.querySelector(".nested");
    nestedList.classList.toggle("active");
  }
});
