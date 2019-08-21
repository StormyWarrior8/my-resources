import React from 'react'

const DataAdder = ({data}) => (
  <>
    <p>add data to:</p>
    <ul>
      {
        data.items.map(
          (item, i) => (
            <li key={i}>{item.title}</li>
          )
        )
      }
    </ul>
  </>
)

export default DataAdder