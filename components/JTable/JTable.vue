<template>
  <table>
    <thead>
      <tr>
        <th
            v-for="(label, index) in header"
            :key="index"
        >
          {{ label }}
        </th>
      </tr>
    </thead>
    <JTableRow
        v-for="(values, index) in items"
        :key="index"
        :values="values"
    />
    <tfoot>
      <tr>
        <td>
          some footer text
        </td>
      </tr>
    </tfoot>
  </table>
</template>

<script>
import JTableRow from '@ksteinmiller/j-table-row/JTableRow'
export default {
  name: 'JTable',
  props: {
    items: {
      type: Array,
      required: true
    },
    header: {
      type: Array
    },
  },
  components: {
    JTableRow
  }
}
</script>

<style>
th {
  text-align: left;
  padding: 8px;
  font-size: 13px;
  color: #8d8d92;
}
</style>