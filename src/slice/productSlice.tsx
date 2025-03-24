import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PructStatus } from '../components/utils.ts/userEnums';
import { ProductInfo } from '../components/utils.ts/userTypes';

interface ProductState {
  product: ProductInfo[];
  loading: boolean | null;
  error: string | null;
  status: PructStatus | null;
}
const initialState: ProductState = {
  product: [],
  loading: false,
  error: null,
  status: null,
};

const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductData.fulfilled, (state, action) => {
        state.loading = true;
        state.product = action.payload;
      })
      .addCase(fetchProductData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default ProductSlice.reducer;

const url = 'https://fakestoreapi.com/products?limit=5';

export const fetchProductData = createAsyncThunk<ProductInfo[]>(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error('Failed to fetch products');
      }

      const data: ProductInfo[] = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);

// const fetchDataProuct = async () => {
//     const url = "https://fakestoreapi.com/products?limit=5"
//     const res = await fetch(url)
//     console.log('res', res.body)
//     console.log('data', await res.json())

// }
