const initialState = {
    data: [
        {name: "Джон Смитт",  salary: "1000", id: 1, premium: false},
        {name: "Александр Сидоров", salary: "1000", id: 2, premium: false},
        {name: "Иван Иванов", salary: "1000", id: 3, premium: false}
    ],
    countPremium: 0,
    countRich: 0,
    filter: [],
    switcher: false
};

const currentElementsReducer = (state = initialState, action) => {
    const id = action.idItem;
    const indexInData = state.data.findIndex(item => item.id === id);
    const element = state.data[indexInData];
    switch (action.type) {
        case 'PREMIUM':
            element.premium = !state.data[indexInData].premium;
            const countPremium = element.premium? state.countPremium + 1: state.countPremium - 1;
            return {
                ...state,
                countPremium: countPremium,
                data: [...state.data.slice(0, indexInData), element, ...state.data.slice(indexInData+1)]
            }

        case 'DELETE_ITEM':
            const indexInFilter = state.filter.findIndex(item => item.id === id);
            if (element.premium) {
                return {
                    ...state,
                    countPremium: state.countPremium - 1,
                    filter: [...state.filter.slice(0, indexInFilter), ...state.filter.slice(indexInFilter+1)],
                    data: [...state.data.slice(0, indexInData), ...state.data.slice(indexInData+1)]
                }
            }
            if (state.countRich) {
                return {
                    ...state,
                    countRich: state.countRich - 1,
                    filter: [...state.filter.slice(0, indexInFilter), ...state.filter.slice(indexInFilter+1)],
                    data: [...state.data.slice(0, indexInData), ...state.data.slice(indexInData+1)]
                }
            }
            return {
                ...state,
                data: [...state.data.slice(0, indexInData), ...state.data.slice(indexInData+1)]
            }
        case 'ADD_ITEM':
            const data = action.payload;
            const arrId = state.data.map(el => el.id);
            data["id"] = Math.max(...arrId) + 1;
            return {
                ...state,
                data: [...state.data, data]
            }
        case 'EDIT_SALARY':
            element.salary = action.payload;
            return {
                ...state,
                data: [...state.data.slice(0, indexInData), element, ...state.data.slice(indexInData+1)]
            }
        case 'FIND_ITEM':
            const value = action.payload;
            if (!value) {
                return {
                    ...state,
                    filter: [],
                    switcher: false
                }
            }
            const arrItems = state.data.filter(item => new RegExp(value).test(item.name));
            return {
                ...state,
                filter: [...arrItems],
                switcher: true
            }
        case 'FILTER_PREMIUM':
            if (action.payload === 1) {
                const arrPremium = state.data.filter(item => item.premium);
                return {
                    ...state,
                    filter: [...arrPremium],
                    switcher: true
                }
            } else if (action.payload === 2) {
                const arrPremium = state.data.filter(item => item.salary > 1000);
                return {
                    ...state,
                    filter: [...arrPremium],
                    countRich: arrPremium.length,
                    switcher: true
                }
            }
            return {
                ...state,
                filter: [],
                switcher: false
            }
            
        default: return state;
    }
}

const reducers = currentElementsReducer;
export default reducers;