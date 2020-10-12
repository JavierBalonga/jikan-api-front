import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSchedule } from '../redux/actions-creator.js';
import s from './css/Schedule.module.css'
import Row from './Row.jsx'

export default function Schedule(props){
    const schedule = useSelector(state => state.schedule)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getSchedule())
    },[dispatch])
    const day = (new Date()).getDay();
    return(
        <div className={s.schedule} >
            {schedule[day + 0] && <Row animeList={schedule[day + 0]} day={day + 0} />}
            {schedule[day + 1] && <Row animeList={schedule[day + 1]} day={day + 1} />}
            {schedule[day + 2] && <Row animeList={schedule[day + 2]} day={day + 2} />}
            {schedule[day + 3] && <Row animeList={schedule[day + 3]} day={day + 3} />}
            {schedule[day + 4] && <Row animeList={schedule[day + 4]} day={day + 4} />}
            {schedule[day + 5] && <Row animeList={schedule[day + 5]} day={day + 5} />}
            {schedule[day + 6] && <Row animeList={schedule[day + 6]} day={day + 6} />}
            {schedule[7] && <Row animeList={schedule[7]} day={7} />}
        </div>
    );
}