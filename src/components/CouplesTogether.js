import React, {Component} from 'react';

class CouplesTogether extends Component {
    render() {
        let{item}=this.props;
        return (
            <div>
                {item.girls.name}-{item.boys.name}




            </div>
        );
    }
}

export default CouplesTogether;