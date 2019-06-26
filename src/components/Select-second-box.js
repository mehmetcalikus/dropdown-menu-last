import React, { Component } from 'react'
import ThirdBox from './Third-box'


class SecondBox extends Component {
    state = {
        istanbul: this.props.istanbul,
        ankara: this.props.ankara,
        izmir: this.props.izmir,
        showItems: false,
        selectedItem1: this.props.istanbul && this.props.istanbul[0],
        selectedItem2: this.props.ankara && this.props.ankara[0],
        selectedItem3: this.props.izmir && this.props.izmir[0], 
    }

    dropDown = () => {
        this.setState(prevState => ({
            showItems: !prevState.showItems,
        }))
    }

    selectItem1 = (item) => {
        this.setState({ selectedItem1: item,selectedItem2: null,selectedItem3:null })
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

    
    render() {
        return (
            <div >

                <div className='select-second-box--selected-item'>
                {
                    this.props.selectedID === 1
                    ?this.state.selectedItem1.value 
                    
                    :null
                }
                {
                    this.props.selectedID === 2
                    ?this.state.selectedItem2.value :null    
                }
                {
                    this.props.selectedID === 3
                    ?this.state.selectedItem3.value :null
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

            <ThirdBox
                selectedID1={
                    this.state.selectedItem1.id    
                }
                selectedID2={
                    this.selectedItem2 ? 
                    this.state.selectedItem2.id : null
                    
                }
                selectedID3={
                    this.selectedItem3 ? 
                    this.state.selectedItem3.id : null   
                }
                
                    adalar={[
                        { value: "Burgaz Ada Mah.", id: 1 },
                        { value: "Nizam Mah.", id: 2 },
                        { value: "Heybeli Ada Mah.", id: 3 },
                        { value: "asd", id: 4 }
                    ]}

                    beyoglu={[
                        { value: "Çukur Mah.", id: 1 },
                        { value: "Halıcıoğlu Mah.", id: 2 },
                        { value: "qwe", id: 3 },
                        { value: "klm", id: 4 }
                    ]}
                    kagithane={[
                        { value: "Çeliktepe", id: 1 },
                        { value: "Gültepe", id: 2 },
                        { value: "Ortabayır", id: 3 },
                        { value: "Şirintepe", id: 4 }

                    ]}
                    
                    sariyer={[
                        {value: "Ayazağa", id:1},
                        {value: "Bahçeköy", id:2},
                        {value: "Baltalimanı", id:3},
                        {value: "İstinye", id:4}
                    ]}    
                    cankaya={[
                        { value: "100. yıl", id: 1 },
                        { value: "Beytepe Mah.", id: 2 },
                        { value: "aaaa", id: 3 },
                        { value: "bbbb", id: 4 }
                    ]}

                    kecioren={[
                        { value: "qqqq", id: 1 },
                        { value: "wwww", id: 2 },
                        { value: "eeee", id: 3 },
                        { value: "rrrr", id: 4 }
                    ]}
                    mamak={[
                        { value: "tttt", id: 1 },
                        { value: "yyyy", id: 2 },
                        { value: "uuuu", id: 3 },
                        { value: "ıııı", id: 4 }

                    ]}
                    
                    sincan={[
                        {value: "oooo", id:1},
                        {value: "pppp", id:2},
                        {value: "ğğğğ", id:3},
                        {value: "üüüü", id:4}
                    ]}
                    aliaga={[
                        { value: "ffff", id: 1 },
                        { value: "gggg", id: 2 },
                        { value: "hhhh", id: 3 },
                        { value: "jjjj", id: 4 }
                    ]}

                    balcova={[
                        { value: "kkkk", id: 1 },
                        { value: "llll", id: 2 },
                        { value: "şşşş", id: 3 },
                        { value: "iiii", id: 4 }
                    ]}
                    bornova={[
                        { value: "zzzz", id: 1 },
                        { value: "xxxx", id: 2 },
                        { value: "cccc", id: 3 },
                        { value: "vvvv", id: 4 }

                    ]}
                    dikili={[
                        { value: "bbbb", id: 1},
                        { value: "nnnn", id: 2},
                        { value: "mmmm", id: 3},
                        { value: "öööö", id: 4}    
                    ]}
            
            />
            </div>
                
        )
    }
}

export default SecondBox
