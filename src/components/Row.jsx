import React from 'react';
import s from './css/Row.module.css';
import Card from './Card.jsx';

export default function Row({animeList, day}){
    const scroll = React.useRef()
    function left(){
        scroll.current.scrollLeft = scroll.current.scrollLeft - 0.90 * window.innerWidth;
    }
    function right(){
        scroll.current.scrollLeft = scroll.current.scrollLeft + 0.90 * window.innerWidth;
    }
    const dayString = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Other'];
    return(
        <div className={s.container}>
            <h2 className={s.title}>{dayString[day]}</h2>
            <div className={s.row}>
                <button className={s.left} onClick={left}>{'<'}</button>
                <div className={s.contain} ref={scroll}>
                    {
                        animeList.map((anime)=>(<Card key={anime.mal_id} anime={anime}/>))
                    }
                </div>
                <button className={s.right} onClick={right}>{'>'}</button>
            </div>
        </div>
    );
}