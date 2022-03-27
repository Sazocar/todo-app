import { createGlobalStyle} from "styled-components";


const GlobalStyles = createGlobalStyle`
	body {
		background: ${({ theme }) => theme.body};
		color: ${({ theme }) => theme.text};
		transition: all 0.50s linear;
	}

	.TodoCounter {
		color: ${({ theme }) => theme.subtitle};
	}

	.input {
		background-color: ${({ theme }) => theme.searchBar};
	}

	li:hover {
		background-color: ${({ theme }) => theme.hoverBackground};
	}

	@media (max-width: 425px) {
    li:hover, li:active{
        background-color: ${({ theme }) => theme.hoverBackground};
    }
	}

	.addTask-form {
		background-color: ${({ theme }) => theme.formBackground};
	}
	
	.addTask-textarea {
		background-color: ${({ theme }) => theme.textBackground};	
		color: ${({ theme }) => theme.text};
	}

	.form-toDelete {
		background-color: ${({ theme }) => theme.formBackground}
	}

	.delete-text {
		color: ${({ theme }) => theme.text};
	}

	.subtitle {
		color: ${({ theme }) => theme.subtitle};
	}

	.state-text {
		color: ${({ theme }) => theme.text};
	}

	.task-completed {
		text-decoration-color: ${({ theme }) => theme.text};
	}

`

export { GlobalStyles };