const apiBaseUrl = 'https://jsonplaceholder.typicode.com';

/**
 * @typedef {object} Todo
 * @property {number} todo.id
 * @property {string} todo.title
 * @property {boolean} todo.completed
 */

/**
 * @typedef {object} TodoWithoutId
 * @property {string} todo.title
 * @property {boolean} todo.completed
 */

/**
 * @returns {Promise<Todo[]>}
 */
async function fetchTodos() {
  const res = await fetch(apiBaseUrl + "/todos");
  return await res.json();
}

/**
 * @param {TodoWithoutId} todoDto
 * @returns {Promise<Todo>}
 */
async function postTodo(todoDto) {
  const res = await fetch(apiBaseUrl + "/todos", {
    method: "POST",
    body: JSON.stringify(todoDto),
    headers: {
      "Content-type": "application/json",
    },
  });

  return await res.json();
}
