import React, { useState, useEffect, useCallback } from 'react';
import Header from '../../components/Header';
import MovieList from '../../components/MovieList';
import Sections from '../../utils/movies.json';
import MainAdvertising from '../../components/MainAdvertising';

export default function Home() {

    const [scrollTop, setScrollTop] = useState(0);

    const onScroll = useCallback((e => {
        setScrollTop(e.target.documentElement.scrollTop);
    }), []);

    useEffect(() => {
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollTop, onScroll]);

    


    return (
        <>
            <Header transparent={scrollTop < 10} />
            <MainAdvertising />
            <div>
                {Sections.map((section, index) => (
                    <MovieList key={index} section={section}></MovieList>
                ))}
            </div>
        </>
    )
}