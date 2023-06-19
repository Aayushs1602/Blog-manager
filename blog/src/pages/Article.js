import React from 'react'
import CommentsList from '../Components.js/CommentsList'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import articleContent from './Article-content'
import Articles from '../Components.js/Articles'
import NotFound from './NotFound'
import AddCommentForm from '../Components.js/AddCommentForm'

const Article = () => {
    const {name} = useParams()
    const article = articleContent.find((article) => name === article.name)
    const [articleInfo, setArticleInfo] = useState({comments: []})

    useEffect(()=>{
        const fetchData = async ()=>{
            const result = await fetch(`/api/articles/${name}`)
            const body = await result.json()
            console.log(body)
            setArticleInfo(body)
        }
        fetchData();
    }, [name])
    if (!article) return ( <NotFound /> )
    const OtherArticles =  articleContent.filter(article => article.name !== name)
    // console.log(articleInfo.comments)
    return (
        <>
            <h1 className='sm:text-4xl text-2xl font-bold text-gray-900'>
                {article.title}
            </h1>
            {article.content.map((p, index) =>(
                <p className='mx-auto leading-relaxed text-base mb-4 mt-4' key={index}>{p}</p>
            ))}
            
            <CommentsList comments={articleInfo.comments}/>
            <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />           
            <h1 className='sm:text-2xl text-4xl font-bold my-4 text-gray-900'>
                Other Articles
            </h1>
            <div className='flex flex-wrap -m-4'>
                <Articles articles={OtherArticles}/>
            </div>
        </>
    )
}

export default Article;