import './employees-add-form.css';
import {connect} from 'react-redux';
import {addItem} from '../../actions';

const EmployeesAddForm = ({addItem}) => {
    return (
        <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form onSubmit={(e) => postForm(e, addItem)}
                className="add-form d-flex">
                <input type="text"
                       name="name"
                       className="form-control new-post-label"
                       placeholder="Как его зовут?" />
                <input type="number"
                       name="salary"
                       className="form-control new-post-label"
                       placeholder="З/П в $?" />
                <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
            </form>
        </div>
    )
}

function postForm(e, addElement) {
    e.preventDefault();
    const form = document.querySelector('form');
    const formData = new FormData(form);
    addElement({name: formData.get("name"), salary: formData.get("salary")});
    form.reset();
}

const mapStateToProps = (state) => {
    return {data: state.data}
}

export default connect(mapStateToProps,{addItem})(EmployeesAddForm);