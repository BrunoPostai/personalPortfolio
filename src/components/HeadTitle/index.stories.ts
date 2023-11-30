import type { Meta, StoryObj } from '@storybook/react';
import HeadTitle from '.';


// Mais informações sobre: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: '/Componentes-Bruno/HeaderTitle',//Caminho para encontrar o componente na seção da esquerda no site
  component: HeadTitle,
  parameters: {
    layout: 'centered',//Opcional: centraliza o componente na hora de mostrar ele no site do storybook
  },
  tags: ['autodocs'],// uma espécie de doc automática que ele gera
  argTypes: {
    title: { title: 'title' },
  },
} satisfies Meta<typeof HeadTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    title: 'secondary',
  },
};

