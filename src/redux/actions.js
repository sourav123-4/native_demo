export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_USER_AGE = 'SET_USER_AGE';
export const GET_MOVIES = 'GET_MOVIES';
export const setName = name => dispatch =>{
    dispatch({
        type: SET_USER_NAME,
        payload: name,
    });
}

export const setAge = age => dispatch =>{
    dispatch({
        type: SET_USER_AGE,
        payload: age,
    });
}

export const getMovies = ()=>{
    try{
        return async dispatch =>{
            const result = await fetch("https://reactnative.dev/movies.json",{
                method:'GET',
                headers:{
                    'Content-Type' : 'application/json'
                }
            })
            const json = await result.json();
            if(json){
                dispatch({
                    type: GET_MOVIES,
                    payload: json
                })
            }else{
                console.log('unable to fetch!')
            }
        }
    }catch(err){
        console.log('err is ',err)
    }
}
