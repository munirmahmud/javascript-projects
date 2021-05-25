const coursesList = document.querySelector("#courses-list"),
  cartContent = document.querySelector("#cart-content tbody");

const buyCourse = (e) => {
  e.preventDefault();

  const cartBtn = e.target;

  // Event delegation to find the course
  if (cartBtn.classList.contains("add-to-cart")) {
    const course = cartBtn.parentElement.parentElement;

    // Read the values
    getCourseDetails(course);
  }
};

const getCourseDetails = (course) => {
  // Create an object with course data
  const courseInfo = {
    image: course.querySelector("img").src,
    title: course.querySelector("h4").textContent,
    price: course.querySelector(".price span").textContent,
    id: course.querySelector("a").getAttribute("data-id"),
  };

  // Insert into the shopping cart
  addToCart(courseInfo);
};

const addToCart = (course) => {
  // create a tr tag
  const tr = document.createElement("tr");
  tr.innerHTML = `
        <td><img src="${course.image}" alt="${course.image}" /></td>
        <td>${course.title}</td>
        <td>${course.price}</td>
        <td>
            <a href="#" class="remove" data-id="${course.id}">X</a>
        </td>
    `;

  cartContent.prepend(tr);
};

// Event listeners
const eventListeners = () => {
  coursesList.addEventListener("click", buyCourse);
};

eventListeners();
