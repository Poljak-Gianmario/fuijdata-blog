import {useState, useEffect} from "react"
import client from "../client"
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Blog() {
    const [posts,setPosts] = useState([])

    useEffect(() => {
        client.fetch(
            `*[_type == "post"] {
                title, 
                slug,
                body,
                mainImage{
                    asset -> {
                        _id,
                        url
                    },
                    alt
                }
            }`
        ).then((data) => setPosts(data))
        .catch(console.error)
    }, [])

    return (

        <div>

     
        <section className="px-5 xl:max-w-7xl 2xl:mx-auto">

            <h1 className="font-bold text-4xl mt-5 mb-10 tracking-widest text-centere md:text-6xl"> Blog </h1>
            <h2 className="text-xl text-center mb-10"> You are viewing {posts.length} blog posts </h2>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3
            2xl:max-w-8x">

                {posts.map((post) => (
                    <article key = {post.slug.current}>
                        <img src={post.mainImage.asset.url}
                        alt = {post.title} />
                        <h4 className="text-xl mt-2"> {post.title} </h4>
                        <button className="mt-5 mb-10">
                        <Link to={`/blog/${post.slug.current}`} className="py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent
                        border-2 border-black transition-all duration-500 hover:text-black font--bold"> Read Full Article </Link>
                        </button>
                    </article>
                ))}
            </div>
        </section>
        <Footer/>

        </div>
  
        
    )

    
     
}