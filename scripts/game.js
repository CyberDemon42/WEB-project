document.getElementById('submit-comment').addEventListener('click', function(){
    const newComment = document.getElementById('new-comment').value;
            if (newComment.trim() === "") {
                alert("Comment cannot be empty.");
                return;
            }
            const commentDiv = document.createElement('div');
            commentDiv.classList.add('list-group-item', 'bg-dark', 'text-white', 'comment');
            commentDiv.innerHTML = `<strong>You:</strong> ${newComment}`;
            document.getElementById('comments-list').appendChild(commentDiv);
            document.getElementById('new-comment').value = "";  // Clear the input field
})