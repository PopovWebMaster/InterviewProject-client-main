
// вставить кода в конструктор  проверяемого класса

let test = setInterval( () => {

    if( this.state.currentValue < this.state.totalAmount){
        this.setState({
            currentValue: this.state.currentValue + 2,
        });
    }else{
        this.setState({
            currentValue: this.state.totalAmount,
        });
        clearInterval(test)
    };

}, 200 );

