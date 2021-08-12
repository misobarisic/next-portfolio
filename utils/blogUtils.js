export function getSlugs() {
    const fs = require("fs")
    const slugs = fs
        .readdirSync(`${process.cwd()}/content/posts`)
        .map(folderName => folderName)
    return slugs
}

export function getPosts() {
    const slugs = getSlugs()
    const posts = slugs.map(slug => ({
        slug,
        content: getContent(slug),
        meta: getMeta(slug)
    }))
    return posts
}

export function getNewestPosts() {
    return getPosts().slice().sort(compare)
}

function compare(a, b) {
    const aDate = new Date(a.meta.date)
    const bDate = new Date(b.meta.date)
    return bDate - aDate
}

export function getPostBySlug(slug) {
    const content = getContent(slug)
    const meta = getMeta(slug)
    return {slug, content, meta}
}

export function getNeighborPosts(slug) {
    const posts = getNewestPosts()
    const currentPostIndex = posts.findIndex(post => post.slug === slug)

    let previousPost = posts[currentPostIndex + 1] || {}
    let nextPost = posts[currentPostIndex - 1] || {}

    // Only return slug and title
    if (previousPost && previousPost.meta) previousPost = {slug: previousPost.slug, title: previousPost.meta.title}
    if (nextPost && nextPost.meta) nextPost = {slug: nextPost.slug, title: nextPost.meta.title}

    return {previousPost, nextPost}
}

export function formatDate(date) {
    const options = {year: "numeric", month: "long", day: "numeric"};
    return date.toLocaleDateString("en-US", options);
}

function getContent(slug) {
    const fs = require("fs")
    return fs.readFileSync(`${process.cwd()}/content/posts/${slug}/content.md`).toString()
}

function getMeta(slug) {
    const fs = require("fs")
    const meta = JSON.parse(fs.readFileSync(`${process.cwd()}/content/posts/${slug}/meta.json`).toString())
    meta.date = formatDate(new Date(meta.date))
    return meta
}
