import blogData from '../data/blogs'

const imageStyle = {
    objectFit: 'cover',
    maxHeight: '400px',
    height: 'auto',
    maxWidth: '900px',
    width: '100%',
    display: 'block',
    margin: '0 auto',
}

const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',    
    height: 'auto',          
    margin: '20px 0',        
}

const Blog = () => {
    const blog = blogData[1];
    return (
        <>
        <h1 style={{textAlign:'center'}}> {blog.title}  </h1>
        <p style={{textAlign:'center',fontSize:'22px'}}> {blog.intro}</p>
        <div style={containerStyle}>
                <img style={imageStyle} src={`https://picsum.photos/id/${Math.floor(Math.random() * 100)}/300/200`} alt="Blog" />
         </div>
        <p style={{marginInline:'25px',fontSize:'18px',lineHeight:'30px',textAlign:'justify'}}>{blog.description}</p>
        </>
    )
}

export default Blog;