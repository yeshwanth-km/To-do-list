document.getElementById('addTaskButton').addEventListener('click', function() {
    const title = document.getElementById('taskTitleInput').value.trim();
    const description = document.getElementById('taskDescriptionInput').value.trim();
  
    if (title === "") {
      alert("Please enter a task title.");
      return;
    }
  
    const taskList = document.getElementById('taskList');
  
    // Create the task element
    const taskElement = document.createElement('li');
    taskElement.classList.add('task');
  
    // Create the task header with checkbox, title, and action buttons
    const taskHeader = document.createElement('div');
    taskHeader.classList.add('task-header');
  
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('task-checkbox');
  
    const taskTitle = document.createElement('span');
    taskTitle.classList.add('task-title');
    taskTitle.textContent = title;
  
    const editButton = document.createElement('button');
    editButton.classList.add('edit-btn');
    editButton.textContent = 'Edit';
  
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.textContent = '❌';
  
    // Add the header elements to task header
    taskHeader.appendChild(checkbox);
    taskHeader.appendChild(taskTitle);
    taskHeader.appendChild(editButton);
    taskHeader.appendChild(deleteButton);
  
    // Create the task description
    const taskDescription = document.createElement('div');
    taskDescription.classList.add('task-description');
    taskDescription.textContent = description || "Description (Optional)"; // Default text if no description
  
    // Append the header and description to the task element
    taskElement.appendChild(taskHeader);
    taskElement.appendChild(taskDescription);
  
    // Add the task to the list
    taskList.appendChild(taskElement);
  
    // Clear the input fields
    document.getElementById('taskTitleInput').value = "";
    document.getElementById('taskDescriptionInput').value = "";
  
    // Add event listener for the delete button
    deleteButton.addEventListener('click', function() {
      taskList.removeChild(taskElement);
    });
  
    // Add event listener for the edit button
    editButton.addEventListener('click', function() {
      document.getElementById('taskTitleInput').value = title;
      document.getElementById('taskDescriptionInput').value = description;
      taskList.removeChild(taskElement);
    });
  
    // Add event listener for the checkbox to mark as completed
    checkbox.addEventListener('change', function() {
      if (checkbox.checked) {
        taskTitle.style.textDecoration = "line-through";
        taskTitle.style.opacity = 0.7;
      } else {
        taskTitle.style.textDecoration = "none";
        taskTitle.style.opacity = 1;
      }
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");
    const body = document.body;
  
    // Check for previously saved theme in localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      body.classList.add(savedTheme);
      themeToggle.textContent = savedTheme === "dark" ? "☀️" : "🌙";
    }
  
    // Toggle light and dark mode
    themeToggle.addEventListener("click", () => {
      body.classList.toggle("dark");
      const isDarkMode = body.classList.contains("dark");
      themeToggle.textContent = isDarkMode ? "☀️" : "🌙";
  
      // Save the theme preference to localStorage
      localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    });
  });
    