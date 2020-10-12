import React, { useEffect } from 'react';
import s from './css/Row.module.css';
import Card from './Card.jsx';

export default function Row({animeList, day}){
    const scrollDrag = React.useRef()
    useEffect(()=>{
        let pos = { top: 0, left: 0, x: 0, y: 0 };
        scrollDrag.current.addEventListener('mousedown', (e)=>{
            pos = {
                left: scrollDrag.current.scrollLeft,
                x: e.clientX,
            };
            const mouseMoveHandler = (e)=>{
                const dx = e.clientX - pos.x;
                scrollDrag.current.scrollLeft = pos.left - dx;
            }
            const mouseUpHandler = ()=>{
                scrollDrag.current.removeEventListener('mousemove', mouseMoveHandler);
                scrollDrag.current.removeEventListener('mouseup', mouseUpHandler);
                scrollDrag.current.style.cursor = 'auto';
                scrollDrag.current.style.removeProperty('user-select');
            }
            scrollDrag.current.addEventListener('mousemove', mouseMoveHandler);
            scrollDrag.current.addEventListener('mouseup', mouseUpHandler);
            scrollDrag.current.style.cursor = 'grabbing';
            scrollDrag.current.style.userSelect = 'none';
        });
    },[])
    const dayString = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Other'];
    return(
        <div className={s.container} ref={scrollDrag}>
            <h2 className={s.title}>{dayString[day]}</h2>
            <div className={s.row}>
            {
                animeList.map((anime)=>(<Card key={anime.mal_id} anime={anime}/>))
            }
            </div>
        </div>
    );
}