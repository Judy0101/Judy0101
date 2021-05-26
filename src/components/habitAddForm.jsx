import React, { PureComponent } from 'react';

class HabitAddForm extends PureComponent {

    inputRef = React.createRef();

    onSubmit= (event) =>{
        event.preventDefault(); // refrash 안 일어나게 한다. 
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
        this.inputRef.current.value = '';
    };

    render() {
  
        return (
           <form className="add-form" onSubmit={this.onSubmit}>
               <input 
               ref={this.inputRef} 
               type="text" 
               className="add-input" 
               placeholder="Habit"
               />
               <button className="add-button">Add</button>
           </form>
        );
    }
}

export default HabitAddForm;