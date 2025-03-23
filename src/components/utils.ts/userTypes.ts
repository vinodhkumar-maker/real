
 export interface ProductInfo {
    id: number,
    title: string;
    price: string;
    category: string;
    description: string;
    image: string
}

 export const getRandomColor = () => {
    const colors = ["red", "blue", "green", "yellow", "orange", "cyan", "pink", "teal", "grape", "lime"];
    return colors[Math.floor(Math.random() * colors.length)];
};