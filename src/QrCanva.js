import React, {useEffect, useRef} from 'react';
import QRCode  from 'qrcode';
import { Content, Canvas } from './QrStyle';


export default function QrCanva({text}){

    const canva = useRef();
    
    useEffect(()=>{
            
        QRCode.toCanvas(canva.current,text,{width: 300},(error)=>{ console.log(error)
    })
    }, [text])

  return (
      <Content>
          <Canvas ref={canva} id="canva"></Canvas>
      </Content>

  ) 
}

