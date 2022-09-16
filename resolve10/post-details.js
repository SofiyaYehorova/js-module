const url = new URL(location.href);
const id = url.searchParams.get('id');

const newDiv = document.createElement('div');
newDiv.classList.add('main_block_3');
document.body.appendChild(newDiv);

const h3 = document.createElement('h2');
h3.classList.add('comments');
h3.innerText = 'user posts';
newDiv.appendChild(h3);


fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then(value => value.json())
    .then(value=>{
        const comments = document.createElement('div');
        comments.className = 'name_of_posts';
        newDiv.appendChild(comments);

        const ul = document.createElement('ul');
        comments.appendChild(ul);

        for (const comment of value) {

            let li = document.createElement('li');
            li.innerText = `${comment.body}`;
            ul.appendChild(li);

        }

    })