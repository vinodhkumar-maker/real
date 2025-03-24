import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../slice/store';
import ZenButton from '../button/ZenButton';
// import InputText from '../input/TextInputMantaine'
// import ZenButton from '../button/ZenButton'

// interface UserInfoType {
//     product: ProductInfo | [],
//     loading: boolean,
//     error: string
// }

const UserInfo: React.FC = () => {
  const { product, loading, error } = useSelector((state: RootState) => state.product);
  console.log(loading);
  console.log('data', product);
  console.log(error);
  return (
    <div className=" w-full h-screen">
      <div className="flex items-center px-6 py-2 my-6">
        {product.map((p) => (
          <div className=" flex gap-6" key={p.id}>
            <div className=" bg-white max-w-2xs">
              <p>{p.title}</p>
              <ZenButton label="Add" variant="primary" textSize="sm" />
              <ZenButton label="Remove" variant="danger" textSize="sm" />
            </div>
            <div className=" flex flex-col items-center">
              <p>title</p>
              <span>price</span>
              <span>category</span>
              <span>description</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserInfo;
