import { useEffect, useState } from "react";
import Post from "../Post";
 
function IndexPage() {

    const [posts,setPosts] = useState([]);

    useEffect(() => {
        fetch('todo-app-mernstack-backend.vercel.app/post').then(response => {
            response.json().then(posts => {
                setPosts(posts);
            });
        });
    },[]);

    return ( 
        <>
            {posts.length > 0 && posts.map(post => (
                <Post {...post}/>
            ))}
        
        </>
     );
}

export default IndexPage;
