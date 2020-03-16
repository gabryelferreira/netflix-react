import React, { useState, useEffect } from 'react';
import {
    MovieListContainer,
    MovieListSectionsContainer,
    MovieSection,
    MovieSectionWrapper,
    MovieCard,
    ArrowLeftButton,
    ArrowRightButton,
    MovieSectionContainer,
    MovieListTitle
} from './styles';

export default function MovieList({ section = {} }) {

    const animationTime = 1000;

    const moviesPerSection = 6;

    const [animating, setAnimating] = useState(false);
    const [animatingTo, setAnimatingTo] = useState(null);
    const [mainTimeout, setMainTimeout] = useState(null);


    const [sections, setSections] = useState([]);

    useEffect(() => {
        setFirstOrderedMovies(section);
    });

    function changeAnimating(action) {
        setAnimating(true);
        setAnimatingTo(action);
        setMainTimeout(setTimeout(() => {
            setAnimating(false);
            setAnimatingTo(null);
            reorderSections(action);
            clearMainTimeout();
        }, animationTime));
    }

    function clearMainTimeout() {
        clearTimeout(mainTimeout);
        setMainTimeout(null);
    }

    function setFirstOrderedMovies(section) {
        let numberOfSections = Math.floor(section.movies.length / moviesPerSection);
        if (numberOfSections > 2) {
            const newSection = {
                ...section,
                movies: section.movies.splice(0, numberOfSections * moviesPerSection)
            }
            setFirstSections(newSection, numberOfSections);
        }
    }

    function setFirstSections(section, numberOfSections) {
        let sections = [];
        for (let i = 0; i < numberOfSections; i++) {
            let newSectionMovies = section.movies.filter((_, index) => {
                if (index + 1 <= (i + 1) * moviesPerSection && index + 1 > i * moviesPerSection) {
                    return true;
                }
                return false;
            })
            sections.push({
                ...section,
                movies: newSectionMovies
            });
        }
        let lastSection = sections[sections.length - 1];
        sections.unshift(lastSection);
        sections.splice(sections.length - 1, 1);
        setSections(sections);
    }

    function reorderSections(action) {
        let newSections = sections;
        if (action === "PREVIOUS") {
            newSections.unshift(newSections[newSections.length - 1]);
            newSections.splice(newSections.length - 1, 1);
        } else {
            newSections.push(newSections[0]);
            newSections.splice(0, 1);
        }
        setSections(newSections);
    }

    function previous() {
        if (animating) return;
        changeAnimating("PREVIOUS");
    }

    function next() {
        if (animating) return;
        changeAnimating("NEXT");
    }

    return (
        <>
        
            {sections.length < 2 ? null : (
                <MovieListContainer>
                    <MovieListTitle>{section.name}</MovieListTitle>
                    <MovieListSectionsContainer>
                        <ArrowLeftButton onClick={previous}>
                            <i className="material-icons">keyboard_arrow_left</i>
                        </ArrowLeftButton>
                        <ArrowRightButton onClick={next}>
                            <i className="material-icons">keyboard_arrow_right</i>
                        </ArrowRightButton>
                        <MovieSectionContainer>
                            {sections.map((section, index) => (
                                <MovieSection key={index}
                                    animating={animating}
                                    animatingTo={animatingTo}
                                    animationTime={animationTime}>
                                    <MovieSectionWrapper>
                                        {section.movies.map(movie => (
                                            <MovieCard key={movie.id}
                                                thumbnail={movie.thumbnail}>
                                                <section></section>
                                            </MovieCard>
                                        ))}
                                    </MovieSectionWrapper>
                                </MovieSection>
                            ))}
                        </MovieSectionContainer>
                    </MovieListSectionsContainer>
                </MovieListContainer>
            )}

        </>
    );

}