import React, { Component } from 'react'
import SecondBox from './Select-second-box';
import './Select-box.css'

class SelectBox extends Component {
    state = {
        items: this.props.items || [],
        showItems: false,
        selectedItem: this.props.items && this.props.items[0],
    }

    dropDown = () => {
        this.setState(prevState => ({
            showItems: !prevState.showItems,
        }))
    }


    selectItem = (item) => {
        this.setState({ selectedItem: item })
        this.setState({ showItems: true })
    }


    render() {
        return (
            <div >
                <div className='select-box--box'
                    style={{ width: this.state.width || 180 }}
                >
                    <div className='select-box--container'
                    >
                        <div className='select-box--selected-item'>
                            {
                                this.state.selectedItem.value
                            }
                        </div>
                        <div className="choose-box--arrow"
                            onClick={this.dropDown}
                        >
                            <span
                                className={`${this.state.showItems ? 'select-box--arrow-up' : 'select-box--arrow-down'}`}
                            />

                        </div>
                        <div
                            style={{ display: this.state.showItems ? 'block' : 'none' }}
                            className="select-box--items"
                        >
                            {
                                this.state.items.map(item => <div
                                    key={item.id}
                                    onClick={() => this.selectItem(item)}
                                    className={this.state.selectedItem === item ? 'selected' : ''}
                                >
                                    {item.value}
                                </div>)
                            }
                            <SecondBox
                            selectedID={
                                this.state.selectedItem.id
                            }
                                istanbul={[
                                    { value: "Adalar", id: 1 },
                                    { value: "Beyoğlu", id: 2 },
                                    { value: "Kağıthane", id: 3 },
                                    { value: "Sarıyer", id: 4 }
                                ]}

                                ankara={[
                                    { value: "Çankaya", id: 1 },
                                    { value: "Keçiören", id: 2 },
                                    { value: "Mamak", id: 3 },
                                    { value: "Sincan", id: 4 }
                                ]}
                                izmir={[
                                    { value: "Aliağa", id: 1 },
                                    { value: "Balçova", id: 2 },
                                    { value: "Bornova", id: 3 },
                                    { value: "Dikili", id: 4 }

                                ]}
                                
                                bursa={[
                                    {value: "a", id:1},
                                    {value: "b", id:2},
                                    {value: "c", id:3},
                                    {value: "d", id:4}
                                ]}
                            />
                        </div>
                    </div>
                </div>




            </div>
        )
    }
}
export default SelectBox