


export const getMovies = (url, type) => {
    console.log("getmovies called with type ", type);
    return async (dispatch) => {
        await fetch(url, {
            method : "GET"
        }).then(async (response) => {
            console.log(response.status);
            if(response.status == 400)
            {
                dispatch({type : "errorloading"});
            }
            else
            {
                const res = await response.json();
                console.log("results of type ", type);
                if(type === "latest")
                {
                    console.log(res);
                    dispatch({type : "loaded",  payload:{ type, data : [res] } })
                }
                else
                {
                    console.log(res.results);
                    dispatch({type : "loaded", payload:{ type, data : res.results} })
                }
            }
        }).catch(err => {
            console.log(err);
            dispatch({type : "errorloading"})
        })
    }
}

export const selectMovie = (id) => {
    return async (dispatch) => {
        await fetch("https://api.themoviedb.org/3/movie/"+id+"?api_key=f4341c5bdbfa38ae2459a88588a6db10", {
            method : "GET"
        }).then(async (response) => {
            console.log(response.status);
            if(response.status == 400)
            {
                dispatch({type : "error"});
            }
            else
            {
                const res = await response.json();
                console.log("from actii details");
                console.log(res);
                dispatch({type:"selected", payload : res})
            }
        }).catch(err => {
            console.log(err);
            dispatch({type : "error"})
        })
    }
}