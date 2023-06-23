import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';
import { Timeline, Tweet } from 'react-twitter-widgets'


const SongCard = ({tweet, i, id}) => {
  const activeTweet = 'test'
 return (
        <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"> 
              <div className="relative w-full h-56 group">
                <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex `}>
                <Tweet  tweetId="1672060122569293825"/> 
                  </div>
              </div>
      </div>
      );}


export default SongCard;
