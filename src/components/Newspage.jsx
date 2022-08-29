import '../App.css'
import Navbar from './Navbar';
import Footer from './Footer';
import { useEffect, useState } from 'react';

function Newspage() {
    const [newsData, setNewsData] = useState([]);
console.log(newsData)
  useEffect(()=> {
    fetchNewsData();
  },[])


  const fetchNewsData = async () => {
    try {
      const api = '3ae2caff274841f79a27197761f71e0f';
      const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${api}`)
      const data = await res.json();
      setNewsData(data.articles);
    } catch {
      window.alert('this website is under maintainence sorry for the interruption');
    }
  }

  return (
      <>
      <Navbar />
      <div className='mainDiv'>
      {newsData.map((news) => {
        return (
          <>
          
            <div className='imageDiv'>
            <p className='newsHeading'>{news.title}</p>
            <img src={news.urlToImage} alt='news reporter lost camera ...'>
            </img>
            <p className='newsDes'>
              {news.content}
            </p>
            <div className='newsfooter'>
            <a href={news.url} target= "blank" >click here to read full news</a>
            <p> -- {news.source.name}</p>
          </div>
          </div>
          </>
          
        )
      })}
    </div>
    <Footer />
      </>
    );
}

export default Newspage;