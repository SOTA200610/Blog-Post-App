window.onload = () => {
    let postList =[ { title:"Welcome to My Blog", content:"This is my first blog post. I'm excited to share my thoughts and experiences with you all!"} ,
                    { title:"Web Development Tips", content: "Always write clean and maintainable code. Use meaningful variable names and comment your code when necessary."},
                    { title:"Learning JavaScript", content: "JavaScript is a power programming language that enable interactive web development. Today I learned about event listeners and DOM manipulation"}]
    postList.map((post) => createPost(post.title, post.content))

    let addPostBtn = document.getElementById("add-post-btn")
    addPostBtn.addEventListener("click", addPost)
}


// Create the container for one post 
const createPost = (title, content) => {
    const postContainer = document.getElementById("blog-post-container")
    const post = document.createElement("div")
    // Stye each post card
    post.classList.add("blog-post-card")
    
    const titleEl = document.createElement("h3")
    titleEl.textContent = title

    const editTitleBtn = document.createElement("button")
    editTitleBtn.textContent = "Edit Title"
    editTitleBtn.addEventListener("click", (e) => {
        editTitle(e.target.parentElement)
    })

    const contentEl = document.createElement("p")
    contentEl.textContent = content
    
    const editContentBtn = document.createElement("button")
    editContentBtn.textContent = "Edit Content"
    editContentBtn.addEventListener("click", (e) => {
        editContent(e.target.parentElement)
    })

    const deleteBtn = document.createElement("button")
    deleteBtn.textContent= "Delete Post"
    deleteBtn.addEventListener("click", (e) => {
        deletePost(e.target.parentElement)
    })

    // append everything together
    post.appendChild(titleEl)
    post.appendChild(editTitleBtn)
    post.appendChild(contentEl)
    post.appendChild(editContentBtn)
    post.appendChild(deleteBtn)

    postContainer.appendChild(post)



}


const deletePost = (target) => {
    const titleName = target.querySelector("h3")
    const toDelete = confirm(`Are you sure you want to delete "${titleName.textContent}"?`)
    if (toDelete) {
        target.remove()
        alert(`Post "${titleName.textContent}" deleted successfully`)
    }
}

const editTitle = (target) => {
    const titleEl = target.querySelector("h3")
    const newTitle = prompt(`Edit the title for "${titleEl.textContent}`)

    if (newTitle){
        titleEl.textContent = newTitle
    }

}

const editContent = (target) => {
    const contentEl = target.querySelector("p")
    const newContent = prompt(`Edit the content for "${contentEl.textContent}":`)

    if (newContent) {
        contentEl.textContent = newContent
    }
}

// Build addPost()
const addPost = () => {
    const newTitle = prompt("Enter the post title:")
    if (!newTitle) {
        return
    }

    const newContent = prompt("Enter the post content:")
    if (!newContent) {
        return
    }

    createPost(newTitle, newContent)
}




