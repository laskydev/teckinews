import React,{Suspense, lazy} from 'react';
import useNews from '../hooks/useNews';

//Import component with Lazy loading
const Card = lazy(()=> import('./Card'))

const News = ({category}) => {
    //News Array returned by the custom hook
    const arrNews = useNews(category)
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-3 justify-items-center">
            {arrNews.map(news => (
                <Suspense fallback={<h2>Loading...</h2>}>
                <Card
                    key={news.url}
                    title = {news.title}
                    description={news.description}
                    imgSource={news.urlToImage}
                    source={news.source.name}
                    url={news.url}
                    category={category}
                />
                </Suspense>
            ))}
        </div>
    );
}

export default News