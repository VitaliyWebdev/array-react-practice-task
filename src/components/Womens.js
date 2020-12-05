import React, {Component} from 'react';

class Womens extends Component {


    render() {
        let{item}=this.props
        return (
            <div className={'girls-box'}>
                Номер-{item.id} Ім'я-{item.name} Вік-{item.age}
            </div>
        );
    }
}

export default Womens;


// Створити масив man. { id, name, age, wife_id }
// Створити масив woman. { id, name, age, husband_id }
//
// Поділити сторінку на 3 колонки, в 1 вивести чоловіків, в 2 жінок.
//     В третю колонку ми виводимо пару ( чоловік + жінка, відповідно до id)
//
// Компоненти - Mans, Man, Womens, Woman, MarriedCouples, MarriedCouple