import React from 'react';
import { render, fireEvent, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom';
import Projects from './index';
import type { Config } from "jest";

const config: Config = {
    testEnvironment: "jsdom",
    testEnvironmentOptions: {
      customExportConditions: ["react-native"],
    },
  };

export default config;

describe('Projects component', () => {
    it('renders correctly', () => {
        const { getByText } = render (<Projects/>)

        expect(getByText('MEUS PROJETOS')).toBeInTheDocument(); // titulo 

        expect(getByText('TUDO')).toBeInTheDocument(); // botao 1
        expect(getByText('GITHUB')).toBeInTheDocument(); // botao 2
        expect(getByText('FIGMA')).toBeInTheDocument(); // botao 3

        fireEvent.click(getByText('TUDO')); // Simula o clique no botao "TUDO"
    });
})
