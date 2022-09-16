
const url = new URL(location.href);
const id = url.searchParams.get('id');


const mDiv = document.createElement('div');
mDiv.classList.add('main_block_2');
document.body.appendChild(mDiv);

const h2 = document.createElement('h2');
h2.classList.add('info');
h2.innerText = 'user information';
mDiv.appendChild(h2);

const detDiv = document.createElement('div');
detDiv.classList.add('details');
mDiv.appendChild(detDiv);

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
.then((response) => response.json())

    .then(user => {

        for (const key in user) {
            if (typeof user[key] !== 'object') {
                const paragraph1 = document.createElement('div');
                paragraph1.className = 'info_1';
                paragraph1.innerText = `${key} ${user[key]}`;

                detDiv.appendChild(paragraph1);


            } else {
                for (const item in user[key]) {
                    if (typeof user[key][item] !== 'object') {
                        const paragraph2 = document.createElement('div');
                        paragraph2.className = 'info_1';
                        paragraph2.innerText = `${item} ${user[key][item]}`;

                        detDiv.appendChild(paragraph2);

                    } else {
                        for (const detail in user[key][item]) {
                            if (typeof user[key][item][detail] !== 'object') {
                                const paragraph3 = document.createElement('div');
                                paragraph3.className = 'info_1';
                                paragraph3.innerText = `${detail} ${user[key][item][detail]}`;

                                detDiv.appendChild(paragraph3);
                            }
                        }
                    }
                }

            }
        }

                    const button2 = document.createElement('button');
                    button2.classList.add('button2');
                    button2.innerText = 'More info';
                    mDiv.appendChild(button2);

                    button2.onclick=()=>{
                        fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
                            .then(value => value.json())
                            .then(value=>{
                                const postsDiv = document.createElement('div');
                                postsDiv.className= 'name_of_posts';
                                document.body.appendChild(postsDiv);

                                for (const post of value) {

                                    const postDiv = document.createElement('div');
                                    postDiv.innerText = `${post.title}`;
                                    postDiv.className = 'title';
                                    postsDiv.appendChild(postDiv);

                                    const button3 = document.createElement('button');
                                    button3.className='button3';
                                    postDiv.appendChild(button3);

                                    const a2 = document.createElement('a');
                                    a2.href = `post-details.html?id=${post.id}`;
                                    a2.className='decor_1'
                                    a2.innerText = 'post of current user';
                                    button3.appendChild(a2);
                                }

                            })
                    }
        })




















