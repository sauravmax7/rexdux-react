

export function fetchTech(){
    //return the actual action to do
    //action creater returns an action but by using thunk 
    //action have ability to return a function instead of a action object 
    //so that it have have sideeffects , these function call also dispatch action 
    
        return function(dispatch){
            fetch("https://newsapi.org/v1/articles?source=the-verge&sortBy=top&apiKey=e82c7460d1494b7a8c8a172c34d21ca4")
            .then(res => {
                return res.json();
                
            })
            .then(res => {
             // console.log(res)
              dispatch({type:"FETCH_TECH", payload: res.articles});
            })
            .catch(err => {
                console.log(err);
            })
      
         }
      
}