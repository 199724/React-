import React from 'react'

export default function App() {
    return (
        <div>
            <Child name='tongwei' age='18'/>

        </div>
    )
}
function Child(props){
    const {name,age}=props;
    return(
        <div>
            {name+age}
        </div>
    )
}

