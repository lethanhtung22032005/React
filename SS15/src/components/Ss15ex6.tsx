import React, { useState } from "react";

type Post = {
    id: number;
    title: string;
    content: string;
    author: string;
};

function DetailPost({ post }: { post: Post }) {
    return (
        <div>
            <p>Id: {post.id}</p>
            <p>Title: {post.title}</p>
            <p>Content: {post.content}</p>
            <p>Author: {post.author}</p>
            <hr />
        </div>
    );
}

export default function Ss15ex6() {
    const [posts] = useState<Post[]>([
        { id: 1, title: "Tại sao nên học ReactJS", content: "Học ReactJS dễ đi làm", author: "David" },
        { id: 2, title: "Props trong ReactJS", content: "Props giúp truyền dữ liệu từ component con xuống component cha", author: "Linda" },
        { id: 3, title: "State trong ReactJS là gì?", content: "State giúp lưu trữ dữ liệu bên trong một component", author: "David" },
    ]);

    return (
        <div>
            <h2>Danh sách bài viết</h2>
            {posts.map((post) => (
                <DetailPost key={post.id} post={post} />
            ))}
        </div>
    );
}
