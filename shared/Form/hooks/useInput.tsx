import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'

type Value = { [key: string]: string }
interface IUseInput {
	value?: Value
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void
	setValue?: Dispatch<SetStateAction<undefined>>
}

export const useInput = () => {
	const [value, setValue] = useState<Value>({})

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target
		setValue((prevState: Value) => ({ ...prevState, [name]: value }))
	}

	return { value, onChange, setValue }
}
