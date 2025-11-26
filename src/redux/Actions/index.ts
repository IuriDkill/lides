export function changeModal(modal: string){
    return{
        type: 'changeModal',
        info: "changeModal",
        payload: {
            name: modal
        }
    }
}