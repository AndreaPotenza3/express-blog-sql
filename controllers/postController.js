const postsList = require('../data/posts')
let lastIndex = postsList.at(-1).id
// INDEX

function index(req, res) {
    res.json(postsList)
}

// SHOW

function show(req, res) {
    const id = parseInt(req.params.id)
    const post = postsList.find(post => post.id === id);
    if(!post){
        return res.json({
        error: "Not Found",
        message: "Post non trovato"
        })
        }
    res.json(post)
}

// STORE

function store(req, res) {
    lastIndex ++
    const newPost = {
        id: lastIndex,
        title: req.body.title,
        slug: req.body.slug,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    }

    postsList.push(newPost)
    res.send('Creazione del post')
    console.log(postsList)
}

// UPDATE

function update(req, res) {
    const id = parseInt(req.params.id)
    const post = postsList.find(post => post.id === id);
    const {title, slug, image, content, tags} = req.body
    post.title = title
    post.image = image
    post.content = content
    post.slug = slug
    post.tags = tags
    // res.send(`Aggiornato il post con id ${id}`)
    res.json(post)
}



// MODIFY

function modify(req, res) {
    const id = parseInt(req.params.id)
    const post = postsList.find(post => post.id === id)
    const {title, slug, image, content, tags} = req.body
    if(title)
        post.title = title

    if(image)
        post.image = image
    
    if(content)
        post.content = content

    if(slug)
        post.slug = slug

    if(tags)
        post.tags = tags

    // res.send(`Modificato il post con id ${id}`)
    res.json(post)
    console.log(postsList)
}

// DELETE

function destroy(req, res) {
    const id = parseInt(req.params.id)
    const postIndex = postsList.findIndex((post) => post.id === id)
    
    if(postIndex === -1) {
        res.status(404)
        return res.json({
            error:  "Post not found",
            message: "Post non trovato"
        })
    }

    postsList.splice(postIndex, 1)
    res.sendStatus(204)
    console.log(postsList)

}

module.exports = { index, show, store, update, modify, destroy }