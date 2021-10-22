import "./app-filter.css";
import {connect} from 'react-redux';
import {filterPremium} from '../../actions';

const AppFilter = ({filterPremium}) => {
    
    return (
        <div className="btn-group">
            <button onClick={() => {
                toggleButtons(0);
                filterPremium(0);
            }}
                    type="button"
                    className="btn btn-light">
                    Все сотрудники
            </button>
            <button onClick={() => {
                toggleButtons(1);
                filterPremium(1);
            }}
                    type="button"
                    className="btn btn-outline-light">
                    На повышение
            </button>
            <button onClick={() => {
                toggleButtons(2);
                filterPremium(2);
            }}
                    type="button"
                    className="btn btn-outline-light">
                    З/П больше 1000$
            </button>
        </div>
    )
}

function toggleButtons(id) {
    const classActive = "btn-light",
          notClassActive = "btn-outline-light";
    
    const buttons = document.querySelectorAll('.btn-group > button');
    buttons.forEach(button => {
        button.classList.remove(classActive);
        button.classList.add(notClassActive);
    });
    buttons[id].classList.remove(notClassActive);
    buttons[id].classList.add(classActive);
}

const mapStateToProps = (state) => {
    return {
        filter: state.filter,
        switcher: state.switcher
    }
}

export default connect(mapStateToProps, {filterPremium})(AppFilter);