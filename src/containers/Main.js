import React, {Component} from 'react';
import {fetchData} from '../store/actionCreators';
import {connect} from 'react-redux';
import pic from '../images/005 1.png';


class Main extends Component {
    componentDidMount() {
        this.props.fetchData();
    }

    render() {
        let {data} = this.props;
        let dataList = data === undefined ? '...loading'
            : data.map(val => (
                <li key={val.pkID}>
                    <div><img src={val.Logo || pic} alt={val.Name} /></div>
                    <h1>{val.Name}</h1>
                    <button>تبرع الآن</button>
                </li>
                ));
        return (
            <main>
                <h1>الجمعيات الخيرية</h1>
                <ul>
                    {dataList}
                </ul>
            </main>
        )
    }
}

function mapStateToProps(state) {
    return {
        data: state.data
    };
}

export default connect(mapStateToProps, {fetchData})(Main);