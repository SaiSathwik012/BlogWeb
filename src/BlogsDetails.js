import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
import { MdDelete } from "react-icons/md";
const BlogsDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch(`http://localhost:3000/blogs/${id}`);
    const history=useHistory();

    const handleClick=()=>{
        fetch(`http://localhost:3000/blogs/${blog.id}`,{
            method:'DELETE'
        }).then(()=>{
            history.push('/');
        })
    }

    return (
        <div className="blogs-details">
            { isPending && <div>Loading....</div>}
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>-Written By { blog.author }</p>
                    <div>{ blog.body }</div>
                    <button onClick={handleClick}><MdDelete /></button>
                </article>
            )}
        </div>
    );
}

export default BlogsDetails;
