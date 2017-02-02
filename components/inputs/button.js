const Button = ({ text, onClickEvent, variant }) => {
  
  let classVariant = 'btn';
    
  switch(variant){
      case 'primary':
        classVariant = "btn-primary";
        break;
      // Add more as needed
  }
  
  return(
    <button className={ classVariant } onClick={ onClickEvent }>
      <span className='text'>{ text }</span>
    </button>
  );
};

export default Button;