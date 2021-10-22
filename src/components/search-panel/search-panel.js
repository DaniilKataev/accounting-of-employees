import './search-panel.css';
import {connect} from 'react-redux';
import { findItem } from '../../actions';

const SearchPanel = ({findItem}) => {
    return (
        <input onChange={() => {
                        const input = document.querySelector('.search-input');
                        findItem(input.value)}} 
                type="text"
                className="form-control search-input"
                placeholder="Найти сотрудника"/>
    )
}

const mapStateToProps = (state) => {
    return {data: state.data}
}

const mapDispatchToProps = {
    findItem: findItem
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel);