import React, { Component } from 'react'

//Header


 function Header() {
     return(
         <div>Header</div>
     )
 }
 //Body
 function Body(){
     return(
        <div>Body</div>
     )
 }
//footer
function Footer(){
    return(
       <div>Footer</div>
    )
}


export default class App extends Component {
    render() {
        return (
            <div>
              <Header/>
              <Body/>
              <Footer/>  
            </div>
        )
    }
}
