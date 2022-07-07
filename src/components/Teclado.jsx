import React, { useState, useRef } from 'react'
import Keyboard from 'react-simple-keyboard'
const Teclado = ({setError, setRut, rut}) => {

    // const [input, setInput] = useState("");
    // const [layout, setLayout] = useState("default");
    const keyboard = useRef();


    const onChange = input => {
      keyboard.current = setRut(input);
      if(input.length === 0){
        setError('')
        return
    }
      if(input.length < 8){
          setError('rut muy corto')
          return
      }
      if(input.length > 9){
          setError('rut muy largo')
          return
      }

      setError('')
      setRut(input)
      // console.log(input)
      // console.log("Input changed", input);
    };
    
    const layout = {
     
        default: [
          "1 2 3",
          "4 5 6",
          "7 8 9",
          "K 0 {bksp}",
        //   'k  {enter}',
        ],
        
      
      }
    // const handleShift = () => {
    //   const newLayoutName = layout === "default" ? "shift" : "default";
    //   setLayout(newLayoutName);
    // };
  
    // const onKeyPress = button => {
    //   console.log("Button pressed", button);
  
    //   /**
    //    * If you want to handle the shift and caps lock buttons
    //    */
    //   if (button === "{shift}" || button === "{lock}") handleShift();
    // };
  
    const onChangeInput = e => {
      const input = e.target.value;
      keyboard.current = setRut(input);
      console.log(input)
      // setInput(input);
      if(input.length === 0){
        setError('')
        return
    }
      if(input.length < 8){
          setError('rut muy corto')
          return
      }
      if(input.length > 9){
          setError('rut muy largo')
          return
      }

      setError('')
      setRut(input)
    };

    
    // const {rut} = rut;
  return (
    <>
      <div className="container mx-auto  flex content-center flex-col justify-center items-center   ">
      <input
      className='items-center border border-gray-400 rounded-lg mt-2'
        // value={rut}\
        disabled
        type="text"
        value={rut}
        maxLength={9}  
        placeholder="ej: 123456789"
        onChange={onChangeInput}
      />
      <div className=' align-center disable-selection'>
      <Keyboard
        keyboardRef={r => (keyboard.current = r)}
        // layoutName={layout}
        maxLength={9}
        buttonAttributes={ [
          {
            attribute: "aria-label",
            value: "BORRAR",
            button: "{bksp}"
          },
        ]}
        layout={layout}
        theme={"hg-theme-default hg-layout-default myTheme "}
        onChange={onChange}
        // useTouchEvents
        // onKeyPress={onKeyPress}
      />
      </div>
      
    </div>
    </>

  )
}

export default Teclado