document.getElementById('getText').addEventListener('click', getText);
document.getElementById('comments').addEventListener('click', getComments);;
function getText() {

  fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((data) => {
    let output = '<h1>Recent Posts</h1>'
    data.forEach((post) => {
      output += `
        <h3>${post.id} ${post.title}</h3>
        <p>${post.body}</p>
        <button id='comments'}>comments</button>
      `
    })
    document.getElementById('postContainer').innerHTML = output;
  })
}

document.getElementById('comments').addEventListener('click', getComments);;

function getComments() {
  fetch('https://jsonplaceholder.typicode.com/comments')
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
  })
}
