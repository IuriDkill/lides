interface modalAction {
    type: 'changeModal';
    payload: {
        name: string;
    };
}

const initialState: {name: string} = {
    name: ''
};

export default function ModalReducer(PrevState = initialState, action: modalAction){
    switch (action.type) {
        case 'changeModal':
            return{
                name: action.payload.name
            };
        default:
            return PrevState;
    }
}