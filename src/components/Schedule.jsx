import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSchedule } from '../redux/actions-creator.js';
import Row from './Row.jsx'

export default function Schedule(props){
    const schedule = useSelector(state => state.schedule)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getSchedule())
    },[dispatch])
    const day = (new Date()).getDay();
    return(
        <div>
            {schedule[(day + 0) % 7] && <Row animeList={schedule[(day + 0) % 7]} day={(day + 0) % 7} />}
            {schedule[(day + 1) % 7] && <Row animeList={schedule[(day + 1) % 7]} day={(day + 1) % 7} />}
            {schedule[(day + 2) % 7] && <Row animeList={schedule[(day + 2) % 7]} day={(day + 2) % 7} />}
            {schedule[(day + 3) % 7] && <Row animeList={schedule[(day + 3) % 7]} day={(day + 3) % 7} />}
            {schedule[(day + 4) % 7] && <Row animeList={schedule[(day + 4) % 7]} day={(day + 4) % 7} />}
            {schedule[(day + 5) % 7] && <Row animeList={schedule[(day + 5) % 7]} day={(day + 5) % 7} />}
            {schedule[(day + 6) % 7] && <Row animeList={schedule[(day + 6) % 7]} day={(day + 6) % 7} />}
            {schedule[7] && <Row animeList={schedule[7]} day={7} />}
        </div>
    );
}