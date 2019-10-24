import axios from "axios"

 function setFruit(data) {
    return {
      type: 'FRUITS_DETAILS',
      payload: data
    };
  }

  export const fruitAction = () => {
    return (dispatch) => {
        axios.get('http://styleguide.effectivedigital.com/interview/api/fruitveg',{
          headers: {
            'Content-Type': 'application/json',
            'Accept' : 'application/json',
          },
        })
        .then(({ data }) => {
            dispatch(setFruit(data));
        });
    };
}

export default fruitAction;