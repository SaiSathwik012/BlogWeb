import { useState } from "react";
import {useHistory} from "react-router-dom";

const Create = () => {
    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');
    const [author,setAuthor]=useState('');
    const [pending,setPending]=useState(false);
    const history=useHistory();
    const handleSubmit=(e)=>{
        e.preventDefault();
        const blog={title,body,author};
        
        fetch('http://localhost:3000/blogs',{
            method:'POST',
            headers:{"Content-Type":"application/json" },
            body:JSON.stringify(blog)
        }).then(() => {
            console.log("New Blog added");
            setPending(false);
        })
        history.push('/');
    }

    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input type="text" required value={title} onChange={(e)=> setTitle(e.target.value)}/>
                <label>Blog Body:</label>
                <textarea required value={body} onChange={(e)=> setBody(e.target.value)}>
                </textarea>
                <label>Blog Author:</label>
                <select value={author} onChange={(e)=> setAuthor(e.target.value)} required>
                    <option value="sathwik">Select</option>
                    <option value="Jaya">Jaya</option>
                    <option value="Sumanth">Sumanth</option>
                    <option value="sathwik">Sathwik</option>
                    <option value="Tarun">Tarun</option>
                </select>
                { !pending && <button>Add Content</button>}
                { pending && <button disabled>Wait..</button>}
                <h3>Title:</h3>
                <p>{title}</p>
                <h3>Author:</h3>
                <p>{author}</p>
                <h3>Content:</h3>
                <p>{body}</p>
            </form>
        </div>
     );
}
 
export default Create;