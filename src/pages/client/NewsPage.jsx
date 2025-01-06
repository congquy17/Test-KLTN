import { useEffect, useState } from 'react';

export default function NewsPage() {
    const slug = 'example-slug'; // Slug giả lập
    const [post, setPost] = useState(null);

    // Dữ liệu giả lập
    const mockData = [
        {
            slug: 'example-slug',
            title: 'How to Code a Blog with React and Node.js',

            author: 'John Doe',
            content: [
                { type: 'h2', value: 'Introduction' },
                {
                    type: 'p',
                    value: 'In this blog, we will explore how to create a blog with React and Node.js.aaaa g with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaag with React and Node.js.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                },
                {
                    type: 'p',
                    value: 'In this blog, we will explore how to create a blog with React and Node.js.'
                },
                {
                    type: 'p',
                    value: 'In this blog, we will explore how to create a blog with React and Node.js.'
                },
                { type: 'image', value: 'https://via.placeholder.com/600x300' },
                { type: 'image', value: 'https://via.placeholder.com/600x300' },
                { type: 'image', value: 'https://via.placeholder.com/600x300' },
                { type: 'h2', value: 'Step 1: Setup Backend' },
                {
                    type: 'p',
                    value: 'First, we need to set up our backend with Node.js and Express.'
                },
                { type: 'image', value: 'https://via.placeholder.com/600x300' }
            ]
        },
        {
            slug: 'another-post',
            title: 'Tips for Better Coding Practices',
            author: 'Jane Smith',
            content: [
                { type: 'h2', value: 'Why Good Practices Matter' },
                {
                    type: 'p',
                    value: 'Good coding practices ensure your code is maintainable and scalable.'
                },
                { type: 'image', value: 'https://via.placeholder.com/600x300' }
            ]
        }
    ];

    useEffect(() => {
        // Tìm bài viết từ mockData theo slug
        const foundPost = mockData.find((item) => item.slug === slug);
        if (foundPost) {
            setPost(foundPost);
        } else {
            console.error('Post not found');
        }
    }, [slug]);

    if (!post)
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-gray-500 text-xl">Loading...</p>
            </div>
        );

    return (
        <div className="max-w-3xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{post.title}</h1>
            <p className="text-sm text-gray-600 mb-6">By {post.author}</p>
            <div className="space-y-6">
                {post.content.map((block, index) => {
                    if (block.type === 'h2')
                        return (
                            <h2 key={index} className="text-2xl font-semibold text-gray-700 mt-4">
                                {block.value}
                            </h2>
                        );
                    if (block.type === 'p')
                        return (
                            <p key={index} className="text-gray-700 leading-relaxed">
                                {block.value}
                            </p>
                        );
                    if (block.type === 'image')
                        return (
                            <div key={index} className="my-4">
                                <img src={block.value} alt="" className="rounded-lg shadow-md w-full" />
                            </div>
                        );
                    return null;
                })}
            </div>
        </div>
    );
}
