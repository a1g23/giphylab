

function Button(props) {


  // function to handle the click and run the function (giphButton) that is a prop to re-render the screen with a new gif

  const handleClick = (event) => {
    props.giphButton()
  }

    return (
      <div className="Button">
        <button onClick={handleClick}>Give Me a Giphy</button>
      </div>
    );
  }
  
  export default Button;