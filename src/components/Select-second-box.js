import React, { Component } from 'react'



class SecondBox extends Component {
    state = {
        istanbul: this.props.istanbul,
        ankara: this.props.ankara,
        izmir: this.props.izmir,
        bursa:this.props.bursa,
        showItems: false,
        selectedItem1: this.props.istanbul && this.props.istanbul[0],
        selectedItem2: this.props.ankara && this.props.ankara[0],
        selectedItem3: this.props.izmir && this.props.izmir[0], 
        selectedItem4:this.props.bursa && this.props.bursa[0]
    }

    dropDown = () => {
        this.setState(prevState => ({
            showItems: !prevState.showItems,
        }))
    }

    selectItem1 = (item) => {
        this.setState({ selectedItem1: item })
        this.setState({ showItems: true })
    }
    selectItem2 = (item) => {
        this.setState({ selectedItem2: item })
        this.setState({ showItems: true })
    }
    selectItem3 = (item) => {
        this.setState({ selectedItem3: item })
        this.setState({ showItems: true })
    }
    selectItem4 = (item) => {
        this.setState({ selectedItem4: item })
        this.setState({ showItems: true })
    }

    render() {
        return (


            <div >

                <div className='select-box--selected-item'>
                {
                    this.props.selectedID === 1
                    ?this.state.selectedItem1.value :null
                }
                {
                    this.props.selectedID === 2
                    ?this.state.selectedItem2.value :null    
                }
                {
                    this.props.selectedID === 3
                    ?this.state.selectedItem3.value :null
                }
                {
                    this.props.selectedID === 4
                    ?this.state.selectedItem4.value :null
                }
                </div>
                <div className="choose-box--arrow"
                    onClick={this.dropDown}
                ></div>


                    {   
                        this.props.selectedID === 1
                            ?this.state.istanbul.map(item => <div
                            key={item.id}
                            onClick={() => this.selectItem1(item)}
                            className={this.state.selectedItem1 === item ? 'selected' : ''}         
                        >
                            {item.value}
                        </div>)
                        : null
                    }    
                    {
                        this.props.selectedID === 2
                            ?this.state.ankara.map(item=> <div
                            key={item.id}
                            onClick={()=>this.selectItem2(item)}
                            className={this.state.selectedItem2 === item ? 'selected':''}
                        >    
                        {item.value}
                        </div>)        
                        :null    
                    }
                    {
                        this.props.selectedID === 3
                            ?this.state.izmir.map(item=> <div
                            key={item.id}
                            onClick={()=>this.selectItem3(item)}
                            className={this.state.selectedItem3 === item ? 'selected':''}
                        >    
                        {item.value}
                        </div>)        
                        :null    
                    }
                    {
                        this.props.selectedID === 4
                            ?this.state.bursa.map(item=> <div
                            key={item.id}
                            onClick={()=>this.selectItem4(item)}
                            className={this.state.selectedItem4 === item ? 'selected':''}
                        >    
                        {item.value}
                        </div>)        
                        :null    
                    }

                </div>
                
        )
    }
}

export default SecondBox
