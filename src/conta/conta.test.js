import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Conta from "./Conta";

describe("componente de conta", () => {
  it("Exibir saldo corretamente", () => {
    render(<Conta saldo={1000} />);
    const saldo = screen.getByTestId("saldo-conta");
    expect(saldo.textContent).toBe("R$ 1000");
  });

  it("chama função correta ao clicar no botao", () => {
    const frealizarTransacao = jest.fn();

    render(<Conta saldo={1000} realizarTransacao={frealizarTransacao} />);
    fireEvent.click(screen.getByText("Realizar operação"));
    expect(frealizarTransacao).toHaveBeenCalled();
  });
});
