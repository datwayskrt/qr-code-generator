import {  
    Container,
    Sec, 
    Center, 
    Input 
} from "./style"
import { useState } from 'react'
import QrCanva from "../../QrCanva"


const Section = () => {
    const [text, setText] =useState("Enter you link here!");
    return(
        <Sec>
            <Container>
           
            <Center>
            <Input type="text" value={text} onChange={(element)=>{setText(element.target.value)}}placeholder="Enter your link here!"/>
            <QrCanva text={text}></QrCanva>
            </Center>

            
            </Container>
        </Sec>

    )


}


export default Section