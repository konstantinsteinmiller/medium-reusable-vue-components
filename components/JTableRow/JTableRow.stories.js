import { storiesOf } from '@storybook/vue'
import JTableRow from './JTableRow'

storiesOf('JTableRow', module)
  .add('with 4 values', () => ({
    components: { JTableRow },
    template:
      `
      <JTableRow
        :values="values"
      />
    `,
    data: () => ({
      values: [
        'José Silva',
        'email@email.com',
        'test@email.com',
        'suppi@email.com'
      ]
    })
  }))