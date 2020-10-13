import React from 'react';
import s from './css/Episode.module.css';

export default function Episodes({episode}){
    const {episode_id, title, video_url, aired} = episode
    return(
        <div className={s.episode}>
            <span>{episode_id}</span>
            <a href={video_url}>{title}</a>
            <span>{(new Date(aired)).toDateString()}</span>
        </div>
    );
}