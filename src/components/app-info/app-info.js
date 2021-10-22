import "./app-info.css";
import {connect} from 'react-redux';

const AppInfo = ({data, count}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {data.length}</h2>
            <h2>Премию получат: {count}</h2>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state.data, 
        count: state.countPremium
    }
}

export default connect(mapStateToProps)(AppInfo);