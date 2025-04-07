//JAVASCRIPT JUST FRONTEND
export const MyComponent = ({imgUrl}) => {

  return (
    <div className="flex justify-center">
      <div style={{width: '300px'}}>
        <img src={imgUrl} alt="image" width={'80px'} height={'80px'} />
        <p style={{color: 'white'}}>Este es un componente en React!!!</p>
        <p style={{color: 'black'}}>Este es un componente en React!!!</p>
      </div>
    </div>
  );
};
