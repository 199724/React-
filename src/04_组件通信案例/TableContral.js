
import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class TableContral extends Component {
    constructor(props){
        super(props);
        this.state={
            currentindex: 2
        }
    }
    render() {
        // const {titles}=this.props;
        const {currentindex}=this.state;//析构赋值 要和定义的变量名相同
        return (
            <div className='tab-contral'>
                {this.props.titles.map((item,index)=>{
                  
                  return  <div className={" tab-item "+(index===currentindex ? "activate":"")  }
                   key={item} 
                   onClick={e=>this.itemClick(index)} >
                       <span >{item}</span>
                  </div>
                })}
            </div>
        )
    }
    itemClick(index){
        this.setState({
            currentindex:index
        })
        const {itemClick}=this.props;
        itemClick(index);
    }
}
TableContral.protoType={
    titles:PropTypes.array.isRequired//类型检查
}
