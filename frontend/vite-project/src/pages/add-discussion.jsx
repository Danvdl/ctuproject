// Code by Freek Schaefer 
// Get all element from discusion.html
const dicusionThreat = document.getElementById('discussion-threads');
const topic = document.getElementById('topic');
const author = document.getElementById('author');
const content = document.getElementById('content');
const submit = document.getElementById('submit');

// Add event to when the button is clicked
submit.addEventListener('click', function(){
    let discussion = document.createElement('li');

    // Heading/ topic
    let heading = document.createElement('h3');
    heading.innerText = `${topic.value}`;
    discussion.appendChild(heading);

    let authorPar = document.createElement('p');
    authorPar.innerHTML = `Posted by: ${author.value}`;
    discussion.appendChild(authorPar);

    let contentPar = document.createElement('p');
    contentPar.innerHTML = `${content.value}`;
    discussion.appendChild(contentPar);

    let repliesButton = document.createElement('button');
    repliesButton.innerText = "View Replies";
    repliesButton.setAttribute('id','view');
    discussion.appendChild(repliesButton);

    let replies = document.createElement('li');
    replies.setAttribute('class','replies');
    discussion.appendChild(replies);

    dicusionThreat.appendChild(discussion);
});