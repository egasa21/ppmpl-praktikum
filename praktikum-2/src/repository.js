class Repository {
    constructor() {
        this.data = [
            { id: 1, name: 'Item 1' },
            { id: 1, name: 'Item 2' },
        ];
    }

    getAllItems() {
        return this.data;
    }

    getItemById(id) {
        return this.data.find(item => item.id === id);
    }

    addItem(item) {
        this.data.push(item)
        return item;
    }
    removeItemById(id) {
        const index = this.data.findIndex(item => item.id === id);
        if (index !== -1) {
            const removedItem = this.data.splice(index, 1)[0]; // Remove item and return it
            return removedItem;
        }
        return null;
    }

}

module.exports = Repository;