import React from 'react';
import { useDispatch } from 'react-redux';
import s from './css/SearchBar.module.css';
import { searchAnime } from '../redux/actions-creator.js';

export default function SearchBar(props){
    const [input, setInput] = React.useState('')
    const dispatch = useDispatch()
    function onChange(e){
        setInput(e.target.value);
    }
    function onSubmit(e){
        e.preventDefault();
        dispatch(searchAnime(input))
    }
    return(
        <div className={s.searchBar}>
            <form onSubmit={onSubmit} >
                <input className={s.input} onChange={onChange} value={input} placeholder="Roto T-T" />
                <input className={s.button} type="submit" value="Search"/>
            </form>
        </div>
    );
}