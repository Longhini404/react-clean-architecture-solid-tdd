import React, { forwardRef } from 'react'
import {
  Select as ChackraSelect,
  SelectProps as ChackraSelectProps,
  Box,
} from '@chakra-ui/react'
import { FormFactory } from 'components/form'
import { InputError } from 'components/input'

type SelectOption = {
  id: string | number
  value: string | number
}

export type SelectProps = ChackraSelectProps & {
  name: string
  options: SelectOption[]
  error: string
  aditionalReturn?: boolean
  label: string
}

const SelectElement = forwardRef<HTMLSelectElement, SelectProps>(
  (
    { name, error, options, defaultValue = false, aditionalReturn, ...props },
    ref
  ) => {
    const optionsToRender = (opt: SelectOption) => {
      if (!aditionalReturn) {
        return (
          <option key={opt.id} value={opt.id}>
            {opt.value}
          </option>
        )
      }
      return (
        <option key={opt.id} value={JSON.stringify(opt)}>
          {opt.value}
        </option>
      )
    }
    return (
      <>
        <ChackraSelect
          mb="0"
          id={name}
          ref={ref}
          name={name}
          onChange={props.onChange}
          bgColor="gray.800"
          border="black"
          isDisabled={props.isDisabled}
          {...props}
        >
          {defaultValue && <option value="">-- Select one --</option>}
          {options.map(option => optionsToRender(option))}
        </ChackraSelect>
        {error ? <InputError>{error}</InputError> : <Box h="1.625rem" mt="0" />}
      </>
    )
  }
)

SelectElement.displayName = 'SelectElement'

export const Select = FormFactory(SelectElement, 'Select')

export default Select
