import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { SignInContainer } from '../../components/SignIn';

describe('SignIn', () => {
	describe('SignInContainer', () => {
		it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
			// render the SignInContainer component, fill the text inputs and press the submit button
			const signInFunction = jest.fn();
			const { getByPlaceholderText, getByText } = render(
				<SignInContainer signIn={signInFunction} />
			);

			fireEvent.changeText(getByPlaceholderText('Username'), 'kalle');
			fireEvent.changeText(getByPlaceholderText('Password'), 'password');
			fireEvent.press(getByText('Sign in'));

			await waitFor(() => {
				expect(signInFunction).toHaveBeenCalledTimes(1);

				expect(signInFunction.mock.calls[0][0]).toEqual({
					username: 'kalle',
					password: 'password',
				});
			});
		});
	});
});