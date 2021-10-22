import EmployeesListItem from "../employees-list-item/employees-list-item";
import {connect} from "react-redux";
import {togglePremium, deleteItem, editSalary} from '../../actions';
import './employees-list.css';

const EmployeesList = ({data, filter, switcher, togglePremium, deleteItem, editSalary}) => {
    let items = [];

    if (switcher) {
        items = createItems(filter, togglePremium, deleteItem, editSalary)
    } else { 
        items = createItems(data, togglePremium, deleteItem, editSalary)
    }

    return <View items={items}/>
}

function createItems (data, togglePremium, deleteItem, editSalary) {
    return data.map(item => <EmployeesListItem key={item.id} editSalary={editSalary} 
                                               deleteItem={deleteItem} togglePremium={togglePremium} 
                                               item={item}/>)
}

function View ({items}) {
    return (
        <ul className="app-list list-group">
            {items}
        </ul>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state.data,
        filter: state.filter,
        switcher: state.switcher
    }
}

const mapDispathToProps = {
    togglePremium, 
    deleteItem,
    editSalary
}

export default connect(mapStateToProps, mapDispathToProps)(EmployeesList);