export const increment = () => {
    return {
        type: 'INCREMENT',
        by: 2
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENT',
        by: 2
    }
}

export const reset = () => {
    return {
        type: 'RESET'
    }
}