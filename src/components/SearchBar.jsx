import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import s from './css/SearchBar.module.css'
import { searchAnime } from '../redux/actions-creator.js';

export default function SearchBar(props){
    const [input, setInput] = React.useState('')
    const dispatch = useDispatch()
    const serachList = useSelector(state => state.lastSearch)
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
                <input onChange={onChange} value={input} placeholder="Search an Anime !" />
                <input type="submit" value="Search"/>
                <ul>
                    {
                        serachList.map((anime)=>(
                            <li key={anime.mal_id} >{anime.title}</li>
                        ))
                    }
                </ul>
            </form>
        </div>
    );
}
