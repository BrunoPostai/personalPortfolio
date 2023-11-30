import HeadTitle from ".";
import { render, getByText } from "@testing-library/react";

import type { Config } from "jest";

const config: Config = {
  testEnvironment: "jsdom",
  testEnvironmentOptions: {
    customExportConditions: ["react-native"],
  },
};

export default config;

describe("HeadTitle", () => {
  it("should render the text passed to it", () => {
    //um exemplo que sempre vai funcionar cria uma div e vê se ela existe, meramente ilustrativo
    const element = document.createElement("div");
    expect(element).not.toBeNull();


    //começo do test de verdade

    const text = "texto a ser testado";
    const { getByText } = render(<HeadTitle title={text} />);//renderizo o meu componente e passo um texto pra ele

    // Verifique se o texto é renderizado corretamente no componente
    const textElement = getByText(text);
    expect(textElement).toBeTruthy();
  });
});
