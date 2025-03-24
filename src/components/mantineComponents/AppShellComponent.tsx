import { AppShell, AppShellFooter, Burger, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const AppShellComponent: React.FC = () => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <div>
      <AppShell
        header={{
          height: 60,
        }}
        navbar={{
          width: 300,
          breakpoint: 'sm',
          collapsed: { mobile: !opened },
        }}
        footer={{
          height: 60,
        }}
        padding="md"
      >
        <AppShell.Header bg={'blue'} p="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Text span>Header</Text>
        </AppShell.Header>

        <AppShell.Navbar p="md" bg={'red'}>
          Navbar
        </AppShell.Navbar>

        <AppShell.Main bg={'orange'}>Main</AppShell.Main>
        <AppShellFooter p="md" bg={'green'}>
          Footer
        </AppShellFooter>
      </AppShell>
    </div>
  );
};

export default AppShellComponent;
