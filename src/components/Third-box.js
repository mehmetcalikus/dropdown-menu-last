import React, { Component } from 'react'


class ThirdBox extends Component {
    state={
        showItems:false,
        adalar:this.props.adalar,
        beyoglu:this.props.beyoglu,
        kagithane:this.props.kagithane,
        sariyer:this.props.sariyer,
        cankaya:this.props.cankaya,
        kecioren:this.props.kecioren,
        mamak:this.props.mamak,
        sincan:this.props.sincan,
        aliaga:this.props.aliaga,
        balcova:this.props.balcova,
        bornova:this.props.bornova,
        dikili:this.props.dikili,
        selectedItem1: this.props.adalar,
        selectedItem2: this.props.beyoglu, 
        selectedItem3: this.props.kagithane, 
        selectedItem4: this.props.sariyer ,
        selectedItem5: this.props.cankaya ,
        selectedItem6: this.props.kecioren ,
        selectedItem7: this.props.mamak ,
        selectedItem8: this.props.sincan ,
        selectedItem9: this.props.aliaga ,
        selectedItem10: this.props.balcova, 
        selectedItem11: this.props.bornova ,
        selectedItem12: this.props.dikili 
    }

    dropDown = () => {
        this.setState(prevState => ({
            showItems: !prevState.showItems,
        }))
    }

    selectItem1 = (item) => {
        this.setState({ selectedItem1: item })
        this.setState({ showItems: false })
    }
    selectItem2 = (item) => {
        this.setState({ selectedItem2: item })
        this.setState({ showItems: false })
    }
    selectItem3 = (item) => {
        this.setState({ selectedItem3: item })
        this.setState({ showItems: false })
    }    
    selectItem4 = (item) => {
        this.setState({ selectedItem4: item })
        this.setState({ showItems: false })
    }
    selectItem5 = (item) => {
        this.setState({ selectedItem5: item })
        this.setState({ showItems: false })
    }
    selectItem6 = (item) => {
        this.setState({ selectedItem6: item })
        this.setState({ showItems: false })
    }
    selectItem7 = (item) => {
        this.setState({ selectedItem7: item })
        this.setState({ showItems: false })
    }
    selectItem8 = (item) => {
        this.setState({ selectedItem8: item })
        this.setState({ showItems: false })
    }
    selectItem9 = (item) => {
        this.setState({ selectedItem9: item })
        this.setState({ showItems: false })
    }
    selectItem10 = (item) => {
        this.setState({ selectedItem10: item })
        this.setState({ showItems: false })
    }
    selectItem11 = (item) => {
        this.setState({ selectedItem11: item })
        this.setState({ showItems: false })
    }
    selectItem12 = (item) => {
        this.setState({ selectedItem12: item })
        this.setState({ showItems: false })
    }


    
    
    render() {
        return (
            <div>
            <div className='select-third-box--selected-item'>
                {
                    this.props.selectedID1 === 1
                    ?this.state.selectedItem1.value :null
                }
                {
                    this.props.selectedID1 === 2
                    ?this.state.selectedItem2.value :null    
                }
                {
                    this.props.selectedID1 === 3
                    ?this.state.selectedItem3.value :null
                }
                {
                    this.props.selectedID1 === 4
                    ?this.state.selectedItem4.value :null
                }
                {
                    this.props.selectedID2 === 1
                    ?this.state.selectedItem5.value :null
                }
                {
                    this.props.selectedID2 === 2
                    ?this.state.selectedItem6.value :null
                }
                {
                    this.props.selectedID2 === 3
                    ?this.state.selectedItem7.value :null
                }
                {
                    this.props.selectedID2 === 4
                    ?this.state.selectedItem8.value :null
                }
                {
                    this.props.selectedID3 === 1
                    ?this.state.selectedItem9.value :null
                }
                {
                    this.props.selectedID3 === 2
                    ?this.state.selectedItem10.value :null
                }
                {
                    this.props.selectedID3 === 3
                    ?this.state.selectedItem11.value :null
                }
                {
                    this.props.selectedID3 === 4
                    ?this.state.selectedItem12.value :null
                }
                </div>
                <div className="choose-box--arrow"
                    onClick={this.dropDown}
                ></div>
                  
                    {   
                        this.props.selectedID1 === 1
                            ?this.state.adalar.map(item => <div
                            key={item.id}
                            onClick={() => this.selectItem1(item)}
                            className={this.state.selectedItem1 === item ? 'selected' : ''}         
                        >
                            {item.value}
                        </div>)
                        : null
                              
                        
                    }    
                    {
                        this.props.selectedID1 === 2
                            ?this.state.beyoglu.map(item=> <div
                            key={item.id}
                            onClick={()=>this.selectItem2(item)}                            
                        >    
                        {item.value}
                        </div>)        
                        :null    
                    }
                    {
                        this.props.selectedID1 === 3
                            ?this.state.kagithane.map(item=> <div
                            key={item.id}
                            onClick={()=>this.selectItem3(item)}    
                        >    
                        {item.value}
                        </div>)        
                        :null    
                    }
                    {
                        this.props.selectedID1 === 4
                            ?this.state.sariyer.map(item=> <div
                             key={item.id}
                             onClick = {()=>this.selectItem4(item)}   
                        >
                        {item.value}            
                        </div>)
                        :null
                    }
                    {
                        this.props.selectedID2 === 1
                           ?this.state.cankaya.map(item=> <div
                            key={item.id}
                            onClick = {()=>this.selectItem5(item)}
                        >
                        {item.value}
                        </div>)
                        :null        
                        
                    }
                    {
                        this.props.selectedID2 === 2
                           ?this.state.kecioren.map(item=> <div
                            key={item.id}
                            onClick = {()=>this.selectItem6(item)}
                        >
                        {item.value}
                        </div>)
                        :null        
                    }
                    {
                        this.props.selectedID2 === 3
                           ?this.state.mamak.map(item=> <div
                            key={item.id}
                            onClick = {()=>this.selectItem7(item)}
                        >
                        {item.value}
                        </div>)
                        :null        
                    }
                    {
                        this.props.selectedID2 === 4
                           ?this.state.sincan.map(item=> <div
                            key={item.id}
                            onClick = {()=>this.selectItem8(item)}
                        >
                        {item.value}
                        </div>)
                        :null        
                    }
                    {
                        this.props.selectedID3 === 1
                           ?this.state.aliaga.map(item=> <div
                            key={item.id}
                            onClick = {()=>this.selectItem9(item)}
                        >
                        {item.value}
                        </div>)
                        :null        
                    }
                    {
                        this.props.selectedID3 === 2
                           ?this.state.balcova.map(item=> <div
                            key={item.id}
                            onClick = {()=>this.selectItem10(item)}
                        >
                        {item.value}
                        </div>)
                        :null        
                    }
                    {
                        this.props.selectedID3 === 3
                           ?this.state.bornova.map(item=> <div
                            key={item.id}
                            onClick = {()=>this.selectItem11(item)}
                        >
                        {item.value}
                        </div>)
                        :null        
                    }
                    {
                        this.props.selectedID3 === 4
                           ?this.state.dikili.map(item=> <div
                            key={item.id}
                            onClick = {()=>this.selectItem12(item)}
                        >
                        {item.value}
                        </div>)
                        :null        
                    }

                
            </div>
        )
    }
}

export default ThirdBox
