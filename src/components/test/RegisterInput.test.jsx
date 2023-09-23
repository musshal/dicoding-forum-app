/**
 * flow testing register component
 *
 * - RegisterInput component
 *   - return should handle username typing correctly
 *   - return should handle email typing correctly
 *   - return should handle password typing correctly
 *   - return should call register function when register button is clicked
 */

import React from 'react';
import {
  describe,
  it,
  expect,
  afterEach,
  vi,
} from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import RegisterInput from '../RegisterInput';

expect.extend(matchers);

describe('Register Input component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle username typing correctly', async () => {
    // Arrange
    render(<RegisterInput register={() => {}} />);
    const usernameInput = await screen.getByPlaceholderText('Name');
    // Action
    await userEvent.type(usernameInput, 'amilki');
    // Assert
    expect(usernameInput).toHaveValue('amilki');
  });
  it('should handle email typing correctly', async () => {
    // Arrange
    render(<RegisterInput register={() => {}} />);
    const emailInput = await screen.getByPlaceholderText('Email');
    // Action
    await userEvent.type(emailInput, 'amilki');
    // Assert
    expect(emailInput).toHaveValue('amilki');
  });

  it('should handle password typing correctly', async () => {
    // Arrange
    render(<RegisterInput register={() => {}} />);
    const passwordInput = await screen.getByPlaceholderText('Password');
    // Action
    await userEvent.type(passwordInput, 'passwordtest');
    // Assert
    expect(passwordInput).toHaveValue('passwordtest');
  });

  it('should call register function when register button is clicked', async () => {
    // Arrange
    const mockRegister = vi.fn();
    render(<RegisterInput register={mockRegister} />);
    const usernameInput = await screen.getByPlaceholderText('Name');
    await userEvent.type(usernameInput, 'amilki');
    const emailInput = await screen.getByPlaceholderText('Email');
    await userEvent.type(emailInput, 'amilki');
    const passwordInput = await screen.getByPlaceholderText('Password');
    await userEvent.type(passwordInput, 'passwordtest');
    const registerButton = await screen.getByRole('button', {
      name: 'Register',
    });
    // Action
    await userEvent.click(registerButton);
    // Assert
    expect(mockRegister).toBeCalledWith({
      name: 'amilki',
      email: 'amilki',
      password: 'passwordtest',
    });
  });
});
