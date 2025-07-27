import React from 'react';
import Post from './Post';

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            hasError: false
        };
    }

    loadPosts = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();

            const postList = data.map((post) => new Post(post.id, post.title, post.body));
            this.setState({ posts: postList });
        } catch (error) {
            console.error("Error fetching posts:", error);
            this.setState({ hasError: true });
        }
    };

    componentDidMount() {
        this.loadPosts();
    }

    componentDidCatch(error, info) {
        alert("Something went wrong while rendering the component.");
        console.error("Error caught by componentDidCatch:", error, info);
        this.setState({ hasError: true });
    }

    render() {
        const { posts, hasError } = this.state;

        if (hasError) {
            return <h2 style={{ color: 'red' }}>Error occurred while loading posts.</h2>;
        }

        return (
            <div style={{ padding: "20px" }}>
                <h1>Posts</h1>
                {posts.map((post) => (
                    <div key={post.id} style={{ marginBottom: "20px", borderBottom: "1px solid #ccc" }}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default Posts;
