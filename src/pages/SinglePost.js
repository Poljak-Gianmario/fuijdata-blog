import {useState, useEffect} from "react"
import {Link, useParams} from "react-router-dom"
import client from "../client"
import BlockContent from "@sanity/block-content-to-react"
import {PortableText} from '@portabletext/react'

export default function Singlepage() {

    const [singlePost, setSinglePost] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { slug } = useParams()

    useEffect(() => {
        client.fetch(
            `*[slug.current == "${slug}"]{
                title,
                body,
                mainImage {
                    assert -> {
                        _id,
                        url
                    },
                    alt
                }
            }`

        ).then((data) => setSinglePost (data[0]))
        setIsLoading(false)
    }, [slug])

    const serializers = {
        types: {
          code: (props) => (
            <pre data-language={props.node.language}>
              <code>{props.node.code}</code>
            </pre>
          ),
        },
      }

 console.log(singlePost.body)
    
        return(
        <>
        {
        isLoading ? <h1> Loading...</h1>:

            <section className="px-5 xl:max-w-6xl xl:mx-auto bg-primary-content p.solid {border-style: solid;}">

                <h1 className="uppercase body-1  text-4xl tracking-wide mb-5 md:text-6xl lg:text-8xl
                text-center mt-5 text-neutral-focus "> {singlePost.title}
                </h1>

                {singlePost.mainImage && singlePost.mainImage.asset && (
                                    <img src = {singlePost.mainImage.asset.url} alt={singlePost.title}
                                    title={singlePost.title}
                                    className="blog__image rounded-t"/>
                )}


                <p> By Poljak Gianmario </p>

                

                <div className="block__content body-1 bg-primary-content">
                    
                    
                    <BlockContent

                        blocks={singlePost.body}
                        

                                      
                        projectId="xwaa9bgu"
                        dataset="production"
                    />
                    
                </div>

                <button>
                    <Link to="/blog" className="py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent
                    border-2 border-black transition-all duration-500 hover:text-black font--bold"> Read more articles </Link>

                </button>
            </section>
        }
        </>
        )   
}
