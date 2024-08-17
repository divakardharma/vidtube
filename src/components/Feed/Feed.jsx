import React, { useEffect, useState } from 'react';
import './Feed.css';
import Thumbnail1 from '../../assets/car.jpg';
import { Link } from 'react-router-dom';
import { API_KEY } from '../../data';
import { VALUE_CONVENTER } from '../../data';
import moment from 'moment';

const Feed = ({ category }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const videoListUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
      const response = await fetch(videoListUrl);
      const result = await response.json();

      if (response.ok) {
        setData(result.items || []);
      } else {
        console.error('Error fetching data:', result.error);
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <div className="feed">
      {data.map((item, index) => (
        <Link to={`video/20/4521}`} className="card" key={item.id}>
          <img src={item.snippet.thumbnails?.high?.url || Thumbnail1} alt={item.snippet?.title || 'Video thumbnail'} />
          <h2>{item.snippet.title || 'No title available'}</h2>
          <h3>{item.snippet.channelTitle || 'Unknown channel'}</h3>
          <p>{VALUE_CONVENTER(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
        </Link>
      ))}
    </div>
  );
};

export default Feed;
