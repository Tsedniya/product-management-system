import type {Product} from "../../types/product";  

interface ProductState{
    product:Product[];
    loading:boolean;
    error:String | null;
}

const initialState: ProductState = {
    product:[],
    loading:false,
    error:null,
};

const productReducer = (state = initialState, action:any):ProductState => { switch (action.type){
    case "FETCH_PRODUCTS":
        return{
            ...state,
            loading:true,
            error:null,
        };
        case "FETCH_PRODUCTS_SUCCESS":
            return{
                ...state,
                loading:false,
                product:action.payload,
            };
        case "FETCH_PRODUCTS_FAILURE":
            return{
                ...state,
                loading:false,
                error:action.payload,
            };
        default:
            return state;
        }
};

export default productReducer;