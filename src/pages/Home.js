import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { useAppDispatch, useAppSelector } from '../hooks/useApp'
import { getHomePageVideos } from '../store/reducers/getHomePageVideos';
import Spinner from '../components/Spinner';

function Home() {

  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos);

  useEffect(() => {
    dispatch(getHomePageVideos(false));
    console.log(videos);
  }, [dispatch]);
  return (
    <div className='max-h-screen overflow-auto'>
      <div style={{height:"7.5vh"}}>
        <Navbar/>
      </div>
      <div className='flex' style={{height:"92.5vh"}}>
        <Sidebar/>
        {
          videos.length ? (<infiniteScroll>
            data
          </infiniteScroll>
          ):(
            <Spinner/>
          )
        }
        
      </div>
    </div>
  )
}

export default Home