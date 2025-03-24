export interface Product {
  id: number;
  title: string;
  price?: number;
  category?: string;
  description?: string;
  image?: string;
}

export type ProductArray = Product[];

export interface CartTypes {
  id: string;
  userId: string;
  date: string;
  products: [];
}

export type CartArray = CartTypes[];

export interface UserAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

export interface UserCompany {
  companyName: string;
  catchPhrase: string;
}

export interface UserDetail {
  id?: number;
  name?: string;
  info?: string;
  email?: string;
  address?: UserAddress;
  phone?: string;
  website?: string;
  company?: UserCompany;
}

export interface UserInformation {
  id: number;
  name: string;
  info: string;
  email: string;
  address: UserAddress;
  phone: string;
  website: string;
  company: UserCompany;
}

export const userData: UserInformation[] = [
  {
    id: 1,
    name: 'Leanne Graham',
    info: 'Bret',
    email: 'Sincere@april.bizwdbdsdjsbdsbjddbj',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
    },
    phone: '1-770-736-8031',
    website: 'hildegard.org',
    company: {
      companyName: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
    },
  },
  {
    id: 2,
    name: 'Emily Watson',
    info: 'EmWat',
    email: 'emily.watson@samplemail.com',
    address: {
      street: 'Maple Avenue',
      suite: 'Floor 3',
      city: 'Riverdale',
      zipcode: '54321-9876',
    },
    phone: '555-987-6543',
    website: 'emilywatson.dev',
    company: {
      companyName: 'Bright Ideas Ltd.',
      catchPhrase: 'Turning concepts into reality',
    },
  },

  {
    id: 3,
    name: 'Sophia Lee',
    info: 'SophLee',
    email: 'sophia.lee@corporate.com',
    address: {
      street: 'Oakwood Blvd',
      suite: 'Penthouse 1B',
      city: 'Greenville',
      zipcode: '77889-6655',
    },
    phone: '555-765-4321',
    website: 'sophialee.org',
    company: {
      companyName: 'NextGen Solutions',
      catchPhrase: 'Solutions that move you forward',
    },
  },
  {
    id: 4,
    name: 'Michael Smith',
    info: 'MikeS',
    email: 'mike.smith@domain.com',
    address: {
      street: 'Cedar Lane',
      suite: 'Block A-12',
      city: 'Lakeview',
      zipcode: '11223-4455',
    },
    phone: '555-321-7890',
    website: 'mikesmith.io',
    company: {
      companyName: 'SkyNet Technologies',
      catchPhrase: 'Connecting people and machines',
    },
  },
];
