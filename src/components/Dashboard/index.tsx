import React from 'react'
import Summary from '../Summary'
import TransactionTable from '../TransactionsTable'
import { Container } from './styles'

export default function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransactionTable />
    </Container>
  )
}
