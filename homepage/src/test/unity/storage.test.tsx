import { changeLocalStorage, createLocalStorage, getAllLocalStorage, getLocalStorage, removeLocalStorage } from "../../services/storage"

describe('storage', () => {
    const mockSetItem = jest.spyOn(Storage.prototype, 'setItem')
    const mockGetItem = jest.spyOn(Storage.prototype, 'getItem')
    const mockRemoveItem = jest.spyOn(Storage.prototype, 'removeItem')
    it('should return an object with isLoggedIn key', () => {        
        getLocalStorage('isLoggedIn')
        expect(mockGetItem).toHaveBeenCalledWith('isLoggedIn')
    })
    it('should create local storate with isLoggedIn', () => {
        createLocalStorage()
        expect(mockSetItem).toHaveBeenCalledWith('isLoggedIn', "false")
    })
    it('should change local storate object key', () => {
        changeLocalStorage('isLoggedIn', true)
        expect(mockSetItem).toHaveBeenCalledWith('isLoggedIn', "true")
    })
    it('should remove an object from local storage', () => {
        removeLocalStorage('isLoggedIn')
        expect(mockRemoveItem).toHaveBeenCalledWith('isLoggedIn')
    })    
})