import React, {useState, useEffect, useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAnimeVideos } from '../redux/actions-creator.js'
import { NavLink as Link } from 'react-router-dom';
import s from './css/Card.module.css';

export default function Card ({anime}) {
    const [hover, setHover] = useState(false)
    const ref = useRef(null)
    const dispatch = useDispatch()
    const videos = useSelector((state)=>(state.animeVideos[anime.mal_id]))
    if (videos) var trailer = videos.promo[0]
    useEffect(()=>{
        let timeoutId = null;
        const hoverOn = ()=>{
            if (!videos) {
                timeoutId= setTimeout(()=>dispatch(getAnimeVideos(anime.mal_id)),100)
            }
            setHover(true)
        }
        const hoverOff= ()=>{
            clearTimeout(timeoutId);
            setHover(false)
        }
        ref.current.addEventListener("mouseenter", hoverOn);
        ref.current.addEventListener("mouseleave", hoverOff);
    },[videos, anime.mal_id, dispatch])
    return(
        <div className={s.container} ref={ref} >
            {anime.score && <h5 className={s.score}>Score {anime.score}</h5>}
            <div className={s.card} style={{backgroundImage: `url(${anime.image_url})`}}>
                {
                    hover  && trailer &&
                        <iframe 
                            className={s.video}
                            title={trailer.title}
                            src={trailer.video_url} 
                            width="100%" 
                            height="100%" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                        />
                }
            </div>
            <Link to={`/jikan-api-front/anime/${anime.mal_id}`}><h5 className={s.title}>{anime.title}</h5></Link>
        </div>
    );
}