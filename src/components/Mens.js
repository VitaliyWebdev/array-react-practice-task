import React, {Component} from 'react';
import './style.css'
class Mens extends Component {
    render() {
        let {item}=this.props
        return (
            <div className={'mens-box'}>
                Номер-{item.id} Ім'я-{item.name} Вік-{item.age}
            </div>
        );
    }
}

export default Mens;