import { mergeTypes } from 'merge-graphql-schemas'

import * as inputs from './inputs.gql'
import * as operations from './operations.gql'
import * as types from './types.gql'

const storageSchema = mergeTypes( [
	inputs,
	operations,
	types,
] )

export default storageSchema