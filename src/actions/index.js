const togglePremium = (id) => {
    return {
        type: 'PREMIUM',
        idItem: id
    }
}
const deleteItem = (id) => {
    return {
        type: 'DELETE_ITEM', 
        idItem: id
    }
}

const addItem = (data) => {
    return {
        type: 'ADD_ITEM', 
        payload: data
    }
}

const editSalary = (id, value) => {
    return {
        type: 'EDIT_SALARY',
        idItem: id,
        payload: value
    }
}

const findItem = (value) => {
    return {
        type: 'FIND_ITEM',
        payload: value
    }
}

const filterPremium = (trigger) => {
    return {
        type: 'FILTER_PREMIUM',
        payload: trigger
    }
}

export {
    togglePremium,
    deleteItem,
    addItem,
    editSalary,
    findItem,
    filterPremium
}