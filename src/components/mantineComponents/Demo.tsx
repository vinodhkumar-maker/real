import { Switch, useMantineColorScheme } from '@mantine/core';

const Demo: React.FC = () => {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  return (
    <div className="absolute top-0 right-0 p-4 transition-all duration-300">
      <Switch
        checked={colorScheme === 'dark'}
        onChange={(event) => setColorScheme(event.currentTarget.checked ? 'dark' : 'light')}
        className="transition-all duration-600 ease-in-out"
      />
    </div>
  );
};

export default Demo;
