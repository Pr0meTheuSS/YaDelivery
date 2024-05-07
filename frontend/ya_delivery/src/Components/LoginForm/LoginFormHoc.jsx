import { compose } from 'recompose'
import { graphql } from 'react-apollo'

import { loginUserMutation } from './Mutation'

export default compose(graphql(loginUserMutation));