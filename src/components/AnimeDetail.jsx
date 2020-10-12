import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAnimeDetail } from '../redux/actions-creator.js'
import s from './css/AnimeDetail.module.css'

export default function AnimeDetail({id}){
    const dispatch = useDispatch();
    const {title, trailer_url, image_url, synopsis, status, airing} = useSelector((state)=>(state.animeDetail))
    useEffect(()=>{
        dispatch(getAnimeDetail(id))
    },[dispatch, id])
    return(
        <div className={s.container}>
            <div className={s.animeDetail}>
                <div className={s.left}>
                    <img className={s.image} src={image_url} alt=""/>
                    <div className={s.status + (airing && " " + s.airing)}>
                        <span>{status}</span>
                    </div>
                </div>
                <div className={s.right}>
                    <div className={s.video}>
                        <iframe 
                            title={title} 
                            src={trailer_url} 
                            width="100%" 
                            height="100%" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                    <p>{synopsis}</p>
                </div>
            </div>
        </div>
    );
}