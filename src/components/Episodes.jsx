import React, { useEffect } from 'react';
import s from './css/Episodes.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getAnimeEpisodes } from '../redux/actions-creator.js';
import Episode from './Episode.jsx';

export default function Episodes({id}){
    const dispatch = useDispatch();
    const episodes = useSelector((state)=>(state.animeEpisodes[id]))
    useEffect(()=>{
        dispatch(getAnimeEpisodes(id))
    },[dispatch, id])
    return(
        <div className={s.container}>
            {episodes &&
                episodes.map((episode)=>(<Episode key={episode.episode_id} episode={episode}/>))
            }
        </div>
    );
}