let movies = [
    {
        id: 0,
        name: "Nicolas",
        score: 18,
    },
    {
        id: 1,
        name: "Jisu",
        score: 18,
    },
    {
        id: 2,
        name: "Japan Guy",
        score: 18,
    },
    {
        id: 3,
        name: "Daal",
        score: 18,
    },
    {
        id: 4,
        name: "JD",
        score: 18,
    },
    {
        id: 5,
        name: "moondaddi",
        score: 18,
    },
    {
        id: 6,
        name: "flynn",
        score: 18,
    }
];

export const getMovies = () => movies;

export const getById = id => {
    const filteredMovies = movies.filter(movie => movie.id === id);
    return filteredMovies[0];
};

export const deleteMovie = (id) => {
    const cleansMovies = movies.filter(movie => movie.id !== id)
    if(movies.length > cleansMovies.length){
        movies = cleansMovies;
        return true;
    } else {
        return false;
    }
}

export const addMovie = (name, score) => {
    const newMovie = {
        id: `${movies.length + 1}`,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
}