
const getStoreReadList = () => {
    const storedListStr = localStorage.getItem('read-books');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList
    } else {
        return [];
    }
}

const addToLocalStorage = (id) => {
    const storedList = getStoreReadList();
    if (storedList.includes(id)) {
        return
    }
    else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-books', storedListStr)
    }
}
const getStoreWishList = () => {
    const storedListStr = localStorage.getItem('wish-books');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList
    } else {
        return [];
    }
}

const addToLocalStorageWishList = (id) => {
    const storedList = getStoreWishList();
    if (storedList.includes(id)) {
        return
    }
    else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('wish-books', storedListStr)
    }
}

export { addToLocalStorage, getStoreReadList, getStoreWishList, addToLocalStorageWishList }