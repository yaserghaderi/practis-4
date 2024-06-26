
document.addEventListener("DOMContentLoaded", () => {
  const userContainer = document.getElementById("user-container");

  async function fetchUsers() {
    try {
      const response = await fetch("https://dummyjson.com/users");
      const json = await response.json();
      displayUsers(json.users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }

  function displayUsers(users) {
    users.forEach(user => {
      const userDiv = document.createElement("div");
      userDiv.className = "user";

      const userAvatar = document.createElement("img");
      userAvatar.src = user.image;
      userDiv.appendChild(userAvatar);

      const userInfo = document.createElement("div");

      const userName = document.createElement("p");
      userName.innerHTML = `<h2>${user.firstName} ${user.lastName}</h2>`;
      userInfo.appendChild(userName);

      const userEmail = document.createElement("p");
      userEmail.innerHTML = `<strong>${user.email}</strong>`;
      userInfo.appendChild(userEmail);

      userDiv.appendChild(userInfo);
      userContainer.appendChild(userDiv);
    });
  }

  fetchUsers();
});
