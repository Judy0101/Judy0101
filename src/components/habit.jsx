import React, { Component } from 'react';


class Habit extends Component {

    componentDidMount(){
      console.log(`habit: ${this.props.habit.name} mounter`);
    }

    componentWillUnmount(){ 
      console.log(`habits: ${this.props.habit.name} will unmount`)
    }
    handleIcrement = () => {
      //state 오브젝트 안에 있는 count 를 증가 한 뒤 state를 업데이트 해야함.

      //this.state.count += 1; 왜 안대? 업데이트됬는지 몰라서 렌더 함수를 호출하지 못함
      //this.setState({count : this.state.count+1});

      this.props.onIncrement(this.props.habit);

    }

    handleDecrement = event =>{
      this.props.onDecrement(this.props.habit);
    }

    handleDelete = event =>{
      this.props.onDelete(this.props.habit);
    }

    render() {
      const {name, count} = this.props.habit;
  
        return (
        <li className="habit">
           <span className="habit-name">{name}</span>
           <span className="habit-count">{count}</span>
           <button 
            className="habit-button habit-increase"
            onClick={this.handleIcrement}>
              <i className="fas fa-plus-square"></i>
            </button>
            <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
              <i className="fas fa-minus-square"></i>
            </button>
            <button className="habit-button habit-delete" onClick={this.handleDelete}>
              <i className="fas fa-trash"></i>
           </button>

        </li>
        );
 }
}

export default Habit;