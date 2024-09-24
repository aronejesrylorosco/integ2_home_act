function createPost() {
    const postText = document.getElementById("post-text").value;
    const postImage = document.getElementById("post-image").files[0];
  
    // Simple validation (you can add more)
    if (!postText && !postImage) {
      alert("Please enter some text or choose an image.");
      return;
    }
  
    // Create a new post element
    const newPost = document.createElement("div");
    newPost.classList.add("post");
  
    // Add the post content
    const postContent = document.createElement("div");
    postContent.classList.add("post-content");
    postContent.textContent = postText;
    newPost.appendChild(postContent);
  
    // Add the image if selected
    if (postImage) {
      const postImageElement = document.createElement("img");
      postImageElement.classList.add("post-image");
      postImageElement.src = URL.createObjectURL(postImage); // Use URL.createObjectURL to display the image
      newPost.appendChild(postImageElement);
    }
  
    // Add actions (like, comment, share)
    const postActions = document.createElement("div");
    postActions.classList.add("post-actions");
    const likeButton = document.createElement("button");
    likeButton.textContent = "Like";
    likeButton.onclick = function() {
      // Implement like functionality (e.g., change button text)
      alert("Liked!");
    };
    postActions.appendChild(likeButton);
  
    // Add more action buttons (comment, share) similarly
  
    newPost.appendChild(postActions);
  
    // Append the new post to the container
    document.getElementById("posts-container").appendChild(newPost);
  
    // Clear the form fields
    document.getElementById("post-text").value = "";
    document.getElementById("post-image").value = "";
  }