import blogData from '../data/blogs'
const imageStyle = {
    marginInline:'auto',
    objectFit:'cover',
    maxHeight:'400px',
    height:'auto',
    maxWidth:'900px',
    Width:'100%'
}


const Blog = () => {
    const blog = blogData[1];
    return (
        <>
        <h2> {blog.title}  </h2>
        <p> {blog.title}</p>
        <img style={imageStyle} src={`https://picsum.photos/id/${Math.floor(Math.random()*100)}/300/200`} />
        <p>{blog.description}</p>
        </>
    )
}

export default Blog;