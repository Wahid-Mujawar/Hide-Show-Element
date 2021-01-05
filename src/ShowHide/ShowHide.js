import React, { Component } from 'react'

class ShowHide extends Component {
   constructor() {
      super()
      this.state={
         showMe:true
      }
   }

   operation()
   {
      this.setState({
         // showMe:false
         For Toggle
         showMe:!this.state.showMe
      })
   }

   render() {
      return (
         <div>
            <h1>Show And Hide In React.js</h1>
            {
               this.state.showMe?
              <div>
                 <h3>Please Hide It</h3>
            </div>
            :null
            }
            
         <button onClick={() =>this.operation()}>Click Me</button>
         </div>


      )
   }
}

export default ShowHide;
