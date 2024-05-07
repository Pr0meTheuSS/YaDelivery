import { compose } from 'recompose'
import { graphql } from 'react-apollo'

import { registerUserMutation } from './Mutation'

export default compose(graphql(registerUserMutation));