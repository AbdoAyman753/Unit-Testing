/* eslint-disable jest/valid-expect */
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("renders learn react link", async () => {
	render(<App />);
	const btnEl = screen.getByText(/Get advice/i);
	userEvent.click( btnEl);

	await waitFor(() => {
		expect(screen.getByText(/You have read 1 pieces of advice/i)).toBeInTheDocument();
	});
	
	// const linkElement = screen.getByText(/learn react/i);
	// expect(linkElement).toBeInTheDocument();
});
