import React from 'react'

class CurrencyConverter extends React.Component{
    constructor(){
        super()
        this.state={
            currencyChosen: false,
            selectedCurrency: 'Select Currency',
            amount: 0
        }
    }

    handleAmountIncrease = () => {
        this.setState({
            amount: this.state.amount + 1
        })
    }

    handleAmountDecrease = () => {
        this.setState({
            amount: this.state.amount - 1
        })
    }

    handleOptionSelect = (event) => {
        let userValue = event.target.value
        this.setState({selectedCurrency: userValue, currencyChosen: userValue === 'Select Currency' ? false : true})
    }

    render(){
        console.log(this.state)
        const currencyData = [
            { name: 'Japanese Yen', symbol: '¥', rate: 113.6, id: 0 },
            { name: 'British Pound', symbol: '£', rate: 0.77, id: 1 },
            { name: 'Canadian Dollar', symbol: 'CAD', rate: 1.32, id: 2 },
            { name: 'Mexican Peso', symbol: 'Mex$', rate: 20.41, id: 3 },
            { name: 'Swiss Franc', symbol: 'Fr.', rate: 1.01, id: 4 }
        ]

    const currencyOptions = currencyData.map((ele, i) => <option key={ele.id} value={i}>{ele.name}</option>)
        return(
            <div>
                <select onChange={this.handleOptionSelect} value={this.state.selectedCurrency} >
                    <option value={'Select Currency'} >Select Currency</option>
                    {currencyOptions}
                </select>
                <div>
                    <button className='add' onClick={this.handleAmountIncrease} disabled={!this.state.currencyChosen} >+</button>
                    <button className='minus' onClick={this.handleAmountDecrease} disabled={!this.state.currencyChosen || this.state.amount === 0} >-</button>
                </div>

                {this.state.selectedCurrency === 'Select Currency' ? <p>Select Currency</p> : this.props.render(currencyData[this.state.selectedCurrency], this.state.amount)}
            </div>

            
        )
    }
}


export default CurrencyConverter