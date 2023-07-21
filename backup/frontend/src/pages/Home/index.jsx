import { useEffect, useState } from "react";
import { NavigationBar } from "../../components";

function Home() {
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            console.log("fetching api");
            fetch("/api/posts/")
                .then(response => {
                    return response.text()
                })
                .then(data => {
                    console.log(data)
                })
            // const response = await fetch('/api/posts/');
            // const json = await response.json();
            // console.log(response.text());
            // console.log(response.json());
            // if (response.ok) {
            //     setPosts(json);
            // }
            // console.log("finished");

        };

        fetchPosts();
    }, []);

    

    return (
        <div className="home">
            <NavigationBar />
            {
                posts == null? <h3>Loading...</h3> : <h3>FFF</h3>
            }
        </div>
    )
}

export default Home;